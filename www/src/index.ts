import * as PIXI from "pixi.js"
//preloderのモジュール
import {preloader} from './preloader.js'
//Basic Bulletsのモジュール
import {Basic_Bullets} from './Basic_Bullets.js'
//Basic Bulletsのモジュール
import {Basic_collision} from './Basic_collision.js'
//Basic Bulletsのモジュール
import {using_css_font} from './using_css_font'

window.onload = function () {
    let app:PIXI.Application = new PIXI.Application(
        {
            width: window.innerWidth-4,
            height: window.innerHeight-4,
            backgroundColor: 0xAAAAAA
        }
    )

    // @ts-ignore
    document.querySelector("#gameDiv").appendChild(app.view);

    // let preloader_source = new preloader(app,player).preloader_source();
    // new Basic_Bullets(app);
    ///new Basic_collision(app);
    new using_css_font(app)
}

