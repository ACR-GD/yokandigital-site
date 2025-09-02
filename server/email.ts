import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  website?: string;
  noWebsite?: boolean;
  service: string;
  projectDetails?: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  try {
    const websiteInfo = params.noWebsite 
      ? "No website yet" 
      : params.website || "Not provided";

    const html = `
      <h2>New Contact Form Submission - Yokan Digital</h2>
      <p><strong>Name:</strong> ${params.firstName} ${params.lastName}</p>
      <p><strong>Email:</strong> ${params.email}</p>
      <p><strong>Website:</strong> ${websiteInfo}</p>
      <p><strong>Service Requested:</strong> ${params.service}</p>
      ${params.projectDetails ? `<p><strong>Project Details:</strong><br>${params.projectDetails}</p>` : ''}
      <hr>
      <p><small>This message was sent from the Yokan Digital contact form.</small></p>
    `;

    const text = `
New Contact Form Submission - Yokan Digital

Name: ${params.firstName} ${params.lastName}
Email: ${params.email}
Website: ${websiteInfo}
Service Requested: ${params.service}
${params.projectDetails ? `Project Details: ${params.projectDetails}` : ''}

This message was sent from the Yokan Digital contact form.
    `;

    await mailService.send({
      to: 'hello@yokandigital.com',
      from: 'hello@yokandigital.com', // Must be verified sender in SendGrid
      subject: `New Contact Form Submission from ${params.firstName} ${params.lastName}`,
      text: text,
      html: html,
      replyTo: params.email
    });

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}