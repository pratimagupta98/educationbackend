const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");

if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const {
  addvideo,
  getvideo,
  editVideo,
  viewonevideo,
  deletevideo,
} = require("../controller/video");

//PATHS

router.post(
  "/admin/addvideo",
  upload.fields([
    {
      name: "video_file",
    },
    {
      name: "video_image",
    },
  ]),
  addvideo
);
router.post("/admin/editVideo/:id", editVideo);
router.get("/admin/getvideo", getvideo);
router.get("/admin/viewonevideo/:id", viewonevideo);
router.get("/admin/deletevideo/:id", deletevideo);
// router.get("/admin/countReply", countvideo);
module.exports = router;
