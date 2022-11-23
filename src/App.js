import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//Firebase
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//Pages
import Home from "./pages/Home";
import NewYouth from "./pages/NewYouth";
import UpdateYouth from "./pages/UpdateYouth";
import DetailYouth from "./components/DetailYouth";

function App() {
  const [youth, setYouth] = useState([]);

  //Fetch Data from DB
  useEffect(() => {
    const getYouths = async () => {
      const data = await getDocs(collection(db, "youths"));
      setYouth(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getYouths();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home youth={youth} />} />
        <Route path="/newyouth" element={<NewYouth />} />
        <Route
          path="/update/:id"
          element={<UpdateYouth youth={youth} setYouth={setYouth} />}
        />
        <Route path="/detail/:id" element={<DetailYouth />} />
      </Routes>
    </>
  );
}

export default App;
