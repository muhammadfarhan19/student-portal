// TODO: answer here
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      textAlign="center"
      padding={4}
      display="flex"
      justifyContent="center"
      gap={8}
      marginTop={8}
      alignSelf="end"
      marginBottom={2}
    >
      <p className="studentName">Muhammad Farhan Hamidie</p>
      <p className="studentId">FE4800778</p>
    </Box>
  );
};

export default Footer;
