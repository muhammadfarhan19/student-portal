import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Select,
  Flex,
  Image,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const data = await response.json();
      setStudent(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveBtn = async () => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...student,
          faculty: getFaculty(student.programStudy),
        }),
      });
      navigate("/student");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <Container
          maxWidth="100%"
          height="100vh"
          p="0 100px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {/* <Center flexDirection="column" maxH="100%" bg="green.100"> */}
          <Navbar />
          <Flex>
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
              <Flex gap={4} marginBottom={4}>
                <Box padding={2}>
                  <img
                    mx="auto"
                    src={student.profilePicture}
                    alt={student.fullname}
                  />
                </Box>
                <Box width="150px">
                  <p>Nama</p>
                  <p>Alamat</p>
                  <p>Nomor HP</p>
                  <p>Tanggal lahir</p>
                  <p>Jenis kelamin</p>
                  <p>Fakultas</p>
                  <p>Program Studi</p>
                </Box>
                <Box flex="1">
                  <p>: {student.fullname}</p>
                  <p>: {student.address}</p>
                  <p>: {student.phoneNumber}</p>
                  <p>: {student.birthDate}</p>
                  <p>: {student.gender}</p>
                  <p>: {student.faculty}</p>
                  <p>: {student.programStudy}</p>
                </Box>
              </Flex>
              <form onSubmit={handleSaveBtn}>
                <Grid templateColumns="1fr" gap={4}>
                  <FormControl>
                    <Input
                      name="fullname"
                      m={2}
                      value={student.fullname || ""}
                      onChange={handleInputChange}
                      data-testid="name"
                    />
                  </FormControl>
                </Grid>
                <Grid templateColumns="1fr" gap={4}>
                  <FormControl>
                    <Input
                      name="address"
                      m={2}
                      value={student.address || ""}
                      onChange={handleInputChange}
                      data-testid="address"
                    />
                  </FormControl>
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <FormControl>
                    <Input
                      name="phoneNumber"
                      m={2}
                      value={student.phoneNumber || ""}
                      onChange={handleInputChange}
                      data-testid="phoneNumber"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      name="birthDate"
                      m={2}
                      value={student.birthDate || ""}
                      onChange={handleInputChange}
                      data-testid="date"
                    />
                  </FormControl>
                </Grid>

                <Select
                  m={2}
                  data-testid="gender"
                  onChange={handleInputChange}
                  name="gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>

                <Input
                  // name="faculty"
                  m={2}
                  value={student.faculty || ""}
                  onChange={handleInputChange}
                  // data-testid="faculty"
                />
                <Select
                  m={2}
                  data-testid="prody"
                  name="programStudy"
                  onChange={handleInputChange}
                >
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Administrasi Publik">
                    Administrasi Publik
                  </option>
                  <option value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </option>
                  <option value="Hubungan Internasional">
                    Hubungan Internasional
                  </option>
                  <option value="Teknik Sipil">Teknik Sipil</option>
                  <option value="Arsitektur">Arsitektur</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Informatika">Informatika</option>
                </Select>
                <Button
                  colorScheme="teal"
                  type="submit"
                  onClick={handleSaveBtn}
                  data-testid="edit-btn"
                  margin={2}
                >
                  Save
                </Button>
              </form>
            </Box>
          </Flex>
          {/* </Center> */}
          <Footer />
        </Container>
      )}
    </>
  );
};

export default EditStudent;
