"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUpCircle } from "lucide-react";

// Social icon images
import FacebookIcon from "@/assets/images/facebook.webp";
import TwitterIcon from "@/assets/images/twitter.webp";
import InstagramIcon from "@/assets/images/instagram.webp";
import LinkedinIcon from "@/assets/images/linkedin.webp";
import YoutubeIcon from "@/assets/images/youtube.webp";

export default function Footer() {

  const menuItems = [
    { label: "ABOUT", href: "/about-us" },
    { label: "NEWS", href: "/events-&-media" },
    { label: "CSR", href: "/kgk-foundation" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT", href: "/contact-us" },
    { label: "BLOGS", href: "/blogs" },
    { label: "ENGLISH", href: "#" },
  ];
  
  useEffect(() => {
    const btn = document.getElementById("goTopBtn");
    btn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  const socialIcons = [
    { src: FacebookIcon, alt: "Facebook", link: "https://www.facebook.com/KGKgroup.officialpage/" },
    { src: TwitterIcon, alt: "Twitter", link: "https://x.com/kgk_group" },
    { src: InstagramIcon, alt: "Instagram", link: "https://www.instagram.com/kgk_group" },
    { src: LinkedinIcon, alt: "LinkedIn", link: "https://www.linkedin.com/company/kgk-group?originalSubdomain=in" },
    { src: YoutubeIcon, alt: "YouTube", link: "https://www.youtube.com/channel/UCnkP8zsk7XYZDLC3O-rvZcQ" },
  ];
  

  return (
    <footer className="relative bg-deep-blue text-white text-sm px-4 md:px-0 pt-11 pb-6">
      {/* Go to Top Button */}
      <button
        id="goTopBtn"
        className="absolute -top-3 right-6 bg-primary hover:bg-primary transition-colors p-2 z-50"
        aria-label="Go to top"
      >
        <ChevronUpCircle className="w-6 h-6" strokeWidth={2} />
      </button>

      <div className="max-w-6xl mx-auto text-center">
        {/* Top Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-11">

          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-cardo text-[12.5px] tracking-widest border border-white px-3.5 py-1.5 hover:bg-white hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-3 mb-5">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              className="w-[37px] h-[37px] flex items-center justify-center"
            >
              <Image src={icon.src} alt={icon.alt} width={37} height={37} className="w-full h-full" />
            </a>
          ))}
        </div>



        {/* Copyright */}
        <p className="text-[13px] tracking-widest text-white">
          Copyright © 2024 by KGK Group |{" "}
          <a href="#" className="text-white">Legal and Privacy</a>
        </p>
      </div>
    </footer>
  );
}
