var init = function () {
    var objTimer = document.getElementById("Timer");

    function formatDate(dateVal) {
        function padLeft(str, lenght) {
            if (str.toString().length >= lenght)
                return str;
            else
                return padLeft("0" + str, lenght);
        }

        var txt = `${dateVal.getFullYear()}/${padLeft(dateVal.getMonth() + 1, 2)}/${padLeft(dateVal.getDate(), 2)} ${padLeft(dateVal.getHours(), 2)}:${padLeft(dateVal.getMinutes(), 2)}:${padLeft(dateVal.getSeconds(), 2)}`;
        return txt;
    }

    setInterval(function () {
        var cDate = new Date();
        var txt = formatDate(cDate);
        objTimer.innerText = txt;
    }, 100);


    // readSlides
    var slides =
    {
        "Music": [
            "https://www.youtube.com/embed/5mgYnwhM4eg",
            "https://www.youtube.com/embed/DVEUcbPkb-c"
        ],
        "Contents": [
            {
                "Title": "Take a break.",
                "Content": "Let's have a cup of coffee.."
            },
            {
                "Title": "休息一下吧",
                "Content": "辛苦了，何不喝杯咖啡呢?"
            }
        ]
    }

    // create Element with attribute
    function oneLineTag(tag, options) {
        return Object.assign(document.createElement(tag), options);
    }

    var domSlideContainer = document.getElementById("carouselExampleControls");
    if (domSlideContainer) {
        var container = domSlideContainer;
        container.children[0].remove();
        var childNode = document.createElement("div");
        childNode.classList.add("carousel-inner");
        container.appendChild(childNode);

        for (var cont of slides.Contents) {
            var slideNode = document.createElement("div");
            slideNode.classList.add("carousel-item");
            childNode.appendChild(slideNode);

            slideNode.innerHTML =
                `<p>${cont.Title}</p>
                <p>${cont.Content}</p>`;
        }

        childNode.children[0].classList.add("active");
    }
};


document.addEventListener("DOMContentLoaded", init);
