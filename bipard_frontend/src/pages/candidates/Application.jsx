import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const departmentOptions = [
  "Department of Law", "Disaster Management", "General Administration Department", "Home",
  "Information and Public Relations Department", "Parliament Affairs", "Planning", "Vigilance",
  "Office of the Chief Electoral Officer, Bihar", "Commercial Taxes", "Department of Revenue & Land Reform",
  "Finance", "Mines & Geology", "Prohibition Excise & Registration Department (Excise)",
  "Prohibition Excise & Registration Department (Registration)", "Transport", "Education", "Health",
  "Department of Science & Technology", "Building Construction", "Department of Industries", "Energy",
  "Information Technology", "Public Health Engineering Department", "Road Construction", "Rural Works",
  "Urban Development and Housing Department", "Agriculture", "Animal & Fisheries Resources",
  "Co-Operative", "Environment & Forest", "Food Consumer Protection", "Minor Water Resources",
  "Panchayati Raj", "Rural Development", "Sugarcane", "Water Resource", "BC & EBC Welfare",
  "Labour Resources",
];

const serviceCadreOptions = [
  "Indian Administrative Service", "Indian Police Service", "Indian Forest Service", "Bihar Administrative Service",
  "Bihar Police Service", "Bihar Finance Service", "Bihar Account Service", "Bihar Revenue Service",
  "Bihar Rural Development Service", "Service Of Bihar Engineering", "Bihar Co-operative Account Service",
  "Bihar Education Service", "Bihar Health Service", "Bihar Registration Service", "Bihar Co-operative Administrative Service",
  "Bihar Election Service", "Bihar Agriculture Service", "Bihar Jail Service", "Bihar Labour Service", "Bihar Employment Service",
];

const categoryOptions = ["General", "EWS", "BC", "EBC", "SC", "ST"];

const idProofOptions = ["Aadhar Card", "PAN Card", "Voter ID", "Driving License", "Passport", "Government ID Card"];

const serviceOptions = ["Gazetted", "Non-Gazetted"];

