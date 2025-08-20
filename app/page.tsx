import React from "react";
import Image from "next/image";
import money from "./images/Money.png";
import MoneyShare from "@/components/MoneyShare";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-800">
          Money Share Calculator
        </h1>
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">
          คำนวนเงินที่ต้องการหารค่าใช้จ่ายกัน
        </h3>
        <Image
          className="mx-auto mt-4 mb-8" 
          src={money}
          alt="Money"
          width={100}
          height={100}
        />
        <MoneyShare/>
      </div>
      <h3>
        Developed by  {''}
        <span className="font-bold text-blue-400">Luttapon DTI SAU TEAM</span>
      </h3>
    </div>
  );
}
