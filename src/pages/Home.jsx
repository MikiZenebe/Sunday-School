import React from "react";

//Page
import Nav from "../components/Nav";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Home({ youth }) {
  return (
    <>
      <Nav />

      <div>
        <div className="pt-10 flex flex-col items-center justify-between">
          {youth.map((item) => (
            <div className="pb-6" key={item.id}>
              <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                              >
                                <Link>Delete</Link>
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
