function copyText(){
    var text = document.getElementById("myText").innerHTML;
    var textCopy = document.getElementById("myText");
    textCopy.value = text;    
    document.execCommand("copy");
    }