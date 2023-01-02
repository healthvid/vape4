import React from "react";
import main_video from './Videos/main_video.mp4';
import Introduction from "./introduction";
import Comments from './newComments'
import "./style.css"
import main_pic from './Videos/main_pic.png';
import FontLink from "./fontLink";
import CommentsTurnedOff from "./commentsTurnedOff";

const HomePage = () => {

    return (
       <>
        {/* This is the home page v6-1
        <h2>Embedding YouTube</h2> */}
    
            <div className="fs-6 fw-bold pb-0 bg-light">
                <FontLink/>
            </div>
            <div className="align-items-center justify-content-center">
                {/* video player */} 
                <video width="100%" height="auto"  controls poster={main_pic} className='video' >
                    <source src={main_video} type='video/mp4'/>   
                </video>
            </div>
                <div className="description" id='description'> The Real Cost - Cautions Against The Use of e-Cigarettes</div>
                <div className="viewDes">11,292 views&#183;Jan 23, 2022 </div>
    
                {/*  Info of author */}
                <Introduction />
                <hr></hr>

               <Comments/>
      </>
    );
  };
  
  export default HomePage;


  