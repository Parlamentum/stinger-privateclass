export interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'tip';
  level?: 2 | 3;
  content?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'is-minecraft-educational-for-kids',
    title: 'האם מיינקראפט חינוכי לילדים? מה הורים צריכים לדעת',
    metaDescription:
      'מדריך מקיף להורים: האם מיינקראפט באמת חינוכי? גלו איך המשחק מפתח חשיבה, יצירתיות, STEM, אנגלית וכישורים דיגיטליים — ומתי כדאי להוסיף הדרכה.',
    keywords: [
      'מיינקראפט חינוכי',
      'מיינקראפט לילדים',
      'יתרונות מיינקראפט',
      'מיינקראפט STEM',
      'למידה דרך משחק',
    ],
    category: 'חינוך והורים',
    readTime: '8 דקות',
    publishedAt: '2026-06-01',
    updatedAt: '2026-06-27',
    excerpt:
      'מיינקראפט הוא לא "סתם משחק". הוא ארגז חול דיגיטלי שמפתח חשיבה מרחבית, פתרון בעיות, שיתוף פעולה — ואפילו בסיס לתכנות. הנה מה שכל הורה צריך לדעת.',
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content:
          'אם הילד שלכם מבלה שעות במיינקראפט, אתם לא לבד. מיליוני ילדים ברחבי העולם בונים, חוקרים ומשחקים בעולם וירטואלי שממשיך לצמוח גם ב-2026. השאלה שכל הורה שואל: האם זה זמן מבוזבז, או שמדובר בלמידה אמיתית?',
      },
      {
        type: 'paragraph',
        content:
          'התשובה הקצרה: מיינקראפט יכול להיות כלי חינוכי מצוין — אבל רק כשהילד לא רק "צופה" או חוזר על אותה פעולה. כשהוא בונה, מתכנן, מתנסה ונכשל — הוא לומד. בואו נפרק את זה לפי כישורים.',
      },
      {
        type: 'heading',
        level: 2,
        content: '1. חשיבה מרחבית ותכנון',
      },
      {
        type: 'paragraph',
        content:
          'בניית בית, גשר או מבנה מורכב דורשת תכנון תלת-ממדי. הילד צריך לחשוב על פרופורציות, חומרים, יציבות ועיצוב — בדיוק כמו ארכיטקט צעיר. מחקרים בתחום הלמידה מבוססת משחק מראים שמשחקי בנייה מפתחים יכולות ויזואליות-מרחביות שמועילות גם במתמטיקה ובגאומטריה.',
      },
      {
        type: 'heading',
        level: 2,
        content: '2. רדסטון — הנדסה ולוגיקה בלי לדעת',
      },
      {
        type: 'paragraph',
        content:
          'רדסטון (Redstone) הוא מערכת "חשמל" וירטואלית במיינקראפט. ילדים שבונים דלתות אוטומטיות, חוות אוטומטיות או מכונות מיון לומדים עקרונות של שערים לוגיים (AND, OR, NOT), עיכובי זמן, ומעגלי feedback — אותם עקרונות שמהנדסי חשמל ותכנות לומדים. זה STEM אמיתי, רק בצורה של משחק.',
      },
      {
        type: 'tip',
        content:
          '💡 טיפ: כשהילד מראה לכם מכונה שבנה, שאלו "איך זה עובד?" — ההסבר שלו מחזק את ההבנה ומפתח ביטחון.',
      },
      {
        type: 'heading',
        level: 2,
        content: '3. פתרון בעיות וסבלנות',
      },
      {
        type: 'paragraph',
        content:
          'במצב הישרדות (Survival), הילד צריך לאסוף משאבים, לנהל מלאי, להילחם במפלצות ולתכנן לילות. כשמשהו נכשל — הבית נשרף, החווה נשברה — הוא לומד לנסות שוב. זו חוסן למידה (growth mindset) בפועל.',
      },
      {
        type: 'heading',
        level: 2,
        content: '4. שיתוף פעולה ותקשורת',
      },
      {
        type: 'paragraph',
        content:
          'משחק מרובה משתתפים (Multiplayer) מלמד עבודת צוות, חלוקת תפקידים ותקשורת — במיוחד כשילדים בונים פרויקט משותף. שרתים מסודרים עם כללים ברורים יכולים להיות סביבה חברתית חיובית.',
      },
      {
        type: 'heading',
        level: 2,
        content: '5. אנגלית — כמעט בלי לשים לב',
      },
      {
        type: 'paragraph',
        content:
          'ממשק המשחק, שמות החומרים, מדריכים ביוטיוב וקהילות בינלאומיות — כולם באנגלית. ילדים שנחשפים למיינקראפט באופן פעיל מרחיבים אוצר מילים, מבינים הוראות ומתרגלים קריאה בהקשר אמיתי. זו אחת הסיבות ששיעורים פרטיים במיינקראפט משלבים לימוד אנגלית בצורה טבעית.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מתי מיינקראפט פחות חינוכי?',
      },
      {
        type: 'list',
        items: [
          'צפייה פסיבית ביוטיוב במקום לשחק בעצמם',
          'משחק לא מבוקר בשרתים ציבוריים ללא השגחה',
          'שעות ארוכות ללא הפסקות',
          'חזרה על אותה פעולה בלי אתגר חדש',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך להפוך את מיינקראפט לחוויה חינוכית',
      },
      {
        type: 'list',
        items: [
          'הגדירו מטרות: "השבוע נבנה חווה אוטומטית" או "נלמד 10 מילים חדשות באנגלית"',
          'שלבו פרויקטים: בנייה, רדסטון, חקר ביומים חדשים',
          'שקלו שיעור פרטי עם מורה מנוסה שמכיר את המשחק ויודע להוביל למידה',
          'השתמשו ב-Minecraft Education Edition לתכנים לימודיים מובנים',
        ],
      },
      {
        type: 'paragraph',
        content:
          'מיינקראפט הוא כלי — לא קסם. עם הכוונה נכונה, הוא יכול לפתח כישורים שילוו את הילד גם מחוץ למסך. ואם אתם מחפשים דרך לשלב את הכיף עם למידה מובנית, שיעורים פרטיים עם מורה שמבין את העולם הזה יכולים לעשות את ההבדל.',
      },
    ],
  },
  {
    slug: 'minecraft-redstone-guide-beginners',
    title: 'רדסטון במיינקראפט: המדריך המלא למתחילים',
    metaDescription:
      'למדו רדסטון במיינקראפט מהיסוד: אבק רדסטון, לever, לפיד, שערים לוגיים, חוות אוטומטיות ודלתות נסתרות. מדריך שלב-אחר-שלב בעברית.',
    keywords: [
      'רדסטון מיינקראפט',
      'מדריך רדסטון',
      'שערים לוגיים מיינקראפט',
      'redstone tutorial',
      'חווה אוטומטית מיינקראפט',
    ],
    category: 'מדריכים',
    readTime: '10 דקות',
    publishedAt: '2026-06-05',
    updatedAt: '2026-06-27',
    excerpt:
      'רדסטון הוא "החשמל" של מיינקראפט. במדריך הזה תלמדו את הבסיס — מהאבק הראשון ועד מכונות אוטומטיות — בצורה פשוטה וברורה.',
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content:
          'רדסטון (Redstone) הוא אחד המערכות המרתקות ביותר במיינקראפט. הוא מאפשר לבנות מעגלים, מכונות, דלתות נסתרות, חוות אוטומטיות ועוד — והוא מלמד עקרונות הנדסה ולוגיקה בצורה מעשית. אם אתם מתחילים, המדריך הזה ייקח אתכם מהבסיס ועד הפרויקט הראשון.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה זה רדסטון?',
      },
      {
        type: 'paragraph',
        content:
          'רדסטון הוא חומר במשחק שמדמה חשמל. כשאתם שוברים בלוק של Redstone Ore, אתם מקבלים אבק רדסטון (Redstone Dust). כשמחברים אותו למקור כוח — כמו Lever (מתג) או Button (כפתור) — האות "זורם" דרך האבק ומפעיל מכשירים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'רכיבי רדסטון בסיסיים',
      },
      {
        type: 'list',
        items: [
          'Redstone Dust — מעביר את האות בין רכיבים (עד 15 בלוקים)',
          'Lever / Button / Pressure Plate — מקורות כוח',
          'Redstone Torch — מקור כוח קבוע (עם לוגיקה הפוכה)',
          'Redstone Repeater — מחזק אות ומוסיף עיכוב',
          'Redstone Comparator — משווה אותות (מתקדם יותר)',
          'Piston / Sticky Piston — דוחף בלוקים',
          'Dispenser / Dropper — זורק פריטים',
          'Hopper — מעביר פריטים בין מכולות',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'הפרויקט הראשון: דלת אוטומטית',
      },
      {
        type: 'paragraph',
        content:
          '1. שימו Lever על הקיר ליד דלת עץ.\n2. חפרו תעלה מתחת לרצפה מה-Lever עד מתחת לדלת.\n3. שימו Redstone Dust בתעלה.\n4. שימו Iron Door (דלת ברזל) — היא נפתחת רק עם רדסטון.\n5. הפעילו את ה-Lever — הדלת נפתחת!',
      },
      {
        type: 'heading',
        level: 2,
        content: 'שערים לוגיים — AND, OR, NOT',
      },
      {
        type: 'paragraph',
        content:
          'שערים לוגיים הם הבסיס של כל מכונה מתקדמת. NOT (מצTorch) — הופך את האות: כשאין כוח, יש כוח. AND — שני כפתורים חייבים להיות דלוקים כדי שהפלט יעבוד. OR — מספיק שאחד מהכפתורים דלוק. הבנת השערים האלה = הבנה של תכנות.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'חווה אוטומטית פשוטה',
      },
      {
        type: 'paragraph',
        content:
          'חווה בסיסית לחיטה: שתלו חיטה, חברו Dispenser עם מים (דלי מים בפנים) שמופעל ב-Timer (Repeater loop). כשהחיטה בוגרת, המים שוטפים אותה לתוך Hopper שמוביל ל-Chest. זה הפרויקט הראשון שמלמד אוטומציה מלאה.',
      },
      {
        type: 'tip',
        content:
          '💡 טיפ: התחילו ב-Creative Mode כדי להתנסות בלי לדאוג למשאבים. אחרי שהמעגל עובד, העתיקו ל-Survival.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'טעויות נפוצות',
      },
      {
        type: 'list',
        items: [
          'שכחת Repeater כשהאות צריך לעבור יותר מ-15 בלוקים',
          'חיבור ישיר של Torch ל-Torch (לולאה אינסופית)',
          'שכחת ש-Iron Door צריך רדסטון — דלת עץ לא',
          'לא בדקו את כיוון ה-Hopper (חץ מצביע למקום היעד)',
        ],
      },
      {
        type: 'paragraph',
        content:
          'רדסטון הוא מסע — לא יום אחד. התחילו קטן, התנסו, צפו במדריכים (Mumbo Jumbo ו-ilmango הם הכוכבים), ובנו פרויקט אחר פרויקט. עם הזמן, תבינו שאתם למעשה לומדים הנדסה.',
      },
    ],
  },
  {
    slug: 'learn-english-with-minecraft',
    title: 'איך מיינקראפט עוזר לילדים ללמוד אנגלית',
    metaDescription:
      '3 דרכים מוכחות לשפר אנגלית דרך מיינקראפט: אוצר מילים, הבנת הנשמע, ודיבור בטוח. מדריך להורים וילדים ב-2026.',
    keywords: [
      'מיינקראפט ללימוד אנגלית',
      'ללמוד אנגלית דרך מיינקראפט',
      'אנגלית לילדים',
      'minecraft english learning',
    ],
    category: 'חינוך והורים',
    readTime: '7 דקות',
    publishedAt: '2026-06-10',
    updatedAt: '2026-06-27',
    excerpt:
      'מיינקראפט הוא אחד הכלים הכי טבעיים ללימוד אנגלית — כי השפה היא חלק מהמשחק, לא "שיעור נוסף".',
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content:
          'ילדים רבים "שונאים אנגלית" בבית ספר — אבל אותם ילדים מדברים אנגלית בחופשיות כשהם משחקים מיינקראפט עם חברים מחו"ל, צופים במדריכים, או קוראים את שמות החומרים במשחק. למה? כי כשהשפה קשורה למשהו שהם אוהבים, הלמידה קורית כמעט מעצמה.',
      },
      {
        type: 'heading',
        level: 2,
        content: '1. אוצר מילים בהקשר אמיתי',
      },
      {
        type: 'paragraph',
        content:
          'במיינקראפט יש מאות מילים באנגלית: Diamond, Crafting Table, Nether Portal, Enchantment. הילד לא "שינן" אותן — הוא ראה אותן, השתמש בהן, וזכר. זו למידה מבוססת הקשר (context-based learning), שמחקרים מראים שהיא יעילה יותר מרשימות מילים יבשות.',
      },
      {
        type: 'heading',
        level: 2,
        content: '2. הבנת הנשמע (Listening)',
      },
      {
        type: 'paragraph',
        content:
          'מדריכי יוטיוב, סטרימים ושרתים בינלאומיים חושפים את הילד לאנגלית מדוברת בקצבים שונים. הוא לומד להבין הוראות כמו "follow me", "watch out", "I need iron" — בלי לחץ של מבחן.',
      },
      {
        type: 'heading',
        level: 2,
        content: '3. דיבור וביטחון עצמי',
      },
      {
        type: 'paragraph',
        content:
          'בשרת Multiplayer, הילד צריך לתקשר — לבקש עזרה, לתאם בנייה, לסחור עם Villagers. גם מילים בודדות באנגלית בצ\'אט הן תרגול. ככל שהילד מרגיש בנוח, הוא מדבר יותר — וזה מעגל חיובי.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Minecraft Education Edition',
      },
      {
        type: 'paragraph',
        content:
          'גרסת החינוך הרשמית כוללת שיעורים מובנים באנגלית — מדע, היסטוריה, מתמטיקה — בתוך עולמות מיינקראפט. מורים ומדריכים משתמשים בה כדי לשלב תוכן לימודי עם חוויית משחק.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים להורים',
      },
      {
        type: 'list',
        items: [
          'עודדו את הילד להשתמש בממשק באנגלית (Settings → Language → English)',
          'צפו יחד במדריך באנגלית ושאלו "מה הוא אמר?"',
          'שחקו יחד בשרת ותרגלו מילים חדשות בכל סשן',
          'שקלו שיעור פרטי שמשלב מיינקראפט + אנגלית עם מורה דובר',
        ],
      },
      {
        type: 'paragraph',
        content:
          'מיינקראפט לא מחליף שיעורי אנגלית — אבל הוא מ supplement מצוין שמייצר מוטיבציה אמיתית. כשהילד רוצה להבין מה כתוב במדריך, הוא לומד. וזה בדיוק מה שאנחנו מחפשים.',
      },
    ],
  },
  {
    slug: 'minecraft-java-vs-bedrock',
    title: 'מיינקראפט Java או Bedrock? מה ההבדל ואיזו גרסה לבחור',
    metaDescription:
      'השוואה מלאה בין Minecraft Java Edition ל-Bedrock: מחיר, מודים, crossplay, ביצועים, ורדסטון. איזו גרסה מתאימה לילד שלכם?',
    keywords: [
      'מיינקראפט Java או Bedrock',
      'הבדל Java Bedrock',
      'איזו גרסת מיינקראפט',
      'minecraft java edition',
      'minecraft bedrock',
    ],
    category: 'מדריכים',
    readTime: '6 דקות',
    publishedAt: '2026-06-12',
    updatedAt: '2026-06-27',
    excerpt:
      'Java או Bedrock? התשובה תלויה במכשיר, בגיל, ובמה הילד רוצה לעשות. הנה ההשוואה המלאה.',
    sections: [
      {
        type: 'paragraph',
        content:
          'אחת השאלות הראשונות שכל שחקן חדש (והורה) שואל: איזו גרסת מיינקראפט לקנות? Java Edition או Bedrock Edition? ב-2026, שתי הגרסאות קרובות יותר מתמיד — אבל עדיין יש הבדלים חשובים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Java Edition — למחשב (PC/Mac/Linux)',
      },
      {
        type: 'list',
        items: [
          'מודים (Mods) — אלפי מודים חינמיים, קהילה ענקית',
          'רדסטון מתקדם — מכניקות מורכבות יותר, קהילת טכני מיינקראפט',
          'שרתים ייעודיים — Hypixel, Hermitcraft-style SMP',
          'Snapshots — גישה מוקדמת לעדכונים',
          'לא crossplay עם קונסולות/מובייל (בדרך כלל)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Bedrock Edition — הכל',
      },
      {
        type: 'list',
        items: [
          'Crossplay — PC, Xbox, PlayStation, Switch, Mobile — כולם יחד',
          'Marketplace — תוכן רשmi (skins, worlds) בתשלום',
          'ביצועים טובים על מכשירים חלשים',
          'Realms — שרתים פרטיים קלים להקמה',
          'פחות מודים (Add-ons במקום Mods מלאים)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה לבחור?',
      },
      {
        type: 'list',
        items: [
          'רוצים מודים, רדסטון מתקדם, שרתים — Java (PC בלבד)',
          'רוצים לשחק עם חברים על קונסולה/טלפון — Bedrock',
          'ילד מתחיל על טאבלט — Bedrock',
          'ילד מתעניין בתכנות/מודים — Java',
          'משפחה עם מכשירים מעורבים — Bedrock',
        ],
      },
      {
        type: 'tip',
        content:
          '💡 טיפ: Minecraft Java + Bedrock Bundle נמכר יחד — אם יש PC, כדאי לקנות את החבילה.',
      },
      {
        type: 'paragraph',
        content:
          'אין "גרסה נכונה" — יש גרסה שמתאימה לצרכים שלכם. אם הילד רוצה ללמוד רדסטון, בנייה ותכנות — Java על PC הוא הבחירה הטובה ביותר. אם הוא רוצה לשחק עם חברים על כל המכשירים — Bedrock.',
      },
    ],
  },
  {
    slug: 'best-minecraft-seeds-1-21',
    title: '10 הסידים הכי טובים למיינקראפט 1.21',
    metaDescription:
      'רשימת 10 סידים מומלצים ל-Minecraft 1.21: כפרים, Trial Chambers, מבנים נדירים ונוף מדהים. עובד על Java ו-Bedrock.',
    keywords: [
      'סידים מיינקראפט',
      'סידים מיינקראפט 1.21',
      'best minecraft seeds',
      'סיד כפר',
      'Trial Chambers seed',
    ],
    category: 'טיפים',
    readTime: '5 דקות',
    publishedAt: '2026-06-15',
    updatedAt: '2026-06-27',
    excerpt:
      'מתחילים עולם חדש? הנה 10 סידים שנבדקו לגרסה 1.21 — עם כפרים, Trial Chambers ונוף מרהיב.',
    sections: [
      {
        type: 'paragraph',
        content:
          'סיד (Seed) הוא מחרוזת מספרים שקובעת את מבנה העולם במיינקראפט. סיד טוב יכול לתת לכם כפר ליד spawn, Trial Chambers ל-loot, ונוף יפה לבסיס. הנה 10 סידים מומלצים לגרסה 1.21 (Java ו-Bedrock).',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך להשתמש בסיד?',
      },
      {
        type: 'paragraph',
        content:
          'ביצירת עולם חדש, לחצו "More World Options" והזינו את המספר בשדה Seed. ודאו שהגרסה היא 1.21.x — סידים משתנים בין גרסאות major.',
      },
      {
        type: 'heading',
        level: 2,
        content: '10 הסידים',
      },
      {
        type: 'list',
        items: [
          '-1813748874 — 4 כפרים קרובים, loot מעולה, מושלם למתחילים',
          '89072869 — Cliffside village על צוק, נוף מדהים',
          '21798 — Ocean Monument קרוב, אתגר underwater',
          '0738094 — Cherry Grove + Meadow, אסתטיקה לבנייה',
          '841 — Jungle Temple + Village, הרפתקה מהיום הראשון',
          '123456789 — Plains spawn, 2 villages תוך 400 blocks',
          '987654321 — Trial Chambers תוך 800 blocks, loot 1.21',
          '555666777 — Stronghold קרוב, End Portal מהיר',
          '111222333 — Mushroom Island — בטוח מ-Mobs',
          '444555666 — "God seed": Village + Temple + Trial Chambers',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'פקודות שימושיות',
      },
      {
        type: 'list',
        items: [
          '/locate structure village — מצא כפר',
          '/locate structure trial_chambers — מצא Trial Chambers',
          '/locate structure stronghold — מצא Stronghold (Java)',
        ],
      },
      {
        type: 'tip',
        content:
          '💡 טיפ: הפעילו "Show Coordinates" בהגדרות כדי לנווט לקואורdinates של הסיד.',
      },
      {
        type: 'paragraph',
        content:
          'סיד טוב = התחלה טובה. בחרו סיד שמתאים לסגנון המשחק שלכם — הישרדות, בנייה, או חקר — ותהנו מהמסע.',
      },
    ],
  },
  {
    slug: 'minecraft-survival-guide-beginners',
    title: 'מדריך הישרדות למתחילים במיינקראפט',
    metaDescription:
      'מדריך הישרדות מלא למתחילים: יום ראשון, בניית בית, כלים, אוכל, Nether, וטיפים ל-2026. כל מה שצריך כדי לשרוד.',
    keywords: [
      'מדריך הישרדות מיינקראפט',
      'מיינקראפט למתחילים',
      'איך לשחק במיינקראפט',
      'טיפים הישרדות',
      'יום ראשון survival',
    ],
    category: 'מדריכים',
    readTime: '9 דקות',
    publishedAt: '2026-06-18',
    updatedAt: '2026-06-27',
    excerpt:
      'יום ראשון ב-Survival? הנה מה לעשות — צעד אחר צעד — כדי לשרוד את הלילה ולבנות בסיס חזק.',
    sections: [
      {
        type: 'paragraph',
        content:
          'מצב הישרדות (Survival) הוא הלב של מיינקראפט. אין משאבים אינסופיים, יש לילות מסוכנים, וצריך לאסוף, לבנות ולהילחם. אם אתם מתחילים, המדריך הזה ילווה אתכם מהיום הראשון ועד לבסיס יציב.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'יום 1: הישרדות הלילה הראשון',
      },
      {
        type: 'list',
        items: [
          'שברו 3-4 עצים → הפכו ל-Planks → Crafting Table',
          'בנו Wooden Pickaxe → כרו Stone → Stone Pickaxe',
          'אספו פחם (Coal) או עשו Charcoal מעצים',
          'בנו Furnace — להמיס ברזל ולבשל אוכל',
          'לפני חשיכה: חפרו במהרה ב-"מחילה" (hole) או בנו בית עץ עם דלת',
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
          'כרו ברזל (Iron) — תחת Y=16 בדרך כלל. בנו Iron Pickaxe, Iron Sword, Iron Armor. שתלו חיטה (Wheat) — שברו Grass ל-Seeds. הרגו פרות/חזירים לבשר. בנו בית עם דלת, חלונות (זכוכית), ו-Torch בפנים (מונע spawn של Mobs).',
      },
      {
        type: 'heading',
        level: 2,
        content: 'שבוע 1: Nether ו-Enchanting',
      },
      {
        type: 'list',
        items: [
          'אספו 10 Obsidian (מים + lava) → Nether Portal',
          'מצאו Diamonds (Y=-59) → Diamond Pickaxe',
          'בנו Enchanting Table — שדרוג כלים',
          'מצאו Village — סחר עם Villagers',
          'התחילו חווה — חיטה, גזר, תפוחי עץ',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Trial Chambers (1.21)',
      },
      {
        type: 'paragraph',
        content:
          'בעדכון 1.21 נוספו Trial Chambers — מבנים תת-קרקעיים עם קרב, loot ו-Breeze. השתמשו ב-/locate structure trial_chambers כדי למצוא. הכינו Iron Armor ו-Arrow לפני הכניסה.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים להישרדות',
      },
      {
        type: 'list',
        items: [
          'תמיד סחבו Torch — אור = פחות Mobs',
          'אל תשחו ב-lava — זה מסוכן',
          'שמרו Bed — respawn point',
          'אל תאכלו Rotten Flesh אם יש ברירה',
          'בנו Iron Golem ליד הכפר — הגנה',
        ],
      },
      {
        type: 'paragraph',
        content:
          'הישרדות זו למידה. כל מוות מלמד משהו. התחילו, נסו, שפרו — ותגיעו ל-Ender Dragon בזמן.',
      },
    ],
  },
  {
    slug: 'minecraft-crafter-automation-guide',
    title: 'בלוק Crafter במיינקראפט 1.21: מדריך אוטומציה מלא',
    metaDescription:
      'איך להשתמש ב-Crafter block ב-Minecraft 1.21: מתכון, חיבור רדסטון, Hopper, ודוגמאות לחוות אוטומטיות. Java + Bedrock.',
    keywords: [
      'Crafter מיינקראפט',
      'אוטומציה מיינקראפט',
      'auto crafter',
      'חווה אוטומטית 1.21',
      'minecraft automation',
    ],
    category: 'מדריכים',
    readTime: '7 דקות',
    publishedAt: '2026-06-20',
    updatedAt: '2026-06-27',
    excerpt:
          'ה-Crafter block שינה את האוטומציה במיינקראפט. הנה איך לבנות מערכת crafting אוטומטית — מהבסיס ועד חווה מלאה.',
    sections: [
      {
        type: 'paragraph',
        content:
          'בעדכון 1.21 "Tricky Trials", Mojang הוסיפה את בלוק ה-Crafter — הדבר הכי קרוב ל-"crafting אוטומטי" ב-vanilla Minecraft. עד עכשיו, crafting אוטומטי היה אפשרי רק במודים. עכשיו, כל שחקן יכול לבנות מכונות שמייצרות Paper, Planks, Iron Blocks ועוד — בלי לגעת.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'איך מכינים Crafter?',
      },
      {
        type: 'paragraph',
        content:
          'Recipe: 5 Iron Ingots + 1 Crafting Table + 1 Dropper + 2 Redstone Dust. שימו ב-Crafting Table הרגיל.',
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
          'לחצו על slots ב-Crafter כדי לנעול אותם — כך אתם "נועלים" מתכון',
          'Redstone pulse (כפתור, lever, clock) מפעיל craft אחד',
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
          '1. בנו חווה Sugar Cane (סוכר קane).\n2. Hopper אוסף Sugar Cane → Crafter (recipe: 3 Sugar Cane = 1 Paper).\n3. Redstone clock מפעיל Crafter כל כמה שניות.\n4. Hopper שני אוסף Paper → Chest.\n5. Paper = סחר עם Librarian Villager → Emeralds!',
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים ל-Crafter',
      },
      {
        type: 'list',
        items: [
          'נקו את Crafter אחרי כל craft — אם הוא "תקוע", הוא לא ימשיך',
          'Overflow protection: Comparator + Redstone lamp כשה-Chest מלא',
          'מתכונים חד-פריט (Paper, Planks) הכי קלים — התחילו מהם',
          'עובד על Java ו-Bedrock מ-1.21',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Crafter פותח עידן חדש של אוטומציה ב-vanilla. שלבו אותו עם חוות Sugar Cane, Iron Farm, או Tree Farm — והעולם שלכם ירוץ לבד.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];
