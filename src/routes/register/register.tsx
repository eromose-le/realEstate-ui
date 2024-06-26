import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import apiRequest from "@/lib/apiRequest";
import { routeEnum } from "@/constants/RouteConstants";
import { Notify } from "@/common/Notify";

function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate(routeEnum.LOGIN);

      Notify(`${res?.data?.message || "Registeration successful"}`, "success");
    } catch (err: any) {
      Notify(`${err?.response?.data?.error || "An error occured"}`, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
