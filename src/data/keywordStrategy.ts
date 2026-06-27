/**
 * SEO Keyword Strategy — Stinger Israel Blog
 *
 * Research summary (June 2026):
 * - Head terms like "מיינקראפט" / "minecraft" are saturated; target long-tail clusters.
 * - Evergreen tutorials (redstone, survival, seeds, farms) drive sustained organic traffic.
 * - Parent/education queries have high commercial intent and align with Stinger's brand.
 * - Version-specific content (1.21+) captures update-driven search spikes.
 * - Hebrew local terms have lower competition than English equivalents.
 */

export interface KeywordCluster {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  primaryKeywords: string[];
  secondaryKeywords: string[];
  searchIntent: string;
  articleSlugs: string[];
}

export const keywordClusters: KeywordCluster[] = [
  {
    id: 'education-parents',
    name: 'חינוך והורים',
    priority: 'high',
    primaryKeywords: [
      'מיינקראפט חינוכי',
      'מיינקראפט לילדים',
      'האם מיינקראפט טוב לילדים',
      'יתרונות מיינקראפט',
    ],
    secondaryKeywords: [
      'מיינקראפט STEM',
      'למידה דרך משחק',
      'מיינקראפט בטיחות',
      'זמן מסך מיינקראפט',
    ],
    searchIntent: 'Informational — parents researching whether Minecraft is beneficial',
    articleSlugs: ['minecraft-logic', 'minecraft-confidence'],
  },
  {
    id: 'redstone-engineering',
    name: 'רדסטון והנדסה',
    priority: 'high',
    primaryKeywords: [
      'רדסטון מיינקראפט',
      'מדריך רדסטון',
      'שערים לוגיים מיינקראפט',
      'מכונות אוטומטיות מיינקראפט',
    ],
    secondaryKeywords: [
      'redstone tutorial',
      'חווה אוטומטית מיינקראפט',
      'דלת נסתרת רדסטון',
      'מעגל רדסטון',
    ],
    searchIntent: 'Tutorial — players learning redstone mechanics',
    articleSlugs: ['minecraft-redstone'],
  },
  {
    id: 'english-learning',
    name: 'לימוד אנגלית',
    priority: 'high',
    primaryKeywords: [
      'מיינקראפט ללימוד אנגלית',
      'ללמוד אנגלית דרך מיינקראפט',
      'אנגלית לילדים מיינקראפט',
    ],
    secondaryKeywords: [
      'minecraft english learning',
      'שיפור אנגלית במשחק',
      'מיינקראפט Education Edition',
    ],
    searchIntent: 'Commercial/Informational — parents seeking English improvement via gaming',
    articleSlugs: ['minecraft-english'],
  },
  {
    id: 'version-comparison',
    name: 'Java vs Bedrock',
    priority: 'medium',
    primaryKeywords: [
      'מיינקראפט Java או Bedrock',
      'הבדל בין Java לBedrock',
      'איזו גרסת מיינקראפט לקנות',
    ],
    secondaryKeywords: [
      'minecraft java edition',
      'minecraft bedrock edition',
      'crossplay minecraft',
      'מיינקראפט למחשב',
    ],
    searchIntent: 'Informational — new players choosing edition',
    articleSlugs: ['minecraft-buying-guide'],
  },
  {
    id: 'seeds-worldgen',
    name: 'סידים ועולמות',
    priority: 'medium',
    primaryKeywords: [
      'סידים מיינקראפט',
      'סידים מיינקראפט 1.21',
      'הסיד הכי טוב מיינקראפט',
      'best minecraft seeds',
    ],
    secondaryKeywords: [
      'סיד כפר ליד spawn',
      'Trial Chambers seed',
      'minecraft-trial-chambers',
      'minecraft seed map',
    ],
    searchIntent: 'Tutorial/Listicle — players starting new worlds',
    articleSlugs: ['best-minecraft-seeds-1-21', 'minecraft-trial-chambers'],
  },
  {
    id: 'survival-basics',
    name: 'הישרדות למתחילים',
    priority: 'medium',
    primaryKeywords: [
      'מדריך הישרדות מיינקראפט',
      'איך לשחק במיינקראפט',
      'מיינקראפט למתחילים',
      'טיפים להישרדות מיינקראפט',
    ],
    secondaryKeywords: [
      'יום ראשון survival',
      'איך לבנות בית במיינקראפט',
      'איך להיכנס ל Nether',
      'מיינקראפט survival guide',
    ],
    searchIntent: 'Tutorial — new players learning survival mode',
    articleSlugs: ['minecraft-survival-guide'],
  },
  {
    id: 'automation-farms',
    name: 'אוטומציה וחוות',
    priority: 'medium',
    primaryKeywords: [
      'חוות ברזל מיינקראפט',
      'חווה אוטומטית מיינקראפט 1.21',
      'בלוק Crafter מיינקראפט',
      'אוטומציה מיינקראפט',
    ],
    secondaryKeywords: [
      'iron farm 1.21',
      'auto crafter tutorial',
      'חווה סוכר קane',
      'minecraft automation',
    ],
    searchIntent: 'Tutorial — intermediate players building farms',
    articleSlugs: ['minecraft-crafter-automation', 'minecraft-iron-farm-1-21'],
  },
];
