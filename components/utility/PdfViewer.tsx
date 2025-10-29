// "use client";
//
// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { pdfjs } from "react-pdf";
//
//
// const Document:any = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
// const Page:any = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });
//
// export default function PdfViewer({ file }) {
//   const [numPages, setNumPages] = useState<number | any>(0);
//
//   useEffect(() => {
//     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
//   }, []);
//
//   const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
//     setNumPages(numPages);
//   };
//
//   return (
//     <div>
//       <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<p>Loading PDF...</p>}>
//         {Array.from({ length: numPages }, (_, index) => (
//           <Page key={index} pageNumber={index + 1} />
//         ))}
//       </Document>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { pdfjs } from "react-pdf";

const Document:any = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

export default function PdfViewerClient({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number>(0);

  // ✅ Set worker path on mount
  useEffect(() => {
    if (typeof window !== 'undefined'){
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        `pdfjs-dist/build/pdf.worker.min.js`,
        window.location.origin
      ).toString();
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setNumPages(numPages);

  return (
    <div className="flex flex-col items-center">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<p>Loading PDF...</p>}
      >
        {Array?.from({ length: numPages }, (_, index) => (
          <Page key={index}  />
          // <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
