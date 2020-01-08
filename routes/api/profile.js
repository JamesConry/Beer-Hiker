const router = require("express").Router();
const profileController = require("../../controllers/profileController");



router.route("/searches")
  .get(profileController.findUserSearch)
  .update(profileController.updateSearches);

module.exports = router;
