import { Link } from 'react-router-dom';
import { Library, Filter, Layers } from 'lucide-react';
import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';
import {
  useCasePosts,
  getUseCaseCategories,
  getUseCaseTopics,
} from '../data/blogPosts';

const KnowledgeHubPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const categories = getUseCaseCategories();
  const topics = getUseCaseTopics();

  const filtered = useMemo(() => {
    return useCasePosts.filter((post) => {
      if (activeCategory && post.category !== activeCategory) return false;
      if (activeTopic && post.topic !== activeTopic) return false;
      return true;
    });
  }, [activeCategory, activeTopic]);

  const topicClusters = useMemo(() => {
    const map = new Map<string, typeof useCasePosts>();
    useCasePosts.forEach((post) => {
      const key = post.topic || 'כללי';
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(post);
    });
    return map;
  }, []);

  return (
    <>
      <SEO
        title="מרכז הידע — Use Cases למיינקראפט"
        description="20 מדריכי Use Case מעשיים למיינקראפט: הישרדות, בנייה, Redstone, Nether, חקירה ו-Multiplayer. צעד אחר צעד, בעברית, מהניסיון של סטינגר."
        keywords={[
          'מרכז ידע מיינקראפט',
          'use case מיינקראפט',
          'מדריך מיינקראפט',
          'טיפים survival',
          'רדסטון',
        ]}
        path="/knowledge"
      />
      <div className="min-h-screen bg-[#1a1a1a]">
        <Navbar />

        <header className="pt-32 pb-12 minecraft-grid">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Library className="w-10 h-10 text-green-500" />
              <h1 className="text-4xl md:text-5xl font-handjet text-green-500">מרכז הידע</h1>
            </div>
            <p className="text-gray-400 font-rubik max-w-2xl mx-auto text-lg mb-4">
              Use Cases מעשיים לעולם המיינקראפט — מצב, מטרה, צעדים וטיפים מהשטח
            </p>
            <p className="text-gray-500 font-rubik text-sm">
              {useCasePosts.length} מדריכים · מסודרים לפי נושא
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
            {Array.from(topicClusters.entries()).map(([topic, posts]) => (
              <button
                key={topic}
                onClick={() => {
                  setActiveTopic(activeTopic === topic ? null : topic);
                  setActiveCategory(null);
                }}
                className={`minecraft-card p-4 text-center transition-all hover:border-green-400 ${
                  activeTopic === topic ? 'border-green-500 bg-green-500/10' : ''
                }`}
              >
                <Layers className="w-5 h-5 text-green-500 mx-auto mb-2" />
                <span className="font-handjet text-green-500 text-sm block">{topic}</span>
                <span className="text-gray-500 text-xs font-rubik">{posts.length} מדריכים</span>
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Filter className="w-5 h-5 text-green-500" />
            <button
              onClick={() => {
                setActiveCategory(null);
                setActiveTopic(null);
              }}
              className={`px-4 py-2 rounded-lg font-rubik text-sm transition-colors ${
                activeCategory === null && activeTopic === null
                  ? 'bg-green-500 text-white'
                  : 'bg-[#2a2a2a] text-gray-400 hover:text-green-500'
              }`}
            >
              הכל
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveTopic(null);
                }}
                className={`px-4 py-2 rounded-lg font-rubik text-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-green-500 text-white'
                    : 'bg-[#2a2a2a] text-gray-400 hover:text-green-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} basePath="/knowledge" />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 font-rubik py-12">אין מדריכים בקטגוריה זו</p>
          )}

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="minecraft-card text-center">
              <h2 className="text-xl font-handjet text-green-500 mb-3">מאמרים להורים</h2>
              <p className="text-gray-400 font-rubik mb-4 text-sm">
                חינוך, ביטחון עצמי, אנגלית ובטיחות ברשת — בבלוג
              </p>
              <Link
                to="/blog"
                className="text-green-500 hover:text-green-400 font-handjet transition-colors"
              >
                לבלוג ←
              </Link>
            </div>
            <div className="minecraft-card text-center">
              <h2 className="text-xl font-handjet text-green-500 mb-3">רוצים ללמוד עם מורה?</h2>
              <p className="text-gray-400 font-rubik mb-4 text-sm">
                שיעורים פרטיים — נבנה יחד את ה-Use Case שמתאים לילד/ה שלכם
              </p>
              <Link
                to="/#pricing"
                className="minecraft-button inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-handjet text-sm"
              >
                קבע שיעור
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default KnowledgeHubPage;
