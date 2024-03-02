import React from "react";
import gambar1 from "../Gambar/baju1.jpg"
import gambar2 from "../Gambar/baju2.jpg"
import gambar3 from "../Gambar/baju3.jpg"

const NewArrival = () => {
    return(
        <div>
            <p className="mt-[100px] text-3xl text-center font-bold" id="NewArrivals">NEW ARRIVALS</p>
            <div className="w-[140px] bg-black absolute h-1 left-1/2 -translate-x-1/2 mb-8"></div>
            
            <div className=" grid grid-cols-3 grid-flow-row gap-[52px] w-[1086px] mx-auto mt-16" >
                <div >
                <img src= {gambar1} className="" alt="" />
                <p className="font-semibold text-center">FFP 10</p>
                <p className="tracking-widest text-center">IDR. xxx.xxx,-</p>
                </div>

                <div>
                <img src={gambar2} className="" alt="" />
                <p className="font-semibold text-center">BOX CUT</p>
                <p className="tracking-widest text-center">IDR. xxx.xxx,-</p>
                </div>

                <div>
                <img src={gambar3} className="" alt="" />
                <p className="font-semibold text-center">PUNK</p>
                <p className="tracking-widest text-center">IDR. xxx.xxx,-</p>
                </div>
            </div>

            <button className="flex border border-4 border-black w-[302px] h-[60px] mx-auto mt-[61px] items-center justify-center text-xl font-bold">SHOW MORE</button>
        </div>
    )
}

export default NewArrival