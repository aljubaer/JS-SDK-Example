


function dropinLoader () {



    var dropin =
    `
    <div id="popupBoxOnePosition" style="top: 0; left: 0; position: fixed; width: 100%; height: 120%;
    background-color: rgba(0,0,0,0.7); display: none;">
<div class="popupBoxWrapper" style="width: 550px; margin: 50px auto; text-align: left;">
    <div class="popupBoxContent" style="background-color: #FFF; padding: 15px;">
        <h3>Popup Box 1</h3>
        <p>You are currently viewing popup box 1.</p>
        <button onclick="window.location.href = 'https://www.facebook.com';">Bkash</button>
        <button onclick="window.location.href = 'https://www.google.com';">Sure Cash</button>
        <p>Click <a href="javascript:void(0)" onclick="toggle_visibility('popupBoxOnePosition');">here</a> to close popup box one.</p>
    </div>
</div>
</div>



<div id="wrapper">

<p>Click <a href="javascript:void(0)" onclick="toggle_visibility('popupBoxOnePosition');">here</a> to see popup box one.</p>


</div>
    
    `

    


    return dropin;
}

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}

