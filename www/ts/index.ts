import * as PIXI from "pixi.js"

let app;
let player;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xAAAAAA
        }
    )
    document.body.appendChild(app.view);
}