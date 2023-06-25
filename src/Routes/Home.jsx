// TODO: answer here
import { Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Link to="student"> */}
      <Center height="100vh">
        <Button
          data-testid="student-btn"
          alignContent="center"
          onClick={() => navigate("/student")}
        >
          all students
        </Button>
        {/* </Link> */}
      </Center>
      <Footer />
    </>
  );
};

export default Home;
