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
exports.preloader = void 0;
const PIXI = __importStar(require("pixi.js"));
class preloader {
    constructor(app, player) {
        this.preloader_source = () => {
            // preload assets
            let app = this.app;
            app.loader.baseUrl = "image";
            app.loader
                .add("sprite01", "bloat01.png")
                .add("sprite02", "bloat02.png")
                .add("sprite03", "bloat03.png")
                .add("sprite04", "bloat04.png")
                .add("sprite05", "bloat05.png")
                .add("sprite06", "bloat06.png")
                .add("sprite07", "bloat07.png")
                .add("sprite08", "bloat08.png")
                .add("sprite09", "bloat09.png")
                .add("sprite10", "bloat10.png")
                .add("player", "player.png");
            app.loader.onProgress.add(this.showProgress);
            app.loader.onComplete.add(this.doneLoading);
            app.loader.onError.add(this.reportingError);
            app.loader.load();
        };
        this.showProgress = (e) => {
            console.log(e.progress);
        };
        this.reportingError = (e) => {
            console.log("ERROR: " + e.message);
        };
        this.doneLoading = (e) => {
            console.log("DONE LOADING!");
            let app = this.app;
            let player = this.player;
            if (app.loader.resources.player.texture != undefined)
                player = PIXI.Sprite.from(app.loader.resources.player.texture);
            player.x = app.view.width / 2;
            player.y = app.view.height / 2;
            player.anchor.set(0.5);
            app.stage.addChild(player);
        };
        this.app = app;
        this.player = player;
    }
}
exports.preloader = preloader;
