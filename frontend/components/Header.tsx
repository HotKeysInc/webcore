/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="navbar bg-transparent px-4 py-8 md:px-16">
      <div className="flex-1">
        <a
          href="/"
          className="btn-ghost btn btn-lg text-white h-"
        >
          <Image
            src="/hotkeyslogo.png"
            alt="Nucleus Finance Logo"
            width={170}
            height={75}
          />
         
        </a>
      </div>

      <div className="flex-none">
        <a
          href="/app"
          className="btn-ghost btn bg-black bg-opacity-30 text-xl normal-case backdrop-blur-md text-white"
        >
          Docs
        </a>
       
        <a
          href="/app"
          className="btn-ghost btn bg-black bg-opacity-30 text-xl normal-case backdrop-blur-md text-white"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}