"use client";
import React, { FC, useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFViewer: FC = () => {
  const [file, setFile] = useState(
    "https://www.africau.edu/images/default/sample.pdf",
  );
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event: any) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div>
        <label htmlFor="file"> Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div>
      <div>
        <Document
          file={"https://www.africau.edu/images/default/sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        ></Document>
      </div>
    </div>
  );
};
export default PDFViewer;
