import { ErrorMessage, Field } from "formik"

interface Props {
    name: string,
    type: string,
    placeholder: string
}
const StringInput: React.FC<Props> = ({name, type, placeholder}) => {
  return (
    <>
      <Field type={type} name={name} placeholder={placeholder} />
    <ErrorMessage name={name} component="span"/>
    </>
  )
}

export default StringInput


 {/* <Field
              type="text"
              name="name"
              className={css.forminput}
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMess}
            />
            <Field
              type="email"
              name="email"
              className={css.forminput}
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMess}
            />
            <Field
              type="text"
              name="city"
              className={css.forminput}
              placeholder="Location: city"
            />
            <ErrorMessage
              name="city"
              component="span"
              className={css.errorMess}
            />
            <Field
              type="text"
              name="country"
              className={css.forminput}
              placeholder="Location: country"
            />
            <ErrorMessage
              name="country"
              component="span"
              className={css.errorMess}
            /> */}

             // const formData = new FormData
    // formData.append("name", values.name);
    // formData.append("email", values.email);
    // formData.append("city", values.city);
    // formData.append("country", values.country);
    // console.log(values);
    // actions.resetForm();