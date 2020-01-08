const router = require("express").Router();
const profileController = require("../../controllers/profileController");



router.route("/saved")
  .get(profileController.findUserSearch)
  .update(profileController.updateSaved);

module.exports = router;
