import React, { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const slideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;


const GalleryWrapper = styled("div")({
  position: "relative",
  padding: "0.5rem",
  display: "grid",
  gap: "0.5rem",
  backgroundColor: "#000",
  borderRadius: "0.8rem",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "70px",
  "& > .gallery-child:first-of-type": {
    gridRow: "span 3",
    gridColumn: "span 3",
    cursor: "unset !important",
  },
  "& > .gallery-child:first-of-type img": {
    width: "max-content",
    height: "max-content",
    gridRow: "span 3",
    cursor: "unset !important",
    objectFit: "contain",
  },
  "& > .gallery-child": {
    cursor: "pointer",
  },
  "@media (min-width: 600px)": {
    gridTemplateColumns: "1fr min(200px, 20%)",
    gridAutoRows: "180px",
    "& > .gallery-child:first-of-type": {
      gridColumn: "unset",
    },
  },
});

const NextButton = styled("button")({
  position: "absolute",
  zIndex: "1",
  top: "40%",
  right: "10px",
  transform: "translateY(-50%)",
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  outline: "none",
  color: "#000000",
  backgroundColor: "#FFFFFF",
  opacity: "0.85",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "opacity 0.3s",
  "&:disabled": {
    opacity: "0.5",
    cursor: "unset",
  },
  "&:hover": {
    opacity: "1",
  },
  "@media (min-width: 600px)": {
    visibility: "hidden",
  }
});

const PreviousButton = styled("button")({
  position: "absolute",
  zIndex: "1",
  top: "40%",
  left: "10px",
  transform: "translateY(-50%)",
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  outline: "none",
  color: "#000000",
  backgroundColor: "#FFFFFF",
  opacity: "0.85",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "opacity 0.3s",
  "&:disabled": {
    opacity: "0.5",
    cursor: "unset",
  },
  "&:hover": {
    opacity: "1",
  },
  "@media (min-width: 600px)": {
    top: "50%",
    left: "1rem",
    width: "3rem",
    height: "3rem",
  }
});

const ImageContainer = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "0",
  backgroundColor: "transparent",
  borderRadius: "0.5rem",
  transition: "opacity 0.3s, transform 0.3s",
  animation: `${slideAnimation} 0.3s ease-in-out`,
  
  "&:not(:first-of-type)": {
    animationFillMode: "forwards",
  },
  
});

const ImageItem = styled("img")({
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
  borderRadius: "0.5rem",
  pointerEvents: "none",
});

const Gallery = ({ imageUrls, styles = {} }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageList, setImageList] = useState([]);

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const handleSetImage = (index) => {
    setImageIndex(index);
  };

  // preload next 2 imageUrls
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      const nextImage = new Image();
      nextImage.src = imageUrls[(imageIndex + i + 4) % imageUrls.length];
    }
  }, [imageIndex]);

  // preload previous 2 imageUrls
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      const prevImage = new Image();
      prevImage.src = imageUrls[(imageIndex - i + imageUrls.length - 1) % imageUrls.length];
    }
  }, [imageIndex]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 4; i++) {
      list.push({
        src: imageUrls[(imageIndex + i) % imageUrls.length],
        index: (imageIndex + i) % imageUrls.length,
      });
    }
    setImageList(list);
  }, [imageIndex]);

  return (
    <GalleryWrapper sx={{...styles}}>
      {imageList.map((image, index) => (
          <ImageContainer key={index} className="gallery-child" onClick={() => {handleSetImage(image.index)}}>
            <ImageItem src={image.src} alt={`Image ${index + 1}`} />
          </ImageContainer>
      ))}
      <PreviousButton onClick={handlePrevImage} >
        <ArrowBackIosNewIcon style={{ width: "1rem" }} />
      </PreviousButton>
      <NextButton onClick={handleNextImage} >
          <ArrowBackIosNewIcon style={{ width: "1rem", transform: "rotate(180deg)" }} />
      </NextButton>
    </GalleryWrapper>
  );
};

export default Gallery;
