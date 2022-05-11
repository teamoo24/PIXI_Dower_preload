import * as PIXI from "pixi.js"

export class Basic_collision {
    private player = PIXI.Sprite.from("images/player.png")
    private enemy = PIXI.Sprite.from("images/player.png")
    private speed = 4;
    private app;

    constructor(app: PIXI.Application) {

        let player = this.player
        let enemy = this. enemy

        this.app = app;

        player.anchor.set(0.5);
        player.x = 16;
        player.y = app.view.height / 2;
        app.stage.addChild(player)
        
        enemy.anchor.set(0.5);
        enemy.x = app.view.width - 16;
        enemy.y = app.view.height / 2;
        app.stage.addChild(enemy)

        app.ticker.add(this.gameLoop)

        
    }
    private gameLoop = () => {
        this.player.x += this.speed;
        this.enemy.x -= this.speed;

        if(this.rectsIntersect(this.player, this.enemy) || this.check_wall(this.player) || this.check_wall(this.enemy)) {
            this.speed = -this.speed;
        }
    }

    private rectsIntersect(a: { getBounds: () => any }, b: { getBounds: () => any }) {
        let aBox = a.getBounds();
        let bBox = b.getBounds();

        return aBox.x + aBox.width > bBox.x &&
            aBox.x < bBox.x + bBox.width &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.y + bBox.height;
    }
    private check_wall(a: any) {
        let x = a.x;

        return x < 0 || x > this.app.view.width;
    }
}