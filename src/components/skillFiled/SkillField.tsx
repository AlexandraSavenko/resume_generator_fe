import { ErrorMessage, Field, FieldArray } from 'formik'
import css from './SkillField.module.css'

interface SkillFieldsProps {
  values: {
    skills: string[];
  };
}
const SkillField = ({values}: SkillFieldsProps) => {
  return (
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
                        <ErrorMessage name={`skills[${index}]`} component="span" />
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
  )
}

export default SkillField
