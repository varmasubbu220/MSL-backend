const Mailer = require('../helpers/mail');

const UseMail = async (req, res) => {
  try {
    const { name, email, message } = req.body.document;

    // Check if required fields are present
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Incomplete user details' });
    }

    let from = name;
    let subject = 'Client Request';
    let text = `
        Hello,

        You have received a new inquiry from a user. Here are the details:

        Name: ${name}
        Email: ${email}
        Message: ${message}

        Please respond to the user at their provided email address.

        Best regards,
        mark soft line`;

    Mailer({ text, from, subject })
      .then((emailSent) => {
        if (emailSent) {
          return res.status(200).json({ success: 'Email sent successfully' });
        } else {
          return res.status(500).json({ error: 'Failed to send email' });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
      });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = UseMail;
