import React, { useEffect, useRef, useState } from "react";

/* =========================================================
   TRANSLATIONS DICTIONARY
========================================================= */
const t = {
  en: {
    step1: "STEP 1",
    step2: "STEP 2",
    registration: "Registration",
    docUpload: "Document Upload",
    back: "← Back",
    formTitle: "Computer Competency Test Examination Form",
    note: "Note:",
    mandatory: "Fields marked with * are mandatory.",
    personalDetails: "Personal Details",
    mobile: "Registered Mobile Number",
    mobilePh: "Enter registered mobile number",
    fullName: "Full Name",
    fullNamePh: "Enter full name",
    email: "Email",
    emailPh: "Enter email address",
    gender: "Gender",
    genders: ["Male", "Female", "Transgender"],
    designation: "Designation",
    designationPh: "Enter designation",
    service: "Service",
    servicePh: "Select Service",
    otherService: "Other's Details",
    otherServicePh: "Select Other Service",
    serviceCadre: "Service Cadre",
    serviceCadrePh: "Select Service Cadre",
    dob: "Date of Birth",
    dobPh: "DD-MM-YYYY",
    aadhar: "Aadhar No",
    aadharPh: "Enter 12-digit Aadhaar number",
    idProof: "Id Proof",
    idProofPh: "Select Id Proof",
    category: "Category",
    categoryPh: "Select Category",
    department: "Department",
    departmentPh: "Select Department",
    hrms: "HRMS ID",
    hrmsPh: "Enter HRMS ID",
    gpf: "GPF/PRAN ID",
    gpfPh: "Enter GPF/PRAN ID",
    officeAddress: "Office Address",
    officeName: "Name of Office",
    officeNamePh: "Enter office name and complete address",
    addOffice: "Additional Office Details",
    addOfficePh: "Enter additional office details",
    candDocs: "Candidate Documents",
    photo: "Candidate Passport Size Photo",
    signature: "Candidate Signature",
    chooseFile: "Choose file",
    noFile: "No file chosen",
    photoFormat: "JPG, JPEG, PNG format required. Maximum file size 5MB.",
    declaration: "Declaration",
    declareText: "I hereby affirm that all the above given information is true to the best of my knowledge. If any of the details are found to be incorrect, my candidature may be rejected.",
    noteHindi: "Note :-",
    declare1: "Applicants must strictly have their application forwarded by their Controlling Officer / Head of Office and upload it.",
    declare2: "Controlling Officer / Office will sign and date, then upload by clicking on Step 2 above.",
    declare3: "You can take the actual exam only after uploading.",
    savePrint: "▣ Save & Print",
    continue: "Continue to Step 2 →",
    docDetails: "Documents Details",
    docNote: "Note - Applicants must strictly upload the application forwarded by their Controlling Officer / Head of Office. Applications forwarded by any other officer will be invalid. Applications without memo number and date will be rejected.",
    appForm: "Application Form",
    supportedFormats: "Supported formats:",
    max10: "Maximum 10MB",
    docUploadNote: "Note - Candidate's signature should be in jpg, jpeg, png format. Photo size should be between 4KB to 5MB.",
    successDoc: "✓ Document selected successfully. Ready for submission.",
    upload: "➤ Upload",
    search: "Search...",
    noOptions: "No options found",
    optionsAvail: "options available",
    switchLang: "हिंदी में बदलें",
    alertMissing: "Please enter/select",
    alertMobile: "Please enter a valid 10-digit mobile number.",
    alertAadhar: "Please enter a valid 12-digit Aadhaar number.",
    alertPhoto: "Please upload Candidate Passport Size Photo.",
    alertSignature: "Please upload Candidate Signature.",
    alertDeclare: "Please accept the declaration before proceeding.",
    alertType: "Only JPG, JPEG and PNG files are allowed.",
    alertSize: "File size should not exceed 5MB.",
    alertAppType: "Only JPG, JPEG, PNG and PDF files are allowed.",
    alertAppSize: "Application file size should not exceed 10MB.",
    alertSelectForm: "Please select the Application Form.",
    alertSuccessForm: "Application document selected successfully.",
  },
  hi: {
    step1: "चरण 1",
    step2: "चरण 2",
    registration: "पंजीकरण",
    docUpload: "दस्तावेज अपलोड",
    back: "← पीछे",
    formTitle: "कंप्यूटर योग्यता परीक्षण परीक्षा फॉर्म",
    note: "नोट:",
    mandatory: "* से चिह्नित फ़ील्ड अनिवार्य हैं।",
    personalDetails: "व्यक्तिगत विवरण",
    mobile: "पंजीकृत मोबाइल नंबर",
    mobilePh: "पंजीकृत मोबाइल नंबर दर्ज करें",
    fullName: "पूरा नाम",
    fullNamePh: "पूरा नाम दर्ज करें",
    email: "ईमेल",
    emailPh: "ईमेल पता दर्ज करें",
    gender: "लिंग",
    genders: ["Male", "Female", "Transgender"], // Keeping values English for backend consistency
    designation: "पदनाम",
    designationPh: "पदनाम दर्ज करें",
    service: "सेवा",
    servicePh: "सेवा चुनें",
    otherService: "अन्य विवरण",
    otherServicePh: "अन्य सेवा चुनें",
    serviceCadre: "सेवा संवर्ग",
    serviceCadrePh: "सेवा संवर्ग चुनें",
    dob: "जन्म तिथि",
    dobPh: "DD-MM-YYYY",
    aadhar: "आधार संख्या",
    aadharPh: "12 अंकों का आधार नंबर दर्ज करें",
    idProof: "पहचान प्रमाण",
    idProofPh: "पहचान प्रमाण चुनें",
    category: "वर्ग",
    categoryPh: "वर्ग चुनें",
    department: "विभाग",
    departmentPh: "विभाग चुनें",
    hrms: "HRMS आईडी",
    hrmsPh: "HRMS आईडी दर्ज करें",
    gpf: "GPF/PRAN आईडी",
    gpfPh: "GPF/PRAN आईडी दर्ज करें",
    officeAddress: "कार्यालय का पता",
    officeName: "कार्यालय का नाम",
    officeNamePh: "कार्यालय का नाम और पूरा पता दर्ज करें",
    addOffice: "अतिरिक्त कार्यालय विवरण",
    addOfficePh: "अतिरिक्त कार्यालय विवरण दर्ज करें",
    candDocs: "उम्मीदवार के दस्तावेज",
    photo: "पासपोर्ट साइज फोटो",
    signature: "आवेदक का हस्ताक्षर",
    chooseFile: "फ़ाइल चुनें",
    noFile: "कोई फ़ाइल नहीं चुनी गई",
    photoFormat: "JPG, JPEG, PNG प्रारूप आवश्यक है। अधिकतम फ़ाइल आकार 5MB।",
    declaration: "घोषणा",
    declareText: "मैं एतद्द्वारा पुष्टि करता/करती हूँ कि ऊपर दी गई सभी जानकारी मेरे सर्वोत्तम ज्ञान के अनुसार सत्य है। यदि कोई भी विवरण गलत पाया जाता है, तो मेरी उम्मीदवारी रद्द की जा सकती है।",
    noteHindi: "नोट :-",
    declare1: "आवेदक अनिवार्यतः अपने नियंत्री पदाधिकारी / कार्यालय प्रधान से ही आवेदन अग्रसारित कराकर अपलोड करेंगे।",
    declare2: "नियंत्री पदाधिकारी / कार्यालय अपने हस्ताक्षर एवं दिनांक उपर दस्तावेज अपलोड के Step 2 पर click कर अपलोड करेंगे।",
    declare3: "अपलोड करने के बाद ही आप वास्तविक परीक्षा दे सकते हैं।",
    savePrint: "▣ सहेजें और प्रिंट करें",
    continue: "चरण 2 पर जारी रखें →",
    docDetails: "दस्तावेज विवरण",
    docNote: "नोट - आवेदक अनिवार्यतः अपने नियंत्री पदाधिकारी / कार्यालय प्रधान से ही आवेदन अग्रसारित कराकर ही अपलोड करेंगे। किसी अन्य पदाधिकारी द्वारा अग्रसारित आवेदन पत्र मान्य नहीं होगा। बिना ज्ञापांक और दिनांक के अग्रसारित आवेदन पत्र अस्वीकृत कर दिया जायेगा।",
    appForm: "आवेदन पत्र",
    supportedFormats: "समर्थित प्रारूप:",
    max10: "अधिकतम 10MB",
    docUploadNote: "नोट - आवेदक का हस्ताक्षर jpg, jpeg, png प्रारूप में होना चाहिए। फोटो का आकार 4KB से 5MB के बीच होना चाहिए।",
    successDoc: "✓ दस्तावेज़ सफलतापूर्वक चुना गया। जमा करने के लिए तैयार।",
    upload: "➤ अपलोड करें",
    search: "खोजें...",
    noOptions: "कोई विकल्प नहीं मिला",
    optionsAvail: "विकल्प उपलब्ध",
    switchLang: "Switch to English",
    alertMissing: "कृपया दर्ज करें/चुनें",
    alertMobile: "कृपया वैध 10-अंकीय मोबाइल नंबर दर्ज करें।",
    alertAadhar: "कृपया 12 अंकों का वैध आधार नंबर दर्ज करें।",
    alertPhoto: "कृपया उम्मीदवार का पासपोर्ट साइज फोटो अपलोड करें।",
    alertSignature: "कृपया उम्मीदवार का हस्ताक्षर अपलोड करें।",
    alertDeclare: "कृपया आगे बढ़ने से पहले घोषणा स्वीकार करें।",
    alertType: "केवल JPG, JPEG और PNG फ़ाइलों की अनुमति है।",
    alertSize: "फ़ाइल का आकार 5MB से अधिक नहीं होना चाहिए।",
    alertAppType: "केवल JPG, JPEG, PNG और PDF फ़ाइलों की अनुमति है।",
    alertAppSize: "आवेदन फ़ाइल का आकार 10MB से अधिक नहीं होना चाहिए।",
    alertSelectForm: "कृपया आवेदन पत्र का चयन करें।",
    alertSuccessForm: "आवेदन दस्तावेज़ सफलतापूर्वक चुना गया।",
  },
};

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
  const [lang, setLang] = useState("en");
  const text = t[lang];

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

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

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
      alert(text.alertType);
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert(text.alertSize);
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
      alert(text.alertAppType);
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert(text.alertAppSize);
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
      ["mobile", text.mobile], ["fullName", text.fullName], ["email", text.email], ["gender", text.gender],
      ["designation", text.designation], ["service", text.service], ["otherService", text.otherService], ["serviceCadre", text.serviceCadre],
      ["dob", text.dob], ["aadhar", text.aadhar], ["idProof", text.idProof], ["category", text.category],
      ["department", text.department], ["gpfPranId", text.gpf], ["officeName1", text.officeName], ["officeName2", text.addOffice],
    ];

    for (const [field, label] of requiredFields) {
      if (!String(formData[field] || "").trim()) {
        alert(`${text.alertMissing} ${label}.`);
        return false;
      }
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert(text.alertMobile);
      return false;
    }

    if (!/^\d{12}$/.test(formData.aadhar)) {
      alert(text.alertAadhar);
      return false;
    }

    if (!formData.photo) {
      alert(text.alertPhoto);
      return false;
    }

    if (!formData.signature) {
      alert(text.alertSignature);
      return false;
    }

    if (!formData.declaration) {
      alert(text.alertDeclare);
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
      alert(text.alertSelectForm);
      return;
    }

    setSubmitted(true);
    console.log("Application Form:", applicationFile);
    console.log("Registration Data:", formData);
    alert(text.alertSuccessForm);
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#263746]">
      {/* PROGRESS HEADER */}
      <div className="sticky top-0 z-50 border-b border-[#d8dee5] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* PROGRESS BAR */}
            <div className="flex items-center flex-1">
              {/* STEP 1 */}
              <button type="button" onClick={() => changeStep(1)} className="group flex items-center gap-2">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${currentStep === 1 ? "bg-[#07336d] text-white shadow-md" : "bg-[#dce9f8] text-[#07336d]"}`}>
                  1
                </div>
                <div className="hidden text-left sm:block">
                  <p className={`text-xs font-semibold ${currentStep === 1 ? "text-[#07336d]" : "text-gray-500"}`}>{text.step1}</p>
                  <p className="text-sm font-medium">{text.registration}</p>
                </div>
              </button>

              {/* CONNECTOR */}
              <div className="mx-3 h-[2px] flex-1 max-w-[200px] bg-[#dbe1e7] sm:mx-6">
                <div className={`h-full transition-all duration-500 ${currentStep === 2 ? "w-full bg-[#07336d]" : "w-0"}`} />
              </div>

              {/* STEP 2 */}
              <button type="button" onClick={() => changeStep(2)} className="group flex items-center gap-2">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition ${currentStep === 2 ? "bg-[#07336d] text-white shadow-md" : "bg-[#dce9f8] text-[#07336d]"}`}>
                  2
                </div>
                <div className="hidden text-left sm:block">
                  <p className={`text-xs font-semibold ${currentStep === 2 ? "text-[#07336d]" : "text-gray-500"}`}>{text.step2}</p>
                  <p className="text-sm font-medium">{text.docUpload}</p>
                </div>
              </button>
            </div>

            {/* LANGUAGE SWITCHER */}
            <div className="ml-4 flex items-center shrink-0">
              <button
                onClick={toggleLanguage}
                className="rounded-md border border-[#07336d] px-3 py-1.5 text-xs font-semibold text-[#07336d] transition hover:bg-[#eef5ff]"
              >
                {text.switchLang}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 1 */}
      {currentStep === 1 && (
        <StepOne
          text={text}
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
          text={text}
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

const StepOne = ({ text, formData, photoName, signatureName, handleChange, handleFileChange, handleSubmit, handleSavePrint }) => {
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[1600px]">
      {/* PAGE TITLE */}
      <div className="border-b border-[#d8dee5] bg-white">
        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <button type="button" onClick={() => window.history.back()} className="flex w-fit items-center gap-1.5 rounded-md bg-[#07336d] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#05224a]">
            {text.back}
          </button>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2 text-sm font-medium text-[#263746] sm:text-base">
              <span className="text-lg">▣</span> {text.formTitle}
            </div>
          </div>
          <div className="hidden w-[70px] sm:block" />
        </div>
      </div>

      {/* MAIN */}
      <div className="space-y-5 px-3 py-5 sm:px-6 lg:px-8">
        {/* PERSONAL DETAILS */}
        <SectionCard title={text.personalDetails} number="01">
          <div className="mb-5 rounded-md border border-[#f5c6cb] bg-[#fff5f5] px-4 py-3 text-xs text-[#842029] sm:text-sm">
            <span className="font-semibold">{text.note}</span> {text.mandatory}
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
            {/* LEFT */}
            <div className="space-y-5">
              <FormRow label={text.mobile} required>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder={text.mobilePh} maxLength={10} inputMode="numeric" className={inputClass} />
              </FormRow>

              <FormRow label={text.fullName} required>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={text.fullNamePh} className={inputClass} />
              </FormRow>

              <FormRow label={text.email} required>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={text.emailPh} className={inputClass} />
              </FormRow>

              <FormRow label={text.gender} required>
                <div className="flex min-h-10 flex-wrap items-center gap-5">
                  {text.genders.map((gender) => (
                    <label key={gender} className="flex cursor-pointer items-center gap-2 text-sm">
                      <input type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} className="h-4 w-4 accent-[#07336d]" />
                      {gender === "Male" && text.male || gender === "Female" && text.female || text.transgender}
                    </label>
                  ))}
                </div>
              </FormRow>

              <FormRow label={text.designation} required>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder={text.designationPh} className={inputClass} />
              </FormRow>

              <FormRow label={text.service} required>
                <CustomDropdown text={text} name="service" value={formData.service} options={serviceOptions} placeholder={text.servicePh} onChange={(value) => handleChange({ target: { name: "service", value } })} />
              </FormRow>

              <FormRow label={text.otherService} required>
                <CustomDropdown text={text} name="otherService" value={formData.otherService} options={otherServiceOptions} placeholder={text.otherServicePh} onChange={(value) => handleChange({ target: { name: "otherService", value } })} />
              </FormRow>

              <FormRow label={text.serviceCadre} required>
                <CustomDropdown text={text} name="serviceCadre" value={formData.serviceCadre} options={serviceCadreOptions} placeholder={text.serviceCadrePh} searchable onChange={(value) => handleChange({ target: { name: "serviceCadre", value } })} />
              </FormRow>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              <FormRow label={text.dob} required>
                <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder={text.dobPh} maxLength={10} className={inputClass} />
              </FormRow>

              <FormRow label={text.aadhar} required>
                <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} placeholder={text.aadharPh} maxLength={12} inputMode="numeric" className={inputClass} />
              </FormRow>

              <FormRow label={text.idProof} required>
                <CustomDropdown text={text} name="idProof" value={formData.idProof} options={idProofOptions} placeholder={text.idProofPh} onChange={(value) => handleChange({ target: { name: "idProof", value } })} />
              </FormRow>

              <FormRow label={text.category} required>
                <CustomDropdown text={text} name="category" value={formData.category} options={categoryOptions} placeholder={text.categoryPh} onChange={(value) => handleChange({ target: { name: "category", value } })} />
              </FormRow>

              <FormRow label={text.department} required>
                <CustomDropdown text={text} name="department" value={formData.department} options={departmentOptions} placeholder={text.departmentPh} searchable onChange={(value) => handleChange({ target: { name: "department", value } })} />
              </FormRow>

              <FormRow label={text.hrms}>
                <input type="text" name="hrmsId" value={formData.hrmsId} onChange={handleChange} placeholder={text.hrmsPh} className={inputClass} />
              </FormRow>

              <FormRow label={text.gpf} required>
                <input type="text" name="gpfPranId" value={formData.gpfPranId} onChange={handleChange} placeholder={text.gpfPh} className={inputClass} />
              </FormRow>
            </div>
          </div>
        </SectionCard>

        {/* OFFICE + DOCUMENTS (TWO COLUMNS / ONE ROW) */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          {/* OFFICE ADDRESS */}
          <SectionCard title={text.officeAddress} number="02">
            <div className="space-y-5">
              <OfficeAddressRow label={text.officeName} name="officeName1" value={formData.officeName1} onChange={handleChange} placeholder={text.officeNamePh} />
              <OfficeAddressRow label={text.addOffice} name="officeName2" value={formData.officeName2} onChange={handleChange} placeholder={text.addOfficePh} />
            </div>
          </SectionCard>

          {/* CANDIDATE DOCUMENTS */}
          <SectionCard title={text.candDocs} number="03">
            <div className="space-y-4">
              <ImageUpload text={text} title={text.photo} fileName={photoName} onChange={(e) => handleFileChange(e, "photo")} />
              <ImageUpload text={text} title={text.signature} fileName={signatureName} onChange={(e) => handleFileChange(e, "signature")} />
            </div>
          </SectionCard>
        </div>

        {/* DECLARATION */}
        <section className="overflow-hidden rounded-lg border border-[#d8dee5] bg-white shadow-sm">
          <div className="border-b border-[#e1e5e9] bg-[#f8f9fa] px-4 py-3 sm:px-5">
            <h2 className="text-base font-semibold text-[#263746]">{text.declaration}</h2>
          </div>

          <div className="p-4 sm:p-5">
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-[#dce3ea] bg-[#fafbfc] p-4 transition hover:bg-[#f5f8fb]">
              <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1 h-4 w-4 shrink-0 accent-[#07336d]" />
              <span className="text-xs leading-6 text-gray-700 sm:text-sm">
                {text.declareText}
              </span>
            </label>

            <div className="mt-4 rounded-md border-l-4 border-red-400 bg-red-50 px-4 py-3 text-xs leading-6 text-gray-700 sm:text-sm">
              <p className="mb-2 font-semibold text-red-600">{text.noteHindi}</p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>{text.declare1}</li>
                <li>{text.declare2}</li>
                <li>{text.declare3}</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 pb-5 sm:flex-row">
          <button type="button" onClick={handleSavePrint} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-[#07336d] bg-white px-5 py-3 text-sm font-semibold text-[#07336d] transition hover:bg-[#f0f6ff]">
            {text.savePrint}
          </button>
          <button type="submit" className="flex min-h-12 flex-[1.5] items-center justify-center gap-2 rounded-md bg-[#07336d] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#05224a] hover:shadow-lg">
            {text.continue}
          </button>
        </div>
      </div>
    </form>
  );
};

/* =========================================================
   CUSTOM DROPDOWN
========================================================= */

const CustomDropdown = ({ text, name, value, options, placeholder, searchable = false, onChange }) => {
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
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onClick={(e) => e.stopPropagation()} autoFocus placeholder={text.search} className="h-10 w-full rounded-md border border-[#d5dce3] bg-[#f8fafc] pl-9 pr-3 text-sm outline-none focus:border-[#07336d] focus:ring-2 focus:ring-[#07336d]/10" />
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
              <div className="px-4 py-6 text-center text-sm text-gray-500">{text.noOptions}</div>
            )}
          </div>

          {/* FOOTER */}
          {searchable && (
            <div className="border-t border-[#e3e7eb] bg-[#fafbfc] px-3 py-2 text-[11px] text-gray-500">
              {filteredOptions.length} {text.optionsAvail}
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

const DocumentUpload = ({ text, applicationFileName, handleApplicationFileChange, handleDocumentUpload, onBack, submitted }) => {
  return (
    <div className="mx-auto max-w-[1600px]">
      {/* HEADER */}
      <div className="border-b border-[#d8dee5] bg-white">
        <div className="flex items-center px-4 py-3 sm:px-6 lg:px-8">
          <button type="button" onClick={onBack} className="flex items-center gap-1.5 rounded-md bg-[#07336d] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#05224a]">
            {text.back}
          </button>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2 text-base font-medium text-[#263746] sm:text-lg">
              <span className="text-xl">▣</span> {text.docUpload}
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
            <h2 className="mt-3 text-xl font-semibold text-[#172b40] sm:text-2xl">{text.docDetails}</h2>
            <p className="mx-auto mt-3 max-w-5xl text-sm italic leading-7 text-red-500">
              {text.docNote}
            </p>
          </div>

          {/* UPLOAD BODY */}
          <div className="p-4 sm:p-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-6">
                <label className="text-sm font-medium text-[#263746] sm:text-base">
                  <span className="mr-1 text-red-500">*</span> {text.appForm}
                </label>
                {/* FILE INPUT */}
                <label className="group flex h-12 cursor-pointer overflow-hidden rounded-md border border-[#cbd5df] bg-white transition hover:border-[#07336d] hover:shadow-sm">
                  <span className="flex shrink-0 items-center gap-2 border-r border-[#cbd5df] bg-[#f5f7f9] px-4 text-sm font-medium text-[#263746] transition group-hover:bg-[#eef5ff] sm:text-base">
                    {text.chooseFile}
                  </span>
                  <span className="flex min-w-0 flex-1 items-center truncate px-4 text-sm text-gray-500 sm:text-base">
                    {applicationFileName || text.noFile}
                  </span>
                  <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleApplicationFileChange} className="hidden" />
                </label>
              </div>

              {/* FILE INFORMATION */}
              <div className="mt-4 rounded-md bg-[#f5f8fb] px-4 py-3 text-xs text-gray-600">
                <span className="font-semibold">{text.supportedFormats}</span> JPG, JPEG, PNG, PDF <span className="ml-2">• {text.max10}</span>
              </div>

              {/* NOTE */}
              <div className="mt-5 rounded-md border-l-4 border-red-400 bg-red-50 px-4 py-3">
                <p className="text-xs italic leading-6 text-red-500 sm:text-sm">
                  {text.docUploadNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS */}
        {submitted && (
          <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {text.successDoc}
          </div>
        )}

        {/* UPLOAD */}
        <button type="button" onClick={handleDocumentUpload} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#07336d] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#05224a] hover:shadow-lg">
          <span className="text-lg">➤</span> {text.upload}
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION CARD
========================================================= */

const SectionCard = ({ title, number, children }) => {
  return (
    <section className="relative h-full overflow-visible rounded-lg border border-[#d8dee5] bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-[#dce2e7] bg-[#f8f9fa] px-4 py-3 sm:px-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#07336d] text-xs font-bold text-white">
          {number}
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#263746] sm:text-base">{title}</h2>
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
};

/* =========================================================
   FORM ROW
========================================================= */

const FormRow = ({ label, required, children }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-4">
      <label className="text-xs leading-5 text-[#263746] sm:text-[13px]">
        {required && <span className="mr-1 font-bold text-red-500">*</span>}
        <span className="font-medium">{label}</span>
      </label>
      <div className="min-w-0">{children}</div>
    </div>
  );
};

/* =========================================================
   OFFICE ROW
========================================================= */

const OfficeAddressRow = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="block text-xs leading-5 text-[#263746] sm:text-[13px]">
        <span className="mr-1 font-bold text-red-500">*</span>
        <span className="font-medium">{label}</span>
      </label>
      <textarea name={name} value={value} onChange={onChange} rows={3} placeholder={placeholder} className="w-full resize-none rounded-md border border-[#cfd7df] bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-[#8a96a3] focus:border-[#07336d] focus:ring-2 focus:ring-[#07336d]/15" />
    </div>
  );
};

/* =========================================================
   IMAGE UPLOAD
========================================================= */

const ImageUpload = ({ text, title, fileName, onChange }) => {
  return (
    <div className="rounded-md border border-[#dce2e7] bg-[#fafbfc] p-3">
      <label className="mb-2 block text-xs leading-5 text-[#263746] sm:text-[13px]">
        <span className="mr-1 font-bold text-red-500">*</span>
        <span className="font-medium">{title}</span>
      </label>
      <label className="flex h-11 w-full cursor-pointer overflow-hidden rounded-md border border-[#cfd7df] bg-white transition hover:border-[#07336d]">
        <span className="flex shrink-0 items-center border-r border-[#cfd7df] bg-[#f4f6f8] px-4 text-sm font-medium text-gray-700">{text.chooseFile}</span>
        <span className="flex min-w-0 flex-1 items-center truncate px-3 text-sm text-gray-500">{fileName || text.noFile}</span>
        <input type="file" accept=".jpg,.jpeg,.png" onChange={onChange} className="hidden" />
      </label>
      <p className="mt-2 text-xs italic leading-5 text-red-500">{text.photoFormat}</p>
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