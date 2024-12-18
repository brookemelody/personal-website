import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface ThemeProps {
    theme: string | undefined;
}

function ThemeIcon({theme}: ThemeProps) {
    if (theme === 'light') {
        return (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="45"  height="45"  viewBox="0 0 24 24"  fill="currentColor" className="transition ease-out delay-150 hover:fill-pink-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" /><path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" /><path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" /><path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" /></svg>
        )
    }
    else if (theme === 'dark') {
        return (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="currentColor" className="transition ease-out delay-150 hover:fill-pink-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" /></svg>
        )
    }
}

export const Toggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Avoid hydration error
    // Only render UI that uses the current theme when the page is mounted on the client
    // useEffect only renders on the client
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
        <div className="flex gap-2 items-center text-lg pt-2 pl-2">
            <button onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
                <ThemeIcon theme={theme}/>
            </button>
            {theme} mode
        </div>
        </>
    )
}