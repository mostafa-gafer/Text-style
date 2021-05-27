function ChangeFont(font){
  document.getElementById("PAR").style.fontFamily = font.value;

}
function ChangeAlign(allign){
    document.getElementById("PAR").style.textAlign = allign.value;
}
function ChangeHeight(height){
    document.getElementById("PAR").style.lineHeight = height.value;
}
function ChangeLSpace(letter){
    document.getElementById("PAR").style.letterSpacing = letter.value
}
function ChangeIndent(indent){
    document.getElementById("PAR").style.textIndent = indent.value;
}
function ChangeTransform(text){
    document.getElementById("PAR").style.textTransform = text.value;
}
function ChangeDecorate(decorate){
    document.getElementById("PAR").style.textDecoration = decorate.value;
}
function ChangeBorder(text){
    document.getElementById("PAR").style.border = text.value;
}
function ChangeBorderColor(color){
    document.getElementById("PAR").style.borderColor = color.value;
}