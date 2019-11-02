
// customer did not provide pin response
// {
//     "partnerCode": "tmtm",
//     "customerMobileNumber": "01959118338",
//     "transactionId": "N/A",
//     "description": "Customer did not provide PIN on customer phone.",
//     "statusCode": "9014",
//     "status": "FAILED"
// }
// customer provided invalid pin response
// {
//     "partnerCode": "tmtm",
//     "customerMobileNumber": "01959118338",
//     "transactionId": "N/A",
//     "description": "Error Occured.",
//     "statusCode": "9015",
//     "status": "FAILED"
// }
// success
// {
//     "amount": 5.0,
//     "partnerCode": "tmtm",
//     "customerMobileNumber": "01959118338",
//     "transactionId": "T300000151878",
//     "description": "Payment successful.",
//     "statusCode": "200",
//     "status": "SUCCESS"
// }



function paySureCash() {
    var surecashAccountNo = document.getElementById("sureCashNo").value;
    var baseUrl = "http://103.221.253.163:8080"
    var paymentRequest;
    paymentRequest = JSON.stringify({
        "customerMobileNumber": surecashAccountNo.substring(0, 11),
        "surecashAccountNo": surecashAccountNo,
        "customerId": "",
        "billNo": Math.floor((Math.random() * 1000000) + 1),
        "amount": Math.floor((Math.random() * 10) + 1),
        "note": "Online payment",
        "Description": "purchased 5 books ofBPB Publication",
        "smsTemplate": "SMSText"
    });
    

    $.ajax({
        url: baseUrl + "/api/external/surecash/payment",
        type: 'POST',
        contentType: 'application/json',
        data: paymentRequest,
        success: function (data) {
            console.log('got data from payment  ..');
            console.log('data ::=>');
            console.log(JSON.stringify(data));

            if (data && data.statusCode == "200") {
                console.log('[SUCCESS] data : ' + JSON.stringify(data));
                alert('[SUCCESS] data : ' + JSON.stringify(data));
                window.location.href = "success_page.html";
            }
            else {
                console.error('error');
                console.error('[FAILED] data : ' + JSON.stringify(data));
                alert('[FAILED] data : ' + JSON.stringify(data));
                window.location.href = "error_page.html";
            }
        },
        error: function (error) {
            console.error('error');
            console.error(error);
            alert(error);
            window.location.href = "error_page.html";
            
        }
    });
}

