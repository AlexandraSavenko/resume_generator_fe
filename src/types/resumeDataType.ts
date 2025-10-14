interface Experience {
  company: string;
  position: string;
  years: string;
}

export interface ResumeData {
  name: string;
  email: string;
  city: string;
  country: string;
  skills: string[];
  experience: Experience[];
}