/// <reference types="vite/client" />

declare module "*.mpeg" {
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
