# Canvas++ Documentation
### Updated for v0.1.0-indev

## Input System
Code used is taken from the Coin Catcher Demo

In order to handle input you have to import the input module
```
import * as input from "/canvas++/modules/input.js"
```
Then run the Init Function
```
input.initInputSystem()
```
then you can call the dictionary for inputs as bool values for if they are pressed
```
if(input.keys['d'] || input.keys['ArrowRight']){
  // Game Logic
}
```

## Physics System
> [!IMPORTANT]
> The physics system is completly unfinished and if you need anything other than a basic bool function to check if two rectangles are colliding you will have to make it yourself
> 
> You can visit this site for information on collision systems: https://www.jeffreythompson.org/collision-detection/

First you have to import the module
```
import * as physics from "/canvas++/modules/physics.js"
```
Then you can put the collision function into an if statement and fill out the arguments
```
if (physics.rectvrectcollision(Px,520,60,40,Cx1,Cy1,20,20)){
  Cy1 = 0
  Cx1 = random.randi(380)
  Score++
  coinsound.play()
}
```
The arguments go as follows:
* r1x - First rectangle's x position
* r1y - First rectangle's y position
* r1w - First rectangle's width
* r1h - First rectangle's height
* r2x - Second rectangle's x position
* r2y - Second rectangle's y position
* r2w - Second rectangle's width
* r2h - Second rectangle's height

# Random Number System
>[!IMPORTANT]
>The RNG system currently only supports ints from 1 to what ever number you set as the max you will have to make your own for floats as of right now

First import the module
```
import * as random from "/canvas++/modules/random.js"
```

Then you call the randi function as a number
```
Cx1 = random.randi(380)
```
