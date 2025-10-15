import axios from "axios";
import type { ResumeFormData } from "../types/resumeDataType";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}
)


export const generateResume = async (userData: ResumeFormData) => {
const res = await api.post("/resume", userData)
return res.data;
}

export const downloadResumeFile = async (fileName: string) => {
    const res = await api.get(`resume/download/${fileName}`, {
        responseType: "blob"
    });
    return res;
}