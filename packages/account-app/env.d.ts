/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_CANOPY_LOGIN_URL: string
  readonly VITE_CANOPY_LOGOUT_URL: string
  readonly VITE_DOMAIN: string
  readonly VITE_EMAIL: string
  readonly VITE_HREF_CONTACT: string
  readonly VITE_HREF_DOCUMENTATION: string
  readonly VITE_HREF_PRIVACY: string
  readonly VITE_HREF_PUBLIC_SITE: string
  readonly VITE_HREF_SUPPORT: string
  readonly VITE_HREF_SYSTEM_STATUS: string
  readonly VITE_HREF_TERMS: string
  readonly VITE_LOG_LEVEL: string
  readonly VITE_LOG_PRETTY: string
  readonly VITE_MASK_ICON_COLOR: string
  readonly VITE_MS_TILE_COLOR: string
  readonly VITE_ROUTER_BASE: string
  readonly VITE_TITLE: string
  readonly VITE_TITLE_TEMPLATE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
