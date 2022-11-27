import React, { useState, useEffect } from "react";

//Design Packages
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

//components
import { navList } from "./navlist";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/logo.png";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-black">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Link to="/" className="font-semibold text-white">
            የደሴ ደ/ኃ/ቅ/ዑራኤል ሰ/ት/ቤት
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <Button variant="filled" className="ml-[30rem] hidden lg:inline-block">
          <Link to="/">የአባላት ዝርዝር</Link>
        </Button>

        <Menu>
          <MenuHandler>
            <Button variant="filled" className=" hidden lg:inline-block">
              አዲስ ቅፅ
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              {" "}
              <Link to="/newyouth">የወጣቶች ቅፅ</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/newkids">የህፃናት ቅፅ</Link>
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          color="yellow"
          variant="filled"
          className="hidden lg:inline-block"
          onClick={handleLogOut}
        >
          Logout
        </Button>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <AiOutlineClose color="white" size={18} />
          ) : (
            <AiOutlineMenu color="white" size={18} />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <Button variant="filled" size="sm" fullWidth className="mt-4">
          <Link to="/">የአባላት ዝርዝር</Link>
        </Button>

        <Menu>
          <MenuHandler>
            <Button variant="filled" size="sm" fullWidth className="mt-4">
              <Link>አዲስ ቅፅ</Link>
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <Link to="/newyouth">የወጣቶች ቅፅ</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/newkids">የህፃናት ቅፅ</Link>
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          color="yellow"
          variant="filled"
          fullWidth
          className="mt-2"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </MobileNav>
    </Navbar>
  );
}

export default Nav;
