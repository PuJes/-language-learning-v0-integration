/**
 * Script to add all converted language objects to enhanced-languages-new.ts
 * This handles the large data addition programmatically
 */

const fs = require('fs');
const path = require('path');

// Define all language data objects that need to be added
// These come from the AI agent conversions

const languagesToAdd = {
  italian: `italian: {
  id: "italian",
  code: "it",
  flag: "🇮🇹",
  name: "Italian",
  nameEn: "Italian",
  nameZh: "意大利语",
  nativeName: "Italiano",
  description: {
    zh: "艺术、美食和设计的语言",
    en: "The language of art, cuisine, and design"
  },
  category: "cultural",
  difficulty: 2,
  speakers: {
    native: 65000000,
    total: 85000000,
    countries: {
      zh: ["意大利", "瑞士", "圣马力诺", "梵蒂冈", "斯洛文尼亚", "克罗地亚"],
      en: ["Italy", "Switzerland", "San Marino", "Vatican City", "Slovenia", "Croatia"]
    }
  },
  regions: {
    zh: ["欧洲"],
    en: ["Europe"]
  },
  family: {
    zh: "印欧语系",
    en: "Indo-European"
  },
  script: {
    zh: "拉丁字母",
    en: "Latin alphabet"
  },
  culturalInfo: {
    history: {
      zh: "意大利语属于印欧语系罗曼语族,直接起源于拉丁语。但丁的《神曲》奠定了现代意大利语的基础。作为文艺复兴的摇篮,意大利语承载了丰富的艺术、建筑、音乐和文学传统。",
      en: "Italian belongs to the Romance branch of the Indo-European language family, directly descending from Latin. Dante's Divine Comedy established the foundation of modern Italian. As the cradle of the Renaissance, Italian carries rich traditions in art, architecture, music, and literature."
    },
    traditions: {
      zh: ["歌剧传统", "文艺复兴", "天主教文化", "家庭观念", "手势语言", "工匠传统"],
      en: ["Opera tradition", "Renaissance", "Catholic culture", "Family values", "Hand gestures", "Artisan craftsmanship"]
    },
    festivals: {
      zh: ["威尼斯嘉年华", "复活节", "圣诞节", "帕利奥赛马节", "柠檬节", "葡萄收获节"],
      en: ["Venice Carnival", "Easter", "Christmas", "Palio di Siena", "Lemon Festival", "Grape Harvest Festival"]
    },
    cuisine: {
      zh: ["意大利面", "披萨", "咖啡文化", "葡萄酒", "奶酪", "冰淇淋"],
      en: ["Pasta", "Pizza", "Coffee culture", "Wine", "Cheese", "Gelato"]
    },
    arts: {
      zh: ["文艺复兴绘画", "雕塑艺术", "建筑设计", "歌剧", "电影", "时装设计"],
      en: ["Renaissance painting", "Sculpture", "Architecture", "Opera", "Cinema", "Fashion design"]
    },
    modernCulture: {
      zh: ["时尚产业", "设计文化", "美食文化", "足球", "汽车工业", "奢侈品牌"],
      en: ["Fashion industry", "Design culture", "Culinary culture", "Football", "Automotive industry", "Luxury brands"]
    }
  },
  metadata: {
    iso639_1: "it",
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    branch: {
      zh: "罗曼语族",
      en: "Romance"
    },
    writingSystem: {
      zh: ["拉丁字母"],
      en: ["Latin alphabet"]
    }
  },
  learningGuide: {
    learningPath: [
      {
        title: {
          zh: "语音入门",
          en: "Pronunciation Basics"
        },
        description: {
          zh: "掌握意大利语发音和语调",
          en: "Master Italian pronunciation and intonation"
        },
        level: {
          zh: "初级",
          en: "Beginner"
        },
        estimatedHours: 20,
        skills: {
          zh: ["字母发音", "语调规律", "重音规则", "语音连读", "音变现象"],
          en: ["Letter pronunciation", "Intonation patterns", "Stress rules", "Liaison", "Sound changes"]
        }
      },
      {
        title: {
          zh: "基础语法",
          en: "Basic Grammar"
        },
        description: {
          zh: "学习动词变位和基本语法",
          en: "Learn verb conjugation and basic grammar"
        },
        level: {
          zh: "初级",
          en: "Beginner"
        },
        estimatedHours: 35,
        skills: {
          zh: ["动词变位", "名词性数", "形容词协调", "基本时态", "疑问否定"],
          en: ["Verb conjugation", "Noun gender/number", "Adjective agreement", "Basic tenses", "Questions and negation"]
        }
      },
      {
        title: {
          zh: "日常词汇",
          en: "Daily Vocabulary"
        },
        description: {
          zh: "掌握生活必需词汇",
          en: "Master essential daily vocabulary"
        },
        level: {
          zh: "初级",
          en: "Beginner"
        },
        estimatedHours: 30,
        skills: {
          zh: ["家庭生活", "饮食文化", "购物旅行", "时间数字", "颜色描述"],
          en: ["Family life", "Food culture", "Shopping and travel", "Time and numbers", "Color descriptions"]
        }
      },
      {
        title: {
          zh: "中级语法",
          en: "Intermediate Grammar"
        },
        description: {
          zh: "深入学习复杂语法结构",
          en: "Study complex grammatical structures"
        },
        level: {
          zh: "中级",
          en: "Intermediate"
        },
        estimatedHours: 50,
        skills: {
          zh: ["复合时态", "虚拟语气", "条件句", "被动语态", "从句结构"],
          en: ["Compound tenses", "Subjunctive mood", "Conditional sentences", "Passive voice", "Subordinate clauses"]
        }
      },
      {
        title: {
          zh: "文化应用",
          en: "Cultural Application"
        },
        description: {
          zh: "艺术、商务和专业意大利语",
          en: "Art, business, and professional Italian"
        },
        level: {
          zh: "高级",
          en: "Advanced"
        },
        estimatedHours: 65,
        skills: {
          zh: ["艺术术语", "商务意语", "文学阅读", "新闻理解", "专业交流"],
          en: ["Art terminology", "Business Italian", "Literary reading", "News comprehension", "Professional communication"]
        }
      }
    ],
    learningMethods: [
      {
        title: {
          zh: "文化浸润",
          en: "Cultural Immersion"
        },
        description: {
          zh: "通过意大利文化学习语言",
          en: "Learn language through Italian culture"
        },
        techniques: {
          zh: ["意大利电影", "歌剧欣赏", "艺术史", "美食节目", "旅游纪录片"],
          en: ["Italian cinema", "Opera appreciation", "Art history", "Cooking shows", "Travel documentaries"]
        }
      },
      {
        title: {
          zh: "实际交流",
          en: "Practical Communication"
        },
        description: {
          zh: "与意大利人直接交流",
          en: "Direct communication with Italian speakers"
        },
        techniques: {
          zh: ["语言交换", "意语角", "文化活动", "旅行体验", "在线聊天"],
          en: ["Language exchange", "Italian corner", "Cultural events", "Travel experience", "Online chat"]
        }
      },
      {
        title: {
          zh: "系统学习",
          en: "Systematic Study"
        },
        description: {
          zh: "通过教材系统掌握",
          en: "Systematic mastery through textbooks"
        },
        techniques: {
          zh: ["语法教材", "练习册", "听力材料", "阅读练习", "写作训练"],
          en: ["Grammar textbooks", "Workbooks", "Listening materials", "Reading practice", "Writing training"]
        }
      }
    ],
    learningTools: [
      {
        category: {
          zh: "学习应用",
          en: "Learning Apps"
        },
        tools: ["Babbel", "Duolingo", "ItalianPod101", "Busuu", "Nemo Italian"]
      },
      {
        category: {
          zh: "词典工具",
          en: "Dictionary Tools"
        },
        tools: ["Garzanti", "Treccani", "WordReference", "Reverso", "Google Translate"]
      },
      {
        category: {
          zh: "媒体资源",
          en: "Media Resources"
        },
        tools: ["RAI Play", "Mediaset", "La Gazzetta", "Corriere", "Il Post"]
      }
    ]
  },
  learningTimeEstimate: {
    beginner: {
      zh: "3-6个月",
      en: "3-6 months"
    },
    intermediate: {
      zh: "1-2年",
      en: "1-2 years"
    },
    advanced: {
      zh: "2-3年",
      en: "2-3 years"
    },
    totalHours: 600
  },
  difficultyAnalysis: {
    grammar: 3,
    pronunciation: 2,
    writing: 2
  },
  learningResources: {
    apps: [
      {
        name: "Babbel",
        description: {
          zh: "专业意大利语课程",
          en: "Professional Italian courses"
        },
        price: {
          zh: "订阅制",
          en: "Subscription"
        }
      },
      {
        name: "ItalianPod101",
        description: {
          zh: "播客式学习",
          en: "Podcast-style learning"
        },
        price: {
          zh: "免费/付费",
          en: "Free/Paid"
        }
      },
      {
        name: "Busuu",
        description: {
          zh: "互动学习平台",
          en: "Interactive learning platform"
        },
        price: {
          zh: "免费/付费",
          en: "Free/Paid"
        }
      }
    ],
    books: [
      {
        title: {
          zh: "新视线意大利语",
          en: "New Italian Perspectives"
        },
        author: {
          zh: "外研社",
          en: "Foreign Language Teaching and Research Press"
        },
        level: {
          zh: "初中级",
          en: "Beginner to Intermediate"
        }
      },
      {
        title: {
          zh: "意大利语语法",
          en: "Italian Grammar"
        },
        author: {
          zh: "上海外语教育出版社",
          en: "Shanghai Foreign Language Education Press"
        },
        level: {
          zh: "中级",
          en: "Intermediate"
        }
      },
      {
        title: {
          zh: "意大利语阅读教程",
          en: "Italian Reading Course"
        },
        author: {
          zh: "北京语言大学出版社",
          en: "Beijing Language and Culture University Press"
        },
        level: {
          zh: "中高级",
          en: "Intermediate to Advanced"
        }
      }
    ],
    websites: [
      {
        name: "ItalianPod101",
        url: "https://italianpod101.com",
        description: {
          zh: "专业意语学习网站",
          en: "Professional Italian learning website"
        }
      },
      {
        name: "Treccani",
        url: "https://treccani.it",
        description: {
          zh: "权威意大利语词典",
          en: "Authoritative Italian dictionary"
        }
      },
      {
        name: "RAI Italiano",
        url: "https://rai.it",
        description: {
          zh: "意大利官方媒体学习资源",
          en: "Italian official media learning resources"
        }
      }
    ]
  },
  careerOpportunities: {
    industries: {
      zh: ["时尚", "设计", "艺术", "旅游", "美食", "奢侈品"],
      en: ["Fashion", "Design", "Art", "Tourism", "Culinary", "Luxury goods"]
    },
    averageSalary: {
      zh: "35,000-65,000美元",
      en: "$35,000-65,000 USD"
    },
    jobGrowth: {
      zh: "增长率10%",
      en: "10% growth rate"
    },
    remoteWork: true
  },
  travelAdvantages: {
    countries: {
      zh: ["意大利", "瑞士", "圣马力诺", "梵蒂冈"],
      en: ["Italy", "Switzerland", "San Marino", "Vatican City"]
    },
    businessHubs: {
      zh: ["罗马", "米兰", "佛罗伦萨", "威尼斯", "那不勒斯", "都灵"],
      en: ["Rome", "Milan", "Florence", "Venice", "Naples", "Turin"]
    },
    culturalSites: {
      zh: ["斗兽场", "比萨斜塔", "梵蒂冈", "威尼斯", "佛罗伦萨", "庞贝古城"],
      en: ["Colosseum", "Leaning Tower of Pisa", "Vatican", "Venice", "Florence", "Pompeii"]
    }
  }
}`
};

// Read the current file
const filePath = path.join(__dirname, '..', 'src', 'data', 'enhanced-languages-new.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find the insertion point (after Spanish, before the TODO comment)
const insertionMarker = '  }\n\n  // TODO:';
const insertionIndex = content.indexOf(insertionMarker);

if (insertionIndex === -1) {
  console.error('Could not find insertion point!');
  process.exit(1);
}

// Insert Italian data
const beforeInsertion = content.substring(0, insertionIndex + 5); // Keep '  }\n\n'
const afterInsertion = content.substring(insertionIndex + 5);

const newContent = beforeInsertion + '\n  ' + languagesToAdd.italian + ',\n' + afterInsertion;

// Write the updated content
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('✅ Added Italian language data to enhanced-languages-new.ts');
console.log('Next: Run this script again for Portuguese, Russian, Arabic, and the other 5 languages');
