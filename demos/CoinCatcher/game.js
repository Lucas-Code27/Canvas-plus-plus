// COIN CATCHER DEMO
// Made by Lucas-Code
// Created on 5/24/2025
// Updated on 5/24/2025
// Updated to Canvas++ v1-beta from v0.3

// Imported Modules from Canvas++
import * as random from "./canvas++/modules/random.js"
import * as physics from "./canvas++/modules/physics.js"
import * as input from "./canvas++/modules/input.js"
import * as text from "./canvas++/modules/text.js"
import * as renderer from "./canvas++/modules/rendering.js"
import * as audio from "./canvas++/modules/audio.js"

// Init Renderer
renderer.initRenderer("mainCanvas")

// Load a font
text.addfont("pixel","assets/Micro5-Regular.ttf")

// Init Input Handler
input.initInputSystem("mainCanvas")

// Init Sounds
audio.addAudio("coin","./assets/audio/coin.wav")
audio.addAudio("miss","./assets/audio/miss.wav")
audio.addAudio("death","./assets/audio/death.wav")
audio.addAudio("song","./assets/audio/song.mp3",true)

// Variables
const PLAYERSPEED = 5

var dead = false

var Px = 0

var Score = 0

const COINSPEED = 2
var Cx1 = 180
var Cy1 = -20
var Cx2 = 20
var Cy2 = 10
var Cx3 = 330
var Cy3 = 0

var Bx1 = 50
var By1 = 0
var Bx2 = 250
var By2 = -30

var canloop = true

play()

function play(){
    canloop = true
    audio.playAudio("song")
    main()
}

// Main Loop
function main(){
    // Update

    // Coin Falling
    if (!dead){
        Cy1 += COINSPEED
        Cy2 += COINSPEED
        Cy3 += COINSPEED

        By1 += COINSPEED
        By2 += COINSPEED
    }

    if (Cy1 > 600){
        Cy1 = 0
        Cx1 = random.randi(0,380)
        if (Score != 0){
            Score--
        }
        audio.playAudio("miss")
    }
    if (Cy2 > 600){
        Cy2 = 0
        Cx2 = random.randi(0,380)
        if (Score != 0){
            Score--
        }
        audio.playAudio("miss")
    }
    if (Cy3 > 600){
        Cy3 = 0
        Cx3 = random.randi(0,380)
        if (Score != 0){
            Score--
        }
        audio.playAudio("miss")
    }
    if (By1 > 600){
        By1 = 0
        Bx1 = random.randi(0,380)
    }
    if (By2 > 600){
        By2 = 0
        Bx2 = random.randi(0,380)
    }

    // Inputs
    if(input.keys['d'] || input.keys['ArrowRight']){
        Px += PLAYERSPEED
    } else if (input.keys['a'] || input.keys['ArrowLeft']){
        Px -= PLAYERSPEED
    }

    // Map Bounds
    if(Px < 0){
        Px = 0
    } else if(Px > 340){
        Px = 340
    }

    // Collision Detection
    if (!dead){
        if (physics.rectvrectcollision(Px,520,60,40,Cx1,Cy1,20,20)){
            Cy1 = 0
            Cx1 = random.randi(0,380)
            Score++
            audio.playAudio("coin")
        }
        if (physics.rectvrectcollision(Px,520,60,40,Cx2,Cy2,20,20)){
            Cy2 = 0
            Cx2 = random.randi(0,380)
            Score++
            audio.playAudio("coin")
        }
        if (physics.rectvrectcollision(Px,520,60,40,Cx3,Cy3,20,20)){
            Cy3 = 0
            Cx3 = random.randi(0,380)
            Score++
            audio.playAudio("coin")
        }
        if (physics.rectvrectcollision(Px,520,60,40,Bx1,By1,20,20)){
            dead = true
            audio.stopAudio("song")
            audio.playAudio("death")
        }
        if (physics.rectvrectcollision(Px,520,60,40,Bx2,By2,20,20)){
            dead = true
            audio.stopAudio("song")
            audio.playAudio("death")
        }
    }

    // Drawing

    // Background
    renderer.clear("#f5f5f5")

    if (!dead){
        // Player
        renderer.fillColor("blue")
        renderer.drawRect(Px, 520, 60, 40)

        // Coins
        renderer.fillColor("#FFD700")
        renderer.drawRect(Cx1,Cy1,20,20)
        renderer.drawRect(Cx2,Cy2,20,20)
        renderer.drawRect(Cx3,Cy3,20,20)

        // Bombs
        renderer.fillColor("red") 
        renderer.drawRect(Bx1,By1,20,20)
        renderer.drawRect(Bx2,By2,20,20)

        // Score Display
        renderer.fillColor('#34eb34')
        renderer.drawText("84px pixel",Score, 10, 50)
    } else{
        // Dead Display
        renderer.fillColor('#34eb34')
        renderer.drawText("84px pixel","YOU ARE DEAD", 20, 100)
        renderer.drawText("48px pixel","PRESS 'R' TO RESTART", 20, 200)

        // Check Input
        if(input.keys['r']){
            dead = false
            Px = 0
            Score = 0
            Cx1 = 180
            Cy1 = -20
            Cx2 = 20
            Cy2 = 10
            Cx3 = 330
            Cy3 = 0
            Bx1 = 50
            By1 = 0
            Bx2 = 250
            By2 = -30
            canloop = false
        }
    }

    // Loop
    if (canloop){
        requestAnimationFrame(main)
    } else{
        play()
    }
}
