// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }
let generator = sectionGenerator();
let curr = generator.next().value;

function* sectionGenerator() {
    let sections = ["title", "portfolio-title", "portfolio-content", "aboutme-title", "aboutme-content",  "footer-title"];
    for(let i = 0; i < sections.length; i++) {
        yield sections[i];
    }
}

window.onload = function() {
    let currElem = document.getElementById(curr);
    while(curr != null && window.scrollY + window.innerHeight - 100 >= currElem.offsetTop + currElem.clientHeight) {
        curr = generator.next().value;
        if(curr != null) {
            // console.log(curr);
            document.getElementById(curr).style.opacity = 1;
        }
    }
}

window.addEventListener("scroll", () => {
    let currElem = document.getElementById(curr);
    if(curr != null && window.scrollY + window.innerHeight - 100 >= currElem.offsetTop + currElem.clientHeight) {
        curr = generator.next().value;
        if(curr != null) {
            // console.log(curr);
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
