const emailTemplate = (senderEmail, message) => {
  return;
  `
  <div
    style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      background-color: #ffffff;
    "
  >
    <h2 style="color: #333333;">
      New Contact Message
    </h2>

    <div style="margin-bottom: 20px;">
      <p style="margin: 0; color: #555555;">
        <strong>From:</strong>
      </p>

      <p
        style="
          margin-top: 5px;
          padding: 10px;
          background-color: #f5f5f5;
          border-radius: 4px;
          color: #222222;
        "
      >
        ${senderEmail}
      </p>
    </div>

    <div>
      <p style="margin: 0; color: #555555;">
        <strong>Message:</strong>
      </p>

      <div
        style="
          margin-top: 5px;
          padding: 15px;
          background-color: #f9f9f9;
          border-left: 4px solid #333333;
          border-radius: 4px;
          color: #222222;
          line-height: 1.6;
          white-space: pre-wrap;
        "
      >
        ${message}
      </div>
    </div>
  </div>
`;
};

export default emailTemplate;
