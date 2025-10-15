import { ErrorMessage, Field } from "formik"
import css from "./TextareaInput.module.css"

interface Props {
    name: string,
    type: string,
    placeholder: string
}
const TextareaInput: React.FC<Props> = ({name, type, placeholder}) => {
  return (
    <div className={css.inputWrap}>
      <Field as={type} rows={4} name={name} placeholder={placeholder} className={`${css.input}`}/>
    <ErrorMessage name={name} component="span"/>
    </div>
  )
}

export default TextareaInput