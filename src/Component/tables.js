import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./Table.module.css";


const UserTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/get");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.tableContainer}>
        <button className={styles.button}> LogOut</button>
    
        <Table  bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>type</th>
              <th>Location</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((company, index) => (
              <tr key={company.id}>
                <th scope="row">{index + 1}</th>
                <td>{company.name}</td>
                <td>{company.type}</td>
                <td>{company.location}</td>
                <td>{company.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserTable;
