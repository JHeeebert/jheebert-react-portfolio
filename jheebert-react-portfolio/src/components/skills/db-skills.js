// Import all SVG elements that we will use to set up our skills db
import cssIcon from '../../assets/img/skills/cssIcon.svg';
import gitHubIcon from '../../assets/img/skills/githubIcon.svg';
import handlebarsIcon from '../../assets/img/skills/handlebarsIcon.svg';
import htmlIcon from '../../assets/img/skills/htmlIcon.svg';
import javascriptIcon from '../../assets/img/skills/javaScriptIcon.svg';
import mongodbIcon from '../../assets/img/skills/mongoDbIcon.svg';
import mySqlIcon from '../../assets/img/skills/mySqlIcon.svg';
import nodeJsIcon from '../../assets/img/skills/nodeJsIcon.svg';
import npmIcon from '../../assets/img/skills/npmIcon.svg';
import reactJsIcon from '../../assets/img/skills/reactJsIcon.svg';
import tailwindsCssIcon from '../../assets/img/skills/tailwindsCssIcon.svg';
import vscodeIcon from '../../assets/img/skills/vscodeIcon.svg';
// add expressJS icons
// add heroku icons
// add bootstrap icons
// add GraphQL icons
// add Insomnia icons
// add Slack icons
// add Trello icons
// add Docker icons
// add Jquery icons
// add Python icons
// add Angular icons

// Define skills array
const skillsData = [
    {
        category: 'Frontend',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/HTML',
                imgAltText: 'HTML',
                imgSrc: htmlIcon,
                skillName: 'HTML',
                skillDescription: 'Hypertext Markup Language',
            },
            {
                link: 'https://en.wikipedia.org/wiki/CSS',
                imgAltText: 'CSS',
                imgSrc: cssIcon,
                skillName: 'CSS',
                skillDescription: 'Cascading Style Sheets',
            },
            {
                link: 'https://en.wikipedia.org/wiki/JavaScript',
                imgAltText: 'JavaScript',
                imgSrc: javascriptIcon,
                skillName: 'JavaScript',
                skillDescription: 'JavaScript',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/React.js',
                imgAltText: 'React.js',
                imgSrc: reactJsIcon,
                skillName: 'React.js',
                skillDescription: 'React.js',
                skillLevel: 'Intermediate',
            },
        ],
    },
    // Framework Skills section of skills db
    {
        category: 'Framework',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/Tailwind.css',
                imgAltText: 'Tailwind.css',
                imgSrc: tailwindsCssIcon,
                skillName: 'Tailwind.css',
                skillDescription: 'Tailwind.css',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/Handlebars.js',
                imgAltText: 'Handlebars.js',
                imgSrc: handlebarsIcon,
                skillName: 'Handlebars.js',
                skillDescription: 'Handlebars.js',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/Express.js',
                imgAltText: 'Express.js',
                imgSrc: nodeJsIcon,
                skillName: 'Express.js',
                skillDescription: 'Express.js',
            },
            {
                link: 'https://en.wikipedia.org/wiki/Node.js',
                imgAltText: 'Node.js',
                imgSrc: nodeJsIcon,
                skillName: 'Node.js',
                skillDescription: 'Node.js',

            }
        ],
    },
    // Hosting Platform section of skills db
    {
        category: 'Hosting Platform',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/GitHub',
                imgAltText: 'GitHub',
                imgSrc: gitHubIcon,
                skillName: 'GitHub',
                skillDescription: 'GitHub',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/Heroku',
                imgAltText: 'Heroku',
                imgSrc: nodeJsIcon,
                skillName: 'Heroku',
                skillDescription: 'Heroku',
                skillLevel: 'Intermediate',
            }
        ],
    },
    // Query Languages section of skills db
    {
        category: 'Query Languages',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/MySQL',
                imgAltText: 'MySQL',
                imgSrc: mySqlIcon,
                skillName: 'MySQL',
                skillDescription: 'MySQL',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/GraphQL',
                imgAltText: 'GraphQL',
                imgSrc: nodeJsIcon,
                skillName: 'GraphQL',
                skillDescription: 'GraphQL',
                skillLevel: 'Intermediate',
            }
        ],
    },
    // Database Skills section of skills db
    {
        category: 'Databases',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/MySQL',
                imgAltText: 'MySQL',
                imgSrc: mySqlIcon,
                skillName: 'MySQL',
                skillDescription: 'MySQL',
                skillLevel: 'Intermediate',
            },
            {
                link: 'https://en.wikipedia.org/wiki/MongoDB',
                imgAltText: 'MongoDB',
                imgSrc: mongodbIcon,
                skillName: 'MongoDB',
                skillDescription: 'MongoDB',
                skillLevel: 'Intermediate',
            },
        ],
    },
    // Backend Skills section of skills db
    {
        category: 'Backend',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/Node.js',
                imgAltText: 'Node.js',
                imgSrc: nodeJsIcon,
                skillName: 'Node.js',
                skillDescription: 'Node.js',
                skillLevel: 'Intermediate',
            },
        ],
    },
    // Tools section of skills db
    {
        category: 'Tools',
        skills: [
            {
                link: 'https://en.wikipedia.org/wiki/NPM',
                imgAltText: 'NPM',
                imgSrc: npmIcon,
                skillName: 'NPM',
                skillDescription: 'NPM',
                skillLevel: 'Advanced',
            },
            {
                link: 'https://en.wikipedia.org/wiki/vscode',
                imgAltText: 'VS Code',
                imgSrc: vscodeIcon,
                skillName: 'VS Code',
                skillDescription: 'VS Code',
                skillLevel: 'Advanced',
            },
        ],
    },
];


// Export section of skills db
export default skillsData;
