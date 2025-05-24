export function randi(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min
}

export function randf(min, max){
  return Math.random() * (max - min + 1) + min
}