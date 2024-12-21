// RandomQuote component needs to be rendered on client side so that it can randomly generate each time the user refreshes the page
// Rendering statically on server side will pre-generate random numbers and therefore the same quote will always appear on each page until next build
"use client"
import { useState, useEffect } from "react";

// Internal JSON object declared and defined within TypeScript file
const quotes = [
    {
        "quote": "Omnia Vincit Amor (Love conquers all)",
        "attribution": "Virgil, Eclogue 10, c.e. 37 BC"
    },
    {
        "quote": "Linger a while, thou art so fair!",
        "attribution": "Johann Wolfgang von Goethe, Faust: A Tragedy, 1808"
    },
    {
        "quote": "Learn the rules like a pro, so you can break them like an artist",
        "attribution": "Pablo Picasso"
    },
    {
        "quote": "A 2D girl living in a 3D world!",
        "attribution": "Pixel Chix tagline, Mattel, 2005"
    },
    {
        "quote": "You're like a kitten! A kitten that doesn't speak Japanese!",
        "attribution": "Juliet Starling, Lollipop Chainsaw (2012, PS3/Xbox 360)"
    }
]

export default function RandomQuote() {
    const [mounted, setMounted] = useState(false);
    // Avoid hydration error by using React's useEffect hook to sync client component with the server
    // Setup code sets mounted state to true when the component is mounted to the page
    useEffect(() => {
        setMounted(true)
    }, [])

    // Return null if the component was not mounted successfully
    if (!mounted) {
        return null
    }

    // Get length of the JSON array so that index bound for random number generator can be determined
    const len = quotes.length;
    // By default, Math.random() returns a number x where 0 <= x < 1
    // Floor function is needed to ensure that the generated number is a valid JSON array index and not a floating point number or out of bounds
    const index = Math.floor(Math.random() * len);
    const randQuote = quotes[index];

    return (
        <p className='text-lg text-center text-pink-500 dark:text-pink-300 font-bold mb-5'>{`"`}{randQuote.quote}{`"`} - {randQuote.attribution}</p>
    )
}
