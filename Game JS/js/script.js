function hello() {
    let welcome = document.getElementById('hello');
    welcome.style.display = "block"
}
function stop_hello() {
    let welcome = document.getElementById('hello');
    welcome.style.display = "none"
}
setTimeout(hello, 500);
setTimeout(stop_hello, 10000);

let manpower = document.querySelector('span#manpower').innerHTML= 255;
let tankpower = document.querySelector('span#tankpower').innerHTML = 15;
let planepower = document.querySelector('span#planepower').innerHTML = 3;

let content_pause = document.getElementById("pause-menu");
let show_pause = document.getElementById("pause");
let hide_pause = document.getElementById("continue");

show_pause.addEventListener("click", () => {
    content_pause.style.display = "block"
})

hide_pause.addEventListener("click", () => {
    content_pause.style.display = "none"
})
        
show_pause.addEventListener("dblclick", () => {
    content_pause.style.display = "none"
})

let content_country = document.getElementById("country-menu");
let show_country = document.getElementById("flag");
let hide_country = document.getElementById("flag");

show_country.addEventListener("click", () => {
    content_country.style.display = "block"
})

hide_country.addEventListener("dblclick", () => {
    content_country.style.display = "none"
})
var images=[
"images/presidents/1.jpg",
"images/presidents/2.jpg",
"images/presidents/3.jpg",
"images/presidents/4.jpg",
"images/presidents/5.jpg",
"images/presidents/6.jpg"
];
var names=[
    "В'ячеслав",
    "Миколай",
    "Степан",
    "Роман",
    "Павло",
    "Михайло"
    ];
    var surnames=[
        "Чорновіл",
        "Святий",
        "Бандера",
        "Шухевич",
        "Скоропадський",
        "Грушевський"
        ];
function reselectPresident(){
   var randomPresidentImage=Math.floor(Math.random()*images.length);
   document.getElementById("president").src=images[randomPresidentImage];
   var randomPresidentName=Math.floor(Math.random()*names.length);
   var randomPresidentSurname=Math.floor(Math.random()*surnames.length);
   document.getElementById("president-name").innerHTML=names[randomPresidentName]+' '+surnames[randomPresidentSurname];
}
let country = document.getElementById("name");
country.addEventListener("click", () => {
    let renameCountryBlock = document.getElementById('rename-menu');
    renameCountryBlock.style.display = "block";
})
country.addEventListener("dblclick", () => {
    let renameCountryBlock = document.getElementById('rename-menu');
    renameCountryBlock.style.display = "none";
})
function renameCountry(){
        function ucFirst(str) {
            if (!str) return str;
            return str[0].toUpperCase() + str.slice(1);
        }
        let renameInput = document.getElementById('country-name').value;
        document.getElementById('name').innerHTML = ucFirst(renameInput);
        document.getElementById('flag').title = ucFirst(renameInput);
    let renameCountryBlock = document.getElementById('rename-menu');
    renameCountryBlock.style.display = "none";
}
let content_help = document.getElementById("help-menu");
let show_help = document.getElementById("help_botton");
let hide_help = document.getElementById("close_help");

show_help.addEventListener("click", () => {
    content_help.style.display = "block"
})
hide_help.addEventListener("click", () => {
    content_help.style.display = "none"
})
help_botton.addEventListener("dblclick", () => {
    content_help.style.display = "none"
})
function say(name) {
    alert(name + ' капітулювала');
}
// Білорусь
let comunication_belarus = document.getElementById("communication-menu-belarus");
let show_comunication_belarus = document.getElementById("belarus");
let hide_comunication_belarus = document.getElementById("communication-menu-belarus-close");
let war_belarus = document.getElementById("war-belarus");
let belarus = document.getElementById("belarus");
show_comunication_belarus.addEventListener("click", () => {
    comunication_belarus.style.display = "block"
})
hide_comunication_belarus.addEventListener("click", () => {
    comunication_belarus.style.display = "none"
})
war_belarus.addEventListener("click", () => {
    belarus.title = "Україно-білоруська демократична республіка";
    comunication_belarus.style.display = "none";
    setTimeout(say, 1000, "Білорусь");
    document.querySelector('span#manpower').innerHTML = 235;
    document.querySelector('span#tankpower').innerHTML = 17.5;
    document.querySelector('span#planepower').innerHTML = 4.5;
})

let comunication_poland = document.getElementById("communication-menu-poland");
let show_comunication_poland = document.getElementById("poland");
let hide_comunication_poland = document.getElementById("communication-menu-poland-close");
let war_poland = document.getElementById("war-poland");
let poland = document.getElementById("poland");
show_comunication_poland.addEventListener("click", () => {
    comunication_poland.style.display = "block"
})
hide_comunication_poland.addEventListener("click", () => {
    comunication_poland.style.display = "none"
})
war_poland.addEventListener("click", () => {
    poland.title = "Україно-польська демократична республіка";
    comunication_poland.style.display = "none";
    setTimeout(say, 1000, "Польща");
    document.querySelector('span#manpower').innerHTML = 175;
    document.querySelector('span#tankpower').innerHTML = 21.5;
    document.querySelector('span#planepower').innerHTML = 5.5;
})

let comunication_muscovy = document.getElementById("communication-menu-muscovy");
let show_comunication_muscovy = document.getElementById("muscovy");
let hide_comunication_muscovy = document.getElementById("communication-menu-muscovy-close");
let war_muscovy = document.getElementById("war-muscovy");
let muscovy = document.getElementById("muscovy");
show_comunication_muscovy.addEventListener("click", () => {
    comunication_muscovy.style.display = "block"
})
hide_comunication_muscovy.addEventListener("click", () => {
    comunication_muscovy.style.display = "none"
})
war_muscovy.addEventListener("click", () => {
    muscovy.title = "Нова Русь";
    comunication_muscovy.style.display = "none";
    setTimeout(say, 1000, "Московська Антинародна Республіка");
    document.querySelector('span#manpower').innerHTML = 175;
    document.querySelector('span#tankpower').innerHTML = 21.5;
    document.querySelector('span#planepower').innerHTML = 5.5;
})