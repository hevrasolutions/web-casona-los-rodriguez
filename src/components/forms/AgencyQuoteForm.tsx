'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Locale, getDictionary } from '@/lib/i18n';
import { countries, getCountryByCode, getSortedCountries, getCountriesSortedByDialCode } from '@/data/countries';

interface AgencyQuoteFormProps {
  locale: Locale;
}

export default function AgencyQuoteForm({ locale }: AgencyQuoteFormProps) {
  const dict = getDictionary(locale);
  const isEs = locale === 'es';
  const sortedCountries = getSortedCountries(locale);
  const sortedDialCodes = getCountriesSortedByDialCode();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema creation using dict for localized errors
  const agencySchema = z.object({
    agencyName: z.string().min(1, dict.agencyForm.validation.agencyRequired),
    contactName: z.string().min(1, dict.agencyForm.validation.contactRequired),
    country: z.string().min(1, dict.agencyForm.validation.countryRequired),
    email: z.string().email(dict.agencyForm.validation.emailInvalid),
    phonePrefix: z.string().optional(),
    phone: z.string().min(1, dict.agencyForm.validation.phoneRequired),
    paxRange: z.array(z.string()).optional(),
    preferredContact: z.array(z.string()).optional(),
    comments: z.string().optional(),
  });

  type AgencyFormData = z.infer<typeof agencySchema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AgencyFormData>({
    resolver: zodResolver(agencySchema),
    defaultValues: {
      agencyName: '',
      contactName: '',
      country: '',
      email: '',
      phonePrefix: '+506',
      phone: '',
      paxRange: [],
      preferredContact: [],
      comments: '',
    }
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const countryObj = getCountryByCode(selectedCode);
    if (countryObj) {
      setValue('phonePrefix', countryObj.dialCode);
    }
  };

  const onSubmit = async (data: AgencyFormData) => {
    setIsSubmitting(true);
    setIsSubmitError(false);
    setIsSubmitSuccess(false);

    try {
      // Mock API call to TODO_FORM_PROVIDER B2B endpoint
      console.log('Sending B2B agency quote form data to provider:', data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting B2B form:', error);
      setIsSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white-warm border border-sand/20 rounded-lg p-6 sm:p-8 shadow-md w-full">
      <h3 className="font-heading text-2xl font-bold text-primary mb-6 border-b border-gold/25 pb-3 text-left">
        {dict.agencyForm.title}
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
              {dict.agencyForm.successTitle}
            </h4>
            <p className="text-sm font-body leading-relaxed text-primary/80">
              {dict.agencyForm.successDesc}
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
        {/* Agency / Company Name */}
        <div>
          <label htmlFor="agencyName" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
            {dict.agencyForm.agencyName} <span className="text-terracotta">*</span>
          </label>
          <input
            id="agencyName"
            type="text"
            disabled={isSubmitting}
            className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
              errors.agencyName ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
            } disabled:opacity-55`}
            {...register('agencyName')}
          />
          {errors.agencyName && (
            <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.agencyName.message}</p>
          )}
        </div>

        {/* Grid Contact Person / Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Contact Person Name */}
          <div>
            <label htmlFor="contactName" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.agencyForm.contactName} <span className="text-terracotta">*</span>
            </label>
            <input
              id="contactName"
              type="text"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                errors.contactName ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
              } disabled:opacity-55`}
              {...register('contactName')}
            />
            {errors.contactName && (
              <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.contactName.message}</p>
            )}
          </div>

          {/* Agency Country Dropdown */}
          <div>
            <label htmlFor="country" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.agencyForm.country} <span className="text-terracotta">*</span>
            </label>
            <select
              id="country"
              disabled={isSubmitting}
              className={`w-full px-4 py-2.5 rounded border bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                errors.country ? 'border-terracotta/60 focus:border-terracotta' : 'border-sand/30 focus:border-gold'
              } disabled:opacity-55`}
              {...register('country', {
                onChange: handleCountryChange
              })}
            >
              <option value="">{dict.agencyForm.selectCountry}</option>
              {sortedCountries.map((c) => {
                const name = isEs ? c.nameES : c.nameEN;
                return (
                  <option key={c.code} value={c.code}>
                    {name}
                  </option>
                );
              })}
            </select>
            {errors.country && (
              <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.country.message}</p>
            )}
          </div>
        </div>

        {/* Grid Email / Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.agencyForm.email} <span className="text-terracotta">*</span>
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

          {/* Phone with dialCode prefix dropdown */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
              {dict.agencyForm.phone} <span className="text-terracotta">*</span>
            </label>
            <div className={`flex rounded border bg-white-warm transition-colors focus-within:ring-2 focus-within:ring-gold/50 ${
              errors.phone ? 'border-terracotta/60 focus-within:border-terracotta' : 'border-sand/30 focus-within:border-gold'
            }`}>
              <select
                disabled={isSubmitting}
                aria-label="Phone Prefix"
                className="px-2.5 py-2.5 bg-sand/15 border-r border-sand/30 text-xs font-bold text-primary rounded-l focus:outline-none cursor-pointer disabled:opacity-55 shrink-0 max-w-[120px] text-ellipsis"
                {...register('phonePrefix')}
              >
                {sortedDialCodes.map((c) => (
                  <option key={c.code} value={c.dialCode}>
                    {c.dialCode} ({c.code})
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                disabled={isSubmitting}
                placeholder="8888-8888"
                className="w-full px-3 py-2.5 bg-transparent text-sm text-primary font-body focus:outline-none disabled:opacity-55"
                {...register('phone')}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-terracotta font-medium font-body">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Multi-select: Client range per reservation */}
        <div>
          <label className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-2 font-heading">
            {dict.agencyForm.paxRangeLabel}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {dict.agencyForm.paxRangeOptions.map((option: string) => (
              <label
                key={option}
                className="flex items-center gap-2 px-3 py-2 rounded border border-sand/30 bg-sand/10 text-xs text-primary font-body cursor-pointer hover:border-gold hover:bg-cream/40 transition-colors select-none"
              >
                <input
                  type="checkbox"
                  value={option}
                  disabled={isSubmitting}
                  className="rounded border-sand/40 text-terracotta focus:ring-gold"
                  {...register('paxRange')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Multi-select: Preferred contact method */}
        <div>
          <label className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-2 font-heading">
            {dict.agencyForm.preferredContactLabel}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {dict.agencyForm.preferredContactOptions.map((option: string) => (
              <label
                key={option}
                className="flex items-center gap-2 px-3.5 py-2 rounded border border-sand/30 bg-sand/10 text-xs text-primary font-body cursor-pointer hover:border-gold hover:bg-cream/40 transition-colors select-none"
              >
                <input
                  type="checkbox"
                  value={option}
                  disabled={isSubmitting}
                  className="rounded border-sand/40 text-terracotta focus:ring-gold"
                  {...register('preferredContact')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes/Comments */}
        <div>
          <label htmlFor="comments" className="block text-xs font-bold text-primary/85 uppercase tracking-wider mb-1.5 font-heading">
            {dict.agencyForm.comments}
          </label>
          <textarea
            id="comments"
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 rounded border border-sand/30 bg-white-warm text-sm text-primary font-body transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50 resize-y disabled:opacity-55"
            {...register('comments')}
          />
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
              {dict.agencyForm.sending}
            </>
          ) : (
            dict.agencyForm.send
          )}
        </button>
      </form>
    </div>
  );
}
