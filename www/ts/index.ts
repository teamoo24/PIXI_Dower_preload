import * as PIXI from "pixi.js"

let app:PIXI.Application;
let player:PIXI.Sprite;

window.onload = function () {
    app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xAAAAAA
        }
    )
    document.body.appendChild(app.view);

    // preload assets
    app.loader.baseUrl = "image";
    app.loader
        .add("sprite01","bloat01.png")
        .add("sprite02","bloat02.png")
        .add("sprite03","bloat03.png")
        .add("sprite04","bloat04.png")
        .add("sprite05","bloat05.png")
        .add("sprite06","bloat06.png")
        .add("sprite07","bloat07.png")
        .add("sprite08","bloat08.png")
        .add("sprite09","bloat09.png")
        .add("sprite10","bloat10.png")
        .add("player","player.png")

    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(doneLoading)
    app.loader.onError.add(reportingError)

    app.loader.load();
}

let showProgress = (e: { progress: any; }) => {
    console.log(e.progress)
}

let reportingError = (e: { message: string; }) => {
    console.log("ERROR: " + e.message)
}

let doneLoading = (e: any) => {
    console.log("DONE LOADING!")
    
    if(app.loader.resources.player.texture != undefined)
    player = PIXI.Sprite.from(app.loader.resources.player.texture);
    player.x = app.view.width /2;
    player.y = app.view.height /2;
    player.anchor.set(0.5);
    app.stage.addChild(player)
}