// TODO: answer here
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Center,
  Text,
  Grid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
// import Footer from "../components/Footer";
// import { addStudent } from "../api";

const AddStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const [fullname, setFullname] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState("Male");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  const getFaculty = (programStudy) => {
    let faculty = "";
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        faculty = "Fakultas Ekonomi";
        break;
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        faculty = "Fakultas Ilmu Sosial dan Politik";
        break;
      case "Teknik Sipil":
      case "Arsitektur":
        faculty = "Fakultas Teknik";
        break;
      case "Matematika":
      case "Fisika":
      case "Informatika":
        faculty = "Fakultas Teknologi Informasi dan Sains";
        break;
      default:
        break;
    }
    return faculty;
  };
  const faculty = getFaculty(programStudy);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthdate,
      gender,
      programStudy,
      faculty,
    };
    await fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    console.log(newData);
    // await addStudent(newData);

    navigate("/student");
  };

  return (
    // <Container maxW="100%" padding="100px" height="100vh" bg="green.100">
    //   <Center flexDirection="column" bg="green.200" height="100%">
    //     <Text align="start">Add Student</Text>
    //     <FormControl
    //       width="50%"
    //       onSubmit={handleSubmit}
    //       display="flex"
    //       flexDirection="column"
    //       flexWrap="wrap"
    //     >
    //       <FormLabel>Fullname</FormLabel>
    //       <Input
    //         type="text"
    //         onChange={(e) => setFullname(e.target.value)}
    //         data-testid="name"
    //       />
    //       <FormLabel>Profile Picture</FormLabel>
    //       <Input
    //         type="text"
    //         onChange={(e) => setProfilePicture(e.target.value)}
    //         data-testid="profilePicture"
    //       />
    //       <FormLabel>Address</FormLabel>
    //       <Input
    //         type="text"
    //         onChange={(e) => setAddress(e.target.value)}
    //         data-testid="address"
    //       />
    //       <FormLabel>Phone Number</FormLabel>
    //       <Input
    //         type="number"
    //         onChange={(e) => setPhoneNumber(e.target.value)}
    //         data-testid="phoneNumber"
    //       />
    //       <FormLabel>Birthdate</FormLabel>
    //       <Input
    //         type="date"
    //         onChange={(e) => setBirthdate(e.target.value)}
    //         data-testid="date"
    //       />
    //       <FormLabel>Gender</FormLabel>
    //       <Select
    //         onChange={(e) => setGender(e.target.value)}
    //         data-testid="gender"
    //       >
    //         <option value="Male">Male</option>
    //         <option value="Female">Female</option>
    //       </Select>
    //       <FormLabel>Program Study</FormLabel>
    //       <Select
    //         onChange={(e) => setProgramStudy(e.target.value)}
    //         data-testid="prody"
    //       >
    //         <option value="Ekonomi">Ekonomi</option>
    //         <option value="Manajemen">Manajemen</option>
    //         <option value="Akuntansi">Akuntansi</option>
    //         <option value="Administrasi Publik">Administrasi Publik</option>
    //         <option value="Administrasi Bisnis">Administrasi Bisnis</option>
    //         <option value="Hubungan Internasional">
    //           Hubungan Internasional
    //         </option>
    //         <option value="Teknik Sipil">Teknik Sipil</option>
    //         <option value="Arsitektur">Arsitektur</option>
    //         <option value="Matematika">Matematika</option>
    //         <option value="Fisika">Fisika</option>
    //         <option value="Informatika">Informatika</option>
    //       </Select>
    //       <Button marginTop="20px" onClick={handleSubmit} data-testid="add-btn">
    //         Add student
    //       </Button>
    //     </FormControl>
    //   </Center>
    //   <Footer />
    // </Container>
    <Container
      // bg="blue.100"
      maxW="100%"
      height="100vh"
      paddingTop={20}
      textAlign="center"
    >
      {/* <Center> */}
      <Text fontSize="24px" fontWeight="bold">
        Add student
      </Text>
      <Box
        maxWidth="750px"
        mx="auto"
        marginTop={8}
        borderRadius="lg"
        padding={4}
        boxShadow="lg"
        rounded="md"
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="1fr" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                data-testid="name"
              />
            </FormControl>
          </Grid>
          <Grid templateColumns="1fr" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Profile picture</FormLabel>
              <Input
                type="text"
                onChange={(e) => setProfilePicture(e.target.value)}
                data-testid="profilePicture"
              />
            </FormControl>
          </Grid>
          <Grid templateColumns="1fr" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                data-testid="address"
              />
            </FormControl>
          </Grid>

          <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                data-testid="phoneNumber"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Birthdate</FormLabel>
              <Input
                type="date"
                onChange={(e) => setBirthdate(e.target.value)}
                data-testid="date"
              />
            </FormControl>
          </Grid>

          <Grid templateColumns="1fr 1fr" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                onChange={(e) => setGender(e.target.value)}
                data-testid="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Program study</FormLabel>
              <Select
                onChange={(e) => setProgramStudy(e.target.value)}
                data-testid="prody"
              >
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </Select>
            </FormControl>
          </Grid>

          <Button
            colorScheme="blue"
            type="submit"
            onClick={handleSubmit}
            data-testid="add-btn"
            marginTop={4}
            // left=
            // width='00px'
          >
            Submit
          </Button>
        </form>
      </Box>
      {/* </Center> */}
    </Container>
  );
};

export default AddStudent;
