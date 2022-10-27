import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import SelectionMain from "./Components/SelectionMain";
import GalleryAminMain from "./Components/GalleryAminMain";
import GalleryNimrMain from "./Components/GalleryNimrMain";
import GalleryNoorMain from "./Components/GalleryNoorMain";

import Amin from "./Components/Amin";
import Cpp from "./Components/Cpp";
import GalleryCppMain from "./Components/GalleryCppMain";
import Nimr from "./Components/Nimr";
import Noor from "./Components/Noor";
import { useIdleTimer } from "react-idle-timer";

function App() {
  const timeout = 180000;
  // const [remaining, setRemaining] = useState(timeout);
  // const [elapsed, setElapsed] = useState(0);
  // const [lastActive, setLastActive] = useState(+new Date());
  const [isIdle, setIsIdle] = useState(false);
  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);
  const {} = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    // setRemaining(getRemainingTime());
    // setLastActive(getLastActiveTime());
    // setElapsed(getElapsedTime());
    setInterval(() => {
      // setRemaining(getRemainingTime());
      // setLastActive(getLastActiveTime());
      // setElapsed(getElapsedTime());

      if (isIdle === true) {
        window.location.assign("/");
      }
    }, 1000);
  }, [isIdle]);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/selection" element={<SelectionMain />} />
        <Route path="/galleryamin" element={<GalleryAminMain />} />
        <Route path="/gallerycpp" element={<GalleryCppMain />} />
        <Route path="/gallerynimr" element={<GalleryNimrMain />} />
        <Route path="/gallerynoor" element={<GalleryNoorMain />} />

        <Route path="/amin" element={<Amin />} />
        <Route path="/cpp" element={<Cpp />} />
        <Route path="/nimr" element={<Nimr />} />
        <Route path="/noor" element={<Noor />} />
      </Routes>
    </Fragment>
  );
}

export default App;
