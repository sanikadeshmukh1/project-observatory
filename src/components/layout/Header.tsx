"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#f8f6f2]/95 backdrop-blur-sm">
      <Container>
        <div className="flex min-h-16 items-center justify-between">
          {/* Site name also acts as the Home link */}
          <Link
            href="/"
            className="font-serif text-xl text-neutral-900 transition-colors hover:text-neutral-600"
            onClick={() => {
              setMenuOpen(false);
              setMoreOpen(false);
            }}
          >
            {site.author}
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {site.navigation.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((open) => !open)}
                  aria-expanded={moreOpen}
                  className="flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  More
                  <span
                    aria-hidden="true"
                    className={`text-xs transition-transform ${
                      moreOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full pt-3">
                    <div className="min-w-48 border border-[#d8d2c8] bg-[#f8f6f2] p-2 shadow-sm">
                      <ul>
                        {site.navigation.more.explore.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMoreOpen(false)}
                              className="block px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-[#eee9e2] hover:text-neutral-900"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="my-2 border-t border-[#d8d2c8]" />

                      <ul>
                        {site.navigation.more.utility.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMoreOpen(false)}
                              className="block px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-[#eee9e2] hover:text-neutral-900"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => {
              setMenuOpen((open) => !open);
              setMoreOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation" : "Open navigation"}
            </span>

            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-neutral-900 transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-neutral-900 transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-neutral-900 transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="border-t border-[#d8d2c8] py-4 md:hidden">
            <ul className="space-y-1">
              {site.navigation.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-[#eee9e2] hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="my-2 border-t border-[#d8d2c8]" />

              {site.navigation.more.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-[#eee9e2] hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="my-2 border-t border-[#d8d2c8]" />

              {site.navigation.more.utility.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2 py-2.5 text-sm text-neutral-700 transition-colors hover:bg-[#eee9e2] hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}