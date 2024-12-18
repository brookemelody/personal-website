import { Metadata } from "next";
import Wrapper from "../components/wrapper";
import { NavButton, OutgoingLink } from "../components/nav";

export const metadata: Metadata = {
    title: "Resume"
};

export default function Resume() {
    return (
        <>
        <Wrapper>
            <h1 className="text-2xl"><b>RESUME</b></h1>
            <div className="flex justify-center gap-5 mt-3">
                    <NavButton buttonName="home" link="/"/>
                    <NavButton buttonName="download pdf copy" link="/files/resume.pdf" />
            </div>
            <div className="flex flex-col">
                <details open>
                    <summary className="md:text-xl sm:text-lg text-pink-500 dark:text-pink-400"><u className="text-pink-500 dark:text-pink-400">Objective</u></summary>
                    <p>A current sophomore student majoring in Computer Science and seeking an internship or co-op opportunity starting
                    Summer 2025 in software engineering or full-stack development.</p>
                </details>
                <details open>
                    <summary className="md:text-xl sm:text-lg text-pink-500 dark:text-pink-400"><u className="text-pink-500 dark:text-pink-400">Education</u></summary>
                    <p><b>North Carolina State University</b> (Expected graduation December 2026), GPA: 4.00
                        <br></br>Major: Computer Science, Bachelor of Science (B.S.)
                        <br></br>Courses: CSC 316 (Data Structures & Algorithms), CSC 230 (C & Software Tools), CSC 216 (Software Development Fundamentals), CSC 226 (Discrete Mathematics)</p>
                </details>
                <details open>
                    <summary className="md:text-xl sm:text-lg text-pink-500 dark:text-pink-400"><u className="text-pink-500 dark:text-pink-400">Skills</u></summary>
                    <p><b>Programming Languages:</b> Java, C, C#, JavaScript, TypeScript, SQL, Python, Ruby
                    <br></br><b>Web Technologies:</b> Ruby on Rails, Next.js, React.js, HTML, CSS
                    <br></br><b>Concepts:</b> Test-driven development, Supervised Machine Learning & Linear Regression, Statistical data analysis, Qualitative data analysis
                    <br></br><b>Operating Systems:</b> Linux, Windows, MacOS, Android
                    <br></br><b>Software & Tools:</b> Git, Jenkins, Docker, Microsoft Office Suite, Adobe Creative Cloud</p>
                </details>
                <details open>
                    <summary className="md:text-xl sm:text-lg text-pink-500 dark:text-pink-400"><u className="text-pink-500 dark:text-pink-400">Experience</u></summary>
                        <details open>
                            <summary className="md:text-lg sm:text-md"><b>Computer Science Department at North Carolina State University</b> (June 2024 - August 2024), Research Assistant</summary>
                            <ul className="list-disc">
                            <li>Conducted qualitative data analysis on recording transcripts</li>
                            <li>Analyzed the use of artificial intelligence and educational technology in classrooms</li>
                            <li>Evaluated how educational usage of AI, software, and web tools compare between STEM and non-STEM classes</li>
                            </ul>
                        Skills Used: Qualitative data analysis, Microsoft Excel
                        </details>
                        <details open>
                            <summary className="md:text-lg sm:text-md"><b>Computer Science Department at North Carolina State University</b> (January 2024 - May 2024), Research Assistant</summary>
                            <ul className="list-disc">
                            <li>Analyzed distribution of student interactions when using the traditional pair programming technique versus the alternate puzzle technique</li>
                            <li>Categorized data using a tagging system based on different types of interactions</li>
                            <li>Explored encouraging equity in computer science education</li>
                            </ul>
                        Skills Used: Qualitative data analysis, Microsoft Excel, AirTable, LaTeX
                        </details>
                        <details open>
                            <summary className="md:text-lg sm:text-md"><b>Panera Bread</b> (June 2023 - August 2023), Cashier</summary>
                            <ul className="list-disc">
                            <li>Communicated effectively to ensure a quality experience for customers</li>
                            <li>Assisted customers in using technology in the restaurant such as the kiosks</li>
                            <li>Maintained standard protocol for closing the location during closing shifts</li>
                            </ul>
                        Skills Used: Customer service, teamwork
                        </details>
                        <details open>
                            <summary className="md:text-lg sm:text-md"><b>Laber Labs</b> (May 2022 - June 2022), Research Intern</summary>
                            <ul className="list-disc">
                            <li>Researched applications of statistical analysis for marketing research</li>
                            <li>Designed a section of the <OutgoingLink linkText="Alternative Stats web project" link="https://laber-labs.com/pages/altstats.html"/></li>
                            <li>Designed levels for <OutgoingLink linkText="Zombies on Treadmills" link="https://laber-labs.com/pages/zombiesontreadmills.html"/>, a browser game made in Unity</li>
                            </ul>
                        Skills Used: R programming, Unity
                        </details>   
                </details>
                <details open>
                    <summary className="md:text-xl sm:text-lg text-pink-500 dark:text-pink-400"><u className="text-pink-500 dark:text-pink-400">Honors and Activities</u></summary>
                        <b className="md:text-lg sm:text-md">{`North Carolina State University Dean's List`}</b> (All previous semesters)
                        <details open>
                            <summary className="md:text-lg sm:text-md"><b>North Carolina State University Theater Department</b> (August 2023 - December 2023), Volunteer, Costume Shop</summary>
                            <ul className="list-disc">
                            <li>Designed and sewed costumes for productions of the Fall 2023 season</li>
                            <li>{`Organized the department's expansive costume collection for the annual thrift store event`}</li>
                            <li>Took promotional photographs of costumes to be published in advertisements</li>
                            </ul>
                        Skills Used: Communication, organization, advertising
                        </details>        
                </details>
            </div>
        </Wrapper>
        </>
    )
}