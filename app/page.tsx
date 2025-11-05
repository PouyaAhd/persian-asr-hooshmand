import { Header } from './components/layout';
import {
  HeroSection,
  ObstaclesSection,
  ConsultationForm,
  FAQSection,
} from './components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <ObstaclesSection />
        <ConsultationForm />
        <FAQSection />
      </main>
    </>
  );
}
