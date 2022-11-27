import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

//Firebase
import { storage, db } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

//Component & Pages
import Nav from "../components/Nav";
import Spinner from "../components/Spinner";

const initialState = {
  formNo: "",
  fullName: "",
  christianName: "",
  mothersName: "",
  priesthood: "",
  priesthoodYear: "",
  priesthoodFather: "",
  birthYear: "",
  age: "",
  sex: "",
  city: "",
  kebele: "",
  specialPlace: "",
  houseNo: "",
  phoneNo: "",
  schoolLevel: "",
  schoolName: "",
  college: "",

  workType: "",
  workPlace: "",
  memberDate: "",
  GodFathMom: "",
  nishaAbat: "",
  nishaAbatAddress: "",
  emerFam: "",
  emerFamPhone: "",
};

function NewYouth() {
  const { id } = useParams();
  const navigate = useNavigate("/");
  //Basic States
  const [youth, setYouth] = useState(initialState);
  const {
    formNo,
    fullName,
    christianName,
    mothersName,
    priesthood,
    priesthoodYear,
    priesthoodFather,
    birthYear,
    age,
    sex,
    city,
    kebele,
    specialPlace,
    houseNo,
    phoneNo,
    schoolLevel,
    schoolName,
    college,

    workType,
    workPlace,
    memberDate,
    GodFathMom,
    nishaAbat,
    nishaAbatAddress,
    emerFam,
    emerFamPhone,
  } = youth; //Destructure
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  //Handle Events
  const handleChange = (e) => {
    setYouth({ ...youth, [e.target.name]: e.target.value });
  };

  //Submit Handler
  const addData = async (e) => {
    e.preventDefault();
    // if (addData) {
    //   toast.success("መረጃው ተመዝግቧል ✅");
    // }
    setIsSubmit(true);

    //If ID not found add a new data else update existing data
    if (!id) {
      try {
        await addDoc(collection(db, "youths"), {
          ...youth,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
      //Notification
      toast.success("መረጃው ተመዝግቧል ✅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    } else {
      try {
        await updateDoc(doc(db, "youths", id), {
          ...youth,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
      //Notification
      toast.success("መረጃው ተስተካክሏል ✅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    navigate("/");
  };

  //For Updating
  useEffect(() => {
    id && getSingleData();
  }, [id]);

  const getSingleData = async () => {
    const docRef = doc(db, "youths", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setYouth({ ...snapshot.data() });
    }
  };

  //Image Upload
  useEffect(() => {
    const uploadImg = () => {
      const name = new Date().getTime() + image.name;
      const storageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snaphot) => {
          const progress =
            (snaphot.bytesTransferred / snaphot.totalBytes) * 100;
          setProgress(progress);

          switch (snaphot.state) {
            case "paused":
              console.log("Upload is Pause");
              break;

            case "running":
              console.log("Upload is Running");
              break;

            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setYouth((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    image && uploadImg();
  }, [image]);

  return (
    <>
      <Nav />

      <div className="pt-20 flex justify-center items-center">
        {isSubmit ? (
          <Spinner />
        ) : (
          <form onSubmit={addData}>
            <Card className="">
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-20 place-items-center"
              >
                <Typography variant="h3" color="white">
                  {id ? `መረጃውን አስተካክል ` : `የወጣቶች አዲስ አባል`}
                </Typography>
              </CardHeader>
              <CardBody className="grid grid-cols-1 gap-6">
                <Input
                  type="file"
                  color="green"
                  label="የአባሉ ፎቶ"
                  size="md"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Input
                  name="formNo"
                  type="text"
                  color="green"
                  label="የማህደር ቁጥር"
                  size="md"
                  value={formNo}
                  onChange={handleChange}
                />
                <Input
                  name="fullName"
                  type="text"
                  color="green"
                  label="ስም ከነአያት"
                  size="md"
                  value={fullName}
                  onChange={handleChange}
                />
                <Input
                  name="christianName"
                  type="text"
                  color="green"
                  label="የክርስትና ስም"
                  size="md"
                  value={christianName}
                  onChange={handleChange}
                />
                <Input
                  name="mothersName"
                  type="text"
                  color="green"
                  label="የእናት ስም"
                  size="md"
                  value={mothersName}
                  onChange={handleChange}
                />
                <Input
                  name="priesthood"
                  type="text"
                  color="green"
                  label="ማዕረገ ክህነት "
                  size="md"
                  value={priesthood}
                  onChange={handleChange}
                />

                <Input
                  name="priesthoodYear"
                  type="text"
                  color="green"
                  label="ክህነት የተቀበሉበት ዘመን"
                  size="md"
                  value={priesthoodYear}
                  onChange={handleChange}
                />
                <Input
                  name="priesthoodFather"
                  type="text"
                  color="green"
                  label="ክህነቱን የሰጡት አባት ስም"
                  size="md"
                  value={priesthoodFather}
                  onChange={handleChange}
                />

                <Input
                  name="birthYear"
                  type="text"
                  color="green"
                  label="የትውልድ ዘመን"
                  size="md"
                  value={birthYear}
                  onChange={handleChange}
                />
                <Input
                  name="age"
                  type="text"
                  color="green"
                  label="ዕድሜ"
                  size="md"
                  value={age}
                  onChange={handleChange}
                />
                <Input
                  name="sex"
                  type="text"
                  color="green"
                  label="ፆታ"
                  size="md"
                  value={sex}
                  onChange={handleChange}
                />
                <Input
                  name="city"
                  type="text"
                  color="green"
                  label="አድራሻ /ከተማ/"
                  size="md"
                  value={city}
                  onChange={handleChange}
                />
                <Input
                  name="kebele"
                  type="text"
                  color="green"
                  label="ቀበሌ"
                  size="md"
                  value={kebele}
                  onChange={handleChange}
                />
                <Input
                  name="specialPlace"
                  type="text"
                  color="green"
                  label="ልዩ ቦታ"
                  size="md"
                  value={specialPlace}
                  onChange={handleChange}
                />
                <Input
                  name="houseNo"
                  type="text"
                  color="green"
                  label="የቤት.ቁ"
                  size="md"
                  value={houseNo}
                  onChange={handleChange}
                />

                <Input
                  name="phoneNo"
                  type="text"
                  color="green"
                  label="ስልክ.ቁ"
                  size="md"
                  value={phoneNo}
                  onChange={handleChange}
                />

                <Input
                  name="schoolLevel"
                  type="text"
                  color="green"
                  label="የትምህርት ደረጃ"
                  size="md"
                  value={schoolLevel}
                  onChange={handleChange}
                />
                <Input
                  name="schoolName"
                  type="text"
                  color="green"
                  label="የት/ቤቱ ስም"
                  size="md"
                  value={schoolName}
                  onChange={handleChange}
                />
                <Input
                  name="college"
                  type="text"
                  color="green"
                  label="የጨረሱበት ኮሌጅ / ዩኒቨርሲቲ"
                  size="md"
                  value={college}
                  onChange={handleChange}
                />
                <Input
                  name="workType"
                  type="text"
                  color="green"
                  label="የስራ መስክ"
                  size="md"
                  value={workType}
                  onChange={handleChange}
                />
                <Input
                  name="workPlace"
                  type="text"
                  color="green"
                  label="የስራ ቦታ"
                  size="md"
                  value={workPlace}
                  onChange={handleChange}
                />
                <Input
                  name="memberDate"
                  type="text"
                  color="green"
                  label="አባል የሆኑበት ቀን"
                  size="md"
                  value={memberDate}
                  onChange={handleChange}
                />
                <Input
                  name="GodFathMom"
                  type="text"
                  color="green"
                  label="የክርስትና አባት / እናት ስም"
                  size="md"
                  value={GodFathMom}
                  onChange={handleChange}
                />
                <Input
                  name="nishaAbat"
                  type="text"
                  color="green"
                  label="የንስሀ አባት"
                  size="md"
                  value={nishaAbat}
                  onChange={handleChange}
                />
                <Input
                  name="nishaAbatAddress"
                  type="text"
                  color="green"
                  label="የንስሀ አባት አድራሻ"
                  size="md"
                  value={nishaAbatAddress}
                  onChange={handleChange}
                />
                <Input
                  name="emerFam"
                  type="text"
                  color="green"
                  label="ተጠሪ"
                  size="md"
                  value={emerFam}
                  onChange={handleChange}
                />
                <Input
                  name="emerFamPhone"
                  type="text"
                  color="green"
                  label="የተጠሪ ስልክ"
                  size="md"
                  value={emerFamPhone}
                  onChange={handleChange}
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  type="submit"
                  variant="gradient"
                  fullWidth
                  disabled={progress !== null && progress < 100}
                >
                  መዝግብ
                </Button>
              </CardFooter>
            </Card>
          </form>
        )}
      </div>
    </>
  );
}

export default NewYouth;
