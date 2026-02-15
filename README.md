# ydf.mk

## Theming

This project uses Tailwind CSS semantic color tokens backed by CSS variables. The theme is managed with `next-themes` and applied on the `html` element as a `dark` class.

Where to edit tokens:

- Light and dark variables live in [app/globals.css](app/globals.css).
- Tailwind token mapping lives in [tailwind.config.ts](tailwind.config.ts).

How it works:

- `ThemeProvider` in [app/layout.tsx](app/layout.tsx#L1) applies the `dark` class and persists the choice.
- A small inline script in [app/layout.tsx](app/layout.tsx#L1) prevents FOUC by setting the class before paint.
- The header theme toggle is implemented in [components/header.tsx](components/header.tsx#L1).
