const sdk = new window.Appwrite();
sdk.setEndpoint("https://cloud.appwrite.io/v1").setProject("653c7e3f9d64ecd21392");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");
const secret = urlParams.get("secret");

const promise_forgotpassword = account.createRecovery('email@example.com', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

let promise = sdk.account.updateVerification(userId, secret);
promise.then(function (res){
    console.log(res);
    document.getElementById("message").innerText = JSON.stringify(res);
    window.location.replace('appwrite-callback-653c7e3f9d64ecd21392://verified');
}, function(error) {
    window.location.replace('appwrite-callback-653c7e3f9d64ecd21392://verified');
    console.log(res);
    document.getElementById("message").innerText = JSON.stringify(error);
}) 
// let promise = sdk.account.updateVerification(userId, secret);

