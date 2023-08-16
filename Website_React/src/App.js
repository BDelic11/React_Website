import './App.css';
import React, {useEffect} from 'react';
import FirstSection from './Components/Sections/FirstSection';
import FooterSection from './Components/Sections/Footer/FooterSection';

import SecondSection from './Components/Sections/SecondSection';
import ThirdSection from './Components/Sections/ThirdSection';


const App = () => {

  return (
   
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FooterSection />

    </div>  
  );
}

export default App;
