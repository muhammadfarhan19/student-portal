// TODO: answer here
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex alignItems="center" padding="1rem" width="100%">
      <ChakraLink
        as={NavLink}
        to="/"
        fontSize="xl"
        fontWeight="bold"
        color="teal"
      >
        Student Portal
      </ChakraLink>
      <Spacer />
      <Box>
        <ChakraLink as={NavLink} to="/student" mr="1rem">
          <Button>All Students</Button>
        </ChakraLink>
        <ChakraLink as={NavLink} to="/add">
          <Button>Add Student</Button>
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default NavBar;
