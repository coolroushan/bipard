import React, { useEffect, useMemo, useState } from "react";

/* =========================================================
   TRANSLATIONS DICTIONARY
========================================================= */
const t = {
  en: {
    title: "Computer Competency Test",
    subtitle: "Computer Competency Test Examination",
    question: "Question",
    timeLeft: "Time Left",
    candidate: "Candidate",
    answered: "Answered",
    unanswered: "Unanswered",
    marked: "Marked",
    markedForReview: "Marked for Review",
    selectOne: "Select one correct answer",
    progress: "Progress",
    of: "of",
    clearAnswer: "Clear Answer",
    markQuestion: "Mark for Review",
    unmarkQuestion: "Unmark Question",
    previous: "← Previous",
    next: "Next Question →",
    submitTest: "Submit Test",
    palette: "Question Palette",
    navigate: "Navigate between questions",
    current: "Current",
    remaining: "Remaining",
    beforeSubmitting: "Before submitting",
    reviewWarning: "Please review unanswered and marked questions before submitting your test.",
    submitModalTitle: "Submit Test?",
    submitModalDesc: "Please confirm your submission.",
    submitModalWarning: "Once you submit the test, you will not be able to change your answers.",
    cancel: "Cancel",
    confirmSubmit: "Confirm & Submit",
    resultTitle: "Examination Result",
    submittedSuccess: "Test Submitted Successfully",
    resultDesc: "Your examination result is shown below.",
    yourScore: "Your Score",
    qualified: "Test Qualified",
    notQualified: "Test Not Qualified",
    correctAnswers: "Correct Answers",
    attempted: "Attempted",
    percentage: "Percentage",
    returnToTest: "Return to Test",
    switchLangBtn: "हिंदी में बदलें",
  },
  hi: {
    title: "कंप्यूटर योग्यता परीक्षण",
    subtitle: "कंप्यूटर योग्यता परीक्षा",
    question: "प्रश्न",
    timeLeft: "बचा हुआ समय",
    candidate: "उम्मीदवार",
    answered: "उत्तर दिया",
    unanswered: "उत्तर नहीं दिया",
    marked: "चिह्नित",
    markedForReview: "समीक्षा के लिए चिह्नित",
    selectOne: "एक सही उत्तर चुनें",
    progress: "प्रगति",
    of: "में से",
    clearAnswer: "उत्तर मिटाएं",
    markQuestion: "समीक्षा के लिए चिह्नित करें",
    unmarkQuestion: "चिह्न हटाएं",
    previous: "← पिछला",
    next: "अगला प्रश्न →",
    submitTest: "टेस्ट सबमिट करें",
    palette: "प्रश्न पैलेट",
    navigate: "प्रश्नों के बीच नेविगेट करें",
    current: "वर्तमान",
    remaining: "शेष",
    beforeSubmitting: "सबमिट करने से पहले",
    reviewWarning: "कृपया अपना टेस्ट सबमिट करने से पहले बिना उत्तर दिए और चिह्नित प्रश्नों की समीक्षा करें।",
    submitModalTitle: "टेस्ट सबमिट करें?",
    submitModalDesc: "कृपया अपनी सबमिशन की पुष्टि करें।",
    submitModalWarning: "एक बार टेस्ट सबमिट करने के बाद, आप अपने उत्तर नहीं बदल पाएंगे।",
    cancel: "रद्द करें",
    confirmSubmit: "पुष्टि करें और सबमिट करें",
    resultTitle: "परीक्षा परिणाम",
    submittedSuccess: "टेस्ट सफलतापूर्वक सबमिट हो गया",
    resultDesc: "आपका परीक्षा परिणाम नीचे दिखाया गया है।",
    yourScore: "आपका स्कोर",
    qualified: "टेस्ट उत्तीर्ण",
    notQualified: "टेस्ट अनुत्तीर्ण",
    correctAnswers: "सही उत्तर",
    attempted: "प्रयास किया",
    percentage: "प्रतिशत",
    returnToTest: "टेस्ट पर वापस लौटें",
    switchLangBtn: "Switch to English",
  },
};

