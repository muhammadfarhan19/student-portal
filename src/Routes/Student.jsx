import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Container,
  // Box,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  Select,
  Button,
  Center,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [choosenFaculty, setChoosenFaculty] = useState("All");
  const [filtered, setFiltered] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    setStudents(data);
    setFiltered(data);
    setIsLoading(false);
  };

  const filterData = () => {
    if (choosenFaculty === "All") setFiltered(students);

    const filterStudent = students.filter(
      (student) => student.faculty === choosenFaculty
    );
    setFiltered(filterStudent);
  };

  const handleDeleteBtn = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterData();
  }, [choosenFaculty]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <Container
          maxWidth="100%"
          maxHeight="100vh"
          display="row"
          p="0 100px 100px"
        >
          <Navbar />
          <Select
            maxWidth="100%"
            data-testid="filter"
            onChange={(e) => setChoosenFaculty(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
          <TableContainer width="100%" maxHeight="80vh" overflowY="scroll">
            <Table variant="simple" colorScheme="teal" maxH="100vh">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Fullname</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filtered?.map((student, index) => {
                  return (
                    <Tr className="student-data-row" key={index}>
                      <Td>{student.id}</Td>
                      <Td>
                        <Link to={`/student/${student.id}`}>
                          {student.fullname}
                        </Link>
                      </Td>
                      <Td>{student.faculty}</Td>
                      <Td>{student.programStudy}</Td>
                      <Td>
                        <Button
                          data-testid={`delete-${student.id}`}
                          colorScheme="teal"
                          onClick={() => handleDeleteBtn(student.id)}
                        >
                          delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Student;
