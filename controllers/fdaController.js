const { getDevicesFromFDA } = require("../utils/api");

const getDevices = async (req, res, next) => {
  try {
    const search = req.query.search || "radiology";

    const data = await getDevicesFromFDA(search);

    return res.status(200).send(data);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getDevices,
};
