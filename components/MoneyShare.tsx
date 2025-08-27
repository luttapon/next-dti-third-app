"use client";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";

export default function MoneyShare() {
  const [money, setMoney] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");

  const handleClickResetUICValues = () => {
    setMoney("");
    setPerson("");
    setMoneyShare("0.00");
  };

  const handleClickMoneyShare = () => {
    if (money === "" || person === "") {
      alert("กรุณาป้อนจํานวนเงินและจํานวนคน");
      return;
    }
    const moneyShare = (Number(money) / Number(person)).toFixed(2);
    setMoneyShare(moneyShare);
  };

  return (
    <div>
      <h3 className="font-bold text-xl text-gray-500 mb-4">จำนวนเงิน</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจํานวนเงิน"
        className="border-2 border-gray-500 rounded-md p-4 
        focus:ring-blue-400 focus:outline-none  focus:ring-2"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />

      <h3 className="font-bold text-xl text-gray-500 mt-8 mb-4">จำนวนคน</h3>
      <input
        type="number"
        id="person"
        min={0}
        placeholder="ป้อนจํานวนคน"
        className="border-2 border-gray-500 rounded-md p-4 
        focus:ring-blue-400 focus:outline-none  focus:ring-2"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />

      <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={handleClickMoneyShare}>
        คำนวน
      </button>
      <button
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={handleClickResetUICValues}>
        ยกเลืก
      </button>
      <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-800">
          หารกันคนละ
          <span className="font-bold text-red-600 text-2xl">{moneyShare}</span>
          บาท
        </h3>
      </div>
    </div>
  );
}
