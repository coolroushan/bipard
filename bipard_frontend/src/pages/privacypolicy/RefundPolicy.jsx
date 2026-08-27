import React from "react";
import { Undo2 } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-16 py-12 md:py-10 flex flex-col gap-4 bg-white text-[#334155]">
      
      {/* Header (Using span to wrap the icon to avoid nested divs) */}
      <h1 className="flex items-center gap-4 text-[#052B59] font-bold text-[26px] lg:text-[32px] tracking-wide mb-2">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#06366F] shadow-sm border-2 border-[#E3AD54]/30 shrink-0">
          <Undo2 className="text-white" size={24} strokeWidth={2.5} aria-hidden="true" />
        </span>
        Return & Refund Policy
      </h1>

      {/* Gold Underline */}
      <hr className="w-[120px] h-[3px] bg-[#E3AD54] border-0 rounded-full mb-4" />

      {/* Introduction */}
      <p className="text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        Thanks for shopping at BIPARD Exam Portal.
        <br />
        If you are not entirely satisfied with your purchase, we're here to help.
      </p>

      {/* Definitions Section */}
      <h2 className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4">Definitions</h2>
      <p className="text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        For the purposes of this Return and Refund Policy:
      </p>
      
      <ul className="list-disc list-inside ml-2 flex flex-col gap-2 text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        <li>
          <strong className="text-[#1E293B] mr-1">Company</strong> 
          (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Bihar Institute of Public Administration and Rural Development, Walmi Campus, Phulwarisharif, Patna, Bihar.
        </li>
        <li>
          <strong className="text-[#1E293B] mr-1">Goods</strong> 
          refer to the items offered for sale on the Service.
        </li>
        <li>
          <strong className="text-[#1E293B] mr-1">Orders</strong> 
          mean a request by You to purchase Goods from Us.
        </li>
        <li>
          <strong className="text-[#1E293B] mr-1">Service</strong> 
          refers to the Website.
        </li>
      </ul>

      {/* Returns Section */}
      <h2 className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4">Returns</h2>
      <p className="text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        You have 20 calendar days to return an item from the date you received it. Your item needs to have the receipt or proof of purchase.
      </p>

      {/* Refunds Section */}
      <h2 className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4">Refunds</h2>
      <p className="text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        If your return is approved, we will initiate a refund to your credit card (or original method of payment). A refund of 50% will be provided. You will receive the credit within a certain amount of days, depending on your card issuer's policies.
      </p>

      {/* Contact Section */}
      <h2 className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4">Contact Us</h2>
      <p className="text-[15px] leading-[1.75] font-normal" style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}>
        If you have any questions on how to return your item to us, contact us.
      </p>

    </div>
  );
}