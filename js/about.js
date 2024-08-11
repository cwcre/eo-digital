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
        title: "EO-Dijital | About Us",
        home: "Home",
        about: "About",
        marketingServices: "Marketing services",
        projectModel: "Project models",
        contact: "Contact us",
        arabic: "(عر) Arabic",
        english: "English (en)",
        boxsBoxH1: "Speed in Performance",
        boxsBoxS1: "We guarantee our work in our speed and professionalism in implementation",
        boxsBoxH2: "Creative Ideas",
        boxsBoxS2: "We innovate for you and provide you with a better vision and picture for the future of business",
        boxsBoxH3: "Competitive prices",
        boxsBoxS3: "We understand your requirements and offer you the best price",
        aboutH: "About Company",
        aboutP1: "EO-Dijital is an electronic marketing company that relies in the way it works on both science and experience. The organization helps commercial and service companies to advance them and build an integrated community for them on the Internet, starting from building the brand and targeting the appropriate audience for you until designing and creating complete websites in addition to campaign and account management services on the Internet. All electronic platforms.",
        aboutP2: "EO-Dijital Company offers you the best of the digital world. It is one of the best electronic marketing companies in Saudi Arabia. We are known for strong planning and creative execution backed by original, engaging content that creates high customer engagement. If you are looking for a strong, reliable, and successful partner with extensive experience in successful marketing plans and digital initiatives, then “EO-Dijital” is your best choice.",
        workHeading: "Work methodology",
        workH1: "",
        workP1: "First we listen to our client and make sure we understand his vision and ideas. This is a pivotal stage where we can take a copy of the client's perception of their brand look and paste it into our minds.",
        workH2: "",
        workP2: "After absorbing all aspects and ideas, the creative marketing team comes together to agree on the best way to go about the brand creation process.",
        workH3: "",
        workP3: "Our writers, designers, and all implementation team work together to bring the brand to life in accordance with the rules and business plan provided.",
        workH4: "",
        workP4: "After careful effort, design and coordination process, the project is delivered to the client. But that does not mean that it is the end of the story. We will get to know the customer's reaction, and then we will return to work again to implement all his comments.",
        goalH: "Our goal",
        goalP: "Getting the client to the best position in the market, creating and improving his presence to reach the optimal image, as well as the growth and progress of his business more than expected.",
        workH1: "Listening and understanding",
        workH2: "Planning",
        workH3: "Work",
        workH4: "Follow-up",
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
        blog: "Blog",

    },

    ar: {
        title: "اي او ديجيتال | من نحن ؟",
        home: "الرئيسية",
        about: "من نحن",
        contact: "توصل معنا",
        marketingServices: "الخدمات التسويقية",
        projectModel: "نماذج المشاريع",
        arabic: "(ar) العربية",
        english: "(en) الإنجليزية",
        boxsBoxH1: "سرعة في الأداء",
        boxsBoxS1: "نضمن عملنا في سرعتنا وإحترافيتنا في التنفيذ",
        boxsBoxH2: "أفكار إبداعية",
        boxsBoxS2: "نبدع من أجلك ونقدم لكم رؤية وصورة أفضل لمستقبل أعمال",
        boxsBoxH3: "أسعار تنافسية",
        boxsBoxS3: "نفهم المتطلبات الخاصة بك ونقدم لك السعر الأفضل",
        aboutH: "عن الشركة",
        aboutP1: "إي او ديجيتال شركة تسويق الكتروني تعتمد في طريقة عملها على العلم والخبرة معاً, تساعد المؤسسة الشركات التجارية والخدمية على النهوض بها وبناء مجتمع لها متكامل على شبكات الإنترنت بداية من بناء العلامة التجارية واستهداف الجمهور المناسب لك حتى تصميم وإنشاء مواقع إلكترونية كاملة بالإضافة إلى خدمات إدارة الحملات والحسابات على جميع المنصات الإلكترونية.",
        aboutP2: "شركة إي او ديجيتال تقدم لك أفضل ما في العالم الرقمي. فهي من افضل شركات تسويق الكتروني في السعودية. نحن معروفون بالتخطيط القوي والتنفيذ الإبداعي المدعوم بمحتوى أصلي وجذاب ويخلق تفاعل كبير من قِبل العملاء. إذا كنت تبحث عن شريك قوي وموثوق به وبنجاحاته ويمتلك خبرة كبيرة في خطط التسويق والمبادرات الرقمية الناجحة فإن إي او ديجيتال خيارك الأفضل.",
        workHeading: "منهجية العمل",
        workH1: "",
        workP1: "في البداية نستمع لعميلنا ونتأكد تمامًا أننا نفهم رؤيته وأفكاره. هذه مرحلة محورية حيث يمكننا أن نأخذ نسخة من تصور العميل لهيئة علامته التجارية ونلصقها في عقولنا.",
        workH2: "",
        workP2: "بعد استيعاب جميع النواحي والأفكار ، يجتمع فريق التسويق الإبداعي معاً ليتفقوا على أفضل طريقة للقيام بعملية إنشاء العلامة التجارية.",
        workH3: "",
        workP3: "يعمل كتابنا، مصممينا، وجميع فريق التنفيذ بالعمل معًا على جلب العلامة التجارية إلى الحياة بما يتوافق مع القواعد وخطة العمل المقدمة.",
        workH4: "",
        workP4: "بعد جهد دقيق وعملية تصميم وتنسيق، يتم تسليم المشروع إلى العميل. لكن ذلك لا يعني أبدًا أنه آخر المطاف.فنحن سنقوم بالتعرف على رد فعل العميل، ثم سنعود للعمل مرة أخرى لكي نطبق كل تعليقاته.",
        goalH: "هدفنا",
        goalP: "الوصول بالعميل إلى الوضعية الأفضل بالسوق وإنشاء وتحسين تواجده للوصول إلى أمثل صورة،و كذلك نمو عمله و تقدمه أكثر مما يتوقع.",

        workH1: "الاستماع والفهم",
        workH2: "التخطيط",
        workH3: "العمل",
        workH4: "المتابعة",
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
        blog: "المدونة",

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