import React from "react";
import axios from "axios";
import  './CadastroCliente.css';
import { Link } from 'react-router-dom'

import Calendar from 'react-calendar';

import Navbar from "../navbar/Navbar";

function CadastroCliente(){
    return(
       
            <div className="FlexPai"> 
            <Navbar/>
            <Link to={'/cadastroCliente'}>

            </Link>

            <div className=" cc">
                    <h1> Cadastro de  Cliente </h1>

                </div>

                <div className="nome">
                    <label>Nome:</label>
                    <input type="name" placeholder="Nome"></input>
                    <input type="name" placeholder="Sobrenome"></input>
                </div>

                <div className="shop">
                    <label> Shop: </label>
                    <input type="name" placeholder="Shop"></input>
                </div>
    
                <div className="nascimento">
                <label> Nascimento: </label>
                    <input type="name" placeholder="00/00/0000"></input>
                </div>
    
                <div className="discount">
                <label> Discont: </label>
                    
                    <input type="name" placeholder="Disconto"></input>
                   

                </div>   



                
            </div>
    )
    }
    
 
    export default CadastroCliente;

