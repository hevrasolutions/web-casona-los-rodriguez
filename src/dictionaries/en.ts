import { Dictionary } from './es';

export const en: Dictionary = {
  nav: {
    home: 'Home',
    experiences: 'Experiences',
    restaurant: 'Restaurant',
    gallery: 'Gallery',
    agencies: 'Agencies',
    about: 'About Us',
    contact: 'Contact',
    bookNow: 'Book Now'
  },
  footer: {
    tagline: 'A Costa Rican cultural experience in a 120+ year old rural farmhouse, where visitors cook, eat, learn, dance, and revive countryside traditions.',
    quickLinks: 'Quick Links',
    mainExperiences: 'Experiences',
    contact: 'Contact',
    copyright: '© {year} Casona Los Rodríguez. All rights reserved.',
    terms: 'Terms & Conditions',
    cancellation: 'Cancellation Policy',
    credits: 'Cultural Tourist Site'
  },
  contact: {
    address: 'Sona Fluca, La Fortuna, Costa Rica',
    phone: '+506 6081-7929',
    whatsapp: '+506 6081-7929',
    email: 'info@casonalosrodriguez.cr',
    scheduleTitle: 'Opening Hours',
    schedule: 'Monday to Sunday, 7:00 a.m. to 10:00 p.m.'
  },
  whatsapp: {
    tooltip: 'Have questions? Chat with us on WhatsApp'
  },
  common: {
    language: 'Language',
    bookingLabel: 'Book Now',
    quoteLabel: 'Request Quote',
    exploreExperiences: 'Explore Experiences',
    back: 'Back',
    seeMore: 'See More',
    priceFrom: 'From',
    perPerson: 'person',
    duration: 'Duration',
    minPersons: 'Minimum',
    adults: 'Adults',
    children: 'Children',
    infants: 'Infants',
    adultsRange: 'Adults (11+)',
    childrenRange: 'Children (5–10)',
    infantsRange: 'Infants (0–4)',
    free: 'free',
    pricesInUsd: 'Prices are expressed in US dollars.',
    taxNotice: '13% VAT tax not included in the price.',
    bookingNotice: 'Bookings must be made at least 12 hours in advance.'
  },
  contactForm: {
    title: 'Send us a message',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    successTitle: 'Message Sent!',
    successDesc: 'Thank you for writing. We will get back to you as soon as possible.',
    errorTitle: 'Sending Failed',
    errorDesc: 'A problem occurred while sending your message. Please try again.',
    validation: {
      nameRequired: 'Name is required.',
      nameMin: 'Name must be at least 3 characters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      phoneRequired: 'Phone is required.',
      subjectRequired: 'Subject is required.',
      messageRequired: 'Message is required.',
      messageMin: 'Message must be at least 10 characters.'
    }
  },
  agencyForm: {
    title: 'B2B Quote Request',
    agencyName: 'Agency Name',
    contactName: 'Contact Person',
    email: 'Email Address',
    phone: 'Phone Number',
    date: 'Date of Visit',
    pax: 'Number of Passengers',
    adults: 'Adults (12+ years)',
    children: 'Children (3-11 years)',
    infants: 'Infants (0-2 years)',
    experience: 'Experience of Interest',
    comments: 'Notes / Special Requirements',
    send: 'Send Request',
    sending: 'Processing...',
    selectExperience: 'Select an experience...',
    successTitle: 'Request Received!',
    successDesc: 'We have received your quote request. Our booking department will respond within 24 business hours.',
    validation: {
      agencyRequired: 'Agency name is required.',
      contactRequired: 'Contact person name is required.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      phoneRequired: 'Phone is required.',
      dateRequired: 'Date is required.',
      experienceRequired: 'Please select an experience.',
      adultsMin: 'Must have at least 1 adult.'
    }
  },
  faqsList: [
    {
      q: 'How to get to Casona Los Rodríguez?',
      a: 'We are located in Sona Fluca, just 10 minutes from downtown La Fortuna, San Carlos. You can reach us in any type of vehicle (paved street) or coordinate transportation with us.'
    },
    {
      q: 'What happens if it rains during the experience?',
      a: 'No problem! All our key activities (wood-fired cooking, oxen-driven trapiche, traditional dining room, dances) are carried out under safe, covered structures. Rain does not stop the traditional experience.'
    },
    {
      q: 'Do you have special rates for groups and agencies?',
      a: 'Yes, we offer preferential net rates and complimentary policies for accredited guides and drivers. Please fill out the form in our Agencies section to receive the rate manual.'
    },
    {
      q: 'What are the cancellation policies?',
      a: 'Cancellations made more than 48 hours in advance receive a 100% refund. Between 48 and 24 hours receive 50%. Cancellations with less than 24 hours notice or no-shows are non-refundable.'
    }
  ],
  agenciesPage: {
    title: 'Travel Partners & Operators',
    subtitle: 'B2B Partnerships & Net Rates',
    desc: 'We offer authentic, high-quality, and meticulously coordinated experiences for your clients in La Fortuna. Discover our special benefits for travel agencies and tour operators.',
    benefitsTitle: 'Benefits for Partner Agencies',
    benefits: [
      {
        title: 'Preferential Net Rates',
        desc: 'Access to competitive net rates and commissions structure for all our tours and dining services.'
      },
      {
        title: 'FOC Policies (Free of Charge)',
        desc: 'We offer complimentary entries/meals for tour guides and drivers on all activities and buffet services.'
      },
      {
        title: 'Traditional Wood-Fired Buffet',
        desc: 'Typical lunch setup served in clay pots over a wood stove, ideal for groups of up to 80 guests.'
      },
      {
        title: 'Schedule Flexibility & Coordination',
        desc: 'Priority blocking of allocations and direct communication via WhatsApp or email with fast response times.'
      }
    ],
    quoteTitle: 'Request Group Quote',
    quoteDesc: 'Complete this form to request a special quotation for your group of passengers. We will reply on the same day.'
  },
  aboutPage: {
    title: 'Our History & Family',
    subtitle: '120 years of countryside traditions',
    desc: 'Casona Los Rodríguez is not just a tourist destination; it is our family home, where we preserve and proudly share Costa Rica\'s rural heritage.',
    historyTitle: 'The Legacy of the Stove and the Farm',
    historySubtitle: 'Our History',
    historyText1: 'Our rural farmhouse has over 120 years of history and has been the core of our family for generations. Originally constructed from native timbers and clay, it represents the traditional architecture of the first settlers of northern Costa Rica. For decades, this property has hosted daily agricultural chores, sugar cane milling, and family gatherings around the grand wood-fired stove.',
    historyText2: 'Over time, we decided to open our doors to visitors from around the world to prevent these valuable country customs from being forgotten. Today, we keep alive the tradition of patting tortillas by hand, farming organic land, and pressing sweet sugarcane juice in the oxen-driven trapiche, offering a real window into the Costa Rica of yesteryear.',
    missionTitle: 'Our Values and Commitment',
    missionSubtitle: 'Cultural Mission',
    missionList: [
      {
        title: 'Preserving Rural Identity',
        desc: 'We keep alive ancestral cooking techniques, trapiche milling, and the artistic expressions of Costa Rican country folklore.'
      },
      {
        title: 'Supporting the Local Economy',
        desc: 'We collaborate directly with the Sona Fluca school and purchase ingredients from local small farmers in La Fortuna.'
      },
      {
        title: 'Sustainability and Organic Farming',
        desc: 'Our garden and farm are managed under ecological principles, teaching visitors the importance of farming without agrochemicals.'
      }
    ],
    familyTitle: 'The Rodríguez Family',
    familySubtitle: 'Farmhouse Hospitality',
    familyText: 'When you visit us, you are not a client; you are an honored guest in our home. Alongside Don Gerardo, Doña María, and our children, you will share anecdotes, learn cooking secrets, and experience the warmth of an authentic rural home. We love seeing the smiles on people\'s faces when they try their first handmade tortilla or hear the music of our land.'
  },
  termsPage: {
    title: 'Terms & Conditions',
    subtitle: 'Rules and guidelines of our traditional farmhouse',
    sections: [
      {
        id: 'reservas',
        title: '1. Bookings & Payments',
        content: [
          'All individual or agency reservations must be made through our official channels or accredited external booking engines.',
          'Rates are displayed in United States Dollars (USD) and do not include applicable taxes under Costa Rican law.',
          'Booking confirmation is subject to full payment of the selected tour amount, unless special commercial agreements are in place with travel operators.'
        ]
      },
      {
        id: 'seguridad',
        title: '2. Safety on the Farm and Trapiche',
        content: [
          'Visitors must follow the instructions of guides and Rodríguez family members at all times during the tours.',
          'It is strictly forbidden to approach work animals (oxen) without the direct supervision of a qualified operator.',
          'We recommend wearing closed-toe shoes suitable for walking on dirt trails and comfortable clothing for outdoor activities.'
        ]
      },
      {
        id: 'conducta',
        title: '3. Visitor Conduct Rules',
        content: [
          'Casona Los Rodríguez promotes a family-friendly environment of mutual respect. Any offensive or harmful behavior toward other visitors, staff, or the natural environment will not be tolerated.',
          'Smoking is strictly prohibited inside the historical structures and roofed areas of the casona for heritage protection and fire prevention.'
        ]
      }
    ]
  },
  cancellationPage: {
    title: 'Cancellation Policy',
    subtitle: 'Our guidelines for refunds and booking changes',
    tiersTitle: 'Cancellation and Refund Terms',
    tiers: [
      {
        title: 'Flexible Cancellation',
        percent: '100%',
        desc: 'Full refund for cancellations notified more than 48 hours in advance of the scheduled experience start time.'
      },
      {
        title: 'Partial Cancellation',
        percent: '50%',
        desc: 'Refund of half the amount paid for requests submitted between 48 and 24 hours prior to the tour.'
      },
      {
        title: 'Non-Refundable',
        percent: '0%',
        desc: 'No refunds will be made for cancellations notified less than 24 hours in advance or in case of no-show.'
      }
    ],
    processTitle: 'How to Request a Cancellation or Change',
    processSteps: [
      'Send a formal email to info@casonalosrodriguez.cr with your reservation number and details.',
      'Or contact us directly via our official WhatsApp support channel at +506 6081-7929 indicating your information.',
      'Approved refunds are processed to the original payment method and may take 5 to 10 business days depending on your bank.'
    ],
    weatherTitle: 'Tropical Rain and Weather Policy',
    weatherDesc: 'Being located in the northern zone of Costa Rica (La Fortuna/Arenal), tropical rains are part of the ecosystem. All of our key activities (wood-fired cooking, trapiche, dances, and dining room) are conducted under spacious, safely covered structures. Therefore, experiences are not suspended due to normal rain, and standard cancellation policies apply.'
  }
};
