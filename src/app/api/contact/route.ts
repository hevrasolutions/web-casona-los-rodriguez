import { NextResponse } from 'next/server';
import * as z from 'zod';
import { sendContactFormEmail } from '@/lib/email';

// Validation schema matching client-side contact schema
const contactApiSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Dirección de correo electrónico inválida'),
  phone: z.string().min(1, 'El teléfono es requerido'),
  subject: z.string().min(1, 'El asunto es requerido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = contactApiSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: 'Datos de formulario inválidos', details: formattedErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = validationResult.data;

    // Send email notification
    const emailResult = await sendContactFormEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.error || 'Error enviando el mensaje' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado exitosamente',
      mode: emailResult.mode,
    });

  } catch (error: any) {
    console.error('API Error in /api/contact:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor al procesar la solicitud' },
      { status: 500 }
    );
  }
}
