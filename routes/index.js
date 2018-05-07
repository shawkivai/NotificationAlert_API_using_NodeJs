var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
// var registrationToken ='dvryfDlsWbc:APA91bGLWwTeWnBzsAZCv-LsjTyt_AwJokdcX3ASY4cv9yGb5DUAVKkMHPSQfJTELsL3IHUNCVjxAey8-HDV-axb9TzVQjZPM1AHQ7-kYdvXQFf4uIdbLm5W6wLJer_FjAQ0oqJFllH_';
var registrationToken ='f_hrWen5cW8:APA91bEuaBqxnbYcApOyfSg5UVRAj8olLGeABbyI2Rg1t_yY-pj28pIWgMwUFYDhDAyeqLcbIar7xBe9VdG-HR1BLILTJFk7YfHEtxBC9lvi0I3Ju3Ga3wZME4gfSHscm-8G3G-DuQoU';
var reg2='f_hrWen5cW8:APA91bEuaBqxnbYcApOyfSg5UVRAj8olLGeABbyI2Rg1t_yY-pj28pIWgMwUFYDhDAyeqLcbIar7xBe9VdG-HR1BLILTJFk7YfHEtxBC9lvi0I3Ju3Ga3wZME4gfSHscm-8G3G-DuQoU';
 var serviceAccount = require("../message-test-df984-firebase-adminsdk-gxk8d-53c8bef86f.json");
  // var service2 =require("../test-project-d6ca8-firebase-adminsdk-tbtqg-565fbda6f8.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://message-test-df984.firebaseio.com"
});

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://message-test-d6ca8.firebaseio.com"
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/msg', function(req, res, next) {

// See documentation on defining a message payload.
    var message = {
            notification: {
                title: 'from shawki',
                body: 'have a good day'
            },
        token: registrationToken,
        // token: reg2
    };

// Send a message to the device corresponding to the provided
// registration token.
    admin.messaging().send(message)
        .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
})
.catch((error) => {
        console.log('Error sending message:', error);
});

    res.render('message', { title: 'send notification ' });
});

module.exports = router;
