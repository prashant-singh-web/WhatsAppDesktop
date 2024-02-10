import React, { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import Chatuser from "./component/chat/Chatuser";
import logo from "./image/user/logo192.png";
import Chatfilter from "./component/chat/Chatfilter";
import Chatcontact from "./component/chat/Chatcontact";

function Home() {
  const [isfocused, setIsfocused] = useState(false);
  return (
    <div className="w-full  h-full grid  grid-cols-[40%_60%]">
      <div className="w-full h-full border-r-2 dark:border-r dark:border-black/30 border-gray-200 flex flex-col">
        <div className="w-full h-28 p-5  flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-semibold">Chats</p>
            <div className="flex flex-row space-x-2">
              <Chatcontact/>
              <Chatfilter/>
            </div>
          </div>
          <div
            className={`flex border-[1.5px] border-b-2 dark:border-black/30 overflow-hidden rounded-md bg-white dark:bg-white/10 ${
              isfocused ? "border-b-green-700 dark:border-b-green-700" : "border-b-gray-400 dark:border-b-gray-500"
            } border-gray-200`}
          >
            <LiaSearchSolid className="m-auto mx-2  text-gray-400 dark:text-gray-200" />
            <input
              type="text"
              onFocus={() => setIsfocused(true)}
              onBlur={() => setIsfocused(false)}
              placeholder="Search or Start a new chat..."
              className="w-full text-sm py-1 outline-none dark:bg-transparent dark:text-gray-200 dark:placeholder:text-gray-200 "
            />
          </div>
        </div>
        <div className=" w-full h-[28rem] overflow-y-scroll p-2 scrollDropdown  ">
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
          <Chatuser
            profile={logo}
            name={"Whatsapp"}
            lastmsg={"lorem ipsum data get"}
          />
        </div>
      </div>
      <div className="w-full h-full">
       
      </div>
    </div>
  );
}

export default Home;
