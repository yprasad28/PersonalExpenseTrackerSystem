const express = require("express");
const {
  addTransection,
  getAllTransection,
  getTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl.js");

//router object
const router = express.Router();



router.route("/").get(getAllTransection).post(addTransection);

router.route("/:id").get(getTransection).put(editTransection).delete(deleteTransection);




module.exports = router;

