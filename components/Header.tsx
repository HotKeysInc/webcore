/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="navbar bg-transparent px-4 py-8 md:px-16 z-10">
      <div className="flex-1">
        <a
          href="/"
          className="btn-ghost btn btn-lg text-white h-"
        >
          <img
            src="/hotkeyslogo.png"
            alt="hk Logo"
            className="md:h-[75px] md:w-[170px] h-[35px] w-[70px]"

          />
         
        </a>
      </div>

      <div className="flex-none">
        <a
        role="button"
          href="https://hotkeysinc.gitbook.io/hotkeyssdk/"
          className="btn-ghost btn bg-black bg-opacity-30 text-xl normal-case backdrop-blur-md text-white hover:cursor-pointer z-10 "
        >
          Docs
        </a>
       
        <a
          href="https://github.com/HotKeysInc/sdk#readme"
          className="btn-ghost btn bg-black bg-opacity-30 text-xl normal-case backdrop-blur-md text-white z-10"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}