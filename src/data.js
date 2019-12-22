export default {

    /////////////////////////////  NAVBAR /////////////////////////////
    toolbar: [{
            link: "Home",
            to: "home",

        },
        {
            link: "About",
            to: "about",

        },
        {
            link: "Experiences",
            to: "experiences",

        },
        {
            link: "Portfolio",
            to: "portfolio",

        }

    ],
    /////////////////////////////  NAVBAR /////////////////////////////


    ///////////////////////////// HEADER DETAILS /////////////////////////////
    contacts: [{
            "class": "fa fa-envelope mr-2 mb-3",
            "text": "cossminuu@gmail.com",
        },
        {
            "class": "fa fa-phone mr-2 mb-3",
            "text": "+39 348 700 8668",
        },
        {
            "class": "fa fa-map-marker mr-2 mb-2",
            "text": "Milan, Italy"
        },
    ],
    socials: [
        "fa fa-facebook",

        "fa fa-twitter",

        "fa fa-github",

        "fa fa-dribbble",
    ],
    ///////////////////////////// HEADER DETAILS /////////////////////////////




    ///////////////////////////// ABOUT SECTION DETAILS /////////////////////////////
    description: "Hi, my name is Cosmin. I was born in Romania but i moved in Italy 3 years ago. I have 25 years old and i'm studying web & apps development at Mohole School in Milan 2nd year. I'm very friendly, highly motivated, honest, respectful, sociable and love to learn new things. Ah, i love videogames and animals.",
    skills: ["html",
        "css",
        "php",
        "javascript",
        "react",
        "wordpress",
        "php"
    ],
    ///////////////////////////// ABOUT SECTION DETAILS ////////////////////////////





    ///////////////////////////// EXPERIENCE SECTION DETAILS ////////////////////////////
    education: [{
            uniqueKey: "1",
            specialization: "Web, Apps & Digital Media-",
            universityName: "Mohole School",
            url: "https://scuola.mohole.it",
            years: "2019-2020",
            description: "Second year: Web design, Modern Javascript, Mobile apps, Wordpress & PHP, Workshops."
        },
        {
            uniqueKey: "2",
            specialization: "Web, Apps & Digital Media-",
            universityName: "Mohole School",
            url: "https://scuola.mohole.it",
            years: "2018-2019",
            description: "First year: Web design, PHP & MySql, Graphic(Illustrator, Photoshop), Wordpress, Marketing, Workshops."
        },
        {
            uniqueKey: "3",
            specialization: "Highschool",
            universityName: " “Dimitrie Negreanu”(Botosani, Romania) ",
            url: "/",
            years: "2009-2013",
            description: "Mechatronic technical profile"
        }
    ],



    work: [{
            uniqueKey: "1",
            specialization: "Coordinator on site/recruiter-",
            universityName: "Orbital Recruitment LTD/ London, Uk",
            url: "https://www.orbital-recruitment.co.uk/",
            years: "04/2018-08/2018",
            responsability: ["Processing and organization of work shifts (Biopanel);  Accounting;  Contract management and documentation relating to the hiring process"]
        },
        {
            uniqueKey: "2",
            specialization: "Website administrator",
            universityName: "",
            url: "https://scuola.mohole.it",
            years: "2013-2015",
            responsability: "Site monitoring; Customer support; Invoices management "

        },


    ],
    ///////////////////////////// EXPERIENCE SECTION DETAILS ////////////////////////////




    ///////////////////////////// PORTFOLIO SECTION DETAILS ////////////////////////////
    portfolio: [{
            projectName: "Portfolio React",
            image: "/img/project/portfolio.jpg",
            usedSkills: ["react", "node", "html", "css", "gridCss", "netlify"],
            url: "https://dmtcs.netlify.com/"


        },
        {
            projectName: "WordPress theme",
            image: "/img/project/fuorisalone.jpg",
            usedSkills: ["php", "mysql", "wordpress", "html", "css"],
            url: "https://www.moholepeople.it/fuorimohole/"

        },
        {
            projectName: "Tourist finder",
            image: "/img/project/adottaunturista.jpg",
            usedSkills: ["php", "mysql", "html", "css"],
            url: "http://www.moholepeople.it/adottaunturista/index.php"
        },
        {
            projectName: "ToDo-List React",
            image: "/img/project/todolist.jpg",
            usedSkills: ["react", "node", "html", "css", "gridCss", "netlify"],
            url: "https://todolistcosmin.netlify.com/"

        },
        {
            projectName: "E-commerce template",
            image: "/img/project/wineshop.jpg",
            usedSkills: ["jQuery", "html", "css", "bootstrap"],
            url: "https://wineshopc.netlify.com/"


        },

    ],
    ///////////////////////////// PORTFOLIO SECTION DETAILS ////////////////////////////


}