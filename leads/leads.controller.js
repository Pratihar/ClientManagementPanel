const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const Role = require("_helpers/role");
const leadService = require("./lead.service");

// routes
router.post("/", authorize(), create);
router.get("/", authorize(), getAll);
router.get("/:id", authorize(), getById);
router.put("/:id", authorize(), update);

module.exports = router;

// function createSchema(req, res, next) {
//   const schema = Joi.object({
//     title: Joi.string().required(),
//     firstName: Joi.string().required(),
//     lastName: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//     confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
//     role: Joi.string().valid(Role.Admin, Role.User).empty("").required(),
//   });
//   validateRequest(req, next, schema);
// }

function create(req, res, next) {
  leadService
    .create(req.body)
    .then((lead) => res.json(lead))
    .catch((err) => next(err));
}

function getAll(req, res, next) {
  leadService
    .getAll()
    .then((leads) => res.json(leads))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  // users can get their own account and admins can get any account
  // if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  leadService
    .getById(req.params.id)
    .then((lead) => (lead ? res.json(lead) : res.sendStatus(404)))
    .catch((err) => next(err));
}

function update(req, res, next) {
  // users can update their own account and admins can update any account
  // if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  leadService
    .update(req.params.id, req.body)
    .then((lead) => res.json(lead))
    .catch((err) => next(err));
}
