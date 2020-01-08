const router = require("express").Router();
const profileController = require("../../controllers/profileController");



router.route("/maps")
  .get(profileController.findUserSearch)
  .update(profileController.updateMaps);

module.exports = router;
