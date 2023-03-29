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
    const newClient = await Client.create(client);
    res.json(newClient);
  } catch (err) {
    next(err);
  }
});

// // PUT /api/albums (Update Album)
// router.put("/:id", async (req, res, next) => {
//   try {
//     // requires an id in req.body
//     const updates = req.body;
//     const album = await Album.findByPk(updates.id);
//     console.log("UPDATES", updates);
//     if (album === null) {
//       const err = new Error();
//       err.status = 404;
//       throw err;
//     }

//     Object.entries(updates).forEach(([key, value]) => {
//       album[key] = value;
//     });

//     await album.save();

//     res.json(album);
//   } catch (err) {
//     next(err);
//   }
// });

// // GET /api/albums/:albumId (Get One Album)
// router.get("/:id", async (req, res, next) => {
//   try {
//     const album = await Album.findByPk(req.params.id);
//     res.send(album);
//   } catch (err) {
//     next(err);
//   }
// });

// // DELETE /api/:albumId
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const album = await Album.findOne({ where: { id: req.params.id } });
//     await album.destroy();
//     res.json(album);
//   } catch (error) {
//     next(error);
//   }
// });
