// TODO: answer here
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Center height='100vh'>
      {/* <Link to="student"> */}
        <Button alignContent='center' onClick={() => navigate('/student')}>all students</Button>
      {/* </Link> */}
    </Center>
  );
};

export default Home;
