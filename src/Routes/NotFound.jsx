// TODO: answer here
import { Center, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Center height="100vh">
      <Text>Not Found</Text>
      <Button alignContent="center" onClick={() => navigate(-1)}>
        back
      </Button>
    </Center>
  );
};

export default NotFound;
