"use client"

import { useLanguage, type Locale } from "./language-context"
import fr from "./translations/fr.json"
import en from "./translations/en.json"
import es from "./translations/es.json"
import ar from "./translations/ar.json"

const translations: Record<Locale, Record<string, unknown>> = { fr, en, es, ar }

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj as unknown)
}

export function useTranslation() {
  const { locale } = useLanguage()

  function t(path: string): string {
    const data = translations[locale]
    const value = getNestedValue(data, path)
    if (typeof value === "string") return value
    const fallback = getNestedValue(translations.fr, path)
    return typeof fallback === "string" ? fallback : path
  }

  function tArray(path: string): unknown[] {
    const data = translations[locale]
    const value = getNestedValue(data, path)
    if (Array.isArray(value)) return value
    const fallback = getNestedValue(translations.fr, path)
    return Array.isArray(fallback) ? fallback : []
  }

  return { t, tArray, locale }
}
