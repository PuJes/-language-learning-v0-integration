import type { LearningResource } from '@/types/learning-resources'
import type { BilingualText } from '@/types'

export const learningResources: LearningResource[] = [
  // 1. Duolingo - Language Learning App
  {
    id: 'duolingo',
    slug: 'duolingo',
    name: {
      zh: '多邻国',
      en: 'Duolingo'
    },
    summary: {
      zh: '全球最受欢迎的免费语言学习应用,游戏化设计让学习像玩游戏一样有趣。',
      en: 'The world\'s most popular free language learning app with gamified design that makes learning fun.'
    },
    category: 'app',
    skillFocus: ['vocabulary', 'grammar', 'listening', 'reading'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese'],
    proficiency: 'beginner',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['gamification', 'popular', 'beginner-friendly'],
    websiteUrl: 'https://www.duolingo.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/duolingo/id570060128',
      android: 'https://play.google.com/store/apps/details?id=com.duolingo'
    },
    ratings: {
      average: 4.7,
      basedOn: 15000000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.6,
      totalUserRatings: 523,
      reviews: []
    },
    description: {
      zh: '多邻国通过游戏化的方式让语言学习变得有趣且上瘾。每天只需10-15分钟,就能系统学习新语言。应用提供完全免费的核心课程,涵盖40多种语言。',
      en: 'Duolingo makes language learning fun and addictive through gamification. Just 10-15 minutes daily can help you systematically learn a new language. The app offers completely free core courses covering over 40 languages.'
    },
    highlights: {
      zh: ['完全免费的核心课程', '游戏化学习体验', '支持40+种语言', '个性化学习路径', '社区互动功能'],
      en: ['Completely free core courses', 'Gamified learning experience', '40+ language support', 'Personalized learning paths', 'Community interaction features']
    },
    idealFor: {
      zh: ['零基础入门学习者', '希望养成学习习惯的人', '喜欢游戏化学习的用户', '预算有限的学习者'],
      en: ['Complete beginners', 'People wanting to build learning habits', 'Users who enjoy gamified learning', 'Budget-conscious learners']
    },
    limitations: {
      zh: ['语法讲解不够深入', '高级内容相对较少', '发音练习有限', '部分语言课程质量参差不齐'],
      en: ['Grammar explanations could be deeper', 'Limited advanced content', 'Limited pronunciation practice', 'Course quality varies by language']
    },
    tutorials: [
      {
        title: {
          zh: '多邻国完整使用指南',
          en: 'Complete Duolingo User Guide'
        },
        url: 'https://blog.duolingo.com/tips/',
        type: 'article'
      }
    ],
    updatedAt: '2024-10-14',
    featured: true
  },

  // 2. Anki - Spaced Repetition System
  {
    id: 'anki',
    slug: 'anki',
    name: {
      zh: 'Anki',
      en: 'Anki'
    },
    summary: {
      zh: '最强大的间隔重复记忆软件,帮助你高效记忆单词、语法和任何需要记忆的内容。',
      en: 'The most powerful spaced repetition software for efficiently memorizing vocabulary, grammar, and anything else.'
    },
    category: 'app',
    skillFocus: ['vocabulary', 'grammar'],
    languages: ['all'],
    proficiency: 'all',
    platforms: ['web', 'desktop', 'ios', 'android'],
    price: 'freemium',
    tags: ['srs', 'flashcards', 'advanced', 'customizable'],
    websiteUrl: 'https://apps.ankiweb.net',
    downloadLinks: {
      desktop: 'https://apps.ankiweb.net/#download',
      ios: 'https://apps.apple.com/app/ankimobile-flashcards/id373493387',
      android: 'https://play.google.com/store/apps/details?id=com.ichi2.anki'
    },
    ratings: {
      average: 4.8,
      basedOn: 250000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.7,
      totalUserRatings: 342,
      reviews: []
    },
    description: {
      zh: 'Anki是一款基于间隔重复原理的记忆软件,通过智能算法安排复习时间,让你在最佳时机复习即将遗忘的内容。支持自定义卡片、插件扩展和跨平台同步,是认真学习者的首选工具。',
      en: 'Anki is a memory software based on spaced repetition principles, using intelligent algorithms to schedule reviews at optimal times. Supports custom cards, plugin extensions, and cross-platform sync - the top choice for serious learners.'
    },
    highlights: {
      zh: ['科学的间隔重复算法', '完全免费(桌面&安卓)', '强大的自定义功能', '丰富的插件生态', '跨平台同步'],
      en: ['Scientific spaced repetition algorithm', 'Completely free (desktop & Android)', 'Powerful customization', 'Rich plugin ecosystem', 'Cross-platform sync']
    },
    idealFor: {
      zh: ['需要记忆大量词汇的学习者', '追求高效记忆的用户', '喜欢自定义学习工具的人', '有一定技术基础的学习者'],
      en: ['Learners memorizing large vocabularies', 'Users seeking efficient memorization', 'People who like customizable tools', 'Learners with some technical background']
    },
    limitations: {
      zh: ['学习曲线较陡峭', 'UI设计相对简陋', 'iOS版本需付费($24.99)', '需要自己制作或寻找卡片'],
      en: ['Steep learning curve', 'Relatively basic UI design', 'iOS version is paid ($24.99)', 'Need to create or find cards yourself']
    },
    tutorials: [
      {
        title: {
          zh: 'Anki完整使用教程',
          en: 'Complete Anki Tutorial'
        },
        url: 'https://www.youtube.com/watch?v=Eo1HbXEiJxo',
        type: 'video'
      }
    ],
    updatedAt: '2024-10-14',
    featured: true
  },

  // 3. HelloTalk - Language Exchange
  {
    id: 'hellotalk',
    slug: 'hellotalk',
    name: {
      zh: 'HelloTalk',
      en: 'HelloTalk'
    },
    summary: {
      zh: '全球最大的语言交换社区,与母语者实时聊天,提升口语和听力能力。',
      en: 'The world\'s largest language exchange community for chatting with native speakers to improve speaking and listening.'
    },
    category: 'community',
    skillFocus: ['speaking', 'listening', 'culture', 'writing'],
    languages: ['all'],
    proficiency: 'intermediate',
    platforms: ['ios', 'android'],
    price: 'freemium',
    tags: ['language-exchange', 'speaking', 'social'],
    websiteUrl: 'https://www.hellotalk.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/hellotalk/id557130558',
      android: 'https://play.google.com/store/apps/details?id=com.hellotalk'
    },
    ratings: {
      average: 4.5,
      basedOn: 1200000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.4,
      totalUserRatings: 189,
      reviews: []
    },
    description: {
      zh: 'HelloTalk连接全球3000万语言学习者,让你直接与母语者聊天交流。应用内置翻译、语法纠正、语音转文字等功能,让语言交换变得简单高效。',
      en: 'HelloTalk connects 30 million language learners worldwide, letting you chat directly with native speakers. Built-in translation, grammar correction, voice-to-text and more make language exchange simple and effective.'
    },
    highlights: {
      zh: ['3000万+全球用户', '实时翻译和纠错', '语音/视频通话', '朋友圈动态分享', '免费核心功能'],
      en: ['30M+ global users', 'Real-time translation & correction', 'Voice/video calls', 'Moments feed sharing', 'Free core features']
    },
    idealFor: {
      zh: ['有一定基础的学习者', '想提升口语能力的人', '希望了解文化的用户', '喜欢社交的学习者'],
      en: ['Learners with some foundation', 'People wanting to improve speaking', 'Users interested in culture', 'Social learners']
    },
    limitations: {
      zh: ['需要主动社交', '用户质量参差不齐', '高级功能需付费', '可能遇到骚扰信息'],
      en: ['Requires proactive socializing', 'Variable user quality', 'Premium features require payment', 'May encounter spam']
    },
    updatedAt: '2024-10-14',
    featured: true
  },

  // 4. Coursera - Online Language Courses
  {
    id: 'coursera',
    slug: 'coursera',
    name: {
      zh: 'Coursera语言课程',
      en: 'Coursera Language Courses'
    },
    summary: {
      zh: '世界顶尖大学提供的在线语言课程,系统学习语言知识和文化背景。',
      en: 'Online language courses from top universities, systematically learning language knowledge and cultural background.'
    },
    category: 'course',
    skillFocus: ['grammar', 'reading', 'writing', 'culture'],
    languages: ['english', 'spanish', 'french', 'chinese', 'korean'],
    proficiency: 'all',
    platforms: ['web'],
    price: 'freemium',
    tags: ['academic', 'structured', 'certificates'],
    websiteUrl: 'https://www.coursera.org/courses?query=language%20learning',
    ratings: {
      average: 4.6,
      basedOn: 85000,
      sources: ['Coursera']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 124,
      reviews: []
    },
    description: {
      zh: 'Coursera汇集了耶鲁、北大等世界名校的语言课程,提供系统化的学习内容和专业证书。课程涵盖语言基础、商务交流、考试准备等多个方向。',
      en: 'Coursera features language courses from Yale, Peking University and other top institutions, offering systematic content and professional certificates. Courses cover language basics, business communication, test preparation and more.'
    },
    highlights: {
      zh: ['名校教授授课', '系统化课程设计', '可获得认证证书', '免费旁听选项', '作业和测验反馈'],
      en: ['Taught by top professors', 'Systematic course design', 'Earn certificates', 'Free audit option', 'Homework & quiz feedback']
    },
    idealFor: {
      zh: ['追求系统学习的人', '需要证书的学习者', '学术导向的用户', '有充足学习时间的人'],
      en: ['People seeking systematic learning', 'Learners needing certificates', 'Academically-oriented users', 'Those with sufficient study time']
    },
    limitations: {
      zh: ['证书需付费($49-99)', '课程周期较长', '互动性相对较弱', '部分课程只提供英文字幕'],
      en: ['Certificates require payment ($49-99)', 'Long course duration', 'Limited interactivity', 'Some courses only have English subtitles']
    },
    updatedAt: '2024-10-14'
  },

  // 5. LingQ - Reading-Based Learning
  {
    id: 'lingq',
    slug: 'lingq',
    name: {
      zh: 'LingQ',
      en: 'LingQ'
    },
    summary: {
      zh: '通过阅读和听力材料学习语言,沉浸式学习方法帮助你像学习母语一样学外语。',
      en: 'Learn languages through reading and listening materials with immersive methods mimicking native acquisition.'
    },
    category: 'app',
    skillFocus: ['reading', 'listening', 'vocabulary'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese', 'russian'],
    proficiency: 'all',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['reading', 'immersion', 'extensive-content'],
    websiteUrl: 'https://www.lingq.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/lingq/id1084180352',
      android: 'https://play.google.com/store/apps/details?id=com.lingq.android'
    },
    ratings: {
      average: 4.3,
      basedOn: 45000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.2,
      totalUserRatings: 98,
      reviews: []
    },
    description: {
      zh: 'LingQ提供海量真实材料供你阅读和收听,内置词汇管理系统帮你记录学习进度。支持导入自己感兴趣的内容,打造个性化学习体验。',
      en: 'LingQ offers extensive authentic materials for reading and listening, with built-in vocabulary management to track your progress. Supports importing your own content for personalized learning.'
    },
    highlights: {
      zh: ['海量真实材料库', '强大的词汇追踪', '可导入自定义内容', '沉浸式学习方法', '支持多种语言'],
      en: ['Extensive authentic material library', 'Powerful vocabulary tracking', 'Import custom content', 'Immersive learning method', 'Multi-language support']
    },
    idealFor: {
      zh: ['喜欢阅读的学习者', '追求自然习得的人', '有中级以上水平的用户', '想扩充词汇量的学习者'],
      en: ['Learners who enjoy reading', 'Those seeking natural acquisition', 'Intermediate+ level users', 'Learners expanding vocabulary']
    },
    limitations: {
      zh: ['免费版功能受限', '界面相对复杂', '初学者可能不适应', '订阅价格较高($12.99/月)'],
      en: ['Limited free version', 'Relatively complex interface', 'May not suit beginners', 'Higher subscription cost ($12.99/mo)']
    },
    updatedAt: '2024-10-14'
  },

  // 6. iTalki - Online Tutoring
  {
    id: 'italki',
    slug: 'italki',
    name: {
      zh: 'iTalki',
      en: 'iTalki'
    },
    summary: {
      zh: '全球最大的在线语言教学平台,一对一真人老师课程,灵活选择老师和时间。',
      en: 'The world\'s largest online language teaching platform with 1-on-1 real teacher lessons and flexible scheduling.'
    },
    category: 'course',
    skillFocus: ['speaking', 'listening', 'grammar', 'culture'],
    languages: ['all'],
    proficiency: 'all',
    platforms: ['web', 'ios', 'android'],
    price: 'paid',
    tags: ['tutoring', '1-on-1', 'speaking', 'flexible'],
    websiteUrl: 'https://www.italki.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/italki/id1101868868',
      android: 'https://play.google.com/store/apps/details?id=com.italki.app'
    },
    ratings: {
      average: 4.7,
      basedOn: 380000,
      sources: ['App Store', 'Google Play', 'Trustpilot']
    },
    userFeedback: {
      averageUserRating: 4.6,
      totalUserRatings: 267,
      reviews: []
    },
    description: {
      zh: 'iTalki连接全球超过10000名语言老师,提供150+种语言的在线课程。你可以根据预算、时间和学习目标选择合适的老师,进行灵活的一对一学习。',
      en: 'iTalki connects over 10,000 language teachers worldwide, offering courses in 150+ languages. Choose teachers based on budget, schedule and learning goals for flexible 1-on-1 learning.'
    },
    highlights: {
      zh: ['10000+专业老师', '150+语言选择', '灵活预约时间', '可试听课程($5-10)', '社区互动功能'],
      en: ['10,000+ professional teachers', '150+ language options', 'Flexible scheduling', 'Trial lessons available ($5-10)', 'Community interaction features']
    },
    idealFor: {
      zh: ['需要口语练习的学习者', '希望个性化指导的人', '有学习预算的用户', '任何水平的学习者'],
      en: ['Learners needing speaking practice', 'Those wanting personalized guidance', 'Users with learning budget', 'Learners at any level']
    },
    limitations: {
      zh: ['需要付费($8-30/课时)', '老师质量参差不齐', '需要提前预约', '时区差异可能影响安排'],
      en: ['Requires payment ($8-30/lesson)', 'Variable teacher quality', 'Advance booking required', 'Time zone differences may affect scheduling']
    },
    updatedAt: '2024-10-14',
    featured: true
  },

  // 7. Pimsleur - Audio-Based Learning
  {
    id: 'pimsleur',
    slug: 'pimsleur',
    name: {
      zh: 'Pimsleur',
      en: 'Pimsleur'
    },
    summary: {
      zh: '经典的音频语言学习法,通过听和重复学习,专注提升口语和听力能力。',
      en: 'Classic audio language learning method focusing on listening and repetition to improve speaking and listening.'
    },
    category: 'course',
    skillFocus: ['listening', 'speaking'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese', 'italian'],
    proficiency: 'beginner',
    platforms: ['web', 'ios', 'android'],
    price: 'subscription',
    tags: ['audio', 'speaking', 'proven-method'],
    websiteUrl: 'https://www.pimsleur.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/pimsleur/id550280049',
      android: 'https://play.google.com/store/apps/details?id=com.pimsleur.droid'
    },
    ratings: {
      average: 4.6,
      basedOn: 125000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 156,
      reviews: []
    },
    description: {
      zh: 'Pimsleur采用科学验证的音频学习法,每天30分钟课程帮你建立语感和口语能力。特别适合通勤或运动时学习,无需看屏幕。',
      en: 'Pimsleur uses scientifically validated audio learning with 30-minute daily lessons to build language sense and speaking ability. Perfect for commuting or exercising without looking at screens.'
    },
    highlights: {
      zh: ['科学验证的方法', '纯音频学习', '适合通勤学习', '注重实用会话', '30天满意保证'],
      en: ['Scientifically validated method', 'Pure audio learning', 'Great for commuting', 'Focus on practical conversation', '30-day satisfaction guarantee']
    },
    idealFor: {
      zh: ['通勤时间较长的人', '喜欢音频学习的用户', '注重口语的学习者', '初学者'],
      en: ['People with long commutes', 'Users who prefer audio learning', 'Learners focusing on speaking', 'Beginners']
    },
    limitations: {
      zh: ['订阅价格较高($14.99/月)', '缺少读写训练', '内容相对枯燥', '高级课程有限'],
      en: ['Higher subscription cost ($14.99/mo)', 'Limited reading/writing practice', 'Content can be dry', 'Limited advanced courses']
    },
    updatedAt: '2024-10-14'
  },

  // 8. Memrise - Video & Native Speakers
  {
    id: 'memrise',
    slug: 'memrise',
    name: {
      zh: 'Memrise',
      en: 'Memrise'
    },
    summary: {
      zh: '通过真实母语者视频学习地道表达,结合间隔重复记忆法提升词汇量。',
      en: 'Learn authentic expressions through real native speaker videos, combined with spaced repetition for vocabulary.'
    },
    category: 'app',
    skillFocus: ['vocabulary', 'listening', 'culture'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'italian'],
    proficiency: 'beginner',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['video', 'native-speakers', 'culture'],
    websiteUrl: 'https://www.memrise.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/memrise/id635966718',
      android: 'https://play.google.com/store/apps/details?id=com.memrise.android.memrisecompanion'
    },
    ratings: {
      average: 4.5,
      basedOn: 890000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.4,
      totalUserRatings: 213,
      reviews: []
    },
    description: {
      zh: 'Memrise通过真人视频展示母语者如何使用语言,让你学习地道的表达方式。应用结合间隔重复算法帮助记忆,并提供多种有趣的学习游戏。',
      en: 'Memrise shows how native speakers use language through real videos, helping you learn authentic expressions. The app combines spaced repetition algorithms with various fun learning games.'
    },
    highlights: {
      zh: ['真实母语者视频', '地道表达学习', '间隔重复记忆', '有趣的学习游戏', '免费核心课程'],
      en: ['Real native speaker videos', 'Authentic expression learning', 'Spaced repetition', 'Fun learning games', 'Free core courses']
    },
    idealFor: {
      zh: ['想学习地道表达的人', '视觉学习者', '初学者', '喜欢多样化内容的用户'],
      en: ['People wanting authentic expressions', 'Visual learners', 'Beginners', 'Users who like varied content']
    },
    limitations: {
      zh: ['高级功能需付费', '语法讲解较少', '部分语言内容有限', '离线功能受限'],
      en: ['Premium features require payment', 'Limited grammar explanations', 'Content limited for some languages', 'Limited offline functionality']
    },
    updatedAt: '2024-10-14'
  },

  // 9. Tandem - Language Exchange App
  {
    id: 'tandem',
    slug: 'tandem',
    name: {
      zh: 'Tandem',
      en: 'Tandem'
    },
    summary: {
      zh: '另一个优质的语言交换社区,通过匹配算法找到合适的语伴进行互助学习。',
      en: 'Another quality language exchange community with matching algorithms to find suitable language partners.'
    },
    category: 'community',
    skillFocus: ['speaking', 'listening', 'culture', 'writing'],
    languages: ['all'],
    proficiency: 'intermediate',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['language-exchange', 'matching', 'social'],
    websiteUrl: 'https://www.tandem.net',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/tandem/id959001619',
      android: 'https://play.google.com/store/apps/details?id=net.tandem'
    },
    ratings: {
      average: 4.4,
      basedOn: 780000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.3,
      totalUserRatings: 145,
      reviews: []
    },
    description: {
      zh: 'Tandem通过智能匹配算法帮你找到合适的语伴,支持文字、语音和视频交流。应用提供话题建议和翻译工具,让交流更加顺畅。',
      en: 'Tandem uses smart matching algorithms to help you find suitable language partners, supporting text, voice and video communication. The app provides topic suggestions and translation tools for smoother exchanges.'
    },
    highlights: {
      zh: ['智能匹配系统', '多种交流方式', '话题建议功能', '社区活动丰富', '可预约专业课程'],
      en: ['Smart matching system', 'Multiple communication modes', 'Topic suggestion feature', 'Rich community activities', 'Professional lessons available']
    },
    idealFor: {
      zh: ['有一定基础的学习者', '想交国际朋友的人', '注重文化交流的用户', '喜欢社交的学习者'],
      en: ['Learners with some foundation', 'People wanting international friends', 'Users interested in cultural exchange', 'Social learners']
    },
    limitations: {
      zh: ['需要主动社交', '免费版每天限制3次翻译', '可能遇到不认真的用户', '专业课程需付费'],
      en: ['Requires proactive socializing', 'Free version limits 3 translations/day', 'May encounter unserious users', 'Professional lessons require payment']
    },
    updatedAt: '2024-10-14'
  },

  // 10. Busuu - Comprehensive Learning
  {
    id: 'busuu',
    slug: 'busuu',
    name: {
      zh: 'Busuu',
      en: 'Busuu'
    },
    summary: {
      zh: '综合性语言学习平台,AI辅助学习加上真人批改,提供完整的学习路径。',
      en: 'Comprehensive language learning platform with AI-assisted learning and human feedback, offering complete learning paths.'
    },
    category: 'app',
    skillFocus: ['vocabulary', 'grammar', 'reading', 'writing'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'chinese', 'italian'],
    proficiency: 'all',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['comprehensive', 'ai-powered', 'structured'],
    websiteUrl: 'https://www.busuu.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/busuu/id379968583',
      android: 'https://play.google.com/store/apps/details?id=com.busuu.android.enc'
    },
    ratings: {
      average: 4.6,
      basedOn: 650000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 178,
      reviews: []
    },
    description: {
      zh: 'Busuu提供完整的语言学习课程,从A1到B2各个等级。AI技术帮助个性化学习,同时可以让全球母语者批改你的练习作业。',
      en: 'Busuu offers complete language courses from A1 to B2 levels. AI technology enables personalized learning, while global native speakers can correct your practice exercises.'
    },
    highlights: {
      zh: ['完整的CEFR课程', 'AI个性化学习', '真人批改练习', '官方认证证书', '离线学习模式'],
      en: ['Complete CEFR courses', 'AI personalized learning', 'Human correction', 'Official certificates', 'Offline learning mode']
    },
    idealFor: {
      zh: ['追求系统学习的人', '需要证书的学习者', '各个水平的用户', '希望获得反馈的学习者'],
      en: ['People seeking systematic learning', 'Learners needing certificates', 'Users at all levels', 'Learners wanting feedback']
    },
    limitations: {
      zh: ['高级功能需订阅($9.99/月)', '免费版内容有限', '部分语言课程较少', '社区功能相对简单'],
      en: ['Premium features require subscription ($9.99/mo)', 'Limited free content', 'Fewer courses for some languages', 'Relatively simple community features']
    },
    updatedAt: '2024-10-14'
  },

  // 11. BBC Learning English - Free English Resources
  {
    id: 'bbc-learning-english',
    slug: 'bbc-learning-english',
    name: {
      zh: 'BBC Learning English',
      en: 'BBC Learning English'
    },
    summary: {
      zh: 'BBC官方英语学习资源,完全免费的高质量内容,涵盖新闻、文化和日常英语。',
      en: 'Official BBC English learning resources with completely free high-quality content covering news, culture and everyday English.'
    },
    category: 'youtube',
    skillFocus: ['listening', 'reading', 'vocabulary', 'culture'],
    languages: ['english'],
    proficiency: 'all',
    platforms: ['web', 'ios', 'android'],
    price: 'free',
    tags: ['free', 'news', 'british-english', 'quality'],
    websiteUrl: 'https://www.bbc.co.uk/learningenglish',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/bbc-learning-english/id1416610731',
      android: 'https://play.google.com/store/apps/details?id=uk.co.bbc.learningenglish'
    },
    ratings: {
      average: 4.7,
      basedOn: 280000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.6,
      totalUserRatings: 234,
      reviews: []
    },
    description: {
      zh: 'BBC Learning English提供丰富的免费英语学习材料,包括6 Minute English、新闻英语、商务英语等栏目。所有内容由专业团队制作,质量有保证。',
      en: 'BBC Learning English offers rich free English learning materials including 6 Minute English, News English, Business English and more. All content is professionally produced with guaranteed quality.'
    },
    highlights: {
      zh: ['完全免费', 'BBC专业制作', '英式英语标准', '每日更新内容', '配套文本和测验'],
      en: ['Completely free', 'BBC professional production', 'British English standard', 'Daily updated content', 'Texts and quizzes included']
    },
    idealFor: {
      zh: ['学习英式英语的人', '喜欢新闻的学习者', '各个水平的用户', '预算有限的学习者'],
      en: ['British English learners', 'News-interested learners', 'Users at all levels', 'Budget-conscious learners']
    },
    limitations: {
      zh: ['只有英语', '缺少系统课程', '无个性化学习路径', '互动功能较少'],
      en: ['English only', 'Lacks systematic courses', 'No personalized learning paths', 'Limited interactive features']
    },
    updatedAt: '2024-10-14',
    featured: true
  },

  // 12. Yabla - Authentic Video Content
  {
    id: 'yabla',
    slug: 'yabla',
    name: {
      zh: 'Yabla',
      en: 'Yabla'
    },
    summary: {
      zh: '通过真实视频内容学习语言,包括音乐视频、纪录片、访谈等丰富材料。',
      en: 'Learn languages through authentic video content including music videos, documentaries, interviews and more.'
    },
    category: 'youtube',
    skillFocus: ['listening', 'vocabulary', 'culture'],
    languages: ['spanish', 'french', 'german', 'italian', 'chinese'],
    proficiency: 'intermediate',
    platforms: ['web'],
    price: 'subscription',
    tags: ['video', 'authentic', 'subtitles'],
    websiteUrl: 'https://www.yabla.com',
    ratings: {
      average: 4.5,
      basedOn: 15000,
      sources: ['User Reviews']
    },
    userFeedback: {
      averageUserRating: 4.4,
      totalUserRatings: 67,
      reviews: []
    },
    description: {
      zh: 'Yabla精选真实的视频内容,配有双语字幕和词典功能。你可以调整播放速度,逐句学习,非常适合提升听力和学习地道表达。',
      en: 'Yabla curates authentic video content with bilingual subtitles and dictionary features. Adjust playback speed, learn sentence by sentence - perfect for improving listening and learning authentic expressions.'
    },
    highlights: {
      zh: ['真实视频内容', '双语字幕', '可调播放速度', '内置词典', '逐句学习模式'],
      en: ['Authentic video content', 'Bilingual subtitles', 'Adjustable playback speed', 'Built-in dictionary', 'Sentence-by-sentence learning']
    },
    idealFor: {
      zh: ['中高级学习者', '视觉学习者', '想了解文化的人', '喜欢看视频的用户'],
      en: ['Intermediate-advanced learners', 'Visual learners', 'Culture-interested people', 'Video-loving users']
    },
    limitations: {
      zh: ['需要订阅($12.95/月)', '语言选择有限', '内容更新较慢', '需要一定基础'],
      en: ['Requires subscription ($12.95/mo)', 'Limited language selection', 'Slower content updates', 'Requires some foundation']
    },
    updatedAt: '2024-10-14'
  },

  // 13. Clozemaster - Context Learning
  {
    id: 'clozemaster',
    slug: 'clozemaster',
    name: {
      zh: 'Clozemaster',
      en: 'Clozemaster'
    },
    summary: {
      zh: '通过完形填空游戏学习单词在真实语境中的用法,适合扩充词汇量。',
      en: 'Learn word usage in real contexts through cloze exercises, perfect for expanding vocabulary.'
    },
    category: 'app',
    skillFocus: ['vocabulary', 'reading', 'grammar'],
    languages: ['all'],
    proficiency: 'intermediate',
    platforms: ['web', 'ios', 'android'],
    price: 'freemium',
    tags: ['vocabulary', 'context', 'gamification'],
    websiteUrl: 'https://www.clozemaster.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/clozemaster/id1047091407',
      android: 'https://play.google.com/store/apps/details?id=com.clozemaster.android'
    },
    ratings: {
      average: 4.6,
      basedOn: 38000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 89,
      reviews: []
    },
    description: {
      zh: 'Clozemaster通过完形填空的方式让你在真实句子中学习单词,涵盖数十种语言和数百万个句子。游戏化设计让词汇学习变得有趣。',
      en: 'Clozemaster teaches words in real sentences through cloze exercises, covering dozens of languages and millions of sentences. Gamified design makes vocabulary learning fun.'
    },
    highlights: {
      zh: ['数百万个真实句子', '50+语言支持', '游戏化学习', '追踪学习进度', '免费核心功能'],
      en: ['Millions of real sentences', '50+ language support', 'Gamified learning', 'Progress tracking', 'Free core features']
    },
    idealFor: {
      zh: ['有一定基础的学习者', '想扩充词汇的人', '喜欢游戏化学习的用户', '追求高效学习的人'],
      en: ['Learners with some foundation', 'People expanding vocabulary', 'Users who like gamification', 'Efficiency-focused learners']
    },
    limitations: {
      zh: ['初学者可能困难', '缺少语法讲解', '界面较为简单', '高级功能需付费'],
      en: ['May be difficult for beginners', 'Lacks grammar explanations', 'Basic interface', 'Premium features require payment']
    },
    updatedAt: '2024-10-14'
  },

  // 14. Glossika - Mass Sentence Method
  {
    id: 'glossika',
    slug: 'glossika',
    name: {
      zh: 'Glossika',
      en: 'Glossika'
    },
    summary: {
      zh: '通过大量句子练习培养语感,AI算法个性化调整学习内容和节奏。',
      en: 'Develop language sense through mass sentence practice with AI-personalized content and pacing.'
    },
    category: 'app',
    skillFocus: ['listening', 'speaking', 'grammar'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese'],
    proficiency: 'intermediate',
    platforms: ['web', 'ios', 'android'],
    price: 'subscription',
    tags: ['sentences', 'ai-powered', 'immersion'],
    websiteUrl: 'https://www.glossika.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/glossika/id1183854469',
      android: 'https://play.google.com/store/apps/details?id=com.glossika'
    },
    ratings: {
      average: 4.3,
      basedOn: 52000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.2,
      totalUserRatings: 76,
      reviews: []
    },
    description: {
      zh: 'Glossika使用大量句子练习法,让你通过重复听读句子来培养语感。AI算法根据你的水平和进度自动调整内容,提供个性化学习体验。',
      en: 'Glossika uses mass sentence practice to develop language sense through repeated listening and reading. AI algorithms automatically adjust content based on your level and progress for personalized learning.'
    },
    highlights: {
      zh: ['AI个性化学习', '大量句子库', '注重听说训练', '追踪详细数据', '60+语言支持'],
      en: ['AI personalized learning', 'Extensive sentence library', 'Focus on listening/speaking', 'Detailed progress tracking', '60+ language support']
    },
    idealFor: {
      zh: ['中高级学习者', '想提升语感的人', '喜欢数据驱动的用户', '认真的学习者'],
      en: ['Intermediate-advanced learners', 'People improving language sense', 'Data-driven users', 'Serious learners']
    },
    limitations: {
      zh: ['订阅价格较高($16.99/月)', '学习方式单一', '缺少游戏化元素', '初学者可能不适应'],
      en: ['Higher subscription cost ($16.99/mo)', 'Single learning approach', 'Lacks gamification', 'May not suit beginners']
    },
    updatedAt: '2024-10-14'
  },

  // 15. Readlang - Reading with Dictionary
  {
    id: 'readlang',
    slug: 'readlang',
    name: {
      zh: 'Readlang',
      en: 'Readlang'
    },
    summary: {
      zh: '网页阅读扩展,点击即可翻译单词和句子,边读边学积累词汇。',
      en: 'Web reading extension for instant word and sentence translation while reading and learning.'
    },
    category: 'extension',
    skillFocus: ['reading', 'vocabulary'],
    languages: ['all'],
    proficiency: 'intermediate',
    platforms: ['web'],
    price: 'freemium',
    tags: ['reading', 'dictionary', 'browser-extension'],
    websiteUrl: 'https://readlang.com',
    ratings: {
      average: 4.5,
      basedOn: 12000,
      sources: ['Chrome Web Store']
    },
    userFeedback: {
      averageUserRating: 4.4,
      totalUserRatings: 54,
      reviews: []
    },
    description: {
      zh: 'Readlang是一个浏览器扩展,让你在阅读任何网页内容时都能快速查词和翻译。自动保存你查过的单词,并提供间隔重复复习功能。',
      en: 'Readlang is a browser extension enabling quick word lookup and translation while reading any web content. Automatically saves looked-up words with spaced repetition review.'
    },
    highlights: {
      zh: ['网页即时翻译', '自动保存生词', 'SRS复习功能', '支持多种语言', '免费基础功能'],
      en: ['Instant web translation', 'Auto-save new words', 'SRS review feature', 'Multi-language support', 'Free basic features']
    },
    idealFor: {
      zh: ['喜欢阅读的学习者', '有一定基础的人', '想扩充词汇的用户', '使用电脑学习的人'],
      en: ['Learners who enjoy reading', 'People with some foundation', 'Users expanding vocabulary', 'Computer-based learners']
    },
    limitations: {
      zh: ['只支持浏览器', '免费版有字数限制', '移动端体验较差', '需要一定阅读水平'],
      en: ['Browser-only support', 'Free version has word limits', 'Poor mobile experience', 'Requires reading proficiency']
    },
    updatedAt: '2024-10-14'
  },

  // 16. Language Learning with Netflix
  {
    id: 'language-learning-netflix',
    slug: 'language-learning-netflix',
    name: {
      zh: 'Language Learning with Netflix',
      en: 'Language Learning with Netflix'
    },
    summary: {
      zh: 'Netflix字幕插件,显示双语字幕并提供词典功能,让看剧变成学习。',
      en: 'Netflix subtitle extension showing dual subtitles with dictionary features, turning watching into learning.'
    },
    category: 'extension',
    skillFocus: ['listening', 'vocabulary', 'culture'],
    languages: ['all'],
    proficiency: 'intermediate',
    platforms: ['web'],
    price: 'freemium',
    tags: ['netflix', 'subtitles', 'entertainment'],
    websiteUrl: 'https://languagelearningwithnetflix.com',
    ratings: {
      average: 4.6,
      basedOn: 95000,
      sources: ['Chrome Web Store']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 187,
      reviews: []
    },
    description: {
      zh: '这个Chrome扩展让你在看Netflix时显示双语字幕,点击单词即可查看释义。支持调整播放速度,保存生词,让娱乐和学习完美结合。',
      en: 'This Chrome extension shows dual subtitles while watching Netflix, with instant word definitions on click. Adjust playback speed, save words - perfectly combining entertainment and learning.'
    },
    highlights: {
      zh: ['双语字幕显示', '即时词典查询', '可调播放速度', '保存生词功能', '免费基础功能'],
      en: ['Dual subtitle display', 'Instant dictionary lookup', 'Adjustable playback speed', 'Save words feature', 'Free basic features']
    },
    idealFor: {
      zh: ['Netflix订阅用户', '中高级学习者', '喜欢看剧的人', '想在娱乐中学习的用户'],
      en: ['Netflix subscribers', 'Intermediate-advanced learners', 'Series/movie lovers', 'Users learning through entertainment']
    },
    limitations: {
      zh: ['需要Netflix订阅', '只支持Chrome', '部分高级功能收费', '字幕质量取决于Netflix'],
      en: ['Requires Netflix subscription', 'Chrome-only support', 'Some premium features paid', 'Subtitle quality depends on Netflix']
    },
    updatedAt: '2024-10-14',
    featured: true
  },

  // 17. FluentU - Real Videos
  {
    id: 'fluentu',
    slug: 'fluentu',
    name: {
      zh: 'FluentU',
      en: 'FluentU'
    },
    summary: {
      zh: '使用真实世界的视频学习语言,包括音乐MV、电影片段、新闻等内容。',
      en: 'Learn languages using real-world videos including music videos, movie clips, news and more.'
    },
    category: 'youtube',
    skillFocus: ['listening', 'vocabulary', 'culture'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese'],
    proficiency: 'all',
    platforms: ['web', 'ios', 'android'],
    price: 'subscription',
    tags: ['video', 'real-content', 'interactive'],
    websiteUrl: 'https://www.fluentu.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/fluentu/id917892175',
      android: 'https://play.google.com/store/apps/details?id=com.fluentflix'
    },
    ratings: {
      average: 4.4,
      basedOn: 68000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.3,
      totalUserRatings: 112,
      reviews: []
    },
    description: {
      zh: 'FluentU将真实世界的视频转化为语言学习课程。每个视频都有互动字幕、词汇卡片和测验,让你在真实语境中学习语言。',
      en: 'FluentU transforms real-world videos into language learning lessons. Each video features interactive captions, vocabulary cards and quizzes for learning in authentic contexts.'
    },
    highlights: {
      zh: ['真实视频内容', '互动字幕', '个性化词汇表', '多种练习模式', '按难度分级'],
      en: ['Authentic video content', 'Interactive captions', 'Personalized vocab lists', 'Multiple practice modes', 'Difficulty-leveled content']
    },
    idealFor: {
      zh: ['视觉学习者', '喜欢多媒体的人', '各个水平的用户', '想学习地道表达的人'],
      en: ['Visual learners', 'Multimedia enthusiasts', 'Users at all levels', 'People learning authentic expressions']
    },
    limitations: {
      zh: ['订阅价格较高($29.99/月)', '内容更新较慢', '部分语言选择有限', '需要稳定网络'],
      en: ['Higher subscription cost ($29.99/mo)', 'Slower content updates', 'Limited selection for some languages', 'Requires stable internet']
    },
    updatedAt: '2024-10-14'
  },

  // 18. Beelinguapp - Parallel Text Reading
  {
    id: 'beelinguapp',
    slug: 'beelinguapp',
    name: {
      zh: 'Beelinguapp',
      en: 'Beelinguapp'
    },
    summary: {
      zh: '双语对照阅读应用,通过有声读物和故事学习语言,提升阅读和听力能力。',
      en: 'Bilingual parallel text reading app for learning through audiobooks and stories, improving reading and listening.'
    },
    category: 'book',
    skillFocus: ['reading', 'listening', 'vocabulary'],
    languages: ['english', 'spanish', 'french', 'german', 'japanese', 'korean', 'chinese'],
    proficiency: 'all',
    platforms: ['ios', 'android'],
    price: 'freemium',
    tags: ['reading', 'audiobooks', 'parallel-text'],
    websiteUrl: 'https://www.beelinguapp.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/beelinguapp/id1097017909',
      android: 'https://play.google.com/store/apps/details?id=com.david.android.languageswitch'
    },
    ratings: {
      average: 4.5,
      basedOn: 185000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.4,
      totalUserRatings: 143,
      reviews: []
    },
    description: {
      zh: 'Beelinguapp提供双语对照的故事和有声读物,你可以同时看到母语和目标语言的文本,配合朗读音频学习。内容包括经典小说、新闻、童话等。',
      en: 'Beelinguapp offers bilingual parallel stories and audiobooks, showing native and target language texts simultaneously with audio narration. Content includes classics, news, fairy tales and more.'
    },
    highlights: {
      zh: ['双语对照阅读', '专业朗读音频', '丰富内容库', '支持12种语言', '免费核心功能'],
      en: ['Bilingual parallel reading', 'Professional audio narration', 'Rich content library', '12 language support', 'Free core features']
    },
    idealFor: {
      zh: ['喜欢阅读的学习者', '各个水平的用户', '想提升阅读能力的人', '喜欢听故事的学习者'],
      en: ['Learners who enjoy reading', 'Users at all levels', 'People improving reading skills', 'Story-loving learners']
    },
    limitations: {
      zh: ['高级内容需付费', '部分语言内容较少', '缺少互动练习', '离线功能有限'],
      en: ['Premium content requires payment', 'Less content for some languages', 'Limited interactive exercises', 'Limited offline functionality']
    },
    updatedAt: '2024-10-14'
  },

  // 19. Drops - Visual Vocabulary Learning
  {
    id: 'drops',
    slug: 'drops',
    name: {
      zh: 'Drops',
      en: 'Drops'
    },
    summary: {
      zh: '视觉化词汇学习应用,每天5分钟通过精美图片和微游戏学习单词。',
      en: 'Visual vocabulary learning app with 5-minute daily sessions using beautiful images and micro-games.'
    },
    category: 'app',
    skillFocus: ['vocabulary'],
    languages: ['all'],
    proficiency: 'beginner',
    platforms: ['ios', 'android'],
    price: 'freemium',
    tags: ['vocabulary', 'visual', 'short-sessions'],
    websiteUrl: 'https://languagedrops.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/drops-language-learning/id939540371',
      android: 'https://play.google.com/store/apps/details?id=com.languagedrops.drops.international'
    },
    ratings: {
      average: 4.7,
      basedOn: 420000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.6,
      totalUserRatings: 256,
      reviews: []
    },
    description: {
      zh: 'Drops通过精美的视觉设计和快节奏的游戏让词汇学习变得有趣。每天只需5分钟,通过图片和手势操作学习单词,非常适合碎片化学习。',
      en: 'Drops makes vocabulary learning fun through beautiful visual design and fast-paced games. Just 5 minutes daily learning words through images and gestures - perfect for micro-learning.'
    },
    highlights: {
      zh: ['精美视觉设计', '每天5分钟', '45+语言支持', '无文字干扰', '免费每日一课'],
      en: ['Beautiful visual design', '5 minutes daily', '45+ language support', 'Text-free learning', 'Free daily lesson']
    },
    idealFor: {
      zh: ['时间有限的学习者', '视觉学习者', '初学者', '喜欢简洁界面的用户'],
      en: ['Time-limited learners', 'Visual learners', 'Beginners', 'Users who like clean interfaces']
    },
    limitations: {
      zh: ['免费版每天限5分钟', '只专注词汇', '缺少语法和句子', '高级版较贵($13/月)'],
      en: ['Free version limited to 5 min/day', 'Vocabulary-only focus', 'No grammar or sentences', 'Expensive premium ($13/mo)']
    },
    updatedAt: '2024-10-14'
  },

  // 20. Mango Languages - Practical Conversations
  {
    id: 'mango-languages',
    slug: 'mango-languages',
    name: {
      zh: 'Mango Languages',
      en: 'Mango Languages'
    },
    summary: {
      zh: '注重实用会话的语言学习平台,通过真实对话场景学习,适合旅行和日常交流。',
      en: 'Practical conversation-focused language platform learning through real dialogue scenarios, great for travel and daily communication.'
    },
    category: 'course',
    skillFocus: ['speaking', 'listening', 'culture', 'vocabulary'],
    languages: ['spanish', 'french', 'german', 'italian', 'japanese', 'korean', 'chinese'],
    proficiency: 'beginner',
    platforms: ['web', 'ios', 'android'],
    price: 'subscription',
    tags: ['conversation', 'practical', 'culture'],
    websiteUrl: 'https://mangolanguages.com',
    downloadLinks: {
      ios: 'https://apps.apple.com/app/mango-languages/id675349130',
      android: 'https://play.google.com/store/apps/details?id=com.mango.android'
    },
    ratings: {
      average: 4.6,
      basedOn: 125000,
      sources: ['App Store', 'Google Play']
    },
    userFeedback: {
      averageUserRating: 4.5,
      totalUserRatings: 134,
      reviews: []
    },
    description: {
      zh: 'Mango Languages专注于实用会话,通过真实的对话场景教你如何在实际生活中使用语言。课程注重文化背景,让你不仅学会语言,还了解文化。',
      en: 'Mango Languages focuses on practical conversation, teaching real-life language use through authentic dialogue scenarios. Courses emphasize cultural context for both language and culture learning.'
    },
    highlights: {
      zh: ['注重实用会话', '文化背景讲解', '70+语言选择', '语音识别练习', '图书馆免费访问'],
      en: ['Practical conversation focus', 'Cultural context explanations', '70+ language options', 'Voice recognition practice', 'Free library access']
    },
    idealFor: {
      zh: ['准备旅行的人', '需要日常会话的学习者', '初学者', '想了解文化的用户'],
      en: ['Travel planners', 'Daily conversation learners', 'Beginners', 'Culture-interested users']
    },
    limitations: {
      zh: ['订阅价格较高($17.99/月)', '高级内容有限', '部分语言课程较少', '需要图书馆卡获取免费访问'],
      en: ['Higher subscription cost ($17.99/mo)', 'Limited advanced content', 'Fewer courses for some languages', 'Library card needed for free access']
    },
    updatedAt: '2024-10-14'
  }
]