/* =========================================================
   TEST DATA (BILINGUAL)
========================================================= */
const questions = [
  {
    id: 1,
    question: { en: "Which of the following is the brain of a computer?", hi: "निम्नलिखित में से कौन कंप्यूटर का मस्तिष्क है?" },
    options: { en: ["Monitor", "CPU", "Keyboard", "Printer"], hi: ["मॉनिटर", "सीपीयू (CPU)", "कीबोर्ड", "प्रिंटर"] },
    answer: 1,
  },
  {
    id: 2,
    question: { en: "Which device is primarily used to enter text into a computer?", hi: "कंप्यूटर में टेक्स्ट दर्ज करने के लिए मुख्य रूप से किस डिवाइस का उपयोग किया जाता है?" },
    options: { en: ["Monitor", "Printer", "Keyboard", "Speaker"], hi: ["मॉनिटर", "प्रिंटर", "कीबोर्ड", "स्पीकर"] },
    answer: 2,
  },
  {
    id: 3,
    question: { en: "What does CPU stand for?", hi: "CPU का पूर्ण रूप क्या है?" },
    options: { en: ["Central Processing Unit", "Computer Processing Utility", "Central Program Unit", "Computer Primary Unit"], hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूटिलिटी", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्राइमरी यूनिट"] },
    answer: 0,
  },
  {
    id: 4,
    question: { en: "Which of the following is an operating system?", hi: "निम्नलिखित में से कौन एक ऑपरेटिंग सिस्टम है?" },
    options: { en: ["Microsoft Word", "Windows", "Google Chrome", "Adobe Photoshop"], hi: ["माइक्रोसॉफ्ट वर्ड", "विंडोज (Windows)", "गूगल क्रोम", "एडोब फोटोशॉप"] },
    answer: 1,
  },
  {
    id: 5,
    question: { en: "Which shortcut is commonly used to copy selected text or files?", hi: "चयनित टेक्स्ट या फ़ाइलों को कॉपी करने के लिए आमतौर पर किस शॉर्टकट का उपयोग किया जाता है?" },
    options: { en: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"], hi: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"] },
    answer: 2,
  },
  {
    id: 6,
    question: { en: "Which shortcut is used to paste copied content?", hi: "कॉपी की गई सामग्री को पेस्ट करने के लिए किस शॉर्टकट का उपयोग किया जाता है?" },
    options: { en: ["Ctrl + P", "Ctrl + V", "Ctrl + C", "Ctrl + A"], hi: ["Ctrl + P", "Ctrl + V", "Ctrl + C", "Ctrl + A"] },
    answer: 1,
  },
  {
    id: 7,
    question: { en: "Which shortcut is commonly used to save a document?", hi: "दस्तावेज़ को सहेजने (Save) के लिए आमतौर पर किस शॉर्टकट का उपयोग किया जाता है?" },
    options: { en: ["Ctrl + S", "Ctrl + D", "Ctrl + F", "Ctrl + W"], hi: ["Ctrl + S", "Ctrl + D", "Ctrl + F", "Ctrl + W"] },
    answer: 0,
  },
  {
    id: 8,
    question: { en: "Which key is used to delete the character to the left of the cursor?", hi: "कर्सर के बाईं ओर के अक्षर को हटाने के लिए किस कुंजी का उपयोग किया जाता है?" },
    options: { en: ["Delete", "Backspace", "Insert", "Shift"], hi: ["Delete", "Backspace", "Insert", "Shift"] },
    answer: 1,
  },
  {
    id: 9,
    question: { en: "Which application is primarily used for creating and editing documents?", hi: "दस्तावेज़ बनाने और संपादित करने के लिए मुख्य रूप से किस एप्लिकेशन का उपयोग किया जाता है?" },
    options: { en: ["Microsoft Word", "Calculator", "Paint", "Media Player"], hi: ["माइक्रोसॉफ्ट वर्ड", "कैलकुलेटर", "पेंट", "मीडिया प्लेयर"] },
    answer: 0,
  },
  {
    id: 10,
    question: { en: "Which application is commonly used to create spreadsheets?", hi: "स्प्रेडशीट बनाने के लिए आमतौर पर किस एप्लिकेशन का उपयोग किया जाता है?" },
    options: { en: ["Microsoft Word", "Microsoft Excel", "Notepad", "PowerPoint"], hi: ["माइक्रोसॉफ्ट वर्ड", "माइक्रोसॉफ्ट एक्सेल", "नोटपैड", "पावरपॉइंट"] },
    answer: 1,
  },
  {
    id: 11,
    question: { en: "What is the extension of a modern Microsoft Word document?", hi: "आधुनिक माइक्रोसॉफ्ट वर्ड दस्तावेज़ का एक्सटेंशन क्या है?" },
    options: { en: [".xlsx", ".pptx", ".docx", ".jpg"], hi: [".xlsx", ".pptx", ".docx", ".jpg"] },
    answer: 2,
  },
  {
    id: 12,
    question: { en: "What is the extension commonly associated with Microsoft Excel workbooks?", hi: "माइक्रोसॉफ्ट एक्सेल वर्कबुक से आमतौर पर जुड़ा एक्सटेंशन क्या है?" },
    options: { en: [".xlsx", ".docx", ".txt", ".pptx"], hi: [".xlsx", ".docx", ".txt", ".pptx"] },
    answer: 0,
  },
  {
    id: 13,
    question: { en: "Which software is commonly used for making presentations?", hi: "प्रेजेंटेशन बनाने के लिए आमतौर पर किस सॉफ्टवेयर का उपयोग किया जाता है?" },
    options: { en: ["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Access", "Notepad"], hi: ["माइक्रोसॉफ्ट एक्सेल", "माइक्रोसॉफ्ट पावरपॉइंट", "माइक्रोसॉफ्ट एक्सेस", "नोटपैड"] },
    answer: 1,
  },
  {
    id: 14,
    question: { en: "Which of the following is a web browser?", hi: "निम्नलिखित में से कौन एक वेब ब्राउज़र है?" },
    options: { en: ["Google Chrome", "Microsoft Excel", "Windows Explorer", "Adobe Reader"], hi: ["गूगल क्रोम", "माइक्रोसॉफ्ट एक्सेल", "विंडोज एक्सप्लोरर", "एडोब रीडर"] },
    answer: 0,
  },
  {
    id: 15,
    question: { en: "What is the main purpose of a web browser?", hi: "वेब ब्राउज़र का मुख्य उद्देश्य क्या है?" },
    options: { en: ["To browse websites", "To print documents only", "To create hardware", "To scan documents"], hi: ["वेबसाइट ब्राउज़ करना", "केवल दस्तावेज़ प्रिंट करना", "हार्डवेयर बनाना", "दस्तावेज़ स्कैन करना"] },
    answer: 0,
  },
  {
    id: 16,
    question: { en: "Which symbol is commonly used in an email address?", hi: "ईमेल पते में आमतौर पर किस प्रतीक का उपयोग किया जाता है?" },
    options: { en: ["#", "&", "@", "%"], hi: ["#", "&", "@", "%"] },
    answer: 2,
  },
  {
    id: 17,
    question: { en: "Which of the following is an example of cloud storage?", hi: "निम्नलिखित में से कौन क्लाउड स्टोरेज का एक उदाहरण है?" },
    options: { en: ["Google Drive", "Keyboard", "Monitor", "CPU"], hi: ["गूगल ड्राइव", "कीबोर्ड", "मॉनिटर", "सीपीयू"] },
    answer: 0,
  },
  {
    id: 18,
    question: { en: "What does PDF stand for?", hi: "PDF का पूर्ण रूप क्या है?" },
    options: { en: ["Portable Document Format", "Personal Data File", "Public Document Folder", "Printed Data Format"], hi: ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "पब्लिक डॉक्यूमेंट फोल्डर", "प्रिंटेड डेटा फॉर्मेट"] },
    answer: 0,
  },
  {
    id: 19,
    question: { en: "Which device is used to produce a hard copy of a document?", hi: "दस्तावेज़ की हार्ड कॉपी तैयार करने के लिए किस उपकरण का उपयोग किया जाता है?" },
    options: { en: ["Scanner", "Printer", "Keyboard", "Mouse"], hi: ["स्कैनर", "प्रिंटर", "कीबोर्ड", "माउस"] },
    answer: 1,
  },
  {
    id: 20,
    question: { en: "Which device is commonly used to scan a physical document?", hi: "भौतिक दस्तावेज़ को स्कैन करने के लिए आमतौर पर किस उपकरण का उपयोग किया जाता है?" },
    options: { en: ["Printer", "Scanner", "Speaker", "Projector"], hi: ["प्रिंटर", "स्कैनर", "स्पीकर", "प्रोजेक्टर"] },
    answer: 1,
  },
  {
    id: 21,
    question: { en: "Which shortcut is commonly used to select all content?", hi: "सभी सामग्री का चयन करने (Select All) के लिए आमतौर पर किस शॉर्टकट का उपयोग किया जाता है?" },
    options: { en: ["Ctrl + A", "Ctrl + E", "Ctrl + L", "Ctrl + T"], hi: ["Ctrl + A", "Ctrl + E", "Ctrl + L", "Ctrl + T"] },
    answer: 0,
  },
  {
    id: 22,
    question: { en: "Which shortcut is commonly used to undo the last action?", hi: "अंतिम क्रिया को पूर्ववत (Undo) करने के लिए आमतौर पर किस शॉर्टकट का उपयोग किया जाता है?" },
    options: { en: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + R"], hi: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + R"] },
    answer: 2,
  },
  {
    id: 23,
    question: { en: "Which component temporarily stores data being actively used by the computer?", hi: "कौन सा घटक कंप्यूटर द्वारा सक्रिय रूप से उपयोग किए जा रहे डेटा को अस्थायी रूप से संग्रहीत करता है?" },
    options: { en: ["RAM", "Printer", "Monitor", "Keyboard"], hi: ["रैम (RAM)", "प्रिंटर", "मॉनिटर", "कीबोर्ड"] },
    answer: 0,
  },
  {
    id: 24,
    question: { en: "Which of the following is an example of an input device?", hi: "निम्नलिखित में से कौन एक इनपुट डिवाइस का उदाहरण है?" },
    options: { en: ["Monitor", "Printer", "Keyboard", "Speaker"], hi: ["मॉनिटर", "प्रिंटर", "कीबोर्ड", "स्पीकर"] },
    answer: 2,
  },
  {
    id: 25,
    question: { en: "Which of the following is an example of an output device?", hi: "निम्नलिखित में से कौन एक आउटपुट डिवाइस का उदाहरण है?" },
    options: { en: ["Keyboard", "Mouse", "Scanner", "Monitor"], hi: ["कीबोर्ड", "माउस", "स्कैनर", "मॉनिटर"] },
    answer: 3,
  },
];

