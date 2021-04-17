const router = require("express").Router();
const projectModel = require("../../models/Project");


router.get("/api/projects", async (request, response) => {
  const project = await projectModel.find({});

  try {
    response.send(project);
  } catch (error) {
    response.status(500).send(error);
  }
});





router.post("/api/projects", async (request, response) => {
  const project = new projectModel(request.body);

  try {
    await project.save();
    response.send(project);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/api/projects/:id", async (request, response) => {
  try {
    await projectModel.findByIdAndUpdate(request.params.id, request.body);
    await projectModel.save();
    response.send(project);
  } catch (error) {
    response.status(500).send(error);
  }
});




router.delete("/api/projects/:id", async (request, response) => {
  try {
    const project = await projectModel.findByIdAndDelete(request.params.id);

    if (!project) response.status(404).send("No item found");
    response.status(200).send("deleted");
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;






// const router = require("express").Router();
// const projectModel = require("../../models/Project");


// router.get("/api/projects", async (request, response) => {
//   const project = await projectModel.find({});

//   try {
//     response.send(project);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });





// router.post("/api/projects", async (request, response) => {
//   const project = new projectModel(request.body);

//   try {
//     await project.save();
//     response.send(project);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// router.patch("/api/projects/:id", async (request, response) => {
//   try {
//     await projectModel.findByIdAndUpdate(request.params.id, request.body);
//     await projectModel.save();
//     response.send(project);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });




// router.delete("/api/projects/:id", async (request, response) => {
//   try {
//     const project = await projectModel.findByIdAndDelete(request.params.id);

//     if (!project) response.status(404).send("No item found");
//     response.status(200).send("deleted");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


// module.exports = router;