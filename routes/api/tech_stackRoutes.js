const router = require("express").Router();
const tech_stackModel = require("../../models/Tech_stack");


router.get("/api/tech_stacks", async (request, response) => {
  const tech_stack = await tech_stackModel.find({});

  try {
    response.send(tech_stack);
  } catch (error) {
    response.status(500).send(error);
  }
});





router.post("/api/tech_stacks", async (request, response) => {
  const tech_stack = new tech_stackModel(request.body);

  try {
    await tech_stack.save();
    response.send(tech_stack);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/api/tech_stacks/:id", async (request, response) => {
  try {
    await tech_stackModel.findByIdAndUpdate(request.params.id, request.body);
    await tech_stackModel.save();
    response.send(tech_stack);
  } catch (error) {
    response.status(500).send(error);
  }
});




router.delete("/api/tech_stacks/:id", async (request, response) => {
  try {
    const tech_stack = await tech_stackModel.findByIdAndDelete(request.params.id);

    if (!tech_stack) response.status(404).send("No item found");
    response.status(200).send("deleted");
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;