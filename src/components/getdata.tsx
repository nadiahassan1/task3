import axios from "axios"
import { useEffect, useState } from "react"
import { PostData } from "./postdata";

export const Addpost:React.FC=()=>{
    let [users ,setusers]=useState<Array<any>>([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
        setusers(Response.data);
      }) 
    },[])
    return<>
       <PostData Users={users}></PostData>
    </>
}

