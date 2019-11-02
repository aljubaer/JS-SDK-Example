$(document).ready(function () {
    dynamicallyLoadScript();
});

function dynamicallyLoadScript() {
    var script = document.createElement("script");  // create a script DOM node
    script.src = "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js";  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    pay();
}

function pay() {
    var baseUrl = "http://103.221.253.163:8080"
    var paymentRequest;
    paymentRequest = JSON.stringify({
        "amount": Math.floor((Math.random() * 10) + 1),
        "currency": "BDT",
        "intent": "sale",
        "merchantInvoiceNumber": Math.floor((Math.random() * 1000000) + 1)
    });

    bKash.init({
        paymentMode: 'checkout',
        paymentRequest: JSON.parse(paymentRequest),
        createRequest: function (request) {
            console.log('=> createRequest (request) :: ');
            console.log(request);

            $.ajax({
                url: baseUrl + "/api/external/bkash/payment",
                type: 'POST',
                contentType: 'application/json',
                data: paymentRequest,
                success: function (data) {
                    console.log('got data from create  ..');
                    console.log('data ::=>');
                    console.log(JSON.stringify(data));

                    //var obj = JSON.parse(data);
                    var obj = data;

                    if (data && obj.paymentID != null) {
                        paymentID = obj.paymentID;
                        bKash.create().onSuccess(obj);
                    }
                    else {
                        console.log('error');
                        bKash.create().onError();
                    }
                },
                error: function () {
                    console.log('error');
                    bKash.create().onError();
                }
            });
        },

        executeRequestOnAuthorization: function () {
            console.log('=> executeRequestOnAuthorization');
            $.ajax({
                url: baseUrl + "/api/external/bkash/payment/" + paymentID + "/execute",
                type: 'GET',
                contentType: 'application/json',
                success: function (data) {
                    console.log('got data from execute  ..');
                    console.log('data ::=>');
                    console.log(JSON.stringify(data));

                    //data = JSON.parse(data);
                    if (data && data.paymentID != null) {
                        console.log('[SUCCESS] data : ' + JSON.stringify(data));
                        alert('[SUCCESS] data : ' + JSON.stringify(data));
                        window.location.href = "success_page.html";
                    }
                    else {
                        alert('[FAILED] data : ' + JSON.stringify(data));
                        bKash.execute().onError();
                    }
                },
                error: function () {
                    bKash.execute().onError();
                }
            });
        }
    });


    // function callReconfigure(val) {
    //     bKash.reconfigure(val);
    // }

    // function clickPayButton() {
    //     $("#bKash_button").trigger('click');
    // }
}

