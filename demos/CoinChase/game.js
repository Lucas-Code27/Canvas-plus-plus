// COIN CHASE DEMO
// Made by Lucas-Code
// Created on 5/25/2025

// Imports
import * as input from "./canvas++/modules/input.js"
import * as renderer from "./canvas++/modules/rendering.js"
import * as physics from "./canvas++/modules/physics.js"
import * as random from "./canvas++/modules/random.js"
import * as mathextras from "./canvas++/modules/math.js"

renderer.initRenderer("mainCanvas")
input.initInputSystem("mainCanvas")

// Vars
var lastupdate = Date.now()

var Playerx = 0
var Playery = 0

var Enemyx = 400
var Enemyy = 200

var coinx = 200
var coiny = 400

var score = 0
var highscore = 0


play()

function play(){
    main()
}

function main(){

    // updating
    update()

    // drawing
    draw()


    // loop
    requestAnimationFrame(main)
}

function update(){
    var now = Date.now()
    var dt = (now - lastupdate) / 1000
    lastupdate = now

    Playerx = mathextras.lerp(Playerx,input.mousex,10 * dt)
    Playery = mathextras.lerp(Playery,input.mousey,10 * dt)

    Enemyx = mathextras.lerp(Enemyx,Playerx,8 * dt)
    Enemyy = mathextras.lerp(Enemyy,Playery,8 * dt)

    // Coin Collection
    if(physics.rectvrectcollision(Playerx - 10,Playery - 10,25,25,coinx,coiny,20,20)){
        coinx = random.randi(0,780)
        coiny = random.randi(0,580)
        score++
        if(score > highscore) highscore = score
    }

    //Enemy collision
    if(physics.rectvrectcollision(Playerx-10,Playery-10,25,25,Enemyx - 15,Enemyy - 15,30,30)){
        score = 0
    }
}

function draw(){
    // background
    renderer.clear("#f5f5f5")

    // Player
    renderer.fillColor("blue")
    renderer.drawRect(Playerx - 10,Playery - 10,25,25)

    // Coin
    renderer.fillColor("gold")
    renderer.drawRect(coinx,coiny,20,20)

    //Enemy
    renderer.fillColor("red")
    renderer.drawRect(Enemyx - 15,Enemyy - 15,30,30)

    // Score Counter
    renderer.fillColor("green")
    renderer.drawText("48px sans-serif",score,10,40)

    // Highest Score COunter
    renderer.fillColor("green")
    renderer.drawText("48px sans-serif","Highest Score: " + highscore,10,590)

}