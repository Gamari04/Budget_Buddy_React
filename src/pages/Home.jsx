import http from "../http"
import {useState,useEffect} from "react";
export default function Home(){
   
    const [expense, setExpenses]=useState([]);
    
    useEffect(()=>{

    }, []);

  
    return (
       <div>Home page</div>
    )
}