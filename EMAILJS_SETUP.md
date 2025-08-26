# EmailJS Setup Guide

To enable email functionality in your contact form, you need to set up EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name
4. Save the template and note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## 5. Configure Environment Variables

Create a `.env` file in your project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs and keys.

## 6. Test the Contact Form

1. Start your development server
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the received message

## Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Security**: Your public key is safe to expose in frontend code
- **Template Variables**: Make sure your template variables match exactly with what's used in the code
- **CORS**: EmailJS handles CORS automatically, so no backend setup is needed

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Emails not received**: Verify your service ID and template ID
- **Validation errors**: Ensure all required fields are filled correctly
- **Rate limiting**: Check if you've exceeded your monthly email limit

## Alternative Solutions

If you prefer not to use EmailJS, you can also:
- Set up a backend API with nodemailer
- Use services like SendGrid, Mailgun, or AWS SES
- Integrate with form services like Formspree or Netlify Forms
