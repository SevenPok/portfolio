import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" p={4}>
      &copy; {new Date().getFullYear()} Gerber Colindres. All Rights Reserved.
    </Box>
  );
};

export default Footer;
