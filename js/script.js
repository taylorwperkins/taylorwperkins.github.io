const phrases = [

    "Building GIS Automation Tools...",

    "Designing Spatial Analysis Workflows...",

    "Developing Python Solutions...",

    "Creating Web GIS Applications...",

    "Transforming Spatial Data into Actionable Insights...",

    "Applying AI to Geospatial Workflows..."

];

const typingElement = document.getElementById("typing-text");

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;

function typePhrase(){

    const currentPhrase = phrases[phraseIndex];

    if(!deleting){

        typingElement.textContent =
            currentPhrase.substring(0, characterIndex++);

        if(characterIndex > currentPhrase.length){

            deleting = true;

            setTimeout(typePhrase, 1800);

            return;

        }

    }

    else{

        typingElement.textContent =
            currentPhrase.substring(0, --characterIndex);

        if(characterIndex === 0){

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) % phrases.length;

        }

    }

    setTimeout(typePhrase, deleting ? 35 : 60);

}

typePhrase();