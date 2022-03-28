const Comment1 = require("../models/comment1");
const resp = require("../helpers/apiResponse");

exports.addcomm = async (req, res) => {
  const { user_id, comment, staff_id } = req.body;

  const newComment1 = new Comment1({
    user_id: user_id,
    staff_id: staff_id,
    comment: comment,
  });
  //const findexist = await Comment1.findOne({ comment: comment });
  // if (findexist) {
  //  resp.alreadyr(res);
  // } else {
  newComment1
    .save()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
  // }
};
exports.allComment = async (req, res) => {
  await Comment1.find()
    .sort({ sortorder: 1 })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.viewoneComment = async (req, res) => {
  await Comment1.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.deleteComment = async (req, res) => {
  await Comment1.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.editComment = async (req, res) => {
  await Comment1.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: req.body },
    { new: true }
  )
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
exports.countComment = async (req, res) => {
  await Comment1.countDocuments()
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};
