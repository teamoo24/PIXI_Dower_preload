import * as PIXI from "pixi.js"

export class Basic_Bullets {

    
    private player;
    private app;
    private bullets:Array<PIXI.Sprite> = new Array;
    private bulletSpeed = 10;

    constructor (app:PIXI.Application) 
    {
        //app.stage.interactive = true;
        document.getElementById("gameDiv")?.addEventListener("pointerdown", this.fireBullet);

        this.player = PIXI.Sprite.from("images/player.png")
        this.app = app;

        let player = this.player
        player.anchor.set(0.5);
        player.x  = app.view.width /2;
        player.y  = app.view.height /2;

        app.stage.addChild(player)

        app.ticker.add(this.gameLoop);
    }

    private fireBullet = () => {
        console.log("FIRE!")

        let bullet = this.createBullet();
        this.bullets.push(bullet);
    }

    private createBullet() {
        let bullet = PIXI.Sprite.from("images/bullet.png")
        bullet.anchor.set(0.5);
        bullet.x = this.player.x;
        bullet.y = this.player.y;

        this.app.stage.addChild(bullet)
        
        return bullet;
    }

    private updateBullet(delta: any) {
        this.bullets.forEach((obj,index) => {
            obj.position.y -= this.bulletSpeed;
            
            if(obj.position.y < 0) {
                this.app.stage.removeChild(this.bullets[index])
                this.bullets.splice(index,1)
            }
        })
    }

    private gameLoop = (delta: any) => { 
        this.updateBullet(delta);

    }

}