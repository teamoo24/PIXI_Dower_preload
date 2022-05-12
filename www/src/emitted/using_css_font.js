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
exports.using_css_font = void 0;
const PIXI = __importStar(require("pixi.js"));
class using_css_font {
    constructor(app) {
        this.app = app;
        let text1 = new PIXI.Text("Welcome To Your Doom!");
        text1.x = app.view.width / 2;
        text1.y = app.view.height / 2;
        text1.anchor.set(0.5);
        text1.style = new PIXI.TextStyle({
            fill: 0xff0000,
            fontSize: 40,
            fontFamily: "Arcade",
        });
        app.stage.addChild(text1);
    }
}
exports.using_css_font = using_css_font;
