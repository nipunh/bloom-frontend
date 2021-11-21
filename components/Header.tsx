import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { rowStyle } from '../styles/common';

interface HeaderProps {
  title:
    | string
    | React.ReactNodeArray
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  introduction:
    | string
    | React.ReactNodeArray
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const headerContainerStyles = {
  ...rowStyle,
  justifyContent: 'space-between',
  flexWrap: 'wrap',
} as const;

const imageContainerStyle = {
  position: 'relative',
  width: { xs: 150, md: 225 },
  height: { xs: 150, md: 225 },
  marginLeft: { xs: 'auto', md: 5 },
  marginRight: { xs: 'auto', md: 0 },
  marginTop: { xs: 4, md: 0 },
  alignSelf: { xs: 'center', md: 'auto' },
} as const;

const textContainerStyle = {
  maxWidth: { xs: '100%', md: '55%' },
  width: { xs: '100%', md: 'auto' },
} as const;

const Header = (props: HeaderProps) => {
  const { title, introduction, imageAlt, imageSrc } = props;

  return (
    <Container sx={headerContainerStyles}>
      <Box sx={textContainerStyle}>
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {introduction}
        </Typography>
      </Box>
      <Box sx={imageContainerStyle}>
        <Image alt={imageAlt} src={imageSrc} layout="fill" objectFit="contain" />
      </Box>
    </Container>
  );
};

export default Header;
