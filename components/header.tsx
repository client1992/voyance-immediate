"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Consultations" },
    { href: "#avis", label: "Avis Clients" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#d4a855]/20">
      {/* Top bar with phone */}
      <div className="bg-gradient-to-r from-[#8b1a1a] via-[#a02020] to-[#8b1a1a] py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-[#d4a855] animate-pulse" />
          <a 
            href="tel:0782388164" 
            className="text-[#f5f0e6] font-bold tracking-wider hover:text-[#d4a855] transition-colors"
          >
            Appelez maintenant : 07 82 38 81 64
          </a>
          <span className="hidden sm:inline text-[#d4a855] mx-2">|</span>
          <span className="hidden sm:inline text-[#f5f0e6]/80 text-sm">Consultation Immédiate</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="#accueil" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4a855]">
              <Image
                src="/images/logo.jpg"
                alt="Voyance Immédiate Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl text-[#d4a855] font-bold">Voyance Immédiate</h1>
              <p className="text-xs text-[#a89f8f]">Cheikh - Médium Marocain</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f5f0e6] hover:text-[#d4a855] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a855] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-[#d4a855] to-[#b8922e] hover:from-[#e5b966] hover:to-[#d4a855] text-[#0a0a0a] font-bold"
            >
              <a href="tel:0782388164">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f5f0e6] p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-[#d4a855]/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#f5f0e6] hover:text-[#d4a855] transition-colors font-medium py-2 border-b border-[#2d2418]"
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-[#d4a855] to-[#b8922e] text-[#0a0a0a] font-bold mt-2"
            >
              <a href="tel:0782388164">
                <Phone className="w-4 h-4 mr-2" />
                Appeler Maintenant
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
