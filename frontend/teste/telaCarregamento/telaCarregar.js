window.addEventListener('load', function() {
    var loader = document.getElementById("loader");
    var content = document.getElementById("content");
    
    setTimeout(function(){
      loader.style.display = "none";
      content.style.display = "block";
    }, 3000); 
  });