let vIcon = document.getElementById('icon');
let vUpBtn = document.getElementById('upButton');


window.addEventListener('scroll', function() {
    if (window.scrollY > 149) {
        vUpBtn.style.opacity = 0.9;
        vUpBtn.style.cursor = 'pointer';
        vIcon.style.cursor = 'pointer'
    } else {
        vUpBtn.style.opacity = 0;
        vUpBtn.style.cursor = 'context-menu';
        vIcon.style.cursor = 'context-menu'
    }
})

vUpBtn.addEventListener('click', function() {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 100);
    vUpBtn.classList.add('isClicked');
    setTimeout(function() {
        vUpBtn.classList.remove('isClicked')
    }, 750)
})


const translations = {
    en: {
        home: "Home",
        about: "About",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "(عر) Arabic",
        english: "English (en)",
        graphicH: "Graphic design services",
        graphicP1: "Graphic design, or what is called the art of visual communication, is a creative method used by the designer to deliver a specific message to customers and the public. The field of graphic design includes many specializations, including graphic videos, drawings, logos, character design, and animation. The most important thing that distinguishes graphic designs is that they are characterized by art, creativity, and the creation of ideas. Modern, so the graphic designer must have the ability to innovate and be creative, and he does not stop at what the client asks of him only, but he must create a modern design that distinguishes it from other designers.",
        graphicP2: "Why is graphic design so important?",
        graphicP3: "If you have a company or products and want to reach a larger group of targeted customers, professional designs are the first step to your success, especially if you are planning e-marketing campaigns.",
        graphicH2: "The services we provide to you in the world of graphic design",
        graphicLi1: "Designing flyers, brochures and banners",
        graphicLi2: "Graphic and infographic designs for marketing campaigns",
        graphicLi3: "Design of exhibition units",
        graphicLi4: "Design product catalog and menus",
        graphicLi5: "Social media advertisement design",
        googleH: "Google Ads creation and management",
        googleP1: "Is your business desperate for more leads and sales? Don't get enough of online marketing? A Google Ads campaign creation and management service that creates cost-effective campaigns through the Google advertising platform.",
        googleP2: "We have years of experience with an integrated digital marketing team who are certified in creating and managing Google Ads ads to help small businesses, large companies and agencies get a much-needed increase in revenue.",
        googleP3: "The Google search engine is considered the best for you in attracting potential customers with a high purchase intention, so we work with you from the beginning to plan the appropriate budget for your services/products with extreme accuracy and at the lowest cost.",
        googleH2: "The services we provide to you on Google Ads",
        googleLi1: "Create an account and adjust the settings",
        googleLi2: "Conduct a study and analysis of search terms related to your activity",
        googleLi3: "Create and prepare campaigns that suit your needs and goals",
        googleLi4: "Writing and designing advertisements",
        googleLi5: "Daily follow-up and management to improve and develop performance",
        googleLi6: "Making periodic reports",
        googleLi7: "More than 72% of Internet users around the world rely on the Google search engine",
        googleLi8: "It is considered the easiest and fastest way to introduce consumers to your service or commodity",
        googleLi9: "Through it, the brand can be promoted with a video, image or content",
        googleLi10: "Its cost is determined by you, while ensuring quick results.",
        googleLi11: "95% of clicks are due to the first three results",
        googleLi12: "Google Ads relies mainly on targeted words and, by its nature, works to quickly reach those searching for your brand or service provided.",
        googleLi13: '"Google Search Ads is "text',
        googleLi14: "YouTube video ads",
        googleLi15: "Display ads (image and banner ads)",
        googleLi16: "App Ads (Google AdMob)",
        googleLi17: "Product Ads (Google Shopping)",
        googleLi18: "Advertising and marketing via social media",
        googleH3: "Why should you use Google Ads campaigns?",
        googleH4: "All types of advertising campaigns available",
        websiteH1: "Website design and development",
        websiteP1: "We provide the best solutions and services for website design and development that are effective in terms of results and suitability of website design and development costs within the available budget limits with the aim of creating an integrated marketing platform and center for all marketing and advertising campaigns for your project or company.",
        websiteP2: "We have an integrated team of website design and development experts who have the appropriate skills and experience for all website development projects for commercial activities.",
        websiteP3: "All website design projects are compatible with the browsing experience from all devices and mobile phones",
        websiteH2: "Steps to design and develop the website",
        websiteLi1: "Analyze the type of website, its domain, and similar websites",
        websiteLi2: "Planning the structure and appearance of the website",
        websiteLi3: "Make an interface design that matches the brand’s logo and colors",
        websiteLi4: "Programming the website and producing the first trial version of the website",
        websiteLi5: "Adding and formatting website content",
        websiteLi6: "Testing website performance and loading speed",
        websiteLi7: "Preparing the website for search engines",
        socialH1: "Social media and your product",
        socialP1: "Marketing through social networking sites is one of the most effective technological methods in reaching the largest segment of the target audience and achieving the desired goals, in addition to improving and designing the commercial identity of the product you offer or the idea you publish",
        socialP2: "Promotion is no longer the traditional method that companies used to promote their goods or services before",
        socialP3: "Among the most famous of these sites that have succeeded in imposing their control on the scene in recent years are: Facebook - Twitter - Instagram, and they have succeeded in introducing the public to the products, achieving the largest return on investment from customers, and outperforming traditional means",
        socialP4: "We are here to help you! Our company promotes your product effectively and with the best results. We can do this by providing a comprehensive strategy on how to manage content and increase the number of customers via social media",
        socialH2: "Social media marketing services",
        socialH3: "How social media can help you achieve your marketing goals",
        socialH4: "Ranking of social media marketing in terms of popularity",
        socialH5: "The social media marketing strategy is based on",
        socialLi1: "Study and analyze your accounts and competitors’ accounts",
        socialLi2: "Develop a strategy to achieve your goals",
        socialLi3: "Make a monthly plan and prepare the content, including texts, images, and videos",
        socialLi4: "Preparing, developing and managing sponsored advertising campaigns",
        socialLi5: "Daily follow-up and management to improve and develop performance",
        socialLi6: "Making periodic reports",
        socialLi7: "Increase traffic to your site",
        socialLi8: "Raising brand awareness",
        socialLi9: "Improving communication and interaction with the public",
        socialLi10: "Increase profit return",
        socialLi11: "The larger and more engaged your audience is on social media, the easier it will be for you to achieve another marketing goal on your list",
        socialLi12: "Spread your brand as widely as possible",
        socialLi13: "Facebook Owner of 1.9 billion daily active users",
        socialLi14: "The platform's popularity rose in 2020 to reach 1 billion Tiktok users",
        socialLi15: "Best for public relations and community building, owner of 211 million Twitter users",
        socialLi16: "Best for: B2B relationships, business development, and social selling Used by 774 million active users worldwide LinkedIn",
        socialLi17: "Best for brand awareness in an entertaining way suitable for a 315 million YouTube audience",
        socialLi18: "A distinguished platform for presenting the brand among the youth group, with 306 million daily active Snapchat users",
        socialLi19: "Research and study the target audience",
        socialLi20: "Determine the platforms on which the target audience is located",
        socialLi21: "Create and share unique and engaging content",
        socialLi22: "Organize a schedule for participation",
        socialLi23: "Urging the audience to take action regarding the service or product",
        socialLi24: "Analysis of the results",
        busIdH1: "Differentiate your brand",
        busIdP1: "Designing a brand identity is important for any business. You need a unique structure, a sign, a symbol, words, or a combination of all of these things to create an image that distinguishes your products from competitors. Because the main aspect of marketing yourself today is online, your brand must reflect your brand identity in all aspects of your business, which makes your customers recognize you with ease. If you already have a logo, the next step before optimizing your site for search engines is to print the logo on your business.",
        busIdP2: "At EO-Dijital, we specialize in creating brand identity, whether for your publications or online. We guarantee you the best compatibility between your commercial work and your advertising and printing appearance. Just tell us your needs, and we will provide the best advice on how your business can appear to your target audience.",
        busIdH2: "What we offer you in business identity design",
        busIdLi1: "Trademark (the symbol or logo that indicates and summarizes your identity)",
        busIdLi2: "The company's advertising supplies (correspondence papers, business cards...)",
        busIdLi3: "Advertising publications",
        busIdLi4: "Submitting an instruction file for publications",
        busIdLi5: "know who you are",
        busIdLi6: "Determine what you offer, your aspirations and goals for the product or service you provide, as well as your position in relation to your competitors",
        busIdLi7: "Defining the shape through precise layout that expresses the brand",
        busIdLi8: "Choose the color to serve the brand's strategy",
        busIdLi9: "Print the brand on everything related to the organization",
        busIdLi10: "Logo",
        busIdLi11: "picture",
        busIdLi12: "video",
        busIdLi13: "Publications from banners, cards, brochures",
        busIdLi14: "Strength: The more designs are characterized by strength, the more they naturally work to impart strength to the institution or product",
        busIdLi15: "Vitality: It must convey a detailed picture of the company’s activity",
        busIdLi16: "Innovation: It must be creatively unique and unconventional",
        busIdLi17: "Focus and brevity: It does not carry a lot of meaning and works to convey a focused idea about the organization so as not to distract the target audience",
        busIdH3: "Important matters for designing a unique business identity",
        busIdH4: "Business identity design includes all graphic works from",
        busIdH5: "Features of successful business identity design",
        seoH1: "SEO",
        seoH2: 'The services we provide to optimize websites for search engines',
        seoH3: 'What is the importance of preparing your site for search engines on Google?',
        seoH4: 'Optimizing and preparing sites for search engines (SEO) in steps',
        seoP1: 'Optimizing websites for search engines allows you to market your website through search engines. By reaching the first pages of Google, and reaching those interested in your field. The services and products you provide to your customers',
        seoP2: 'Increasing the number of visits to your site and the number of site impressions on Google, which greatly helps in the branding process',
        seoP3: 'Preparing your site for the Google search engine is one of the modern marketing solutions, and the second step after designing and developing websites, building natural links, and integrating with Google Maps packages.',
        seoP4: 'It is one of the most important marketing methods for any company that wants to enhance its presence online locally and globally. We help you get to the first page of Google. And increase the number of visitors to your website and store on the web, thus converting a large percentage of potential customers into real customers.',
        seoLi1: 'Conduct comprehensive research on all keywords and keywords important to your field of work, refute them, and build a business plan with them',
        seoLi2: 'Analyze the competitors of your business activity, know the strengths and weaknesses of each of them, and identify the opportunities available to overcome them as quickly as possible',
        seoLi3: 'A comprehensive analysis of the site, identifying and fixing errors, preparing the site pages, increasing their speed and performance, and adjusting the content and meta',
        seoLi4: 'External preparation involves building strong and useful links to the site to raise its trust on the Google search engine',
        seoLi5: 'Daily monitoring and management to improve and develop performance',
        seoLi6: 'Making periodic reports',
        seoLi7: 'It helps your target audience find your site',
        seoLi8: 'SEO does not require you to pay for advertising space',
        seoLi9: 'It enhances your credibility and authority among sites',
        seoLi10: 'Helps you stay ahead of your competitors',
        seoLi11: "It's easy to measure",
        seoLi12: 'It depends on the keywords that the target audience is searching for, which makes it an important pillar for the success of the marketing plan',
        seoLi13: 'Setting goals and KPIs for the website',
        seoLi14: 'Develop a content strategy by creating a blog, which works to reach real searchers for the brand or service',
        seoLi15: 'Search for keywords',
        seoLi16: 'Analyze competitors and make the most of social media to analyze the target audience',
        seoLi17: 'Building internal and external links to the site',
        seoLi18: 'Measure audience interaction and bounce rate',
        blog: "Blog",
        burgerLi1: "Home",
        burgerLi2: "About",
        burgerLi3: "Marketing services",
        burgerLi4: "Blog",
        burgerLi5: "Project models",
        burgerLi6: "Contact us",
        footerBox1H: "About company",
        footerBox1P: "EO-Dijital Company is the best digital marketing company that provides multiple services such as website design, Google campaign management, SEO, social media marketing and graphic design.",
        footerBox2H: "Connect us",
        footerBox2Location: "Istanbul - Esenyurt - Prestige Park Residence",
        footerBox2Phone: "33 85 018 536 90+",
        footerBox3H: "Important links",
        aboutLink1: "About EO-Digital",
        aboutLink2: "EO-Digital Services",
        aboutLink3: "Previous work",
        aboutLink4: "Contact us",
        title1: "EO-Dijital | Business identity",
        title2: "EO-Dijital | Google Ads",
        title3: "EO-Dijital | Graphic Design",
        title4: "EO-Dijital | Marketing via social media",
        title5: "EO-Dijital | SEO",
        title6: "EO-Dijital | Website design and development",
    },

    ar: {
        home: "الرئيسية",
        about: "من نحن",
        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        graphicH: "خدمات تصميم الجرافيك",
        graphicP1: "تصميم الجرافيك او ما يسمى فن الاتصالات البصرية هو أسلوب ابداعى يقوم بة المصمم لإيصال رسالة معينة الى العملاء والجمهور, مجال تصميم الجرافيك يشمل الكثير من التخصصات منها فيديوهات الجرافيك و الرسومات والشعارات وتصميم الشخصيات و الرسوم المتحركة أهم ما يميز تصميمات الجرافيك انها تتسم بالفن والإبداع وأبتكار افكار حديثة لذلك لا بد ان يكون لدى مصمم الجرافيك المقدرة على الابتكار والابداع ولا يتوقف عند ما يطلبة العميل منة فقط ولكن علية إبتكار تصميم حديثة يتميز بها عن غيرة من المصممين",
        graphicP2: "لماذا تصميم الجرافيك شئ فى غاية الاهمية ؟",
        graphicP3: "اذا كان لديك شركة او منتجات وتريد الوصول إلى فئة أكبر من العملاء المستهدفين ، فإن التصميمات الاحترافية هي أول خطوة لنجاحك، وبالتحديد إذا كنت تخطط لحملات التسويق الإلكتروني",
        graphicH2: "الخدمات التي نقدمها لك في عالم التصميم الجرافيكي",
        graphicLi1: "تصميم الفلايرز و البروشوارت و البنرات",
        graphicLi2: "تصميمات الجرافيك والانفوجرافيك لحملات التسويق",
        graphicLi3: "تصميم وحدات المعارض",
        graphicLi4: "تصميم كتالوج المنتجات وقوائم الطعام",
        graphicLi5: "تصميم اعلانات سوشيال ميديا",
        googleH: "Google Ads إنشاء وإدارة",
        googleP1: "هل عملك بحاجة ماسة لمزيد من العملاء المحتملين والمبيعات؟ ألا تحصل على ما يكفي من التسويق عبر الإنترنت؟ تنشئ خدمة من انشاء و إدارة حملات جوجل أدز حملات فعالة من حيث التكلفة من خلال منصة Google الإعلانية.",
        googleP2: "لدينا سنوات من الخبرة مع فريق تسويق رقمي متكامل من المعتمدين في انشاء و إدارة إعلانات جوجل أدز لمساعدة الشركات الصغيرة والشركات الكبرى والوكالات في الحصول على زيادة في الإيرادات مطلوبة بشدة.",
        googleP3: "محرك بحث google يعتبر هو الافضل لك في جذب عملاء محتملين ذو نية شراء عالية, لذلك نعمل معك منذ البداية لتخطيط الميزيانية المناسبة لخدماتك/منتجاتك بدقه متناهيه وبأقل تكلف",
        googleH2: "الخدمات التي نقدمها لك في جوجل أدز",
        googleLi1: "انشاء الحساب وتظبيط الاعدادات",
        googleLi2: "عمل دراسة و تحليل للكلمات البحثية المرتبطة بنشاطك",
        googleLi3: "انشاء و اعداد الحملات التى تناسب احتياجتك و اهدفك",
        googleLi4: "كتابة و تصميم الاعلانات",
        googleLi5: "المتابعة و الادارة اليومية لتحسين و تطوير الاداء",
        googleLi6: "عمل التقرير الدورية",
        googleLi7: "أكثر من 72% من مستخدمي الأنترنت حول العالم يعتمدوا على محرك البحث google",
        googleLi8: "تعتبر اسهل و أسرع وسيلة لتعريف المستهلكين بخدمتك او سلعتك",
        googleLi9: "يمكن من خلالها الترويج للعلامة التجارية بفيديو او صورة او محتوى",
        googleLi10: "تكلفتها انت من تحددها مع ضمان نتائج سريعة.",
        googleLi11: "95% من النقرات تكون من حظ أول ثلاث نتائج منها",
        googleLi12: "تعتمد جوجل أدز بشكل أساسي على الكلمات المستهدفة وهى تعمل بطبيعتها على الوصول السريع للباحثين عن علامتك التجارية او خدمتك المقدمة",
        googleLi13: '" إعلانات شبكة البحث جوجل " نصية',
        googleLi14: "إعلانات الفيديو عبر اليوتيوب",
        googleLi15: "إعلانات الصورية ( المصورة وإعلانات البانر)",
        googleLi16: "(Google AdMob) إعلانات التطبيقات عبر",
        googleLi17: "(Google Shopping) إعلانات المنتج",
        googleLi18: "الإعلانات و التسويق عبر وسائل التواصل الإجتماعي",
        googleH3: "لماذا ينبغي عليك استخدام حملات اعلانات جوجل؟",
        googleH4: "جميع أنواع حملات الإعلانات المتاحة",
        websiteH1: "تصميم وتطوير المواقع الإلكترونية",
        websiteP1: "نوفر أفضل حلول وخدمات تصميم وتطوير المواقع الإلكترونية الفعالة من حيث النتائج وملائمة تكاليف تصميم المواقع الإلكترونية وتطويرها لحدود الميزانية المتاحة بهدف إنشاء منصة تسويقية متكاملة ومركز لجميع الحملات التسويقية والإعلانية لمشروعك أوشركتك",
        websiteP2: "نمتلك فريق متكامل من خبراء تصميم وتطوير المواقع الإلكترونية يتوافر لديهم المهارات والخبرات الملائمة لجميع مشروعات تطوير المواقع الإلكترونية للأنشطة التجارية",
        websiteP3: "جميع مشروعات تصميم المواقع الإلكترونية متوافقة مع تجربة التصفح من جميع الأجهزة والهواتف الجوالة",
        websiteH2: "خطوات تصميم و تطوير الموقع الإلكتروني",
        websiteLi1: "تحليل نوع الموقع الإلكتروني ومجاله والمواقع الإلكترونية المشابهة",
        websiteLi2: "تخطيط بنية و شكل الموقع الإلكتروني",
        websiteLi3: "عمل تصميم الواجهة بما يتناسب مع شعار و الوان العلامة التجارية",
        websiteLi4: "برمجة الموقع الإلكتروني وإخراج أول نسخة تجربية للموقع",
        websiteLi5: "إضافة و تنسيق محتوي الموقع الإلكتروني",
        websiteLi6: "اختبار اداء الموقع الإلكتروني و سرعة التحميل",
        websiteLi7: "تهيئة الموقع الإلكتروني لمحركات البحث",
        socialH1: "السوشيل ميديا و منتجك",
        socialP1: "التسويق عبر مواقع التواصل الإجتماعي من أكثر الطرق التكنولوجية فعالية في الوصول إلى أكبر شريحة من الجمهور المستهدف وتحقيق الأهداف المرجوة , بالإضافة إلى تحسين و تصميم الهوية التجارية للمنتج الذي تقدمه أو الفكرة التي تنشرها",
        socialP2: "فلم يعُد الترويج بطريقته التقليدية التي كانت تتبعها الشركات في ترويج سلعها أو خدماتها من قبل",
        socialP3: "ومن أشهر تلك المواقع التي نجحت في فرض سيطرتها على الساحة خلال السنوات الأخيرة: فيسبوك – تويتر – انستجرام، ونجحت في تعريف الجمهور بالمنتجات وتحقيق أكبر عائد استثماري من العملاء والتفوق على الوسائل التقليدية",
        socialP4: "نحن هنا لمساعدتك! فشركتنا تقوم بالترويج لمنتجك بشكل فعال وبأفضل النتائج, يُمكننا ذلك عن طريق تقديم استراتيجية شاملة عن كيفية إدارة المحتوى وزيادة عدد العملاء عبر السوشيل ميديا",
        socialH2: "خدمات التسويق عبر مواقع التواصل الإجتماعي",
        socialH3: "كيف يمكن أن تساعدك السوشيل ميديا في تحقيق أهدافك التسويقية",
        socialH4: "ترتيب التسويق عبرمواقع التواصل الإجتماعي من حيث الشعبية",
        socialH5: "تقوم استراتيجية التسويق عبر مواقع التواصل الإجتماعي على",
        socialLi1: "دراسة و تحليل حساباتك و حسابات المنافسين",
        socialLi2: "وضع استراتيجة لتحقيق اهدافك",
        socialLi3: "عمل خطة شهرية و تجهيز المحتوي من نصوص و صور و فيديوهات",
        socialLi4: "إعداد وتطوير وإدارة حملات الإعلانات الممولة",
        socialLi5: "المتابعة و الادارة اليومية لتحسين و تطوير الاداء",
        socialLi6: "عمل التقرير الدورية",
        socialLi7: "زيادة حركة المرور لموقعك",
        socialLi8: "رفع الوعي بالعلامة التجارية",
        socialLi9: "تحسين التواصل والتفاعل مع الجمهور",
        socialLi10: "زيادة العائد الربحي",
        socialLi11: "كلما كان جمهورك أكبر وأكثر تفاعلًا على شبكات التواصل الاجتماعي ، كان من الأسهل عليك تحقيق هدف تسويقي آخر في قائمتك",
        socialLi12: "نشر علامتك التجارية على أوسع نطاق ممكن",
        socialLi13: "صاحب الـ 1.9 مليار مستخدم نشط يوميًا Facebook",
        socialLi14: "الأفضل للعلاقات العامة وبناء المجتمعات صاحب 211 مليون مستخدم Twitter",
        socialLi15: "ارتفعت شعبية المنصة في عام 2020 لتصل لـ 1 مليار مستخدم Tiktok",
        socialLi16: "الأفضل لـ : العلاقات بين الشركات ، وتطوير الأعمال ، والبيع الاجتماعي يستخدمه 774 مليون مستخدم نشط حول العالم LinkedIn",
        socialLi17: "الأفضل للوعي بالعلامة التجارية بطريقة ترفيهية ملائمة لقطاع يصل لـ 315 مليون من الجمهور Youtube",
        socialLi18: "منصة متميزة لتقديم العلامة التجارية بين الفئة الشبابية, يتواجد عليه 306 مليون نشط يوميًا Snapchat",
        socialLi19: "البحث ودراسة الجمهور المستهدف",
        socialLi20: "تحديد المنصات المتواجد عليها الجمهور المستهدف",
        socialLi21: "إنشاء ومشاركة محتوى فريد وجذاب",
        socialLi22: "تنظيم جدول زمني للمشاركات",
        socialLi23: "حث الجمهور للقيام بفعل تجاه الخدمة أو المنتج",
        socialLi24: "تحليل النتائج",
        busIdH1: "ميز علامتك التجارية",
        busIdP1: "يعد تصميم هوية تجارية شئ هام لأي نشاط تجاري, فأنت تحتاج الى بناء فريد، علامة ، رمز، كلمات أو خليط من كل هذه الاشياء لتنشئ الصورة التي تميز منتجاتك عن المنافسين. ولأن الجانب الأساسي من تسويق نفسك اليوم عبر الانترنت، فلابد ان تعكس علامتك هويتك التجارية في كل جوانب أعمالك ، مما يجعل عملاؤك يتعرفون عليك بكل سهولة. اذا كان لديك شعار بالفعل، فإن الخطوة التالية وقبل تهيئة المواقع لمحركات البحث هي طباعة الشعار على أعمالك.",
        busIdP2: "حن في إي او ديجيتال متخصصون في صنع الهوية التجارية, سواء لمطبوعاتك او عبر الانترنت. نحن نضمن لك افضل توافق بين اعمالك التجارية وظهورك الدعائي والطباعي. فقط اخبرنا باحتياجاتك, وسوف نقوم بتقديم افضل النصائح حول كيفية ظهور اعمالك التجارية لجمهورك المستهدف.",
        busIdH2: "ما الذي نقدمه لك في تصميم الهوية التجارية",
        busIdLi1: "العلامة التجارية (الرمز او الشعار الذي يشير الى ويختصر هويتك )",
        busIdLi2: "المستلزمات الدعائية للشركة ( أوراق مراسلات، بطاقات عمل...)",
        busIdLi3: "مطبوعات الدعاية والاعلان",
        busIdLi4: "تسليم ملف إرشادي للمطبوعات",
        busIdLi5: "إعرف من أنت",
        busIdLi6: "حدد ماذا تقدم وما تطلعاتك وأهدافك من المنتج أو الخدمة التي تقدمها و كذلك و ضعك بالنسبة لمنافسيك",
        busIdLi7: "تحديد الشكل من خلال تخطيط دقيق يعبر عن العلامة التجارية",
        busIdLi8: "أختيار اللون بما يخدم استراتيجة العلامة",
        busIdLi9: "طباعة العلامة التجارية على كل ما يتعلق بالمؤسسة",
        busIdLi10: "شعار",
        busIdLi11: "صورة",
        busIdLi12: "فيديو",
        busIdLi13: '" المطبوعات من " بنرات _ كروت _ بروشور',
        busIdLi14: "القوة :كلما اتسمت التصاميم بالقوة, فتعمل بطبيعتها على اضفاءها على المؤسسة أو المنتج",
        busIdLi15: "الحيوية : يجب ان تنقل صورة مفصلة عن نشاط الشركة",
        busIdLi16: "الإبتكار : يجب أن تكون بشكل إبداعي فريدة بذاتها, و غير تقليدية",
        busIdLi17: "التركيز والإختصار: ألا تحمل الكثير من المعاني وتعمل على توصيل فكرة مركزة عن المؤسسة حتى لا تشتت الجمهور المستهدف",
        seoH1: "SEO السيو",
        seoH2: "الخدمات التي نقدمها لتهيئة المواقع لمحركات البحث",
        seoH3: "ما اهمية تهيئة موقعك لمحركات البحث على جوجل ؟",
        seoH4: 'تحسين وتهيئة المواقع لمحركات البحث "السيو" في خطوات',
        seoP1: "تهيئة المواقع لمحركات البحث تتيح لك خدمة التسويق لموقعك الإلكتروني من خلال محركات البحث. بالوصول الى الصفحات الأولى فى جوجل, والوصول الى المهتمين بمجالك. والخدمات والمنتجات التى تقدمها لعملائك",
        seoP2: "زيادة عدد زيارات موقعك ومرات ظهور الموقع على جوجل, الأمر الذى يساعد فى عملية الـبراندينج بشكل كبير",
        seoP3: "فتهيئة موقعك لمحرك البحث جوجل هو احد الحلول التسويقية الحديثة, وثاني خطوة بعد تصميم وتطوير المواقع الإلكترونية, وبناء الروابط الطبيعية، و التكامل مع حزم خرائط جوجل",
        seoP4: "إنها احد اهم طرق التسويق لأي شركة ترغب في تعزيز وجودها عبر الإنترنت محليًا، وعالميا. نحن نساعدك على الوصول إلى الصفحة الأولى فى جوجل. و زيادة عدد الزوار إلى موقعك ومتجرك على الويب, و بالتالى تحويل نسبه كبيره من العملاء المحتملين الى عملاءحقيقيين",
        seoLi1: 'عمل بحث شامل على جميع الكلمات الرئيسية والمفتاحية المهمة لمجال عملك وتفنيدها وبناء خطه عمل بها',
        seoLi2: 'تحليل المنافسين لنشاط عملك ومعرفة نقاط الضعف والقوة لكل منهم وتحديد الفرص المتاحة لتخطيهم فى أسرع وقت',
        seoLi3: 'تحليل شامل للموقع وتحديد الأخطاء وإصلاحها وتهيئة صفحات الموقع ورفع سرعتها وأداءها وضبط المحتوى والميتا',
        seoLi4: 'التهيئة الخارجية ويتم فيها بناء روابط قوية ومفيدة للموقع لرفع ثقته على محرك بحث جوجل',
        seoLi5: 'المتابعة و الادارة اليومية لتحسين و تطوير الاداء',
        seoLi6: 'عمل التقرير الدورية',
        seoLi7: 'يساعد جمهورك المستهدف في العثور على موقعك',
        seoLi8: 'لا يتطلب منك مُحسّنات محرّكات البحث الدفع مقابل مساحة إعلانية',
        seoLi9: 'يعزز مصداقيتك وسلطتك بين المواقع',
        seoLi10: 'يساعدك على البقاء في صدارة منافسيك',
        seoLi11: 'من السهل قياسه',
        seoLi12: 'عتمد على الكلمات المفتاحية التي يبحث عنها الجمهور المستهدف , مما يجعله ركيزة هامة لنجاح الخطة التسويقية',
        seoLi13: 'تحديد الأهداف ومؤشرات الأداء الرئيسية لموقع الويب',
        seoLi14: 'وضع استراتيجة للمحتوى من خلال إنشاء مدونة, والتي تعمل على الوصول للباحثيين الحقيقين عن العلامة التجارية او الخدمة',
        seoLi15: 'البحث عن الكلمات المفتاحية',
        seoLi16: 'تحليل المنافسين و الإستفادة قدر الإمكان من وسائل التواصل الإجتماعي لتحليل الجمهور المستهدف',
        seoLi17: 'بناء الروابط الداخلية والخارجية للموقع',
        seoLi18: 'قياس مدى تفاعل الجمهور ومعدل الإرتداد',
        footerBox1H: "عن الشركة",
        footerBox1P: "إي اوديجيتال شركة أفضل شركة تسويق رقمي تقدم خدمات متعددة مثل تصميم مواقع الكترونية , إدارة احملات جوجل, SEO, التسويق عبر التواصل الاجتماعي و تصميم الجرافيك",
        footerBox2H: "تواصل معنا",
        footerBox2Location: "اسطنبول - اسنيورت - مجمع برستيج بارك",
        footerBox2Phone: "+90 536 018 85 33",
        footerBox3H: "روابط هامة",
        aboutLink1: "عن اي او ديجيتال",
        aboutLink2: "خدمات اي او ديجيتال",
        aboutLink3: "سابقة الاعمال",
        aboutLink4: "تواصل معنا",
        blogHead: "مقالات و معلومات عن التسويق الإلكتروني",
        blog: "المدونة",
        burgerLi1: "الرئيسية",
        burgerLi2: "من نحن",
        burgerLi3: "الخدمات التسويقية",
        burgerLi4: "المدونة",
        burgerLi5: "نماذج المشاريع",
        burgerLi6: "توصل معنا",
        title1: "أي او ديجيتال | الهوية التجارية",
        title2: "أي او ديجيتال | إعلانات جوجل أدز",
        title3: "أي او ديجيتال | تصميم الجرافيك",
        title4: "أي او ديجيتال | التسويق عبر مواقع التواصل الإجتماعي",
        title5: "أي او ديجيتال | سيو",
        title6: "أي او ديجيتال | تصميم و تطوير الموقع الإلكتروني",

    }
}

