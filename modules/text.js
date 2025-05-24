export function addfont(name,path){
    const newFont = new FontFace(name,'url(' + path + ')')
    document.fonts.add(newFont)
}