const hello_wrapper = document.querySelector('.main-wrapper');
const content = document.querySelector('.main-wrapper__content');
const navigation_text = document.querySelectorAll('.navigation a span')
const contacts_links = document.querySelectorAll('.contacts-links a')

// Номер текущей страницы
let pageCount = 0;

// Данные о каждой странице
const dataPage = {
    0: {
        title: "Hello, i'm Dima", 
        subtitle: "I am a web developer.",
        background_color: "#620CAC",
        color: "#f9d75e",
        axes: "vertical",
        type: "text",
    },
    1: {
        title: "I am 20 years old", 
        subtitle: "I am a student of FEFU.",
        background_color: "#047e79",
        color: "#F53D65",
        axes: "vertical",
        type: "text",
    },
    2: {
        title: "I live in Vladivostok", 
        subtitle: "All my life I've dreamed of writing websites.",
        background_color: "#040d3a",
        color: "#f8b516",
        axes: "node",
        type: "text",
    },
    3: {
        title: "", // Указывается только для "text"-страниц
        subtitle: "", // Указывается только для "text"-страниц
        background_color: "#041c24",
        color: "#d794f9",
        axes: "horisontal",
        type: "skills",
    },
    4: {
        title: "", // Указывается только для "text"-страниц
        subtitle: "", // Указывается только для "text"-страниц
        background_color: "#040d3a",
        color: "#f8b516",
        axes: "node",
        type: "works",
    },
    5: {
        title: "esl;g,eswlg,l;esw,g", 
        subtitle: "ae,f'ea,f'gsdg",
        background_color: "#040d3a",
        color: "#f8b516",
        axes: "vertical",
        type: "text",
    },
};
// Данные о каждой странице

// Разметка для страниц
const markupTextPages =`
<div class='main-wrapper__title'></div>
<div class='main-wrapper__subtitle'></div>`;
const markupSkillsPages = `
<div class='main-wrapper__skills'>
    <div class='skills__title'>My skills:</div>
    <ul class='skills__list'>
        <li class='skills__item'><ion-icon name="logo-html5"></ion-icon></li>
        <li class='skills__item'><ion-icon name="logo-javascript"></ion-icon></li>
        <li class='skills__item'><ion-icon name="logo-css3"></ion-icon></li>
        <li class='skills__item'><ion-icon name="logo-vue"></ion-icon></li>
        <li class='skills__item'><ion-icon name="logo-sass"></ion-icon></li>
    </ul>
</div>`;
const markupWorksPages = `
<div class='main-wrapper__works'>
    <div class='works__title'>My works:</div>
    <ul class='works__list'>
        <li class='works__item'><a>Work number 1</a></li>
        <li class='works__item'><a>Work number 2</a></li>
        <li class='works__item'><a>Work number 3</a></li>
        <li class='works__item'><a>Work number 4</a></li>
        <li class='works__item'><a>Work number 5</a></li>
    </ul>
</div>`;
// Разметка для страниц

const maxPageCount = Object.keys(dataPage).length;
let title = document.querySelector('.main-wrapper__title');
let subtitle = document.querySelector('.main-wrapper__subtitle');
let active_animation;

