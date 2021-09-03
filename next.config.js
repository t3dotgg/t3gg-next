const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  target: "serverless",
});
