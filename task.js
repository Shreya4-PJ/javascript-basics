function sound1()
{
    var sound=new Audio("piano music.mp3");
    sound.play()

}

function sound2()
{
    var sound=new Audio("violin music.mp3 ");
    sound.play()

}

function sound3()
{
    var sound=new Audio("drum music.mp3");
    sound.play()

}

function sound4()
{
    var sound=new Audio("tabla music.mp3");
    sound.play()

}

function sound5()
{
    var sound=new Audio("flute music.mp3");
    sound.play()

}

function sound6()
{
    var sound=new Audio("guitar music.mp3");
    sound.play()

}

function sound7()
{
    var sound=new Audio("sitar music.mp3");
    sound.play()

}

function sound8()
{
    var sound=new Audio("trumpet music.mp3");
    sound.play()

}

document.onkeydown = function(e){
    console.log(e.key)
    if(e.key=="A"||e.key=="a"){
        sound1()
    }
    else if(e.key=="S"||e.key=="s"){
        sound2()
    }
    else if(e.key=="D"||e.key=="d"){
        sound3()
    }
    else if(e.key=="F"||e.key=="f"){
        sound4()
    }
    else if(e.key=="G"||e.key=="g"){
        sound5()
    }
    else if(e.key=="H"||e.key=="h"){
        sound6()
    }
    else if(e.key=="J"||e.key=="j"){
        sound7()
    }
    else if(e.key=="K"||e.key=="k"){
        sound8()
    }
}
