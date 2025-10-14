import axios from "axios";
import type { ResumeData } from "../types/resumeDataType";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)


export const generateResume = async (userData: ResumeData) => {
const res = await api.post("/resume", userData)
console.log(res)
return res.data;
}

export const downloadResumeFile = async (fileName: string) => {
    const res = await api.get(`/download/${fileName}`, {
        responseType: "blob"
    });
    return res;
}