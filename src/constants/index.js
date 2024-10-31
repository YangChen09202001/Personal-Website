import { mercer, fontenelle, fn} from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    snapgram,
    java,
    python,
    cplus,
    csharp,
    sql, 
    applicationally,
    tictactoe,
    gemini
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend, Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl:csharp ,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl:sql ,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "Fontenelle Art LLC",
        icon: fontenelle,
        iconBg: "#FFFFFF",
        date: "May 2022 - August 2022",
        points: [
            "Conducted analysis and performed data preparation, cleansing, and integration using Google's Data Prep Tool to ensure data readiness for customer presentation, ultimately enhancing the company's customer flow.",
            "Developed an employee task management system with JavaScript, simplifying task assignments for managers and improving overall company operations.",
            "Contributed to the Equifax Sprint Pitch Deck, securing a Top 20 position by presenting innovative approaches to optimize the company interface through the utilization of AWS.",
        ],
    },
    {
        title: "Undergraduate Researcher",
        company_name: "Mercer University",
        icon: mercer,
        iconBg: "#fbc3bc",
        date: "August 2022 - December 2022",
        points: [
            "Developed a cutting-edge neural machine learning model using TensorFlow2 and Python to analyze historical stock data, resulting in a 29% increase in the accuracy of predicting stock movements.",
            "Worked closely with the instructor by providing progress and presenting the prediction outputs with proper graphs.",
            "Enhanced predictive accuracy of machine learning models, achieving a 52% success rate in forecasting future stock trends.",
        ],
    },
    {
        title: "SAP Developer Intern",
        company_name: "FN America LLC",
        icon: fn,
        iconBg: "#FFFFFF",
        date: "May 2024 - August 2024",
        points: [
            "Developed comprehensive training materials, interactive simulations, and user guides tailored to diverse roles and workflows, accelerating user adoption and minimizing learning curves across the organization.",
            "Committed to staying at the forefront of SAP technologies and best practices, continually refining implementation strategies to deliver more than 300 solutions that empower businesses to thrive in dynamic and competitive environments.",
            "Delivered holistic solutions that resolve immediate challenges and lay the foundation for long-term optimization and success, reflecting a strategic and proactive approach to problem-solving within SAP landscapes.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YangChen09202001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yangchen0920',
    }
];

export const projects = [
    {
        iconUrl: gemini,
        theme: 'btn-back-pink',
        name: 'Gemini-Clone',
        description: 'Drawing inspiration from GreatStack and Developed a fully functional clone of the Gemini platform.',
        link: 'https://github.com/YangChen09202001/Gemini-Clone',
    },
    {
        iconUrl: tictactoe,
        theme: 'btn-back-black',
        name: 'TicTacToe',
        description: 'Designed and developed an interactive TicTacToe game with a user-friendly interface, allowing players to enjoy a classic game experience.This project demonstrates my skills in implementing game algorithms and building responsive front-end interfaces.',
        link: 'https://github.com/YangChen09202001/TicTacToe',
    },
    {
        iconUrl: applicationally,
        theme: 'btn-back-yellow',
        name: 'Application-Ally',
        description: 'This web application originated as a final project for our Web Programming class (CSCI 4300) at The University of Georgia. Following the projects completion, we implemented additional features to enhance its responsiveness and user experience. ',
        link: 'https://github.com/jayp822/application-ally-deployed',
    }
];