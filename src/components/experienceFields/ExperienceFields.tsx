import { Field, FieldArray, ErrorMessage } from "formik";
import css from "./ExperienceFields.module.css";

interface ExperienceFieldsProps {
  values: {
    experience: Array<{ company: string; position: string; years: string }>;
  };
}

const ExperienceFields = ({ values }: ExperienceFieldsProps) => {
  return (
    <FieldArray name="experience">
      {({ push, remove }) => (
        <div>
          <div className={css.label}>
            <p>Experience:</p>
            <button
              className={css.addBtn}
              type="button"
              onClick={() =>
                push({ company: "", position: "", years: "" }) // ✅ push object, not string
              }
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
                <ErrorMessage
                  name={`experience[${index}].company`}
                  component="span"
                />

                <Field
                  className={css.forminput}
                  name={`experience[${index}].position`}
                  placeholder="Position"
                />
                <ErrorMessage
                  name={`experience[${index}].position`}
                  component="span"
                />

                <Field
                  className={css.forminput}
                  name={`experience[${index}].years`}
                  placeholder="Years you've worked"
                />
                <ErrorMessage
                  name={`experience[${index}].years`}
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

export default ExperienceFields;

