import type { BlogPost } from './types';

export const useCasePosts: BlogPost[] = [
  {
    slug: 'use-case-first-night-house',
    title: 'איך לשרוד את הלילה הראשון ולבנות בית בסיסי',
    metaDescription:
      'מדריך מעשי לשרוד את הלילה הראשון במיינקראפט Survival: כלים, מחסה, אור וטיפים מהשטח — בקצב שמתאים לילדים ולהורים.',
    keywords: [
      'לילה ראשון מיינקראפט',
      'בית בסיסי survival',
      'הישרדות מתחילים',
      'מחסה מיינקראפט',
      'יום ראשון',
    ],
    category: 'הישרדות',
    topic: 'התחלה',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'הילד/ה התחילו עולם חדש והשמש שוקעת? הנה בדיוק מה לעשות — מהר — כדי לשרוד את הלילה ולבנות בסיס קטן שיעבוד.',
    featured: true,
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה שלכם פתחו עולם Survival חדש, אספו כמה עצים, והפתאום השמש שוקעת. מסך כהה, קולות מוזרים בחוץ, ואין בית. זה הרגע שבו הרבה ילדים (והורים) מרגישים לחץ — אבל עם סדר פעולות נכון, הלילה הראשון הוא לגמרי ניתן לניהול.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לשרוד את הלילה הראשון בבטחה, ולצאת ממנו עם בסיס קטן: Crafting Table, כלים מעץ/אבן, מקום מוגן עם דלת, ולפחות Torch אחד. לא צריך ארמון — צריך מחסה.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          '3–4 עצים (Logs) — חומר הבסיס לכל דבר',
          'Crafting Table — נוצר מ-4 Planks',
          'Wooden Pickaxe — לכריית אבן',
          'Stone Pickaxe — לכריית Coal או ליצירת Furnace',
          'Coal או עצים ל-Charcoal — ל-Torch',
          'דלת (Door) או חומר לבניית קיר — עץ או אבן',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'שברו 3–4 עצים → הפכו ל-Planks → בנו Crafting Table.',
          'בנו Wooden Pickaxe → כרו Stone → Stone Pickaxe ו-Stone Sword.',
          'חפשו Coal (פחם) בשכבות האבן, או הפעילו Furnace עם עצים ל-Charcoal.',
          'לפני חשיכה: חפרו מחילה 2×2 עם דלת, או בנו בית עץ 4×4 עם גג ודלת.',
          'הדליקו Torch בפנים — אור = פחות Mobs.',
          'אל תצאו בלילה הראשון. זה בסדר לחכות עד הבוקר.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'אם אין Coal — Charcoal מעץ ב-Furnace עובד בדיוק כמו Coal ל-Torch.',
          'מחילה בקרקע עם דלת היא הפתרון הכי מהיר — לא צריך בית מושלם.',
          'שמרו על Sword ביד — Creeper יכול להופיע גם ליד הבית.',
          'אל תאכלו Rotten Flesh אם יש ברירה — עדיף לחכות לבוקר ולשתול Wheat.',
          'בוקר = זמן לבנות Bed — respawn point חשוב מאוד.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'אם הלילה הראשון מרגיש מלחיץ — אתם לא לבד. בשיעורים פרטיים אצלי אנחנו עוברים את זה יחד, בקצב של הילד/ה, עד שיש ביטחון ומטרה ברורה ליום הבא. רוצים ליווי? אשמח לעזור.',
      },
    ],
  },
  {
    slug: 'use-case-find-diamonds',
    title: 'איך למצוא יהלומים ב-Survival בלי לבזבז זמן',
    metaDescription:
      'איפה לחפור ליהלומים ב-1.21, באיזה Y, איך לכרות נכון, ומה לעשות אחרי שמצאתם — מדריך Use Case מעשי בעברית.',
    keywords: [
      'יהלומים מיינקראפט',
      'כריית diamonds',
      'Y level יהלומים',
      'survival כרייה',
      'Diamond Pickaxe',
    ],
    category: 'הישרדות',
    topic: 'כרייה',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'יהלומים הם השלב שמשנה את המשחק — אבל כרייה אקראית מבזבזת שעות. הנה איפה לחפור, באיזה עומק, ובאיזה סדר.',
    featured: true,
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה שלכם כבר יש להם Iron Pickaxe, בית, ואוכל — ועכשיו הם רוצים Diamonds. הם חופרים למטה בכל מקום, מוצאים Lava, מתים, ומתוסכלים. זה קורה כמעט בכל שיעור שני.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'למצוא Diamonds ביעילות — branch mining ב-Y=-59 (1.21), עם Iron Pickaxe לפחות, Torch מספיק, ותוכנית ברורה. המטרה: 3+ Diamonds ל-Diamond Pickaxe, ואז להמשיך ל-Armor ו-Enchanting Table.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Iron Pickaxe (מינימום) — Diamond נכרה רק עם Iron ומעלה',
          'Torch — הרבה. Mobs spawn בחושך',
          'Food — Bread או Steak, לכרייה ארוכה',
          'Bucket עם מים — לכיבוי Lava',
          'Shield (מומלץ) — Creeper במines',
          'Bed ליד נקודת הכרייה — respawn קרוב',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'רדו ל-Y=-59 (F3 ב-Java, או Show Coordinates ב-Bedrock).',
          'חפרו מנהרה ישרה (main tunnel) באורך 50–100 בלוקים.',
          'כל 2 בלוקים — חפרו side tunnel של 20–30 בלוקים לכל צד (branch mining).',
          'כשמוצאים Diamond Ore — חפרו את כל הבלוקים סביב לפני ששוברים (Lava מתחת!).',
          'כרו עם Iron Pickaxe — Diamond Ore נופל כ-Diamond.',
          'חזרו הביתה, בנו Diamond Pickaxe, ואז Diamond Sword + חלק מ-Armor.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Y=-59 ב-1.21 הוא העומק האופטימלי — לא Y=11 הישן.',
          'Fortune III על Diamond Pickaxe מכפיל yield — שווה לחכות ל-Enchanting.',
          'אל תחפשו Diamonds בשטח — branch mining יעיל פי 10.',
          'שמרו Bucket במים תמיד ביד — Lava הורג מהר.',
          '3 Diamonds = Pickaxe. 24 Diamonds = Full Armor. תעדפו Pickaxe קודם.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'כרייה יעילה זה כישור שלמדים עם ניסיון — ובשיעור פרטי אני מלווה את הילד/ה למטה, מראה איפה לחפור, ומונע את הטעויות שגורמות ל-frustration. רוצים שנמצא Diamonds יחד? בואו נדבר.',
      },
    ],
  },
  {
    slug: 'use-case-nether-portal',
    title: 'איך לבנות Nether Portal ולהיכנס לעולם התחתון',
    metaDescription:
      'מדריך לבניית Nether Portal: איך להשיג Obsidian, איפה לבנות, איך להדליק, ומה לקחת ל-Neher — צעד אחר צעד.',
    keywords: [
      'Nether Portal',
      'Obsidian מיינקראפט',
      'עולם תחתון',
      'Flint and Steel',
      'Nether survival',
    ],
    category: 'הישרדות',
    topic: 'Nether',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'ה-Nether הוא השער ל-Blaze Rods, Netherite ו-Netherrack — אבל קודם צריך Portal. הנה איך בונים אותו נכון.',
    featured: true,
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה שמעו על Nether, רוצים Blaze Rods ל-Eyes of Ender, או פשוט לחקור — אבל לא יודעים מאיפה מגיע Obsidian ואיך בונים Portal. לפעמים הם בונים Portal קטן מדי, או מדליקים אותו בלי להכין ציוד.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות Nether Portal תקין (4×5 מסגרת, 10 Obsidian מינימום), להדליק אותו, ולהיכנס ל-Nether עם ציוד בסיסי — Armor, Food, Sword, Pickaxe, ו-Bed ליד הפורטל ב-Overworld.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          '10 Obsidian — מ-Lava + מים (Diamond Pickaxe לכרייה)',
          '14 בלוקים נוספים (Cobblestone/Stone) — למסגרת אם חוסכים Obsidian',
          'Flint and Steel — להדלקת הפורטל',
          'Diamond Pickaxe — לכריית Obsidian',
          'Iron Armor + Sword + Food',
          'Bed ליד הפורטל ב-Overworld — respawn point',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'מצאו Lava pool (Y=10 ומטה) — שפכו מים מ-Bucket על Lava → Obsidian.',
          'כרו 10 Obsidian עם Diamond Pickaxe.',
          'בנו מסגרת 4 רוחב × 5 גובה (פינות חייבות Obsidian, שאר המסגרת יכול Stone).',
          'הדליקו עם Flint and Steel על בלוק Obsidian בפנים.',
          'שימו Bed ליד הפורטל ב-Overworld — לפני הכניסה!',
          'היכנסו, סגרו את הדרך מאחור (Cobblestone), וחפשו מקום בטוח לבסיס קטן.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Portal "עני" (economy) — רק 10 Obsidian בפינות, שאר המסגרת Stone.',
          'אל תיכנסו בלי Bed ליד הפורטל — respawn ב-Nether = סיוט.',
          'Gold Armor מפחית נזק מ-Piglin — שווה לקחת לפחות Boots.',
          'Ghast יורים Fireballs — Shield חוסם אותם.',
          'מספר בלוקים ב-Overworld = 8 בלוקים ב-Nether — שימושי לניווט.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'ה-Nether מרגיש מפחיד בהתחלה — וזה בסדר. בשיעורים פרטיים אנחנו בונים Portal יחד, נכנסים בזהירות, ולומדים לנווט בביטחון. רוצים ליווי לעולם התחתון? אני כאן.',
      },
    ],
  },
  {
    slug: 'use-case-food-farm',
    title: 'איך להקים חווה שמספקת אוכל לכל העונה',
    metaDescription:
      'מדריך להקמת חווה ב-Survival: Wheat, גזר, תפוחי עץ, בעלי חיים — אוכל קבוע בלי לצוד כל יום.',
    keywords: [
      'חווה מיינקראפט',
      'Wheat farming',
      'אוכל survival',
      'חקלאות מיינקראפט',
      'Bread',
    ],
    category: 'הישרדות',
    topic: 'חקלאות',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'ציד כל יום מתיש. חווה קטנה ליד הבית נותנת Bread, גזר ו-Baked Potato — בלי לרוץ אחרי חזירים.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה אוכלים Rotten Flesh או Bread מדי פעם, וכל פעם שה-Food bar יורד הם יוצאים לצוד. זה עובד — עד שמתחילים לחקור, לכרות, או לבנות. אז צריך מקור אוכל קבוע.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להקים חווה קטנה ליד הבית: 9×9 Wheat, גזר/תפוחי אדמה, ולכל היותר 6–8 פרות/כבשים ב-Corral — מספיק Bread ו-Baked Potato לכל יום משחק.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Hoe (מעץ/אבן/ברזל) — לעיבוד אדמה',
          'Seeds — משבירת Grass',
          'Carrots או Potatoes — מ-Village או Zombie drop',
          'מים — Bucket או תעלת מים ליד השדה',
          'Fence + Gate — לכלוב בעלי חיים',
          'Wheat Seeds, Bone Meal (אופציונלי) — לגידול מהיר',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'בחרו שטח שטוח 9×9 ליד הבית — קרוב = נוח.',
          'עבדו אדמה עם Hoe, שתלו Seeds, והשקו (מים בתוך 4 בלוקים).',
          'שתלו שורת Carrots ושורת Potatoes — לא צריך Seeds לגזר/תפוח.',
          'בנו Corral עם Fence, הכניסו 2 פרות + 2 כבשים (לא יותר בהתחלה).',
          'קצרו Wheat → Craft Bread (3 Wheat = 1 Bread).',
          'הרגו חלק מהבעלי חיים, שמרו 2 לרבייה — אוכל + Wool + Leather.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Bread הוא האוכל הכי יעיל — 3 Wheat, saturates טוב.',
          'Baked Potato (אחרי Furnace) טוב כמעט כ-Steak.',
          'Bone Meal מזרז גידול — שווה אם יש Skeleton farm.',
          'אל תשכחו להשקות — אדמה יבשה לא גrow.',
          'Composter מ-Wheat Excess → Bone Meal — מעגל סגור.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'חווה טובה היא הבסיס לכל השאר — exploration, mining, building. בשיעורים פרטיים אנחנו מתכננים חווה שמתאימה לסגנון המשחק של הילד/ה. רוצים לבנות אחת יחד? בואו נתחיל.',
      },
    ],
  },
  {
    slug: 'use-case-village-start',
    title: 'איך להתיישב ליד כפר ולהפיק ממנו ערך',
    metaDescription:
      'איך למצוא Village, להתיישב לידו, לגנן על Villagers, ולהפיק ממנו סחר, אוכל ו-Iron — מדריך Use Case.',
    keywords: [
      'Village מיינקראפט',
      'Villagers',
      'כפר survival',
      'Iron Golem',
      'Emerald',
    ],
    category: 'הישרדות',
    topic: 'Villagers',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Village קרוב = אוכל, סחר, Iron ו-Bed מוכן. הנה איך למצוא כפר, להתיישב נכון, ולהגן עליו.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה מצאו Village במקרה, רצו Bed ו-Crops — ואז Zombies הרגו Villagers, או שהם שברו את Iron Golem בטעות. Village הוא משאב זהב, אבל צריך לדעת איך לנהל אותו.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להתיישב ליד Village, להגן עליו (Walls + Torches + Bed), ולהפיק ממנו: Food, Trading, Iron מ-Golem, ו-Librarian ל-Enchanted Books.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Torch — הרבה, סביב הכפר',
          'Blocks לחומה (Cobblestone/Fence)',
          'Bed — respawn point בכפר',
          'Food לרבייה של Villagers (אם צריך)',
          'Iron Armor + Sword — הגנה מ-Zombie siege',
          'Composter, Lectern — ליצירת Professions',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'מצאו Village (Plains, Desert, Taiga) — Explore או /locate village.',
          'הדליקו Torch בכל בית ובסביבה — מונע Mob spawn.',
          'בנו חומה נמוכה סביב הכפר (או לפחות סביב Beds).',
          'קחו Bed, שתלו Crops מהכפר, ושמרו 2 Villagers מכל Profession חשוב.',
          'בנו Iron Farm קטן (אופציונלי) — 3 Villagers + Zombie + Water.',
          'פתחו Trading: Librarian (Lectern), Farmer (Composter), Armorer (Blast Furnace).',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'אל תשברו Workstations — Villagers צריכים אותם.',
          'Zombie Villager + Golden Apple + Weakness = Villager חדש — שווה!',
          'Librarian עם Paper → Enchanted Books — הכי שימושי.',
          'Iron Golem מגן — אל תתקיפו אותו.',
          'Bell במרכז הכפר — Villagers נמלטים לשם ב-Zombie attack.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Village הוא hub מושלם ל-Survival — אבל ניהול נכון דורש הבנה. בשיעורים פרטיים אני מלמד איך להגן, לסחור, ולבנות Iron Farm פשוט. רוצים Village שעובד? בואו נבנה.',
      },
    ],
  },
  {
    slug: 'use-case-enchanting-table',
    title: 'איך להקים Enchanting Table ולשדרג כלים',
    metaDescription:
      'מדריך ל-Enchanting Table: חומרים, Bookshelves, Lapis Lazuli, ואיך לקבל Fortune, Efficiency ו-Unbreaking.',
    keywords: [
      'Enchanting Table',
      'כישוף מיינקראפט',
      'Bookshelves',
      'Lapis Lazuli',
      'Fortune',
    ],
    category: 'הישרדות',
    topic: 'כישורים',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Diamond Pickaxe בלי Enchantment זה כמו רכב בלי מנוע. הנה איך מקימים Enchanting Table ומשדרגים כלים נכון.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: יש Diamond Pickaxe, אבל כרייה איטית, כלים נשברים מהר, ו-3 Diamonds לכל כלי. הילד/ה שמעו על Enchantments אבל לא יודעים מאיפה Book, Lapis, ו-Bookshelves.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להקים Enchanting Table עם 15 Bookshelves (Level 30), לאסוף Lapis Lazuli, ולשדרג Diamond Pickaxe ל-Efficiency + Fortune/Unbreaking.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          '2 Diamonds + 4 Obsidian + 1 Book → Enchanting Table',
          '15 Bookshelves — 45 Wood + 45 Leather + 135 Paper',
          'Lapis Lazuli — כרייה ב-Y=-64 עד 64',
          'Diamond Pickaxe/Sword/Armor לשדרוג',
          'XP — מ-Killing Mobs, Smelting, Mining',
          'Grindstone (אופציונלי) — להסרת Enchantments גרועים',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'כרו Lapis Lazuli (כחול) — Y=0 עד -64.',
          'Farm Cows → Leather. Sugarcane → Paper → Books → Bookshelves.',
          'הניחו Enchanting Table, 15 Bookshelves ב-1 בלוק מרחק (סביב, לא על).',
          'צברו 30+ XP levels — Mob farm, mining, smelting.',
          'שימו Diamond Pickaxe + Lapis → בחרו Enchantment (Level 30 = 3 options).',
          'אם יצא Enchantment גרוע — Grindstone ונסו שוב.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Fortune III על Pickaxe = יותר Diamonds — שווה לחכות.',
          'Efficiency V = כרייה מהירה — חוסך זמן.',
          'Unbreaking III = כלי לא נשבר — חובה על כל כלי.',
          'Librarian Villager → Enchanted Books ספציפיים — יותר מדויק.',
          'Bookshelves חייבים Air בינם ל-Table — אחרת Level נמוך.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Enchanting נראה מסובך — אבל אחרי פעם אחת עם ליווי, הילד/ה מבינים את המערכת. בשיעורים פרטיים אנחנו בונים Setup מלא ומשדרגים את הכלים החשובים. רוצים Pickaxe עם Fortune? בואו נעשה.',
      },
    ],
  },
  {
    slug: 'use-case-stronghold-end',
    title: 'איך למצוא Stronghold ולהגיע ל-End Portal',
    metaDescription:
      'מדריך למציאת Stronghold עם Eyes of Ender, ניווט במבוכים, והפעלת End Portal — צעד אחר צעד.',
    keywords: [
      'Stronghold',
      'End Portal',
      'Eyes of Ender',
      'מיינקראפט End',
      'Blaze Rod',
    ],
    category: 'Nether ו-End',
    topic: 'End',
    readTime: '8 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'הדרך ל-Ender Dragon עוברת דרך Stronghold. הנה איך מוצאים אותו, מנווטים, ומפעילים את הפורטל.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה מוכנים ל-End — יש Diamond Armor, Sword, Bow — אבל לא יודעים איפה Stronghold, כמה Eyes of Ender צריך, או מה עושים כשה-Eye נשבר באוויר.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'למצוא Stronghold עם Eyes of Ender, לנווט למרכז, להשלים את End Portal Frame עם 12 Eyes of Ender, ולהיכנס ל-End מוכנים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          '12 Eyes of Ender — Ender Pearl + Blaze Powder',
          'Ender Pearls — מ-Endermen',
          'Blaze Rods — מ-Blaze ב-Nether Fortress',
          'Diamond Armor + Sword + Bow + Arrows',
          'Food, Blocks (Cobblestone), Torch',
          'Bed ליד Stronghold entrance — respawn',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'Nether → Blaze Fortress → Blaze Rods → Blaze Powder.',
          'Overworld → הרגו Endermen → Ender Pearls.',
          'Craft Eyes of Ender (Pearl + Powder) — 12+.',
          'זרקו Eye of Ender — הוא летит לכיוון Stronghold. לכו בכיוון, זרקו שוב.',
          'כשה-Eye יורד למטה — חפרו. Stronghold מתחת.',
          'מצאו End Portal Room, השלימו Frames ריקים עם Eyes, קפצו לפורטל.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'שמרו 2–3 Eyes spare — לפעמים Frame כבר מלא.',
          'Silverfish — הרגו מהר, אל תיתקעו במסדרון.',
          'סמנו את הדרך עם Torch — Stronghold = מבוך.',
          'Bed ליד entrance — respawn קרוב אם מתים.',
          'אל תקפצו לפורטל לפני שכל 12 Eyes במקום.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'המסע ל-Stronghold הוא adventure אמיתי — ולפעמים מתסכל. בשיעורים פרטיים אנחנו מתכוננים יחד: Nether, Ender Pearls, וניווט. רוצים להגיע ל-End בביטחון? אני מלווה.',
      },
    ],
  },
  {
    slug: 'use-case-defeat-ender-dragon',
    title: 'איך להתכונן ולנצח את ה-Ender Dragon',
    metaDescription:
      'הכנה לקרב Ender Dragon: ציוד, Bed strategy, השמדת End Crystals, וטיפים לניצחון — מדריך Use Case.',
    keywords: [
      'Ender Dragon',
      'קרב End',
      'End Crystals',
      'Bed bombing',
      'ניצחון Dragon',
    ],
    category: 'Nether ו-End',
    topic: 'End',
    readTime: '8 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Ender Dragon הוא הבoss הגדול — אבל עם ציוד נכון ואסטרטגיה, גם ילדים מצליחים. הנה איך.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה הגיעו ל-End, Dragon עף מעל, End Crystals מרפאים אותו, והם מתים שוב ושוב. זה Boss Fight אמיתי — צריך תוכנית, לא רק Sword.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להשמיד את כל End Crystals, לפגוע ב-Dragon עם Bow/Sword, ולנצח — עם Full Diamond/Netherite Armor, Food, Beds (Java), ו-Pumpkin ל-Endermen.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Full Diamond Armor (Enchanted: Protection, Unbreaking)',
          'Diamond Sword (Sharpness) + Bow (Power) + 64+ Arrows',
          '64+ Food — Golden Apples אם יש',
          '5+ Beds (Java) — Bed bombing על Dragon',
          'Blocks (Cobblestone) — לעלייה ל-Crystals',
          'Pumpkin על Head — Endermen לא תוקפים',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'היכנסו ל-End, שימו Pumpkin, סמנו את Spawn.',
          'השמידו End Crystals על Obsidian pillars — Bow או Blocks + Sword.',
          'כש-Dragon יורד ל-End Portal — תקיפה עם Sword.',
          'Java: Bed bombing — Bed ליד Dragon head, Right-click, retreat.',
          'המשיכו עד Dragon bar ריק — Victory!',
          'קפצו ל-Exit Portal, קחו Dragon Egg (Blocks מתחת).',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Crystals קודם — Dragon לא ירפא בלי them.',
          'Bed bombing (Java) = damage עצום — אבל Bedrock edition שונה.',
          'Slow Falling Potion — נוח לירי מ-Crystals.',
          'Endermen — Pumpkin או לא להסתכל.',
          'אל תקפצו ל-Void — Game Over.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Dragon Fight הוא רגע שיא — וגם מלחיץ. בשיעורים פרטיים אנחנו מתרגלים ציוד, Bed strategy, ו-Crystal order. רוצים לנצח יחד? בואו נתכונן.',
      },
    ],
  },
  {
    slug: 'use-case-redstone-elevator',
    title: 'איך לבנות מעלית Redstone פשוטה',
    metaDescription:
      'מדריך לבניית מעלית Redstone: Soul Sand, Bubble Columns, וגרסה פשוטה עם Pistons — ללא מודים.',
    keywords: [
      'מעלית Redstone',
      'Bubble Column',
      'Soul Sand',
      'Redstone מיינקראפט',
      'אוטומציה',
    ],
    category: 'Redstone',
    topic: 'אוטומציה',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'מדרגות לוקחות זמן. מעלית Bubble Column מעלה ומורידה בשניות — וזה פרויקט Redstone מושלם לילדים.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הבסיס של הילד/ה עמוק במines, או בניין גבוה — וכל פעם עולים ויורדים במדרגות. הם רוצים "מעלית" כמו ב-YouTube, אבל Redstone נראה מסובך.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות מעלית Bubble Column: Soul Sand למעלה, Magma Block למטה — מים + Signs/Kelp ליצירת column. פשוט, מהיר, בלי Pistons מורכבים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Soul Sand — למעלית עולה',
          'Magma Block — למעלית יורדת',
          'Water Bucket — למלא shaft',
          'Signs או Kelp — ליצירת Bubble Column',
          'Blocks לבניית shaft (Glass/Cobblestone)',
          'Door או Trapdoor — לכניסה/יציאה',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'חפרו shaft 1×1 (או 2×2) מהבסיס לפסגה.',
          'בתחתית: Soul Sand. בראש: Magma Block (או להפך — Soul למעלה = up).',
          'מלאו מים מלמעלה — Bubble Column נוצר.',
          'אם לא עובד — שימו Kelp בכל shaft, שברו — Water source blocks.',
          'Signs ב-1 block intervals מונעים מים לצאת.',
          'כניסה: Trapdoor + Jump into column — עולים/יורדים אוטומטית.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Soul Sand = bubbles up. Magma = bubbles down.',
          'Kelp trick — שוברים Kelp אחרי מילוי = guaranteed water sources.',
          '2×2 shaft — נוח יותר, פחות drowning.',
          'Door בראש ובתחתית — מונע Mobs.',
          'זה הפרויקט Redstone הראשון שאני נותן — מצליח תמיד.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Redstone מרגיש כמו קסם — עד שמבינים את הלוגיקה. בשיעורים פרטיים אנחנו בונים מעלית יחד, ואז ממשיכים לדלתות אוטומטיות ו-farms. רוצים מעלית בבסיס? בואו נבנה.',
      },
    ],
  },
  {
    slug: 'use-case-auto-wheat-farm',
    title: 'איך לבנות חווה אוטומטית לחיטה',
    metaDescription:
      'מדריך לחווה אוטומטית ל-Wheat: Water, Pistons, Hopper — Bread בלי לקצור ידנית.',
    keywords: [
      'חווה אוטומטית',
      'Wheat farm',
      'Redstone farm',
      'Hopper',
      'Bread',
    ],
    category: 'Redstone',
    topic: 'אוטומציה',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'חווה שמקצרת, אוספת ושולחת Wheat ל-Chest — Bread תמיד מוכן. פרויקט Redstone קלאסי.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: יש חווה ידנית, אבל הילד/ה שוכחים לקצור, Wheat נופל, או שפשוט מתעייפים. Farm אוטומטי = Bread ב-Chest בלי מאמץ.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות Wheat farm אוטומטי: Water release → Pistons שוברים → Items נופלים ל-Hopper → Chest. גרסה פשוטה 9×9 עם Observer או Button.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Dirt/Grass, Hoe, Wheat Seeds',
          'Water Bucket, Dispenser (אופציונלי)',
          'Pistons (Sticky) — לשבירת crops',
          'Observers — לזיהוי גידול מלא',
          'Hopper + Chest — איסוף',
          'Redstone, Repeater — חיבור',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'בנו שדה 9×9, עבדו אדמה, שתלו Wheat.',
          'מעל כל שורה — Observer facing crop (מזהה גידול מלא).',
          'Observer → Redstone → Sticky Piston עם Block — דוחף crop.',
          'Water stream (או Hopper minecart) — Items ל-Chest.',
          'אופציה פשוטה: Button → Dispenser עם Water → Floods field → Items drop.',
          'Chest בתחתית — Wheat + Seeds נאספים.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Water farm (Dispenser) — הכי פשוט, Button every few minutes.',
          'Observer farm — אוטומטי לגמרי, קצת יותר Redstone.',
          'Composter ל-Seeds excess → Bone Meal.',
          'Villager Farmer — אופציה בלי Redstone (1.14+).',
          'Torch ליד farm — Mobs לא spawn על crops.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Farm אוטומטי הוא "Aha moment" — הילד/ה רואים Redstone עובד. בשיעורים פרטיים אנחנו בונים גרסה שמתאימה לרמה, ומחברים ל-Chest במטבח. רוצים Bread אוטומטי? בואו.',
      },
    ],
  },
  {
    slug: 'use-case-villager-trading',
    title: 'איך לסחור עם Villagers ולקבל Emeralds',
    metaDescription:
      'מדריך סחר Villagers: Professions, discount, Iron Farm, Librarian — Emeralds ו-Enchanted Books.',
    keywords: [
      'Villager trading',
      'Emeralds',
      'Librarian',
      'סחר מיינקראפט',
      'Zombie cure',
    ],
    category: 'הישרדות',
    topic: 'Villagers',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Emeralds מ-Villagers = Enchanted Books, Gear, ו-Food. הנה איך סוחרים נכון ומקבלים discount.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה רוצים Enchanted Books או Emerald Blocks — אבל לא יודעים איזה Villager נותן מה, איך מורידים מחירים, או למה Librarian לא מופיע.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להבין Professions, לבנות Trading Hall, לקבל discount (Zombie cure + Hero of Village), ולסחור Paper→Emeralds, Iron→Emeralds, Emeralds→Enchanted Books.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Villagers + Workstations (Lectern, Composter, etc.)',
          'Paper (Sugarcane), Iron Ingots',
          'Emeralds — מ-trades ראשונים',
          'Zombie + Golden Apple + Potion of Weakness — discount',
          'Bed, Walls — Trading Hall',
          'Name Tag (אופציונלי) — לסימון Villagers',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'בנו Trading Hall — cells עם Bed + Workstation לכל Villager.',
          'Librarian (Lectern): Paper → Emerald, Emerald → Enchanted Book.',
          'Farmer (Composter): Carrots/Potatoes → Emerald.',
          'Armorer (Blast Furnace): Iron → Emerald, Emerald → Armor.',
          'Zombie תוקף Villager → Golden Apple + Weakness → cured = discount.',
          'Lock trades: trade once, Villager locked — reroll Librarian until good book.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Librarian — הכי שימושי. Mending, Fortune, Efficiency.',
          'Break Lectern, replace — reroll trades (before first trade).',
          'Iron Farm + Trading = Emeralds אינסופיים.',
          'Hero of Village — discount אחרי raid victory.',
          'אל תשברו Workstation — Villager מאבד profession.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Trading הוא economy של Minecraft — וילדים אוהבים את זה. בשיעורים פרטיים אנחנו בונים Trading Hall ומביאים Librarian עם Mending. רוצים Emerald flow? בואו נסחור.',
      },
    ],
  },
  {
    slug: 'use-case-underground-base',
    title: 'איך לבנות בסיס תת-קרקעי בטוח ונוח',
    metaDescription:
      'מדריך לבסיס תת-קרקעי: מיקום, תכנון חדרים, תאורה, ventilation — בטוח מ-Mobs, נוח לחיים.',
    keywords: [
      'בסיס תת קרקעי',
      'Underground base',
      'מחסה מיינקראפט',
      'בנייה survival',
      'Base design',
    ],
    category: 'בנייה',
    topic: 'בסיס',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'בסיס מעל הקרקע מושך Mobs. תת-קרקע = בטוח, מסודר, ומרגיש כמו bunker מגניב.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה רוצים בסיס "סודי" או פשוט בטוח יותר — אבל חופרים בלי תוכנית, Getting lost, או Water/Lava surprises.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות בסיס תת-קרקעי מסודר: entrance מוסתר, חדרים (Storage, Farm, Bedroom, Crafting), Torch בכל מקום, ו-Water/Lava safety.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Pickaxe, Shovel — חפירה',
          'Torch — הרבה',
          'Blocks — Cobblestone/Stone לקירות',
          'Door, Trapdoor — entrance',
          'Ladder/Water elevator — גישה',
          'Bed, Crafting Table, Furnace, Chests',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'בחרו מיקום — ליד spawn, לא מתחת Ocean.',
          'חפרו staircase יורד — 3×3 עם Torch כל 5 blocks.',
          'חדר מרכזי (Hub) — 7×7, Crafting, Furnace, Chests.',
          'חדרים צדדיים: Bedroom (Bed), Farm (underground crops + Glowstone), Storage.',
          'Entrance: Trapdoor + Ladder — מוסתר בקרקע.',
          'Water elevator או Staircase — חזרה למעלה.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Torch every 7 blocks — no Mob spawn.',
          'Glowstone/Lantern — Farm underground needs light.',
          'Map או Torches בצבע — לא ללכת לאיבוד.',
          'Bucket מים — Lava encounter.',
          '2 exits — אם אחד נחסם.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'בסיס תת-קרקעי הוא פרויקט בנייה + survival — מושלם לשיעורים. בשיעורים פרטיים אנחנו מתכננים layout יחד, לפי מה שהילד/ה צריכים. רוצים bunker מותאם? בואו נחפור.',
      },
    ],
  },
  {
    slug: 'use-case-trial-chambers-loot',
    title: 'איך לנצח Trial Chambers ולקחת loot',
    metaDescription:
      'מדריך ל-Trial Chambers ב-1.21: Trial Spawner, Ominous Trial, Vault — ציוד, אסטרטגיה ו-loot.',
    keywords: [
      'Trial Chambers',
      'מיינקראפט 1.21',
      'Trial Spawner',
      'Vault',
      'Ominous Trial',
    ],
    category: 'חקירה',
    topic: '1.21',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Trial Chambers ב-1.21 = loot חדש, אתגרים, ו-Vaults. הנה איך נכנסים, נלחמים, ויוצאים עם שלל.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה ב-1.21, שמעו על Trial Chambers, מצאו structure — אבל Trial Spawner מציף Mobs, Ominous Trial מפחיד, ו-Vault לא נפתח.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לנווט Trial Chambers, להשלים Trials (רגיל + Ominous), לפתוח Vaults עם Trial Keys, ולקחת loot: Armor trims, Emeralds, Weapons.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Iron/Diamond Armor + Sword + Bow',
          'Food, Shield',
          'Trial Keys — מ-Trial Spawners',
          'Ominous Trial Key — מ-Ominous Spawner (Bad Omen)',
          'Blocks — cover, bridging',
          'Potion of Night Vision (אופציונלי)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'מצאו Trial Chambers — Explore או /locate structure trial_chambers.',
          'Trial Spawner: שלב waves של Mobs — הישארו ב-range, הרגו הכל.',
          'קבלו Trial Key — פותח Vault רגיל.',
          'Ominous: שתו Ominous Bottle (Bad Omen) → Ominous Spawner → Ominous Key.',
          'Vault — Right-click עם Key, קחו loot.',
          'Copper Bulbs, Tuff, Decorated Pots — bonus loot.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Cover — Blocks מגנים מ-Archers.',
          'Shield — Breeze wind attacks.',
          'Ominous = harder — תכוננו לפני.',
          'Vault loot — Armor trims, Emeralds, Breeze Rods.',
          'Breeze — jump attacks, Shield block.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Trial Chambers הוא content חדש מexciting — וגם מאתגר. בשיעורים פרטיים אנחנו נכנסים יחד, מתרגלים waves, ופותחים Vaults. רוצים loot מ-1.21? בואו ננסה.',
      },
    ],
  },
  {
    slug: 'use-case-ancient-city',
    title: 'איך לחקור Ancient City בלי Warden',
    metaDescription:
      'מדריך ל-Ancient City: Deep Dark, Sculk, Warden avoidance, loot — Wool, Silence, Sneak.',
    keywords: [
      'Ancient City',
      'Warden',
      'Deep Dark',
      'Sculk',
      'Silence',
    ],
    category: 'חקירה',
    topic: 'Deep Dark',
    readTime: '8 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Ancient City = loot מדהים — אבל Warden שומע הכל. הנה איך לחקור בשקט ולצאת בחיים.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה רוצים Echo Shards, Disc 5, Enchanted Golden Apples — אבל Warden spawn, רודף, ו-one-shot. הרבה מתים לפני loot.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לחקור Ancient City בלי להעיר Warden: Wool על Sculk, Sneak, no breaking blocks, loot Chests — ולצאת בשקט.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Wool — הרבה (carpet paths)',
          'Night Vision Potion',
          'Feather Falling Boots',
          'Snowballs/Eggs — distract (optional)',
          'No loud tools — avoid mining Sculk',
          'Full Health, Food',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'רדו ל-Y=-51 (Deep Dark) — זהירות Sculk Sensor.',
          'Wool carpet — walk on Wool, no vibration.',
          'Sneak (Shift) — always. No sprint, no jump on Sculk.',
          'אל תשברו blocks — vibration = Warden.',
          'Loot Chests — Echo Shards, Disc, Enchanted Golden Apple.',
          'אם Warden spawn — run silent, hide, wait 60 sec (despawn).',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Wool path — #1 rule. Every step on Wool.',
          'Sculk Shrieker — 4 activations = Warden. Avoid.',
          'Snowball — throw to distract (advanced).',
          'Swift Sneak — Enchantment from City, helps escape.',
          'Boat trick (Java) — Warden can\'t hit in boat (check version).',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Ancient City הוא stealth mission — מלמד סבלנות ותכנון. בשיעורים פרטיים אנחנו נכנסים יחד, Wool paths, ו-loot בביטחון. רוצים לחקור Deep Dark? אני מלווה.',
      },
    ],
  },
  {
    slug: 'use-case-nether-highway',
    title: 'איך לבנות Nether Highway לנסיעה מהירה',
    metaDescription:
      'מדריך ל-Nether Highway: 1:8 ratio, Ice + Boat, tunnel building — נסיעה מהירה ב-Overworld.',
    keywords: [
      'Nether Highway',
      'Blue Ice',
      'Boat travel',
      'Nether tunnel',
      'נסיעה מהירה',
    ],
    category: 'Nether ו-End',
    topic: 'Nether',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'ב-Nether, 1 בלוק = 8 ב-Overworld. Highway עם Ice + Boat = נסיעה מהירה לבases רחוקים.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: יש Base, Village, ו-Stronghold — אבל הליכה לוקחת שעות. Nether Highway מקצרת מרחקים פי 8, ו-Boat on Ice = מהירות מטורפת.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות Nether tunnel מ-Portal ל-Portal, עם Blue Ice + Boat, ו-Overworld portals מסונכרנים — travel מהיר בין נקודות.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Nether Portal (2+) — Overworld + Nether linked',
          'Pickaxe (Diamond) — tunnel through Netherrack',
          'Blue Ice (או Packed Ice) — ל-Boat speed',
          'Boat',
          'Blocks — Cobblestone/Glass לקירות tunnel',
          'Fire Resistance Potion — Ghast safety',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'ב-Overworld: Portal A (Base), Portal B (Destination).',
          'ב-Nether: חברו Portals — 1 Overworld block = 8 Nether blocks.',
          'חפרו tunnel 3×3 — floor = Blue Ice, walls = Glass/Cobble.',
          'שימו Boat, ride — max speed on Blue Ice.',
          'Mark portals — signs, colors.',
          'Overworld: build portal at calculated coords — instant travel.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Blue Ice > Packed Ice > Ice — speed difference.',
          'Ghast — Glass walls, Fire Resistance.',
          'Portal linking — F3 coords, divide Overworld by 8.',
          'Roof — prevent Ghast spawns in tunnel.',
          'פרויקט קבוצתי — מושלם ל-Multiplayer.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Nether Highway הוא פרויקט "גדול" שילדים אוהבים — ויש תוצאה מיידית. בשיעורים פרטיים אנחנו מתכננים route ומחברים bases. רוצים highway? בואו נחפור.',
      },
    ],
  },
  {
    slug: 'use-case-tame-wolf-cat',
    title: 'איך לאלף Wolf ו-Cat ולהפיק מהם תועלת',
    metaDescription:
      'מדריך לאילוף Wolf ו-Cat: Bones, Fish, combat help, Creeper protection — חיות שימושיות ב-Survival.',
    keywords: [
      'אילוף Wolf',
      'Cat מיינקראפט',
      'Bones',
      'Creeper',
      'חיות מחמד',
    ],
    category: 'הישרדות',
    topic: 'חיות',
    readTime: '5 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Wolf = combat partner. Cat = Creeper repellent. שניהם קלים לאילוף — וילדים אוהבים.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה רוצים "חבר" במשחק — Wolf או Cat. הם מנסים להאכיל, לא עובד, או Wolf מת בקרב.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לאלף Wolf (Bones) ו-Cat (Raw Cod/Salmon), להבין איך הם עוזרים — Wolf attack, Cat scare Creepers — ולשמור עליהם בחיים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Bones — מ-Skeletons (Wolf)',
          'Raw Cod/Salmon — fishing (Cat)',
          'Wolf — Forest/Taiga biomes',
          'Cat — Village (Blacksmith chest) או Swamp Hut',
          'Collar (Dye) — optional, לסימון',
          'Food for Wolf — heal after combat',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'Wolf: מצאו Wolf, Right-click Bone — hearts = tamed. Collar appears.',
          'Cat: Village at night — Cat spawns. Sneak, Raw Fish — don\'t scare.',
          'Wolf: Right-click — sit/stand. Attack = Wolf helps.',
          'Cat: follows, sits on Chest (Bedrock/Java differ). Creepers flee from Cat.',
          'Heal Wolf: any meat. Cat: Fish.',
          'Keep safe — Wolf can die, no respawn.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Wolf — 2 hearts per Bone, random. Bring 10+ Bones.',
          'Cat — Creeper phobia = base protection.',
          'Wolf in lava/water — be careful.',
          'Multiple Wolves — wolf army (advanced).',
          'Cat on bed — cute, no gameplay benefit.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'חיות מחמד = emotional connection למשחק — וגם utility. בשיעורים פרטיים אנחנו מוצאים Wolf/Cat, מאלפים, ומלמדים לשמור. רוצים partner? בואו.',
      },
    ],
  },
  {
    slug: 'use-case-death-items',
    title: 'איך לא לאבד פריטים אחרי מוות',
    metaDescription:
      'מדריך למניעת אובדן פריטים: Bed, KeepInventory, death coords, Storage — Survival בלי frustration.',
    keywords: [
      'מוות מיינקראפט',
      'KeepInventory',
      'Bed respawn',
      'אובדן פריטים',
      'death recovery',
    ],
    category: 'הישרדות',
    topic: 'התחלה',
    readTime: '5 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'מתים עם Diamond Armor ו-20 levels — וfrustration. הנה איך למזער נזק ולהחזיר items.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה מתו ב-Lava, ב-Creeper, או ב-Void — וכל ה-Diamonds, XP, ו-items נעלמו. בכי, כעס, ולפעמים "לא רוצים לשחק יותר".',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'להקטין damage ממוות: Bed respawn, שמירת coords, Storage backup, ו-(אופציונלי) KeepInventory — כדי שמוות = למידה, לא catastrophe.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Bed — respawn point ליד base/mines',
          'F3 coords (Java) / Show Coordinates (Bedrock)',
          'Chest backup — spare Armor, Tools',
          'Map או Book — record important locations',
          'Ender Chest (advanced) — personal storage',
          'KeepInventory gamerule (אופציונלי, Singleplayer)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'Bed ליד כל activity: base, mines, Nether portal.',
          'לפני exploration: write coords (F3).',
          'Death screen — coords shown. Run back within 5 min (despawn).',
          'Chest "backup" — spare Iron/Diamond set at base.',
          'Ender Chest — put valuables before risky trips.',
          'Singleplayer: /gamerule keepInventory true — if too frustrating.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Items despawn 5 min — hurry!',
          'Lava destroys items — often unrecoverable.',
          'Bed = #1 priority after first night.',
          'KeepInventory — OK for young kids, learning phase.',
          'Death = lesson — "what went wrong?" not punishment.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'מוות מלמד — אבל לא צריך לשבור את החוויה. בשיעורים פרטיים אני מלמד systems: Bed, backup, coords. רוצים Survival בלי tears? בואו נדבר.',
      },
    ],
  },
  {
    slug: 'use-case-item-sorter',
    title: 'איך לבנות מערכת מיון פריטים בסיסית',
    metaDescription:
      'מדריך ל-Item Sorter: Hopper, Redstone, Filter items — Chests מסודרים אוטומטית.',
    keywords: [
      'Item Sorter',
      'Hopper filter',
      'Redstone storage',
      'מיון פריטים',
      'Chest system',
    ],
    category: 'Redstone',
    topic: 'אוטומציה',
    readTime: '7 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Chest אחד מלא בזבל. Item Sorter ממיין Diamond, Iron, Food — אוטומטית. Redstone שימושי.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: אחרי mining session — Chest אחד עם 50 item types. הילד/ה מחפשים Diamond 5 דקות. Sorter = כל item ב-Chest שלו.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות Item Sorter בסיסי: Hopper filter (41 item trick), Redstone comparator — items ל-Chests הנכונים.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Hoppers — הרבה',
          'Chests — אחד per item type',
          'Redstone, Comparators, Repeaters',
          'Building blocks',
          'Filter items — 1 per type (e.g. 1 Diamond in filter)',
          'Items to sort — Cobble, Iron, Gold, Diamond, etc.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'Input Chest — items נכנסים.',
          'Hopper chain — items flow down.',
          'Filter module: Hopper + 41 filter item (e.g. 41 Cobble) + 1 slot empty for target.',
          'Comparator reads Hopper fullness — if match, unlock Hopper below to Chest.',
          'Repeat per item type — Diamond filter, Iron filter, etc.',
          'Overflow Chest — items without filter.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          '41 + 1 trick — filter holds 41, 1 slot for item to pass.',
          'Start with 3–4 types — Cobble, Iron, Gold, Diamond.',
          'Water stream input — items flow to sorter.',
          'Tileable design — add modules later.',
          'פרויקט "גדול" — עושים בשלבים.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Item Sorter = organization + Redstone logic — מושלם לילדים שאוהבים order. בשיעורים פרטיים אנחנו בונים 4-type sorter, ואז expand. רוצים storage מסודר? בואו.',
      },
    ],
  },
  {
    slug: 'use-case-safe-multiplayer',
    title: 'איך לשחק Multiplayer בצורה בטוחה',
    metaDescription:
      'מדריך בטיחות Multiplayer: Realms, servers, privacy, griefing, chat — להורים וילדים.',
    keywords: [
      'Multiplayer בטוח',
      'Realms',
      'מיינקראפט ילדים',
      'גriefing',
      'פרטיות',
    ],
    category: 'Multiplayer',
    topic: 'בטיחות',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'Multiplayer = fun עם חברים — אבל גם strangers, chat, ו-griefing. הנה איך לשחק בטוח.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה רוצים לשחק עם חברים — Realms, server, או "מישהו מהאינטרנט". הורים חוששים: מי שם? מה ב-chat? מישהו יהרוס את הבית?',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'Multiplayer בטוח: Realms/private server עם whitelist, chat rules, backup, ו-הורים שמבינים את האפשרויות.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Realms (paid) — private, invite only',
          'Private server — whitelist, known players',
          'Parent account — control purchases, friends',
          'Backup — world download (Realms)',
          'Chat rules — no personal info',
          'Report/block — know how to use',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'Realms: parent creates, invites friends only — no public.',
          'Public servers: avoid for young kids — strangers, chat.',
          'Whitelist: only approved names join.',
          'Backup world weekly — griefing recovery.',
          'Chat: no name, age, location. Report bad behavior.',
          'Play together first — parent joins, sees environment.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Realms = safest — you control who joins.',
          'Griefing — backup = undo. Teach "trust who you invite".',
          'Discord voice — separate from game, parent aware.',
          'Java vs Bedrock — different server types.',
          'Stinger lessons — private, safe, supervised.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'Multiplayer בטוח = הגדרות נכונות + שיחה. בשיעורים פרטיים (Online) — environment controlled, no strangers. רוצים שהילד/ה ישחקו בביטחון? אשמח לייעץ.',
      },
    ],
  },
  {
    slug: 'use-case-aesthetic-house',
    title: 'איך לבנות בית aesthetic שגם נראה טוב',
    metaDescription:
      'מדריך לבית aesthetic: blocks, palette, depth, roof — נראה טוב וגם functional.',
    keywords: [
      'בית aesthetic',
      'בנייה מיינקראפט',
      'עיצוב בית',
      'Block palette',
      'Build tips',
    ],
    category: 'בנייה',
    topic: 'עיצוב',
    readTime: '6 דקות',
    publishedAt: '2026-06-27',
    updatedAt: '2026-06-27',
    excerpt:
      'בית "קופסה" עובד — אבל aesthetic house = גאווה, creativity, ו-skills. הנה איך.',
    author: 'סטינגר ישראל',
    kind: 'use-case',
    sections: [
      {
        type: 'paragraph',
        content:
          'המצב: הילד/ה בנו בית 5×5, יש Bed ו-Chest — אבל "זה מכוער". רוצים Pinterest/YouTube house, לא יודעים מאיפה להתחיל.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'המטרה',
      },
      {
        type: 'paragraph',
        content:
          'לבנות בית aesthetic: palette (3–4 blocks), depth (לא flat), roof, windows, interior — functional + pretty.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'מה צריך מראש',
      },
      {
        type: 'list',
        items: [
          'Block palette — e.g. Oak + Stripped Oak + Cobble + Glass',
          'Stairs, Slabs, Trapdoors — depth',
          'Glass Panes, Doors',
          'Lanterns, Flowers — decoration',
          'Reference — screenshot, video (copy structure, not exact)',
          'Functional: Bed, Chest, Crafting, Furnace inside',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'צעד אחר צעד',
      },
      {
        type: 'list',
        items: [
          'בחרו palette — 3 blocks max + Glass. Consistency = aesthetic.',
          'Outline — לא box. Protrude walls, indent entrance.',
          'Roof — Stairs/Slabs, overhang. Not flat.',
          'Windows — Glass Panes, different sizes. Depth with Trapdoors.',
          'Interior — לא hollow. Rooms, furniture (Stairs = chairs).',
          'Exterior — path, Lanterns, Flowers, maybe fence.',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'טיפים מהשטח',
      },
      {
        type: 'list',
        items: [
          'Depth — walls 1 block out/in. Instant upgrade.',
          'Palette — Oak + White = clean. Stone + Dark Oak = medieval.',
          'Copy structure, change blocks — learn, don\'t paste.',
          'Start small — cottage before mansion.',
          'Aesthetic + function — Bed inside, Chest hidden.',
        ],
      },
      {
        type: 'paragraph',
        content:
          'בנייה aesthetic = creativity + confidence. בשיעורים פרטיים אנחנו מתכננים בית לפי טעם הילד/ה — cottage, modern, treehouse. רוצים בית שגאים בו? בואו נבנה.',
      },
    ],
  },
];
