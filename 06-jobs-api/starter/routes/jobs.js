const express = require("express");
const {
  getAllJobs,
  CreateJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");
const router = express.Router();

router.route("/").get(getAllJobs).post(CreateJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
