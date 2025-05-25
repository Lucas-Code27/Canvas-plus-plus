export function lerp(start,end,factor){
    return start + (end - start) * factor
}

export function clamp(number,min,max){
     return Math.min(Math.max(number, min), max)
}