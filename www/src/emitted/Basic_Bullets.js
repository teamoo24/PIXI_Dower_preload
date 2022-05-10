"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic_Bullets = void 0;
const PIXI = __importStar(require("pixi.js"));
class Basic_Bullets {
    constructor(app) {
        var _a;
        this.bullets = new Array;
        this.bulletSpeed = 10;
        this.fireBullet = () => {
            console.log("FIRE!");
            let bullet = this.createBullet();
            this.bullets.push(bullet);
        };
        this.gameLoop = (delta) => {
            this.updateBullet(delta);
        };
        //app.stage.interactive = true;
        (_a = document.getElementById("gameDiv")) === null || _a === void 0 ? void 0 : _a.addEventListener("pointerdown", this.fireBullet);
        this.player = PIXI.Sprite.from("image/player.png");
        this.app = app;
        let player = this.player;
        player.anchor.set(0.5);
        player.x = app.view.width / 2;
        player.y = app.view.height / 2;
        app.stage.addChild(player);
        app.ticker.add(this.gameLoop);
    }
    createBullet() {
        let bullet = PIXI.Sprite.from("image/bullet.png");
        bullet.anchor.set(0.5);
        bullet.x = this.player.x;
        bullet.y = this.player.y;
        this.app.stage.addChild(bullet);
        return bullet;
    }
    updateBullet(delta) {
        this.bullets.forEach((obj, index) => {
            obj.position.y -= this.bulletSpeed;
            if (obj.position.y < 0) {
                this.app.stage.removeChild(this.bullets[index]);
                this.bullets.splice(index, 1);
            }
        });
    }
}
exports.Basic_Bullets = Basic_Bullets;
