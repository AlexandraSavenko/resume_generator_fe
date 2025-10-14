import { ErrorMessage, Field } from "formik"
import css from "./StringInput.module.css"

interface Props {
    name: string,
    type: string,
    placeholder: string
}
const StringInput: React.FC<Props> = ({name, type, placeholder}) => {
  return (
    <div className={css.inputWrap}>
      <Field type={type} name={name} placeholder={placeholder} className={`${css.input}`}/>
    <ErrorMessage name={name} component="span"/>
    </div>
  )
}

export default StringInput

