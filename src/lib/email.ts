import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { getCountryByCode } from '@/data/countries';

export interface ContactFormDataInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AgencyFormDataInput {
  agencyName: string;
  contactName: string;
  country: string;
  email: string;
  phonePrefix?: string;
  phone: string;
  paxRange?: string[];
  preferredContact?: string[];
  comments?: string;
}

// Hostinger SMTP Configuration
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 465;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

// Resend API Key Configuration (Fallback)
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Email Recipients & Senders
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'info@casonalosrodriguez.cr';
const AGENCY_EMAIL_TO = process.env.AGENCY_EMAIL_TO || 'agencias@casonalosrodriguez.cr';
const EMAIL_FROM = process.env.EMAIL_FROM || 'Casona Los Rodríguez <info@casonalosrodriguez.cr>';

/**
 * Creates Nodemailer Transporter for Hostinger SMTP
 */
function createHostingerTransporter() {
  if (!SMTP_USER || !SMTP_PASS) return null;
  
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465 SSL, false for 587 TLS
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

/**
 * HTML Email Template for Internal Contact Notification
 */
export function getContactNotificationEmailHtml(data: ContactFormDataInput): string {
  const { name, email, phone, subject, message } = data;
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Nueva Consulta de Contacto - Casona Los Rodríguez</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #4A2511; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #FDFAF5; border: 1px solid #C9A84C; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .header { background-color: #4A2511; padding: 24px; text-align: center; color: #F5F0E8; }
        .header h1 { margin: 0; font-size: 22px; color: #C9A84C; font-weight: 700; letter-spacing: 0.5px; }
        .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.85; }
        .content { padding: 28px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .info-table td { padding: 10px 12px; border-bottom: 1px solid #EDE5D8; font-size: 14px; }
        .label { font-weight: bold; color: #4A2511; width: 30%; }
        .value { color: #2D1A0D; }
        .message-box { background-color: #F5F0E8; border-left: 4px solid #C9A84C; padding: 16px; border-radius: 0 6px 6px 0; font-size: 14px; line-height: 1.6; color: #4A2511; }
        .footer { background-color: #EDE5D8; padding: 16px; text-align: center; font-size: 12px; color: #4A2511; opacity: 0.8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Casona Los Rodríguez</h1>
          <p>Nueva Solicitud de Contacto General</p>
        </div>
        <div class="content">
          <table class="info-table">
            <tr>
              <td class="label">Nombre:</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Correo:</td>
              <td class="value"><a href="mailto:${email}" style="color: #1A5EA8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td class="label">Teléfono:</td>
              <td class="value"><a href="tel:${phone}" style="color: #1A5EA8; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td class="label">Asunto:</td>
              <td class="value"><strong>${subject}</strong></td>
            </tr>
          </table>
          
          <h3 style="font-size: 15px; color: #4A2511; margin-top: 24px; margin-bottom: 8px;">Mensaje del Cliente:</h3>
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          Casona Los Rodríguez • La Fortuna, San Carlos, Costa Rica<br>
          Este correo fue generado automáticamente desde el sitio web oficial.
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * HTML Email Template for Customer Auto-Responder
 */
export function getContactAutoReplyEmailHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>¡Mensaje Recibido! - Casona Los Rodríguez</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #4A2511; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #FDFAF5; border: 1px solid #C9A84C; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .header { background-color: #4A2511; padding: 28px; text-align: center; color: #F5F0E8; }
        .header h1 { margin: 0; font-size: 24px; color: #C9A84C; font-weight: 700; }
        .header p { margin: 6px 0 0 0; font-size: 14px; opacity: 0.85; }
        .content { padding: 28px; font-size: 15px; line-height: 1.7; color: #4A2511; }
        .highlight-box { background-color: #F5F0E8; border: 1px solid #C9A84C; padding: 18px; border-radius: 6px; text-align: center; margin: 24px 0; }
        .button { display: inline-block; background-color: #C0392B; color: #FDFAF5 !important; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-top: 10px; }
        .footer { background-color: #EDE5D8; padding: 18px; text-align: center; font-size: 12px; color: #4A2511; opacity: 0.8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Casona Los Rodríguez</h1>
          <p>La Fortuna de San Carlos, Costa Rica</p>
        </div>
        <div class="content">
          <p>Hola <strong>${name}</strong>,</p>
          <p>¡Muchas gracias por ponerse en contacto con nosotros! Hemos recibido su consulta en <strong>Casona Los Rodríguez</strong>.</p>
          <p>Un miembro de nuestro equipo familiar revisará su mensaje y le responderá a la brevedad posible.</p>
          
          <div class="highlight-box">
            <h3 style="margin: 0 0 8px 0; color: #4A2511; font-size: 16px;">¿Necesita asistencia urgente?</h3>
            <p style="margin: 0 0 14px 0; font-size: 13px; color: #4A2511;">Puede comunicarse directamente a nuestro WhatsApp oficial de atención.</p>
            <a href="https://wa.me/50660817929" class="button">Escribir por WhatsApp</a>
          </div>

          <p>¡Esperamos recibirle pronto para compartir la auténtica historia, gastronomía a la leña y tradiciones de nuestro campo!</p>
          <p style="margin-top: 24px;">Con aprecio,<br><strong>Familia Rodríguez Arias</strong><br><em>Casona Los Rodríguez</em></p>
        </div>
        <div class="footer">
          Casona Los Rodríguez • Sona Fluca, La Fortuna, San Carlos, Costa Rica<br>
          Tel / WhatsApp: +506 6081-7929 • info@casonalosrodriguez.cr
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * HTML Email Template for Internal B2B Agency Notification
 */
export function getAgencyNotificationEmailHtml(data: AgencyFormDataInput): string {
  const { agencyName, contactName, country, email, phonePrefix, phone, paxRange, preferredContact, comments } = data;
  
  const countryObj = getCountryByCode(country);
  const countryName = countryObj ? `${countryObj.nameES} (${countryObj.code})` : country;
  const fullPhone = phonePrefix ? `${phonePrefix} ${phone}` : phone;

  const paxList = paxRange && paxRange.length > 0 
    ? paxRange.map(p => `<span style="display:inline-block; background-color:#EDE5D8; padding:4px 8px; border-radius:4px; margin:2px; font-size:13px;">${p}</span>`).join(' ')
    : 'No especificado';

  const contactList = preferredContact && preferredContact.length > 0 
    ? preferredContact.map(c => `<span style="display:inline-block; background-color:#C9A84C; color:#4A2511; padding:4px 8px; border-radius:4px; margin:2px; font-size:13px; font-weight:bold;">${c}</span>`).join(' ')
    : 'No especificado';

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Nueva Solicitud de Convenio Agencias B2B - Casona Los Rodríguez</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #4A2511; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #FDFAF5; border: 1px solid #C9A84C; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .header { background-color: #4A2511; padding: 24px; text-align: center; color: #F5F0E8; }
        .header h1 { margin: 0; font-size: 22px; color: #C9A84C; font-weight: 700; letter-spacing: 0.5px; }
        .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.85; }
        .content { padding: 28px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .info-table td { padding: 10px 12px; border-bottom: 1px solid #EDE5D8; font-size: 14px; }
        .label { font-weight: bold; color: #4A2511; width: 35%; }
        .value { color: #2D1A0D; }
        .message-box { background-color: #F5F0E8; border-left: 4px solid #1A5EA8; padding: 16px; border-radius: 0 6px 6px 0; font-size: 14px; line-height: 1.6; color: #4A2511; margin-top: 12px; }
        .footer { background-color: #EDE5D8; padding: 16px; text-align: center; font-size: 12px; color: #4A2511; opacity: 0.8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Casona Los Rodríguez</h1>
          <p>Solicitud de Convenio Comercial / Agencias B2B</p>
        </div>
        <div class="content">
          <table class="info-table">
            <tr>
              <td class="label">Agencia / Empresa:</td>
              <td class="value"><strong>${agencyName}</strong></td>
            </tr>
            <tr>
              <td class="label">Persona de Contacto:</td>
              <td class="value"><strong>${contactName}</strong></td>
            </tr>
            <tr>
              <td class="label">País de la Agencia:</td>
              <td class="value">${countryName}</td>
            </tr>
            <tr>
              <td class="label">Correo Electrónico:</td>
              <td class="value"><a href="mailto:${email}" style="color: #1A5EA8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td class="label">Teléfono de Contacto:</td>
              <td class="value"><a href="tel:${fullPhone.replace(/[^0-9+]/g, '')}" style="color: #1A5EA8; text-decoration: none;">${fullPhone}</a></td>
            </tr>
            <tr>
              <td class="label">Rango Estimado de Pax:</td>
              <td class="value">${paxList}</td>
            </tr>
            <tr>
              <td class="label">Canal Preferido de Respuesta:</td>
              <td class="value">${contactList}</td>
            </tr>
          </table>
          
          ${comments ? `
            <h3 style="font-size: 15px; color: #4A2511; margin-top: 24px; margin-bottom: 4px;">Comentarios / Requerimientos Especiales:</h3>
            <div class="message-box">
              ${comments.replace(/\n/g, '<br>')}
            </div>
          ` : ''}
        </div>
        <div class="footer">
          Canal Exclusivo para Operadores • agencias@casonalosrodriguez.cr<br>
          Casona Los Rodríguez • La Fortuna, San Carlos, Costa Rica
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * HTML Email Template for B2B Agency Auto-Responder
 */
export function getAgencyAutoReplyEmailHtml(contactName: string, agencyName: string): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Solicitud Recibida - Convenio B2B Casona Los Rodríguez</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F0E8; color: #4A2511; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #FDFAF5; border: 1px solid #C9A84C; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .header { background-color: #4A2511; padding: 28px; text-align: center; color: #F5F0E8; }
        .header h1 { margin: 0; font-size: 24px; color: #C9A84C; font-weight: 700; }
        .header p { margin: 6px 0 0 0; font-size: 14px; opacity: 0.85; }
        .content { padding: 28px; font-size: 15px; line-height: 1.7; color: #4A2511; }
        .highlight-box { background-color: #F5F0E8; border: 1px solid #C9A84C; padding: 18px; border-radius: 6px; text-align: center; margin: 24px 0; }
        .button { display: inline-block; background-color: #1A5EA8; color: #FDFAF5 !important; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-top: 10px; }
        .footer { background-color: #EDE5D8; padding: 18px; text-align: center; font-size: 12px; color: #4A2511; opacity: 0.8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Casona Los Rodríguez</h1>
          <p>Alianzas Comerciales y Tarifario para Agencias</p>
        </div>
        <div class="content">
          <p>Estimado/a <strong>${contactName}</strong> (${agencyName}),</p>
          <p>Agradecemos cordialmente su interés en formar una alianza comercial con <strong>Casona Los Rodríguez</strong> en La Fortuna, San Carlos.</p>
          <p>Hemos recibido su solicitud de tarifario neto y dossier comercial. Nuestro departamento de reservas y atención a operadores revisará sus datos para enviarle las pautas de contratación y tarifas preferenciales actualizadas.</p>
          
          <div class="highlight-box">
            <h3 style="margin: 0 0 8px 0; color: #4A2511; font-size: 16px;">Canal de Atención Inmediata a Operadores</h3>
            <p style="margin: 0 0 14px 0; font-size: 13px; color: #4A2511;">Para inspecciones de sitio, bloqueo de series anuales o solicitudes urgentes:</p>
            <a href="https://wa.me/50660817929" class="button">Atención Operadores por WhatsApp</a>
          </div>

          <p>Será un verdadero honor colaborar con su representada y brindar a sus clientes la experiencia rural y gastronómica más auténtica de Costa Rica.</p>
          <p style="margin-top: 24px;">Saludos cordiales,<br><strong>Departamento de Alianzas y Ventas B2B</strong><br><em>Casona Los Rodríguez</em></p>
        </div>
        <div class="footer">
          Casona Los Rodríguez • Sona Fluca, La Fortuna, San Carlos, Costa Rica<br>
          Canal Exclusivo Agencias: agencias@casonalosrodriguez.cr • Tel/WA: +506 6081-7929
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Sends Contact Form Email via Hostinger SMTP (Primary), Resend API (Secondary), or Development Simulation
 */
export async function sendContactFormEmail(data: ContactFormDataInput): Promise<{ success: boolean; mode: 'smtp' | 'resend' | 'simulated'; error?: string }> {
  // 1. Primary Option: Hostinger SMTP via Nodemailer
  const transporter = createHostingerTransporter();
  if (transporter) {
    try {
      // Send Internal Notification to Casona Team
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: CONTACT_EMAIL_TO,
        replyTo: data.email,
        subject: `[Nuevo Contacto Web] ${data.subject} - ${data.name}`,
        html: getContactNotificationEmailHtml(data),
      });

      // Send Auto-Reply to Customer
      try {
        await transporter.sendMail({
          from: EMAIL_FROM,
          to: data.email,
          subject: `¡Hemos recibido su mensaje en Casona Los Rodríguez!`,
          html: getContactAutoReplyEmailHtml(data.name),
        });
      } catch (autoReplyErr) {
        console.warn('Auto-reply email delivery warning (SMTP):', autoReplyErr);
      }

      return { success: true, mode: 'smtp' };
    } catch (smtpErr: any) {
      console.error('Error sending contact email via Hostinger SMTP:', smtpErr);
      return { success: false, mode: 'smtp', error: smtpErr?.message || 'Error enviando correo SMTP' };
    }
  }

  // 2. Secondary Option: Resend API
  if (RESEND_API_KEY) {
    try {
      const resend = new Resend(RESEND_API_KEY);

      const notificationResult = await resend.emails.send({
        from: EMAIL_FROM,
        to: [CONTACT_EMAIL_TO],
        replyTo: data.email,
        subject: `[Nuevo Contacto Web] ${data.subject} - ${data.name}`,
        html: getContactNotificationEmailHtml(data),
      });

      if (notificationResult.error) {
        console.error('Error sending internal notification email (Resend):', notificationResult.error);
        return { success: false, mode: 'resend', error: notificationResult.error.message };
      }

      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: [data.email],
          subject: `¡Hemos recibido su mensaje en Casona Los Rodríguez!`,
          html: getContactAutoReplyEmailHtml(data.name),
        });
      } catch (autoReplyErr) {
        console.warn('Auto-reply email delivery warning (Resend):', autoReplyErr);
      }

      return { success: true, mode: 'resend' };
    } catch (err: any) {
      console.error('Failed to execute sendContactFormEmail (Resend):', err);
      return { success: false, mode: 'resend', error: err?.message || 'Server error' };
    }
  }

  // 3. Fallback: Development Simulation Mode
  console.log('--------------------------------------------------');
  console.log('[Contact Form - Dev Mode / Simulated Execution]');
  console.log('No SMTP_USER or RESEND_API_KEY found in environment variables.');
  console.log('Simulating successful email delivery for:', data.email);
  console.log('Form Details:', data);
  console.log('--------------------------------------------------');
  return { success: true, mode: 'simulated' };
}

/**
 * Sends Agency Quote Form Email via Hostinger SMTP (Primary), Resend API (Secondary), or Development Simulation
 */
export async function sendAgencyQuoteEmail(data: AgencyFormDataInput): Promise<{ success: boolean; mode: 'smtp' | 'resend' | 'simulated'; error?: string }> {
  // 1. Primary Option: Hostinger SMTP via Nodemailer
  const transporter = createHostingerTransporter();
  if (transporter) {
    try {
      // Send Internal Notification to Casona Agency Team
      await transporter.sendMail({
        from: EMAIL_FROM,
        to: AGENCY_EMAIL_TO,
        replyTo: data.email,
        subject: `[Nueva Solicitud Agencia B2B] ${data.agencyName} (${data.country}) - ${data.contactName}`,
        html: getAgencyNotificationEmailHtml(data),
      });

      // Send Auto-Reply to Agency Contact
      try {
        await transporter.sendMail({
          from: EMAIL_FROM,
          to: data.email,
          subject: `Solicitud de Convenio B2B Recibida - Casona Los Rodríguez`,
          html: getAgencyAutoReplyEmailHtml(data.contactName, data.agencyName),
        });
      } catch (autoReplyErr) {
        console.warn('Agency B2B auto-reply email delivery warning (SMTP):', autoReplyErr);
      }

      return { success: true, mode: 'smtp' };
    } catch (smtpErr: any) {
      console.error('Error sending agency B2B email via Hostinger SMTP:', smtpErr);
      return { success: false, mode: 'smtp', error: smtpErr?.message || 'Error enviando correo SMTP' };
    }
  }

  // 2. Secondary Option: Resend API
  if (RESEND_API_KEY) {
    try {
      const resend = new Resend(RESEND_API_KEY);

      const notificationResult = await resend.emails.send({
        from: EMAIL_FROM,
        to: [AGENCY_EMAIL_TO],
        replyTo: data.email,
        subject: `[Nueva Solicitud Agencia B2B] ${data.agencyName} (${data.country}) - ${data.contactName}`,
        html: getAgencyNotificationEmailHtml(data),
      });

      if (notificationResult.error) {
        console.error('Error sending internal B2B agency email (Resend):', notificationResult.error);
        return { success: false, mode: 'resend', error: notificationResult.error.message };
      }

      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: [data.email],
          subject: `Solicitud de Convenio B2B Recibida - Casona Los Rodríguez`,
          html: getAgencyAutoReplyEmailHtml(data.contactName, data.agencyName),
        });
      } catch (autoReplyErr) {
        console.warn('Agency B2B auto-reply email delivery warning (Resend):', autoReplyErr);
      }

      return { success: true, mode: 'resend' };
    } catch (err: any) {
      console.error('Failed to execute sendAgencyQuoteEmail (Resend):', err);
      return { success: false, mode: 'resend', error: err?.message || 'Server error' };
    }
  }

  // 3. Fallback: Development Simulation Mode
  console.log('--------------------------------------------------');
  console.log('[Agency Quote Form - Dev Mode / Simulated Execution]');
  console.log('No SMTP_USER or RESEND_API_KEY found in environment variables.');
  console.log('Simulating successful B2B agency quote email for:', data.email);
  console.log('Form Details:', data);
  console.log('--------------------------------------------------');
  return { success: true, mode: 'simulated' };
}
