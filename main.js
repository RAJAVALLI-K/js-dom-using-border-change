const paddingEle = document.querySelector("#size"),
    borderEle = document.querySelector("#radius"),
    colorEle = document.querySelector("#colorpicker");
    imgEle = document.querySelector("#img");
    imgEle.style.border = `5px solid ${colorEle.value}`;
    jsEle = document.querySelector("#js");
    jsEle.style.color = `${colorEle.value}`;

paddingEle.addEventListener("input", function () {
    imgEle.style.padding = `${paddingEle.value}px`;
});

borderEle.addEventListener("input", function () {
    imgEle.style.border = `${borderEle.value}px solid ${colorEle.value}`;
});

colorEle.addEventListener("input", function () {
    imgEle.style.border = `${borderEle.value}px solid ${colorEle.value}`;
    jsEle.style.color = `${colorEle.value}`;
});