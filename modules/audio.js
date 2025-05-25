const audiomap = {}

export function addAudio(name,path,loop=false){
    const audio = new Audio(path);
    audio.loop = loop;
    audiomap[name] = audio
}

export function playAudio(name) {
  const audio = audiomap[name];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

export function stopAudio(name) {
  const audio = audiomap[name];
  if (audio) {
    audio.pause();
  }
}