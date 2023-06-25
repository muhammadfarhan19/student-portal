// TODO: answer here
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      textAlign="center"
      display="flex"
      justifyContent="center"
      gap={8}
      padding='24px'
      // fontSize='17px'
      // alignSelf="end"
      // bg='green.100'
    >
      <p className="studentName">Muhammad Farhan Hamidie</p>
      <p className="studentId">FE4800778</p>
    </Box>
  );
};

export default Footer;