// Прогрузка изначальных данных на странику
// Прослушка действий пользователя (вызов функции перехода страницы)
{
    title.innerText = dataPage[pageCount]["title"];
    subtitle.innerText = dataPage[pageCount]["subtitle"];
    hello_wrapper.setAttribute("style", `color:${dataPage[pageCount]["color"]};background-color:${dataPage[pageCount]["background_color"]};`);
    for (let element of navigation_text) {
        element.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
    }
    for (let link of contacts_links) {
        link.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
    }

    window.addEventListener('mousewheel', movingSiteProcessor);
    window.addEventListener('keydown', movingSiteProcessor);
}
// Основная функция реализующа переход страницы
function movingSiteProcessor(e) {
    if (active_animation !== undefined) return

    if (e.type === "mousewheel") {
        if(e.wheelDelta < 0) {
            if (pageCount < maxPageCount-1) {
                content.classList.add(choicePath(pageCount, pageCount+1));
                if (dataPage[pageCount+1]["type"] !== "text") {
                    ++pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                }
                else if (dataPage[pageCount]["type"] !== "text" && dataPage[pageCount+1]["type"] === "text"){
                    ++pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else {
                    ++pageCount;
                };
            } else return
        } else {
            if (pageCount > 0) {
                content.classList.add(choicePath(pageCount, pageCount-1));
                if (dataPage[pageCount-1]["type"] !== "text") {
                    --pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else if (dataPage[pageCount]["type"] !== "text" && dataPage[pageCount-1]["type"] === "text"){
                    --pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else {
                    --pageCount;
                };
            } else return;
        };
    } else if (e.type === "keydown") {
        if(e.code == "ArrowDown") {
            if (pageCount < maxPageCount-1) {
                content.classList.add(choicePath(pageCount, pageCount+1));
                if (dataPage[pageCount+1]["type"] !== "text") {
                    ++pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else if (dataPage[pageCount]["type"] !== "text" && dataPage[pageCount+1]["type"] === "text"){
                    ++pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else {
                    ++pageCount;
                };
            } else return
        } else if (e.code == "ArrowUp") {
            if (pageCount > 0) {
                content.classList.add(choicePath(pageCount, pageCount-1));
                if (dataPage[pageCount-1]["type"] !== "text") {
                    --pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else if (dataPage[pageCount]["type"] !== "text" && dataPage[pageCount-1]["type"] === "text"){
                    --pageCount;
                    setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
                } else {
                    --pageCount;
                };
            } else return;
        };
    }

    setTimeout(()=>{
        hello_wrapper.setAttribute("style", `color:${dataPage[pageCount]["color"]};background-color:${dataPage[pageCount]["background_color"]};`);
        for (let element of navigation_text) {
            element.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
        }
        for (let link of contacts_links) {
            link.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
        }
    }, 200)

    active_animation = setTimeout(()=>{
        if (dataPage[pageCount]["type"] === "text") {
            title = document.querySelector('.main-wrapper__title');
            subtitle = document.querySelector('.main-wrapper__subtitle');
            title.innerText = dataPage[pageCount]["title"];
            subtitle.innerText = dataPage[pageCount]["subtitle"];
        }
        content.classList.remove("disactiveYdown");
        content.classList.remove("disactiveYup");
        content.classList.remove("disactiveXdown");
        content.classList.remove("disactiveXup");
        
        active_animation = undefined
    }, 500);
}

function movingSiteProcessorForLink(numNextPage) {
    if (active_animation !== undefined) return

    if (pageCount < numNextPage) {
        content.classList.add(choicePath(pageCount, numNextPage));
        if (dataPage[numNextPage]["type"] !== "text") {
            pageCount = numNextPage;
            setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
        }
        else if (dataPage[pageCount]["type"] !== "text" && dataPage[numNextPage]["type"] === "text"){
            pageCount = numNextPage;
            setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
        } else {
            pageCount = numNextPage;
        };
    }
    else if (pageCount > numNextPage) {
        content.classList.add(choicePath(pageCount, numNextPage));
        if (dataPage[numNextPage]["type"] !== "text") {
            pageCount = numNextPage;
            setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
        } else if (dataPage[pageCount]["type"] !== "text" && dataPage[numNextPage]["type"] === "text"){
            pageCount = numNextPage;
            setTimeout(()=>{content.innerHTML = markupProcessor(dataPage[pageCount]["type"])}, 500)
        } else {
            pageCount = numNextPage;
        };
    } 
    else alert("Вы уже на этой странице");

    setTimeout(()=>{
        hello_wrapper.setAttribute("style", `color:${dataPage[pageCount]["color"]};background-color:${dataPage[pageCount]["background_color"]};`);
        for (let element of navigation_text) {
            element.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
        }
        for (let link of contacts_links) {
            link.setAttribute("style", `color:${dataPage[pageCount]["color"]}`)
        }
    }, 200)

    active_animation = setTimeout(()=>{
        if (dataPage[pageCount]["type"] === "text") {
            title = document.querySelector('.main-wrapper__title');
            subtitle = document.querySelector('.main-wrapper__subtitle');
            title.innerText = dataPage[pageCount]["title"];
            subtitle.innerText = dataPage[pageCount]["subtitle"];
        }
        content.classList.remove("disactiveYdown");
        content.classList.remove("disactiveYup");
        content.classList.remove("disactiveXdown");
        content.classList.remove("disactiveXup");
        
        active_animation = undefined
    }, 500);
}

// Функция получает номер нанешней и следующей страницы
// После чего возвращает наименование нужной анимации перехода
function choicePath(me, next_point) {
    if (dataPage[me]["axes"] === "node" && dataPage[next_point]["axes"] === "vertical") {
        if (me > next_point) return "disactiveYup"; else return "disactiveYdown"
    }
    else if (dataPage[me]["axes"] === "node" && dataPage[next_point]["axes"] === "horizontal") {
        if (me > next_point) return "disactiveXup"; else return "disactiveXdown"
    }
    else if (dataPage[me]["axes"] === "vertical" && (dataPage[next_point]["axes"] === "vertical" ||dataPage[next_point]["axes"] === "node")) {
        if (me > next_point) return "disactiveYup"; else return "disactiveYdown"
    }
    else {
        if (me > next_point) return "disactiveXup"; else return "disactiveXdown"
    }
}

// Функция получает тип страницы и возвращает расметку для неё
function markupProcessor(type) {
    if (type === "text") {
        return markupTextPages;
    }
    else if (type === "skills") {
        return markupSkillsPages;
    }
    else if (type === "works") {
        return markupWorksPages;
    }
}