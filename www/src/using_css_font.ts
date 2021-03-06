import * as PIXI from "pixi.js"

export class using_css_font {
    
    private app;

    constructor(app:PIXI.Application) {
        this.app = app

        let text1 = new PIXI.Text("Welcome To Your Doom!");
        text1.x = app.view.width/2;
        text1.y = app.view.height/2;
        text1.anchor.set(0.5);
        text1.style = new PIXI.TextStyle({
            fill: 0xff0000,
            fontSize: 40,
            fontFamily: "Arcade",
        })
        app.stage.addChild(text1);
    }
}