import React from "react";
import logoffp from "../Gambar/logoffp.jpg"
import cart from "../Gambar/cart.png"


const Header = () => {
    return(
        <div>
            <div className="fixed w-full grid grid-cols-3 top-0 z-10 bg-white">
                    <li className="grid  list-none grid-cols-3 place-items-center place-self-center w-3/4 ml-">
                        <ul className="" ><a href="#NewArrivals">NEW ARRIVALS</a> </ul>
                        <ul>ACCESSORIES</ul>
                        <ul>DROPS</ul>
                    </li>
                <img src={logoffp} alt="" className="h-20 w-20 m-auto" />
                <img src={cart} alt="" className="h-7 w-7 justify-self-end place-self-center mr-10" />
            </div>
        </div>
    )
}

export default Header