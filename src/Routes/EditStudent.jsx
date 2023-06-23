import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Container,
  Box,
  FormControl,
  Input,
  //   Button,
  Center,
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
        body: JSON.stringify(student),
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
        // <>
        <Container
          maxWidth="100%"
          maxHeight="100vh"
          display="row"
          p="0 100px 100px"
        >
          <Center flexDirection="column" maxH="100%" bg="green.100">
            <Navbar />
            <Flex>
              <Box>
                <img src={student.profilePicture} alt={student.fullname} />
              </Box>
              <FormControl gap="10px" onSubmit={handleSaveBtn}>
                <Input
                  name="fullname"
                  m={2}
                  value={student.fullname || ""}
                  onChange={handleInputChange}
                  // placeholder="Full Name"
                  data-testid="name"
                />
                <Input
                  name="address"
                  m={2}
                  value={student.address || ""}
                  onChange={handleInputChange}
                  data-testid="address"
                  // placeholder="Full Name"
                />
                <Input
                  name="birthdate"
                  m={2}
                  value={student.birthDate || ""}
                  onChange={handleInputChange}
                  data-testid="date"
                  // placeholder="Full Name"
                />
                <Select m={2} data-testid="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                <Input
                  name="phone_number"
                  m={2}
                  value={student.phoneNumber || ""}
                  onChange={handleInputChange}
                  data-testid="phoneNumber"
                  // placeholder="Full Name"
                />
                <Input
                  name="faculty"
                  m={2}
                  value={student.faculty || ""}
                  onChange={handleInputChange}
                  // placeholder="Faculty"
                />
                <Select m={2} data-testid="prody">
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
                <Input
                  type="submit"
                  value="Save"
                  colorScheme="teal"
                  mt={4}
                  onClick={handleSaveBtn}
                  data-testid="edit-btn"
                />
              </FormControl>
            </Flex>
          </Center>
          <Footer />
        </Container>
        // </>
      )}
    </>
  );
};

export default EditStudent;
