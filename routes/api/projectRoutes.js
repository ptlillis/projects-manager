const router = require("express").Router();
const developerModel = require("../../models/Developer");


router.get("/api/developers", async (request, response) => {
  const developer = await developerModel.find({});

  try {
    response.send(developer);
  } catch (error) {
    response.status(500).send(error);
  }
});





router.post("/api/developers", async (request, response) => {
  const developer = new developerModel(request.body);

  try {
    await developer.save();
    response.send(developer);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/api/developers/:id", async (request, response) => {
  try {
    await developerModel.findByIdAndUpdate(request.params.id, request.body);
    await developerModel.save();
    response.send(developer);
  } catch (error) {
    response.status(500).send(error);
  }
});




router.delete("/api/developers/:id", async (request, response) => {
  try {
    const developer = await developerModel.findByIdAndDelete(request.params.id);

    if (!developer) response.status(404).send("No item found");
    response.status(200).send("deleted");
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;