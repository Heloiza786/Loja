import React from "react";
import axios from "axios";





async function getVenda(divId : HTMLDivElement){

   
    const  vendaUrl  = "http://localhost:4000/api/venda" ;


    await axios.get(vendaUrl)
    .then((response) =>{
        // Metodo que serve para simular um array usando a estutura de um Json(Record)

            const dataVenda: Record<string, {user: string, products: string, 
                finishedSale: string, discount : string, Sale: string}> = 
                response.data;

                const dataVendaArray = Object.entries(dataVenda).map(
                    ([key, value]) => ({
                         key,
                        ...value
                    }));

                    var content = "";


        // return(
             
                 dataVendaArray.forEach((dados) => {

                 
                    content += `
                    
                    <div class="FlexPai">

                    <div class="produtos">
                       <img src = ${dados.user} alt =""/>
                    
                    </div>
    
                            
                    <div class="home">
                         ${dados.products} alt =""/>
                    </div>
    
                    <div class="shop">
                    <
                         ${dados.finishedSale}
                    </div>
                    
                    <div class="discount">
                    
                    ${dados.discount} alt =""/>
                 </div>

                 <div class="Sale">
               
                 ${dados.Sale} alt =""/>
              </div>
                    
                    
                    `;
     

            
         divId.innerHTML = content;
     

    })
    
// );
})
    .catch((error ) => {
        console.log(" O erro ocorrido foi ", error)
    })
   }
    function postVenda(){
        console.log("teste")

    }
        export default {getVenda, postVenda}

