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
            "text": "07984911713",
        },
        {
            "class": "fa fa-map-marker mr-2 mb-2",
            "text": "Northampton, UK"
        },
    ],
    socials: [{
        "icon": "fa fa-facebook",
        "link": "https://www.facebook.com/dumitriu.cosmin.5/"
        },
        {
        "icon": "fa fa-linkedin",
        "link": "https://www.linkedin.com/in/cosmin-dumitriu-b984161ba/"
        },
        {
        "icon": "fa fa-github",
        "link": "https://github.com/cossminuu"
        },
    ],
    ///////////////////////////// HEADER DETAILS /////////////////////////////




    ///////////////////////////// ABOUT SECTION DETAILS /////////////////////////////
    description: "Hi, my name is Cosmin. I am a Junior Frontend Developer aspiring to become a Full Stack Developer. My primary focus is on building Front End Web Applications. My skillsets include languages like JavaScript, CSS3, HTML5, together with frameworks like React JS, Node JS, Bootstrap and Material-UI. I do this because i love the process of turning dreams into reality by converting ideas into code. I have spent the past two years learning top-notch technologies and enhancing my skill sets. I recently graduated from Mohole School(Milan) in Web & Apps Development with a rating of 28/30. On a side note, I love playing video games, ping-pong and learning new technologies every day.",
    skills: ["html",
        "css",
        "javascript",
        "react",
        "redux",
        "styled-components",
        "react-bootstrap",
        "material-ui",
        "responsive design",
        "node JS",
        "express",
        "firebase",
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



    work: [
        {
            uniqueKey: "3",
            specialization: "Frontend Developer React(internship)-",
            universityName: "Star InfoStudio s.r.l",
            url: "",
            years: "02/2020-08/2020",
            responsability: "Creating website layouts/user interfaces by using Html/Jsx/Css/Styled-Components; Code refactoring; Fixing bugs in existing projects; API tests-Postman; Mockups Design (Illustrator, Figma); Using the built-in React toolkit to build user-facing features; Creating front-end libraries and reusable code files for the company’s future products; Optimizing app components and improving the product’s performance; Collaborating with software developers and designers; Ensuring web design is optimized for smartphones."
        },
        {
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
            url: "https://dmtcs.netlify.com/",
            urlGit: "https://github.com/cossminuu/portfolioReact"


        },
        {
              projectName: "Social Network React",
              image: "/img/project/socialapp.png",
              usedSkills: ["react", "node", "firebase", "express"],
              url: "https://socialapp-72a75.web.app/",
              urlGit: "https://github.com/cossminuu/SocialNetwork",
        },
        {
            projectName: "FoodDelivery-PWA React",
            image: "/img/project/foodyourself.jpg",
            usedSkills: ["react","node","express-js","material-ui","firebase","redux","react-router", "html", "css"],
            url: "https://foodyourself-8fc58.web.app/",
            urlGit: ""


        },
        {
            projectName: "Netflix-Clone React",
            image: "/img/project/netflix.jpg",
            usedSkills: ["react","firebase","Netflix-API","styled-components","compound-components","react-router", "html", "css"],
            url: "https://netflix-clone-53030.web.app/",
            urlGit: "https://github.com/cossminuu/Netflix-Clone"
        },
         {
              projectName: "Music Player",
              image: "/img/project/audiobeat2.jpg",
              usedSkills: ["react", "html", "scss", "firebase"],
              url: "https://audiobeat-cb4d2.web.app/",
              urlGit: "https://github.com/cossminuu/MusicPlayer-AudioBeat",
        },
        {
              projectName: "Covid-19 Map",
              image: "/img/project/coronamap.png",
              usedSkills: ["react", "firebase", "material-ui"],
              url: "https://coronamap-901ec.web.app/",
              urlGit: "https://github.com/cossminuu/Covid-19-Map",
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
//         {
//             projectName: "ToDo-List React",
//             image: "/img/project/todolist.jpg",
//             usedSkills: ["react", "node", "html", "css", "gridCss", "netlify"],
//             url: "https://todolistcosmin.netlify.com/",
//             urlGit: "https://github.com/cossminuu/todolistReact"

//         },
//         {
//             projectName: "E-commerce template",
//             image: "/img/project/wineshop.jpg",
//             usedSkills: ["jQuery", "html", "css", "bootstrap"],
//             url: "https://wineshopc.netlify.com/",
//             urlGit: "https://github.com/cossminuu/stunning-umbrella"


//         },
        

    ],
    ///////////////////////////// PORTFOLIO SECTION DETAILS ////////////////////////////


}