export interface ResourceCollection {
  id: string
  title: BilingualText
  description: BilingualText
  tag: BilingualText
  resourceIds: string[]
}

export const resourceCollections: ResourceCollection[] = [
  {
    id: 'top-free-apps',
    tag: { zh: '零成本', en: 'Free' },
    title: {
      zh: 'TOP 5 免费语言学习应用',
      en: 'Top 5 Free Language Learning Apps'
    },
    description: {
      zh: '精选最受欢迎的免费移动应用,适合零基础入门与日常巩固,随时随地开始学习。',
      en: 'A curated set of the most popular free mobile apps—perfect for beginners and daily practice on the go.'
    },
    resourceIds: ['duolingo', 'memrise', 'drops', 'bbc-learning-english', 'language-learning-netflix']
  },
  {
    id: 'speaking-boost',
    tag: { zh: '口语强化', en: 'Speaking' },
    title: {
      zh: '口语突围: 与母语者实时练习',
      en: 'Speaking Boost: Practice Live with Natives'
    },
    description: {
      zh: '结合语言交换与一对一课程,打破开口障碍,快速提升口语自信与流利度。',
      en: 'Blend language exchange communities with 1-on-1 tutoring to overcome speaking anxiety and gain fluency fast.'
    },
    resourceIds: ['hellotalk', 'tandem', 'italki', 'mango-languages']
  },
  {
    id: 'exam-prep',
    tag: { zh: '考试备考', en: 'Exam Prep' },
    title: {
      zh: '考试提分: 高效备考组合',
      en: 'Score Higher: Exam Prep Essentials'
    },
    description: {
      zh: '针对雅思、托福等考试的系统课程与词汇工具,帮助你科学分阶段备考。',
      en: 'Structured courses and vocabulary boosters designed for IELTS, TOEFL, and other proficiency exams with staged planning.'
    },
    resourceIds: ['coursera', 'glossika', 'clozemaster', 'anki']
  }
]

