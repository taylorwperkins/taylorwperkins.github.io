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

if (typingElement) {

    typePhrase();

}

/* ===========================================
   IMAGE LIGHTBOX
=========================================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

if (galleryImages.length > 0) {

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightbox-image");

    const lightboxCaption = document.getElementById("lightbox-caption");

    const closeLightbox = document.querySelector(".lightbox-close");

    let currentImageIndex = 0;

    const previousButton =
    document.querySelector(".lightbox-prev");

    const nextButton =
    document.querySelector(".lightbox-next");

    function showImage(index){

        lightboxImage.classList.add("fade");

        setTimeout(()=>{

            lightboxImage.src =
                galleryImages[index].src;

            lightboxCaption.textContent =
                galleryImages[index]
                    .parentElement
                    .querySelector("figcaption")
                    .textContent;

            lightboxImage.classList.remove("fade");

        },170);

    }

    galleryImages.forEach((image,index)=>{

        image.addEventListener("click",()=>{

            currentImageIndex=index;

            showImage(currentImageIndex);

            lightbox.style.display="flex";

        });

    });

    previousButton.addEventListener("click", () => {

        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

        showImage(currentImageIndex);

    });

    nextButton.addEventListener("click", () => {

        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

        showImage(currentImageIndex);

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(lightbox.style.display!=="flex") return;

        if(e.key==="Escape"){

            lightbox.style.display="none";

        }

        if(e.key==="ArrowLeft"){

            previousButton.click();

        }

        if(e.key==="ArrowRight"){

            nextButton.click();

        }

    });

}

/* =========================================== 
    AWARDS IMAGE LIGHTBOX 
=========================================== */ 

const awardImages = 
document.querySelectorAll(".award-image img"); 

if (awardImages.length > 0) { 
    
    const awardLightbox = 
    document.getElementById("award-lightbox"); 
    
    const awardLightboxImage = 
    document.getElementById("award-lightbox-image"); 
    
    const awardLightboxClose = 
    document.querySelector(".award-lightbox-close"); 
    
    const awardLightboxLink = 
    document.getElementById("award-lightbox-link"); 
    
    
    awardImages.forEach(image => { 

        if (image.classList.contains("article-award-image")) return;

        image.addEventListener("click", () => { 
            
            awardLightboxImage.src = image.src; 
            
            awardLightboxImage.alt = image.alt; 
            
            
            /* 
             * Check whether this is the newspaper 
             * article image. 
             */ 
            
            if (image.classList.contains("article-award-image")) { 
                
                awardLightboxLink.href = 
                "https://www.lowellsun.com/2022/07/08/sturgeon-perkins-lead-chelmsford-high-team-at-umass-lowell-united-nations-conference/"; 
                
                awardLightboxLink.style.display = "inline-block"; 
            
            } 
                
            else { 
                
                awardLightboxLink.style.display = "none"; 
            
            } 
            
            
            awardLightbox.style.display = "flex"; 
        
        }); 
    
    }); 
    
    
    awardLightboxClose.addEventListener("click", () => { 
        
        awardLightbox.style.display = "none"; 
    
    }); 
    
    
    awardLightbox.addEventListener("click", (e) => { 
        
        if (e.target === awardLightbox) { 
            
            awardLightbox.style.display = "none"; 
        
        } 
    
    }); 
    
    
    document.addEventListener("keydown", (e) => { 
        
        if (awardLightbox.style.display !== "flex") return; 
        
        if (e.key === "Escape") { 
            
            awardLightbox.style.display = "none"; 
        
        } 
    
    }); 

}

/* ===========================================
   WORKFLOW TIMELINE ANIMATION
=========================================== */

const workflowSection =
document.querySelector(".workflow-timeline");

if(workflowSection){

    const observer =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const steps =
                document.querySelectorAll(".workflow-step");

                const connectors =
                document.querySelectorAll(".timeline-connector");

                steps.forEach((step,index)=>{

                    setTimeout(()=>{

                        step.classList.add("show");

                        step.querySelector(".workflow-icon")
                            .classList.add("active");

                    },index*350);

                });

                connectors.forEach((connector,index)=>{

                    setTimeout(()=>{

                        connector.querySelector(".timeline-fill")
                                 .style.width = "100%";

                    },(index * 350) + 175);

                });

            }

        });

    },{

        threshold:.35

    });

    observer.observe(workflowSection);

}

/* ===========================================
   GENERAL SCROLL REVEAL ANIMATION
=========================================== */

const revealElements = document.querySelectorAll(".reveal");


if(revealElements.length > 0){

    const revealObserver = new IntersectionObserver(
        
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.15

        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}