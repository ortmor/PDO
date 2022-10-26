import React from "react";
import Backbtn from "../Media/Images/Items/Back_bt.png";
import Homebtn from "../Media/Images/Items/home_bt.png";
import Gallerybtn from "../Media/Images/Items/gallery_bt.png";
import { Link } from "react-router-dom";
import "../Styles/footer.scss";

function FooterG() {
  return (
    <footer className="btn-container-footer">
      <div className="btn-left-margin">
        <Link to="/selection">
          <button>
            <img src={Backbtn} />
          </button>
        </Link>
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
