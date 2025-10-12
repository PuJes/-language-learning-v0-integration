#!/bin/bash

# Translate LanguageRecommendationPage.tsx from Chinese to English

FILE="/Users/jesspu/codes/EL_2/language-learning-v0-integration/v0-components/LanguageRecommendationPage.tsx"

# Language names
sed -i '' 's/西班牙语/Spanish/g' "$FILE"
sed -i '' 's/法语/French/g' "$FILE"
sed -i '' 's/日语/Japanese/g' "$FILE"
sed -i '' 's/韩语/Korean/g' "$FILE"
sed -i '' 's/德语/German/g' "$FILE"
sed -i '' 's/意大利语/Italian/g' "$FILE"
sed -i '' 's/葡萄牙语/Portuguese/g' "$FILE"
sed -i '' 's/阿拉伯语/Arabic/g' "$FILE"
sed -i '' 's/俄语/Russian/g' "$FILE"
sed -i '' 's/印地语/Hindi/g' "$FILE"

# Common terms
sed -i '' 's/世界第二大母语，职场和旅游热门选择/World'\''s second most spoken native language, popular for business and travel/g' "$FILE"
sed -i '' 's/优雅的语言，艺术和时尚的象征/Elegant language, symbol of arts and fashion/g' "$FILE"
sed -i '' 's/东方文化的瑰宝，动漫和商业之门/Treasure of Eastern culture, gateway to anime and business/g' "$FILE"
sed -i '' 's/韩流文化的载体，就业优势明显/Carrier of Hallyu culture, strong employment advantages/g' "$FILE"
sed -i '' 's/严谨精密的语言，工程和哲学之选/Rigorous language, choice for engineering and philosophy/g' "$FILE"

# Tags
sed -i '' 's/拉丁语族/Romance languages/g' "$FILE"
sed -i '' 's/职场热门/Popular for careers/g' "$FILE"
sed -i '' 's/旅游实用/Practical for travel/g' "$FILE"
sed -i '' 's/浪漫语族/Romance languages/g' "$FILE"
sed -i '' 's/艺术文化/Arts and culture/g' "$FILE"
sed -i '' 's/外交语言/Diplomatic language/g' "$FILE"

# Timeline
sed -i '' 's/8-12个月/8-12 months/g' "$FILE"
sed -i '' 's/12-18个月/12-18 months/g' "$FILE"
sed -i '' 's/18-24个月/18-24 months/g' "$FILE"
sed -i '' 's/24-36个月/24-36 months/g' "$FILE"

# Learning path levels
sed -i '' 's/基础发音/Basic pronunciation/g' "$FILE"
sed -i '' 's/常用词汇/Common vocabulary/g' "$FILE"
sed -i '' 's/日常对话/Daily conversation/g' "$FILE"
sed -i '' 's/日常词汇/Daily vocabulary/g' "$FILE"
sed -i '' 's/简单对话/Simple conversation/g' "$FILE"
sed -i '' 's/基础语法/Basic grammar/g' "$FILE"
sed -i '' 's/复杂语法/Complex grammar/g' "$FILE"
sed -i '' 's/文化理解/Cultural understanding/g' "$FILE"
sed -i '' 's/文学阅读/Literary reading/g' "$FILE"
sed -i '' 's/商务/Business/g' "$FILE"
sed -i '' 's/高级写作/Advanced writing/g' "$FILE"
sed -i '' 's/流利表达/Fluent expression/g' "$FILE"
sed -i '' 's/流利交流/Fluent communication/g' "$FILE"

echo "Translation complete!"
