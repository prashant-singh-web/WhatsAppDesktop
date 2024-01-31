import { createContext, useContext, useState } from "react";

const Appcontext = createContext();

export const Dataprovider = ({ children }) => {
  const [chat, setChat] = useState(true);
 const [data, setData] = useState(0);
 const [ref, setRef] = useState();
 const [homeTranslateX, setHomeTranslateX] = useState()


  return <Appcontext.Provider value={{data,setData,setHomeTranslateX,homeTranslateX,setRef,ref,chat,setChat}}>{children}</Appcontext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(Appcontext);
}

