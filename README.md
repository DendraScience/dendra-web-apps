# Dendra Web Apps

Dendra's application interfaces realized as a collection of interconnected web apps.

This is a multi-app monorepo.

## Project structure

```
.
└── packages            # Source for all apps organized by purpose
    ├── common          # Source shared across all apps
    ├── main-app        # Data query and management interfaces (SPA)
    ├── metadata-site   # Matadata browsing (SSR)
    └── public-site     # Public facing web site (SSG)
```

## Notes

- This is a proof of concept and work in progress.
- See Makefile for more.
- TypeScript supported and optional at this stage.
- Uses V1 design for [vite-plugin-ssr](https://vite-plugin-ssr.com/migration/v1-design).
- Also see [Vike](https://vike.land/).