export interface ResourceFaqItem {
  id: string
  question: BilingualText
  answer: BilingualText
}

export const resourceFaqs: ResourceFaqItem[] = [
  {
    id: 'how-to-choose',
    question: {
      zh: '如何根据水平选择合适的资源?',
      en: 'How do I choose the right resources for my level?'
    },
    answer: {
      zh: '先确定自己的目标(口语/听力/考试等),再结合当前水平筛选资源。初学者可以从综合类应用入手,中高级学习者可增加原汁原味内容和一对一课程。',
      en: 'Start by clarifying your goal (speaking, listening, exam prep, etc.) and match resources to your current level. Beginners can lean on comprehensive apps, while intermediate learners add authentic content and 1-on-1 lessons.'
    }
  },
  {
    id: 'free-vs-paid',
    question: {
      zh: '免费资源够用吗?什么时候需要付费?',
      en: 'Are free resources enough? When should I pay?'
    },
    answer: {
      zh: '入门阶段可充分利用免费或 Freemium 资源建立习惯。当你需要系统课程、专业反馈或针对性备考,付费资源能明显加速进步。',
      en: 'Free or freemium tools are great for building habits early on. When you need structured curricula, expert feedback, or targeted exam prep, paid tools can dramatically accelerate progress.'
    }
  },
  {
    id: 'combine-resources',
    question: {
      zh: '是否需要同时使用多种工具?',
      en: 'Should I combine multiple tools?'
    },
    answer: {
      zh: '建议保持 1-2 个主力工具,辅以针对性补充。例如: 用综合课程打基础,再配对口语练习或词汇记忆工具,形成“主干+补充”的学习框架。',
      en: 'Keeping one or two core tools plus targeted supplements works best. For instance, pair a comprehensive course with a speaking partner or vocab trainer to build a “cornerstone + booster” routine.'
    }
  }
]
