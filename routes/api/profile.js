const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/:id")
  // .get(profileController.findRandom)
  .put(profileController.updateSearches);

module.exports = router;
