"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import logo from "@/assets/images/kgk-logo.webp";
import search from "@/assets/images/search.webp";

export default function Header() {
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  // Adjust based on your blog detail route
  const isBlogDetailPage = ["/blogs/", "/events-&-media/"].some((path) =>
    pathname.startsWith(path)
  );
  
  const isBusinessActive = () =>
    [
      "/business/gems",
      "/business/real-estate",
      "/business/marble",
      "/business/hospitality",
      "/business/technology",
    ].some((path) => pathname.startsWith(path));

  const headerClasses = isBlogDetailPage
    ? "relative bg-white text-black mb-4"
    : "absolute bg-transparent text-white";

  const logoStyle = isBlogDetailPage ? "invert" : "";
  const searchIconStyle = isBlogDetailPage ? "invert" : "";
  const textColor = isBlogDetailPage ? "text-black" : "text-white";

  const linkClass = (href) =>
    `border-b ${
      pathname === href
        ? isBlogDetailPage
          ? "border-black"
          : "border-white"
        : "border-transparent"
    }`;

  return (
    <>
      <header className={`top-0 left-0 w-full z-[30] ${headerClasses}`}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="pl-0 lg:pl-[40px] pt-[22px]">
            <Image
              src={logo}
              alt="KGK Group"
              width={120}
              height={40}
              className={`h-[80px] lg:h-[100px] object-contain ${logoStyle}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex md:space-x-14 items-center font-light lg:text-sm uppercase tracking-widest ${textColor}`}
          >
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about-us" className={linkClass("/about-us")}>About Us</Link>

            {/* Businesses Submenu */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 uppercase border-b ${
                  isBusinessActive()
                    ? isBlogDetailPage
                      ? "border-black"
                      : "border-white"
                    : "border-transparent"
                }`}
              >
                Businesses <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 bg-white text-black text-darkGray shadow-md hidden group-hover:block min-w-[190px] z-10">
                <ul className="text-xs">
                  {[
                    { href: "/our-business/gemstones", label: "Gems And Jewellery" },
                    { href: "/our-business/real-estate", label: "Real Estate" },
                    { href: "/our-business/stones", label: "Marble Mining" },
                    { href: "/our-business/hospitality", label: "Hospitality" },
                    { href: "/our-business/technology", label: "Technology & Innovations" },
                  ].map(({ href, label }, idx) => (
                    <li
                      key={idx}
                      className="border-b-2 border-mid-gray last:border-b-0"
                    >
                      <Link
                        href={href}
                        className="flex items-center gap-2 py-2 px-2"
                      >
                        <span className="w-2 h-2 rounded-full border-2 border-primary inline-block shrink-0"></span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/kgk-foundation" className={linkClass("/kgk-foundation")}>Foundation</Link>
            <Link href="/careers" className={linkClass("/careers")}>Career</Link>
            <Link href="/contact-us" className={linkClass("/contact")}>Contact Us</Link>

            <div className="flex items-center gap-x-6">
              <Image
                src={search}
                alt="Search Icon"
                width={24}
                height={24}
                className={`cursor-pointer w-[24px] h-[24px] ${searchIconStyle}`}
              />
              <button className="bg-primary text-white w-10 h-10 text-xs flex items-center justify-center">
                EN
              </button>
            </div>
          </nav>

          {/* Hamburger Button */}
          <button onClick={toggleDrawer} className={`${textColor} lg:hidden`}>
            {drawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4 pt-12 relative text-white">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-100"
          >
            <X size={24} />
          </button>

          <Link href="/" onClick={() => setDrawerOpen(false)} className="block">Home</Link>
          <Link href="/about-us" onClick={() => setDrawerOpen(false)} className="block">About Us</Link>

          <div>
            <button
              onClick={toggleSubmenu}
              className="flex items-center justify-between w-full"
            >
              Businesses <ChevronDown size={16} />
            </button>
            {submenuOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li><Link href="/our-business/gemstones" onClick={() => setDrawerOpen(false)}>Gems And Jewellery</Link></li>
                <li><Link href="/our-business/real-estate" onClick={() => setDrawerOpen(false)}>Real Estate</Link></li>
                <li><Link href="/our-business/stones" onClick={() => setDrawerOpen(false)}>Marble Mining</Link></li>
                <li><Link href="/our-business/hospitality" onClick={() => setDrawerOpen(false)}>Hospitality</Link></li>
                <li><Link href="/our-business/technology" onClick={() => setDrawerOpen(false)}>Technology & Innovations</Link></li>
              </ul>
            )}
          </div>

          <Link href="/kgk-foundation" onClick={() => setDrawerOpen(false)} className="block">Foundation</Link>
          <Link href="/careers" onClick={() => setDrawerOpen(false)} className="block">Career</Link>
          <Link href="/contact-us" onClick={() => setDrawerOpen(false)} className="block">Contact Us</Link>

          <div className="flex items-center justify-between pt-4 border-t mt-4">
            <Image
              src={search}
              alt="Search Icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <button className="bg-darkGray text-white w-10 h-10 text-xs flex items-center justify-center">
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
