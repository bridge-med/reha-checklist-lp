import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ConceptSection from './components/ConceptSection';
import ContentsSection from './components/ContentsSection';
import KpiExamples from './components/KpiExamples';
import HowToUse from './components/HowToUse';
import Profile from './components/Profile';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper-off">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ConceptSection />
        <ContentsSection />
        <KpiExamples />
        <HowToUse />
        <Profile />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
