import { useState } from "react"
import { Navbar } from "../Navbar/Navbar";
import './movilButton.scss';

export const MovilButton = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };

    return (
      <div>
        <button onClick={toggleMenu} className="mobile-button">
            <img src="/icons/icons8-menú-50.png" alt="" />
        </button>
        {menuVisible && (
            <Navbar />
        )}
      </div>
    );
}
