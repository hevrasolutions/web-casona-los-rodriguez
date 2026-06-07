'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Locale, getDictionary } from '@/lib/i18n';

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const dict = getDictionary(locale);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema creation using dict for localized errors
  const contactSchema = z.object({
    name: z.string().min(3, dict.contactForm.validation.nameMin),
    email: z.string().email(dict.contactForm.validation.emailInvalid),
    phone: z.string().min(1, dict.contactForm.validation.phoneRequired),
    subject: z.string().min(1, dict.contactForm.validation.subjectRequired),
    message: z.string().min(10, dict.contactForm.validation.messageMin),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsSubmitError(false);
    setIsSubmitSuccess(false);

    try {
      // Mock API call to TODO_FORM_PROVIDER
      console.log('Sending contact form data to provider:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-md w-full">
      <h3 className="font-heading text-2xl font-bold text-primary mb-6 border-b border-gold/25 pb-3">
        {dict.contactForm.title}
      </h3>

      {isSubmitSuccess && (
        <div className="mb-6 bg-jungle/10 border border-jungle/30 text-primary p-5 rounded-lg flex gap-3 text-left animate-fade-in">
          <span className="w-8 h-8 rounded-full bg-jungle/20 flex items-center justify-center text-jungle shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div>
            <h4 className="font-heading text-lg font-bold text-jungle mb-1">
              {dict.contactForm.successTitle}
            </h4>
            <p className="text-sm font-body leading-relaxed text-primary/80">
              {dict.contactForm.successDesc}
            </p>
          </div>
        </div>
      )}

      {isSubmitError && (
        <div className="mb-6 bg-terracotta/10 border border-terracotta/30 text-primary p-5 rounded-lg flex gap-3 text-left animate-fade-in">
          <span className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </span>
          <div>
            <h4 className="font-heading text-lg font-bold text-terracotta mb-1">
              {dict.contactForm.errorTitle}
            </h4>
            <p className="text-sm font-body leading-relaxed text-primary/80">
              {dict.contactForm.errorDesc}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
            {dict.contactForm.name} <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            type="text"
            disabled={isSubmitting}
            className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
              errors.name ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
            } disabled:opacity-55`}
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.name.message}</p>
          )}
        </div>

        {/* Grid Email / Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.contactForm.email} <span className="text-terracotta">*</span>
            </label>
            <input
              id="email"
              type="email"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                errors.email ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
              } disabled:opacity-55`}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.contactForm.phone} <span className="text-terracotta">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                errors.phone ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
              } disabled:opacity-55`}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
            {dict.contactForm.subject} <span className="text-terracotta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            disabled={isSubmitting}
            className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
              errors.subject ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
            } disabled:opacity-55`}
            {...register('subject')}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
            {dict.contactForm.message} <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            disabled={isSubmitting}
            className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 resize-y ${
              errors.message ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
            } disabled:opacity-55`}
            {...register('message')}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center font-heading text-sm font-semibold uppercase tracking-wider text-white-warm bg-terracotta hover:bg-terracotta/90 active:bg-terracotta/95 py-3 rounded shadow cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta disabled:opacity-50 disabled:cursor-not-allowed select-none"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white-warm" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {dict.contactForm.sending}
            </>
          ) : (
            dict.contactForm.send
          )}
        </button>
      </form>
    </div>
  );
}
