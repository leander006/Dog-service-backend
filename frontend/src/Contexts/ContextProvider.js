

import axios from "axios";
import { createContext,useContext, useEffect, useState} from "react";


export const Context = createContext();

const ContextProvider =({children}) =>{
const [user, setUser] = useState("");
// const [offers, setOffers] = useState([])
// const [uploading, setUploading] = useState(false);

useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
},[])

// useEffect(() => {
//     const getOffers = async() =>{
//       const config ={
//           headers:{
//               "Content-Type":"application/json",
//               Authorization:`Bearer ${user}?.token}`
//           }
//         }
//         const posts = await axios.get("http://localhost:4003/api/service",config)
//         setUploading(true)
//         setOffers(posts.data) 
//     }
//     getOffers()
//     setUploading(false)
//   },[])



    return < Context.Provider value={{user,setUser}}>{children}</Context.Provider>
    

}

export const ContextState = () =>{
    return useContext(ContextProvider);
}


export default ContextProvider;