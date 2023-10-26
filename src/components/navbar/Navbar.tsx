import React from "react";
import axios from "axios";
import './Navbar.css';

 

function Navbar(){
    return(
        

            <div className="FlexPai">

            {/* <div className="produtos">
                <label>Produtos</label>
            </div> */}

               
            <div className="home">
                <label>Home </label>
            </div>

            <div className="shop">
                <label>Shop </label>
            </div>

            <div className="products">
                <label>Products </label>
            </div>

            <div className="checkout">
                <label>Checkout </label>
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
    // getVenda.getVenda
}

    
    export default Navbar;

    // async function projetoTrello(){
    // var produtos= document.getElementById("telefone1") as HTMLInputElement || null;
    // var home = document.getElementById("telefone2") as HTMLInputElement || null;
    // var shop = document.getElementById("telefone3") as HTMLInputElement || null;
    // var checkout = document.getElementById("telefone4") as HTMLInputElement || null;
    // var category = document.getElementById("telefone5") as HTMLInputElement || null;  
    // var outhers = document.getElementById("telefone3") as HTMLInputElement || null;
    // var con = document.getElementById("telefone4") as HTMLInputElement || null;




    // var userDataJson = {
    //     "produtos" : userNameInput.value.toString(),
    //     "home" : userProductsInput.value.toString(),
    //     "shop": userInputFinishedSale.value.toString(),
    //     "checkout" : userInputDiscount.value.toString(),
    //     "category" : userInputSale.value.toString()
    //     "outhers": userInputFinishedSale.value.toString(),
    //     "contacts" : userInputDiscount.value.toString(),
    // }