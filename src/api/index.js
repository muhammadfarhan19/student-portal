export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/student");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addStudent = async (addedData) => {
  try {
    const response = await fetch(`http://localhost:3001/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedData),
    });
    const data = await response.json();
    alert(`berhasil menambahkan data ${addedData.fullname}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editStudent = async (id, editedData) => {
  try {
    const response = await fetch(`http://localhost:3001/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
