import React, { Fragment, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import SelectionMain from "./Components/SelectionMain";
import GalleryMain from "./Components/GalleryMain";
import Amin from "./Components/Amin";
import Cpp from "./Components/Cpp";
import Nimr from "./Components/Nimr";
import Noor from "./Components/Noor";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/selection" element={<SelectionMain />} />
        <Route path="/gallery" element={<GalleryMain />} />
        <Route path="/amin" element={<Amin />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/nimr" element={<Nimr />} />
        <Route path="/noor" element={<Noor />} />
      </Routes>
    </Fragment>
  );
}

export default App;
