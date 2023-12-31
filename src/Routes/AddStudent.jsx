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
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { addStudent } from "../api";

const AddStudent = () => {
  // TODO: answer here
  const navigate = useNavigate();
  const [fullname, setFullname] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [birthDate, setBirthdate] = useState();
  const [gender, setGender] = useState("Male");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  const getFaculty = (programStudy) => {
    // let faculty = "";
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
    }
    // return faculty;
  };
  const faculty = getFaculty(programStudy);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
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
    <Container
      maxWidth="100%"
      height="100vh"
      p="0 100px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <NavBar />
      <Box
        width="750px"
        mx="auto"
        bgColor="green.100"
        borderRadius="lg"
        boxShadow="lg"
        rounded="md"
        bg="white"
        padding={6}
      >
        <Text fontSize="26px" fontWeight="bold" marginBottom='30px'>
          Add student
        </Text>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="1fr" gap={4} mb={4}>
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input
                value={fullname?.value}
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
                value={profilePicture?.value}
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
                value={address?.value}
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
                value={phoneNumber?.value}
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                data-testid="phoneNumber"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Birthdate</FormLabel>
              <Input
                value={birthDate?.value}
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
                value={gender?.value}
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
                value={programStudy?.value}
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
            colorScheme="teal"
            type="submit"
            onClick={handleSubmit}
            data-testid="add-btn"
            marginTop={4}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Footer />
    </Container>
  );
};

export default AddStudent;
