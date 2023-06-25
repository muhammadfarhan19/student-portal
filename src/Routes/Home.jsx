// TODO: answer here
import { Container, Button, Flex, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="100%" maxHeight="100vh" p="0 100px">
      <Flex
        height="calc(100vh - 72px)"
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          boxShadow="lg"
          rounded="md"
          bg="white"
          width="600px"
          padding='40px 15px'
          gap={6}
          borderRadius="lg"
        >
          <Text
            fontSize="40px"
            fontWeight="bold"
            color="teal"
          >
            Welcome to Ruangguru Camp
          </Text>
          <Text marginBottom={3}>Click the button to see all students</Text>
          <Button
            data-testid="student-btn"
            alignContent="center"
            onClick={() => navigate("/student")}
          >
            all students
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
};

export default Home;
