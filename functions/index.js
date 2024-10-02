const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Inicialize o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const {createRecord} = require("./src/controllers/recordController");
const {handleNewRecord} = require("./src/services/incrementService");

// Função para criar um novo registro
exports.addRecord = functions.https.onRequest(createRecord);

// Trigger que ocorre quando um novo documento é criado
exports.onRecordCreate = functions.firestore
    .document("records/{docId}")
    .onCreate(handleNewRecord);
