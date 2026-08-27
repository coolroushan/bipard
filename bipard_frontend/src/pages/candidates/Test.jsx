import React, { useEffect, useMemo, useState } from "react";

/* =========================================================
   TEST DATA
========================================================= */

const questions = [
  { id: 1, question: "Which of the following is the brain of a computer?", options: ["Monitor", "CPU", "Keyboard", "Printer"], answer: 1 },
  { id: 2, question: "Which device is primarily used to enter text into a computer?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2 },
  { id: 3, question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Utility", "Central Program Unit", "Computer Primary Unit"], answer: 0 },
  { id: 4, question: "Which of the following is an operating system?", options: ["Microsoft Word", "Windows", "Google Chrome", "Adobe Photoshop"], answer: 1 },
  { id: 5, question: "Which shortcut is commonly used to copy selected text or files?", options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"], answer: 2 },
  { id: 6, question: "Which shortcut is used to paste copied content?", options: ["Ctrl + P", "Ctrl + V", "Ctrl + C", "Ctrl + A"], answer: 1 },
  { id: 7, question: "Which shortcut is commonly used to save a document?", options: ["Ctrl + S", "Ctrl + D", "Ctrl + F", "Ctrl + W"], answer: 0 },
  { id: 8, question: "Which key is used to delete the character to the left of the cursor?", options: ["Delete", "Backspace", "Insert", "Shift"], answer: 1 },
  { id: 9, question: "Which application is primarily used for creating and editing documents?", options: ["Microsoft Word", "Calculator", "Paint", "Media Player"], answer: 0 },
  { id: 10, question: "Which application is commonly used to create spreadsheets?", options: ["Microsoft Word", "Microsoft Excel", "Notepad", "PowerPoint"], answer: 1 },
  { id: 11, question: "What is the extension of a modern Microsoft Word document?", options: [".xlsx", ".pptx", ".docx", ".jpg"], answer: 2 },
  { id: 12, question: "What is the extension commonly associated with Microsoft Excel workbooks?", options: [".xlsx", ".docx", ".txt", ".pptx"], answer: 0 },
  { id: 13, question: "Which software is commonly used for making presentations?", options: ["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Access", "Notepad"], answer: 1 },
  { id: 14, question: "Which of the following is a web browser?", options: ["Google Chrome", "Microsoft Excel", "Windows Explorer", "Adobe Reader"], answer: 0 },
  { id: 15, question: "What is the main purpose of a web browser?", options: ["To browse websites", "To print documents only", "To create hardware", "To scan documents"], answer: 0 },
  { id: 16, question: "Which symbol is commonly used in an email address?", options: ["#", "&", "@", "%"], answer: 2 },
  { id: 17, question: "Which of the following is an example of cloud storage?", options: ["Google Drive", "Keyboard", "Monitor", "CPU"], answer: 0 },
  { id: 18, question: "What does PDF stand for?", options: ["Portable Document Format", "Personal Data File", "Public Document Folder", "Printed Data Format"], answer: 0 },
  { id: 19, question: "Which device is used to produce a hard copy of a document?", options: ["Scanner", "Printer", "Keyboard", "Mouse"], answer: 1 },
  { id: 20, question: "Which device is commonly used to scan a physical document?", options: ["Printer", "Scanner", "Speaker", "Projector"], answer: 1 },
  { id: 21, question: "Which shortcut is commonly used to select all content?", options: ["Ctrl + A", "Ctrl + E", "Ctrl + L", "Ctrl + T"], answer: 0 },
  { id: 22, question: "Which shortcut is commonly used to undo the last action?", options: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + R"], answer: 2 },
  { id: 23, question: "Which component temporarily stores data being actively used by the computer?", options: ["RAM", "Printer", "Monitor", "Keyboard"], answer: 0 },
  { id: 24, question: "Which of the following is an example of an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2 },
  { id: 25, question: "Which of the following is an example of an output device?", options: ["Keyboard", "Mouse", "Scanner", "Monitor"], answer: 3 },
];

/* =========================================================
   CONFIGURATION
========================================================= */

const TEST_DURATION_MINUTES = 30;

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Test = () => {
  const totalQuestions = questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION_MINUTES * 60);
  const [submitted, setSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  /* =========================================================
     TIMER
  ========================================================= */
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

  /* =========================================================
     FORMAT TIMER
  ========================================================= */
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  /* =========================================================
     CURRENT QUESTION
  ========================================================= */
  const question = questions[currentQuestion];

  /* =========================================================
     ANSWER HANDLER
  ========================================================= */
  const handleAnswer = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: optionIndex,
    }));
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */
  const goToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestion(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      goToQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      goToQuestion(currentQuestion - 1);
    }
  };

  /* =========================================================
     CLEAR ANSWER
  ========================================================= */
  const clearAnswer = () => {
    setAnswers((previous) => {
      const updated = { ...previous };
      delete updated[question.id];
      return updated;
    });
  };

  /* =========================================================
     MARK QUESTION
  ========================================================= */
  const toggleMark = () => {
    setMarkedQuestions((previous) => ({
      ...previous,
      [question.id]: !previous[question.id],
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================= */
  const handleSubmit = () => {
    setShowSubmitModal(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================================================
     RESULT
  ========================================================= */
  const result = useMemo(() => {
    let correct = 0;
    questions.forEach((item) => {
      if (answers[item.id] === item.answer) {
        correct++;
      }
    });
    const attempted = Object.keys(answers).length;
    const unanswered = totalQuestions - attempted;
    const percentage = (correct / totalQuestions) * 100;

    return { correct, attempted, unanswered, percentage };
  }, [answers, totalQuestions]);

  /* =========================================================
     STATUS
  ========================================================= */
  const answeredCount = Object.keys(answers).length;
  const markedCount = Object.values(markedQuestions).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  /* =========================================================
     RESULT SCREEN
  ========================================================= */
  if (submitted) {
    return <ResultScreen result={result} totalQuestions={totalQuestions} onRestart={() => window.location.reload()} />;
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
                <h1 className="truncate text-sm font-bold text-[#172b40] sm:text-base">Computer Competency Test</h1>
                <p className="hidden text-xs text-gray-500 sm:block">Computer Competency Test Examination</p>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden flex-1 justify-center lg:flex">
              <div className="text-center">
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">Question</p>
                <p className="text-sm font-bold text-[#07336d]">
                  {currentQuestion + 1} / {totalQuestions}
                </p>
              </div>
            </div>

            {/* TIMER */}
            <div className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 ${timeLeft <= 300 ? "border-red-200 bg-red-50 text-red-600" : "border-[#dce5ef] bg-[#f5f8fc] text-[#263746]"}`}>
              <span className="text-base">◷</span>
              <div>
                <p className="hidden text-[10px] font-medium uppercase sm:block">Time Left</p>
                <p className="text-sm font-bold tabular-nums">{formatTime(timeLeft)}</p>
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
                <p className="text-sm font-semibold text-[#263746]">Candidate</p>
                <p className="text-xs text-gray-500">Computer Competency Examination</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="Answered" count={answeredCount} type="answered" />
              <StatusBadge label="Unanswered" count={unansweredCount} type="unanswered" />
              <StatusBadge label="Marked" count={markedCount} type="marked" />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-[1600px] px-3 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
          
          {/* QUESTION CARD */}
          <section className="min-w-0 overflow-visible rounded-xl border border-[#d8dee5] bg-white shadow-sm">
            {/* QUESTION HEADER */}
            <div className="border-b border-[#e2e7ec] bg-[#f8f9fa] px-4 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-md bg-[#07336d] px-2.5 py-1 text-xs font-bold text-white">
                      Q{currentQuestion + 1}
                    </span>
                    {markedQuestions[question.id] && (
                      <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">Marked for Review</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">Select one correct answer</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Progress</p>
                  <p className="text-sm font-semibold text-[#07336d]">{currentQuestion + 1} of {totalQuestions}</p>
                </div>
              </div>
            </div>

            {/* QUESTION */}
            <div className="p-4 sm:p-6 lg:p-8">
              <h2 className="max-w-4xl text-lg font-semibold leading-8 text-[#172b40] sm:text-xl">
                {question.question}
              </h2>

              {/* OPTIONS */}
              <div className="mt-7 space-y-3">
                {question.options.map((option, index) => {
                  const selected = answers[question.id] === index;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(index)}
                      className={`group flex w-full items-center gap-3 rounded-lg border p-4 text-left transition ${selected ? "border-[#07336d] bg-[#eef5ff] shadow-sm" : "border-[#dce2e8] bg-white hover:border-[#9bbde9] hover:bg-[#f8fbff]"}`}
                    >
                      {/* OPTION LETTER */}
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition ${selected ? "border-[#07336d] bg-[#07336d] text-white" : "border-[#cfd8e2] bg-[#f8f9fa] text-gray-600 group-hover:border-[#07336d] group-hover:text-[#07336d]"}`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      {/* TEXT */}
                      <span className={`flex-1 text-sm leading-6 sm:text-base ${selected ? "font-medium text-[#07336d]" : "text-[#263746]"}`}>
                        {option}
                      </span>
                      {/* CHECK */}
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
                    Clear Answer
                  </button>
                  <button
                    type="button"
                    onClick={toggleMark}
                    className={`rounded-md border px-4 py-2.5 text-sm font-medium transition ${markedQuestions[question.id] ? "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100" : "border-[#d5dce3] bg-white text-gray-600 hover:bg-gray-50"}`}
                  >
                    {markedQuestions[question.id] ? "Unmark Question" : "Mark for Review"}
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
                  ← Previous
                </button>
                {currentQuestion === totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(true)}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a] hover:shadow-md"
                  >
                    Submit Test <span>✓</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a] hover:shadow-md"
                  >
                    Next Question <span>→</span>
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* QUESTION PALETTE */}
          <aside className="h-fit lg:sticky lg:top-[145px]">
            <section className="overflow-hidden rounded-xl border border-[#d8dee5] bg-white shadow-sm">
              {/* HEADER */}
              <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-4 py-4">
                <h3 className="text-sm font-semibold text-[#263746]">Question Palette</h3>
                <p className="mt-1 text-xs text-gray-500">Navigate between questions</p>
              </div>

              {/* LEGEND */}
              <div className="grid grid-cols-2 gap-2 border-b border-[#e4e8ec] p-4">
                <Legend label="Answered" className="bg-[#07336d]" />
                <Legend label="Unanswered" className="bg-[#e9edf1]" />
                <Legend label="Marked" className="bg-amber-400" />
                <Legend label="Current" className="ring-2 ring-[#07336d] ring-offset-1" />
              </div>

              {/* QUESTIONS */}
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
                          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#07336d] text-[8px] text-white">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SUMMARY */}
              <div className="border-t border-[#e4e8ec] bg-[#fafbfc] p-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-[#07336d]">{answeredCount}</p>
                    <p className="text-[10px] text-gray-500">Answered</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-500">{unansweredCount}</p>
                    <p className="text-[10px] text-gray-500">Remaining</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">{markedCount}</p>
                    <p className="text-[10px] text-gray-500">Marked</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SUBMIT CARD */}
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-xs font-semibold text-red-700">Before submitting</p>
              <p className="mt-1 text-xs leading-5 text-red-600">Please review unanswered and marked questions before submitting your test.</p>
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="mt-3 w-full rounded-md border border-red-200 bg-white px-4 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
              >
                Submit Test
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* SUBMIT MODAL */}
      {showSubmitModal && (
        <SubmitModal answered={answeredCount} unanswered={unansweredCount} marked={markedCount} onCancel={() => setShowSubmitModal(false)} onConfirm={handleSubmit} />
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

const SubmitModal = ({ answered, unanswered, marked, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#172b40]/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* HEADER */}
        <div className="border-b border-[#e2e7ec] bg-[#f8f9fa] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">!</div>
            <div>
              <h3 className="text-base font-semibold text-[#172b40]">Submit Test?</h3>
              <p className="text-xs text-gray-500">Please confirm your submission.</p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5">
          <p className="text-sm leading-6 text-gray-600">Once you submit the test, you will not be able to change your answers.</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <SummaryBox value={answered} label="Answered" type="blue" />
            <SummaryBox value={unanswered} label="Unanswered" type="gray" />
            <SummaryBox value={marked} label="Marked" type="amber" />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col-reverse gap-3 border-t border-[#e2e7ec] bg-[#fafbfc] p-4 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className="rounded-md border border-[#d2dae2] bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="rounded-md bg-[#07336d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#05224a]">
            Confirm & Submit
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

const ResultScreen = ({ result, totalQuestions, onRestart }) => {
  const passed = result.percentage >= 40;
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#263746]">
      {/* HEADER */}
      <header className="border-b border-[#d8dee5] bg-white shadow-sm">
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#07336d] text-white">▣</div>
            <div>
              <h1 className="text-base font-bold text-[#172b40]">Computer Competency Test</h1>
              <p className="text-xs text-gray-500">Examination Result</p>
            </div>
          </div>
        </div>
      </header>

      {/* RESULT */}
      <main className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6 lg:py-12">
        <section className="overflow-hidden rounded-xl border border-[#d8dee5] bg-white shadow-md">
          {/* RESULT HEADER */}
          <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-5 py-8 text-center">
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl ${passed ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
              {passed ? "✓" : "!"}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#172b40]">Test Submitted Successfully</h2>
            <p className="mt-2 text-sm text-gray-500">Your examination result is shown below.</p>
          </div>

          {/* SCORE */}
          <div className="p-5 sm:p-8">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm font-medium text-gray-500">Your Score</p>
              <div className="mt-2 text-5xl font-bold text-[#07336d]">
                {result.correct} <span className="text-2xl text-gray-400">/ {totalQuestions}</span>
              </div>
              <p className={`mt-3 text-sm font-semibold ${passed ? "text-green-600" : "text-red-600"}`}>
                {passed ? "Test Qualified" : "Test Not Qualified"}
              </p>
            </div>

            {/* RESULT STATS */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <ResultStat label="Correct Answers" value={result.correct} type="correct" />
              <ResultStat label="Attempted" value={result.attempted} type="attempted" />
              <ResultStat label="Unanswered" value={result.unanswered} type="unanswered" />
            </div>

            {/* PERCENTAGE */}
            <div className="mt-6 rounded-lg border border-[#dce3ea] bg-[#fafbfc] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Percentage</span>
                <span className="text-sm font-bold text-[#07336d]">{result.percentage.toFixed(2)}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e4e9ee]">
                <div className="h-full rounded-full bg-[#07336d]" style={{ width: `${result.percentage}%` }} />
              </div>
            </div>

            {/* ACTION */}
            <button
              type="button"
              onClick={onRestart}
              className="mx-auto mt-7 flex min-h-11 items-center justify-center rounded-md bg-[#07336d] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#05224a]"
            >
              Return to Test
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