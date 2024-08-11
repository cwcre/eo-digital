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
        title: "EO-Digital | Marketing Services",
        home: "Home",
        about: "About",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "(عر) Arabic",
        english: "English (en)",
        marketingP: "We provide a complete marketing strategy based on plans and study of your services, the market and competitors for your project, and determining the target audience (its characteristics, type, interests, language, educational level, economic level, and also social level). Based on these studies, we determine the appropriate platform to communicate with your audience and the language used with it to persuade it. With your product.",
        mPackageH1: "Basic package",
        mPackageH2: "Business package",
        mPackageH3: "The special package",
        list1Li1: " Single platform content management ",
        list1Li2: " Social media strategy and analysis ",
        list1Li3: " Study competitors ",
        list1Li4: " Preparing a strategy for managing accounts for a month",
        list1Li5: " Content strategy and publishing 8 posts per month ",
        list1Li6: " Consolidating the products commercial identity to reflect a good mental image among customers",
        list1Li7: " Setting your Instagram profile ",
        list1Li8: " Managing and implementing advertising campaigns (interaction) on the Instagram platform ",
        list2Li1: "Managing the content of two social media accounts",
        list2Li2: "Social media strategy and analysis",
        list2Li3: "Study competitors ",
        list2Li4: "Preparing a strategy for managing accounts for two months",
        list2Li5: "Develop a content strategy and publish 15 posts per month on social media platforms",
        list2Li6: "Consolidating the product’s commercial identity to reflect a good mental image among customers",
        list2Li7: "Set your profile for all platforms",
        list2Li8: "Motion graphic video design 30s",
        list2Li9: "Managing and implementing advertising campaigns on social media platforms",
        list3Li1: "Managing the content of three social media accounts",
        list3Li2: "Social media strategy and analysis",
        list3Li3: "Preparing a 3-month account management strategy",
        list3Li4: "Prepare a content strategy and publish 15 posts per month on social media platforms",
        list3Li5: "Create a content strategy and publish 8 posts per month",
        list3Li6: "Consolidating the product’s commercial identity to reflect a good mental image among customers",
        list3Li7: "Set profile for all platforms",
        list3Li8: "Motion graphic video design 30s",
        list3Li9: "Producing 2 60s advertising videos, including photos and videos",
        list3Li10: "Managing and implementing advertising campaigns on social media platforms",
        googleAdsH: "Google Ads Manage Google advertising campaigns",
        googleAdsp: "We create and manage advertising campaigns. We have years of experience with an integrated digital marketing team who are certified in creating and managing Google Ads ads to help small businesses, large companies and agencies obtain a much-needed increase in revenue “Google” professionally in proportion to your marketing goals and brand promotion. Increase website visits and achieve higher sales",
        graphicH: "Graphic Design",
        graphicP: "Jazeel is distinguished by providing the best to its customers in all its specialized fields, and the field of graphic design is considered one of the most important fields to which we pay special attention. We create for you the best non-imitation and exclusive designs that were found specifically for you. Each graphic design is different from the previous one and adds a special touch of creativity with good taste and choosing consistent colors that brings comfort and gives an impression of sophistication in providing integrated services and reflects the company’s identity.",
        socialMH: "Marketing via social media",
        socialMP: "Social media networks are considered one of the most important electronic marketing channels. We are here to help you! Our company promotes your product effectively and with the best results. We can do this by providing a comprehensive strategy on how to manage content and increase the number of customers via social media. Marketing via social media is one of the most effective technological methods in reaching the largest segment of the target audience and achieving the desired goals, in addition to To improve and design the commercial identity of the product you offer or the idea you publish",
        businessIH: "Business identity",
        businessIP: "The distinctive corporate identity in a market crowded with visual advertising elements is considered one of the most important factors for the success of promoting any company or institution, as the visual identity plays an important role in the way the company presents itself to customers. At Jazeel, we specialize in creating commercial identity, whether for your publications or online. . We guarantee you the best compatibility between your commercial work and your advertising and print appearance. Just tell us your needs, and we will provide the best advice on how your business can appear to your target audience",
        websiteH: "Website design and development",
        websiteP: "Professional website design that includes modern colors in addition to sub-pages that are responsive to all different screen sizes, starting from the small mobile screen, through to the tablet browser, laptop, and desktop devices of all different sizes. We provide the best solutions and services for designing and developing websites that are effective in terms of results and suitability of website design costs. Electronic and developed within the limits of the available budget with the aim of creating an integrated marketing platform and a center for all marketing and advertising campaigns for your project or company",
        seoH: "SEO Optimizing websites for search engines",
        seoP: "Search engines are the source of 70% of website visits, as website visitors resort to various search engines to answer specific questions or search for a product or service, increasing the number of visits to your website and the number of times the website appears on Google, which greatly helps in the branding process.",
        marketingBtn: "More details",
        sMParag: "In a highly competitive business environment, focusing on your customers' needs can give you an advantage over your competitors. Satisfied customers are more likely to repeat and drive new business to your organization. As such, your marketing strategy should be geared toward reaching those who They will benefit more from your product or service. A customer-driven marketing strategy includes elements such as identifying your target market and responding to their needs. It should also detail ways to retain customers and use them to help you get additional business.",
        footerBox1H: "About company",
        footerBox1P: "Jazeel Company is the best digital marketing company that provides multiple services such as website design, Google campaign management, SEO, social media marketing and graphic design.",
        footerBox2H: "Connect us",
        footerBox2Location: "Istanbul - Esenyurt - Prestige Park Residence",
        footerBox2Phone: "33 85 018 536 90+",
        footerBox3H: "Important links",
        aboutLink1: "About EO-Digital",
        aboutLink2: "EO-Digital Services",
        aboutLink3: "Previous work",
        aboutLink4: "Contact us",
        blog: "Blog",
        burgerLi1: "Home",
        burgerLi2: "About",
        burgerLi3: "Marketing services",
        burgerLi4: "Blog",
        burgerLi5: "Project models",
        burgerLi6: "Contact us",
    },

    ar: {
        title: "إي او ديجيتال | الخدمات التسويقية",
        home: "الرئيسية",
        about: "من نحن",
        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        marketingP: "نحن نقدم استراتيجية تسويقية كاملة مبنية على خطط ودراسة لخدماتك, السوق والمنافسين لمشروعك وتحديد الجمهور المستهدف”صفاته, نوعه, اهتماماته, لغته, المستوى التعليمي, الاقتصادي, وأيضا المستوى الاجتماعي”, وبناء على هذه الدراسات نحدد المنصة المناسبة للتواصل مع جمهورك واللغة المستخدمة معه لإقناعه بمنتجك .",
        mPackageH1: "الباقة الأساسية",
        mPackageH2: "باقة الأعمال",
        mPackageH3: "الباقة المميزة",
        list1Li1: "إدارة محتوي منصة واحدة ",
        list1Li2: "عمل إستراتيجية وتحليل للسوشيال ميديا ",
        list1Li3: "دراسة المنافسين ",
        list1Li4: "إعداد إستراتيجية لإدارة الحسابات لمدة شهر ",
        list1Li5: "إستراتيجية للمحتوي ونشر 8 بوست في الشهر ",
        list1Li6: "ترسيخ الهوية التجارية للمنتج بما يعكس الصورة الذهنية الجيدة لدى العملاء ",
        list1Li7: "ضبط الملف التعريفي لمنصة الأنستجرام •",
        list1Li8: "إدارة وتنفيذ الحملات الإعلانية ( تفاعل ) علي منصة الأنستجرام ",
        list2Li1: "إدارة محتوي منصتين من حسابات التواصل الاجتماعي",
        list2Li2: "عمل استراتيجية وتحليل للسوشيال ميديا ",
        list2Li3: "دراسة المنافسين ",
        list2Li4: "إعداد إستراتيجية لإدارة الحسابات لمدة شهرين ",
        list2Li5: "عداد استراتيجية للمحتوي ونشر 15 بوست في الشهر علي منصات التواصل الإجتماعي",
        list2Li6: "ترسيخ الهوية التجارية للمنتج بما يعكس الصورة الذهنية الجيدة لدى العملاء",
        list2Li7: "ضبط الملف التعريفي لكل المنصات ",
        list2Li8: "تصميم فيديو موشن جرافيك 30ث ",
        list2Li9: "إدارة وتنفيذ الحملات الإعلانية ( تفاعل ) علي منصات التواصل الإجتماعي",
        list3Li1: "دارة محتوي ثلاث منصات من حسابات التواصل الاجتماعي",
        list3Li2: "عمل إستراتيجية وتحليل للسوشيال ميديا ",
        list3Li3: "إعداد إستراتيجية لإدارة الحسابات لمدة 3 أشهر ",
        list3Li4: "إعداد إستراتيجة للمحتوي ونشر 15 بوست في الشهر علي منصات التواصل الإجتماعي",
        list3Li5: "عداد إستراتيجية للمحتوي ونشر 8 بوست في الشهر",
        list3Li6: "ترسيخ الهوية التجارية للمنتج بما يعكس الصورة الذهنية الجيدة لدى العملاء",
        list3Li7: "ضبط الملف التعريفي لكل المنصات ",
        list3Li8: "تصميم فيديو موشن جرافيك 30ث ",
        list3Li9: "إخراج 2 فيديو إعلاني 60 ث من صور وفيديوهات ",
        list3Li10: "إدارة وتنفيذ الحملات الإعلانية ( تفاعل ) علي جميع منصات التواصل الإجتماعي",
        googleAdsH: "Google ads إدارة حملات جوجل الإعلانية",
        googleAdsp: "نقوم بإنشاء وإدارة الحملات الإعلانية لدينا سنوات من الخبرة مع فريق تسويق رقمي متكامل من المعتمدين في انشاء و إدارة إعلانات جوجل أدز لمساعدة الشركات الصغيرة والشركات الكبرى والوكالات في الحصول على زيادة في الإيرادات مطلوبة بشدة “Google” باحترافية بما يتناسب مع أهدافك التسويقية و تعزيز العلامة التجارية، زيادة زيارات الموقع وتحقيق أعلى المبيعات",
        graphicH: "تصميم الجرافيك",
        graphicP: "إي او ديجيتال تميزت بتقديم الافضل لعملائها في كافة المجالات المختصة بها، و يعتبر مجال تصميم الجرافيك أحد أهم تلك المجالات التي نوليها عناية خاصة، نحن نبتكر لك أفضل التصاميم الغير مقلدة والحصرية التي وٌجدت خصيصاً لك. كل تصميم جرافيك يختلف عن سابقه ويضيف لمسة ابداع خاصة بذوق رفيع واختيار الوان متناسق يجلب الراحة و يعطي انطباع عن الرقي في تقديم خدمات متكاملة ويعكس هوية الشركة",
        socialMH: "التسويق عبر مواقع التواصل الإجتماعي",
        socialMP: "تتعتبر شبكات التواصل الاجتماعي من أهم قنوات التسويق الالكتروني , نحن هنا لمساعدتك! فشركتنا تقوم بالترويج لمنتجك بشكل فعال وبأفضل النتائج, يُمكننا ذلك عن طريق تقديم استراتيجية شاملة عن كيفية إدارة المحتوى وزيادة عدد العملاء عبر السوشيل ميديا,التسويق عبر مواقع التواصل الإجتماعي من أكثر الطرق التكنولوجية فعالية في الوصول إلى أكبر شريحة من الجمهور المستهدف وتحقيق الأهداف المرجوة , بالإضافة إلى تحسين و تصميم الهوية التجارية للمنتج الذي تقدمه أو الفكرة التي تنشرها",
        businessIH: "الهوية التجارية",
        businessIP: "تعتبر هوية الشركة المميزة في سوق مزدحم بعناصر الإعلانات المرئية أحد أهم عوامل نجاح ترويج أي شركة أو مؤسسة إذ أن الهوية البصرية تلعب دوراً هاماً في الطريقة التي تعرض بها الشركة نفسها للعملاء , حن في إي او ديجيتال متخصصون في صنع الهوية التجارية, سواء لمطبوعاتك او عبر الانترنت. نحن نضمن لك افضل توافق بين اعمالك التجارية وظهورك الدعائي والطباعي. فقط اخبرنا باحتياجاتك, وسوف نقوم بتقديم افضل النصائح حول كيفية ظهور اعمالك التجارية لجمهورك المستهدف",
        websiteH: "تصميم وتطوير المواقع الإلكترونية",
        websiteP: "تصميم موقع بشكل احترافي يشمل ألوان عصرية بالإضافة إلى الصفحات الفرعية المتجاوبة مع جميع أحجام الشاشات المختلفة بداية من شاشة الموبايل الصغيرة مروراً بالمتصفح اللوحي واللاب توب وأجهزة الديسك توب بكافة أحجامها المختلفة , نوفر أفضل حلول وخدمات تصميم وتطوير المواقع الإلكترونية الفعالة من حيث النتائج وملائمة تكاليف تصميم المواقع الإلكترونية وتطويرها لحدود الميزانية المتاحة بهدف إنشاء منصة تسويقية متكاملة ومركز لجميع الحملات التسويقية والإعلانية لمشروعك أو شركتك",
        seoH: "SEO تهيئة المواقع لمحركات البحث",
        seoP: "محركات البحث هي مصدر 70% من زيارات المواقع الإلكترونية حيث يقوم زوار المواقع باللجوء إلى محركات البحث المختلفة للإجابة على أسئلة معينة أو البحث عن منتج أو خدمة , زيادة عدد زيارات موقعك ومرات ظهور الموقع على جوجل, الأمر الذى يساعد فى عملية الـبراندينج بشكل كبير",
        marketingBtn: "المزيد من التفاصيل",
        sMParag: "في بيئة أعمال تنافسية للغاية، يمكن أن يمنحك التركيز على احتياجات عملائك ميزة على منافسيك، من المرجح أن يتكرر العملاء الراضين عن العملاء الجدد وأن يوجهوا أعمالاً جديدة إلى مؤسستك، على هذا النحو، يجب أن تكون استراتيجية التسويق الخاصة بك موجهة نحو الوصول إلى أولئك الذين سيستفيدون أكثر من منتجك أو خدمتك، تتضمن استراتيجية التسويق التي يوجهها العملاء عناصر مثل تحديد السوق المستهدف والتفاعل مع احتياجاتهم. كما يجب أن توضح بالتفصيل طرق الاحتفاظ بالعملاء واستخدامها لمساعدتك في الحصول على أعمال إضافية.",
        footerBox1H: "عن الشركة",
        footerBox1P: "إي او ديجيتال شركة أفضل شركة تسويق رقمي تقدم خدمات متعددة مثل تصميم مواقع الكترونية , إدارة احملات جوجل, SEO, التسويق عبر التواصل الاجتماعي و تصميم الجرافيك",
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
    }
}

const languageSelector = document.querySelector('select');

const loactionBox = document.getElementById("loactionBox");
const footerBox2Location = document.getElementById("footerBox2Location");
const copyContainer = document.getElementById("copyContainer");
const sMParag = document.getElementById("sMParag");





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
        sMParag.style.paddingRight = "30px"
        sMParag.style.paddingLeft = 0




    } else {
        document.dir = 'rtl'
        languageSelector.style.backgroundPosition = "7px 3.5px"
        loactionBox.style.width = "97%";
        footerBox2Location.style.fontSize = "0.8rem";
        sMParag.style.paddingLeft = "30px"
        sMParag.style.paddingRight = 0

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