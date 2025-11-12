import { Check } from "lucide-react";
import Image from "next/image";

const PaymentCard = () => {
  return (
    <div className="grid grid-rows-[4fr_auto_6fr] h-full">
      {/* Row 1  */}
      <div className="rounded-t-3xl bg-white grid grid-rows-[4fr_6fr] p-5">
        <div className="flex items-center justify-center">
          <Check 
          className="bg-green-800 text-white rounded-full h-12 w-12 p-1 border-10 border-pink-300"
          />
        </div>
        <div className="flex flex-col items-center mt-5">
          <p className="text-2xl font-medium">Thank you!</p>
          <p className="text-sm text-gray-500">
            Your transaction was successful
          </p>
        </div>
      </div>

      {/* Row 2  */}
      <div className="relative">
        <div className="bg-white border-t border-dashed border-gray-300"></div>
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-100 rounded-full" />
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-100 rounded-full" />
      </div>

      {/* Row 3 */}
      <div className="rounded-b-3xl bg-white grid grid-rows-[5fr_5fr_10fr] p-5">
        <div className="grid grid-rows-[1fr_1fr]">
          <div className="flex justify-between text-xs text-gray-500">
            <p>TRANSACTION ID</p>
            <p>AMOUNT</p>
          </div>
          <div className="flex justify-between text-base">
            <p>021008007777</p>
            <p>$25.00</p>
          </div>
        </div>
        <div className="">
          <p className="text-xs text-gray-500">DATE & TIME</p>
          <p className="text-base">12 NOV 2025 . 11:11 pm</p>
        </div>
        <div className="bg-gray-200 rounded-3xl mt-1 grid grid-cols-10">
          <div className="col-span-10 md:col-span-3 flex items-center justify-end">
          <Image src="/MasterCard.png" alt="MasterCard" width={120} height={100}/></div>
          <div className="col-span-10 md:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-semibold">Muhammed Fayis</p>
            <p className="'text-sm font-medium">**** 0025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
