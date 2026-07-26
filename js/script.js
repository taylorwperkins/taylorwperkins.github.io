const titles = [

    "Geospatial Developer",

    "GIS Analyst",

    "Spatial Data Automation",

    "Python Developer",

    "Spatial Intelligence"

];

const typingElement = document.getElementById("typing-text");

let titleIndex = 0;

let characterIndex = 0;

let deleting = false;

function type(){

    const currentTitle = titles[titleIndex];

    if(!deleting){

        typingElement.textContent = currentTitle.substring(0,characterIndex++);

        if(characterIndex > currentTitle.length){

            deleting = true;

            setTimeout(type,1600);

            return;

        }

    }

    else{

        typingElement.textContent = currentTitle.substring(0,--characterIndex);

        if(characterIndex===0){

            deleting=false;

            titleIndex=(titleIndex+1)%titles.length;

        }

    }

    setTimeout(type,deleting?40:80);

}

type();