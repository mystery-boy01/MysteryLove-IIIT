let index = 0;

function showShayari(){

    const textEl = document.getElementById("shayari-text");
    const authorEl = document.getElementById("author-text");

    // Step 1: fade out (paper blank feel)
    textEl.style.opacity = "0";
    authorEl.style.opacity = "0";

    setTimeout(() => {

        // 👉 ek hi baar pura text set (NO typing)
        textEl.innerText = shayariList[index].text;
        authorEl.innerText = shayariList[index].author;

        // Step 2: smooth appear
        textEl.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        authorEl.style.transition = "opacity 1s ease";

        textEl.style.transform = "translateY(20px)";

        setTimeout(() => {
            textEl.style.opacity = "1";
            textEl.style.transform = "translateY(0)";
            authorEl.style.opacity = "1";
        }, 50);

    }, 3000);
}

function nextShayari(){
    index = (index + 1) % shayariList.length;
    showShayari();
}

function prevShayari(){
    index = (index - 1 + shayariList.length) % shayariList.length;
    showShayari();
}

window.onload = showShayari;