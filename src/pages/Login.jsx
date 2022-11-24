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

function Login() {
  return (
    <>
      <div className="pt-20 flex justify-center items-center">
        <form>
          <Card className="w-[500px] ">
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
                name="email"
                type="text"
                color="green"
                label="Username"
                size="md"
                required
              />
              <Input
                name="password"
                type="password"
                color="green"
                label="Password"
                size="md"
                required
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
