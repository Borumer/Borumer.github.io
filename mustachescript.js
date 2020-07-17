const portfolioData = [
    {
        name: "Borum Farms",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        link: "https://github.com/Borumer/BorumFarms",
        img: "https://raw.githubusercontent.com/Borumer/BorumFarms/master/images/whitelogo.jpg",
        softwareDevelopmentTools: {
            languages: ['Java'],
            frameworks: ['Swing'],
        }
    },
    {
        name: "EcoFriend",
        category: "Hackathon",
        status: "Ended",
        link: "https://devpost.com/software/enviroshare",
        img: "https://raw.githubusercontent.com/Borumer/EcoFriend/master/assets/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['Dart'],
            apis: ['Flutter']
        }
    },
    {
        name: "FarmaKarma",
        category: "Hackathon",
        status: "Current",
        link: "https://devpost.com/software/FarmaKarma",
        img: "https://raw.githubusercontent.com/Borumer/FarmaKarma/master/img_typo.jpg",
        softwareDevelopmentTools: {
            languages: ['JavaScript', 'HTML', 'CSS'],
            libraries: ['csvtojson', 'axios'],
            apis: ['USDA API'],
            frameworks: ['Express'],
            serverEnvironment: 'NodeJS',
            
        }
    },
    {
        name: "Chatfish",
        category: "Personal",
        status: "Future",
        borumProduct: true,
        link: "http://chat.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/Chatfish/master/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['C#', 'XAML'],
            frameworks: ['.NET', 'WPF'],
        }
    },
    {
        name: "Flytrap",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        link: "http://audio.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/Flytrap/master/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        }
    },
    {
        name: "Borum Paint",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://paint.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/BorumPaint/master/paint-pallete.png",
        softwareDevelopmentTools: {
            languages: ['Processing', 'JavaScript', 'HTML'],
            library: ['p5.js'],
        }
    },
    {
        name: "Library System",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://library-management-system.glitch.me/",
        img: "https://cdn.glitch.com/65f2c798-3d83-4eea-9b3c-130c150e928b%2Flmsicon.png?v=1594941302927",
        softwareDevelopmentTools: {
            languages: ['C#']
        }
    },
    {
        name: "Frequency Analysis Simulator",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Frequency-Analysis-Simulator",
        img: "https://raw.githubusercontent.com/Borumer/Frequency-Analysis-Simulator/master/icon.ico",
        softwareDevelopmentTools: {
            languages: ['Java'],
            libraries: ['extJWNL'],
            apis: ['WordNet']
        }
    },
    {
        name: "Borum Restaurants",
        category: "Tutorial",
        status: "Ended",
        borumProduct: true,
        link: "http://restaurants.bforborum.com"
    },
    {
        name: "Borum Feasts",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://feasts.bforborum.com"
    },
    {
        name: "Supreme Guacamole",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/supreme-guacamole/"
    },
    {
        name: "Dasmoto's Arts and Crafts",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Dasmotos-Arts-and-Crafts/"
    },
    {
        name: "Text Adventure",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/text-adventure"
    },
    {
        name: "Crystalite",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Crystalite/"
    },
    {
        name: "Guessing Game",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
    },
    {
        name: "Borum Q&A",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://www.bforborum.com",
        img: "http://cdn.bforborum.com/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
            frameworks: ['Bootstrap'],
            libraries: ['jQuery']
        }
    },
    {
        name: "JIC Documentation",
        category: "Others",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/JIC-Documentation/",
        img: "https://borumer.github.io/JIC-Documentation/images/JIC%20Onion.png",
        softwareDevelopmentTools: {
            languages: ['HTML', 'CSS']
        }
    }
];


Handlebars.registerPartial('cardBack', `
<p>{{name}} ({{category}})</p>
{{#if status}}
<p>Status: {{status}}</p>
{{#if borumProduct}}
<img src='http://cdn.bforborum.com/images/icon.png' style='width:100%; background: none; display:block; height:20px'>
{{/if}}
<a onclick="event.stopPropagation()" target="_blank" href="{{link}}">View</a>
{{/if}}
`);

Handlebars.registerPartial('cardFront', `
<p>{{name}}</p>
{{#if img}}
<img src = '{{img}}'>
{{/if}}
`);

Handlebars.registerPartial('backTitle',
`Made with {{softwareDevelopmentTools.languages}}
{{writeOtherTools "APIs" softwareDevelopmentTools.apis}}
{{writeOtherTools "Libraries" softwareDevelopmentTools.libraries}}
{{writeOtherTools "Frameworks" softwareDevelopmentTools.frameworks}}
`)

// Removes spaces to make id and class names valid
Handlebars.registerHelper('removeSpaces', function (value) {
    return value.replace(" ", "");
})

Handlebars.registerHelper('writeOtherTools', function (name, arr) {
    if (arr) 
        return `Utilizing the following ${name}: ${arr}`;
})

function toggleHover(el) {
    el.classList.toggle('hover');
}

// compile the template
var template = Handlebars.compile(
    `<ul class = 'd-flex p-2 flex-wrap project-list'>
    
    {{#each portfolioData}}
    <li id="project-{{removeSpaces name}}" class = "flip-container" ontouchstart="toggleHover(this)" onclick="toggleHover(this)">
        <div class = "flipper">
            <div class = "front">{{> cardFront}}</div>
            <div title="{{> backTitle}}" class = "back">{{> cardBack}}</div>
        </div>
    </li>
    {{/each}}
    </ul>`
);

const uninteractiveLayout = document.querySelector('#main-content').innerHTML;
// Save previous layout for conservative site viewers
function toggleOldLayout(toNew) {
    const mainContent = document.getElementById('main-content');
    const templatedLayout = template({ portfolioData: portfolioData });
    if (toNew)
        mainContent.innerHTML = toNew ? templatedLayout : uninteractiveLayout;
    else
        mainContent.innerHTML = mainContent.innerHTML == uninteractiveLayout ? templatedLayout : uninteractiveLayout;
}

// execute the compiled template and print the output to the console
toggleOldLayout(true);

