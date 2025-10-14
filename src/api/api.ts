import axios from "axios";
import type { ResumeData } from "../types/resumeDataType";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)


export const generateResume = async (userData: ResumeData) => {
const res = await api.post("/resume", userData)
console.log(res)
}