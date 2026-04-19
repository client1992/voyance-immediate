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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1425]/95 backdrop-blur-sm border-b border-[#c9a86c]/20">
      {/* Top bar with phone */}
      <div className="bg-gradient-to-r from-[#6b4e8d] via-[#7d5ba6] to-[#6b4e8d] py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-[#c9a86c] animate-pulse" />
          <a 
            href="tel:0782388164" 
            className="text-[#f8f5f0] font-bold tracking-wider hover:text-[#c9a86c] transition-colors"
          >
            Appelez maintenant : 07 82 38 81 64
          </a>
          <span className="hidden sm:inline text-[#c9a86c] mx-2">|</span>
          <span className="hidden sm:inline text-[#f8f5f0]/80 text-sm">Consultation Immediate</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="#accueil" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a86c]">
              <Image
                src="/images/logo.jpg"
                alt="Voyance Immediate Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl text-[#c9a86c] font-bold">Voyance Immediate</h1>
              <p className="text-xs text-[#b8a8c8]">Cheikh - Medium Marocain</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#f8f5f0] hover:text-[#c9a86c] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a86c] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] hover:from-[#d9b87c] hover:to-[#c9a86c] text-[#1a1425] font-bold"
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
            className="md:hidden text-[#f8f5f0] p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#251e35] border-t border-[#c9a86c]/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#f8f5f0] hover:text-[#c9a86c] transition-colors font-medium py-2 border-b border-[#3d2e5a]"
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] text-[#1a1425] font-bold mt-2"
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
