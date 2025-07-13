"use client"
import React, { useEffect } from 'react';
import { ReactTyped } from 'react-typed';

import Image from "next/image";
import { Button } from './ui/button';
import Link from 'next/link';
import { useRef } from 'react';
const HeroSection = () => {
  const imageRef= useRef(null);
  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-3xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title text-center">
  Your AI Career Coach for
  <br />
  <ReactTyped
    strings={['Professional Success.', 'Job Interviews.', 'Career Growth.', 'Skill Enhancement.']}
    typeSpeed={50}
    backSpeed={30}
    loop
  />
</h1>

          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
         <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        </div>
        <div className='hero-image-wrapper mt-5 md:mt-0'>
            <div ref={imageRef} className='hero-image'>
                <Image
                    src={"/banner.jpeg"}
                    width={1280}
                    height={720}
                    alt="Banner Senai"
                    className="rounded-lg shadow-2xl border m-auto"
                        priority
                />
            </div>
        </div>
        
        </section>
  )
}

export default HeroSection