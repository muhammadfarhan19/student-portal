// TODO: answer here
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Center height='100vh'>
      {/* <Link to="student"> */}
        <Button data-testid="student-btn" alignContent='center' onClick={() => navigate('/student')}>all students</Button>
      {/* </Link> */}
      <Footer/>
    </Center>
  );
};

export default Home;
