const db = require("_helpers/db");
//const Role = require('_helpers/role');
const Lead = db.Lead;

module.exports = {
  create,
  getAll,
  getById,
  update,
};

function basicDetails(lead) {
  const {
    id,
    source,
    company,
    contact,
    cust_email,
    status,
    caller,
    priority,
    manager,
  } = lead;
  return {
    id,
    source,
    company,
    contact,
    cust_email,
    status,
    caller,
    priority,
    manager,
  };
}

async function getAll() {
  const leads = await Lead.find();
  return leads.map((x) => basicDetails(x));
}

async function getById(id) {
  const lead = await getLead(id);
  return lead;
}

async function getLead(id) {
  if (!db.isValidId(id)) throw "Lead not found";
  const lead = await Lead.findById(id);
  if (!lead) throw "Lead not found";
  return lead;
}

async function create(params) {
  // validate
  // if (await Account.findOne({ email: params.email })) {
  //     throw 'Email "' + params.email + '" is already registered';
  // }

  const lead = new Lead(params);
  //account.isVerified = true;

  // hash password
  // if (params.password) {
  //     account.passwordHash = hash(params.password);
  // }

  // save account
  await lead.save(function (err) {
    if (err) console.log(err);
  });

  return basicDetails(lead);
}

async function update(id, params) {
  const lead = await getLead(id);

  // copy params to account and save
  Object.assign(lead, params);
  await lead.save();

  return basicDetails(lead);
}
