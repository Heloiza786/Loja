import React from "react";
import axios from "axios";


async function getVenda(divId : HTMLDivElement){
    
    var vendaUserInput = document.getElementById("vendaUserInput") as HTMLInputElement || null;
    var vendaHome = document.getElementById("vendaHomeInput") as HTMLInputElement || null;
    var vendaProducts = document.getElementById("vendaProductsInput") as HTMLInputElement || null;
   
    const  vendaUrl  = "http://localhost:4000/api/venda" ;


    await axios.get(vendaUrl)
    .then((response) =>{
        

            const dataVenda: Record<string, {user: string, products: string, 
                finishedSale: string, discount : string, Sale: string, filters: String}> = 
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
                       <img src = ${dados.user} alt =""/>
                    
                    </div>
    
                            
                    <div class="home">
                        <img src = ${dados.products} alt =""/>
                    </div>
    
                    <div class="shop">
                    <
                        <img src ${dados.finishedSale}
                    </div>
                    
                    <div class="discount">
                    ${dados.discount} alt =""/>
                    </div>

                    <div class="Sale">
                
                        ${dados.Sale} alt =""/>
                    </div>
                    
                    <div class= "filters"
                        ${dados.filters} alt =""/>
                    </div>
                    `;
     

            
         divId.innerHTML = content;
     

    })

})
    .catch((error ) => {
        console.log(" O erro ocorrido foi ", error)
    })
   }
    function postVenda(){
        console.log("teste")

    }
        export default {getVenda, postVenda}

