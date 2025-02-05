import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const CustomImage = styled(Box)(({width, height,radius}) => ({
  maxWidth: "100%",
  width: width || "150px",
  height:  height || "auto",
  borderRadius: radius || "0",
  objectFit: "cover",
  transition: "0.3s",
  "&:hover": {
    filter: "brightness(0.8)", // Example hover effect
  },
}));

const ImageComponent = ({ src, alt, width, height, radius }) => {
  return (
    <CustomImage
      component="img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={radius}
    />
  );
};

export default ImageComponent;
