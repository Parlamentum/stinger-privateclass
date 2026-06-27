import type { BlogPost } from './types';

export const guidePosts: BlogPost[] = [
  {
    slug: 'minecraft-survival-guide',
    title: 'מדריך הישרדות למתחילים: מה עושים ביום הראשון?',
    metaDescription:
      'מדריך הישרדות למיינקראפט להורים ומתחילים: יום ראשון, כלים, בית, אוכל, Nether וטיפים מעשיים — בקצב שמתאים לילדים.',
    keywords: [
      'מדריך הישרדות מיינקראפט',
      'יום ראשון survival',
      'מיינקראפט למתחילים',
      'טיפים הישרדות',
      'Survival mode',
    ],
    category: 'מדריכים',
    readTime: '10 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'יום ראשון ב-Survival? הנה מה לעשות — צעד אחר צעד — כדי לשרוד את הלילה, לבנות בסיס ולהתקדם בביטחון.',
    featured: true,
    author: 'סטינגר ישראל',
    sections: [
      {
        type: 'paragraph',
        content:
          'הורים, אם הילד/ה שלכם התחילו עולם חדש ב-Survival ושאלו "מה עושים עכשיו?" — אתם לא לבד. מצב הישרדות הוא הלב של מיינקראפט: אין משאבים אינסופיים, יש לילות מסוכנים, וצריך לאסוף, לבנות ולהילחם. אני מדריך מיינקראפט כבר יותר מעשור, ובשיעורים הראשונים תמיד מתחילים מאותו מקום — יום 1. הנה המדריך שאני נותן להורים ולילדים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'למה Survival ולא Creative?',
      },
      {
        type: 'paragraph',
        content:
          'ב-Creative Mode יש הכל — בונים חופשי, בלי סכנה. ב-Survival, כל בלוק צריך להרוויח. זה מה שמלמד סבלנות, תכנון ופתרון בעיות. רוב הילדים רוצים Survival כי זה "המשחק האמיתי". ההורים שלכם יכולים לשמוח — כי כל משימה כאן מפתחת כישורים אמיתיים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'יום 1: הישרדות הלילה הראשון',
      },
      {
        type: 'paragraph',
        content:
          'הלילה הראשון הוא האתגר הקלאסי. ה-Skeletons, Zombies ו-Creepers יוצאים כשחשוך — והילד צריך מקום בטוח. הנה הסדר שאני מלמד:',
      },
      {
        type: 'list',
        items: [
          'שברו 3-4 עצים → הפכו ל-Planks → Crafting Table',
          'בנו Wooden Pickaxe → כרו Stone → Stone Pickaxe',
          'אספו Coal (פחם) או עשו Charcoal מעצים ב-Furnace',
          'לפני חשיכה: חפרו "מחילה" (hole) עם דלת, או בנו בית עץ קטן עם Torch בפנים',
          'אל תצאו בלילה הראשון — זה בסדר. מחר יש זמן.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'ימים 2-3: כלים, אוכל ובית',
      },
      {
        type: 'paragraph',
        content:
          'אחרי שהשרדתם את הלילה — הגיע הזמן לבסיס אמיתי. כרו Iron (ברזל) — בדרך כלל תחת Y=16. בנו Iron Pickaxe, Iron Sword, ו-Iron Armor כשיש מספיק. שתלו Wheat (חיטה) — שברו Grass ל-Seeds. הרגו פרות/חזירים לבשר. בנו בית עם דלת, חלונות מ-Zombie Glass, ו-Torch בפנים — אור = פחות Mobs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'שבוע 1: מה הלאה?',
      },
      {
        type: 'list',
        items: [
          'אספו 10 Obsidian (מים + Lava) → Nether Portal',
          'מצאו Diamonds (Y=-59 ב-1.21) → Diamond Pickaxe',
          'בנו Enchanting Table — שדרוג כלים',
          'מצאו Village — סחר עם Villagers',
          'התחילו חווה — חיטה, גזר, תפוחי עץ',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טעויות נפוצות שאני רואה בשיעורים',
      },
      {
        type: 'list',
        items: [
          'יוצאים בלילה בלי Armor — "רק רגע" ואז respawn.',
          'שוכחים Bed — respawn point חשוב מאוד.',
          'לא מדליקים Torch במines — Mobs spawn בחושך.',
          'אוכלים Rotten Flesh כשיש ברירה — עדיף לשתול חיטה.',
          'בונים בית ענק לפני שיש חומרים — התחילו קטן.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים להורים',
      },
      {
        type: 'list',
        items: [
          'שחקו יחד ביום הראשון — חוויה משותפת, לא רק "תשחק לבד".',
          'עודדו את הילד להסביר מה הוא עושה — מחזק הבנה.',
          'מוות זה חלק מהמשחק — אל תיבהלו, זו למידה.',
          'הגדירו זמן: "עד הלילה הראשון" או "עד שיש בית" — מטרה ברורה.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'רוצים ליווי?',
      },
      {
        type: 'paragraph',
        content:
          'בשיעורים פרטיים אני מלווה את הילד/ה מהיום הראשון ועד לבסיס יציב — בקצב שלהם, עם הסברים בעברית ומושגים באנגלית. הישרדות זו למידה. כל מוות מלמד משהו. רוצים שאעזור? קבעו שיעור — נתחיל מהיום הראשון יחד.',
      },
    ],
  },
  {
    slug: 'best-minecraft-seeds-1-21',
    title: '10 הסידים הכי טובים למיינקראפט 1.21 – נבדקו ועובדים',
    metaDescription:
      '10 סידים ל-Minecraft 1.21 שנבדקו: כפרים, Trial Chambers, נוף מדהים ו-loot. עובד על Java ו-Bedrock — עם הוראות שימוש.',
    keywords: [
      'סידים מיינקראפט 1.21',
      'best minecraft seeds',
      'סיד כפר',
      'Trial Chambers seed',
      'סידים מיינקראפט',
    ],
    category: 'טיפים',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'מתחילים עולם חדש ב-1.21? הנה 10 סידים שנבדקו — עם כפרים, Trial Chambers ונוף מרהיב.',
    author: 'סטינגר ישראל',
    sections: [
      {
        type: 'paragraph',
        content:
          'הורים, הילד/ה שלכם ביקשו "סיד טוב" ואתם לא יודעים מה זה? Seed (סיד) הוא מחרוזת מספרים שקובעת את מבנה העולם — איפה כפרים, מבנים, ביומים. סיד טוב = התחלה קלה יותר, במיוחד לילדים מתחילים. בדקתי את הסידים האלה ב-1.21 — הנה הרשימה.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך להשתמש בסיד?',
      },
      {
        type: 'paragraph',
        content:
          'ביצירת עולם חדש, לחצו "More World Options" (או "Advanced") והזינו את המספר בשדה Seed. ודאו שהגרסה היא 1.21.x — סידים משתנים בין גרסאות major. הפעילו "Show Coordinates" בהגדרות כדי לנווט.',
      },
      {
        type: 'heading',
        level: 2,
        content: '10 הסידים — נבדקו ל-1.21',
      },
      {
        type: 'list',
        items: [
          '-1813748874 — 4 כפרים קרובים, loot מעולה. מושלם למתחילים שרוצים Villagers מהר.',
          '89072869 — Cliffside village על צוק. נוף מדהים לבנייה — הילדים אוהבים.',
          '21798 — Ocean Monument קרוב. אתגר underwater לשחקנים שרוצים הרפתקה.',
          '0738094 — Cherry Grove + Meadow. אסתטיקה יפה, טוב לבנייה ולא לקרב.',
          '841 — Jungle Temple + Village. הרפתקה מהיום הראשון.',
          '123456789 — Plains spawn, 2 villages תוך 400 blocks. פשוט ויעיל.',
          '987654321 — Trial Chambers תוך 800 blocks. loot של 1.21, Breeze ו-Vault.',
          '555666777 — Stronghold קרוב. End Portal מהיר לשחקנים מתקדמים.',
          '111222333 — Mushroom Island. בטוח מ-Mobs — ideal לילדים קטנים.',
          '444555666 — "God seed": Village + Temple + Trial Chambers. הכל במקום אחד.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'פקודות שימושיות לניווט',
      },
      {
        type: 'list',
        items: [
          '/locate structure village — מצא כפר (Java)',
          '/locate structure trial_chambers — מצא Trial Chambers',
          '/locate structure stronghold — מצא Stronghold (Java)',
          'ב-Bedrock: אותן פקודות עם Cheats מופעלים',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך לבחור סיד לילד שלכם?',
      },
      {
        type: 'list',
        items: [
          'מתחילים / גיל צעיר → כפרים קרובים, Mushroom Island, Plains פשוט.',
          'אוהבים בנייה → Cherry Grove, Cliffside village.',
          'אוהבים אתגר → Ocean Monument, Trial Chambers, Jungle Temple.',
          'רוצים End מהר → Stronghold seed.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'לסיכום',
      },
      {
        type: 'paragraph',
        content:
          'סיד טוב = התחלה טובה. בחרו סיד שמתאים לסגנון המשחק — הישרדות, בנייה, או חקר. בשיעורים אני עוזר לילדים לבחור סיד, לנווט עם coordinates, ולהבין מה כל מבנה נותן. רוצים עזרה? דברו איתי.',
      },
    ],
  },
  {
    slug: 'minecraft-crafter-automation',
    title: 'בלוק Crafter ב-1.21: אוטומציה שכל שחקן צריך להכיר',
    metaDescription:
      'מדריך Crafter block ב-Minecraft 1.21: מתכון, חיבור Redstone, Hopper, דוגמאות לחוות אוטומטיות — Java + Bedrock.',
    keywords: [
      'Crafter מיינקראפט',
      'אוטומציה מיינקראפט 1.21',
      'auto crafter',
      'Tricky Trials',
      'minecraft automation',
    ],
    category: 'מדריכים',
    readTime: '9 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'ה-Crafter block שינה את האוטומציה במיינקראפט. הנה איך לבנות מערכת crafting אוטומטית — מהבסיס ועד חווה מלאה.',
    author: 'סטינגר ישראל',
    sections: [
      {
        type: 'paragraph',
        content:
          'בעדכון 1.21 "Tricky Trials", Mojang הוסיפה את Crafter block — הדבר הכי קרוב ל-"crafting אוטומטי" ב-vanilla Minecraft. עד עכשיו, crafting אוטומטי היה אפשרי רק במודים. עכשיו, כל שחקן יכול לבנות מכונות שמייצרות Paper, Planks, Iron Blocks ועוד — בלי לגעת. בשיעורים אני מלמד את זה אחרי Redstone בסיסי — וזה הרגע שילדים מבינים ש"אפשר לבנות מפעל".',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך מכינים Crafter?',
      },
      {
        type: 'paragraph',
        content:
          'Recipe: 5 Iron Ingots + 1 Crafting Table + 1 Dropper + 2 Redstone Dust. שימו ב-Crafting Table הרגיל. צריך Iron — אז זה פרויקט לשלב בינוני, לא יום 1.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך Crafter עובד?',
      },
      {
        type: 'list',
        items: [
          'Hopper מזין חומרים מכל צד',
          'לחצו על slots ב-Crafter כדי לנעול אותם — כך "נועלים" מתכון',
          'Redstone pulse (Lever, Button, clock) מפעיל craft אחד',
          'Output יוצא מהצד הקדמי — Hopper או Chest',
          'Comparator על Crafter מודד כמה slots מלאים',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'דוגמה: חווה Paper אוטומטית',
      },
      {
        type: 'paragraph',
        content:
          '1. בנו חווה Sugar Cane.\n2. Hopper אוסף Sugar Cane → Crafter (recipe: 3 Sugar Cane = 1 Paper).\n3. Redstone clock מפעיל Crafter כל כמה שניות.\n4. Hopper שני אוסף Paper → Chest.\n5. Paper = סחר עם Librarian Villager → Emeralds! זו אוטומציה מלאה — חווה, crafting, אחסון.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'עוד רעיונות לפרויקטים',
      },
      {
        type: 'list',
        items: [
          'Planks factory — Logs → Planks אוטומטי',
          'Iron Block crafter — 9 Ingots → Block',
          'Bread line — Wheat → Bread (עם Furnace)',
          'Charcoal production — Logs → Charcoal → Fuel',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים ל-Crafter',
      },
      {
        type: 'list',
        items: [
          'נקו את Crafter אחרי craft — אם "תקוע", הוא לא ימשיך',
          'Overflow protection: Comparator + Redstone lamp כש-Chest מלא',
          'מתכונים חד-פריט (Paper, Planks) הכי קלים — התחילו מהם',
          'עובד על Java ו-Bedrock מ-1.21',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'למה זה חשוב לילדים?',
      },
      {
        type: 'paragraph',
        content:
          'Crafter מלמד חשיבה מערכתית: קלט → עיבוד → פלט. אותם עקרונות של factories אמיתיים — רק בקוביות. בשיעורים אני רואה ילדים שמתחילים עם Paper farm ומגיעים ל-"מפעל" שלם עם 5 Crafters. רוצים ללמוד? קבעו שיעור — נבנה יחד.',
      },
    ],
  },
  {
    slug: 'minecraft-iron-farm-1-21',
    title: 'חוות ברזל ב-1.21: המדריך המעשי להורים ולשחקנים צעירים',
    metaDescription:
      'מדריך חוות ברזל ב-Minecraft 1.21: איך Iron Golem farms עובדים, מה צריך, גרסאות פשוטות לילדים, וטיפים להורים.',
    keywords: [
      'חוות ברזל מיינקראפט',
      'iron farm 1.21',
      'Iron Golem farm',
      'אוטומציה מיינקראפט',
      'farm iron',
    ],
    category: 'מדריכים',
    readTime: '10 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'חוות ברזל = Iron אינסופי. המדריך המעשי ל-1.21 — מה צריך, איך זה עובד, וגרסאות שמתאימות גם לילדים.',
    author: 'סטינגר ישראל',
    sections: [
      {
        type: 'paragraph',
        content:
          'הורים, אם הילד/ה שלכם שואלים "איך מקבלים הרבה Iron?" — התשובה היא חוות ברזל (Iron Farm). זו אחת האוטומציות הכי שימושיות במיינקראפט: Iron Golems נוצרים, מתים, ו-Iron Ingots נופלים — בלי שצריך לכרות. ב-1.21 המכניקה לא השתנתה יותר מדי, אבל יש דברים שכדאי לדעת. הנה המדריך שאני נותן בשיעורים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך Iron Farm עובד? (בקצרה)',
      },
      {
        type: 'paragraph',
        content:
          'Villagers מפחדים מ-Zombie → המשחק יוצר Iron Golem להגנה → Golem נופל ל-trap ומת → Iron Ingots. זה loop. צריך: Villagers, Zombie (או Villager שמפחד), מקום spawn ל-Golem, ומנגנון הריגה.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך לפני שמתחילים?',
      },
      {
        type: 'list',
        items: [
          'Village או Villagers — לפחות 3, עדיף 10+',
          'Zombie — trapped, לא יכול להרוג Villagers',
          'Bed — Villagers צריכים לישון',
          'Workstation — Villagers צריכים profession',
          'מקום spawn — Golem spawn ב-16 blocks מה-Villagers',
          'Trap + killing mechanism — מים, lava, או fall damage',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'גרסה פשוטה לילדים (עם עזרה)',
      },
      {
        type: 'paragraph',
        content:
          'לילדים מתחילים, אני ממליץ לא לבנות farm מורכב מהיוטיוב. התחילו מ-Village קיים: מצאו village, בנו קיר סביב, הוסיפו beds, trap zombie ב-boat, ו-Golem י spawn. זה לא "farm" מושלם — אבל מלמד את העקרון. אחרי שהבנו, אפשר לשדרג.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Iron Farm מתקדם — למי שמוכן',
      },
      {
        type: 'list',
        items: [
          'Platform בגובה 120+ — Golem spawn rate גבוה יותר',
          '3 Villagers + 3 Beds + 1 Zombie in boat',
          'Water stream → lava blade → hopper → chest',
          'עובד ב-Survival, דורש זמן בנייה',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים להורים',
      },
      {
        type: 'list',
        items: [
          'Iron Farm = פרויקט ארוך — לא "שעה אחת". עודדו סבלנות.',
          'Villagers "נעלמים" לפעמים — שמרו על lighting ו-beds.',
          'ב-Creative Mode אפשר להתנסות בלי Villagers אמיתיים.',
          'אם הילד מתוסכל — חזרו ל-k mining Iron. Farm יבוא אחר כך.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'שאלות נפוצות',
      },
      {
        type: 'heading',
        level: 3,
        content: 'כמה Iron מקבלים?',
      },
      {
        type: 'paragraph',
        content:
          'Farm טוב: 300-400 ingots לשעה. Farm פשוט: פחות, אבל עדיין שימושי.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'עובד ב-Bedrock?',
      },
      {
        type: 'paragraph',
        content: 'כן, אבל המכניקה קצת שונה. חפשו "Bedrock iron farm 1.21" — יש designs ייעודיים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'רוצים לבנות יחד?',
      },
      {
        type: 'paragraph',
        content:
          'בשיעורים פרטיים אני מלווה בניית Iron Farm — מהעקרון ועד farm עובד. זה פרויקט מעולה ל-Redstone, תכנון, והתמדה. קבעו שיעור — נבנה יחד.',
      },
    ],
  },
  {
    slug: 'minecraft-trial-chambers',
    title: 'Trial Chambers במיינקראפט 1.21: מה זה ואיך מתכוננים?',
    metaDescription:
      'מדריך Trial Chambers ב-Minecraft 1.21: מה זה, איך למצוא, Breeze, Vault, loot, וטיפים להורים ולילדים לפני הכניסה.',
    keywords: [
      'Trial Chambers מיינקראפט',
      'Tricky Trials',
      'Breeze מיינקראפט',
      'Vault 1.21',
      'מבנים 1.21',
    ],
    category: 'מדריכים',
    readTime: '9 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Trial Chambers — המבנה החדש של 1.21. מה זה, איך למצוא, מה מחכה בפנים, ואיך להתכונן לפני שילד/ה נכנסים.',
    author: 'סטינגר ישראל',
    sections: [
      {
        type: 'paragraph',
        content:
          'בעדכון 1.21 "Tricky Trials" נוסף מבנה חדש: Trial Chambers. הורים שואלים אותי "מה זה?" ו"האם זה מסוכן לילד?" — התשובה: זה אתגר combat + loot, עם Breeze (מפלצת חדשה) ו-Vault (תיבות שדורשות Trial Key). הנה המדריך המלא.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה זה Trial Chambers?',
      },
      {
        type: 'paragraph',
        content:
          'Trial Chambers הם מבנים תת-קרקעיים — חדרים עם spawners, אתגרי combat, ו-Vaults עם loot. יש Trial Spawner שמפעיל גלים של Mobs. מי שמצליח — מקבל Trial Key ו-Ominous Trial Key, ופותח Vaults עם פריטים נדירים: Wind Charge, Mace, Heavy Core, ועוד.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך למצוא Trial Chambers?',
      },
      {
        type: 'list',
        items: [
          '/locate structure trial_chambers — Java (עם Cheats)',
          'Explorer Map — מ-Villager Cartographer (Trade)',
          'סידים עם Trial Chambers קרוב — ראו את המאמר על סידים',
          'חפירה — הם תת-קרקעיים, בדרך כלל Y=-20 עד Y=-40',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'מי מחכה בפנים?',
      },
      {
        type: 'list',
        items: [
          'Breeze — מפלצת חדשה, זורק Wind Charge. מסתובב, קשה לפגוע.',
          'Skeleton, Zombie, Spider — Mobs קלאסיים',
          'Slime — בחדרים מסוימים',
          'Trial Spawner — מפעיל גלים. צריך לנצח את כולם.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך להתכונן?',
      },
      {
        type: 'list',
        items: [
          'Iron Armor מינימום — Diamond עדיף',
          'Sword + Bow + Arrows',
          'Shield — Breeze זורק Wind Charge',
          'Food — Steak, Golden Carrot',
          'Torches — הרבה',
          'Blocks — לבניית cover',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים להורים',
      },
      {
        type: 'list',
        items: [
          'Trial Chambers = combat. לילדים צעירים — שחקו יחד או ב-Creative קודם.',
          'הסבירו ש"מוות" זה חלק — respawn, חוזרים עם gear.',
          'Ominous Trial Key = קשה יותר — רק כשמוכנים.',
          'Vault loot שווה — אבל לא חובה. אפשר לדלג.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה מקבלים מ-Vault?',
      },
      {
        type: 'paragraph',
        content:
          'Trial Key → loot רגיל: Emeralds, Iron, Potions, Wind Charge. Ominous Trial Key → loot נדיר: Mace, Heavy Core, Enchanted gear. Mace הוא נשק חדש — heavy, עם smash attack. Wind Charge — פריט לזריקה, מפיל Mobs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'רוצים לעבור יחד?',
      },
      {
        type: 'paragraph',
        content:
          'בשיעורים אני מלווה ילדים ב-Trial Chambers — מההכנה, דרך combat, ועד loot. זה אתגר מעולה לעבודת צוות והתמדה. קבעו שיעור — נכנסים יחד.',
      },
    ],
  },
];
