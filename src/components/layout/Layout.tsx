import Header from '../header/Header'
import css from './Layout.module.css'

interface Props {
children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div className={css.wrap}>
        <Header/>
      {children}
    </div>
  )
}

export default Layout
