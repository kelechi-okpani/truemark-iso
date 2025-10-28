'use client'
import Image from "next/image";
import React from "react";
import Main_Logo from "public/assets/Logo/Logo.png"
import Sub_Logo from "public/assets/Logo/logo1.png"


export function PrimaryLogo() {
  return (
    <Image
      // src={"/assets/Logo/logo.png"}
      src={Main_Logo}
      alt="logo"
      width={200}
      height={54}
      draggable={false}
    />
  );
}

export function SecondaryLogo() {
  return (
    <Image
      src={Main_Logo}
      alt="logo"
      width={200}
      height={54}
      draggable={false}
    />
  );
}

export function Logo() {
  return (
    <Image
      src={Sub_Logo}
      alt="logo"
      // className='w-[12rem] h-[3rem]'
      width={800} height={800}
      draggable={false}
    />
  );
}
