const params = new URLSearchParams(window.location.search);
const service = params.get("service");

document.getElementById("serviceTitle").textContent = service;

const guideContent = document.getElementById("guideContent");
const applyLink = document.getElementById("applyLink");

const guides = {

  /* ================= PAN CARD ================= */
  "PAN Card": {
    steps: `
    <h3>Overview</h3>
    <p>PAN Card is a permanent identification number issued by the Income Tax Department. It is essential for financial, banking, and tax purposes.</p>

    <h3>Why PAN is Needed</h3>
    <ul>
      <li>Filing income tax returns</li>
      <li>Opening bank accounts</li>
      <li>Receiving salary</li>
      <li>Buying property or vehicles</li>
    </ul>

    <h3>Who Can Apply</h3>
    <ul>
      <li>Any Indian citizen</li>
      <li>Students above 18 years</li>
      <li>Businesses and firms</li>
    </ul>

    <h3>Documents Required</h3>
    <ul>
      <li>Aadhaar Card</li>
      <li>Address proof</li>
      <li>Date of birth proof</li>
      <li>Photograph</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Visit NSDL / UTI website</li>
      <li>Choose New PAN Application</li>
      <li>Fill Form 49A</li>
      <li>Upload documents</li>
      <li>Pay fees</li>
      <li>Receive PAN</li>
    </ol>
    `,
    link: "https://www.onlineservices.nsdl.com"
  },

  /* ================= DRIVING LICENSE ================= */
  "Driving License": {
    steps: `
    <h3>Overview</h3>
    <p>A Driving License legally permits a person to drive a motor vehicle on Indian roads.</p>

    <h3>Eligibility</h3>
    <ul>
      <li>Minimum age 18 years</li>
      <li>Valid Learner License</li>
    </ul>

    <h3>Documents</h3>
    <ul>
      <li>Learner License</li>
      <li>Aadhaar Card</li>
      <li>Address proof</li>
    </ul>

    <h3>Process</h3>
    <ol>
      <li>Apply on Parivahan portal</li>
      <li>Book driving test</li>
      <li>Appear for test</li>
      <li>License issued</li>
    </ol>
    `,
    link: "https://parivahan.gov.in"
  },

  /* ================= BIRTH CERTIFICATE ================= */
  "Birth Certificate": {
    steps: `
    <h3>Overview</h3>
    <p>Birth Certificate records the birth of a child and is required for education and identity documents.</p>

    <h3>Issued By</h3>
    <p>Municipality or Panchayat</p>

    <h3>Uses</h3>
    <ul>
      <li>School admission</li>
      <li>Passport</li>
      <li>Aadhaar</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Apply online or offline</li>
      <li>Submit hospital proof</li>
      <li>Verification</li>
      <li>Certificate issued</li>
    </ol>
    `,
    link: "https://crsorgi.gov.in"
  },

  /* ================= DEATH CERTIFICATE ================= */
  "Death Certificate": {
    steps: `
    <h3>Overview</h3>
    <p>Death Certificate is an official document that records the death of a person.</p>

    <h3>Why Required</h3>
    <ul>
      <li>Insurance claims</li>
      <li>Bank account closure</li>
      <li>Property transfer</li>
      <li>Pension settlement</li>
    </ul>

    <h3>Documents</h3>
    <ul>
      <li>Hospital death report</li>
      <li>ID proof of deceased</li>
      <li>Applicant ID proof</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Register death with local authority</li>
      <li>Submit documents</li>
      <li>Verification</li>
      <li>Download certificate</li>
    </ol>
    `,
    link: "https://crsorgi.gov.in"
  },

  /* ================= CASTE CERTIFICATE ================= */
  "Caste Certificate": {
    steps: `
    <h3>Overview</h3>
    <p>Caste Certificate identifies a person's caste for reservation and welfare benefits.</p>

    <h3>Uses</h3>
    <ul>
      <li>Education reservation</li>
      <li>Government jobs</li>
      <li>Scholarships</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Apply via state portal</li>
      <li>Upload documents</li>
      <li>Verification</li>
      <li>Certificate issued</li>
    </ol>
    `,
    link: "https://www.india.gov.in"
  },

  /* ================= INCOME CERTIFICATE ================= */
  "Income Certificate": {
    steps: `
    <h3>Overview</h3>
    <p>Income Certificate shows annual income of an individual or family.</p>

    <h3>Uses</h3>
    <ul>
      <li>Scholarships</li>
      <li>Fee concessions</li>
      <li>Government schemes</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Apply via MeeSeva / CSC</li>
      <li>Submit income proof</li>
      <li>Verification</li>
      <li>Certificate issued</li>
    </ol>
    `,
    link: "https://www.india.gov.in"
  },

  /* ================= RESIDENCE CERTIFICATE ================= */
  "Residence Certificate": {
    steps: `
    <h3>Overview</h3>
    <p>Residence Certificate proves that a person lives in a particular state or address.</p>

    <h3>Uses</h3>
    <ul>
      <li>Local benefits</li>
      <li>School admissions</li>
      <li>Government schemes</li>
    </ul>

    <h3>Steps</h3>
    <ol>
      <li>Apply via state portal</li>
      <li>Submit address proof</li>
      <li>Verification</li>
      <li>Certificate issued</li>
    </ol>
    `,
    link: "https://www.india.gov.in"
  },

  /* ================= EDUCATION LOAN ================= */
  "Education Loan": {
    steps: `
    <p>Education Loan helps students fund higher education.</p>
    <ol>
      <li>Confirm admission</li>
      <li>Apply via Vidya Lakshmi</li>
      <li>Submit documents</li>
      <li>Loan sanctioned</li>
    </ol>
    `,
    link: "https://www.vidyalakshmi.co.in"
  },

  /* ================= HOME LOAN ================= */
  "Home Loan": {
    steps: `
    <p>Home Loan helps purchase or build a house.</p>
    <ol>
      <li>Select bank</li>
      <li>Submit documents</li>
      <li>Verification</li>
      <li>Loan approved</li>
    </ol>
    `,
    link: "https://www.bankbazaar.com"
  },

  /* ================= MUDRA LOAN ================= */
  "Mudra Loan": {
    steps: `
    <p>Mudra Loan supports small businesses.</p>
    <ol>
      <li>Prepare business plan</li>
      <li>Apply via bank</li>
      <li>Verification</li>
      <li>Loan disbursed</li>
    </ol>
    `,
    link: "https://www.mudra.org.in"
  },

  /* ================= PERSONAL LOAN ================= */
  "Personal Loan": {
    steps: `
    <p>Personal Loan helps meet urgent financial needs.</p>
    <ol>
      <li>Apply online</li>
      <li>KYC verification</li>
      <li>Approval</li>
      <li>Amount credited</li>
    </ol>
    `,
    link: "https://www.bankbazaar.com"
  },

  /* ================= HEALTH CARD ================= */
  "Health Card": {
    steps: `
    <p>Health Card provides access to free healthcare under Ayushman Bharat.</p>
    <ol>
      <li>Register online</li>
      <li>Verify Aadhaar</li>
      <li>Download card</li>
    </ol>
    `,
    link: "https://pmjay.gov.in"
  },

  /* ================= HEALTH INSURANCE ================= */
  "Health Insurance": {
    steps: `
    <p>Health Insurance covers medical expenses.</p>
    <ol>
      <li>Select plan</li>
      <li>Submit details</li>
      <li>Pay premium</li>
      <li>Policy issued</li>
    </ol>
    `,
    link: "https://www.policybazaar.com"
  },

  /* ================= MATERNITY BENEFIT ================= */
  "Maternity Benefit Scheme": {
    steps: `
    <p>This scheme supports pregnant women financially.</p>
    <ol>
      <li>Register pregnancy</li>
      <li>Submit documents</li>
      <li>Receive benefits</li>
    </ol>
    `,
    link: "https://wcd.nic.in"
  },

  /* ================= CROP INSURANCE ================= */
  "Crop Insurance": {
    steps: `
    <p>Crop Insurance protects farmers against crop loss.</p>
    <ol>
      <li>Register on PMFBY</li>
      <li>Provide crop details</li>
      <li>Claim compensation</li>
    </ol>
    `,
    link: "https://pmfby.gov.in"
  },

  /* ================= FLOOD RELIEF ================= */
  "Flood Relief Assistance": {
    steps: `
    <p>Flood Relief provides financial help during disasters.</p>
    <ol>
      <li>Report damage</li>
      <li>Apply via portal</li>
      <li>Verification</li>
      <li>Relief credited</li>
    </ol>
    `,
    link: "https://www.ndma.gov.in"
  },

  /* ================= WOMEN SCHEMES ================= */
  "Mahila Samman Savings Scheme": {
    steps: `
    <p>A savings scheme for women offering high interest.</p>
    <ol>
      <li>Visit post office</li>
      <li>Open account</li>
      <li>Deposit amount</li>
    </ol>
    `,
    link: "https://www.indiapost.gov.in"
  },

  "Women Startup Schemes": {
    steps: `
    <p>Government support for women entrepreneurs.</p>
    <ol>
      <li>Register business</li>
      <li>Apply via Startup India</li>
      <li>Receive support</li>
    </ol>
    `,
    link: "https://www.startupindia.gov.in"
  },

  /* ================= TRADE LICENSE ================= */
  "Trade License": {
    steps: `
    <p>Trade License allows legal business operation.</p>
    <ol>
      <li>Apply via municipality</li>
      <li>Submit documents</li>
      <li>Inspection</li>
      <li>License issued</li>
    </ol>
    `,
    link: "https://www.india.gov.in"
  }
};

guideContent.innerHTML = guides[service]?.steps || "<p>No information available.</p>";
applyLink.href = guides[service]?.link || "#";
