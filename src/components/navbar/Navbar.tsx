import React, { useEffect, useState } from "react";
import axios from "axios";
import './Navbar.css';
import { Link } from 'react-router-dom'

 

function Navbar(){
    var endereco = document.location.href.split("/")[4];

    // useEffect(() => {
    //     var endereco = document.location.href.split("/")[4];

    //     if (endereco === "home") {
    //       var divCliente = document.getElementById("home") as HTMLDivElement;
    //       divCliente.classList.add("disableLink");
          

    //     } else if (endereco === "sobre") {
    //       var divSobre = document.getElementById("sobre") as HTMLDivElement;
    //       divSobre.classList.add("disableLink");

    //     } 
       
    //   }, [])

    
      



    return(
//       { endereco === "home" ?(<Link to = {"/home"} className="disableLink"> CLIENTE )}
// <Link to={}
            <div className="FlexPai">
               

               <div id="home">
                    <Link to={'/home'} id="home">
                      Home
                      </Link>
                      </div>
                      {/* home vai para cadastrocliente */}
                

                      <div id="sobre">
                    <Link to={'/sobre'} >
                      Sobre
                      </Link>
                      </div>

                      {/* sobre vai para cadastroEstoque */}
             
    
    
                     
                    <Link to={'/category'} id="category"> 
                    Category
                    </Link>
                        
                    {/* category vai para cadastroUsuario */}
                
    
                {/* <div className="outhers">
                    <label>Outhers</label>
                </div>
    
                <div className="contacts">
                    <label>Contacts</label>
                </div>
  
                <div className="Botão">
                    
                    <button> Login</button>
                </div> */}
                
            </div>
    )
    }
    
 
    export default Navbar;
