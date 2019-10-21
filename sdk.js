function cssLoader() {
    var style = document.createElement('style');
    style.innerHTML =
    `
      button {
          background-color : red
      }  

      .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        visibility: hidden;
        opacity: 0;
      }
      .overlay:target {
        visibility: visible;
        opacity: 1;
      }
      
      .popup {
        margin: 70px auto;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        width: 30%;
        position: relative;
        transition: all 5s ease-in-out;
      }
      
      .popup h2 {
        margin-top: 0;
        color: #333;
        font-family: Tahoma, Arial, sans-serif;
      }
      .popup .close {
        position: absolute;
        top: 20px;
        right: 30px;
        transition: all 200ms;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #333;
      }
      .popup .close:hover {
        color: #06D85F;
      }
      .popup .content {
        max-height: 30%;
        overflow: auto;
      }
      
      
    `
    document.head.appendChild(style);


}


function dropinLoader () {



    var dropin =
    `
        <div style=""> 
            <button href="#popup1"> Payment with DUPAY </button>
            <br>
        </div>

        <div id="popup1" class="overlay">
	<div class="popup">
		<h2>Here i am</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
    </div> 
    
    `

    


    return dropin;
}

function onDupayListener() {
    var dupayPopUpHtml = 
    `
    <div id="popup1" class="overlay">
	<div class="popup">
		<h2>Here i am</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
			Thank to pop me out of that button, but now i'm done so you can close this window.
		</div>
	</div>
    </div>     
    `

    
     

    document.getElementById("testpopup").innerHTML = dupayPopUpHtml;

    
    // var elementWithClassNamePopup = document.getElementsByClassName('popup')[0];
    // var elementWithClassNameOverlay = document.getElementsByClassName('overlay')[0];
    // var elementWithClassNameClose = document.getElementsByClassName('close')[0];
    // var elementWithClassNameContent = document.getElementsByClassName('content')[0];

    // elementWithClassNameOverlay.
    




    // elementWithClassNameOverlay.setAttribute("position", "fixed");
    // elementWithClassNameOverlay.setAttribute("visibility", "hidden");
    // elementWithClassNameOverlay.setAttribute("opacity", "0");
    // elementWithClassNameOverlay.setAttribute("transition", "opacity 500ms");
    // elementWithClassNameOverlay.setAttribute("background", "rgba(0, 0, 0, 0.7)");

}
