import { Routes, Route, Navigate} from "react-router-dom";
import { Header } from "./components/Header";
import { InfoArea } from "./components/InfoSection/InfoArea";

import './styles.scss';

export const App = () => {
  return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<InfoArea />} />
          
        </Routes>
      </main>
  
  )
}
