const admin = require("firebase-admin");
const db = admin.firestore();

exports.handleNewRecord = async (snap, context) => {
  const docRef = snap.ref; // Referência ao documento recém-criado
  const records = db.collection("records"); // Coleção 'records'

  // Buscar o último documento ordenado pelo campo 'increment_id'
  const lastRecordSnapshot = await records
      .orderBy("increment_id", "desc")
      .limit(1)
      .get();

  // Definir o próximo 'increment_id'
  let nextIncrementId = 1; // Padrão: 1 para o primeiro documento

  // Se houver registros anteriores, incrementar o último 'increment_id'
  if (!lastRecordSnapshot.empty) {
    const lastRecord = lastRecordSnapshot.docs[0].data();
    nextIncrementId = lastRecord.increment_id + 1;
  }

  // Atualizar o documento recém-criado com o próximo 'increment_id'
  await docRef.update({increment_id: nextIncrementId});
};
