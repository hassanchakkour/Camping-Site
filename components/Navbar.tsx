"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants/index";
import Button from "./Buttons/Button";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link key={index} href={link.href}>
            <li
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              key={link.key}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          type="button"
          icon={LuUser}
          variant="btn_dark_green"
        />
      </div>

      <GiHamburgerMenu
        size={35}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
