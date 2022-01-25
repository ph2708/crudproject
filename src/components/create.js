import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);

    axios.post(`https://61efeb71732d93001778e6ae.mockapi.io/api/v1/fakedata/`, {
      firstName,
      lastName,
      checkbox,
    });
  };

  return (
    <div className="main">
      <Form className="create-form-black">
        <Form.Field>
          <label>Nome</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Sobrenome</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="Marca a caixinha ai para continuar viado"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <Link to="/read">Read</Link>
    </div>
  );
}

export default Create;
