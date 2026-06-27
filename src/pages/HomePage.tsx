import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import About from '../components/About';
import BlogSection from '../components/BlogSection';
import KnowledgePreviewSection from '../components/KnowledgePreviewSection';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="מיינקראפט עם סטינגר - שיעורים פרטיים"
        description="שיעורים פרטיים במיינקראפט עם יוטיובר מוביל בישראל. למידה חווייתית, שיפור אנגלית ופיתוח כישורים דיגיטליים."
        keywords={[
          'מיינקראפט',
          'שיעורים פרטיים',
          'לימוד אנגלית',
          'מורה פרטי למיינקראפט',
          'שיעורי מיינקראפט',
        ]}
        path="/"
      />
      <div className="min-h-screen bg-[#1a1a1a]">
        <Navbar />
        <Hero />
        <Benefits />
        <About />
        <BlogSection />
        <KnowledgePreviewSection />
        <FAQ />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
