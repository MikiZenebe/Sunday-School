import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      toast.success(`Welcome 👍`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } catch (error) {
      //Notification
      toast.error(`Check email & password ❌`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    navigate("/");
  };

  return (
    <>
      <div className="pt-20 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <Card className=" ">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-20 place-items-center"
            >
              <Typography variant="h3" color="white">
                Login
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col  gap-4">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                autoComplete="email"
                color="green"
                label="Email"
                size="md"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                type="password"
                color="green"
                label="Password"
                size="md"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Login
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Login;
