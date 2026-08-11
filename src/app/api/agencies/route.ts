import { NextResponse } from 'next/server';
import * as z from 'zod';
import { sendAgencyQuoteEmail } from '@/lib/email';

// Validation schema matching client-side agency schema
const agencyApiSchema = z.object({
  agencyName: z.string().min(1, 'El nombre de la agencia es requerido'),
  contactName: z.string().min(1, 'El nombre del contacto es requerido'),
  country: z.string().min(1, 'El país es requerido'),
  email: z.string().email('Dirección de correo electrónico inválida'),
  phonePrefix: z.string().optional(),
  phone: z.string().min(1, 'El teléfono es requerido'),
  paxRange: z.array(z.string()).optional(),
  preferredContact: z.array(z.string()).optional(),
  comments: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validationResult = agencyApiSchema.safeParse(body);
    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: 'Datos de formulario de agencia inválidos', details: formattedErrors },
        { status: 400 }
      );
    }

    const agencyData = validationResult.data;

    // Send B2B agency quote email notification
    const emailResult = await sendAgencyQuoteEmail(agencyData);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.error || 'Error enviando la solicitud de cotización' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitud de agencia enviada exitosamente',
      mode: emailResult.mode,
    });

  } catch (error: any) {
    console.error('API Error in /api/agencies:', error);
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor al procesar la solicitud de agencia' },
      { status: 500 }
    );
  }
}
