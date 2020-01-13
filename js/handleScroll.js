// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

function* sectionGenerator() {
    let sections = ["title", "aboutme-title", "aboutme-content", "portfolio-title", "portfolio-content", "footer-title"];
    for(let i = 0; i < sections.length; i++) {
        yield sections[i];
    }
}

let generator = sectionGenerator();
let curr = generator.next().value;
window.onload = function() {
    let currElem = document.getElementById(curr);
    while(curr != null && window.scrollY + window.innerHeight - 100 >= currElem.offsetTop + currElem.clientHeight) {
        curr = generator.next().value;
        if(curr != null) {
            console.log(curr);
            document.getElementById(curr).style.opacity = 1;
        }
    }
}

window.addEventListener("scroll", () => {
    let currElem = document.getElementById(curr);
    if(curr != null && window.scrollY + window.innerHeight - 100 >= currElem.offsetTop + currElem.clientHeight) {
        curr = generator.next().value;
        if(curr != null) {
            console.log(curr);
            //document.getElementById(curr).style.opacity = 1;

            anime({
                targets: `#${curr}`,
                easing: 'linear',
                opacity: 1,
                duration: 1000,
            })
        }
    }
})
