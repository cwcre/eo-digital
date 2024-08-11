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
        title: "EO-Dijital | Blog",
        home: "Home",
        about: "About",
        blog: "Blog",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "(عر) Arabic",
        english: "English (en)",
        blogHead: "Articles and information about electronic marketing",
        blogH1: "As a tool for success: Strategies to boost your project in 2024 through search engine optimization (SEO) service.”",
        blogP1: "As a tool for success: Strategies to enhance your project in 2024 through search engine optimization (SEO) service “Do you want to know...",
        blogH2: "Ramadan 2024: Great strategy for Ramadan advertisements and increasing sales",
        blogP2: "Ramadan 2024: A great strategy for Ramadan advertisements and increasing sales. The holy month of Ramadan is one of the strongest marketing seasons in the East...",
        blogH3: "Happy Life achieved an increase in the number of visitors to its website by 115,000 thousand visitors in the summer season of 2023 compared to the summer of 2022.",
        blogP3: "EO-Dijital Electronic Marketing Company has become the official marketing partner of the Happy Life Travel and Tourism Company...",
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
        burgerLi1: "Home",
        burgerLi2: "About",
        burgerLi3: "Marketing services",
        burgerLi4: "Blog",
        burgerLi5: "Project models",
        burgerLi6: "Contact us",
    },

    ar: {
        title: "اي او ديجيتال | المدونة",
        home: "الرئيسية",
        about: "من نحن",
        blog: "المدونة",
        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        blogHead: "مقالات و معلومات عن التسويق الإلكتروني",
        blogH1: "كأداة للنجاح: استراتيجيات لتعزيز مشروعك في عام 2024 من خلال خدمة (SEO) تحسين محركات البحث “",
        blogP1: "كأداة للنجاح: استراتيجيات لتعزيز مشروعك في عام 2024 من خلال خدمة (SEO) تحسين محركات البحث ” هل تريد التعرف على...",
        blogH2: "رمضان 2024: استراتيجية إي او ديجيتال لـإعلانات رمضان و زيادة المبيعات",
        blogP2: "رمضان 2024: استراتيجية إي او ديجيتال لـ اعلانات رمضان و زيادة المبيعات يعد شهر رمضان المبارك من أقوى المواسم التسويقية في الشرق...",
        blogH3: "الحياة السعيدة تحقق زيادة عدد الزائرين لموقعها الإلكتروني بواقع 115,000 ألأف زائر في موسم صيف 2023 مقارنة بصيف2022",
        blogP3: "أصبحت شركة إي او ديجيتال للتسويق الإلكتروني الشريك التسويقي الرسمي لشركة الحياة السعيدة للسفر والسياحة بجميع فروعها بالممكلة...",
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
const loactionBox = document.getElementById("loactionBox");
const footerBox2Location = document.getElementById("footerBox2Location");
const copyContainer = document.getElementById("copyContainer");
const blogH1 = document.getElementById("blogH1");
const blogH2 = document.getElementById("blogH2");
const blogH3 = document.getElementById("blogH3");
const blogP1 = document.getElementById("blogP1");
const blogP2 = document.getElementById("blogP2");
const blogP3 = document.getElementById("blogP3");
const blogSM1 = document.getElementById("blogSM1");
const blogSM2 = document.getElementById("blogSM2");
const blogSM3 = document.getElementById("blogSM3");
const blogH4 = document.getElementById("blogH4");
const blogH5 = document.getElementById("blogH5");
const blogH6 = document.getElementById("blogH6");
const blogP4 = document.getElementById("blogP4");
const blogP5 = document.getElementById("blogP5");
const blogP6 = document.getElementById("blogP6");
const blogSM4 = document.getElementById("blogSM4");
const blogSM5 = document.getElementById("blogSM5");
const blogSM6 = document.getElementById("blogSM6");





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
        blogH4.style.paddingLeft = 0
        blogH4.style.paddingRight = "10px"
        blogH5.style.paddingLeft = 0
        blogH5.style.paddingRight = "10px"
        blogH6.style.paddingLeft = 0
        blogH6.style.paddingRight = "10px"
        blogP4.style.paddingLeft = 0
        blogP4.style.paddingRight = "10px"
        blogP5.style.paddingLeft = 0
        blogP5.style.paddingRight = "10px"
        blogP6.style.paddingLeft = 0
        blogP6.style.paddingRight = "10px"
        blogSM4.style.paddingLeft = 0
        blogSM4.style.paddingRight = "10px"
        blogSM5.style.paddingLeft = 0
        blogSM5.style.paddingRight = "10px"
        blogSM6.style.paddingLeft = 0
        blogSM6.style.paddingRight = "10px"


    } else {
        document.dir = 'rtl'
        loactionBox.style.width = "97%";
        footerBox2Location.style.fontSize = "0.8rem";
        languageSelector.style.backgroundPosition = "7px 3.5px"
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
        blogH4.style.paddingRight = 0
        blogH4.style.paddingLeft = "10px"
        blogH5.style.paddingRight = 0
        blogH5.style.paddingLeft = "10px"
        blogH6.style.paddingRight = 0
        blogH6.style.paddingLeft = "10px"
        blogP4.style.paddingRight = 0
        blogP4.style.paddingLeft = "10px"
        blogP5.style.paddingRight = 0
        blogP5.style.paddingLeft = "10px"
        blogP6.style.paddingRight = 0
        blogP6.style.paddingLeft = "10px"
        blogSM4.style.paddingRight = 0
        blogSM4.style.paddingLeft = "10px"
        blogSM5.style.paddingRight = 0
        blogSM5.style.paddingLeft = "10px"
        blogSM6.style.paddingRight = 0
        blogSM6.style.paddingLeft = "10px"
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