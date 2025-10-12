import { Language } from '../types'

/**
 * Enhanced language data with detailed cultural information, learning guides, and resources
 * All data is in proper bilingual format (BilingualText and BilingualArray)
 * This file provides additional detailed information beyond the base languages.ts
 */

export const enhancedLanguageData: Record<string, Language> = {
  spanish: {
    id: "spanish",
    code: "es",
    flag: "🇪🇸",
    name: "Spanish",
    nameEn: "Spanish",
    nameZh: "西班牙语",
    nativeName: "Español",
    description: {
      zh: "世界第二大母语，职场和旅游热门选择",
      en: "World's second most spoken native language, popular for work and travel"
    },
    difficulty: 2,
    speakers: {
      native: 500000000,
      total: 559000000,
      countries: {
        zh: ["西班牙", "墨西哥", "阿根廷", "哥伦比亚", "秘鲁", "委内瑞拉", "智利", "厄瓜多尔", "危地马拉", "古巴"],
        en: ["Spain", "Mexico", "Argentina", "Colombia", "Peru", "Venezuela", "Chile", "Ecuador", "Guatemala", "Cuba"]
      }
    },
    regions: {
      zh: ["欧洲", "北美洲", "南美洲", "中美洲"],
      en: ["Europe", "North America", "South America", "Central America"]
    },
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    script: {
      zh: "拉丁字母",
      en: "Latin alphabet"
    },
    tags: {
      zh: ["拉丁语族", "职场热门", "旅游实用"],
      en: ["Romance languages", "Popular for careers", "Travel practical"]
    },
    studyTime: {
      zh: "8个月",
      en: "8 months"
    },
    usage: {
      zh: ["旅游", "商务", "文化"],
      en: ["Travel", "Business", "Culture"]
    },
    resources: {
      zh: ["影视资源", "音乐文化", "语言交换"],
      en: ["Film & TV resources", "Music culture", "Language exchange"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "西班牙语起源于伊比利亚半岛的卡斯蒂利亚地区，经过数世纪的发展，在15-16世纪随着西班牙的海外扩张传播到美洲、非洲和亚洲。今天，西班牙语是世界上使用人数第二多的母语，也是联合国六种官方语言之一。",
        en: "Spanish originated in the Castile region of the Iberian Peninsula. After centuries of development, it spread to the Americas, Africa, and Asia during Spain's overseas expansion in the 15th-16th centuries. Today, Spanish is the world's second most spoken native language and one of the six official languages of the United Nations."
      },
      traditions: {
        zh: ["弗拉明戈舞", "斗牛", "午睡文化", "圣诞节庆", "圣地亚哥朝圣之路", "塞维利亚圣周"],
        en: ["Flamenco dance", "Bullfighting", "Siesta culture", "Christmas celebrations", "Camino de Santiago", "Seville Holy Week"]
      },
      festivals: {
        zh: ["圣费尔明节", "番茄节", "圣周", "万圣节", "三王节", "复活节"],
        en: ["San Fermín Festival", "La Tomatina", "Holy Week", "All Saints' Day", "Three Kings Day", "Easter"]
      },
      cuisine: {
        zh: ["海鲜饭", "伊比利亚火腿", "橄榄油", "塔帕斯", "玉米饼", "墨西哥卷饼"],
        en: ["Paella", "Iberian ham", "Olive oil", "Tapas", "Tortillas", "Burritos"]
      },
      arts: {
        zh: ["高迪建筑", "毕加索绘画", "洛尔卡诗歌", "塞万提斯文学", "戈雅绘画", "米罗艺术"],
        en: ["Gaudí architecture", "Picasso paintings", "Lorca poetry", "Cervantes literature", "Goya paintings", "Miró art"]
      },
      modernCulture: {
        zh: ["足球文化", "拉美音乐", "电影产业", "电视剧", "流行音乐", "现代建筑"],
        en: ["Football culture", "Latin American music", "Film industry", "TV series", "Pop music", "Modern architecture"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "es",
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

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "语音基础",
            en: "Phonetic Foundations"
          },
          description: {
            zh: "掌握西班牙语发音规则和语调模式",
            en: "Master Spanish pronunciation rules and intonation patterns"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 20,
          skills: {
            zh: ["字母发音", "重音规则", "语调练习", "卷舌音", "连读规则"],
            en: ["Letter pronunciation", "Stress rules", "Intonation practice", "Rolled R", "Liaison rules"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习动词变位和基本句型结构",
            en: "Learn verb conjugations and basic sentence structures"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["动词变位", "性别协调", "基本时态", "疑问句", "否定句"],
            en: ["Verb conjugation", "Gender agreement", "Basic tenses", "Questions", "Negations"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握500-1000个高频生活词汇",
            en: "Master 500-1000 high-frequency everyday words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "方位交通", "颜色形容"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Directions and transport", "Colors and descriptions"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂时态和虚拟语气",
            en: "Learn complex tenses and subjunctive mood"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 60,
          skills: {
            zh: ["完成时态", "虚拟语气", "条件句", "被动语态", "间接引语"],
            en: ["Perfect tenses", "Subjunctive mood", "Conditional sentences", "Passive voice", "Indirect speech"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和专业领域西班牙语",
            en: "Business, academic, and professional Spanish"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 80,
          skills: {
            zh: ["商务写作", "学术阅读", "演讲技巧", "文学欣赏", "跨文化交流"],
            en: ["Business writing", "Academic reading", "Presentation skills", "Literary appreciation", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造语言环境",
            en: "Create language environment through multimedia content"
          },
          techniques: {
            zh: ["西语电影", "拉美音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Spanish films", "Latin music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "SpanishPod101"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "SpanishPod101"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["WordReference", "Linguee", "SpanishDict", "Reverso", "Google Translate"],
            en: ["WordReference", "Linguee", "SpanishDict", "Reverso", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix西语", "YouTube西语", "Spotify播客", "BBC Mundo", "El País"],
            en: ["Netflix Spanish", "YouTube Spanish", "Spotify Podcasts", "BBC Mundo", "El País"]
          }
        }
      ]
    },

    // Learning time estimate
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
      totalHours: 600,
      basic: 150,
      intermediateHours: 300,
      advancedHours: 450
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 3,
      pronunciation: 2,
      writing: 2,
      vocabulary: 2
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Busuu",
          description: {
            zh: "AI辅助学习",
            en: "AI-assisted learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Madrigal's Magic Key to Spanish",
          author: "Margarita Madrigal",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        },
        {
          title: "Practice Makes Perfect Spanish Grammar",
          author: "Dorothy Richmond",
          level: {
            zh: "中级",
            en: "Intermediate"
          }
        },
        {
          title: "Advanced Spanish Grammar",
          author: "Luis Aragones",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        }
      ],
      websites: [
        {
          name: "SpanishDict",
          url: "https://spanishdict.com",
          description: {
            zh: "最全面的西语学习网站",
            en: "Most comprehensive Spanish learning website"
          }
        },
        {
          name: "Conjuguemos",
          url: "https://conjuguemos.com",
          description: {
            zh: "动词变位练习专站",
            en: "Dedicated verb conjugation practice site"
          }
        },
        {
          name: "News in Slow Spanish",
          url: "https://newsinslowspanish.com",
          description: {
            zh: "慢速西语新闻",
            en: "Slow Spanish news"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际贸易", "旅游酒店", "教育培训", "翻译口译", "新闻传媒", "医疗保健"],
        en: ["International trade", "Tourism and hospitality", "Education and training", "Translation and interpretation", "News media", "Healthcare"]
      },
      averageSalary: {
        zh: "40,000-80,000美元",
        en: "$40,000-80,000"
      },
      jobGrowth: {
        zh: "增长率15%",
        en: "15% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["西班牙", "墨西哥", "阿根廷", "哥伦比亚", "秘鲁", "智利"],
        en: ["Spain", "Mexico", "Argentina", "Colombia", "Peru", "Chile"]
      },
      businessHubs: {
        zh: ["马德里", "巴塞罗那", "墨西哥城", "布宜诺斯艾利斯", "利马", "圣地亚哥"],
        en: ["Madrid", "Barcelona", "Mexico City", "Buenos Aires", "Lima", "Santiago"]
      },
      culturalSites: {
        zh: ["阿尔罕布拉宫", "马丘比丘", "圣家族大教堂", "弗拉明戈表演", "墨西哥玛雅遗址"],
        en: ["Alhambra Palace", "Machu Picchu", "Sagrada Familia", "Flamenco performances", "Mayan ruins in Mexico"]
      }
    }
  },

  english: {
    id: "english",
    code: "en",
    flag: "🇺🇸",
    name: "English",
    nameEn: "English",
    nameZh: "英语",
    nativeName: "English",
    description: {
      zh: "全球通用语言，国际商务和科技交流的桥梁",
      en: "Global lingua franca, bridge for international business and technology"
    },
    difficulty: 1,
    speakers: {
      native: 380000000,
      total: 1500000000,
      countries: {
        zh: ["美国", "英国", "加拿大", "澳大利亚", "新西兰", "爱尔兰", "南非", "印度", "新加坡", "菲律宾"],
        en: ["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland", "South Africa", "India", "Singapore", "Philippines"]
      }
    },
    regions: {
      zh: ["北美洲", "欧洲", "大洋洲", "亚洲", "非洲"],
      en: ["North America", "Europe", "Oceania", "Asia", "Africa"]
    },
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    script: {
      zh: "拉丁字母",
      en: "Latin alphabet"
    },
    tags: {
      zh: ["日耳曼语族", "国际通用", "商务科技"],
      en: ["Germanic languages", "International", "Business & tech"]
    },
    studyTime: {
      zh: "6个月",
      en: "6 months"
    },
    usage: {
      zh: ["国际商务", "科技交流", "学术研究"],
      en: ["International business", "Technology", "Academic research"]
    },
    resources: {
      zh: ["海量资源", "影视内容", "在线课程"],
      en: ["Abundant resources", "Film & TV content", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "英语起源于盎格鲁-撒克逊人，经过诺曼征服、文艺复兴和帝国扩张，发展成为今天的全球通用语言。作为联合国和欧盟的官方语言之一，英语在科技、商务、学术领域占据主导地位。",
        en: "English originated from Anglo-Saxons, evolved through Norman conquest, Renaissance, and imperial expansion to become today's global lingua franca. As one of the official languages of the UN and EU, English dominates technology, business, and academic fields."
      },
      traditions: {
        zh: ["圣诞节", "感恩节", "万圣节", "复活节", "下午茶", "足球文化"],
        en: ["Christmas", "Thanksgiving", "Halloween", "Easter", "Afternoon tea", "Football culture"]
      },
      festivals: {
        zh: ["圣诞节", "感恩节", "万圣节", "复活节", "圣帕特里克节", "独立日"],
        en: ["Christmas", "Thanksgiving", "Halloween", "Easter", "St. Patrick's Day", "Independence Day"]
      },
      cuisine: {
        zh: ["汉堡包", "炸鱼薯条", "烤肉", "苹果派", "烤牛肉", "英式早餐"],
        en: ["Hamburgers", "Fish and chips", "Barbecue", "Apple pie", "Roast beef", "English breakfast"]
      },
      arts: {
        zh: ["莎士比亚文学", "摇滚音乐", "好莱坞电影", "百老汇音乐剧", "现代艺术", "流行文化"],
        en: ["Shakespeare literature", "Rock music", "Hollywood films", "Broadway musicals", "Modern art", "Pop culture"]
      },
      modernCulture: {
        zh: ["好莱坞电影", "流行音乐", "科技产业", "社交媒体", "体育文化", "时尚潮流"],
        en: ["Hollywood films", "Pop music", "Tech industry", "Social media", "Sports culture", "Fashion trends"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "en",
      family: {
        zh: "印欧语系",
        en: "Indo-European"
      },
      branch: {
        zh: "日耳曼语族",
        en: "Germanic"
      },
      writingSystem: {
        zh: ["拉丁字母"],
        en: ["Latin alphabet"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "基础发音",
            en: "Basic Pronunciation"
          },
          description: {
            zh: "掌握英语音标和基本发音规则",
            en: "Master English phonetics and basic pronunciation rules"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 15,
          skills: {
            zh: ["音标学习", "元音发音", "辅音发音", "重音规则", "语调练习"],
            en: ["Phonetic symbols", "Vowel sounds", "Consonant sounds", "Stress patterns", "Intonation practice"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习基本时态和句型结构",
            en: "Learn basic tenses and sentence structures"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["现在时", "过去时", "将来时", "疑问句", "否定句"],
            en: ["Present tense", "Past tense", "Future tense", "Questions", "Negations"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握1000-2000个高频词汇",
            en: "Master 1000-2000 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 25,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "颜色形容", "方位交通"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Colors and descriptions", "Directions and transport"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂时态和语法结构",
            en: "Learn complex tenses and grammatical structures"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 50,
          skills: {
            zh: ["完成时态", "被动语态", "条件句", "间接引语", "定语从句"],
            en: ["Perfect tenses", "Passive voice", "Conditional sentences", "Indirect speech", "Relative clauses"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和专业英语应用",
            en: "Business, academic, and professional English applications"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 70,
          skills: {
            zh: ["商务写作", "学术阅读", "演讲技巧", "文学欣赏", "跨文化交流"],
            en: ["Business writing", "Academic reading", "Presentation skills", "Literary appreciation", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造英语环境",
            en: "Create English environment through multimedia content"
          },
          techniques: {
            zh: ["英语电影", "英语音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["English films", "English music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Oxford Dictionary", "Cambridge Dictionary", "Merriam-Webster", "Collins", "Google Translate"],
            en: ["Oxford Dictionary", "Cambridge Dictionary", "Merriam-Webster", "Collins", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix", "YouTube", "BBC Learning", "TED Talks", "English news"],
            en: ["Netflix", "YouTube", "BBC Learning", "TED Talks", "English news"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "2-4个月",
        en: "2-4 months"
      },
      intermediate: {
        zh: "6个月-1年",
        en: "6 months - 1 year"
      },
      advanced: {
        zh: "1-2年",
        en: "1-2 years"
      },
      totalHours: 400,
      basic: 100,
      intermediateHours: 200,
      advancedHours: 350
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 2,
      pronunciation: 3,
      writing: 2,
      vocabulary: 2
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Rosetta Stone",
          description: {
            zh: "沉浸式语言学习",
            en: "Immersive language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "English Grammar in Use",
          author: "Raymond Murphy",
          level: {
            zh: "初中级",
            en: "Intermediate"
          }
        },
        {
          title: "Practical English Usage",
          author: "Michael Swan",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "The Elements of Style",
          author: "William Strunk Jr.",
          level: {
            zh: "写作指南",
            en: "Writing guide"
          }
        }
      ],
      websites: [
        {
          name: "BBC Learning English",
          url: "https://bbc.co.uk/learningenglish",
          description: {
            zh: "BBC官方英语学习网站",
            en: "Official BBC English learning website"
          }
        },
        {
          name: "English Grammar",
          url: "https://englishgrammar.org",
          description: {
            zh: "英语语法学习网站",
            en: "English grammar learning website"
          }
        },
        {
          name: "TED Talks",
          url: "https://ted.com",
          description: {
            zh: "英语演讲视频平台",
            en: "English speech video platform"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际商务", "科技产业", "教育培训", "翻译口译", "新闻传媒", "旅游业"],
        en: ["International business", "Technology", "Education", "Translation", "Media", "Tourism"]
      },
      averageSalary: {
        zh: "50,000-100,000美元",
        en: "$50,000-100,000"
      },
      jobGrowth: {
        zh: "增长率20%",
        en: "20% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["美国", "英国", "加拿大", "澳大利亚", "新西兰", "爱尔兰"],
        en: ["United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland"]
      },
      businessHubs: {
        zh: ["纽约", "伦敦", "多伦多", "悉尼", "洛杉矶", "芝加哥"],
        en: ["New York", "London", "Toronto", "Sydney", "Los Angeles", "Chicago"]
      },
      culturalSites: {
        zh: ["大本钟", "自由女神像", "悉尼歌剧院", "尼亚加拉瀑布", "巨石阵"],
        en: ["Big Ben", "Statue of Liberty", "Sydney Opera House", "Niagara Falls", "Stonehenge"]
      }
    }
  },

  french: {
    id: "french",
    code: "fr",
    flag: "🇫🇷",
    name: "French",
    nameEn: "French",
    nameZh: "法语",
    nativeName: "Français",
    description: {
      zh: "优雅的语言，艺术和时尚的象征",
      en: "Elegant language, symbol of art and fashion"
    },
    difficulty: 3,
    speakers: {
      native: 76000000,
      total: 280000000,
      countries: {
        zh: ["法国", "加拿大", "瑞士", "比利时", "摩纳哥", "卢森堡", "塞内加尔", "马达加斯加"],
        en: ["France", "Canada", "Switzerland", "Belgium", "Monaco", "Luxembourg", "Senegal", "Madagascar"]
      }
    },
    regions: {
      zh: ["欧洲", "北美洲", "非洲", "大洋洲"],
      en: ["Europe", "North America", "Africa", "Oceania"]
    },
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    script: {
      zh: "拉丁字母",
      en: "Latin alphabet"
    },
    tags: {
      zh: ["浪漫语族", "艺术文化", "外交语言"],
      en: ["Romance languages", "Art & culture", "Diplomatic language"]
    },
    studyTime: {
      zh: "12个月",
      en: "12 months"
    },
    usage: {
      zh: ["文化", "旅游", "外交"],
      en: ["Culture", "Travel", "Diplomacy"]
    },
    resources: {
      zh: ["文学作品", "电影资源", "语言学校"],
      en: ["Literary works", "Film resources", "Language schools"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "法语起源于高卢地区的拉丁语，经过诺曼征服和文艺复兴时期的发展，成为欧洲贵族和知识分子的语言。法语是联合国、欧盟和许多国际组织的官方语言，在文学、艺术、时尚领域享有崇高地位。",
        en: "French originated from Latin in Gaul, developed through Norman conquest and Renaissance to become the language of European nobility and intellectuals. French is an official language of the UN, EU, and many international organizations, holding high status in literature, art, and fashion."
      },
      traditions: {
        zh: ["香槟文化", "美食艺术", "时尚设计", "文学沙龙", "咖啡文化", "艺术欣赏"],
        en: ["Champagne culture", "Culinary arts", "Fashion design", "Literary salons", "Coffee culture", "Art appreciation"]
      },
      festivals: {
        zh: ["巴士底日", "圣诞节", "复活节", "万圣节", "音乐节", "电影节"],
        en: ["Bastille Day", "Christmas", "Easter", "Halloween", "Music festivals", "Film festivals"]
      },
      cuisine: {
        zh: ["法式面包", "奶酪", "红酒", "鹅肝酱", "蜗牛", "马卡龙"],
        en: ["French bread", "Cheese", "Wine", "Foie gras", "Escargot", "Macarons"]
      },
      arts: {
        zh: ["印象派绘画", "卢浮宫", "巴黎圣母院", "埃菲尔铁塔", "凡尔赛宫", "莫奈作品"],
        en: ["Impressionist painting", "Louvre Museum", "Notre-Dame", "Eiffel Tower", "Versailles", "Monet's works"]
      },
      modernCulture: {
        zh: ["巴黎时装周", "法国电影", "香奈儿时尚", "米其林餐厅", "现代艺术", "科技产业"],
        en: ["Paris Fashion Week", "French cinema", "Chanel fashion", "Michelin restaurants", "Modern art", "Tech industry"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "fr",
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

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "语音基础",
            en: "Phonetic Foundations"
          },
          description: {
            zh: "掌握法语发音规则和语调",
            en: "Master French pronunciation rules and intonation"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 25,
          skills: {
            zh: ["鼻音", "小舌音", "连读规则", "重音位置", "语调模式"],
            en: ["Nasal sounds", "Uvular R", "Liaison rules", "Stress patterns", "Intonation patterns"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习名词性别和动词变位",
            en: "Learn noun gender and verb conjugations"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 45,
          skills: {
            zh: ["名词性别", "形容词配合", "动词变位", "基本时态", "疑问句"],
            en: ["Noun gender", "Adjective agreement", "Verb conjugation", "Basic tenses", "Questions"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握800-1200个高频词汇",
            en: "Master 800-1200 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 35,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "方位交通", "颜色形容"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Directions and transport", "Colors and descriptions"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复合时态和虚拟语气",
            en: "Learn compound tenses and subjunctive mood"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 70,
          skills: {
            zh: ["复合过去时", "未完成过去时", "虚拟语气", "条件句", "间接引语"],
            en: ["Passé composé", "Imparfait", "Subjunctive mood", "Conditional sentences", "Indirect speech"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和文化法语",
            en: "Business, academic, and cultural French"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 90,
          skills: {
            zh: ["商务写作", "学术阅读", "文学欣赏", "演讲技巧", "跨文化交流"],
            en: ["Business writing", "Academic reading", "Literary appreciation", "Presentation skills", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过法语媒体创造语言环境",
            en: "Create language environment through French media"
          },
          techniques: {
            zh: ["法语电影", "法语音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["French films", "French music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与法语母语者互动练习",
            en: "Practice with native French speakers"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "FrenchPod101"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "FrenchPod101"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Larousse", "Le Robert", "WordReference", "Linguee", "Google Translate"],
            en: ["Larousse", "Le Robert", "WordReference", "Linguee", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["TV5Monde", "France 24", "RFI", "Arte", "Netflix法语"],
            en: ["TV5Monde", "France 24", "RFI", "Arte", "Netflix French"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "4-8个月",
        en: "4-8 months"
      },
      intermediate: {
        zh: "1.5-2.5年",
        en: "1.5-2.5 years"
      },
      advanced: {
        zh: "3-4年",
        en: "3-4 years"
      },
      totalHours: 750,
      basic: 200,
      intermediateHours: 400,
      advancedHours: 700
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 4,
      pronunciation: 4,
      writing: 3,
      vocabulary: 3
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Busuu",
          description: {
            zh: "AI辅助学习",
            en: "AI-assisted learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Easy French Step-by-Step",
          author: "Myrna Bell Rochester",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        },
        {
          title: "Practice Makes Perfect French Grammar",
          author: "Annie Heminway",
          level: {
            zh: "中级",
            en: "Intermediate"
          }
        },
        {
          title: "Advanced French Grammar",
          author: "Monique L'Huillier",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        }
      ],
      websites: [
        {
          name: "TV5Monde",
          url: "https://apprendre.tv5monde.com",
          description: {
            zh: "法语学习官方平台",
            en: "Official French learning platform"
          }
        },
        {
          name: "Le Point du FLE",
          url: "https://lepointdufle.net",
          description: {
            zh: "法语作为外语学习网站",
            en: "French as a foreign language website"
          }
        },
        {
          name: "Français Facile",
          url: "https://francaisfacile.com",
          description: {
            zh: "简单法语学习网站",
            en: "Easy French learning website"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际组织", "时尚设计", "餐饮业", "教育培训", "翻译口译", "文化艺术"],
        en: ["International organizations", "Fashion design", "Culinary arts", "Education", "Translation", "Arts and culture"]
      },
      averageSalary: {
        zh: "45,000-85,000美元",
        en: "$45,000-85,000"
      },
      jobGrowth: {
        zh: "增长率12%",
        en: "12% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["法国", "加拿大", "瑞士", "比利时", "摩纳哥", "卢森堡"],
        en: ["France", "Canada", "Switzerland", "Belgium", "Monaco", "Luxembourg"]
      },
      businessHubs: {
        zh: ["巴黎", "蒙特利尔", "日内瓦", "布鲁塞尔", "里昂", "尼斯"],
        en: ["Paris", "Montreal", "Geneva", "Brussels", "Lyon", "Nice"]
      },
      culturalSites: {
        zh: ["卢浮宫", "埃菲尔铁塔", "凡尔赛宫", "圣母院", "香波堡", "圣米歇尔山"],
        en: ["Louvre", "Eiffel Tower", "Versailles", "Notre-Dame", "Château de Chambord", "Mont Saint-Michel"]
      }
    }
  },

  german: {
    id: "german",
    code: "de",
    flag: "🇩🇪",
    name: "German",
    nameEn: "German",
    nameZh: "德语",
    nativeName: "Deutsch",
    description: {
      zh: "科学和工程的语言，欧洲商务重要语言",
      en: "Language of science and engineering, key European business language"
    },
    difficulty: 3,
    speakers: {
      native: 95000000,
      total: 132000000,
      countries: {
        zh: ["德国", "奥地利", "瑞士", "列支敦士登", "卢森堡", "比利时"],
        en: ["Germany", "Austria", "Switzerland", "Liechtenstein", "Luxembourg", "Belgium"]
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
    tags: {
      zh: ["日耳曼语族", "科学技术", "欧洲商务"],
      en: ["Germanic languages", "Science & technology", "European business"]
    },
    studyTime: {
      zh: "14个月",
      en: "14 months"
    },
    usage: {
      zh: ["学术", "商务", "技术"],
      en: ["Academic", "Business", "Technology"]
    },
    resources: {
      zh: ["技术文档", "学术资源", "在线平台"],
      en: ["Technical documentation", "Academic resources", "Online platforms"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "德语是日耳曼语族的重要语言，起源于古代日耳曼部落。经过马丁·路德的宗教改革和德语标准化，成为欧洲重要的学术和科学语言。德语在哲学、音乐、文学领域有着深远影响。",
        en: "German is an important Germanic language originating from ancient Germanic tribes. Through Martin Luther's Reformation and German standardization, it became an important European academic and scientific language with profound influence in philosophy, music, and literature."
      },
      traditions: {
        zh: ["啤酒节", "圣诞市场", "香肠文化", "汽车制造", "哲学思辨", "音乐传统"],
        en: ["Oktoberfest", "Christmas markets", "Sausage culture", "Car manufacturing", "Philosophical thinking", "Musical tradition"]
      },
      festivals: {
        zh: ["啤酒节", "圣诞市场", "狂欢节", "复活节", "圣马丁节", "音乐节"],
        en: ["Oktoberfest", "Christmas markets", "Carnival", "Easter", "St. Martin's Day", "Music festivals"]
      },
      cuisine: {
        zh: ["德国香肠", "啤酒", "黑面包", "酸菜", "猪肘", "苹果派"],
        en: ["German sausages", "Beer", "Dark bread", "Sauerkraut", "Pork knuckle", "Apple strudel"]
      },
      arts: {
        zh: ["巴赫音乐", "贝多芬交响乐", "歌德文学", "格林童话", "包豪斯设计", "表现主义艺术"],
        en: ["Bach music", "Beethoven symphonies", "Goethe literature", "Grimm fairy tales", "Bauhaus design", "Expressionist art"]
      },
      modernCulture: {
        zh: ["汽车工业", "科技公司", "足球文化", "柏林电影节", "电子音乐", "现代设计"],
        en: ["Automotive industry", "Tech companies", "Football culture", "Berlin Film Festival", "Electronic music", "Modern design"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "de",
      family: {
        zh: "印欧语系",
        en: "Indo-European"
      },
      branch: {
        zh: "日耳曼语族",
        en: "Germanic"
      },
      writingSystem: {
        zh: ["拉丁字母"],
        en: ["Latin alphabet"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "语音基础",
            en: "Phonetic Foundations"
          },
          description: {
            zh: "掌握德语发音规则和特殊音素",
            en: "Master German pronunciation rules and special phonemes"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["元音变音", "辅音组合", "重音规则", "语调模式", "特殊发音"],
            en: ["Umlauts", "Consonant clusters", "Stress patterns", "Intonation patterns", "Special pronunciations"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习名词性别和动词变位",
            en: "Learn noun gender and verb conjugations"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 60,
          skills: {
            zh: ["名词性别", "形容词变格", "动词变位", "基本时态", "语序规则"],
            en: ["Noun gender", "Adjective declension", "Verb conjugation", "Basic tenses", "Word order rules"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握1000-1500个高频词汇",
            en: "Master 1000-1500 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "方位交通", "职业词汇"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Directions and transport", "Professional vocabulary"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂语法结构和时态",
            en: "Learn complex grammatical structures and tenses"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 80,
          skills: {
            zh: ["完成时态", "被动语态", "虚拟语气", "从句结构", "介词使用"],
            en: ["Perfect tenses", "Passive voice", "Subjunctive mood", "Subordinate clauses", "Preposition usage"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "学术、商务和技术德语",
            en: "Academic, business, and technical German"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 100,
          skills: {
            zh: ["学术写作", "商务德语", "技术文档", "文学欣赏", "跨文化交流"],
            en: ["Academic writing", "Business German", "Technical documentation", "Literary appreciation", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过德语媒体创造语言环境",
            en: "Create language environment through German media"
          },
          techniques: {
            zh: ["德语电影", "德语音乐", "播客收听", "新闻阅读", "德语网站"],
            en: ["German films", "German music", "Podcast listening", "News reading", "German websites"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与德语母语者互动练习",
            en: "Practice with native German speakers"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Deutsche Welle", "Goethe Institut"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Deutsche Welle", "Goethe Institut"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Duden", "Langenscheidt", "Leo", "Dict.cc", "Google Translate"],
            en: ["Duden", "Langenscheidt", "Leo", "Dict.cc", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Deutsche Welle", "ARD", "ZDF", "Der Spiegel", "Netflix德语"],
            en: ["Deutsche Welle", "ARD", "ZDF", "Der Spiegel", "Netflix German"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "6-9个月",
        en: "6-9 months"
      },
      intermediate: {
        zh: "1.5-2年",
        en: "1.5-2 years"
      },
      advanced: {
        zh: "3-4年",
        en: "3-4 years"
      },
      totalHours: 900,
      basic: 300,
      intermediateHours: 600,
      advancedHours: 1200
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 5,
      pronunciation: 3,
      writing: 3,
      vocabulary: 4
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Busuu",
          description: {
            zh: "AI辅助学习",
            en: "AI-assisted learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Hammer's German Grammar and Usage",
          author: "Martin Durrell",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "Practice Makes Perfect German Grammar",
          author: "Ed Swick",
          level: {
            zh: "中级",
            en: "Intermediate"
          }
        },
        {
          title: "German Made Simple",
          author: "Eugene Jackson",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        }
      ],
      websites: [
        {
          name: "Deutsche Welle",
          url: "https://dw.com/en/learn-german",
          description: {
            zh: "德国之声德语学习",
            en: "Deutsche Welle German learning"
          }
        },
        {
          name: "Goethe Institut",
          url: "https://goethe.de",
          description: {
            zh: "歌德学院官方学习平台",
            en: "Official Goethe Institut learning platform"
          }
        },
        {
          name: "Lingolia",
          url: "https://deutsch.lingolia.com",
          description: {
            zh: "德语语法练习网站",
            en: "German grammar practice website"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["汽车工业", "工程技术", "学术研究", "翻译口译", "国际商务", "科技公司"],
        en: ["Automotive industry", "Engineering", "Academic research", "Translation", "International business", "Tech companies"]
      },
      averageSalary: {
        zh: "55,000-95,000美元",
        en: "$55,000-95,000"
      },
      jobGrowth: {
        zh: "增长率18%",
        en: "18% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["德国", "奥地利", "瑞士", "列支敦士登", "卢森堡", "比利时"],
        en: ["Germany", "Austria", "Switzerland", "Liechtenstein", "Luxembourg", "Belgium"]
      },
      businessHubs: {
        zh: ["柏林", "慕尼黑", "汉堡", "维也纳", "苏黎世", "法兰克福"],
        en: ["Berlin", "Munich", "Hamburg", "Vienna", "Zurich", "Frankfurt"]
      },
      culturalSites: {
        zh: ["新天鹅堡", "科隆大教堂", "柏林墙", "维也纳歌剧院", "黑森林", "阿尔卑斯山"],
        en: ["Neuschwanstein Castle", "Cologne Cathedral", "Berlin Wall", "Vienna Opera House", "Black Forest", "Alps"]
      }
    }
  },

  japanese: {
    id: "japanese",
    code: "ja",
    flag: "🇯🇵",
    name: "Japanese",
    nameEn: "Japanese",
    nameZh: "日语",
    nativeName: "日本語",
    description: {
      zh: "动漫文化和先进科技的语言",
      en: "Language of anime culture and advanced technology"
    },
    difficulty: 4,
    speakers: {
      native: 122000000,
      total: 125000000,
      countries: {
        zh: ["日本"],
        en: ["Japan"]
      }
    },
    regions: {
      zh: ["东亚"],
      en: ["East Asia"]
    },
    family: {
      zh: "日语族",
      en: "Japonic"
    },
    script: {
      zh: "假名+汉字",
      en: "Kana + Kanji"
    },
    tags: {
      zh: ["东亚文化", "动漫游戏", "科技创新"],
      en: ["East Asian culture", "Anime & games", "Tech innovation"]
    },
    studyTime: {
      zh: "18个月",
      en: "18 months"
    },
    usage: {
      zh: ["文化", "商务", "娱乐"],
      en: ["Culture", "Business", "Entertainment"]
    },
    resources: {
      zh: ["动漫资源", "文化体验", "在线课程"],
      en: ["Anime resources", "Cultural immersion", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "日语起源于古代日本列岛，经过汉字传入、假名创制和文化发展，形成了独特的语言体系。日语在文学、动漫、科技领域具有重要影响力，是日本文化输出的重要载体。",
        en: "Japanese originated in ancient Japanese archipelago, developed through Chinese character introduction, kana creation, and cultural development to form a unique language system. Japanese has significant influence in literature, anime, and technology, serving as an important carrier of Japanese cultural export."
      },
      traditions: {
        zh: ["茶道", "花道", "武道", "和服文化", "温泉文化", "禅宗思想"],
        en: ["Tea ceremony", "Ikebana", "Martial arts", "Kimono culture", "Onsen culture", "Zen philosophy"]
      },
      festivals: {
        zh: ["新年", "樱花节", "盂兰盆节", "七夕节", "成人节", "文化节"],
        en: ["New Year", "Cherry blossom festival", "Obon festival", "Tanabata", "Coming of Age Day", "Culture Day"]
      },
      cuisine: {
        zh: ["寿司", "拉面", "天妇罗", "刺身", "味噌汤", "日式咖喱"],
        en: ["Sushi", "Ramen", "Tempura", "Sashimi", "Miso soup", "Japanese curry"]
      },
      arts: {
        zh: ["浮世绘", "歌舞伎", "能剧", "俳句", "书法", "折纸"],
        en: ["Ukiyo-e", "Kabuki", "Noh theater", "Haiku", "Calligraphy", "Origami"]
      },
      modernCulture: {
        zh: ["动漫文化", "电子游戏", "科技产业", "时尚潮流", "音乐文化", "电影产业"],
        en: ["Anime culture", "Video games", "Tech industry", "Fashion trends", "Music culture", "Film industry"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "ja",
      family: {
        zh: "日语族",
        en: "Japonic"
      },
      branch: {
        zh: "日语",
        en: "Japanese"
      },
      writingSystem: {
        zh: ["平假名", "片假名", "汉字"],
        en: ["Hiragana", "Katakana", "Kanji"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "假名学习",
            en: "Kana Learning"
          },
          description: {
            zh: "掌握平假名和片假名",
            en: "Master hiragana and katakana"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["平假名", "片假名", "发音规则", "书写练习", "记忆技巧"],
            en: ["Hiragana", "Katakana", "Pronunciation rules", "Writing practice", "Memory techniques"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习基本句型结构和敬语",
            en: "Learn basic sentence structures and honorifics"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 80,
          skills: {
            zh: ["基本句型", "助词使用", "动词变化", "敬语体系", "疑问句"],
            en: ["Basic sentence patterns", "Particle usage", "Verb conjugation", "Honorific system", "Questions"]
          }
        },
        {
          title: {
            zh: "汉字学习",
            en: "Kanji Learning"
          },
          description: {
            zh: "掌握常用汉字的读写",
            en: "Master reading and writing of common kanji"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 120,
          skills: {
            zh: ["常用汉字", "汉字读音", "汉字书写", "部首学习", "汉字记忆"],
            en: ["Common kanji", "Kanji readings", "Kanji writing", "Radical learning", "Kanji memory"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂语法和敬语系统",
            en: "Learn complex grammar and honorific systems"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 150,
          skills: {
            zh: ["复杂句型", "敬语运用", "条件句", "被动语态", "使役语态"],
            en: ["Complex sentence patterns", "Honorific usage", "Conditional sentences", "Passive voice", "Causative voice"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和文化日语",
            en: "Business, academic, and cultural Japanese"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 200,
          skills: {
            zh: ["商务日语", "学术阅读", "文学欣赏", "演讲技巧", "跨文化交流"],
            en: ["Business Japanese", "Academic reading", "Literary appreciation", "Presentation skills", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过日本媒体创造语言环境",
            en: "Create language environment through Japanese media"
          },
          techniques: {
            zh: ["动漫学习", "日剧观看", "音乐收听", "新闻阅读", "社交媒体"],
            en: ["Anime learning", "J-drama watching", "Music listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与日语母语者互动练习",
            en: "Practice with native Japanese speakers"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "汉字卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Kanji flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "LingoDeer", "WaniKani", "Tae Kim", "JapanesePod101"],
            en: ["Duolingo", "LingoDeer", "WaniKani", "Tae Kim", "JapanesePod101"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Jisho", "Tangorin", "Imiwa", "Akebi", "Google Translate"],
            en: ["Jisho", "Tangorin", "Imiwa", "Akebi", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["NHK新闻", "动漫", "日剧", "YouTube", "播客"],
            en: ["NHK News", "Anime", "J-dramas", "YouTube", "Podcasts"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "8-12个月",
        en: "8-12 months"
      },
      intermediate: {
        zh: "2-3年",
        en: "2-3 years"
      },
      advanced: {
        zh: "4-5年",
        en: "4-5 years"
      },
      totalHours: 1200,
      basic: 600,
      intermediateHours: 1200,
      advancedHours: 2200
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 5,
      pronunciation: 3,
      writing: 5,
      vocabulary: 5
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "WaniKani",
          description: {
            zh: "汉字学习专用应用",
            en: "Dedicated kanji learning app"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "LingoDeer",
          description: {
            zh: "亚洲语言学习",
            en: "Asian language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Genki",
          author: "Eri Banno",
          level: {
            zh: "初中级",
            en: "Beginner-Intermediate"
          }
        },
        {
          title: "Minna no Nihongo",
          author: "3A Corporation",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        },
        {
          title: "Tobira",
          author: "Mayumi Oka",
          level: {
            zh: "中高级",
            en: "Intermediate-Advanced"
          }
        }
      ],
      websites: [
        {
          name: "Tae Kim's Guide",
          url: "https://guidetojapanese.org",
          description: {
            zh: "免费日语语法指南",
            en: "Free Japanese grammar guide"
          }
        },
        {
          name: "WaniKani",
          url: "https://wanikani.com",
          description: {
            zh: "汉字学习平台",
            en: "Kanji learning platform"
          }
        },
        {
          name: "NHK Easy News",
          url: "https://nhk.or.jp/lesson",
          description: {
            zh: "NHK简单新闻",
            en: "NHK Easy News"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["科技产业", "动漫游戏", "翻译口译", "国际贸易", "教育培训", "文化交流"],
        en: ["Technology", "Anime & games", "Translation", "International trade", "Education", "Cultural exchange"]
      },
      averageSalary: {
        zh: "60,000-110,000美元",
        en: "$60,000-110,000"
      },
      jobGrowth: {
        zh: "增长率25%",
        en: "25% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["日本"],
        en: ["Japan"]
      },
      businessHubs: {
        zh: ["东京", "大阪", "名古屋", "横滨", "神户", "福冈"],
        en: ["Tokyo", "Osaka", "Nagoya", "Yokohama", "Kobe", "Fukuoka"]
      },
      culturalSites: {
        zh: ["富士山", "清水寺", "金阁寺", "东京塔", "浅草寺", "奈良公园"],
        en: ["Mount Fuji", "Kiyomizu Temple", "Kinkaku-ji", "Tokyo Tower", "Sensō-ji", "Nara Park"]
      }
    }
  },

  korean: {
    id: "korean",
    code: "ko",
    flag: "🇰🇷",
    name: "Korean",
    nameEn: "Korean",
    nameZh: "韩语",
    nativeName: "한국어",
    description: {
      zh: "韩流文化的载体，科技产业重要语言",
      en: "Vehicle of Korean Wave culture, key language for tech industry"
    },
    difficulty: 4,
    speakers: {
      native: 75000000,
      total: 77000000,
      countries: {
        zh: ["韩国", "朝鲜"],
        en: ["South Korea", "North Korea"]
      }
    },
    regions: {
      zh: ["东亚"],
      en: ["East Asia"]
    },
    family: {
      zh: "朝鲜语族",
      en: "Koreanic"
    },
    script: {
      zh: "韩文",
      en: "Hangul"
    },
    tags: {
      zh: ["东亚文化", "韩流", "科技"],
      en: ["East Asian culture", "Korean Wave", "Technology"]
    },
    studyTime: {
      zh: "16个月",
      en: "16 months"
    },
    usage: {
      zh: ["娱乐", "商务", "文化"],
      en: ["Entertainment", "Business", "Culture"]
    },
    resources: {
      zh: ["K-pop资源", "韩剧学习", "在线课程"],
      en: ["K-pop resources", "K-drama learning", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "韩语是朝鲜语族的语言，起源于古代朝鲜半岛。经过世宗大王创制韩文、现代化发展和文化输出，韩语成为韩流文化的重要载体，在全球范围内具有重要影响力。",
        en: "Korean is a Koreanic language originating in ancient Korean Peninsula. Through King Sejong's creation of Hangul, modernization, and cultural export, Korean has become an important carrier of Korean Wave culture with significant global influence."
      },
      traditions: {
        zh: ["茶礼", "韩服", "传统音乐", "武术", "节日庆典", "家庭观念"],
        en: ["Tea ceremony", "Hanbok", "Traditional music", "Martial arts", "Festivals", "Family values"]
      },
      festivals: {
        zh: ["春节", "中秋节", "佛诞日", "儿童节", "父母节", "光复节"],
        en: ["Lunar New Year", "Chuseok", "Buddha's Birthday", "Children's Day", "Parents' Day", "Liberation Day"]
      },
      cuisine: {
        zh: ["泡菜", "韩式烤肉", "石锅拌饭", "韩式炸鸡", "部队锅", "冷面"],
        en: ["Kimchi", "Korean BBQ", "Bibimbap", "Korean fried chicken", "Budae-jjigae", "Naengmyeon"]
      },
      arts: {
        zh: ["K-pop音乐", "韩剧", "电影", "传统舞蹈", "书法", "传统绘画"],
        en: ["K-pop music", "K-dramas", "Cinema", "Traditional dance", "Calligraphy", "Traditional painting"]
      },
      modernCulture: {
        zh: ["K-pop", "韩流", "科技产业", "美容文化", "时尚潮流", "电子竞技"],
        en: ["K-pop", "Korean Wave", "Tech industry", "Beauty culture", "Fashion trends", "E-sports"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "ko",
      family: {
        zh: "朝鲜语族",
        en: "Koreanic"
      },
      branch: {
        zh: "朝鲜语",
        en: "Korean"
      },
      writingSystem: {
        zh: ["韩文"],
        en: ["Hangul"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "韩文字母",
            en: "Hangul Learning"
          },
          description: {
            zh: "掌握韩文字母的读写",
            en: "Master reading and writing of Hangul"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 20,
          skills: {
            zh: ["韩文字母", "发音规则", "书写练习", "音韵组合", "记忆技巧"],
            en: ["Hangul letters", "Pronunciation rules", "Writing practice", "Phoneme combinations", "Memory techniques"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习基本句型结构和敬语",
            en: "Learn basic sentence structures and honorifics"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 60,
          skills: {
            zh: ["基本句型", "助词使用", "动词变化", "敬语体系", "疑问句"],
            en: ["Basic sentence patterns", "Particle usage", "Verb conjugation", "Honorific system", "Questions"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握800-1200个高频词汇",
            en: "Master 800-1200 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 50,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "方位交通", "颜色形容"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Directions and transport", "Colors and descriptions"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂语法和敬语系统",
            en: "Learn complex grammar and honorific systems"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 100,
          skills: {
            zh: ["复杂句型", "敬语运用", "条件句", "被动语态", "使役语态"],
            en: ["Complex sentence patterns", "Honorific usage", "Conditional sentences", "Passive voice", "Causative voice"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和文化韩语",
            en: "Business, academic, and cultural Korean"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 120,
          skills: {
            zh: ["商务韩语", "学术阅读", "文学欣赏", "演讲技巧", "跨文化交流"],
            en: ["Business Korean", "Academic reading", "Literary appreciation", "Presentation skills", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过韩国媒体创造语言环境",
            en: "Create language environment through Korean media"
          },
          techniques: {
            zh: ["K-pop学习", "韩剧观看", "音乐收听", "新闻阅读", "社交媒体"],
            en: ["K-pop learning", "K-drama watching", "Music listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与韩语母语者互动练习",
            en: "Practice with native Korean speakers"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "LingoDeer", "Talk To Me In Korean", "KoreanClass101", "Eggbun"],
            en: ["Duolingo", "LingoDeer", "Talk To Me In Korean", "KoreanClass101", "Eggbun"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Naver Dictionary", "Daum Dictionary", "Papago", "Google Translate", "Korean-English Dictionary"],
            en: ["Naver Dictionary", "Daum Dictionary", "Papago", "Google Translate", "Korean-English Dictionary"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["KBS News", "K-pop", "K-dramas", "YouTube", "播客"],
            en: ["KBS News", "K-pop", "K-dramas", "YouTube", "Podcasts"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "6-10个月",
        en: "6-10 months"
      },
      intermediate: {
        zh: "2-3年",
        en: "2-3 years"
      },
      advanced: {
        zh: "3-4年",
        en: "3-4 years"
      },
      totalHours: 1100,
      basic: 500,
      intermediateHours: 1000,
      advancedHours: 1800
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 4,
      pronunciation: 3,
      writing: 3,
      vocabulary: 4
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Talk To Me In Korean",
          description: {
            zh: "韩语学习专用应用",
            en: "Dedicated Korean learning app"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "LingoDeer",
          description: {
            zh: "亚洲语言学习",
            en: "Asian language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Korean Made Simple",
          author: "Billy Go",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        },
        {
          title: "Integrated Korean",
          author: "Young-mee Yu Cho",
          level: {
            zh: "初中级",
            en: "Beginner-Intermediate"
          }
        },
        {
          title: "Korean Grammar in Use",
          author: "Ahn Jean-myung",
          level: {
            zh: "中级",
            en: "Intermediate"
          }
        }
      ],
      websites: [
        {
          name: "Talk To Me In Korean",
          url: "https://talktomeinkorean.com",
          description: {
            zh: "免费韩语学习网站",
            en: "Free Korean learning website"
          }
        },
        {
          name: "KoreanClass101",
          url: "https://koreanclass101.com",
          description: {
            zh: "韩语学习平台",
            en: "Korean learning platform"
          }
        },
        {
          name: "KBS World",
          url: "https://world.kbs.co.kr",
          description: {
            zh: "KBS世界新闻",
            en: "KBS World News"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["娱乐产业", "科技公司", "翻译口译", "国际贸易", "教育培训", "文化交流"],
        en: ["Entertainment industry", "Tech companies", "Translation", "International trade", "Education", "Cultural exchange"]
      },
      averageSalary: {
        zh: "55,000-105,000美元",
        en: "$55,000-105,000"
      },
      jobGrowth: {
        zh: "增长率22%",
        en: "22% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["韩国", "朝鲜"],
        en: ["South Korea", "North Korea"]
      },
      businessHubs: {
        zh: ["首尔", "釜山", "大邱", "仁川", "光州", "大田"],
        en: ["Seoul", "Busan", "Daegu", "Incheon", "Gwangju", "Daejeon"]
      },
      culturalSites: {
        zh: ["景福宫", "昌德宫", "南山塔", "济州岛", "釜山海云台", "庆州佛国寺"],
        en: ["Gyeongbokgung Palace", "Changdeokgung Palace", "N Seoul Tower", "Jeju Island", "Haeundae Beach", "Bulguksa Temple"]
      }
    }
  },

  italian: {
    id: "italian",
    code: "it",
    flag: "🇮🇹",
    name: "Italian",
    nameEn: "Italian",
    nameZh: "意大利语",
    nativeName: "Italiano",
    description: {
      zh: "艺术、美食和设计的语言",
      en: "Language of art, cuisine and design"
    },
    difficulty: 2,
    speakers: {
      native: 65000000,
      total: 85000000,
      countries: {
        zh: ["意大利", "瑞士", "圣马力诺", "梵蒂冈"],
        en: ["Italy", "Switzerland", "San Marino", "Vatican City"]
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
    tags: {
      zh: ["浪漫语族", "艺术", "美食"],
      en: ["Romance languages", "Art", "Cuisine"]
    },
    studyTime: {
      zh: "8个月",
      en: "8 months"
    },
    usage: {
      zh: ["文化", "旅游", "艺术"],
      en: ["Culture", "Travel", "Art"]
    },
    resources: {
      zh: ["意大利电影", "音乐歌剧", "艺术史"],
      en: ["Italian cinema", "Music & opera", "Art history"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "意大利语起源于托斯卡纳方言，经过但丁、彼特拉克等文学大师的贡献，成为文艺复兴时期的重要语言。意大利语在艺术、音乐、时尚、美食领域具有深远影响，是欧洲文化的重要组成部分。",
        en: "Italian originated from Tuscan dialect, developed through contributions of literary masters like Dante and Petrarch to become an important language during the Renaissance. Italian has profound influence in art, music, fashion, and cuisine, forming an integral part of European culture."
      },
      traditions: {
        zh: ["歌剧文化", "时尚设计", "美食艺术", "家族观念", "宗教传统", "艺术欣赏"],
        en: ["Opera culture", "Fashion design", "Culinary arts", "Family values", "Religious traditions", "Art appreciation"]
      },
      festivals: {
        zh: ["威尼斯狂欢节", "佛罗伦萨艺术节", "罗马节庆", "圣灵节", "圣诞节", "复活节"],
        en: ["Venice Carnival", "Florence Art Festival", "Rome celebrations", "Pentecost", "Christmas", "Easter"]
      },
      cuisine: {
        zh: ["意大利面", "披萨", "意式冰淇淋", "咖啡文化", "红酒", "奶酪"],
        en: ["Pasta", "Pizza", "Gelato", "Coffee culture", "Wine", "Cheese"]
      },
      arts: {
        zh: ["文艺复兴艺术", "歌剧", "雕塑", "建筑", "文学", "时尚设计"],
        en: ["Renaissance art", "Opera", "Sculpture", "Architecture", "Literature", "Fashion design"]
      },
      modernCulture: {
        zh: ["时尚产业", "汽车制造", "电影产业", "美食文化", "足球文化", "现代艺术"],
        en: ["Fashion industry", "Car manufacturing", "Film industry", "Culinary culture", "Football culture", "Modern art"]
      }
    },

    // Language metadata
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

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "语音基础",
            en: "Phonetic Foundations"
          },
          description: {
            zh: "掌握意大利语发音规则",
            en: "Master Italian pronunciation rules"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 20,
          skills: {
            zh: ["元音发音", "辅音发音", "重音规则", "语调模式", "连读规则"],
            en: ["Vowel sounds", "Consonant sounds", "Stress patterns", "Intonation patterns", "Liaison rules"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习名词性别和动词变位",
            en: "Learn noun gender and verb conjugations"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 35,
          skills: {
            zh: ["名词性别", "形容词配合", "动词变位", "基本时态", "疑问句"],
            en: ["Noun gender", "Adjective agreement", "Verb conjugation", "Basic tenses", "Questions"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握600-1000个高频词汇",
            en: "Master 600-1000 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "方位交通", "颜色形容"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Directions and transport", "Colors and descriptions"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复合时态和虚拟语气",
            en: "Learn compound tenses and subjunctive mood"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 50,
          skills: {
            zh: ["复合过去时", "未完成过去时", "虚拟语气", "条件句", "间接引语"],
            en: ["Passato prossimo", "Imperfetto", "Subjunctive mood", "Conditional sentences", "Indirect speech"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和文化意大利语",
            en: "Business, academic, and cultural Italian"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 70,
          skills: {
            zh: ["商务写作", "学术阅读", "文学欣赏", "演讲技巧", "跨文化交流"],
            en: ["Business writing", "Academic reading", "Literary appreciation", "Presentation skills", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过意大利媒体创造语言环境",
            en: "Create language environment through Italian media"
          },
          techniques: {
            zh: ["意大利电影", "意大利音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Italian films", "Italian music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与意大利语母语者互动练习",
            en: "Practice with native Italian speakers"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "ItalianPod101"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "FluentU", "ItalianPod101"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["WordReference", "Linguee", "Reverso", "Collins", "Google Translate"],
            en: ["WordReference", "Linguee", "Reverso", "Collins", "Google Translate"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["RAI", "La Repubblica", "Corriere della Sera", "Netflix意大利", "YouTube"],
            en: ["RAI", "La Repubblica", "Corriere della Sera", "Netflix Italian", "YouTube"]
          }
        }
      ]
    },

    // Learning time estimate
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
      totalHours: 600,
      basic: 150,
      intermediateHours: 300,
      advancedHours: 600
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 3,
      pronunciation: 2,
      writing: 2,
      vocabulary: 3
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Busuu",
          description: {
            zh: "AI辅助学习",
            en: "AI-assisted learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Italian Made Simple",
          author: "Cristina Mazzoni",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        },
        {
          title: "Practice Makes Perfect Italian Grammar",
          author: "Paola Nanni-Tate",
          level: {
            zh: "中级",
            en: "Intermediate"
          }
        },
        {
          title: "Advanced Italian Grammar",
          author: "Anna Proudfoot",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        }
      ],
      websites: [
        {
          name: "One World Italiano",
          url: "https://oneworlditaliano.com",
          description: {
            zh: "意大利语学习网站",
            en: "Italian learning website"
          }
        },
        {
          name: "Italian Language Guide",
          url: "https://italianlanguageguide.com",
          description: {
            zh: "意大利语指南",
            en: "Italian language guide"
          }
        },
        {
          name: "RAI Learning",
          url: "https://italiano.rai.it",
          description: {
            zh: "RAI官方意大利语学习",
            en: "Official RAI Italian learning"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["时尚设计", "艺术文化", "旅游酒店", "翻译口译", "教育培训", "美食餐饮"],
        en: ["Fashion design", "Arts and culture", "Tourism and hospitality", "Translation", "Education", "Culinary arts"]
      },
      averageSalary: {
        zh: "40,000-75,000美元",
        en: "$40,000-75,000"
      },
      jobGrowth: {
        zh: "增长率10%",
        en: "10% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["意大利", "瑞士", "圣马力诺", "梵蒂冈"],
        en: ["Italy", "Switzerland", "San Marino", "Vatican City"]
      },
      businessHubs: {
        zh: ["米兰", "罗马", "佛罗伦萨", "都灵", "那不勒斯", "威尼斯"],
        en: ["Milan", "Rome", "Florence", "Turin", "Naples", "Venice"]
      },
      culturalSites: {
        zh: ["罗马斗兽场", "比萨斜塔", "威尼斯水城", "佛罗伦萨大教堂", "米兰大教堂", "庞贝古城"],
        en: ["Colosseum", "Leaning Tower of Pisa", "Venice canals", "Florence Cathedral", "Milan Cathedral", "Pompeii"]
      }
    }
  },

  // Portuguese language data
  portuguese: {
    id: "portuguese",
    code: "pt",
    flag: "🇵🇹",
    name: "Portuguese",
    nameEn: "Portuguese",
    nameZh: "葡萄牙语",
    nativeName: "Português",
    description: {
      zh: "全球第五大语言，巴西官方语言，南美和非洲的重要语言",
      en: "5th most spoken language globally, official language of Brazil, important in South America and Africa"
    },
    difficulty: 2,
    speakers: {
      native: 260000000,
      total: 280000000,
      countries: {
        zh: ["巴西", "葡萄牙", "安哥拉", "莫桑比克", "几内亚比绍", "佛得角", "圣多美和普林西比", "东帝汶", "澳门", "赤道几内亚"],
        en: ["Brazil", "Portugal", "Angola", "Mozambique", "Guinea-Bissau", "Cape Verde", "São Tomé and Príncipe", "East Timor", "Macau", "Equatorial Guinea"]
      }
    },
    regions: {
      zh: ["南美洲", "欧洲", "非洲", "亚洲"],
      en: ["South America", "Europe", "Africa", "Asia"]
    },
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    script: {
      zh: "拉丁字母",
      en: "Latin alphabet"
    },
    tags: {
      zh: ["罗曼语族", "南美通用", "商务文化"],
      en: ["Romance languages", "South American", "Business & culture"]
    },
    studyTime: {
      zh: "8个月",
      en: "8 months"
    },
    usage: {
      zh: ["国际商务", "文化交流", "旅游业"],
      en: ["International business", "Cultural exchange", "Tourism"]
    },
    resources: {
      zh: ["丰富资源", "巴西文化", "在线课程"],
      en: ["Rich resources", "Brazilian culture", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "葡萄牙语起源于拉丁语，随着葡萄牙帝国的扩张传播到世界各地。今天，巴西是最大的葡萄牙语国家，葡萄牙语在非洲和亚洲也有重要地位。",
        en: "Portuguese originated from Latin and spread worldwide through Portuguese imperial expansion. Today, Brazil is the largest Portuguese-speaking country, with Portuguese having important status in Africa and Asia."
      },
      traditions: {
        zh: ["圣诞节", "复活节", "狂欢节", "圣若昂节", "法朵音乐", "足球文化"],
        en: ["Christmas", "Easter", "Carnival", "São João", "Fado music", "Football culture"]
      },
      festivals: {
        zh: ["狂欢节", "圣若昂节", "复活节", "圣诞节", "独立日", "共和国日"],
        en: ["Carnival", "São João", "Easter", "Christmas", "Independence Day", "Republic Day"]
      },
      cuisine: {
        zh: ["巴西烤肉", "葡式蛋挞", "海鲜饭", "黑豆饭", "阿萨伊", "卡布奇诺"],
        en: ["Brazilian barbecue", "Pastéis de nata", "Seafood rice", "Feijoada", "Açaí", "Cappuccino"]
      },
      arts: {
        zh: ["法朵音乐", "桑巴舞", "巴西文学", "现代艺术", "建筑艺术", "电影文化"],
        en: ["Fado music", "Samba dance", "Brazilian literature", "Modern art", "Architecture", "Film culture"]
      },
      modernCulture: {
        zh: ["桑巴文化", "足球狂热", "音乐节", "街头艺术", "时尚设计", "科技发展"],
        en: ["Samba culture", "Football passion", "Music festivals", "Street art", "Fashion design", "Tech development"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "pt",
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

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "基础发音",
            en: "Basic Pronunciation"
          },
          description: {
            zh: "掌握葡萄牙语音标和基本发音规则",
            en: "Master Portuguese phonetics and basic pronunciation rules"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 20,
          skills: {
            zh: ["音标学习", "鼻音发音", "重音规则", "语调练习", "连读技巧"],
            en: ["Phonetic symbols", "Nasal sounds", "Stress patterns", "Intonation practice", "Liaison techniques"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习基本时态和句型结构",
            en: "Learn basic tenses and sentence structures"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 35,
          skills: {
            zh: ["现在时", "过去时", "将来时", "疑问句", "否定句"],
            en: ["Present tense", "Past tense", "Future tense", "Questions", "Negations"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握1000-2000个高频词汇",
            en: "Master 1000-2000 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "颜色形容", "方位交通"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Colors and descriptions", "Directions and transport"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "学习复杂时态和语法结构",
            en: "Learn complex tenses and grammatical structures"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 55,
          skills: {
            zh: ["完成时态", "虚拟语气", "条件句", "间接引语", "定语从句"],
            en: ["Perfect tenses", "Subjunctive mood", "Conditional sentences", "Indirect speech", "Relative clauses"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、文学和专业葡萄牙语应用",
            en: "Business, literary, and professional Portuguese applications"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 80,
          skills: {
            zh: ["商务写作", "文学阅读", "演讲技巧", "文化理解", "跨文化交流"],
            en: ["Business writing", "Literary reading", "Presentation skills", "Cultural understanding", "Cross-cultural communication"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造葡萄牙语环境",
            en: "Create Portuguese environment through multimedia content"
          },
          techniques: {
            zh: ["巴西电影", "葡萄牙音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Brazilian films", "Portuguese music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Priberam", "Infopédia", "Linguee", "Google Translate", "Reverso"],
            en: ["Priberam", "Infopédia", "Linguee", "Google Translate", "Reverso"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix", "YouTube", "Globo", "RTP", "巴西新闻"],
            en: ["Netflix", "YouTube", "Globo", "RTP", "Brazilian news"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "3-5个月",
        en: "3-5 months"
      },
      intermediate: {
        zh: "8个月-1.5年",
        en: "8 months - 1.5 years"
      },
      advanced: {
        zh: "1.5-3年",
        en: "1.5-3 years"
      },
      totalHours: 500,
      basic: 120,
      intermediateHours: 250,
      advancedHours: 450
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 3,
      pronunciation: 3,
      writing: 2,
      vocabulary: 2
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Rosetta Stone",
          description: {
            zh: "沉浸式语言学习",
            en: "Immersive language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Gramática Ativa",
          author: "Isabel Coimbra",
          level: {
            zh: "初中级",
            en: "Intermediate"
          }
        },
        {
          title: "Gramática do Português",
          author: "Eduardo Paiva Raposo",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "Português XXI",
          author: "Ana Tavares",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        }
      ],
      websites: [
        {
          name: "Ciberdúvidas",
          url: "https://ciberduvidas.iscte-iul.pt",
          description: {
            zh: "葡萄牙语语法问答网站",
            en: "Portuguese grammar Q&A website"
          }
        },
        {
          name: "Instituto Camões",
          url: "https://camoes.pt",
          description: {
            zh: "葡萄牙语学习官方机构",
            en: "Official Portuguese learning institution"
          }
        },
        {
          name: "TV Brasil",
          url: "https://tvbrasil.ebc.com.br",
          description: {
            zh: "巴西官方电视台",
            en: "Brazilian official TV station"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际商务", "翻译口译", "教育培训", "旅游业", "新闻传媒", "科技产业"],
        en: ["International business", "Translation", "Education", "Tourism", "Media", "Technology"]
      },
      averageSalary: {
        zh: "40,000-80,000美元",
        en: "$40,000-80,000"
      },
      jobGrowth: {
        zh: "增长率15%",
        en: "15% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["巴西", "葡萄牙", "安哥拉", "莫桑比克", "佛得角", "东帝汶"],
        en: ["Brazil", "Portugal", "Angola", "Mozambique", "Cape Verde", "East Timor"]
      },
      businessHubs: {
        zh: ["圣保罗", "里约热内卢", "里斯本", "波尔图", "罗安达", "马普托"],
        en: ["São Paulo", "Rio de Janeiro", "Lisbon", "Porto", "Luanda", "Maputo"]
      },
      culturalSites: {
        zh: ["基督像", "救世主基督像", "贝伦塔", "热罗尼莫斯修道院", "伊瓜苏瀑布"],
        en: ["Christ the Redeemer", "Cristo Redentor", "Belém Tower", "Jerónimos Monastery", "Iguazu Falls"]
      }
    }
  },

  // Russian language data
  russian: {
    id: "russian",
    code: "ru",
    flag: "🇷🇺",
    name: "Russian",
    nameEn: "Russian",
    nameZh: "俄语",
    nativeName: "Русский",
    description: {
      zh: "斯拉夫语族最大语言，联合国官方语言，欧亚大陆重要语言",
      en: "Largest Slavic language, UN official language, important across Eurasia"
    },
    difficulty: 4,
    speakers: {
      native: 150000000,
      total: 260000000,
      countries: {
        zh: ["俄罗斯", "白俄罗斯", "哈萨克斯坦", "吉尔吉斯斯坦", "塔吉克斯坦", "乌兹别克斯坦", "乌克兰", "摩尔多瓦", "拉脱维亚", "爱沙尼亚"],
        en: ["Russia", "Belarus", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan", "Ukraine", "Moldova", "Latvia", "Estonia"]
      }
    },
    regions: {
      zh: ["欧洲", "亚洲", "中亚", "高加索"],
      en: ["Europe", "Asia", "Central Asia", "Caucasus"]
    },
    family: {
      zh: "印欧语系",
      en: "Indo-European"
    },
    script: {
      zh: "西里尔字母",
      en: "Cyrillic alphabet"
    },
    tags: {
      zh: ["斯拉夫语族", "欧亚通用", "文学科技"],
      en: ["Slavic languages", "Eurasian", "Literature & tech"]
    },
    studyTime: {
      zh: "12个月",
      en: "12 months"
    },
    usage: {
      zh: ["国际交流", "文学阅读", "科技研究"],
      en: ["International communication", "Literary reading", "Scientific research"]
    },
    resources: {
      zh: ["丰富文学", "科技资源", "在线课程"],
      en: ["Rich literature", "Tech resources", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "俄语起源于古东斯拉夫语，经过历史演变成为今天的俄语。作为俄罗斯帝国和苏联的官方语言，俄语在文学、科学、艺术等领域有着重要影响。",
        en: "Russian originated from Old East Slavic and evolved through history to become today's Russian. As the official language of the Russian Empire and Soviet Union, Russian has had significant influence in literature, science, and arts."
      },
      traditions: {
        zh: ["东正教圣诞节", "复活节", "谢肉节", "胜利日", "芭蕾舞", "茶文化"],
        en: ["Orthodox Christmas", "Easter", "Maslenitsa", "Victory Day", "Ballet", "Tea culture"]
      },
      festivals: {
        zh: ["新年", "东正教圣诞节", "妇女节", "胜利日", "俄罗斯日", "谢肉节"],
        en: ["New Year", "Orthodox Christmas", "Women's Day", "Victory Day", "Russia Day", "Maslenitsa"]
      },
      cuisine: {
        zh: ["红菜汤", "饺子", "鱼子酱", "伏特加", "黑面包", "俄式茶饮"],
        en: ["Borscht", "Pelmeni", "Caviar", "Vodka", "Black bread", "Russian tea"]
      },
      arts: {
        zh: ["俄罗斯文学", "芭蕾舞", "古典音乐", "绘画艺术", "建筑风格", "电影文化"],
        en: ["Russian literature", "Ballet", "Classical music", "Painting art", "Architecture", "Film culture"]
      },
      modernCulture: {
        zh: ["现代文学", "电子音乐", "科技发展", "体育文化", "时尚设计", "网络文化"],
        en: ["Modern literature", "Electronic music", "Tech development", "Sports culture", "Fashion design", "Internet culture"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "ru",
      family: {
        zh: "印欧语系",
        en: "Indo-European"
      },
      branch: {
        zh: "斯拉夫语族",
        en: "Slavic"
      },
      writingSystem: {
        zh: ["西里尔字母"],
        en: ["Cyrillic alphabet"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "西里尔字母",
            en: "Cyrillic Alphabet"
          },
          description: {
            zh: "掌握俄语西里尔字母和基本发音",
            en: "Master Russian Cyrillic alphabet and basic pronunciation"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 25,
          skills: {
            zh: ["字母识别", "发音练习", "书写练习", "音标学习", "重音规则"],
            en: ["Letter recognition", "Pronunciation practice", "Writing practice", "Phonetic symbols", "Stress patterns"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习俄语基本语法和变格系统",
            en: "Learn basic Russian grammar and case system"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["名词变格", "动词变位", "形容词变化", "代词使用", "基本句型"],
            en: ["Noun declension", "Verb conjugation", "Adjective agreement", "Pronoun usage", "Basic sentence patterns"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握1000-2000个高频词汇",
            en: "Master 1000-2000 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 35,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "颜色形容", "方位交通"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Colors and descriptions", "Directions and transport"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "深入学习复杂语法结构",
            en: "Deepen understanding of complex grammatical structures"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 60,
          skills: {
            zh: ["完成体动词", "运动动词", "数词变格", "复合句", "间接引语"],
            en: ["Perfective verbs", "Verbs of motion", "Numeral declension", "Complex sentences", "Indirect speech"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "文学、学术和专业俄语应用",
            en: "Literary, academic, and professional Russian applications"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 90,
          skills: {
            zh: ["文学阅读", "学术写作", "演讲技巧", "文化理解", "专业术语"],
            en: ["Literary reading", "Academic writing", "Presentation skills", "Cultural understanding", "Professional terminology"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造俄语环境",
            en: "Create Russian environment through multimedia content"
          },
          techniques: {
            zh: ["俄语电影", "俄罗斯音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Russian films", "Russian music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Yandex Dictionary", "Multitran", "Linguee", "Google Translate", "ABBYY Lingvo"],
            en: ["Yandex Dictionary", "Multitran", "Linguee", "Google Translate", "ABBYY Lingvo"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix", "YouTube", "RT News", "TASS", "俄语新闻"],
            en: ["Netflix", "YouTube", "RT News", "TASS", "Russian news"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "4-6个月",
        en: "4-6 months"
      },
      intermediate: {
        zh: "1-2年",
        en: "1-2 years"
      },
      advanced: {
        zh: "2-4年",
        en: "2-4 years"
      },
      totalHours: 800,
      basic: 150,
      intermediateHours: 400,
      advancedHours: 700
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 5,
      pronunciation: 3,
      writing: 4,
      vocabulary: 3
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Rosetta Stone",
          description: {
            zh: "沉浸式语言学习",
            en: "Immersive language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "The New Penguin Russian Course",
          author: "Nicholas J. Brown",
          level: {
            zh: "初中级",
            en: "Intermediate"
          }
        },
        {
          title: "Russian Grammar",
          author: "Terence Wade",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "Beginner's Russian",
          author: "Anna Kudyma",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        }
      ],
      websites: [
        {
          name: "Master Russian",
          url: "https://masterrussian.com",
          description: {
            zh: "俄语学习综合网站",
            en: "Comprehensive Russian learning website"
          }
        },
        {
          name: "Russian for Everyone",
          url: "https://russianforeveryone.com",
          description: {
            zh: "俄语语法学习网站",
            en: "Russian grammar learning website"
          }
        },
        {
          name: "RT News",
          url: "https://rt.com",
          description: {
            zh: "俄语新闻网站",
            en: "Russian news website"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际关系", "翻译口译", "教育培训", "能源产业", "科技研究", "文化交流"],
        en: ["International relations", "Translation", "Education", "Energy industry", "Tech research", "Cultural exchange"]
      },
      averageSalary: {
        zh: "45,000-90,000美元",
        en: "$45,000-90,000"
      },
      jobGrowth: {
        zh: "增长率10%",
        en: "10% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["俄罗斯", "白俄罗斯", "哈萨克斯坦", "吉尔吉斯斯坦", "塔吉克斯坦", "乌兹别克斯坦"],
        en: ["Russia", "Belarus", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan"]
      },
      businessHubs: {
        zh: ["莫斯科", "圣彼得堡", "新西伯利亚", "叶卡捷琳堡", "明斯克", "阿拉木图"],
        en: ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg", "Minsk", "Almaty"]
      },
      culturalSites: {
        zh: ["红场", "克里姆林宫", "冬宫", "圣瓦西里大教堂", "贝加尔湖"],
        en: ["Red Square", "Kremlin", "Hermitage", "St. Basil's Cathedral", "Lake Baikal"]
      }
    }
  },

  // Arabic language data
  arabic: {
    id: "arabic",
    code: "ar",
    flag: "🇸🇦",
    name: "Arabic",
    nameEn: "Arabic",
    nameZh: "阿拉伯语",
    nativeName: "العربية",
    description: {
      zh: "闪米特语族重要语言，伊斯兰教圣语，中东和北非地区通用语言",
      en: "Important Semitic language, sacred language of Islam, lingua franca of Middle East and North Africa"
    },
    difficulty: 5,
    speakers: {
      native: 310000000,
      total: 420000000,
      countries: {
        zh: ["沙特阿拉伯", "埃及", "阿尔及利亚", "摩洛哥", "伊拉克", "苏丹", "也门", "叙利亚", "突尼斯", "约旦"],
        en: ["Saudi Arabia", "Egypt", "Algeria", "Morocco", "Iraq", "Sudan", "Yemen", "Syria", "Tunisia", "Jordan"]
      }
    },
    regions: {
      zh: ["中东", "北非", "西亚", "阿拉伯半岛"],
      en: ["Middle East", "North Africa", "West Asia", "Arabian Peninsula"]
    },
    family: {
      zh: "亚非语系",
      en: "Afro-Asiatic"
    },
    script: {
      zh: "阿拉伯字母",
      en: "Arabic alphabet"
    },
    tags: {
      zh: ["闪米特语族", "宗教文化", "商务外交"],
      en: ["Semitic languages", "Religious culture", "Business & diplomacy"]
    },
    studyTime: {
      zh: "18个月",
      en: "18 months"
    },
    usage: {
      zh: ["宗教学习", "国际外交", "商务贸易"],
      en: ["Religious study", "International diplomacy", "Business trade"]
    },
    resources: {
      zh: ["古兰经", "阿拉伯文学", "在线资源"],
      en: ["Quran", "Arabic literature", "Online resources"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "阿拉伯语起源于阿拉伯半岛，随着伊斯兰教的传播而广泛使用。作为古兰经的语言，阿拉伯语在伊斯兰世界具有神圣地位，也是联合国官方语言之一。",
        en: "Arabic originated from the Arabian Peninsula and spread widely with the expansion of Islam. As the language of the Quran, Arabic holds sacred status in the Islamic world and is one of the UN's official languages."
      },
      traditions: {
        zh: ["斋月", "开斋节", "古尔邦节", "朝觐", "每日祈祷", "阿拉伯书法"],
        en: ["Ramadan", "Eid al-Fitr", "Eid al-Adha", "Hajj", "Daily prayers", "Arabic calligraphy"]
      },
      festivals: {
        zh: ["开斋节", "古尔邦节", "圣纪节", "登霄节", "新年", "国庆节"],
        en: ["Eid al-Fitr", "Eid al-Adha", "Mawlid", "Isra and Mi'raj", "New Year", "National Day"]
      },
      cuisine: {
        zh: ["烤羊肉", "鹰嘴豆泥", "塔布勒沙拉", "法拉费", "阿拉伯咖啡", "椰枣"],
        en: ["Grilled lamb", "Hummus", "Tabbouleh", "Falafel", "Arabic coffee", "Dates"]
      },
      arts: {
        zh: ["阿拉伯书法", "伊斯兰艺术", "阿拉伯音乐", "诗歌文学", "建筑艺术", "地毯编织"],
        en: ["Arabic calligraphy", "Islamic art", "Arabic music", "Poetry literature", "Architecture", "Carpet weaving"]
      },
      modernCulture: {
        zh: ["现代文学", "流行音乐", "电影产业", "时尚设计", "科技发展", "社交媒体"],
        en: ["Modern literature", "Pop music", "Film industry", "Fashion design", "Tech development", "Social media"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "ar",
      family: {
        zh: "亚非语系",
        en: "Afro-Asiatic"
      },
      branch: {
        zh: "闪米特语族",
        en: "Semitic"
      },
      writingSystem: {
        zh: ["阿拉伯字母"],
        en: ["Arabic alphabet"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "阿拉伯字母",
            en: "Arabic Alphabet"
          },
          description: {
            zh: "掌握阿拉伯字母和基本发音",
            en: "Master Arabic alphabet and basic pronunciation"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 30,
          skills: {
            zh: ["字母识别", "发音练习", "书写练习", "连写规则", "重音规则"],
            en: ["Letter recognition", "Pronunciation practice", "Writing practice", "Ligature rules", "Stress patterns"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习阿拉伯语基本语法和词根系统",
            en: "Learn basic Arabic grammar and root system"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 50,
          skills: {
            zh: ["词根系统", "动词变位", "名词变格", "形容词变化", "基本句型"],
            en: ["Root system", "Verb conjugation", "Noun declension", "Adjective agreement", "Basic sentence patterns"]
          }
        },
        {
          title: {
            zh: "日常词汇",
            en: "Daily Vocabulary"
          },
          description: {
            zh: "掌握1000-2000个高频词汇",
            en: "Master 1000-2000 high-frequency words"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["家庭词汇", "食物饮料", "数字时间", "颜色形容", "方位交通"],
            en: ["Family vocabulary", "Food and drinks", "Numbers and time", "Colors and descriptions", "Directions and transport"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "深入学习复杂语法结构",
            en: "Deepen understanding of complex grammatical structures"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 70,
          skills: {
            zh: ["派生词", "复合句", "间接引语", "条件句", "被动语态"],
            en: ["Derivatives", "Complex sentences", "Indirect speech", "Conditional sentences", "Passive voice"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "古典阿拉伯语、文学和宗教文本阅读",
            en: "Classical Arabic, literary and religious text reading"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 100,
          skills: {
            zh: ["古典阿拉伯语", "古兰经阅读", "文学欣赏", "学术写作", "文化理解"],
            en: ["Classical Arabic", "Quran reading", "Literary appreciation", "Academic writing", "Cultural understanding"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造阿拉伯语环境",
            en: "Create Arabic environment through multimedia content"
          },
          techniques: {
            zh: ["阿拉伯电影", "阿拉伯音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Arabic films", "Arabic music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Almaany", "Reverso", "Linguee", "Google Translate", "Hans Wehr"],
            en: ["Almaany", "Reverso", "Linguee", "Google Translate", "Hans Wehr"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix", "YouTube", "Al Jazeera", "BBC Arabic", "阿拉伯新闻"],
            en: ["Netflix", "YouTube", "Al Jazeera", "BBC Arabic", "Arabic news"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "6-9个月",
        en: "6-9 months"
      },
      intermediate: {
        zh: "1.5-3年",
        en: "1.5-3 years"
      },
      advanced: {
        zh: "3-5年",
        en: "3-5 years"
      },
      totalHours: 1000,
      basic: 200,
      intermediateHours: 500,
      advancedHours: 900
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 5,
      pronunciation: 4,
      writing: 5,
      vocabulary: 4
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Rosetta Stone",
          description: {
            zh: "沉浸式语言学习",
            en: "Immersive language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Al-Kitaab fii Ta'allum al-'Arabiyya",
          author: "Kristen Brustad",
          level: {
            zh: "初中级",
            en: "Intermediate"
          }
        },
        {
          title: "A Reference Grammar of Modern Standard Arabic",
          author: "Karin C. Ryding",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "Arabic for Dummies",
          author: "Amine Bouchentouf",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        }
      ],
      websites: [
        {
          name: "Arabic Online",
          url: "https://arabiconline.eu",
          description: {
            zh: "阿拉伯语学习综合网站",
            en: "Comprehensive Arabic learning website"
          }
        },
        {
          name: "Madinah Arabic",
          url: "https://madinaarabic.com",
          description: {
            zh: "阿拉伯语语法学习网站",
            en: "Arabic grammar learning website"
          }
        },
        {
          name: "Al Jazeera Learning",
          url: "https://learning.aljazeera.net",
          description: {
            zh: "半岛电视台学习平台",
            en: "Al Jazeera learning platform"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际关系", "翻译口译", "教育培训", "能源产业", "新闻传媒", "宗教研究"],
        en: ["International relations", "Translation", "Education", "Energy industry", "Media", "Religious studies"]
      },
      averageSalary: {
        zh: "50,000-100,000美元",
        en: "$50,000-100,000"
      },
      jobGrowth: {
        zh: "增长率12%",
        en: "12% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["沙特阿拉伯", "埃及", "阿联酋", "摩洛哥", "约旦", "突尼斯"],
        en: ["Saudi Arabia", "Egypt", "UAE", "Morocco", "Jordan", "Tunisia"]
      },
      businessHubs: {
        zh: ["迪拜", "利雅得", "开罗", "多哈", "科威特城", "阿布扎比"],
        en: ["Dubai", "Riyadh", "Cairo", "Doha", "Kuwait City", "Abu Dhabi"]
      },
      culturalSites: {
        zh: ["麦加", "麦地那", "金字塔", "佩特拉", "蓝色清真寺", "死海"],
        en: ["Mecca", "Medina", "Pyramids", "Petra", "Blue Mosque", "Dead Sea"]
      }
    }
  },

  // Mandarin language data
  mandarin: {
    id: "mandarin",
    code: "zh",
    flag: "🇨🇳",
    name: "Mandarin",
    nameEn: "Mandarin Chinese",
    nameZh: "普通话",
    nativeName: "普通话",
    description: {
      zh: "世界使用人数最多的语言，中华文化的重要载体，全球商务交流的重要工具",
      en: "Most spoken language in the world, important carrier of Chinese culture, vital tool for global business communication"
    },
    difficulty: 5,
    speakers: {
      native: 920000000,
      total: 1100000000,
      countries: {
        zh: ["中国", "台湾", "新加坡", "马来西亚", "香港", "澳门", "泰国", "菲律宾", "美国", "加拿大"],
        en: ["China", "Taiwan", "Singapore", "Malaysia", "Hong Kong", "Macau", "Thailand", "Philippines", "United States", "Canada"]
      }
    },
    regions: {
      zh: ["东亚", "东南亚", "北美", "大洋洲"],
      en: ["East Asia", "Southeast Asia", "North America", "Oceania"]
    },
    family: {
      zh: "汉藏语系",
      en: "Sino-Tibetan"
    },
    script: {
      zh: "汉字",
      en: "Chinese characters"
    },
    tags: {
      zh: ["汉藏语系", "东亚通用", "商务科技"],
      en: ["Sino-Tibetan", "East Asian", "Business & tech"]
    },
    studyTime: {
      zh: "18个月",
      en: "18 months"
    },
    usage: {
      zh: ["国际商务", "文化交流", "学术研究"],
      en: ["International business", "Cultural exchange", "Academic research"]
    },
    resources: {
      zh: ["丰富资源", "中华文化", "在线课程"],
      en: ["Abundant resources", "Chinese culture", "Online courses"]
    },

    // Cultural information
    culturalInfo: {
      history: {
        zh: "普通话是中华人民共和国的官方语言，以北京语音为标准音，以北方话为基础方言。作为世界上使用人数最多的语言，普通话承载着五千年的中华文明。",
        en: "Mandarin is the official language of the People's Republic of China, with Beijing pronunciation as the standard and Northern dialects as the base. As the world's most spoken language, Mandarin carries 5,000 years of Chinese civilization."
      },
      traditions: {
        zh: ["春节", "中秋节", "端午节", "清明节", "重阳节", "元宵节"],
        en: ["Spring Festival", "Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival", "Double Ninth Festival", "Lantern Festival"]
      },
      festivals: {
        zh: ["春节", "中秋节", "端午节", "清明节", "国庆节", "劳动节"],
        en: ["Spring Festival", "Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival", "National Day", "Labor Day"]
      },
      cuisine: {
        zh: ["北京烤鸭", "小笼包", "麻婆豆腐", "宫保鸡丁", "饺子", "面条"],
        en: ["Peking duck", "Xiaolongbao", "Mapo tofu", "Kung Pao chicken", "Dumplings", "Noodles"]
      },
      arts: {
        zh: ["中国书法", "国画", "京剧", "古筝", "太极", "茶艺"],
        en: ["Chinese calligraphy", "Chinese painting", "Beijing Opera", "Guzheng", "Tai Chi", "Tea ceremony"]
      },
      modernCulture: {
        zh: ["现代文学", "流行音乐", "电影产业", "科技发展", "时尚设计", "网络文化"],
        en: ["Modern literature", "Pop music", "Film industry", "Tech development", "Fashion design", "Internet culture"]
      }
    },

    // Language metadata
    metadata: {
      iso639_1: "zh",
      family: {
        zh: "汉藏语系",
        en: "Sino-Tibetan"
      },
      branch: {
        zh: "汉语族",
        en: "Sinitic"
      },
      writingSystem: {
        zh: ["汉字"],
        en: ["Chinese characters"]
      }
    },

    // Learning guide
    learningGuide: {
      learningPath: [
        {
          title: {
            zh: "汉语拼音",
            en: "Pinyin"
          },
          description: {
            zh: "掌握汉语拼音系统和基本发音",
            en: "Master Chinese pinyin system and basic pronunciation"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 25,
          skills: {
            zh: ["拼音学习", "声调练习", "发音技巧", "拼读规则", "语音纠正"],
            en: ["Pinyin learning", "Tone practice", "Pronunciation techniques", "Spelling rules", "Phonetic correction"]
          }
        },
        {
          title: {
            zh: "基础汉字",
            en: "Basic Characters"
          },
          description: {
            zh: "学习常用汉字和基本笔画",
            en: "Learn common Chinese characters and basic strokes"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 40,
          skills: {
            zh: ["汉字结构", "笔画顺序", "偏旁部首", "字义理解", "书写练习"],
            en: ["Character structure", "Stroke order", "Radicals", "Meaning understanding", "Writing practice"]
          }
        },
        {
          title: {
            zh: "基础语法",
            en: "Basic Grammar"
          },
          description: {
            zh: "学习中文基本语法和句型结构",
            en: "Learn basic Chinese grammar and sentence structures"
          },
          level: {
            zh: "初级",
            en: "Beginner"
          },
          estimatedHours: 35,
          skills: {
            zh: ["基本句型", "词序规则", "量词使用", "时态表达", "疑问句"],
            en: ["Basic sentence patterns", "Word order rules", "Classifier usage", "Tense expression", "Questions"]
          }
        },
        {
          title: {
            zh: "中级语法",
            en: "Intermediate Grammar"
          },
          description: {
            zh: "深入学习复杂语法结构",
            en: "Deepen understanding of complex grammatical structures"
          },
          level: {
            zh: "中级",
            en: "Intermediate"
          },
          estimatedHours: 60,
          skills: {
            zh: ["复合句", "被动语态", "条件句", "比较句", "连词使用"],
            en: ["Complex sentences", "Passive voice", "Conditional sentences", "Comparative sentences", "Conjunction usage"]
          }
        },
        {
          title: {
            zh: "高级应用",
            en: "Advanced Applications"
          },
          description: {
            zh: "商务、学术和专业中文应用",
            en: "Business, academic, and professional Chinese applications"
          },
          level: {
            zh: "高级",
            en: "Advanced"
          },
          estimatedHours: 90,
          skills: {
            zh: ["商务写作", "学术阅读", "演讲技巧", "文化理解", "专业术语"],
            en: ["Business writing", "Academic reading", "Presentation skills", "Cultural understanding", "Professional terminology"]
          }
        }
      ],
      learningMethods: [
        {
          title: {
            zh: "沉浸式学习",
            en: "Immersive Learning"
          },
          description: {
            zh: "通过多媒体内容创造中文环境",
            en: "Create Chinese environment through multimedia content"
          },
          techniques: {
            zh: ["中文电影", "中文音乐", "播客收听", "新闻阅读", "社交媒体"],
            en: ["Chinese films", "Chinese music", "Podcast listening", "News reading", "Social media"]
          }
        },
        {
          title: {
            zh: "交流练习",
            en: "Communication Practice"
          },
          description: {
            zh: "与母语者互动提高口语流利度",
            en: "Interact with native speakers to improve fluency"
          },
          techniques: {
            zh: ["语言交换", "在线对话", "角色扮演", "情景模拟", "发音纠正"],
            en: ["Language exchange", "Online conversation", "Role-playing", "Scenario simulation", "Pronunciation correction"]
          }
        },
        {
          title: {
            zh: "系统学习",
            en: "Systematic Learning"
          },
          description: {
            zh: "结构化的语法和词汇学习",
            en: "Structured grammar and vocabulary study"
          },
          techniques: {
            zh: ["语法练习", "词汇卡片", "习题集", "模拟考试", "定期复习"],
            en: ["Grammar exercises", "Vocabulary flashcards", "Workbooks", "Mock exams", "Regular review"]
          }
        }
      ],
      learningTools: [
        {
          category: {
            zh: "在线课程",
            en: "Online Courses"
          },
          tools: {
            zh: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"],
            en: ["Duolingo", "Babbel", "Rosetta Stone", "Coursera", "edX"]
          }
        },
        {
          category: {
            zh: "词典工具",
            en: "Dictionary Tools"
          },
          tools: {
            zh: ["Pleco", "Hanping", "Linguee", "Google Translate", "Youdao"],
            en: ["Pleco", "Hanping", "Linguee", "Google Translate", "Youdao"]
          }
        },
        {
          category: {
            zh: "媒体资源",
            en: "Media Resources"
          },
          tools: {
            zh: ["Netflix", "YouTube", "CCTV", "人民日报", "中文新闻"],
            en: ["Netflix", "YouTube", "CCTV", "People's Daily", "Chinese news"]
          }
        }
      ]
    },

    // Learning time estimate
    learningTimeEstimate: {
      beginner: {
        zh: "6-9个月",
        en: "6-9 months"
      },
      intermediate: {
        zh: "1.5-3年",
        en: "1.5-3 years"
      },
      advanced: {
        zh: "3-5年",
        en: "3-5 years"
      },
      totalHours: 1000,
      basic: 200,
      intermediateHours: 500,
      advancedHours: 900
    },

    // Difficulty analysis
    difficultyAnalysis: {
      grammar: 3,
      pronunciation: 4,
      writing: 5,
      vocabulary: 4
    },

    // Learning resources
    learningResources: {
      apps: [
        {
          name: "Duolingo",
          description: {
            zh: "游戏化学习平台",
            en: "Gamified learning platform"
          },
          price: {
            zh: "免费",
            en: "Free"
          }
        },
        {
          name: "Babbel",
          description: {
            zh: "实用对话训练",
            en: "Practical conversation training"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        },
        {
          name: "Rosetta Stone",
          description: {
            zh: "沉浸式语言学习",
            en: "Immersive language learning"
          },
          price: {
            zh: "订阅制",
            en: "Subscription"
          }
        }
      ],
      books: [
        {
          title: "Integrated Chinese",
          author: "Yuehua Liu",
          level: {
            zh: "初中级",
            en: "Intermediate"
          }
        },
        {
          title: "New Practical Chinese Reader",
          author: "Liu Xun",
          level: {
            zh: "高级",
            en: "Advanced"
          }
        },
        {
          title: "Chinese Made Easy",
          author: "Yamin Ma",
          level: {
            zh: "初级",
            en: "Beginner"
          }
        }
      ],
      websites: [
        {
          name: "ChinesePod",
          url: "https://chinesepod.com",
          description: {
            zh: "中文学习播客平台",
            en: "Chinese learning podcast platform"
          }
        },
        {
          name: "HSK Online",
          url: "https://hskonline.com",
          description: {
            zh: "HSK考试学习网站",
            en: "HSK exam learning website"
          }
        },
        {
          name: "CCTV Learn Chinese",
          url: "https://cctv.com/learnchinese",
          description: {
            zh: "央视中文学习平台",
            en: "CCTV Chinese learning platform"
          }
        }
      ]
    },

    // Career opportunities
    careerOpportunities: {
      industries: {
        zh: ["国际商务", "翻译口译", "教育培训", "科技产业", "文化交流", "旅游业"],
        en: ["International business", "Translation", "Education", "Technology", "Cultural exchange", "Tourism"]
      },
      averageSalary: {
        zh: "60,000-120,000美元",
        en: "$60,000-120,000"
      },
      jobGrowth: {
        zh: "增长率25%",
        en: "25% growth rate"
      },
      remoteWork: true
    },

    // Travel advantages
    travelAdvantages: {
      countries: {
        zh: ["中国", "台湾", "新加坡", "马来西亚", "香港", "澳门"],
        en: ["China", "Taiwan", "Singapore", "Malaysia", "Hong Kong", "Macau"]
      },
      businessHubs: {
        zh: ["北京", "上海", "深圳", "香港", "台北", "新加坡"],
        en: ["Beijing", "Shanghai", "Shenzhen", "Hong Kong", "Taipei", "Singapore"]
      },
      culturalSites: {
        zh: ["长城", "故宫", "天安门", "兵马俑", "西湖", "泰山"],
        en: ["Great Wall", "Forbidden City", "Tiananmen Square", "Terracotta Army", "West Lake", "Mount Tai"]
      }
    }
  }
}

// All 10 languages have been successfully converted to bilingual format
// Each language includes: culturalInfo, learningGuide, learningResources, careerOpportunities, travelAdvantages
