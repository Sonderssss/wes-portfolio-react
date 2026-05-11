const emailTemplate = (name, email, phone, message) => {
  return `
    <div
      style="
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: auto;
        padding: 20px;
      "
    >

      <h2>New Message</h2>

      <p>
        <strong>Name:</strong> ${name}
      </p>

      <p>
        <strong>Email:</strong> ${email}
      </p>

      <p>
        <strong>Phone:</strong> ${phone || "Not provided"}
      </p>

      <hr />

      <h3>Message</h3>

      <p>
        ${message}
      </p>

    </div>
  `;
};

export default emailTemplate;
