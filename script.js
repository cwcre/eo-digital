const form = document.querySelector("form");
const statusTxt = form.querySelector(".button-area span");


form.onsubmit = (e) => {
    e.preventDefault();
    statusTxt.style.color = "#b8b441";
    statusTxt.style.display = "block";


    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/conForm.php", true);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response;
            if (response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1) {
                statusTxt.style.color = "#ff0000";
            } else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = "none";
                }, 3000)
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}


let vIcon = document.getElementById('icon');
let vUpBtn = document.getElementById('upButton');


window.addEventListener('scroll', function() {
    if (window.scrollY > 249) {
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
        title: "EO-Dijital | Home",
        home: "Home",
        about: "About",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "Arabic (عر)",
        english: "English (en)",
        parag1: "EO Digital, as an electronic marketing company, depends in its method of work on science and experience together. We help commercial and service companies by providing electronic marketing consultations and digital marketing services to build an integrated community for them on the Internet, starting from building the brand and marketing online and targeting the appropriate audience for you until designing and creating Complete websites in addition to campaign and account management services on all electronic platforms",
        serBox1H: "Business identity design",
        serBox1P: "Brand identity is very important for any business project or service provided. You need the customer to remember you immediately if they need your product or service. This requires a brand identity that distinguishes you from competitors with a unique design for your brand.",
        moreBtn: "More details",
        serBox2H: "Managing Google Ads campaigns",
        serBox3H: "Graphic Design",
        serBox4H: "Marketing via social media",
        serBox5H: "Preparing websites for search engines (SEO).",
        serBox6H: "Website design and development",
        serBox2P: "Advertising on Google Ads has become an important means of electronic marketing. The Google search engine is considered the best search engine in attracting potential customers with a high purchase intention. Google Ads are one of the best advertising solutions ever.",
        serBox3P: "Graphic Design Graphic design or the art of visual communication is a creative method used by the designer to deliver specific messages to customers and the target audience. Graphic is a form of communication between you and your customer, and graphic specializations vary, including printed images, images on the Internet, videos, and animated graphics.",
        serBox4P: "Marketing on social media sites is considered one of the most effective ways to reach the target audience, and the least expensive. Among the most famous social media sites are Facebook, Twitter, Snapchat, Instagram, and LinkedIn. Through these channels, you can manage successful advertising campaigns that achieve all of their goals.",
        serBox5P: "Your website is ranked on the search engines on the first pages of the Google search engine. It is very important in e-marketing. Your appearance to those interested on the first pages turns those interested people into real customers for you and accordingly they visit your site more than once. Marketing by ranking your site on the search pages increases the production of 3 Many times more leads compared to other methods",
        serBox6P: "When starting a project, you will certainly want to design a website that will be your face and express your service. The website currently plays an important role in promoting your products to the largest number of consumers around the world, and we at EO-Dijital provide you with the best website designs that are visually attractive and easy to use. Compatible with mobile devices, within your available budget, we provide you with an integrated professional marketing platform for your project or service.",
        detailsHead: "Founder's word",
        detailsParag: "When establishing Eo-marketing, I had a dream of becoming one of the best marketing companies, not only in the Kingdom of Saudi Arabia, but also in the entire world. Since the establishment of the company, I have been keen to choose a work team that has experience and knowledge, relies on a well-thought-out marketing strategy, and can achieve its goals. Our clients are in business consulting and e-marketing services",
        detailsMan: "Obada Armanazi",
        blog: "Blog",

        teamH: "Our services",
        teamH2: "Our experiences",
        teamP: "We provide a complete marketing strategy based on plans and studies for your services, and we provide electronic marketing consulting services for the market and competitors of your project and identify the target audience “its characteristics, type, interests, language, educational level, economic level, and also social level.” And based on these studies, we determine the appropriate platform to communicate with them. Your audience and the language you use to convince them of your product",
        teamP2: "The efforts, expertise and marketing consultations of the work team provide a customized strategy and e-marketing plan suitable for your business to achieve a continuous and rewarding return on your investments.",
        messageHead: "Send a Message",
        messageBtn: "Send your Message",
        blogH1: "As a tool for success: Strategies to boost your project in 2024 through search engine optimization (SEO) service.”",
        blogP1: "As a tool for success: Strategies to enhance your project in 2024 through search engine optimization (SEO) service “Do you want to know...",
        blogH2: "Ramadan 2024: Great strategy for Ramadan advertisements and increasing sales",
        blogP2: "Ramadan 2024: A great strategy for Ramadan advertisements and increasing sales. The holy month of Ramadan is one of the strongest marketing seasons in the East...",
        blogH3: "Happy Life achieved an increase in the number of visitors to its website by 115,000 thousand visitors in the summer season of 2023 compared to the summer of 2022.",
        blogP3: "EO-Dijital Electronic Marketing Company has become the official marketing partner of the Happy Life Travel and Tourism Company...",
        blogMoreBtn: "More articles",
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
        blogHead: "Articles and information about electronic marketing",
        burgerLi1: "Home",
        burgerLi2: "About",
        burgerLi3: "Marketing services",
        burgerLi4: "Blog",
        burgerLi5: "Project models",
        burgerLi6: "Contact us",
    },

    ar: {
        title: "اي او ديجيتال | الرئيسية",
        home: "الرئيسية",
        about: "من نحن",
        blog: "المدونة",

        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        parag1: "تعتمد اي او ديجيتال كـشركة تسويق الكتروني في طريقة عملها على العلم والخبرة معاً, نساعد الشركات التجارية والخدمية من خلال تقديم استشارات تسويق الكتروني و خدمات التسويق الرقمي لبناء مجتمع متكامل لها على شبكات الإنترنت بداية من بناء العلامة التجارية والتسويق اونلاين واستهداف الجمهور المناسب لك حتى تصميم وإنشاء مواقع إلكترونية كاملة بالإضافة إلى خدمات إدارة الحملات والحسابات على جميع المنصات الإلكترونية",
        serBox1H: "تصميم الهوية التجارية",
        serBox1P: "تعد الهوية التجارية مهمة للغاية لأي مشروع تجاري أو خدمة مقدمة, فأنت تحتاج إلى أن يتذكرك العميل فورا في حالة احتاج إلى منتجك أو خدمتك, وهذا يطلب هوية تجارية تميزك عن المنافسين بتصميم فريد لعلامتك التجارية",
        moreBtn: "المزيد من التفاصيل",
        serBox2H: "إدارة حملات جوجل الإعلانية Google Ads",
        serBox3H: "تصميم الجرافيك",
        serBox4H: "التسويق عبر مواقع التواصل الإجتماعي",
        serBox5H: "تهيئة المواقع لمحركات البحث SEO",
        serBox6H: "تصميم وتطوير المواقع الإلكترونية",
        serBox2P: "الإعلان على جوجل إدز أصبح من الوسائل المهمة في التسويق الإلكتروني, فمحرك البحث جوجل يعتبر هو المحرك البحثي الأفضل في جذب العملاء المحتملين ذو نية شراء عالية, فإعلانات جوجل من أفضل الحلول الإعلانية على الإطلاق",
        serBox3P: "تصميم الجرافيك تصميم الجرافيك أو فن الاتصالات البصرية هو أسلوب إبداعي يقوم به المصمم لإيصال رسائل محددة للعملاء والجمهور المستهدفين, فالجرافيك هو شكل من أشكال التواصل بينك وبين عميلك, وتتنوع تخصصات الجرافيك فمنها الصور المطبوعة, والصور على الإنترنت, الفيديوهات, الرسومات المتحركة",
        serBox4P: "يعتبر التسويق على مواقع التواصل الاجتماعي من أكثر الطرق الفعالة في الوصول إلى الشريحة الجمهور المستهدف, وأقلها تكلفة ومن أشهر المواقع التواصل الاجتماعي فيسبوك, تويتر, سناب شات, إنستقرام, لينكد إن, فمن خلال هذه القنوات تستطيع إدارة حملات إعلانية ناجحة ومحققة لكل أهدافها",
        serBox5P: "تصدر موقعك الإلكتروني على محركات البحث في الصفحات الأولى لمحرك البحث جوجل مهم جدا في التسويق الإلكتروني, فظهورك للمهتمين في أول الصفحات يحول هؤلاء المهتمين إلى عملاء حقيقية لديك وبناء عليه يقومون بزيارة موقعك أكثر من مرة, فالتسويق عبر تصدر موقعك فى صفحات البحث يزيد إلى إنتاج 3 أضعاف من العملاء المحتملين مقارنه بالأساليب الأخرى",
        serBox6P: "عند البدء في مشروع ما, بالتأكيد سوف تريد تصميم موقع إلكتروني يصبح وجهه لك ومعبرة عن خدمتك, فالموقع يلعب حاليا دورا هاما في ترويج المنتجات الخاصة بك إلى أكبر عدد من المستهلكين حول العالم, ونحن في إي او ديجيتال نوفر لك أفضل تصاميم مواقع جاذبة بصريا, سهلة الاستخدام, متطابقة مع أجهزة الجوال, في حدود ميزانيتك المتاحة نقدم لك منصة تسويقية احترافية متكاملة لمشروعك أو خدمتك",
        detailsHead: "كلمة المؤسس",
        detailsParag: "عند تأسيس إي او ديجيتال للتسويق الإلكتروني, راودني حلم أن تصبح من أفضل شركات التسويق ليست على مستوى المملكة العربية السعودية فقط بل على مستوى العالم أجمع, وكنت حريص منذ إنشاء الشركة على اختيار فريق عمل لديه خبرة وعلم, يعتمد على استراتيجية تسويقية مدروسة, يستطيع تحقيق أهداف عملائنا في خدمات استشارات الأعمال والتسويق الإلكتروني",
        detailsMan: "عبادة أرمنازي",
        teamH: "خدماتنا",
        teamH2: "نحن نقدم استراتيجية تسويقية كاملة مبنية على خطط ودراسة لخدماتك, ونقدم خدمات استشارات التسويق الالكتروني للسوق والمنافسين لمشروعك وتحديد الجمهور المستهدف”صفاته, نوعه, اهتماماته, لغته, المستوى التعليمي, الاقتصادي, وأيضا المستوى الاجتماعي”, وبناء على هذه الدراسات نحدد المنصة المناسبة للتواصل مع جمهورك واللغة المستخدمة معه لإقناعه بمنتجك",
        teamP: "خبراتنا",
        teamP2: "مجهودات وخبرات و استشارات التسويق لفريق العمل توفر استراتيچية مخصصة وخطة التسويق الإلكتروني المناسبة لنشاطك التجاري لتحقيق عائد مستمر ومجزي على استثماراتك",
        messageHead: "ارسل رسالة",
        messageBtn: "ارسل الرسالة",
        blogH1: "كأداة للنجاح: استراتيجيات لتعزيز مشروعك في عام 2024 من خلال خدمة (SEO) تحسين محركات البحث “",
        blogP1: "كأداة للنجاح: استراتيجيات لتعزيز مشروعك في عام 2024 من خلال خدمة (SEO) تحسين محركات البحث ” هل تريد التعرف على...",
        blogH2: "رمضان 2024: استراتيجية إي او ديجيتال لـإعلانات رمضان و زيادة المبيعات",
        blogP2: "رمضان 2024: استراتيجية إي او ديجيتال لـ اعلانات رمضان و زيادة المبيعات يعد شهر رمضان المبارك من أقوى المواسم التسويقية في الشرق...",
        blogH3: "الحياة السعيدة تحقق زيادة عدد الزائرين لموقعها الإلكتروني بواقع 115,000 ألأف زائر في موسم صيف 2023 مقارنة بصيف2022",
        blogP3: "أصبحت شركة إي او ديجيتال للتسويق الإلكتروني الشريك التسويقي الرسمي لشركة الحياة السعيدة للسفر والسياحة بجميع فروعها بالممكلة...",
        blogMoreBtn: "المزيد من المقالات",
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
        burgerLi1: "الرئيسية",
        burgerLi2: "من نحن",
        burgerLi3: "الخدمات التسويقية",
        burgerLi4: "المدونة",
        burgerLi5: "نماذج المشاريع",
        burgerLi6: "توصل معنا",

    }
}

const languageSelector = document.querySelector('select');
const messageContainer = document.getElementById('messageContainer');
const messageInput1 = document.getElementById("messageInput1");
const messageInput2 = document.getElementById("messageInput2");
const messageInput3 = document.getElementById("messageInput3");
const messageInput4 = document.getElementById("messageInput4");
const messageInput5 = document.getElementById("messageInput5");
const messageIcon1 = document.getElementById("messageIcon1");
const messageIcon2 = document.getElementById("messageIcon2");
const messageIcon3 = document.getElementById("messageIcon3");
const messageIcon4 = document.getElementById("messageIcon4");
const messageIcon5 = document.getElementById("messageIcon5");
const blogH1 = document.getElementById("blogH1");
const blogH2 = document.getElementById("blogH2");
const blogH3 = document.getElementById("blogH3");
const blogP1 = document.getElementById("blogP1");
const blogP2 = document.getElementById("blogP2");
const blogP3 = document.getElementById("blogP3");
const blogSM1 = document.getElementById("blogSM1");
const blogSM2 = document.getElementById("blogSM2");
const blogSM3 = document.getElementById("blogSM3");
const loactionBox = document.getElementById("loactionBox");
const footerBox2Location = document.getElementById("footerBox2Location");
const copyContainer = document.getElementById("copyContainer");





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
        messageContainer.style.direction = "rtl";
        messageInput1.style.paddingLeft = 0;
        messageInput2.style.paddingLeft = 0;
        messageInput3.style.paddingLeft = 0;
        messageInput4.style.paddingLeft = 0;
        messageInput5.style.paddingLeft = 0;
        messageInput1.style.paddingRight = "40px";
        messageInput2.style.paddingRight = "40px";
        messageInput3.style.paddingRight = "40px";
        messageInput4.style.paddingRight = "40px";
        messageInput5.style.paddingRight = "40px";
        messageIcon1.style.left = 0
        messageIcon2.style.left = 0
        messageIcon3.style.left = 0
        messageIcon4.style.left = 0
        messageIcon5.style.left = 0
        messageIcon1.style.right = "15px"
        messageIcon2.style.right = "15px"
        messageIcon3.style.right = "15px"
        messageIcon4.style.right = "15px"
        messageIcon5.style.right = "15px"
        blogH1.style.paddingLeft = 0
        blogH1.style.paddingRight = "10px"
        blogH2.style.paddingLeft = 0
        blogH2.style.paddingRight = "10px"
        blogH3.style.paddingLeft = 0
        blogH3.style.paddingRight = "10px"
        blogP1.style.paddingLeft = 0
        blogP1.style.paddingRight = "10px"
        blogP2.style.paddingLeft = 0
        blogP2.style.paddingRight = "10px"
        blogP3.style.paddingLeft = 0
        blogP3.style.paddingRight = "10px"
        blogSM1.style.paddingLeft = 0
        blogSM1.style.paddingRight = "10px"
        blogSM2.style.paddingLeft = 0
        blogSM2.style.paddingRight = "10px"
        blogSM3.style.paddingLeft = 0
        blogSM3.style.paddingRight = "10px"
        loactionBox.style.width = "93%";
        footerBox2Location.style.fontSize = "1rem";
        if (Screen > 499) {
            copyContainer.style.paddingRight = "180px";
            copyContainer.style.paddingLeft = "0";
        }
        // copyContainer.style.paddingRight = "180px";
        // copyContainer.style.paddingLeft = "0";


    } else {
        document.dir = 'rtl'
        languageSelector.style.backgroundPosition = "7px 3.5px"
        messageContainer.style.direction = "ltr";
        messageInput1.style.paddingRight = 0;
        messageInput2.style.paddingRight = 0;
        messageInput3.style.paddingRight = 0;
        messageInput4.style.paddingRight = 0;
        messageInput5.style.paddingRight = 0;
        messageInput1.style.paddingLeft = "40px";
        messageInput2.style.paddingLeft = "40px";
        messageInput3.style.paddingLeft = "40px";
        messageInput4.style.paddingLeft = "40px";
        messageInput5.style.paddingLeft = "40px";
        messageIcon1.style.right = 0
        messageIcon2.style.right = 0
        messageIcon3.style.right = 0
        messageIcon4.style.right = 0
        messageIcon5.style.right = 0
        messageIcon1.style.left = "15px"
        messageIcon2.style.left = "15px"
        messageIcon3.style.left = "15px"
        messageIcon4.style.left = "15px"
        messageIcon5.style.left = "15px"
        blogH1.style.paddingRight = 0
        blogH1.style.paddingLeft = "10px"
        blogH2.style.paddingRight = 0
        blogH2.style.paddingLeft = "10px"
        blogH3.style.paddingRight = 0
        blogH3.style.paddingLeft = "10px"
        blogP1.style.paddingRight = 0
        blogP1.style.paddingLeft = "10px"
        blogP2.style.paddingRight = 0
        blogP2.style.paddingLeft = "10px"
        blogP3.style.paddingRight = 0
        blogP3.style.paddingLeft = "10px"
        blogSM1.style.paddingRight = 0
        blogSM1.style.paddingLeft = "10px"
        blogSM2.style.paddingRight = 0
        blogSM2.style.paddingLeft = "10px"
        blogSM3.style.paddingRight = 0
        blogSM3.style.paddingLeft = "10px"
        loactionBox.style.width = "97%";
        footerBox2Location.style.fontSize = "0.8rem";
        if (Screen > 499) {
            copyContainer.style.paddingRight = "0";
            copyContainer.style.paddingLeft = "180px";
        }
        // copyContainer.style.paddingRight = "0";
        // copyContainer.style.paddingLeft = "180px";
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