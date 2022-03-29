const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

// const corsDelete = cors({methods: "DELETE"});
// router.use(cors()) //all of router
router
  .route("/:corsId")
  // .all(cors()) //cors for all of the route
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  // .delete(cors(), controller.delete) //cors enabled
//   .delete(corsDelete, controller.delete)
//  .options(corsDelete) //more cors changes made to make necessary preflight delete possible
  .all(methodNotAllowed);

router
  .route("/")
  // .get(controller.list)
  .get(cors(), controller.list)//cors enabled meaning acess from other sites without same origin allowed
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
