import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Firebase
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//Pages
import Home from "./pages/Home";
import NewYouth from "./pages/NewYouth";
import DetailYouth from "./components/DetailYouth";
import Login from "./pages/Login";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [youth, setYouth] = useState([]);

  //Fetch All Data from DB
  useEffect(() => {
    const getYouths = async () => {
      const data = await getDocs(collection(db, "youths"));
      setYouth(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getYouths();
  }, []);

  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        <Routes>
          {/* <Route exact path="/register" element={<SignUp />} /> */}
          <Route exact path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home youth={youth} setYouth={setYouth} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/newyouth"
            element={
              <ProtectedRoute>
                <NewYouth />
              </ProtectedRoute>
            }
          />

          <Route
            path="/update/:id"
            element={
              <ProtectedRoute>
                <NewYouth />
              </ProtectedRoute>
            }
          />

          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute>
                <DetailYouth youth={youth} setYouth={setYouth} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
