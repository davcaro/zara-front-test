/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CORS_API_URL: string;
  readonly VITE_PODCASTS_GENRE_ID: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
