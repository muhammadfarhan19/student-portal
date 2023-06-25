// // TODO: answer here
// import { useNavigate } from "react-router-dom";
// import { Box, Flex, Button, Spacer, Link } from "@chakra-ui/react";

// const NavBar = () => {
//   const navigate = useNavigate();
//   return (
//     <Flex alignItems="center" padding="1rem" width="100%">
//       <Link

//       >
//         <Button data-testid="home-page" onClick={() => navigate("/")}>
//           Student Portal
//         </Button>
//       </Link>
//       <Spacer />
//       <Box>
//         <Link mr={4}>
//           <Button
//             onClick={() => navigate("/student")}
//             data-testid="student-page"
//           >
//             All Student
//           </Button>
//         </Link>
//         <Link>
//           <Button onClick={() => navigate("/add")} data-testid="add-page">
//             Add Student
//           </Button>
//         </Link>
//       </Box>
//     </Flex>
//   );
// };

// export default NavBar;

import { Flex, Box, Spacer, Link, Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems={"center"} padding={"1rem"} width={"1005"}>
        <Link>
          <Button data-testid="home-page" onClick={() => navigate("/")}>
            Student Portal
          </Button>
        </Link>
        <Spacer />
        <Box>
          <Link mr={4}>
            <Button
              data-testid="student-page"
              onClick={() => navigate("/student")}
            >
              All Student
            </Button>
          </Link>
          <Link>
            <Button data-testid="add-page" onClick={() => navigate("/add")}>
              Add Student
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
