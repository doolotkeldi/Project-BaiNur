import React, { useState } from "react";

import "./Registration.css";
import Singin from "../Singin/Singin";
import Login from "../Login/Login";



function RegisPage() {
  const [sinHandler,setSinHanlder] = useState(false)
  return (
    <section>
      <div className="regPage">
        <h1 onClick={()=>setSinHanlder(false)} tabIndex={0}>Регистрация</h1>
        <span>|</span>
        <h1 onClick={()=>setSinHanlder(true)} tabIndex={0}>Войти</h1>
      </div>
    
  {sinHandler&&<Singin/>} 
 { sinHandler===false&&<Login/>}
   </section>
  );
}

export default RegisPage; 
