declare module "*.pdf" {
  const src: string;
  export default src;
}


declare module 'react-pdf';

declare module 'react-pdf' {
  import { ComponentType } from 'react';

  export const Document: ComponentType<any>;
  export const Page: ComponentType<any>;
  export const pdfjs: any;
}

