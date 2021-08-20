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
};


document.addEventListener("DOMContentLoaded", init);
