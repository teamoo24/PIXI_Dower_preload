import * as PIXI from "pixi.js"


export class preloader{

    private app:PIXI.Application;
    private player:PIXI.Sprite;

    constructor (app:PIXI.Application, player:PIXI.Sprite) {
        this.app = app;
        this.player = player;
    }

    public preloader_source = () => {
        // preload assets

        let app = this.app;

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
    
        app.loader.onProgress.add(this.showProgress);
        app.loader.onComplete.add(this.doneLoading)
        app.loader.onError.add(this.reportingError)
    
        app.loader.load();
    }
    
    public showProgress = (e: { progress: any; }) => {
        console.log(e.progress)
    }
    
    public reportingError = (e: { message: string; }) => {
        console.log("ERROR: " + e.message)
    }
    
    public doneLoading = (e: any) => {
        console.log("DONE LOADING!")
        
        let app = this.app;
        let player = this.player;
        if(app.loader.resources.player.texture != undefined)
        player = PIXI.Sprite.from(app.loader.resources.player.texture);
        player.x = app.view.width /2;
        player.y = app.view.height /2;
        player.anchor.set(0.5);
        app.stage.addChild(player)
    }
}