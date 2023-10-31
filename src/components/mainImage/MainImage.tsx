import React, { useEffect, useState } from "react";
import './MainImage.css';
import  getVenda  from '../../services/api';




function Cards() {
    
    useEffect(() =>{
        var divId = document.getElementById("mainCard") as HTMLDivElement;
      
        getVenda.getVenda(divId);
    },[])

    return(
    
            <div id = "mainCard" className="mainCard" >
                
    </div>
            
        );
 
    }
    export default Cards;
