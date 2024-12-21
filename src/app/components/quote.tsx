// File system library from Node.js is used to read files
import { promises as fs } from 'fs';

/* 
Refer to Vercel's official documentation for working with JSON in NextJS:
https://vercel.com/guides/loading-static-file-nextjs-api-route
*/

// Server component securely fetches data from JSON file as it is rendered entirely on the server and not the client
// async -> function returns a Promise
export default async function RandomQuote() {
    // Read the file as a UTF-8 encoded text file
    // process.cwd function gets the current working directory
    // await -> function waits for a Promise
    const file = await fs.readFile(process.cwd() + '/public/files/quotes.json', 'utf8');
    // Parse the file's contents
    const data = JSON.parse(file);
    // Get length of the JSON array so that index bound for random number generator can be determined
    const len = data.length;
    // By default, Math.random() returns a number x where 0 <= x < 1
    // Floor function is needed to ensure that the generated number is a valid JSON array index and not a floating point number or out of bounds
    let index = Math.floor(Math.random() * len);
    let randQuote = data[index];

    return (
        <p className='text-lg text-center text-pink-500 dark:text-pink-300 font-bold mb-5'>"{randQuote.quote}" - {randQuote.attribution}</p>
    )
}
