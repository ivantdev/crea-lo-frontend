import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Container = styled("div")(({ theme }) => ({
    position: "relative",
    padding: "2rem",
    color: theme.palette.text.primary,
    lineHeight: "21px",
    "--webkit-user-elect": "none",
    userSelect: "none",
}));

const PdfHeader = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 0",
    backgroundColor: theme.palette.background.special,
}));

const CurrentPage = styled("div")(({ theme }) => ({
    fontSize: "1.2rem",
    fontWeight: "bold",
}));

const commonButtonStyles = {
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    margin: "0.5rem 0.5rem",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: "0.5",
    "&:hover": {
        opacity: "1",
    },
};

const NextPageButton = styled("button")(({ theme }) => ({
    ...commonButtonStyles,
    backgroundColor: theme.palette.text.primary,
}));

const PrevPageButton = styled("button")(({ theme }) => ({
    ...commonButtonStyles,
    backgroundColor: theme.palette.text.primary,
}));

const PdfViewer = ({ file, doublePage = true }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const ContainerRef = useRef(null);
    const [widthDefault, setWidthDefault] = useState(100);


    const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
        setNumPages(nextNumPages);
    };

    const handleNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const onItemClick =({ pageNumber: itemPageNumber }) => {
        setPageNumber(itemPageNumber);
      }
    
    
    useEffect(() => {
        const handleResize = () => {
            if (ContainerRef.current) {
                const width = ContainerRef.current.offsetWidth;
                if (width !== widthDefault && width > 0) {
                    setWidthDefault(width);
                }
            }
        };
        handleResize();
    }, []);
    return (
        <Container ref={ContainerRef} style={{ width: "100%", padding: "0", minHeight: "min(65vh, 800px)", margin: "0 auto", }}>
            <PdfHeader>
                <PrevPageButton onClick={handlePrevPage}>
                    {"Ant."}
                </PrevPageButton>
                <NextPageButton onClick={handleNextPage} >
                    {"Sig."}
                </NextPageButton>
                <CurrentPage>
                    Pag. {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
                </CurrentPage>
            </PdfHeader>
            <Document
                onLoadSuccess={onDocumentLoadSuccess}
                options={{
                    cMapUrl: 'cmaps/',
                    cMapPacked: true,
                }}
                file={file}
                onItemClick={onItemClick}
            >
                <Page className="pdf-page" pageNumber={pageNumber} width={ doublePage && widthDefault > 800 ? widthDefault/2 : widthDefault} />
                {
                    ( doublePage &&  widthDefault > 800) && <Page className="pdf-page" pageNumber={pageNumber + 1} width={widthDefault/2} />
                }
            </Document>
        </Container>
    );
}

export default PdfViewer;
