"use client"
import React from "react";
import Wrapper from "./components/wrapper";
import Image from "next/image";
import { NavButton, OutgoingLink } from "./components/nav";

export default function Home() {
  return (
    <>
    <Wrapper>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-3 md:text-lg sm:text-sm">
          <h2 className="md:text-3xl sm:text-xl animate-loadFromLeft"><u className="text-pink-500 dark:text-pink-400"><b className="text-pink-500 dark:text-pink-400 font-serif">Hello World!</b></u></h2>
          <p className="animate-loadFromLeft">{`My name is Brooke, and I'm currently a sophomore college student studying Computer Science at NC State University's College of Engineering.`}</p>
          <p className="animate-loadFromLeft">This is my personal website, coded by me using the <OutgoingLink linkText='Next.js' link='https://nextjs.org/'/> web framework for <OutgoingLink linkText="React.js" link="https://react.dev/"/>, with <OutgoingLink linkText="Tailwind CSS" link="https://tailwindcss.com/"/> and <OutgoingLink linkText="TypeScript" link="https://www.typescriptlang.org/"/> (and lots of flexboxes!). It is hosted on <OutgoingLink linkText="Vercel" link="https://vercel.com/"/>.</p>
          <div className="animate-loadFromLeft">
            <NavButton buttonName="resume" link="/resume"/>
          </div>
        </div>
        <div>
          <Image
          src="/images/webcam.gif"
          width={500}
          height={500}
          alt="Gameboy Camera webcam by maple @ https://maple.pet/webgbcam/"
          className="rounded-lg animate-loadContent"
          id="main-image"
        />
        </div>
      </div>
    </Wrapper>
    </>
  )
}