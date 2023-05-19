"use client";
import React, { useEffect, useRef } from "react";
import * as PDFJS from "pdfjs-dist/build/pdf";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";

const PdfViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPdf = async () => {
      try {
        const pdfPath = "https://www.africau.edu/images/default/sample.pdf";
        GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

        const loadingTask = await getDocument(pdfPath);
        const pdf = await loadingTask.promise;

        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport,
        };
        await page.render(renderContext).promise;

        pdf.destroy();
      } catch (error) {
        console.error("Failed to render PDF:", error);
      }
    };

    renderPdf();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default PdfViewer;
