import { Check } from "lucide-react";
import Image from "next/image";

const PaymentCard = () => {
  return (
    <div className="flex flex-col h-full shadow-sm rounded-3xl">
      {/* Top half */}
      <div className="rounded-t-3xl bg-white flex-[0.4] p-4 md:p-6 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center mb-3 md:mb-5">
          <Check 
            className="bg-green-800 text-white rounded-full h-10 w-10 md:h-12 md:w-12 p-1.5 border-[6px] md:border-8 border-pink-300"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-2xl font-medium">Thank you!</p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Your transaction was successful
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="relative bg-white border-t border-dashed border-gray-200">
        <div className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-slate-100 rounded-full" />
        <div className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-slate-100 rounded-full" />
      </div>

      {/* Bottom half */}
      <div className="rounded-b-3xl bg-white flex-[0.6] p-4 md:p-6 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider">
            <p>TRANSACTION ID</p>
            <p>AMOUNT</p>
          </div>
          <div className="flex justify-between text-sm md:text-base font-medium">
            <p>021008007777</p>
            <p className="font-bold">$25.00</p>
          </div>
        </div>
        
        <div>
          <p className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wider mb-1">DATE &amp; TIME</p>
          <p className="text-sm md:text-base font-medium">12 NOV 2025 . 11:11 pm</p>
        </div>
        
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-3 md:p-4 flex items-center justify-between mt-auto">
          <div className="flex items-center w-16 md:w-20">
            <Image src="/MasterCard.png" alt="MasterCard" width={80} height={50} className="object-contain" />
          </div>
          <div className="flex flex-col text-right">
            <p className="text-xs md:text-sm font-semibold">Muhammed Fayis</p>
            <p className="text-[10px] md:text-xs font-medium text-gray-500 mt-0.5">**** 0025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