const languageSelector = document.querySelector('select');

const loactionBox = document.getElementById("loactionBox");
const footerBox2Location = document.getElementById("footerBox2Location");
const copyContainer = document.getElementById("copyContainer");
const vGraphicLi1 = document.getElementById("vGraphicLi1");
const vGraphicLi2 = document.getElementById("vGraphicLi2");
const vGraphicLi3 = document.getElementById("vGraphicLi3");
const vGraphicLi4 = document.getElementById("vGraphicLi4");
const vGraphicLi5 = document.getElementById("vGraphicLi5");





languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value)
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(elements);
    elements.forEach((element) => {
        const translationsKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationsKey]
    });
    if (language === 'ar') {
        document.dir = 'ltr'
        languageSelector.style.backgroundPosition = "90px 3.5px";
        loactionBox.style.width = "93%";
        footerBox2Location.style.fontSize = "1rem";
        vGraphicLi1.style.paddingRight = "8px"
        vGraphicLi2.style.paddingRight = "8px"
        vGraphicLi3.style.paddingRight = "8px"
        vGraphicLi4.style.paddingRight = "8px"
        vGraphicLi5.style.paddingRight = "8px"
        vGraphicLi1.style.paddingLeft = 0
        vGraphicLi2.style.paddingLeft = 0
        vGraphicLi3.style.paddingLeft = 0
        vGraphicLi4.style.paddingLeft = 0
        vGraphicLi5.style.paddingLeft = 0




    } else {
        document.dir = 'rtl'
        languageSelector.style.backgroundPosition = "7px 3.5px"
        loactionBox.style.width = "97%";
        footerBox2Location.style.fontSize = "0.8rem";

        vGraphicLi1.style.paddingLeft = "8px"
        vGraphicLi2.style.paddingLeft = "8px"
        vGraphicLi3.style.paddingLeft = "8px"
        vGraphicLi4.style.paddingLeft = "8px"
        vGraphicLi5.style.paddingLeft = "8px"
        vGraphicLi1.style.paddingRight = 0
        vGraphicLi2.style.paddingRight = 0
        vGraphicLi3.style.paddingRight = 0
        vGraphicLi4.style.paddingRight = 0
        vGraphicLi5.style.paddingRight = 0

    }
}

const vBars = document.getElementById('bars');
const vBurger = document.getElementById('burgerMenu');
let isClickedTwo = 1
vBars.addEventListener('click', function() {
    if (isClickedTwo == 1) {
        vBurger.style.display = 'flex'
        setTimeout(() => {
            vBurger.style.opacity = 1
        }, 150);
        isClickedTwo = 2;
    } else {
        vBurger.style.opacity = 0
        setTimeout(() => {
            vBurger.style.display = 'none'
        }, 150);
        isClickedTwo = 1;
    }
});