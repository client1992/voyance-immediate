"use client"

import { useLanguage, type Locale } from "@/lib/language-context"
import { Globe } from "lucide-react"

const languages: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "es", label: "ES" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 border border-[#c9a86c]/30 rounded-lg p-0.5">
      <Globe className="h-3.5 w-3.5 text-[#b8a8c8] ml-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
            locale === lang.code
              ? "bg-[#c9a86c] text-[#1a1425]"
              : "text-[#b8a8c8] hover:text-[#f8f5f0] hover:bg-[#3d2e5a]"
          }`}
          title={lang.label}
        >
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
