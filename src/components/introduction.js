import React from "react";
import icon from './Videos/logo.png';
import "./style.css";

const Introduction =() => {
    const authorItem= {
        name: "The Real Cost",
        description: "Vaping can put dangerous chemicals, like diacetyl, into your lungs. Visist The Real Cost website to learn more about the real cost of vapes.",
    };
    return (
        <>
        <hr></hr>
        <div className="d-flex flex-row ps-0 me-1 ">
            <div className=" align-self-start ps-0 pe-0">
                <img
                    src={icon}
                    alt=''
                    width="48px"
                    className="rounded-circle float-start"
                />
            </div>

            <div className="ps-2 intro ">
                <div className="fw-bold mb-0 introduction  ">
                    {authorItem.name}
                </div> 
           
                <div className="introduction pt-1 text-wrap" >
                    {authorItem.description}
              </div>
            </div>
            
        </div>
        
       
        </>
    )
};

export default Introduction;
