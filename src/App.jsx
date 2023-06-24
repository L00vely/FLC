import { Routes, Route, Navigate} from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/Pages/HomePage";
import './styles.scss';


export const App = () => {
  return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </main>
  
  )
}
