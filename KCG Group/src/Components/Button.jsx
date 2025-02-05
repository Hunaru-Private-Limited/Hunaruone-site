import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { borderRadius, style, styled } from '@mui/system';

const CustomButton = styled(MUIButton)(({ backgroundColor, textColor, hoverTextColor, hoverBackgroundColor, borderColor, width, padding, borderRadius, textTransform}) => ({
  backgroundColor: backgroundColor || 'white',
  color: textColor || 'white',
  padding: padding || '6px 16px',
  border: '1px solid',
  borderColor: borderColor || '#fff',
  borderRadius: borderRadius ||'2px',
  fontSize: '15px',
  width: width || 'auto',
  textTransform: textTransform || 'none',
  '&:hover': {
    backgroundColor: hoverBackgroundColor || backgroundColor, 
    color: hoverTextColor || textColor, 
  },
}));

const Button = ({ backgroundColor, textColor, text, hoverBackgroundColor, hoverTextColor, borderColor, icon, width, padding, borderRadius, textTransform }) => {
  return (
    <CustomButton 
    backgroundColor={backgroundColor} 
    textColor={textColor} 
    hoverTextColor={hoverTextColor} 
    hoverBackgroundColor={hoverBackgroundColor}
    borderColor={borderColor}
    width={width}
    padding={padding}
    borderRadius={borderRadius}
    textTransform={textTransform}
    >
      {text} {icon}
    </CustomButton>
  );
};

export default Button;
