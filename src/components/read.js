import React from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61efeb71732d93001778e6ae.mockapi.io/api/v1/fakedata`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://61efeb71732d93001778e6ae.mockapi.io/api/v1/fakedata`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(
        `https://61efeb71732d93001778e6ae.mockapi.io/api/v1/fakedata/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Link to="/create">Return Create</Link> | <hr />
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <button onClick={() => onDelete(data.id)}>Delete</button>
                <Link to="/update">
                  <Table.Cell>
                    <button onClick={() => setData(data)}>Update</button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
