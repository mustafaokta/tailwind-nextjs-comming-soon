const currentYear = new Date().getFullYear();
const data = {
    sitename: "digitalbillboardflorida.com",
    sitetagline: "Reserve your spot now and unlock the potential for higher profits.",
    siteurl: "https://github.com/baikaresandip",
    sitelogo: "",
    title: "",
    description: "Maximize Your Brand's Visibility – Florida's Busiest Streets Await!",
    newsletterheading: "Enter your email below to secure early access and exclusive offers!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By Fluxesoft</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "https://www.facebook.com/",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
