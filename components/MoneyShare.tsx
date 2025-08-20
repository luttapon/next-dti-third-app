"use client";

export default function MoneyShare() {
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
      />
      <h3 className="font-bold text-xl text-gray-500 mt-8 mb-4">จำนวนคน</h3>
      <input
        type="number"
        id="person"
        min={0}
        placeholder="ป้อนจํานวนคน"
        className="border-2 border-gray-500 rounded-md p-4 
        focus:ring-blue-400 focus:outline-none  focus:ring-2"
      />
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        คำนวน
        </button>
            <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8">
        ยกเลืก
        </button>
        <div className="mt-8 text-center" >
            <h3 className="font-bold text-xl text-gray-800">
                หารกันคนละ
                <span className="font-bold text-red-600 text-2xl">0.00</span>
                บาท 
            </h3>
        </div>
    </div>
  );
}
