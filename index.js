let apps = ["app", "blog", "shop", "note", "game", "grave"];
let appName = document.getElementById("app-name");
appName.innerHTML = apps[0];
const rotateRight = () => {
    apps.push(apps.shift())
    appName.innerHTML = apps[0];
    return apps;
};
const rotateLeft = () => {
    apps.unshift(apps.pop());
    appName.innerHTML = apps[0];
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
