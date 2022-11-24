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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc, Timestamp } from "firebase/firestore";

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  //Hold data in the input
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Submit data from input
  const submitHandler = async (e) => {
    e.preventDefault();

    // Register a new user
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //Add the registerd user to Database
      await setDoc(doc(db, "youths", result.user.uid), {
        uid: result.user.uid,

        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
      });

      //Redirect to homepage when the register button clicked
      navigate("/");
    } catch (error) {}
  };

  return (
    <div>
      {" "}
      <div className="pt-20 flex justify-center items-center">
        <form onSubmit={submitHandler}>
          <Card className="w-[500px] ">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-20 place-items-center"
            >
              <Typography variant="h3" color="white">
                Register
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col  gap-4">
              <Input
                name="email"
                value={email}
                type="text"
                color="green"
                label="Username"
                size="md"
                required
                onChange={changeHandler}
              />
              <Input
                name="password"
                value={password}
                type="password"
                color="green"
                label="Password"
                size="md"
                required
                onChange={changeHandler}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                SignUp
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
