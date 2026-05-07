# ADR 0002: Localization strategy

## Status

Accepted

## Context

The app launches in English only but needs to be structured so adding new locales later is a file-copy-and-translate operation rather than a refactor. The Expo localization docs recommend pairing `expo-localization` (device locale detection) with a translation library. The realistic candidates were:

- **react-i18next** — explicit React Native support, JSON files, large ecosystem
- **LinguiJS** — compile-time extraction, PO files, better for professional translators
- **react-intl (FormatJS)** — ICU message format, web-first with unclear React Native support
- **i18n-js** — lightweight, smaller ecosystem

Locale resolution must follow a three-tier priority: in-app language picker → device system language (via `expo-localization`) → English fallback.

## Decision

Use `expo-localization` + `react-i18next`.

Locale resolution order:

1. User-selected language stored in app state (in-app picker)
2. `expo-localization.getLocales()[0].languageTag` (device system language)
3. `"en"` hard fallback

## Consequences

- One JSON file per locale (`en.json`, etc.) — adding a language is a translate-and-add-file operation with no code changes needed.
- `react-i18next` is initialised at app startup with the resolved locale; the in-app picker updates the i18next instance and persists the choice.
- LinguiJS's compile step and PO toolchain are avoided — appropriate since translations are done by the developer, not external translators.
- react-intl is avoided due to undocumented React Native support.
- Migrating away from react-i18next later would require replacing all `useTranslation()` call sites and the translation file format.
