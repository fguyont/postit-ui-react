import axios from "axios";

export const LoginService = async (email: string, password: string) => {
    axios
  .post("api/auth/login", {email, password})
  .then((response) => response)
  .catch((error) => console.error(error));
};