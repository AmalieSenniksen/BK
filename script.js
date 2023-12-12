//scroll effekt der gør at man kan swipe menuen frem for hver pølsevogn

const scrollContainer = document.querySelector('main');

scrollContainer.addEventListener('wheel', (evt)=>{ //Wheel er scroll på touchpad når der sker et event
    evt.preventDefault(); // Forhindrer standard adfærden for eventet (giver os mulighed for at lave brugerdefineret adfærd)
    scrollContainer.scrollLeft += evt.deltaX; //ScrollLeft gør den scroller horisontalt. DeltaX = swipe på x-aksen på touchpad
});

//TIMER som gør at pølsevognen først skal komme frem efter 4 sekunder 

const pladsen = document.getElementById("hus");

setTimeout(function() {
  pladsen.style.display = "block";
}, 4500); 

