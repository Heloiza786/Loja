import React from "react";
import axios from "axios";
import  './CadastroUsuario.css';
import { Link } from 'react-router-dom'


function CadastroUsuario(){
    return(
       
            <div className="FlexPai">
            <Link to={'/cadastroUsuario'}>
            </Link>

            <div className=" cc">
                    <h1> Cadastro de Venda</h1>
                </div>

                <div className="nome">
                    <label>Nome:</label>
                    <input type="name" placeholder="Nome"></input>
                    <input type="name" placeholder="Sobrenome"></input>
                </div>

                <div className="shop">
                    <label>shop: </label>
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

                <div className="Sale">
                <label> Sale: </label>
                    <input type="name" placeholder="Sale"></input>
                </div>   
                <div className="filters">
                <label> Filters: </label>
                    <input type="name" placeholder="Filters"></input>
                </div>  
            </div>
    )
    }
    
 
    export default CadastroUsuario;

