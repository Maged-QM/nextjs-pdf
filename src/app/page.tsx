import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false,
});
const IndexPage = dynamic(() => import("./../components/pdfjs"), {
  ssr: false,
});

export default function PDF() {
  return (
    <>
      hello world
      <IndexPage />
      hello world
      <PDFViewer />
      hello world
    </>
  );
}
