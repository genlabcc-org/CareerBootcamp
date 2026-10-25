// Form validation and normalization utilities

export const DEPARTMENT_OPTIONS = [
  "Artificial Intelligence and Data Science",
  "Computer Science and Engineering",
  "Information Technology",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Others",
];

export const DOMAIN_OPTIONS = [
  "Full Stack Web Development",
  "Frontend Development",
  "Backend & API Engineering",
  "Artificial Intelligence & Machine Learning",
  "Data Science & Analytics",
  "Cloud Computing & DevOps",
  "Cybersecurity & Ethical Hacking",
  "Mobile App Development",
  "UI/UX Design & Product",
  "Embedded Systems & IoT",
  "Blockchain & Web3",
  "Others",
];

export const AI_SKILL_OPTIONS = [
  "Machine Learning",
  "Deep Learning",
  "Generative AI and LLMs",
  "Prompt Engineering",
  "Natural Language Processing",
  "Computer Vision",
  "Data Analytics",
  "AI Agents and Automation",
  "Other",
  "No AI Skills Yet",
];

export const PASSOUT_YEAR_OPTIONS = [
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "Others",
];

export function normalizeEmail(email) {
  if (!email) return "";
  return email.trim().toLowerCase();
}

export function normalizePhone(phone) {
  if (!phone) return "";
  return phone.replace(/[^0-9+]/g, "").trim();
}

export function validateRegistrationForm(formData) {
  const errors = {};

  // Full Name
  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Full name must be at least 2 characters long.";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone Number
  const digitsOnly = formData.phoneNumber ? formData.phoneNumber.replace(/\D/g, "") : "";
  if (!formData.phoneNumber || digitsOnly.length < 10) {
    errors.phoneNumber = "Please enter a valid phone number (at least 10 digits).";
  }

  // College Name
  if (!formData.collegeName || formData.collegeName.trim().length < 2) {
    errors.collegeName = "College name is required.";
  }

  // Pass Out Year (Dropdown with Others)
  const passYear = (formData.passOutYear || "").toString().trim();
  if (!passYear || passYear === "Others") {
    errors.passOutYear = "Please select or type your graduation year.";
  }

  // Department (Dropdown with Others)
  const dept = (formData.department || formData.domain || "").trim();
  if (!dept || dept === "Others") {
    errors.department = "Please select or type your department.";
  }

  // Domain (Dropdown with Others)
  const dom = (formData.domain || "").trim();
  if (!dom || dom === "Others") {
    errors.domain = "Please select or type your domain.";
  }

  // Consent
  if (!formData.consent) {
    errors.consent = "You must consent to registration and attendance processing.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
