
import './App.css'
import './index.css'

import {Header} from './assets/components/Header';
import Landing_Page from './assets/components/Landing_Page';
import Upload_Page from './assets/components/Upload_Page';
import Download_Page from './assets/components/Download_Page';
import { useState } from 'react';
import Footer from './assets/components/Footer';


function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <>
      <Header/>
      <Landing_Page/>
      <Upload_Page setImage={setImage}/>
      <Download_Page image={image}/>
      <Footer/>
    </>
  )
}

export default App
