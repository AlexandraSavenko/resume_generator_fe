import ResumeForm from '../../components/resumeForm/ResumeForm'
import css from './ResumePage.module.css'

const ResumePage = () => {
  return (
    <div className={`${css.wrap} container`}>
      <ResumeForm/>
    </div>
  )
}

export default ResumePage
