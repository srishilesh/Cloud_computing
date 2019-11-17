const admin = require('firebase-admin');
//var serviceAccount = require('E:/Amrita University/Academics/3rd year 2019-20/Cloud Computing/GCP/Lab Eval/hello-f021c-firebase-adminsdk-wqgj7-05b28cb647.json')
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "hello-f021c",
        "private_key_id": "",
        "private_key": "",
        "client_email": "",
        "client_id": "106719172462785661518",
        "auth_uri": "",
        "token_uri": "",
        "auth_provider_x509_cert_url": "",
        "client_x509_cert_url": ""
      
      }),
    databaseURL: "https://hello-f021c.firebaseio.com"
});
const db = admin.firestore();

exports.storeFormDetails = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    db.collection("formDetails").add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding doc: ", error);
        });
}
