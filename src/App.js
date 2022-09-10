import { useState } from 'react';
import './App.css';
//import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import Navbar from './Navbar';
import Body from './Body';
import SecondBottom from './SecondBottom';
import Bottom from './Bottom';
import Last from './Last';
function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Navbar />
      <div className="container">

        <InputShortener setInputValue={setInputValue} />
        {/*<BackgroundAnimate /> */}
        <LinkResult inputValue={inputValue} />
        <Body />
        <SecondBottom />
        <Bottom />
        <Last />
      </div>
    </>
  );
}

export default App;