const otherServiceOptions = [
  "State Government Service", "Central Government Service", "Autonomous Body", "Public Sector Undertaking", "Other",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    mobile: "", fullName: "", email: "", gender: "", designation: "", service: "", otherService: "", serviceCadre: "",
    dob: "", aadhar: "", idProof: "", category: "", department: "", hrmsId: "", gpfPranId: "",
    officeName1: "", officeName2: "", photo: null, signature: null, declaration: false,
  });

  const [photoName, setPhotoName] = useState("");
  const [signatureName, setSignatureName] = useState("");
  const [applicationFile, setApplicationFile] = useState(null);
  const [applicationFileName, setApplicationFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* =========================================================
     FORM CHANGE
  ========================================================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* =========================================================
     FILE CHANGE
  ========================================================= */
  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG and PNG files are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5MB.");
      e.target.value = "";
      return;
    }

    if (type === "photo") {
      setPhotoName(file.name);
      setFormData((prev) => ({ ...prev, photo: file }));
    }

    if (type === "signature") {
      setSignatureName(file.name);
      setFormData((prev) => ({ ...prev, signature: file }));
    }
  };

  /* =========================================================
     APPLICATION FILE
  ========================================================= */
  const handleApplicationFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG and PDF files are allowed.");
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Application file size should not exceed 10MB.");
      e.target.value = "";
      return;
    }

    setApplicationFile(file);
    setApplicationFileName(file.name);
    setSubmitted(false);
  };

  /* =========================================================
     VALIDATION
  ========================================================= */
  const validateStepOne = () => {
    const requiredFields = [
      ["mobile", "Registered Mobile Number"], ["fullName", "Full Name"], ["email", "Email"], ["gender", "Gender"],
      ["designation", "Designation"], ["service", "Service"], ["otherService", "Other's Details"], ["serviceCadre", "Service Cadre"],
      ["dob", "Date of Birth"], ["aadhar", "Aadhar No"], ["idProof", "Id Proof"], ["category", "Category"],
      ["department", "Department"], ["gpfPranId", "GPF/PRAN ID"], ["officeName1", "Name of Office"], ["officeName2", "Additional Office Details"],
    ];

    for (const [field, label] of requiredFields) {
      if (!String(formData[field] || "").trim()) {
        alert(`Please enter/select ${label}.`);
        return false;
      }
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!/^\d{12}$/.test(formData.aadhar)) {
      alert("Please enter a valid 12-digit Aadhaar number.");
      return false;
    }

    if (!formData.photo) {
      alert("Please upload Candidate Passport Size Photo.");
      return false;
    }

    if (!formData.signature) {
      alert("Please upload Candidate Signature.");
      return false;
    }

    if (!formData.declaration) {
      alert("Please accept the declaration before proceeding.");
      return false;
    }

    return true;
  };

  /* =========================================================
     STEP CHANGE
  ========================================================= */
  const changeStep = (step) => {
    if (step === 2 && !validateStepOne()) return;
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================================================
     SUBMIT STEP ONE
  ========================================================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStepOne()) return;
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================================================
     PRINT
  ========================================================= */
  const handleSavePrint = () => {
    window.print();
  };

  /* =========================================================
     DOCUMENT UPLOAD
  ========================================================= */
  const handleDocumentUpload = () => {
    if (!applicationFile) {
      alert("Please select the Application Form.");
      return;
    }

    setSubmitted(true);
    console.log("Application Form:", applicationFile);
    console.log("Registration Data:", formData);
    alert("Application document selected successfully.");
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#263746]">
      {/* PROGRESS HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#d8dee5] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* STEP 1 */}
            <button type="button" onClick={() => changeStep(1)} className="group flex items-center gap-2">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${currentStep === 1 ? "bg-[#07336d] text-white shadow-md" : "bg-[#dce9f8] text-[#07336d]"}`}>
                1
              </div>
              <div className="hidden text-left sm:block">
                <p className={`text-xs font-semibold ${currentStep === 1 ? "text-[#07336d]" : "text-gray-500"}`}>STEP 1</p>
                <p className="text-sm font-medium">Registration</p>
              </div>
            </button>

            {/* CONNECTOR */}
            <div className="mx-3 h-[2px] flex-1 bg-[#dbe1e7] sm:mx-6">
              <div className={`h-full transition-all duration-500 ${currentStep === 2 ? "w-full bg-[#07336d]" : "w-0"}`} />
            </div>

            {/* STEP 2 */}
            <button type="button" onClick={() => changeStep(2)} className="group flex items-center gap-2">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${currentStep === 2 ? "bg-[#07336d] text-white shadow-md" : "bg-[#dce9f8] text-[#07336d]"}`}>
                2
              </div>
              <div className="hidden text-left sm:block">
                <p className={`text-xs font-semibold ${currentStep === 2 ? "text-[#07336d]" : "text-gray-500"}`}>STEP 2</p>
                <p className="text-sm font-medium">Document Upload</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* STEP 1 */}
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          photoName={photoName}
          signatureName={signatureName}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          handleSavePrint={handleSavePrint}
        />
      )}

      {/* STEP 2 */}
      {currentStep === 2 && (
        <DocumentUpload
          applicationFileName={applicationFileName}
          handleApplicationFileChange={handleApplicationFileChange}
          handleDocumentUpload={handleDocumentUpload}
          onBack={() => changeStep(1)}
          submitted={submitted}
        />
      )}
    </div>
  );
};

/* =========================================================
   STEP ONE
========================================================= */

