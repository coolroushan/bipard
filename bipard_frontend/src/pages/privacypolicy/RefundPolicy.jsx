import React from "react";
import { Undo2 } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10 lg:py-12 flex flex-col gap-4 bg-white text-[#334155]">

      {/* Header */}
      <h1
        className="flex items-center gap-4 text-[#052B59] font-bold text-[26px] lg:text-[32px] tracking-wide mb-2"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#06366F] shadow-sm border-2 border-[#E3AD54]/30 shrink-0">
          <Undo2
            className="text-white"
            size={24}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>

        Refund Policy
      </h1>

      {/* Gold Underline */}
      <hr className="w-[120px] h-[3px] bg-[#E3AD54] border-0 rounded-full mb-4" />

      {/* Introduction */}
      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        राजस्व पर्षद, बिहार द्वारा संचालित BOR Exam Portal पर परीक्षा आवेदन एवं
        परीक्षा शुल्क से संबंधित भुगतान के लिए यह Refund Policy लागू होगी।
        परीक्षार्थियों से अनुरोध है कि परीक्षा शुल्क का भुगतान करने से पहले
        आवेदन एवं भुगतान से संबंधित सभी विवरणों की जांच कर लें।
      </p>

      {/* Important Notice */}
      <div className="bg-[#FFF7E6] border border-[#F5D48A] rounded-lg p-4 my-2">
        <p
          className="text-[14.5px] leading-[1.7] font-medium text-[#1E293B]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong>महत्वपूर्ण सूचना:</strong> परीक्षा शुल्क का भुगतान करने से
          पहले परीक्षार्थी आवेदन की जानकारी, परीक्षा तिथि, समय एवं परीक्षा
          केंद्र का चयन सावधानीपूर्वक सुनिश्चित करें।
        </p>
      </div>

      {/* Definitions */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        परिभाषाएँ
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        इस Refund Policy के अंतर्गत:
      </p>

      <ul
        className="list-disc list-inside ml-2 flex flex-col gap-2 text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        <li>
          <strong className="text-[#1E293B] mr-1">
            परीक्षा पोर्टल
          </strong>
          से तात्पर्य BOR Exam Portal से है, जिसके माध्यम से परीक्षा संबंधी
          ऑनलाइन सेवाएं उपलब्ध कराई जाती हैं।
        </li>

        <li>
          <strong className="text-[#1E293B] mr-1">
            परीक्षार्थी
          </strong>
          से तात्पर्य उस सरकारी कर्मी/पदाधिकारी से है जो परीक्षा हेतु
          पोर्टल पर पंजीकरण एवं आवेदन करता है।
        </li>

        <li>
          <strong className="text-[#1E293B] mr-1">
            परीक्षा शुल्क
          </strong>
          से तात्पर्य परीक्षा आवेदन के दौरान पोर्टल के माध्यम से जमा की गई
          निर्धारित राशि से है।
        </li>

        <li>
          <strong className="text-[#1E293B] mr-1">
            भुगतान
          </strong>
          से तात्पर्य परीक्षा शुल्क के लिए पोर्टल पर उपलब्ध अधिकृत भुगतान
          माध्यम के द्वारा किए गए transaction से है।
        </li>
      </ul>

      {/* Examination Fee */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        परीक्षा शुल्क
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        परीक्षा आवेदन के दौरान निर्धारित परीक्षा शुल्क का भुगतान परीक्षार्थी
        द्वारा पोर्टल पर उपलब्ध अधिकृत ऑनलाइन भुगतान माध्यम से किया जा सकता
        है। भुगतान करने से पहले परीक्षार्थी को आवेदन एवं भुगतान से संबंधित
        विवरण की पुष्टि कर लेनी चाहिए।
      </p>

      {/* Cancellation */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        आवेदन रद्दीकरण
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        सफलतापूर्वक जमा किए गए परीक्षा आवेदन को रद्द करने अथवा उसमें परिवर्तन
        करने की सुविधा केवल पोर्टल पर उपलब्ध नियमों एवं संबंधित परीक्षा
        प्रक्रिया के अनुसार ही लागू होगी। केवल आवेदन रद्द करने के आधार पर
        परीक्षा शुल्क की वापसी स्वतः सुनिश्चित नहीं मानी जाएगी।
      </p>

      {/* Refund Eligibility */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Refund की पात्रता
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        परीक्षा शुल्क सामान्यतः वापस नहीं किया जाएगा। हालांकि, यदि भुगतान
        तकनीकी कारणों से सफल न होने के बावजूद बैंक खाते से राशि कट जाती है,
        या एक ही आवेदन के लिए एक से अधिक बार सफल भुगतान हो जाता है, तो
        transaction की जांच के बाद नियमानुसार refund की प्रक्रिया की जा सकती
        है।
      </p>

      {/* Failed Transaction */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        असफल भुगतान (Failed Transaction)
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        यदि भुगतान प्रक्रिया के दौरान transaction असफल हो जाता है लेकिन
        परीक्षार्थी के बैंक खाते से राशि कट जाती है, तो संबंधित transaction
        की पुष्टि एवं reconciliation के बाद राशि वापस की जा सकती है।
        Refund की वास्तविक अवधि बैंक/भुगतान सेवा प्रदाता की प्रक्रिया पर
        निर्भर कर सकती है।
      </p>

      {/* Duplicate Payment */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Duplicate Payment
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        यदि किसी तकनीकी अथवा अन्य कारण से एक ही परीक्षा आवेदन के लिए एक से
        अधिक सफल payment हो जाता है, तो संबंधित transaction की जांच के बाद
        अतिरिक्त भुगतान की राशि, यदि refund के लिए पात्र पाई जाती है, तो
        नियमानुसार वापस की जा सकती है।
      </p>

      {/* Non Refundable */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Non-Refundable परिस्थितियाँ
      </h2>

      <ul
        className="list-disc list-inside ml-2 flex flex-col gap-2 text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        <li>
          परीक्षार्थी द्वारा गलत जानकारी भरने के कारण उत्पन्न समस्या।
        </li>

        <li>
          परीक्षार्थी द्वारा परीक्षा तिथि, समय या केंद्र का गलत चयन।
        </li>

        <li>
          परीक्षार्थी द्वारा परीक्षा में अनुपस्थित रहने की स्थिति।
        </li>

        <li>
          परीक्षार्थी द्वारा व्यक्तिगत कारणों से परीक्षा में शामिल नहीं होने
          की स्थिति।
        </li>

        <li>
          परीक्षा नियमों अथवा पात्रता संबंधी शर्तों के उल्लंघन के कारण आवेदन
          निरस्त होने की स्थिति।
        </li>
      </ul>

      {/* Refund Process */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Refund की प्रक्रिया
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Refund के लिए पात्र transaction की पहचान एवं सत्यापन के बाद refund
        संबंधित payment source अथवा transaction में प्रयुक्त मूल भुगतान
        माध्यम में किया जा सकता है। Refund की राशि प्राप्त होने में लगने
        वाला समय संबंधित बैंक एवं payment gateway की processing time पर
        निर्भर करेगा।
      </p>

      {/* Refund Request */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Refund Request
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Refund से संबंधित शिकायत अथवा अनुरोध के लिए परीक्षार्थी को अपना
        Registration/Application Number, Transaction ID, भुगतान की तिथि,
        भुगतान की गई राशि तथा अन्य आवश्यक विवरण उपलब्ध कराना पड़ सकता है।
        बिना आवश्यक transaction details के refund request की जांच में समय
        लग सकता है।
      </p>

      {/* Important Payment Note */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4 my-2">
        <p
          className="text-[14.5px] leading-[1.7] text-[#334155]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong className="text-[#052B59]">
            भुगतान संबंधी सावधानी:
          </strong>{" "}
          परीक्षार्थी को भुगतान प्रक्रिया के दौरान browser को बंद करने,
          refresh करने अथवा payment प्रक्रिया को बीच में रोकने से बचना
          चाहिए। सफल payment के बाद transaction status की पुष्टि अवश्य करें।
        </p>
      </div>

      {/* Contact */}
      <h2
        className="text-[#052B59] text-[18px] lg:text-[20px] font-bold mt-4"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        Contact Us
      </h2>

      <p
        className="text-[15px] leading-[1.75] font-normal"
        style={{
          fontFamily:
            '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
        }}
      >
        परीक्षा शुल्क, failed transaction, duplicate payment अथवा refund से
        संबंधित किसी समस्या के लिए BOR Exam Portal के अधिकृत सहायता माध्यम
        से संपर्क करें।
      </p>

      <div className="mt-2 p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
        <p
          className="text-[15px] leading-[1.8]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong className="text-[#052B59]">
            Exam Helpline:
          </strong>{" "}
          <a
            href="tel:06122217848"
            className="text-[#1260B2] hover:underline font-medium"
          >
            0612-2217848
          </a>
        </p>

        <p
          className="text-[15px] leading-[1.8]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong className="text-[#052B59]">
            Email:
          </strong>{" "}
          <a
            href="mailto:borexam@bihar.gov.in"
            className="text-[#1260B2] hover:underline font-medium break-all"
          >
            borexam@bihar.gov.in
          </a>
        </p>

        <p
          className="text-[15px] leading-[1.8] mt-1"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong className="text-[#052B59]">
            Technical Support:
          </strong>{" "}
          <a
            href="tel:06122452018"
            className="text-[#1260B2] hover:underline font-medium"
          >
            0612-2452018
          </a>
        </p>

        <p
          className="text-[15px] leading-[1.8]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          <strong className="text-[#052B59]">
            Technical Support Email:
          </strong>{" "}
          <a
            href="mailto:departmentalexamtechsprt@gmail.com"
            className="text-[#1260B2] hover:underline font-medium break-all"
          >
            departmentalexamtechsprt@gmail.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-[#E2E8F0]">
        <p
          className="text-[#052B59] font-semibold text-[14px]"
          style={{
            fontFamily:
              '"Noto Sans Devanagari", "Nirmala UI", Arial, sans-serif',
          }}
        >
          राजस्व पर्षद, बिहार
        </p>

        <p className="text-[#64748B] text-[13px] mt-1">
          Board of Revenue, Government of Bihar
        </p>
      </div>
    </div>
  );
}