import { Field, FieldArray, ErrorMessage } from "formik";
import css from "./EducationFields.module.css";

interface EducationFieldsProps {
  values: {
    education: Array<{ place: string; grYear: string }>;
  };
}

const EducationFields = ({ values }: EducationFieldsProps) => {
  return (
    <FieldArray name="education">
      {({ push, remove }) => (
        <div>
          <div className={css.label}>
            <p>Education:</p>
            <button
              className={css.addBtn}
              type="button"
              onClick={
                () => push({ place: "", grYear: "" }) // ✅ push object, not string
              }
            >
              Add education
            </button>
          </div>

          <ul className={css.list}>
            {values.education.map((_, index) => (
              <li key={index}>
                <Field
                  className={css.forminput}
                  name={`education[${index}].place`}
                  placeholder="Where did you stydy"
                />
                <ErrorMessage
                  name={`education[${index}].place`}
                  component="span"
                />

                <Field
                  className={css.forminput}
                  name={`education[${index}].grYear`}
                  placeholder="What year did you graduate"
                />
                <ErrorMessage
                  name={`education[${index}].grYear`}
                  component="span"
                />

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
  );
};

export default EducationFields;
