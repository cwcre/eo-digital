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
        title: "EO-Digital | Project models",
        home: "Home",
        about: "About",
        blog: "Blog",
        burgerLi1: "Home",
        burgerLi2: "About",
        burgerLi3: "Marketing services",
        burgerLi4: "Blog",
        burgerLi5: "Project models",
        burgerLi6: "Contact us",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "Arabic (عر)",
        english: "English (en)",
        pHeading: "Our company provides the best electronic marketing services that are characterized by innovation and creativity through an expert team that innovates and creates new and different ways to market your products or services.",
        projectH: "Graphic Design",
        projectSP: "Graphic Design",
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
    },

    ar: {
        title: "اي او ديجيتال | نماذج المشاريع",
        home: "الرئيسية",
        about: "من نحن",
        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        pHeading: "تقدم شركتنا افضل خدمات التسويق الالكتروني التي تتصف بالابتكار و الابداع من خلال فريق خبير يبدع ويبتكر طرق جديدة ومختلفة لتسويق منتجاتك أو خدماتك.",
        projectH: "تصميم الجرافيك",
        projectSP: "تصميم الجرافيك",
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