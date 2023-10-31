import React from "react";
import axios from "axios";
import './Navbar.css';
import { Link } from 'react-router-dom'

 

function Navbar(){
    return(
       
            <div className="FlexPai">

                <div className="home">
                <label>Home</label>
                    <Link to={'/home'}>
                      Home
                      </Link>
                </div>

                <div className="sobre">
                <label>Sobre</label>
                    <Link to={'/sobre'}>
                      Sobre
                      </Link>
                </div>
    
    
                <div className="category">
                    <label>Category</label>
                </div>
    
                <div className="outhers">
                    <label>Outhers</label>
                </div>
    
                <div className="contacts">
                    <label>Contacts</label>
                </div>

    
                
                <div className="Botão">
                    
                    <button> Login</button>
                </div>
                
            </div>
    )
    }
    
 
    export default Navbar;
