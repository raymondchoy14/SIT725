const phishingService = require('../services/phishingService');

exports.checkPhishing = (req, res) => {
  const { emailText } = req.body;

  if (!emailText) {
    return res.status(400).json({ error: "Email text is required." });
  }

  const result = phishingService.analyzeText(emailText);
  res.json({ result });
};
