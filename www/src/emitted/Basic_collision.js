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
exports.Basic_collision = void 0;
const PIXI = __importStar(require("pixi.js"));
class Basic_collision {
    constructor(app) {
        this.player = PIXI.Sprite.from("images/player.png");
        this.enemy = PIXI.Sprite.from("images/player.png");
        this.speed = 4;
        this.gameLoop = () => {
            this.player.x += this.speed;
            this.enemy.x -= this.speed;
            if (this.rectsIntersect(this.player, this.enemy) || this.check_wall(this.player) || this.check_wall(this.enemy)) {
                this.speed = -this.speed;
            }
        };
        let player = this.player;
        let enemy = this.enemy;
        this.app = app;
        player.anchor.set(0.5);
        player.x = 16;
        player.y = app.view.height / 2;
        app.stage.addChild(player);
        enemy.anchor.set(0.5);
        enemy.x = app.view.width - 16;
        enemy.y = app.view.height / 2;
        app.stage.addChild(enemy);
        app.ticker.add(this.gameLoop);
    }
    rectsIntersect(a, b) {
        let aBox = a.getBounds();
        let bBox = b.getBounds();
        return aBox.x + aBox.width > bBox.x &&
            aBox.x < bBox.x + bBox.width &&
            aBox.y + aBox.height > bBox.y &&
            aBox.y < bBox.y + bBox.height;
    }
    check_wall(a) {
        let x = a.x;
        return x < 0 || x > this.app.view.width;
    }
}
exports.Basic_collision = Basic_collision;
