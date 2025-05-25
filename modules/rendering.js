export var canvas = null
export var draw = null

export function initRenderer(canvasID){
    canvas = document.getElementById(canvasID)
    draw = canvas.getContext("2d")
}

export function clear(color){
    draw.fillStyle = color

    draw.beginPath()
    draw.fillRect(0,0,canvas.width,canvas.height)
}

export function fillColor(color){
    draw.fillStyle = color
}

export function drawRect(x,y,width,height,fill = true,outline = false){
    if(fill){
        draw.fillRect(x,y,width,height)
    }
    if (outline){
        draw.rect(x,y,width,height)
        draw.stroke()
    }
}

export function drawText(font,text,x,y){
    draw.font = font
    draw.fillText(text,x,y)
}

export function setStroke(width,color){
    draw.lineWidth = width
    draw.strokeStyle = color
}