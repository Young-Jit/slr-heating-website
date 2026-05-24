import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required.' },
        { status: 400 }
      );
    }

    const serviceLabels: Record<string, string> = {
      'ac-repair': 'AC Repair',
      'furnace-repair': 'Furnace / Heater Repair',
      'installation': 'New HVAC Installation',
      'maintenance': 'AC Maintenance / Tune-Up',
      'duct-cleaning': 'Duct Cleaning',
      'fireplace': 'Fireplace Cleaning',
      'dryer-vent': 'Dryer Vent Cleaning',
      'emergency': 'Emergency Service',
      'other': 'Other / Not Sure',
    };

    const serviceLabel = serviceLabels[service] || service;

    await resend.emails.send({
      from: 'SLR Website Lead <onboarding@resend.dev>',
      to: ['Ilanohaion85@gmail.com'],
      subject: `New Website Lead — ${serviceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0F1B2D; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">New Lead from Website</h1>
            <p style="margin: 8px 0 0; opacity: 0.7; font-size: 14px;">slrheatingncooling.com</p>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <a href="tel:${phone}" style="color: #D4734B; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">
                  <a href="mailto:${email}" style="color: #D4734B; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${serviceLabel}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827;">${message}</td>
              </tr>
              ` : ''}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #D4734B; border-radius: 8px; text-align: center;">
              <a href="tel:${phone}" style="color: white; text-decoration: none; font-weight: bold; font-size: 16px;">
                Call ${name} Now: ${phone}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please call us directly.' },
      { status: 500 }
    );
  }
}
