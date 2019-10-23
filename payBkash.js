//function paymentWithBkash() {
    let paymentID;
    let username = "";
    let password = "";
    let app_key = "";
    let app_secret = "";
    let grantTokenUrl = 'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/token/grant';
    let createCheckoutUrl = 'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create';
    let executeCheckoutUrl = 'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/execute';

    $(document).ready(function () {
        dynamicallyLoadScript();
        getAuthToken();
    });

    // dynamicallyLoadScript();
    // getAuthToken();

    function dynamicallyLoadScript() {
        var script = document.createElement("script");  // create a script DOM node
        script.src = "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js";  // set its src to the provided URL

        document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
    function getAuthToken() {
        let body = {
            "app_key": app_key,
            "app_secret": app_secret
        };
        $.ajax({
            url: grantTokenUrl,
            headers: {
                "username": username,
                "password": password,
                "Content-Type": "application/json"
            },
            type: 'POST',
            data: JSON.stringify(body),
            success: function (result) {
                let headers = {
                    "Content-Type": "application/json",
                    "Authorization": result.id_token, // Contains access token
                    "X-APP-Key": app_key
                };
                let request = {
                    "amount": "85.50",
                    "intent": "sale",
                    "currency": "BDT",
                    "merchantInvoiceNumber": "123456"
                };
                initBkash(headers, request);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    function initBkash(headers, request) {
        bKash.init({
            paymentMode: 'checkout',
            paymentRequest: request,
            createRequest: function (request) {
                $.ajax({
                    url: createCheckoutUrl,
                    headers: headers,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(request),
                    success: function (data) {
                        if (data && data.paymentID != null) {
                            paymentID = data.paymentID;
                            bKash.create().onSuccess(data);
                        }
                        else {
                            bKash.create().onError(); // Run clean up code
                            alert(data.errorMessage + " Tag should be 2 digit, Length should be 2 digit, Value should be number of character mention in Length, ex. MI041234 , supported tags are MI, MW, RF");
                        }
                    },
                    error: function () {
                        bKash.create().onError(); // Run clean up code
                        alert(data.errorMessage);
                    }
                });
            },
            executeRequestOnAuthorization: function () {
                $.ajax({
                    url: executeCheckoutUrl + '/' + paymentID,
                    headers: headers,
                    type: 'POST',
                    contentType: 'application/json',
                    success: function (data) {
                        if (data && data.paymentID != null) {
                            // On success, perform your desired action
                            alert('[SUCCESS] data : ' + JSON.stringify(data));
                            window.location.href = "./success_page.html";
                        } else {
                            alert('[ERROR] data : ' + JSON.stringify(data));
                            bKash.execute().onError();//run clean up code
                        }
                    },
                    error: function () {
                        alert('An alert has occurred during execute');
                        bKash.execute().onError(); // Run clean up code
                    }
                });
            },
            onClose: function () {
                alert('User has clicked the close button');
            }
        });
    }
    $('#bKash_button').removeAttr('disabled');


//}

