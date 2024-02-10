import "./App.css";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoIosSquareOutline } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { BiBox } from "react-icons/bi";

import { MdOutlineDataSaverOff } from "react-icons/md";

import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import Home from "./Home";
import ChatCall from "./component/RouteCompo/ChatCall";
import Homesetting from "./component/Home/Setting/Homesetting";

function App() {
  return (
    <HashRouter>
      <div className="w-full h-[100vh] dark:text-gray-300 grid place-items-center ">
        <div className="w-[700px] h-[600px] shadow grid grid-rows-[7%_93%] rounded-md overflow-hidden border-[1.5px] border-gray-400 dark:border-gray-700 bg-[#F3F3F3] dark:bg-[#202020]">
          <div className="flex flex-row w-full justify-between px-3">
            <p className="flex items-center text-sm">
              <FaWhatsapp className="text-green-600 text-2xl mr-2" />
              WhatsApp
            </p>
            <div className="flex my-auto space-x-2 text-lg text-gray-600 dark:text-white">
              <AiOutlineMinus className="text-lg" />
              <IoIosSquareOutline className="text-lg" />
              <MdClose />
            </div>
          </div>
          <div className="w-full grid grid-cols-[7%_93%]">
            <div className="w-full h-full flex flex-col justify-between px-1 py-3">
              <div className="flex flex-col space-y-2">
                <NavLink to={"/"} >
                  <div 
                   className="group relative before:absolute before:w-1 before:h-5 hover:before:bg-green-700 before:rounded-md text-lg  hover:bg-gray-200 dark:hover:bg-white/10 rounded-md flex flex-row  py-2">
                    
                    <BiMessageRoundedDetail className="  mx-auto text-black/80 dark:text-white text-center" />
                  </div>
                </NavLink>
                <NavLink to={"/call"}>
                  <div className="group relative before:absolute before:w-1 before:h-5 hover:before:bg-green-700 before:rounded-md text-lg hover:bg-gray-200 dark:hover:bg-white/10 rounded-md flex flex-row  py-2">

                    <IoCallOutline className="  mx-auto text-black/80 dark:text-white text-center" />
                  </div>
                </NavLink>
                <div className="group relative before:absolute before:w-1 before:h-5 hover:before:bg-green-700 before:rounded-md text-lg hover:bg-gray-200 dark:hover:bg-white/10 rounded-md flex flex-row  py-2">
                 
                  <MdOutlineDataSaverOff className="  mx-auto text-black/80 dark:text-white text-center" />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="group relative before:absolute before:w-1 before:h-5 hover:before:bg-green-700 before:rounded-md text-lg hover:bg-gray-200 dark:hover:bg-white/10 rounded-md flex flex-row  py-2">
                  
                  <CiStar className="  mx-auto text-black/80 dark:text-white text-center" />
                </div>
                <div className="group relative before:absolute before:w-1 before:h-5 hover:before:bg-green-700 before:rounded-md text-lg hover:bg-gray-200 dark:hover:bg-white/10 rounded-md flex flex-row  py-2">
                  
                  <BiBox className="  mx-auto text-black/80 dark:text-white text-center" />
                </div>
                <hr className="h-0.5 bg-gray-200 rounded-md" />
                <Homesetting />
                <div className="w-full p-2">
                  <img
                    src="/logo192.png"
                    alt="logo"
                    className="w-full border bg-red-200 my-auto rounded-full  "
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white dark:bg-[#2B2B2B] border-t-2 border-l-2 border-gray-200 dark:border-black/30  rounded-ss-md">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/call" element={<ChatCall />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
