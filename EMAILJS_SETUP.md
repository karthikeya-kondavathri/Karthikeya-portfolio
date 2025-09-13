# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with letters/numbers)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs and keys.

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Used

The contact form sends these variables to your EmailJS template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (karthikkondavatri@gmail.com)

## Troubleshooting

- Make sure all environment variables are prefixed with `NEXT_PUBLIC_`
- Verify your EmailJS service is active
- Check the browser console for any error messages
- Ensure your email template uses the correct variable names

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the actual email sending securely
- No sensitive data is stored in the frontend code
