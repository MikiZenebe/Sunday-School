import React, { useState } from "react";

//Page
import Nav from "../components/Nav";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";

function Home({ youth }) {
  const [search, setSearch] = useState("");

  const deleteYouth = async (id) => {
    const youthDoc = doc(db, "youths", id);
    await deleteDoc(youthDoc);

    if (deleteYouth) {
      //Notification
      toast.success("መረጃው ተሰርዟል ❌", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };

  return (
    <>
      <Nav />

      <div className="pt-10 flex flex-col items-center justify-between">
        <input
          className="p-2 outline-none border-b border-b-blue-700"
          type="text"
          label="Author Name"
          placeholder="አባሉን ይፈልጉ"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="pt-10 flex flex-col items-center justify-between">
          {youth
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (val.fullName.includes(search.toLowerCase())) {
                return val;
              } else if (val.formNo.includes(search.toLowerCase())) {
                return val;
              }
            })
            .map((item) => (
              <div className="pb-6" key={item.id}>
                <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                  <div className="pt-2">
                    <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                              >
                                አባል
                              </th>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                              >
                                የማህደር ቁጥር
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link
                                  to={`/detail/${item.id}`}
                                  className="flex items-center"
                                >
                                  <div className="flex-shrink-0">
                                    <img
                                      alt="profil"
                                      src={item.img}
                                      className="mx-auto object-cover rounded-full h-10 w-10 "
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {item.fullName}
                                    </p>
                                  </div>
                                </Link>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.formNo}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Button className="text-white whitespace-no-wrap">
                                  <Link to={`/update/${item.id}`}>Update</Link>
                                </Button>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Button
                                  color="red"
                                  className="text-white whitespace-no-wrap"
                                  onClick={() => {
                                    deleteYouth(item.id);
                                  }}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
