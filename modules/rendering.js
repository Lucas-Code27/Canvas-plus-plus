export var canvas = null
export var draw = null

export function initRenderer(canvasID){
    canvas = document.getElementById(canvasID)
    draw = canvas.getContext("2d")
}

export function clear(color){
    draw.fillStyle = color
    draw.fillRect(0,0,canvas.width,canvas.height)
}

export function fillColor(color){
    draw.fillStyle = color
}

export function drawRect(x,y,width,height){
    draw.fillRect(x,y,width,height)
}

export function drawText(font,text,x,y){
    draw.font = font
    draw.fillText(text,x,y)
}