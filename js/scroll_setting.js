let episodeBtn = document.getElementById("navEp");

episodeBtn.addEventListener("click", function(event){
      event.preventDefault();
      document.getElementById("Episodes").scrollIntoView({ behavior: 'smooth', block: 'center' });
});

