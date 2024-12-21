import { ReactNode } from "react";
import { NavButton } from "../components/nav";
import Wrapper from "../components/wrapper";
import Image from "next/image";

interface ContactButtonProps {
    icon: ReactNode,
    buttonText: string,
    link: string,
    pathToGIF1: string,
    pathToGIF2: string
}

function ContactButton({icon, buttonText, link, pathToGIF1, pathToGIF2} : ContactButtonProps) {
    return (
        <>
        <div className="flex gap-5 items-center">
        <Image
            src={pathToGIF1}
            width={70}
            height={70}
            alt="Looping pixel art animation depicting the character Cinnamoroll courtesy of the account sanrio-gifs on DeviantArt"
        />
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="rounded-full border-solid border-purple-400 border-4 bg-pink-200 dark:bg-pink-300 hover:bg-pink-300 font-bold py-5 px-40 transition-all duration-150">
                <div className="flex gap-2">
                {icon}
                <p className="text-lg tracking-widest text-purple-600">{buttonText}</p>
                </div>
            </button>
        </a>
        <Image
            src={pathToGIF2}
            width={70}
            height={70}
            alt="Looping pixel art animation depicting the character Cinnamoroll courtesy of the account sanrio-gifs on DeviantArt"
        />
        </div>       
        </>
    )
}

const EmailIcon = () => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" className="fill-purple-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z" /><path d="M2 9.535l5.429 3.62l-5.429 5.43z" /><path d="M22 9.535v9.05l-5.43 -5.43z" /><path d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z" /></svg> 
    )
}

const GitHubIcon = () => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" className="fill-purple-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>
    )
}

const LinkedInIcon = () => {
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" className="fill-purple-600"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
    )
}

export default function Contact() {
    return (
        <>
        <Wrapper>
            <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl"><b>CONTACT</b></h1>
            <Image src={"/images/profile_picture.png"}
            alt={"My profile picture on GitHub; an edited image depicting the character Aya Maruyama from the animusic franchise holding the book The C Programming Language, 2nd Edition by Brian W. Kernighan and Dennis M. Ritchie."}
            width={200}
            height={200}
            className="rounded-full shadow-xl shadow-pink-200"/>
            <p className="font-bold text-pink-500 text-center">I do not have accounts on social media websites (i.e. Instagram, TikTok). Only profiles that are linked below on this page are ones where I have an active public presence online.</p>
            <div className="flex flex-col items-center gap-3">
                <ContactButton icon={<EmailIcon/>} buttonText="Email" link="mailto:bwu25@ncsu.edu" pathToGIF1="/images/cinnamoroll_ice_cream.gif" pathToGIF2="/images/cinnamoroll_carousel.gif"/>
                <ContactButton icon={<GitHubIcon/>} buttonText="GitHub" link="https://github.com/brookemelody" pathToGIF1="/images/cinnamoroll_stars.gif" pathToGIF2="/images/cinnamoroll_balloon.gif"/>
                <ContactButton icon={<LinkedInIcon/>} buttonText="LinkedIn" link="https://www.linkedin.com/in/brooke-wu-a59871280" pathToGIF1="/images/cinnamoroll_pony.gif" pathToGIF2="/images/cinnamoroll_fruit.gif"/>
                <div className="flex gap-10">
                    <NavButton buttonName="home" link="/"/>
                    <NavButton buttonName="resume" link="/resume"/>
                </div>
            </div>
            </div>
        </Wrapper>
        </>
    )
}
