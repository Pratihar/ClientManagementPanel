const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  source: { type: String, required: true },
  type: { type: String, required: true },
  agent: { type: String, required: true },
  date: { type: Date, default: Date.now },
  first_name: { type: String },
  last_name: { type: String },
  company: { type: String, required: true },
  industry: { type: String, required: true },
  link: { type: String },
  cust_email: { type: String, required: true },
  skype: { type: String },
  code: { type: String },
  contact: { type: Number, required: true },
  whatsapp: { type: Number },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  linkedin: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  requirements: { type: String, required: true },
  action: { type: String, required: true },
  remarks: { type: String },
  status: { type: String, required: true },
  author: { type: String },
  caller: { type: String },
  priority: { type: String },
  outreachremark: { type: String },
  deadline: { type: Date },
  voicecall: { type: String },
  report: { type: Boolean },
  manager: { type: String },
  job_requirements: { type: String },
  final_status: { type: String },
  service_category: { type: String },
  service_head: { type: String },
  sub_service: { type: String },
  // email: { type: String, unique: true, required: true },
  // passwordHash: { type: String, required: true },
  // title: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // acceptTerms: { type: Boolean },
  // role: { type: String, required: true },
  // verificationToken: { type: String },
  // isVerified: { type: Boolean, default: false },
  // resetToken: { type: String },
  // resetTokenExpiry: { type: Date },
  // dateCreated: { type: Date, default: Date.now },
  // dateUpdated: { type: Date }
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
  },
});

module.exports = mongoose.model("Lead", schema);
