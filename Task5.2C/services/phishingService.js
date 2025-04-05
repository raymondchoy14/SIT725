const phishingKeywords = [
    'login now',
    'verify account',
    'click here',
    'update payment',
    'bank',
    'password reset'
  ];
  
  const analyzeText = (text) => {
    const lowerText = text.toLowerCase();
  
    const foundKeywords = phishingKeywords.filter(keyword =>
      lowerText.includes(keyword)
    );
  
    if (foundKeywords.length > 0) {
      return {
        status: 'Phishing',
        keywords: foundKeywords
      };
    }
  
    return {
      status: 'Safe',
      keywords: []
    };
  };
  
  module.exports = { analyzeText };
  