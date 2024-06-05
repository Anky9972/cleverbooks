import React from 'react';
import KeyMetricsSection from './components/KeyMetricsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import HomePages from './pages/HomePages';
import Features from './components/Features';
import Spreadsheet from './components/Spreadsheet';
import Founders from './components/Founders';

function App() {
  return (
    <div>
      <HomePages/>
      <KeyMetricsSection />
      <ReviewsSection />
      <Spreadsheet/>
      <Features/>
      <Founders/>
      <Footer />
    </div>
  );
}

export default App;
