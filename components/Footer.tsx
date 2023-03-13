/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-undef */

import { Stack, Image, Flex } from "@mantine/core";

export function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-black mt-20">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 hidden md:block lg:block xl:block">
          <a href="/" className="flex items-center">
            <Image
              src="/hotkeyslogo.png"
              className="h-8 ml-3 mr-3"
              alt="hotkeys Logo"
            />
           
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  SDK docs
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                 
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/HotKeysInc"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />

    </footer>
  );
}
