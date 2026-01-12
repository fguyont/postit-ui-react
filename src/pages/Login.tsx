import axios from "axios";
import { useState, type ChangeEvent } from "react";
import Form from "react-bootstrap/esm/Form";

// type LoginRequest= {
//   email: string;
//   password: string;
// };

function Login() {
  // state (état, données)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "api/auth/login";

  // comportements
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(url, { email, password })
      .then((response) => {
       console.log(response.data)
       window.localStorage.setItem("name", response.data.name);
       window.localStorage.setItem("email", response.data.email);
       window.localStorage.setItem("token", response.data.token);
      }
    )
      .catch((error) => console.error(error));
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // render (affichage)
  return (
    <div>
      <h1>This is the login page</h1>
      <div className="custom-form" >
      <form action="submit" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
        <input value={email} type="email" placeholder="Saisir votre email" onChange={handleChangeEmail} />
          <Form.Label>Mot de passe</Form.Label>
        <input value={password} type="password" placeholder="Saisir votre mot de passe" onChange={handleChangePassword} />
        <button className="btn-dark btn-lg btn-block">Valider</button>
        </Form.Group>
      </form>
      </div>
      {/* <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form> */}
    
    </div>
  );
}

// gestion du formulaire
// 1 création du form
// 2 soumission du form
// 3 collecte des données du form avec synchronisation asc/desc

export default Login;
