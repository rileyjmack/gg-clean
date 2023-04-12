const router = require("express").Router();
const {
  models: { Client },
} = require("../db");
module.exports = router;

// GET /api/clients (Get All Clients)
router.get("/", async (req, res, next) => {
  try {
    const clients = await Client.findAll({});
    res.send(clients);
  } catch (err) {
    next(err);
  }
});

// POST /api/clients (Create Client)
router.post("/", async (req, res, next) => {
  try {
    const client = req.body;
    const newClient = await Client.create(client.formData);
    res.json(newClient);
  } catch (err) {
    next(err);
  }
});
