import {
  Field,
  FieldArray,
  Formik,
  Form,
  type FormikHelpers,
  ErrorMessage,
} from "formik";
import css from "./ResumeForm.module.css";
import * as Yup from "yup";
import StringInput from "../stringInput/StringInput";
import type { ResumeData } from "../../types/resumeDataType";
import { downloadResumeFile, generateResume } from "../../api/api";
import { useState } from "react";
import clsx from "clsx";

const experienceSchema = Yup.object().shape({
  company: Yup.string().required("This fiels shouldn't be empty"),
  position: Yup.string().required("This fiels shouldn't be empty"),
  years: Yup.string().required("This fiels shouldn't be empty"),
});
export const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).required("Please enter your name"),
  email: Yup.string()
    .email("This is not a valid email")
    .required("Please enter your email"),
  city: Yup.string().min(2).required("Please enter your location"),
  country: Yup.string().min(4).required("Please enter your location"),
  skills: Yup.array()
    .of(Yup.string())
    .min(2, "Please add at least two skills")
    .required("Please add at least two skills"),
  experience: Yup.array()
    .of(experienceSchema)
    .min(1, "Please give at least one working experience.")
    .required("Please add your latest workplace"),
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
  const [fileName, setFileName] = useState<string | null>(null);
  const handleSubmit = async (
    values: ResumeData,
    actions: FormikHelpers<ResumeData>
  ) => {
    try {
      const res = await generateResume(values);
      if (res.status === 200) {
        setFileName(res.fileName);
        actions.resetForm();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDownload = async () => {
    if (!fileName) return;
    const res = await downloadResumeFile(fileName);
    if (res.status === 200) {
      const blob = new Blob([res.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.docx";
      a.click();
      window.URL.revokeObjectURL(url);
      setFileName(null);
    }
  };
  return (
    <div className={css.formWrap}>
      <h2>Your dream job is waiting for you!</h2>
      {fileName ? (
        <p className={css.message}>
          Your resume is ready. Click the button to download it in docx
        </p>
      ) : (
        <p className={css.message}>Fill in the form and generate your resume</p>
      )}

      <Formik
        validationSchema={FormSchema}
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
                <div>
                  <div className={css.label}>
                    <p>Skills: </p>
                    <button
                      className={css.addBtn}
                      type="button"
                      onClick={() => push("")}
                    >
                      Add skill
                    </button>
                  </div>

                  <ul className={css.list}>
                    {values.skills.map((_, index) => (
                      <li key={index}>
                        <Field
                          className={css.forminput}
                          name={`skills[${index}]`}
                        />
                        <ErrorMessage name={`skills`} component="span" />
                        <button
                          className={css.delBtn}
                          type="button"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FieldArray>
            <FieldArray name="experience">
              {({ push, remove }) => (
                <div>
                  <div className={css.label}>
                    <p>Experience: </p>
                    <button
                      className={css.addBtn}
                      type="button"
                      onClick={() => push("")}
                    >
                      Add experience
                    </button>
                  </div>

                  <ul className={css.list}>
                    {values.experience.map((_, index) => (
                      <li key={index}>
                        <Field
                          className={css.forminput}
                          name={`experience[${index}].company`}
                          placeholder="Company"
                        />
                        <ErrorMessage name={`experience`} component="span" />

                        <Field
                          className={css.forminput}
                          name={`experience[${index}].position`}
                          placeholder="Position"
                        />
                        <ErrorMessage name={`experience`} component="span" />

                        <Field
                          className={css.forminput}
                          name={`experience[${index}].years`}
                          placeholder="Years you've worked"
                        />
                        <ErrorMessage name={`experience`} component="span" />

                        <button
                          className={css.delBtn}
                          type="button"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </FieldArray>
            <button
              className={clsx(css.sendBtn, fileName && css.disabled)}
              type="submit"
            >
              Generate my resume
            </button>
          </Form>
        )}
      </Formik>
      <div className={css.resultWrap}>
        <button
          disabled={!fileName}
          className={clsx(css.downloadBtn, !fileName && css.disabled)}
          onClick={handleDownload}
        >
          Download
        </button>
        {fileName ? (
          <p className={css.message}>
            Your resume is ready. Click the button to download it in docx
          </p>
        ) : (
          <p className={css.message}>
            Fill in the form and generate your resume
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
