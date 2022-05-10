import React,{useContext} from "react";
import dinnerContext from "./dinnerUseContext";

const DinnerMenu =()=>{
    
    let dinnerValue = useContext(dinnerContext)

    return(
        <div>
        <h2>Today we are serving {dinnerValue[0]}</h2>
        </div>
    )
}

export default DinnerMenu;