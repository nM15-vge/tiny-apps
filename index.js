let apps = ["app", "blog", "shop", "note", "game", "grave"];
let appName = document.getElementById("app-name");
appName.innerHTML = apps[0];

const toggleDark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    appName.style.color = "#F6F6F6"
};
const toggleLight = () => {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    appName.style.color = "#F6F6F6"
};
const rotateRight = () => {
    apps.push(apps.shift())
    appName.innerHTML = apps[0];
    apps[0] === "grave" ? toggleDark() : toggleLight();
    return apps;
};
const rotateLeft = () => {
    apps.unshift(apps.pop());
    appName.innerHTML = apps[0];
    apps[0] === "grave" ? toggleDark() : toggleLight();
    return apps;
};
document.getElementById("right-button").onclick = rotateRight;
document.getElementById("left-button").onclick = rotateLeft;
// window.addEventListener("DOMContentLoaded", () =>{
//     const previous = document.getElementById("previousPage");
//     const next = document.getElementById("nextPage");
//     previous.addEventListener("click", () => {
//         let container = document.getElementById("container");
//         const previouseText = container.innerHTML;
//     })
// });
