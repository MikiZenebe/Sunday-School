import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import Nav from "../components/Nav";

function UpdateYouth({ youth }) {
  return (
    <>
      <Nav />

      <div className="pt-20 flex justify-center items-center">
        <form>
          <Card className="w-[500px] ">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-20 place-items-center"
            >
              <Typography variant="h3" color="white">
                <div className="text-center">የ{youth.fullName}</div>{" "}
                <div>መረጃውን አስተካክል</div>
              </Typography>
            </CardHeader>
            <CardBody className="grid grid-cols-2 gap-4">
              <Input
                name="formNo"
                type="file"
                color="green"
                label="የማህደር ቁጥር"
                size="md"
              />
              <Input
                name="formNo"
                type="text"
                color="green"
                label="የማህደር ቁጥር"
                size="md"
                defaultValue={youth.formNo}
              />
              <Input
                name="fullName"
                type="text"
                color="green"
                label="ስም ከነአያት"
                size="md"
              />
              <Input
                name="christianName"
                type="text"
                color="green"
                label="የክርስትና ስም"
                size="md"
              />
              <Input
                name="mothersName"
                type="text"
                color="green"
                label="የእናት ስም"
                size="md"
              />
              <Input
                name="priesthood"
                type="text"
                color="green"
                label="ማዕረገ ክህነት "
                size="md"
              />

              <Input
                name="priesthoodYear"
                type="text"
                color="green"
                label="ክህነት የተቀበሉበት ዘመን"
                size="md"
              />
              <Input
                name="priesthoodFather"
                type="text"
                color="green"
                label="ክህነቱን የሰጡት አባት ስም"
                size="md"
              />

              <Input
                name="birthYear"
                type="text"
                color="green"
                label="የትውልድ ዘመን"
                size="md"
              />
              <Input
                name="age"
                type="text"
                color="green"
                label="ዕድሜ"
                size="md"
              />
              <Input
                name="sex"
                type="text"
                color="green"
                label="ፆታ"
                size="md"
              />
              <Input
                name="city"
                type="text"
                color="green"
                label="አድራሻ /ከተማ/"
                size="md"
              />
              <Input
                name="kebele"
                type="text"
                color="green"
                label="ቀበሌ"
                size="md"
              />
              <Input
                name="specialPlace"
                type="text"
                color="green"
                label="ልዩ ቦታ"
                size="md"
              />
              <Input
                name="houseNo"
                type="text"
                color="green"
                label="የቤት.ቁ"
                size="md"
              />

              <Input
                name="phoneNo"
                type="text"
                color="green"
                label="ስልክ.ቁ"
                size="md"
              />

              <Input
                name="schoolLevel"
                type="text"
                color="green"
                label="የትምህርት ደረጃ"
                size="md"
              />
              <Input
                name="schoolName"
                type="text"
                color="green"
                label="የት/ቤቱ ስም"
                size="md"
              />
              <Input
                name="college"
                type="text"
                color="green"
                label="የጨረሱበት ኮሌጅ / ዩኒቨርሲቲ"
                size="md"
              />
              <Input
                name="workType"
                type="text"
                color="green"
                label="የስራ መስክ"
                size="md"
              />
              <Input
                name="workPlace"
                type="text"
                color="green"
                label="የስራ ቦታ"
                size="md"
              />
              <Input
                name="memberDate"
                type="text"
                color="green"
                label="አባል የሆኑበት ቀን"
                size="md"
              />
              <Input
                name="GodFathMom"
                type="text"
                color="green"
                label="የክርስትና አባት / እናት ስም"
                size="md"
              />
              <Input
                name="nishaAbat"
                type="text"
                color="green"
                label="የንስሀ አባት"
                size="md"
              />
              <Input
                name="nishaAbatAddress"
                type="text"
                color="green"
                label="የንስሀ አባት አድራሻ"
                size="md"
              />
              <Input
                name="emerFam"
                type="text"
                color="green"
                label="ተጠሪ"
                size="md"
              />
              <Input
                name="emerFamPhone"
                type="text"
                color="green"
                label="የተጠሪ ስልክ"
                size="md"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                መዝግብ
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default UpdateYouth;
