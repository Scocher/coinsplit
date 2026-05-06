# ADR 0001: Use Expo Router for navigation

## Status

Accepted

## Context

The app needs a navigation library. No router was installed at decision time. The two realistic choices for an Expo project were Expo Router (file-based, Expo-recommended default) and React Navigation (imperative, stack/tab navigators defined in code).

## Decision

Use Expo Router.

## Consequences

- Route structure is determined by the `app/` folder hierarchy, not by code.
- Feature components live in a separate `features/` folder rather than colocated with the route file.
- Deep linking and URL-based navigation come for free.
- Migrating away from Expo Router later would require restructuring both the `app/` folder and all navigation call sites.
