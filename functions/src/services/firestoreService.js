const admin = require("firebase-admin");
const {Firestore} = require("firebase-admin/firestore");
const db = admin.firestore();

exports.addRecord = async (name) => {
  const docRef = db.collection("records").doc();
  const newRecord = {
    name: name,
    createdAt: Firestore.FieldValue.serverTimestamp(),
    increment_id: null, // Será definido posteriormente no trigger
  };

  await docRef.set(newRecord);
  return {id: docRef.id, name};
};
