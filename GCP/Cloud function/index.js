const admin = require('firebase-admin');
//var serviceAccount = require('E:/Amrita University/Academics/3rd year 2019-20/Cloud Computing/GCP/Lab Eval/hello-f021c-firebase-adminsdk-wqgj7-05b28cb647.json')
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "hello-f021c",
        "private_key_id": "05b28cb6479178e5e11d491a9695c3fa04c4c655",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCT0+gQ6x67ffrA\nHL1PrK9rUk8ppIk3L/IEFhAEIMkFVflhbGZsplNTKt0qGUNb1afC+sic6xEsObYI\nHrIr2Gm7tlm2eO4pWX1z8W562AjGfAquvZzBiszhci2gKUDB7FVbILlsUip8gv3m\niepXiY0G1mAY9s7prCMfwAKG+WurNpGu9qeO0+5xgG8cFxs85e401PFvI2F//yLI\n9Z3I+b9m2Gm+wuC5sBUvuXr3mQPyRxhw9JCNSnoQK6H/ouXCIXTEI4Ux4vsva03u\ncXsGVQ6OUVeRX5cSdVwuEXKiwuMWwY543eEMhSJkKfj16hkYZDj6WtVLWI88qZwy\nE1PH4LoHAgMBAAECggEABJttl51kS06dUoByy/ljTDJ4AiG9Hwmw/rybSi2lZjOs\nPoOM26UBYs2qr+WyqjmJ7XM4bl+LHPg9eppOTjyD6xQ/TocNUR+XX9Yt7cku2NTD\n1ndVW9jSEtKmpl+yw3h0no7yCHS1G0VP2XAB7DF+wjBLNWv3veOeAp7O1VsPpnnU\nR0iJehuFdGeXOQmnsASpLbmCXzEfMkWaVTaXqRvSoqFTkrkuUbyfZv0/9gXtLlRU\nKcTPFzTUc4MdAU4JsLsx+vdUNQK3S5m0ax9TBUc/gN7/C5JgOUKIAJJ2XdoYtCId\nV4RMVPdCk6r9IhLCE6yTR0/jGMGQTgORcUVv4GV/NQKBgQDDRo6T8L91koGJ4+9A\nRfWfgrWcG4VEZ121roITbhHNX2KH0Ts2RMWbyE9qQkBY/1Q0Q3DWtlKsIc/lQsei\n6vuaeke0+QogIcS8qcOQflEFqnoFhPlfaqAAOfKjL9IyZJfta1q46E5lx8Lgx/p1\nMrRNfAOmlxMSxnvykXtE4Xso1QKBgQDBzCKLe90AvsdK6fYBe+CNkQKOdHTkVQFb\ntF/AyeTIDBpMdSzKnahXfIOz7NJoHM9b/MMZ6IZq71pbPHGaWrP1NzUYD17NWhsg\nzOPK/w1GOjKzjUFU144Cg1Jk35yVF9VX5wQ1tRdlsvR/wym3BQCUdhw5FtQckcSy\n3BTP8HCFawKBgHJkB6ukMRP3ocib7JBTKyKo2Cg9euDqSFvggTROm0Eaakazi6Mr\nwDKUsejGLJm14KbJBvXQUjehiv57EyVdz8vba9wYsxTFk1ENhZFEXcQa7GYFUmvR\nsy7Ow1NS9SguA03CQJ/m/d3jmkZA/3feHv7w8daJ01OBUCR1kqd0CsiNAoGBAL7z\n5Enp9x4n3PjsxNA7fkwfSRSSnSbqt1bjyMGObVXLzxHtFwBiDiB9+MuNmtipIoxx\n5s+ddOzjAPYK/ajonI8PIcqeQnw2v6o3GHDJlQvQhmqy0V/GsQ+607G/P2sMu9NM\nNrKwx+gWR6Gn7G+Ah0zBgBekbcXkv5q5DezB7i0XAoGAVm4qOlK/RnEEvUj5bh6s\nGqWkStWqdTWFqRK66PVXfafs0qrPH6ilzBehvY7lKhRFlDWWchxOmkn9fb6YqIqf\nG+iN/dr9BWXeKZY85PjXHiBeLO9GUezHzjeQlort7+Cn5qeezwgYEq6eHf4oII7a\nNskr2agyuACoMGdw3XO4yCk=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-wqgj7@hello-f021c.iam.gserviceaccount.com",
        "client_id": "106719172462785661518",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wqgj7%40hello-f021c.iam.gserviceaccount.com"
      
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
