import { Field, FieldArray, Formik, Form, type FormikHelpers } from "formik";
import css from "./ResumeForm.module.css";
import * as Yup from "yup";
import StringInput from "../stringInput/StringInput";
import type { ResumeData } from "../../types/resumeDataType";
import { downloadResumeFile, generateResume } from "../../api/api";
import { useState } from "react";

const experienceSchema = Yup.object().shape({
  company: Yup.string().required(),
  position: Yup.string().required(),
  years: Yup.string().required(),
});
export const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Please enter your name"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Please enter your email"),
  city: Yup.string().min(2).required("Please enter your location"),
  country: Yup.string().min(4).required("Please enter your location"),
  skills: Yup.array().of(Yup.string()),
  experience: Yup.array()
    .of(experienceSchema)
    .min(1, "Please give at one working experience."),
});

const initialValues: ResumeData = {
  name: "",
  email: "",
  city: "",
  country: "",
  skills: [""],
  experience: [{ company: "", position: "", years: "" }],
};
const ResumeForm = () => {
    const [fileName, setFileName] = useState<string | null>(null)
  const handleSubmit = async (
    values: ResumeData,
    actions: FormikHelpers<ResumeData>
  ) => {
    try {
      const res = await generateResume(values);
      if (res.status === 200) {
        
        setFileName(res.fileName)
        actions.resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDownload = async () => {
    if(!fileName) return;
    const res = await downloadResumeFile(fileName);
    if(res.status === 200){
        const blob = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.docx";
        a.click()
        window.URL.revokeObjectURL(url);
        setFileName(null)
    }
  }
  return (
    <div className={css.wrap}>
      <h4>Your dream job is waiting for you!</h4>
      {fileName ? <p>Your resume is ready. Click the button to download it in docx</p> : <p>Fill in the form and generate your resume</p>}
      {fileName && <button onClick={handleDownload} >Download</button> }
      <Formik
        // validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className={css.form}>
            <StringInput name="name" type="text" placeholder="Name *" />
            <StringInput name="email" type="email" placeholder="Email *" />
            <StringInput
              name="city"
              type="text"
              placeholder="Location: city *"
            />
            <StringInput
              name="country"
              type="text"
              placeholder="Location: country *"
            />

            <FieldArray name="skills">
              {({ push, remove }) => (
                <ul>
                  {values.skills.map((_, index) => (
                    <li key={index}>
                      <Field name={`skills[${index}]`} />
                      <button type="button" onClick={() => remove(index)}>
                        X
                      </button>
                    </li>
                  ))}
                  <button type="button" onClick={() => push("")}>
                    +
                  </button>
                </ul>
              )}
            </FieldArray>
            <FieldArray name="experience">
              {({ push, remove }) => (
                <ul>
                  {values.experience.map((_, index) => (
                    <li key={index}>
                      <Field
                        name={`experience[${index}].company`}
                        placeholder="Company"
                      />
                      <Field
                        name={`experience[${index}].position`}
                        placeholder="Position"
                      />
                      <Field
                        name={`experience[${index}].years`}
                        placeholder="Years you've worked there"
                      />
                      <button type="button" onClick={() => remove(index)}>
                        X
                      </button>
                    </li>
                  ))}
                  <button type="button" onClick={() => push("")}>
                    +
                  </button>
                </ul>
              )}
            </FieldArray>
            <button className={css.sendBtn} type="submit">
              Generate my resume
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
