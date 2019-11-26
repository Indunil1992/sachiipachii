let AWS = require('aws-sdk');
const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();

exports.handler = function (event, context, callback) {
    rekognition.detectText({
        Image: {
            S3Object: {
                Bucket: "indunil.trigger",
                Name: "c5134dae01ad22a5.png"
            }
        }
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    rekognition.detectLabels({
        Image: {
            S3Object: {
                Bucket: "test.indunil1",
                Name: "animal_logo_30.jpg"
            }
        }
    }).promise()
        .then(data => {
            console.log(data);

            // your code goes here
        })
        .catch(err => {
            console.log(err);

            // error handling goes here
        });

    s3.listObjects({
        'Bucket': 'as2-test-lahiru',
        'MaxKeys': 10,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 11,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });




    s3.listObjects({
        'Bucket': 'com.sigma.test.318300609668.hirudineeliyanage.us-west-1',
        'MaxKeys': 10,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 11,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });






    callback(null, { "message": "Successfully executed" });
}

//test.indunil1  animal_logo_30.jpg
// indunil.trigger   animal_logo_30.jpg