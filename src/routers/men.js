const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
router.use(express.json());

router.post("/MensRanking", async (req, res) => {
    const { ranking, name, dob, country, score } = req.body
  try {
    console.log(req.body);
    const addingMensRecords = await MensRanking({
        ranking,
        name,
        dob,
        country,
        score
    });
    console.log("adding", addingMensRecords)
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/MensRankings", async (req, res) => {
  try {
    const getAllMensRanking = await MensRanking.find();
    res.send(getAllMensRanking);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/MensRanking/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMensRanking = await MensRanking.findById(_id);
    res.send(getMensRanking);
  } catch (e) {
    res.status(400).send(e);
  }
});



router.patch("/MensRanking/:id", async (req, res) => {
  const { ranking, name, dob, country, score  } = req.body
try {
  console.log(name);
  const id = req.params.id;
  
  const updateMensRecords = await MensRanking.findByIdAndUpdate(
    {
      _id:id
    },
    {
      $set:{
        ranking,
        name,
        dob,
        country,
        score
      }
      
  });
 
  console.log("Update", updateMensRecords)
  res.status(201).send(updateMensRecords);
} catch (e) {
  console.log(e);
  res.status(400).send(e);
}
});
router.delete("/MensRanking/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(id);
    console.log("Delete",DeleteProduct)
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
