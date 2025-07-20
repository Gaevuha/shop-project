/// <reference types="vite/client" />

/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.svg?react' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}