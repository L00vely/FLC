import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

import './styles.scss';

export const App = () => {
  return (

    <Router>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Info />} />
          
        </Routes>

      </body>
    </Router> 
  )
}
