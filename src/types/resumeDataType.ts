interface Experience {
  company: string;
  position: string;
  years: string;
}

interface EducationForm {
  place: string;
  grYear: string; // string here so input can be blank
}

export interface ResumeFormData {
  name: string;
  email: string;
  city: string;
  country: string;
  description: string;
  skills: string[];
  experience: Experience[];
  education: EducationForm[];
}

interface Education {
  place: string;
  grYear: number;
}

export interface ResumeData {
  name: string;
  email: string;
  city: string;
  country: string;
  description: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}