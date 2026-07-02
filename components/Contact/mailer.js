const mail = async ({ name, email, message }) => {
  const response = await fetch("https://formsubmit.co/ajax/magaraditya2911@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `New Portfolio Message from ${name}`,
      _captcha: "false",
    }),
  });

  if (response.ok) {
    return { status: 200 };
  } else {
    throw new Error("Failed to send message");
  }
};

export default mail;
