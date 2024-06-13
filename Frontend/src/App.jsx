// App.js
import React, { useState } from 'react';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Words from './Words';
import Alphabet from './Alphabet';
import NumbersComponent from './Numbers';
import Topics from './Topics';
import Wave_images from './wave-images';
import Alphabet_main from './Alphabet_main';
import Topics_main from './Topics_main';
import LoginForm from './Login';
import Education_main from './Educatin_main';
import Video_conf from './video-conf';
import './App.css';
import Video_conf_chat from './video-conf-chat';
import A_alphabet from './a';
import LetterPage from './LetterPage';
import SearchResultsPage from './SearchResultsPage';
import NumberRealTime from './Number_realtime';


import A1_alphabet from './ә';
import B_alphabet from './б';
import V_alphabet from './в';
import G_alphabet from './г';
import G1_alphabet from './ғ';
import D_alphabet from './д';

import ZH_alphabet from './ж';
import Z_alphabet from './з';
import I_alphabet from './и';
import I1_alphabet from './й';
import K_alphabet from './к';
import K1_alphabet from './қ';
import L_alphabet from './л';
import M_alphabet from './м';
import N_alphabet from './н';
import N1_alphabet from './ң';
import O_alphabet from './о';
import O1_alphabet from './ө';
import P_alphabet from './п';
import R_alphabet from './р';
import S_alphabet from './с';
import T_alphabet from './т';
import Y_alphabet from './у';
import Y1_alphabet from './ү';
import Y2_alphabet from './ұ';
import F_alphabet from './ф';
import X_alphabet from './х';
import XA_alphabet from './һ';

import CH_alphabet from './ч';
import SH_alphabet from './ш';
import SH1_alphabet from './щ';
import B2_alphabet from './ъ';
import YI_alphabet from './ы';
import IY_alphabet from './і';
import B1_alphabet from './ь';
import EA_alphabet from './э';
import YU_alphabet from './ю';
import YA_alphabet from './я';
import Video_hello from './VideoHello'
import Numbers_main from './Numbers_main';
import Team from './Team';
import Bir_jest from './1';
import Eki_jest from './2';
import Ush_jest from './3';
import Tort_jest from './4';
import Bes_jest from './5';
import Alty_jest from './6';
import Zheti_jest from './7';
import Segiz_jest from './8';
import Togyz_jest from './9';
import On_jest from './10';
import Onbir_jest from './11';
import Oneki_jest from './12';
import Onush_jest from './13';
import Ontort_jest from './14';
import Onbes_jest from './15';
import Onalty_jest from './16';
import Onzheti_jest from './17';
import Onsegiz_jest from './18';
import Ontogyz_jest from './19';
import Zhiyrma_jest from './20';

import HandNumber from './Number_realtime';
import Text from './text';


function HomePage() {
  return (
    <div>
      <Text />
      <Video_hello />
      <Alphabet_main />
      <Numbers_main />
      <Topics_main />
      <Info />
      <Team />
    </div>
  );
}

function App() {

  const [showFooter, setShowFooter] = useState(true);
  const [showFooterLogin, setShowFooterLogin] = useState(true);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/a" element={<A_alphabet />} />
          <Route path="/ә" element={<A1_alphabet />} />
          <Route path="/б" element={<B_alphabet />} />
          <Route path="/в" element={<V_alphabet />} />
          <Route path="/г" element={<G_alphabet />} />
          <Route path="/ғ" element={<G1_alphabet />} />
          <Route path="/д" element={<D_alphabet />} />


          <Route path="/ж" element={<ZH_alphabet />} />
          <Route path="/з" element={<Z_alphabet />} />
          <Route path="/и" element={<I_alphabet />} />
          <Route path="/й" element={<I1_alphabet />} />
          <Route path="/к" element={<K_alphabet />} />
          <Route path="/қ" element={<K1_alphabet />} />
          <Route path="/л" element={<L_alphabet />} />
          <Route path="/м" element={<M_alphabet />} />
          <Route path="/н" element={<N_alphabet />} />
          <Route path="/ң" element={<N1_alphabet />} />
          <Route path="/о" element={<O_alphabet />} />
          <Route path="/ө" element={<O1_alphabet />} />
          <Route path="/п" element={<P_alphabet />} />
          <Route path="/р" element={<R_alphabet />} />
          <Route path="/с" element={<S_alphabet />} />
          <Route path="/т" element={<T_alphabet />} />
          <Route path="/у" element={<Y_alphabet />} />
          <Route path="/ұ" element={<Y2_alphabet />} />
          <Route path="/ү" element={<Y1_alphabet />} />
          <Route path="/ф" element={<F_alphabet />} />
          <Route path="/х" element={<X_alphabet />} />
          <Route path="/һ" element={<XA_alphabet />} />
          <Route path="/ч" element={<CH_alphabet />} />
          <Route path="/ш" element={<SH_alphabet />} />
          <Route path="/щ" element={<SH1_alphabet />} />
          <Route path="/ъ" element={<B2_alphabet />} />
          <Route path="/ы" element={<YI_alphabet />} />
          <Route path="/і" element={<IY_alphabet />} />
          <Route path="/ь" element={<B1_alphabet />} />
          <Route path="/э" element={<EA_alphabet />} />
          <Route path="/ю" element={<YU_alphabet />} />
          <Route path="/я" element={<YA_alphabet />} />


          <Route path="/1" element={<Bir_jest />} />
          <Route path="/2" element={<Eki_jest />} />
          <Route path="/3" element={<Ush_jest />} />
          <Route path="/4" element={<Tort_jest />} />
          <Route path="/5" element={<Bes_jest />} />
          <Route path="/6" element={<Alty_jest />} />
          <Route path="/7" element={<Zheti_jest />} />
          <Route path="/8" element={<Segiz_jest />} />
          <Route path="/9" element={<Togyz_jest />} />
          <Route path="/10" element={<On_jest />} />
          <Route path="/11" element={<Onbir_jest />} />
          <Route path="/12" element={<Oneki_jest />} />
          <Route path="/13" element={<Onush_jest />} />
          <Route path="/14" element={<Ontort_jest />} />
          <Route path="/15" element={<Onbes_jest />} />
          <Route path="/16" element={<Onalty_jest />} />
          <Route path="/17" element={<Onzheti_jest />} />
          <Route path="/18" element={<Onsegiz_jest />} />
          <Route path="/19" element={<Ontogyz_jest />} />
          <Route path="/20" element={<Zhiyrma_jest />} />
          
          <Route path='/video-conf-chat' element={<Video_conf_chat />} />
          <Route path='/video-conf' element={<Video_conf />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/sign' element={<SignWithFooter setShowFooterLogin={setShowFooterLogin} />} />
          <Route path='/register' element={<RegisterWithFooter setShowFooter={setShowFooter} />} />
          <Route path='/words' element={<Words />} />
          <Route path='/alphabet' element={<Alphabet />} />
          <Route path='/numbers' element={<NumbersComponent />} />
          <Route path='/topics' element={<Topics />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/1" element={<Bir_jest />} />
          <Route path="/number_realtime" element={<HandNumber />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
}

function RegisterWithFooter({ setShowFooter }) {
  React.useEffect(() => {
    setShowFooter(false);
    return () => setShowFooter(true);
  }, [setShowFooter]);

  return <Register />;
}

function SignWithFooter({ setShowFooterLogin }) {
  React.useEffect(() => {
    setShowFooterLogin(false);
    return () => setShowFooterLogin(true);
  }, [setShowFooterLogin]);

  return <LoginForm />;
}

export default App;