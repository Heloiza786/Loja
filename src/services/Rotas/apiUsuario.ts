import React from "react";
import axios from "axios";



async function UsuarioDataGet(){
    var usuarioNameInput = document.getElementById("usuarioName") as HTMLInputElement || null;
    var usuarioLastNameInput = document.getElementById(" usuarioLastName") as HTMLInputElement || null;
    var usuarioCpfInput = document.getElementById("usuarioCpf") as HTMLInputElement || null;
    var usuarioEmailInput = document.getElementById("usuarioEmail") as HTMLInputElement || null;
   

    var newDiv = document.getElementById("newDiv") as HTMLDivElement; 
   

    var estoqueDataJson = {
        "name" : usuarioNameInput.value.toString(),
        "last_name" : usuarioLastNameInput.value.toString(),
        "cpf": usuarioCpfInput.value.toString(),
        "email": usuarioEmailInput.value.toString(),
    }}


async function getUsuario(divId : HTMLDivElement){

   
    const  usersUrl  = "http://localhost:4000/api/user" ;

    await axios.get(usersUrl)
    .then((response) =>{
        

            const dataVenda: Record<string, {name: string, lastName: string, 
                cpf: string,  email: string, }> = 
                response.data;

                const dataVendaArray = Object.entries(dataVenda).map(
                    ([key, value]) => ({
                         key,
                        ...value
                    }));

                    var content = "";

                 dataVendaArray.forEach((dados) => {

                 
                    content += `
                    
                    <div class="FlexPai">

                    <div class="produtos">
                       <img src = ${dados.name} alt =""/>
                    
                    </div>
    
                            
                    <div class="home">
                        <img src = ${dados.lastName} alt =""/>
                    </div>
    
                    <div class="shop">
                    <
                        <img src ${dados.cpf
                        }
                    </div>
                    
                    <div class="discount">
                    
                    ${dados.email} alt =""/>
                 </div>

                
                    `;
     

            
         divId.innerHTML = content;
     

    })

})
    .catch((error ) => {
        console.log(" O erro ocorrido foi ", error)
    })
   }
    function postUsuario(){
        console.log("teste")

    }
        export default {getUsuario, postUsuario}

