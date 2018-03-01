import React from 'react';

import Header from './header';
import Skills from './skills';
import Profile from './profile';
import Footer from './footer';

const App = () => (
  <div>
    <Header />
    <main>
      <Skills />
      <Profile />
    </main>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
