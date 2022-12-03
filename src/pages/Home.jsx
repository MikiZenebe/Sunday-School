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
    window.location.reload();
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
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">
            የአባላት ዝርዝር
          </h3>

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
              <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="pb-6" key={item.id}>
                  <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                    <ul class="flex flex-col divide divide-y">
                      <li class="flex flex-row">
                        <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                          <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <Link to={`/detail/${item.id}`}>
                              <img
                                alt="profil"
                                src={item.img}
                                class="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </Link>
                          </div>
                          <div class="flex-1 pl-1 mr-16">
                            <Link to={`/detail/${item.id}`}>
                              <div class="font-medium dark:text-white">
                                {item.fullName}
                              </div>
                            </Link>
                            <div class="text-gray-600 dark:text-gray-200 text-sm">
                              {item.formNo}
                            </div>
                          </div>
                          <div class="text-gray-600 dark:text-gray-200 text-xs mr-6">
                            <Button className="text-white whitespace-no-wrap">
                              <Link to={`/update/${item.id}`}>Update</Link>
                            </Button>
                          </div>
                          <div class="text-gray-600 dark:text-gray-200 text-xs">
                            <Button
                              color="red"
                              className="text-white whitespace-no-wrap"
                              onClick={() => {
                                deleteYouth(item.id);
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                  <div className="pt-2">
                    <div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                      <div className="inline-block  shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                              >
                                አባል
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-9 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link
                                  to={`/detail/${item.id}`}
                                  className="flex items-center"
                                >
                                  <div className="flex-shrink-0 mr-6">
                                    <img
                                      alt="profile"
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
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
