


function dropinLoader () {

    let merchantName = "Test Merchant";
    let amount = 220;


    var dropin =
    `
    <div id="popupBoxOnePosition" style="top: 0; left: 0; position: fixed; width: 100%; height: 120%; background-color: rgba(0,0,0,0.7); display: none;">
        <div class="popupBoxWrapper" style="width: 400px; margin: 50px auto; text-align: left;">
        
            <div class="popupBoxContent" style="background-color: #FFF; padding: 15px;">
            <button onclick="toggle_visibility('popupBoxOnePosition');" style="position: relative; float: right; background: red; color: white; top: -10px; right: -10px; cursor: pointer;">
            X   
            </button>
                <h3>`+merchantName +`</h3>
                <p>You are currently viewing popup box 1.</p>
                <button id="bKash_button">Bkash</button>
                <button onclick="sureCashPaymentDivController()">Sure Cash</button>
                
                <div id="sure_cash" style="display:none; padding-top: 50px; padding-bottom: 25px; background-color: lightblue;">
                    <div style="text-align: center;">Sure Cash Payment</div>
                    <div style="margin-top: 10px;">
                        <div style="padding: 10px; text-align: center;">
                            <div>
                                <div>Account Number: </div> 
                                <input type="tel" name="fname" style="width:300px; text-align: center;" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                            </div>
                            <br>
                            <div>
                                <button style="width:300px; ">Pay</button>
                            </div>
                        </div>



                    </div>
                </div>
                
                <p>Pay `+amount+` BDT.</p>



            </div>
            


        </div>


        


    </div>



    <div id="wrapper">


        <!-- Button to start to popup -->
        <button>
            <a style="text-decoration:none; color:#000000" href="javascript:void(0)" onclick="toggle_visibility('popupBoxOnePosition');">Pay with Dupay</a>
        </button>



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

function sureCashPaymentDivController() {
    var x = document.getElementById("sure_cash");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

