import Link from "next/link"

interface NavButtonProps {
    buttonName: string,
    link: string
}

export function NavButton({buttonName, link}: NavButtonProps) {
    return (
        <div>
        <Link href={link}>
            <button className="mt-5 md:mb-5 sm:mb-2 outline outline-offset-4 outline-blue-300/50 font-extrabold tracking-widest hover:tracking-tight bg-blue-200 dark:bg-blue-400 hover:bg-blue-300 dark:hover:bg-blue-300 transition-all ease-in-out duration-200 md:px-10 md:py-5 sm:px-4 sm:py-2 rounded-full">
                <div className="flex text-white">
                <p className="md:text-lg sm:text-sm">{buttonName.toUpperCase()}</p>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </div>
            </button>
        </Link>
        </div>
    )
}

interface OutgoingLinkProps {
    linkText: string,
    link: string
}

/* Anchor tag that always opens the link in a new tab and has special styling */
/* Used for external links, links that go OUTSIDE of the website */
export function OutgoingLink({linkText, link}: OutgoingLinkProps) {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer'
        className="font-bold text-pink-300 hover:text-pink-500 dark:hover:text-purple-400 transition-all ease-in-out duration-200">
            {linkText}
        </a>
    )
}