const TEST_DURATION_MINUTES = 30;

/* =========================================================
   MAIN COMPONENT
========================================================= */
const Test = () => {
  const [lang, setLang] = useState("en"); // Toggle between 'en' and 'hi'
  const text = t[lang];

  const totalQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_MINUTES * 60);
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    if (submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const question = questions[currentQuestion];

  const handleAnswer = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: optionIndex,
    }));
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestion(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) goToQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) goToQuestion(currentQuestion - 1);
  };

  const clearAnswer = () => {
    setAnswers((previous) => {
      const updated = { ...previous };
      delete updated[question.id];
      return updated;
    });
  };

  const toggleMark = () => {
    setMarkedQuestions((previous) => ({
      ...previous,
      [question.id]: !previous[question.id],
    }));
  };

  const handleSubmit = () => {
    setShowSubmitModal(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const result = useMemo(() => {
    let correct = 0;
    questions.forEach((item) => {
      if (answers[item.id] === item.answer) correct++;
    });
    const attempted = Object.keys(answers).length;
    const unanswered = totalQuestions - attempted;
    const percentage = (correct / totalQuestions) * 100;
    return { correct, attempted, unanswered, percentage };
  }, [answers, totalQuestions]);

  const answeredCount = Object.keys(answers).length;
  const markedCount = Object.values(markedQuestions).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  if (submitted) {
    return (
      <ResultScreen 
        result={result} 
        totalQuestions={totalQuestions} 
        text={text} 
        onRestart={() => window.location.reload()} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#263746]">
      {/* EXAM HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#d8dee5] bg-white shadow-sm">
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* LEFT */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#07336d] text-white shadow-sm">
                <span className="text-lg">▣</span>
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-sm font-bold text-[#172b40] sm:text-base">{text.title}</h1>
                <p className="hidden text-xs text-gray-500 sm:block">{text.subtitle}</p>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden flex-1 justify-center lg:flex">
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">{text.question}</p>
                <p className="text-sm font-bold text-[#07336d]">
                  {currentQuestion + 1} / {totalQuestions}
                </p>
              </div>
            </div>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-3 shrink-0">
              {/* LANGUAGE SWITCHER */}
              <button
                onClick={toggleLanguage}
                className="rounded-md border border-[#07336d] px-3 py-1.5 text-xs font-semibold text-[#07336d] transition hover:bg-[#eef5ff]"
              >
                {text.switchLangBtn}
              </button>

              {/* TIMER */}
              <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${timeLeft <= 300 ? "border-red-200 bg-red-50 text-red-600" : "border-[#dce5ef] bg-[#f5f8fc] text-[#263746]"}`}>
                <span className="text-base">◷</span>
                <div>
                  <p className="hidden text-[10px] font-medium uppercase sm:block">{text.timeLeft}</p>
                  <p className="text-sm font-bold tabular-nums">{formatTime(timeLeft)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e6ebf0]">
            <div className="h-full rounded-full bg-[#07336d] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* CANDIDATE BAR */}
      <div className="border-b border-[#dce2e7] bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f0ff] text-sm font-bold text-[#07336d]">C</div>
              <div>
                <p className="text-sm font-semibold text-[#263746]">{text.candidate}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge count={answeredCount} label={text.answered} type="answered" />
              <StatusBadge count={unansweredCount} label={text.unanswered} type="unanswered" />
              <StatusBadge count={markedCount} label={text.marked} type="marked" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          
          {/* QUESTION CARD */}
          <section className="min-w-0 overflow-visible rounded-xl border border-[#d8dee5] bg-white shadow-sm">
            <div className="border-b border-[#e2e7ec] bg-[#f8f9fa] px-4 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-md bg-[#07336d] px-2.5 py-1 text-xs font-bold text-white">
                      Q{currentQuestion + 1}
                    </span>
                    {markedQuestions[question.id] && (
                      <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">{text.markedForReview}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{text.selectOne}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{text.progress}</p>
                  <p className="text-sm font-semibold text-[#07336d]">{currentQuestion + 1} {text.of} {totalQuestions}</p>
                </div>
              </div>
            </div>

            {/* QUESTION TEXT */}
            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="max-w-4xl text-lg font-semibold leading-8 text-[#172b40] sm:text-xl">
                {question.question[lang]}
              </h2>

              {/* OPTIONS */}
              <div className="mt-7 space-y-3">
                {question.options[lang].map((option, index) => {
                  const selected = answers[question.id] === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      className={`group flex w-full items-center gap-3 rounded-lg border p-4 text-left transition ${selected ? "border-[#07336d] bg-[#eef5ff] shadow-sm" : "border-[#dce2e8] bg-white hover:border-[#9bbde9] hover:bg-[#f8fbff]"}`}
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition ${selected ? "border-[#07336d] bg-[#07336d] text-white" : "border-[#cfd8e2] bg-[#f8f9fa] text-gray-600 group-hover:border-[#07336d] group-hover:text-[#07336d]"}`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className={`flex-1 text-sm leading-6 sm:text-base ${selected ? "font-medium text-[#07336d]" : "text-[#263746]"}`}>
                        {option}
                      </span>
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#07336d] bg-[#07336d] text-xs text-white" : "border-[#cfd8e2]"}`}>
                        {selected && "✓"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ACTIONS */}
              <div className="mt-8 border-t border-[#e4e8ec] pt-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={clearAnswer}
                    disabled={answers[question.id] === undefined}
                    className="rounded-md border border-[#d5dce3] bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {text.clearAnswer}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMark}
                    className={`rounded-md border px-4 py-2.5 text-sm font-medium transition ${markedQuestions[question.id] ? "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100" : "border-[#d5dce3] bg-white text-gray-600 hover:bg-gray-50"}`}
                  >
                    {markedQuestions[question.id] ? text.unmarkQuestion : text.markQuestion}
                  </button>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="mt-6 flex flex-col gap-3 border-t border-[#e4e8ec] pt-5 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#cfd8e2] bg-white px-5 text-sm font-semibold text-[#263746] transition hover:bg-[#f5f8fb] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {text.previous}
                </button>
                {currentQuestion === totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(true)}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a] hover:shadow-md"
                  >
                    {text.submitTest} <span>✓</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a] hover:shadow-md"
                  >
                    {text.next}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* QUESTION PALETTE */}
          <aside className="h-fit lg:sticky lg:top-[145px]">
            <section className="overflow-hidden rounded-xl border border-[#d8dee5] bg-white shadow-sm">
              <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-4 py-4">
                <h3 className="text-sm font-semibold text-[#263746]">{text.palette}</h3>
                <p className="mt-1 text-xs text-gray-500">{text.navigate}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 border-b border-[#e4e8ec] p-4">
                <Legend className="bg-[#07336d]" label={text.answered} />
                <Legend className="bg-[#e9edf1]" label={text.unanswered} />
                <Legend className="bg-amber-400" label={text.marked} />
                <Legend className="ring-2 ring-[#07336d] ring-offset-1" label={text.current} />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((item, index) => {
                    const answered = answers[item.id] !== undefined;
                    const marked = markedQuestions[item.id];
                    const current = currentQuestion === index;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => goToQuestion(index)}
                        className={`relative flex h-10 items-center justify-center rounded-md border text-xs font-semibold transition ${current ? "border-[#07336d] bg-[#07336d] text-white shadow-sm ring-2 ring-[#07336d]/20" : marked ? "border-amber-300 bg-amber-400 text-white" : answered ? "border-[#07336d] bg-[#eaf2ff] text-[#07336d]" : "border-[#d6dde4] bg-[#f7f9fb] text-gray-600 hover:border-[#07336d] hover:text-[#07336d]"}`}
                      >
                        {index + 1}
                        {answered && !current && (
                          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#07336d] text-[8px] text-white">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="border-t border-[#e4e8ec] bg-[#fafbfc] p-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-[#07336d]">{answeredCount}</p>
                    <p className="text-[10px] text-gray-500">{text.answered}</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-500">{unansweredCount}</p>
                    <p className="text-[10px] text-gray-500">{text.remaining}</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">{markedCount}</p>
                    <p className="text-[10px] text-gray-500">{text.marked}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SUBMIT CARD */}
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-xs font-semibold text-red-700">{text.beforeSubmitting}</p>
              <p className="mt-1 text-xs leading-5 text-red-600">{text.reviewWarning}</p>
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="mt-3 w-full rounded-md border border-red-200 bg-white px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
              >
                {text.submitTest}
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* SUBMIT MODAL */}
      {showSubmitModal && (
        <SubmitModal 
          answered={answeredCount} 
          marked={markedCount} 
          unanswered={unansweredCount} 
          onCancel={() => setShowSubmitModal(false)} 
          onConfirm={handleSubmit} 
          text={text} 
        />
      )}
    </div>
  );
};

/* =========================================================
   STATUS BADGE
========================================================= */
const StatusBadge = ({ label, count, type }) => {
  const styles = {
    answered: "border-blue-100 bg-blue-50 text-[#07336d]",
    unanswered: "border-gray-200 bg-gray-50 text-gray-600",
    marked: "border-amber-100 bg-amber-50 text-amber-700",
  };
  return (
    <div className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium ${styles[type]}`}>
      <span>{label}</span>
      <span className="font-bold">{count}</span>
    </div>
  );
};

/* =========================================================
   LEGEND
========================================================= */
const Legend = ({ label, className }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 shrink-0 rounded-sm ${className}`} />
      <span className="text-[10px] text-gray-600">{label}</span>
    </div>
  );
};

/* =========================================================
   SUBMIT MODAL
========================================================= */
const SubmitModal = ({ answered, unanswered, marked, onCancel, onConfirm, text }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#172b40]/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="border-b border-[#e2e7ec] bg-[#f8f9fa] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">!</div>
            <div>
              <h3 className="text-base font-semibold text-[#172b40]">{text.submitModalTitle}</h3>
              <p className="text-xs text-gray-500">{text.submitModalDesc}</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm leading-6 text-gray-600">{text.submitModalWarning}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <SummaryBox label={text.answered} type="blue" value={answered} />
            <SummaryBox label={text.unanswered} type="gray" value={unanswered} />
            <SummaryBox label={text.marked} type="amber" value={marked} />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-3 border-t border-[#e2e7ec] bg-[#fafbfc] p-4 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className="rounded-md border border-[#d2dae2] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            {text.cancel}
          </button>
          <button type="button" onClick={onConfirm} className="rounded-md bg-[#07336d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#05224a]">
            {text.confirmSubmit}
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   SUMMARY BOX
========================================================= */
const SummaryBox = ({ value, label, type }) => {
  const styles = {
    blue: "bg-blue-50 text-[#07336d]",
    gray: "bg-gray-50 text-gray-600",
    amber: "bg-amber-50 text-amber-700",
  };
  return (
    <div className={`rounded-lg p-3 text-center ${styles[type]}`}>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] font-medium">{label}</p>
    </div>
  );
};

/* =========================================================
   RESULT SCREEN
========================================================= */
const ResultScreen = ({ result, totalQuestions, text, onRestart }) => {
  const passed = result.percentage >= 40;
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#263746]">
      <header className="border-b border-[#d8dee5] bg-white shadow-sm">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#07336d] text-white">▣</div>
            <div>
              <h1 className="text-base font-bold text-[#172b40]">{text.title}</h1>
              <p className="text-xs text-gray-500">{text.resultTitle}</p>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 lg:py-12">
        <section className="overflow-hidden rounded-xl border border-[#d8dee5] bg-white shadow-md">
          <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-5 py-8 text-center">
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl ${passed ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
              {passed ? "✓" : "!"}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#172b40]">{text.submittedSuccess}</h2>
            <p className="mt-2 text-sm text-gray-500">{text.resultDesc}</p>
          </div>
          <div className="p-5 sm:p-8">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm font-medium text-gray-500">{text.yourScore}</p>
              <div className="mt-2 text-5xl font-bold text-[#07336d]">
                {result.correct} <span className="text-2xl text-gray-400">/ {totalQuestions}</span>
              </div>
              <p className={`mt-3 text-sm font-semibold ${passed ? "text-green-600" : "text-red-600"}`}>
                {passed ? text.qualified : text.notQualified}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ResultStat label={text.correctAnswers} type="correct" value={result.correct} />
              <ResultStat label={text.attempted} type="attempted" value={result.attempted} />
              <ResultStat label={text.unanswered} type="unanswered" value={result.unanswered} />
            </div>
            <div className="mt-6 rounded-lg border border-[#dce3ea] bg-[#fafbfc] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{text.percentage}</span>
                <span className="text-sm font-bold text-[#07336d]">{result.percentage.toFixed(2)}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e4e9ee]">
                <div className="h-full rounded-full bg-[#07336d]" style={{ width: `${result.percentage}%` }} />
              </div>
            </div>
            <button
              type="button"
              onClick={onRestart}
              className="mx-auto mt-7 flex min-h-11 items-center justify-center rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a]"
            >
              {text.returnToTest}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

/* =========================================================
   RESULT STAT
========================================================= */
const ResultStat = ({ label, value, type }) => {
  const styles = {
    correct: "border-green-100 bg-green-50 text-green-700",
    attempted: "border-blue-100 bg-blue-50 text-[#07336d]",
    unanswered: "border-gray-200 bg-gray-50 text-gray-600",
  };
  return (
    <div className={`rounded-lg border p-4 text-center ${styles[type]}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs font-medium">{label}</p>
    </div>
  );
};

export default Test;