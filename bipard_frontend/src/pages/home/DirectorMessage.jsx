import React from "react";
import { FilePenLine } from "lucide-react";
import { portalData } from "../../data/content";

export default function DirectorMessage() {
  // Fallback data in case portalData is missing during testing
  const messages = portalData?.directorMessage || [
    "मुझे यह सूचित करते हुए अपार हर्ष हो रहा है कि बिहार लोक प्रशासन एवं ग्रामीण विकास संस्थान (बिपार्ड) द्वारा अब कम्प्यूटर सक्षमता जाँच परीक्षा प्रारम्भ की जा रही है। पहले यह परीक्षा NIELIT नाम की संस्था लेती थी। अब बिहार सरकार द्वारा विभागीय नियमों में बदलाव करते हुए बिहार सरकारी सेवक (कम्प्यूटर सक्षमता जाँच परीक्षा) नियमावली 2022 गठित की गयी है। यह नियमावली इस लिंक पर देखी जा सकती है।",
    "यह परीक्षा वैसे सभी कर्मियों को देनी होगी जिनकी सेवा संवर्ग नियमावली में कम्प्यूटर परीक्षा की उत्तीर्णता की बाध्यता है।",
    "यह परीक्षा बिपार्ड के पटना एवं गया परिसर में ली जायेगी। साथ ही यह परीक्षा पूरे वर्ष दी जा सकती है। यानि कि इच्छुक सरकारी कर्मी अपनी सुविधानुसार स्वयं तय कर सकते हैं कि वह किस तिथि को यह परीक्षा देना चाहेंगे।",
    "कर्मीगण हमारी वेबसाइट पर परीक्षा हेतु पंजीकरण करते हुए अपनी परीक्षा की तिथि, समय तथा स्थान का चयन स्वयं कर सकते हैं।",
    "मेरा यह भी अनुरोध होगा कि परीक्षा देने के उपरांत अपना फीडबैक बिपार्ड को उपलब्ध करायें ताकि बिपार्ड इस परीक्षा को और भी सुव्यवस्थित कर सके और बेहतर गुणवत्ता प्रदान कर सके।"
  ];

  return (
    <section 
      className="flex-1 min-w-0 bg-[#f8fafc] p-6 md:p-10 lg:p-12 overflow-y-auto rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
      style={{ fontFamily: '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif' }}
    >
      
      {/* ── Header Section ── */}
      <div className="flex items-start gap-4 mb-8">
        {/* Blue Circular Icon Container */}
        <div className="mt-1 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#1a4480] flex items-center justify-center shrink-0 shadow-md">
          <FilePenLine size={20} color="#ffffff" strokeWidth={2} />
        </div>
        
        {/* Title and Gold Underline */}
        <div className="flex flex-col">
          <h2 className="text-[#1e293b] text-[22px] md:text-[26px] font-bold tracking-wide">
            ॥ महानिदेशक का संदेश ॥
          </h2>
          <div className="w-[140px] md:w-[170px] h-[3px] bg-[#d4a017] mt-3 rounded-full" />
        </div>
      </div>

      {/* ── Message Content ── */}
      <div className="flex flex-col gap-[20px]">
        {messages.map((para, idx) => {
          // Detect and format the hyperlink in the first paragraph
          if (para.includes("इस लिंक")) {
            const parts = para.split("इस लिंक");
            return (
              <p key={idx} className="text-[#334155] text-[15px] md:text-[16px] leading-[1.85]">
                {parts[0]}
                <a 
                  href="/BOR.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#075fb8] font-semibold hover:underline"
                >
                  इस लिंक
                </a>
                {parts[1]}
              </p>
            );
          }

          // Standard paragraphs
          return (
            <p key={idx} className="text-[#334155] text-[15px] md:text-[16px] leading-[1.85]">
              {para}
            </p>
          );
        })}
      </div>

      {/* ── Signature Section ── */}
      <div className="mt-14 flex justify-end">
        <div className="inline-flex flex-col items-center">
          <span className="text-[#475569] text-[14px] font-medium mb-4">
            शुभकामनाओं सहित।
          </span>
          
          {/* Formal Signature Box */}
          <div className="border border-[#cbd5e1] rounded-[4px] px-8 py-2.5 bg-white shadow-sm mb-3">
            <span className="text-[#1e293b] font-bold text-[17px] md:text-[19px]">
              ( डॉ. बी. राजेंद्र )
            </span>
          </div>
          
          <span className="text-[#475569] text-[13px]">
            महानिदेशक बिपार्ड, बिहार
          </span>
        </div>
      </div>

    </section>
  );
}