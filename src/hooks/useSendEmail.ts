import { useState } from "react";

interface EmailParams {
  to: string;
  subject: string;
  text: string;
}

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = async (emailData: EmailParams) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:4000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      setSuccess(true);
      return data;
    } catch (err) {
      console.error("Error sending email:", err);
      setError(err instanceof Error ? err.message : "Failed to send email");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
};