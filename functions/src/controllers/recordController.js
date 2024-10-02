const {addRecord} = require("../services/firestoreService");

exports.createRecord = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send({error: "Método não permitido"});
  }

  const {name} = req.body;

  if (!name) {
    return res.status(400).send({error: "Nome é obrigatório"});
  }

  try {
    const record = await addRecord(name);
    return res.status(201).send(record);
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
};
