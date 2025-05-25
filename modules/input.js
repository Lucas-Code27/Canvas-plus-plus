export const keys = {}

export var mousex = 0
export var mousey = 0

export function initInputSystem(canvasID){
    const canvas = document.getElementById(canvasID)

    document.addEventListener("keydown",e =>{
        keys[e.key] = true
    })

    document.addEventListener("keyup", e =>{
        keys[e.key] = false
    })
    canvas.addEventListener("pointermove",e => {
        mousex = e.offsetX
        mousey = e.offsetY
    })
}