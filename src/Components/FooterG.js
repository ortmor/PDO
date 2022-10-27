import React from "react";
import { useNavigate } from "react-router-dom";
import Backbtn from "../Media/Images/Items/Back_bt.png";
import Homebtn from "../Media/Images/Items/home_bt.png";
import { Link } from "react-router-dom";
import "../Styles/footer.scss";

function FooterG() {
  const navigate = useNavigate();
  return (
    <footer className="btn-container-footer">
      <div className="btn-left-margin">
        <button onClick={() => navigate(-1)}>
          <img src={Backbtn} />
        </button>
        <Link to="/">
          <button>
            <img src={Homebtn} />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default FooterG;
