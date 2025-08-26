import emailjs from "@emailjs/browser";

// EmailJS configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(emailjsConfig.publicKey);
};

// Send email function
export const sendEmail = async (templateParams: any) => {
  try {
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    return result;
  } catch (error) {
    throw error;
  }
};
