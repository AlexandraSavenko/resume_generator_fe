
import { lazy, Suspense } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
// import ResumePage from './pages/resumePage/ResumePage'
// import HomePage from './pages/homePage/HomePage'

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const ResumePage = lazy(() => import("./pages/resumePage/ResumePage"))


function App() {

  return (
    <><Layout>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/resume' element={<ResumePage/>} />

        </Routes>
      </Suspense>
    </Layout>
    </>
  )
}

export default App
