"use client";
import { Button } from "@/components/ui/button";
// import { Link } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";
import { Plus } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser() || {};

  console.log("isLoaded", isLoaded);
  console.log("isSignedIn", isSignedIn);
  console.log("user", user);
  return (
    <header className="flex h-[4rem] items-center justify-between px-[2rem] text-[1rem] md:text-[1.2rem] lg:px-[5rem]">
      <div className="flex gap-[4rem]">
        <div>
          <img src="/header_logo.svg" alt="header-logo" />
        </div>
        <ul className="hidden items-center gap-[1rem] md:flex">
          <li>
            <Link href="/">For Sale</Link>
          </li>
          <li>
            <Link href="/rent">For Rent</Link>
          </li>
          <li>
            <Link href="/find-agent">Agent Finder</Link>
          </li>
        </ul>
      </div>
      <div className="hidden items-center gap-[1rem] sm:flex">
        <Link href="add-new-listing">
          <Button className="text-[0.8rem] md:text-[1rem]">
            <Plus />
            Post Your Ads
          </Button>
        </Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-up">
            <Button className="text-[0.8rem] md:text-[1rem]">Login</Button>
          </Link>
        )}
      </div>
      <Menu className="h-[2rem] w-[2.2rem] sm:hidden" />
    </header>
  );
};

export default Header;