const StepOne = ({ formData, photoName, signatureName, handleChange, handleFileChange, handleSubmit, handleSavePrint }) => {
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[1600px]">
      {/* PAGE TITLE */}
      <div className="border-b border-[#d8dee5] bg-white">
        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <button type="button" onClick={() => window.history.back()} className="flex w-fit items-center gap-1.5 rounded-md bg-[#07336d] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#05224a]">
            ← Back
          </button>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2 text-sm font-medium text-[#263746] sm:text-base">
              <span className="text-lg">▣</span> Computer Competency Test Examination Form
            </div>
          </div>
          <div className="hidden w-[70px] sm:block" />
        </div>
      </div>

      {/* MAIN */}
      <div className="space-y-5 px-3 py-5 sm:px-6 lg:px-8">
        {/* PERSONAL DETAILS */}
        <SectionCard title="Personal Details" hindi="व्यक्तिगत विवरण" number="01">
          <div className="mb-5 rounded-md border border-[#f5c6cb] bg-[#fff5f5] px-4 py-3 text-xs text-[#842029] sm:text-sm">
            <span className="font-semibold">Note:</span> Fields marked with <span className="font-bold text-red-600">*</span> are mandatory.
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-5">
              <FormRow label="Registered Mobile Number" hindi="पंजीकृत मोबाइल नंबर" required>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter registered mobile number" maxLength={10} inputMode="numeric" className={inputClass} />
              </FormRow>

              <FormRow label="Full Name" hindi="पूरा नाम" required>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter full name" className={inputClass} />
              </FormRow>

              <FormRow label="Email" hindi="ईमेल" required>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className={inputClass} />
              </FormRow>

              <FormRow label="Gender" hindi="लिंग" required>
                <div className="flex min-h-10 flex-wrap items-center gap-5">
                  {["Male", "Female", "Transgender"].map((gender) => (
                    <label key={gender} className="flex cursor-pointer items-center gap-2 text-sm">
                      <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} className="h-4 w-4 accent-[#07336d]" />
                      {gender}
                    </label>
                  ))}
                </div>
              </FormRow>

              <FormRow label="Designation" hindi="पदनाम" required>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter designation" className={inputClass} />
              </FormRow>

              <FormRow label="Service" hindi="सेवा" required>
                <CustomDropdown name="service" value={formData.service} options={serviceOptions} placeholder="Select Service / सेवा का चयन करें" onChange={(value) => handleChange({ target: { name: "service", value } })} />
              </FormRow>

              <FormRow label="Other's Details" required>
                <CustomDropdown name="otherService" value={formData.otherService} options={otherServiceOptions} placeholder="Select Other Service" onChange={(value) => handleChange({ target: { name: "otherService", value } })} />
              </FormRow>

              <FormRow label="Service Cadre" hindi="सेवा संवर्ग" required>
                <CustomDropdown name="serviceCadre" value={formData.serviceCadre} options={serviceCadreOptions} placeholder="Select Service Cadre / सेवा संवर्ग का चयन करें" searchable onChange={(value) => handleChange({ target: { name: "serviceCadre", value } })} />
              </FormRow>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              <FormRow label="Date of Birth" hindi="जन्म तिथि" required>
                <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="DD-MM-YYYY" maxLength={10} className={inputClass} />
              </FormRow>

              <FormRow label="Aadhar No" hindi="आधार संख्या" required>
                <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder="Enter 12-digit Aadhaar number" maxLength={12} inputMode="numeric" className={inputClass} />
              </FormRow>

              <FormRow label="Id Proof" hindi="पहचान प्रमाण" required>
                <CustomDropdown name="idProof" value={formData.idProof} options={idProofOptions} placeholder="Select Id Proof / पहचान प्रमाण" onChange={(value) => handleChange({ target: { name: "idProof", value } })} />
              </FormRow>

              <FormRow label="Category" hindi="वर्ग" required>
                <CustomDropdown name="category" value={formData.category} options={categoryOptions} placeholder="Select Category / वर्ग का चयन करें" onChange={(value) => handleChange({ target: { name: "category", value } })} />
              </FormRow>

              <FormRow label="Department" hindi="विभाग" required>
                <CustomDropdown name="department" value={formData.department} options={departmentOptions} placeholder="Select Department" searchable onChange={(value) => handleChange({ target: { name: "department", value } })} />
              </FormRow>

              <FormRow label="HRMS ID">
                <input type="text" name="hrmsId" value={formData.hrmsId} onChange={handleChange} placeholder="Enter HRMS ID" className={inputClass} />
              </FormRow>

              <FormRow label="GPF/PRAN ID" required>
                <input type="text" name="gpfPranId" value={formData.gpfPranId} onChange={handleChange} placeholder="Enter GPF/PRAN ID" className={inputClass} />
              </FormRow>
            </div>
          </div>
        </SectionCard>

        {/* OFFICE + DOCUMENTS (TWO COLUMNS / ONE ROW) */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {/* OFFICE ADDRESS */}
          <SectionCard title="Office Address" hindi="कार्यालय का पता" number="02">
            <div className="space-y-5">
              <OfficeAddressRow label="Name of Office" hindi="कार्यालय का नाम" name="officeName1" value={formData.officeName1} onChange={handleChange} placeholder="Enter office name and complete address" />
              <OfficeAddressRow label="Additional Office Details" hindi="अतिरिक्त कार्यालय विवरण" name="officeName2" value={formData.officeName2} onChange={handleChange} placeholder="Enter additional office details" />
            </div>
          </SectionCard>

          {/* CANDIDATE DOCUMENTS */}
          <SectionCard title="Candidate Documents" hindi="उम्मीदवार के दस्तावेज" number="03">
            <div className="space-y-4">
              <ImageUpload title="Candidate Passport Size Photo" hindi="पासपोर्ट साइज फोटो" fileName={photoName} onChange={(e) => handleFileChange(e, "photo")} />
              <ImageUpload title="Candidate Signature" hindi="आवेदक का हस्ताक्षर" fileName={signatureName} onChange={(e) => handleFileChange(e, "signature")} />
            </div>
          </SectionCard>
        </div>

        {/* DECLARATION */}
        <section className="overflow-hidden rounded-lg border border-[#d8dee5] bg-white shadow-sm">
          <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-4 py-3 sm:px-5">
            <h2 className="text-base font-semibold text-[#263746]">Declaration / घोषणा</h2>
          </div>

          <div className="p-4 sm:p-5">
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-[#dce3ea] bg-[#fafbfc] p-4 transition hover:bg-[#f5f8fb]">
              <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1 h-4 w-4 shrink-0 accent-[#07336d]" />
              <span className="text-xs leading-6 text-gray-700 sm:text-sm">
                I hereby affirm that all the above given information is true to the best of my knowledge. If any of the details are found to be incorrect, my candidature may be rejected.
              </span>
            </label>

            <div className="mt-4 rounded-md border-l-4 border-red-400 bg-red-50 px-4 py-3 text-xs leading-6 text-gray-700 sm:text-sm">
              <p className="mb-2 font-semibold text-red-600">नोट :-</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>आवेदक अनिवार्यतः अपने नियंत्री पदाधिकारी / कार्यालय प्रधान से ही आवेदन अग्रसारित कराकर अपलोड करेंगे।</li>
                <li>नियंत्री पदाधिकारी / कार्यालय अपने हस्ताक्षर एवं दिनांक उपर दस्तावेज अपलोड के Step 2 पर click कर अपलोड करेंगे।</li>
                <li>अपलोड करने के बाद ही आप वास्तविक परीक्षा दे सकते हैं।</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 pb-5 sm:flex-row">
          <button type="button" onClick={handleSavePrint} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-[#07336d] bg-white px-5 py-3 text-sm font-semibold text-[#07336d] transition hover:bg-[#f0f6ff]">
            ▣ Save & Print
          </button>
          <button type="submit" className="flex min-h-12 flex-[1.5] items-center justify-center gap-2 rounded-md bg-[#07336d] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#05224a] hover:shadow-lg">
            Continue to Step 2 <span>→</span>
          </button>
        </div>
      </div>
    </form>
  );
};

/* =========================================================
   CUSTOM DROPDOWN
========================================================= */

const CustomDropdown = ({ name, value, options, placeholder, searchable = false, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* SELECT BUTTON */}
      <button type="button" name={name} onClick={() => setOpen((prev) => !prev)} className={`flex h-11 w-full items-center justify-between rounded-md border bg-white px-3 text-left text-sm outline-none transition ${open ? "border-[#07336d] ring-2 ring-[#07336d]/15" : "border-[#cfd7df] hover:border-[#aeb9c5]"}`}>
        <span className={`min-w-0 truncate ${value ? "text-[#263746]" : "text-[#8a96a3]"}`}>{value || placeholder}</span>
        <span className={`ml-3 shrink-0 text-xs text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+5px)] z-[100] overflow-hidden rounded-md border border-[#cfd7df] bg-white shadow-xl">
          {/* SEARCH */}
          {searchable && (
            <div className="border-b border-[#e3e7eb] bg-white p-2">
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onClick={(e) => e.stopPropagation()} autoFocus placeholder="Search..." className="h-10 w-full rounded-md border border-[#d5dce3] bg-[#f8fafc] pl-9 pr-3 text-sm outline-none focus:border-[#07336d] focus:ring-2 focus:ring-[#07336d]/10" />
              </div>
            </div>
          )}

          {/* OPTIONS */}
          <div className="max-h-56 overflow-y-auto overscroll-contain py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const selected = value === option;
                return (
                  <button key={option} type="button" onClick={() => handleSelect(option)} className={`flex min-h-10 w-full items-center justify-between px-3 py-2 text-left text-sm transition ${selected ? "bg-[#eaf2ff] font-medium text-[#07336d]" : "text-[#263746] hover:bg-[#f3f7fc]"}`}>
                    <span className="pr-3">{option}</span>
                    {selected && <span className="shrink-0 font-bold text-[#07336d]">✓</span>}
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-6 text-center text-sm text-gray-500">No options found</div>
            )}
          </div>

          {/* FOOTER */}
          {searchable && (
            <div className="border-t border-[#e3e7eb] bg-[#fafbfc] px-3 py-2 text-[11px] text-gray-500">
              {filteredOptions.length} option{filteredOptions.length !== 1 ? "s" : ""} available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   DOCUMENT UPLOAD
========================================================= */

const DocumentUpload = ({ applicationFileName, handleApplicationFileChange, handleDocumentUpload, onBack, submitted }) => {
  return (
    <div className="mx-auto max-w-[1600px]">
      {/* HEADER */}
      <div className="border-b border-[#d8dee5] bg-white">
        <div className="flex items-center px-4 py-3 sm:px-6 lg:px-8">
          <button type="button" onClick={onBack} className="flex items-center gap-1.5 rounded-md bg-[#07336d] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#05224a]">
            ← Back
          </button>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2 text-base font-medium text-[#263746] sm:text-lg">
              <span className="text-xl">▣</span> Document Upload
            </div>
          </div>
          <div className="w-[60px]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-5 px-3 py-5 sm:px-6 lg:px-8">
        {/* DOCUMENT CARD */}
        <section className="overflow-hidden rounded-lg border border-[#d8dee5] bg-white shadow-md">
          {/* CARD HEADER */}
          <div className="border-b border-[#dce2e7] bg-[#f8f9fa] px-4 py-5 text-center sm:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-xl text-[#07336d]">▣</div>
            <h2 className="mt-3 text-xl font-semibold text-[#172b40] sm:text-2xl">Documents Details</h2>
            <p className="mx-auto mt-3 max-w-5xl text-sm italic leading-7 text-red-500">
              नोट - आवेदक अनिवार्यतः अपने नियंत्री पदाधिकारी / कार्यालय प्रधान से ही आवेदन अग्रसारित कराकर ही अपलोड करेंगे। किसी अन्य पदाधिकारी द्वारा अग्रसारित आवेदन पत्र मान्य नहीं होगा। बिना ज्ञापांक और दिनांक के अग्रसारित आवेदन पत्र अस्वीकृत कर दिया जायेगा।
            </p>
          </div>

          {/* UPLOAD BODY */}
          <div className="p-4 sm:p-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-6">
                <label className="text-sm font-medium text-[#263746] sm:text-base">
                  <span className="mr-1 text-red-500">*</span> Application Form
                </label>
                {/* FILE INPUT */}
                <label className="group flex h-12 cursor-pointer overflow-hidden rounded-md border border-[#cbd5df] bg-white transition hover:border-[#07336d] hover:shadow-sm">
                  <span className="flex shrink-0 items-center gap-2 border-r border-[#cbd5df] bg-[#f5f7f9] px-4 text-sm font-medium text-[#263746] transition group-hover:bg-[#eef5ff] sm:text-base">
                    Choose file
                  </span>
                  <span className="flex min-w-0 flex-1 items-center truncate px-4 text-sm text-gray-500 sm:text-base">
                    {applicationFileName || "No file chosen"}
                  </span>
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleApplicationFileChange} className="hidden" />
                </label>
              </div>

              {/* FILE INFORMATION */}
              <div className="mt-4 rounded-md bg-[#f5f8fb] px-4 py-3 text-xs text-gray-600">
                <span className="font-semibold">Supported formats:</span> JPG, JPEG, PNG, PDF <span className="ml-2">• Maximum 10MB</span>
              </div>

              {/* NOTE */}
              <div className="mt-5 rounded-md border-l-4 border-red-400 bg-red-50 px-4 py-3">
                <p className="text-xs italic leading-6 text-red-500 sm:text-sm">
                  नोट - आवेदक का हस्ताक्षर jpg, jpeg, png प्रारूप में होना चाहिए। फोटो का आकार 4KB से 5MB के बीच होना चाहिए।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS */}
        {submitted && (
          <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            ✓ Document selected successfully. Ready for submission.
          </div>
        )}

        {/* UPLOAD */}
        <button type="button" onClick={handleDocumentUpload} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#07336d] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#05224a] hover:shadow-lg">
          <span className="text-lg">➤</span> Upload
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION CARD
========================================================= */

const SectionCard = ({ title, hindi, number, children }) => {
  return (
    <section className="relative h-full overflow-visible rounded-lg border border-[#d8dee5] bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-[#dce2e7] bg-[#f8f9fa] px-4 py-3 sm:px-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#07336d] text-xs font-bold text-white">
          {number}
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#263746] sm:text-base">{title}</h2>
          <p className="text-xs text-gray-500">{hindi}</p>
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
};

/* =========================================================
   FORM ROW
========================================================= */

const FormRow = ({ label, hindi, required, children }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-4">
      <label className="text-xs leading-5 text-[#263746] sm:text-[13px]">
        {required && <span className="mr-1 font-bold text-red-500">*</span>}
        <span className="font-medium">{label}</span>
        {hindi && <span className="block text-[11px] text-gray-500">{hindi}</span>}
      </label>
      <div className="min-w-0">{children}</div>
    </div>
  );
};

/* =========================================================
   OFFICE ROW
========================================================= */

const OfficeAddressRow = ({ label, hindi, name, value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="block text-xs leading-5 text-[#263746] sm:text-[13px]">
        <span className="mr-1 font-bold text-red-500">*</span>
        <span className="font-medium">{label}</span>
        <span className="block text-[11px] text-gray-500">{hindi}</span>
      </label>
      <textarea name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder} className="w-full resize-none rounded-md border border-[#cfd7df] bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-[#8a96a3] focus:border-[#07336d] focus:ring-2 focus:ring-[#07336d]/15" />
    </div>
  );
};

/* =========================================================
   IMAGE UPLOAD
========================================================= */

const ImageUpload = ({ title, hindi, fileName, onChange }) => {
  return (
    <div className="rounded-md border border-[#dce2e7] bg-[#fafbfc] p-3">
      <label className="mb-2 block text-xs leading-5 text-[#263746] sm:text-[13px]">
        <span className="mr-1 font-bold text-red-500">*</span>
        <span className="font-medium">{title}</span>
        <span className="block text-[11px] text-gray-500">{hindi}</span>
      </label>
      <label className="flex h-11 w-full cursor-pointer overflow-hidden rounded-md border border-[#cfd7df] bg-white transition hover:border-[#07336d]">
        <span className="flex shrink-0 items-center border-r border-[#cfd7df] bg-[#f4f6f8] px-4 text-sm font-medium text-gray-700">Choose file</span>
        <span className="flex min-w-0 flex-1 items-center truncate px-3 text-sm text-gray-500">{fileName || "No file chosen"}</span>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={onChange} className="hidden" />
      </label>
      <p className="mt-2 text-xs italic leading-5 text-red-500">JPG, JPEG, PNG format required. Maximum file size 5MB.</p>
    </div>
  );
};

/* =========================================================
   STYLES
========================================================= */

const inputClass = "h-11 w-full rounded-md border border-[#cfd7df] bg-white px-3 text-sm text-[#263746] outline-none transition placeholder:text-[#8a96a3] hover:border-[#aeb9c5] focus:border-[#07336d] focus:ring-2 focus:ring-[#07336d]/15";

/* =========================================================
   EXPORT
========================================================= */

export default Application;