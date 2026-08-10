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
    agencyEmail: 'agencias@casonalosrodriguez.cr',
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
    title: 'Agency & Group Quote Request',
    agencyName: 'Agency / Tour Operator Name',
    contactName: 'Contact Person',
    country: 'Agency Country',
    selectCountry: 'Select a country...',
    email: 'Email Address',
    phone: 'Phone Number',
    date: 'Date of Visit',
    pax: 'Number of Passengers',
    adults: 'Adults (11+ years)',
    children: 'Children (5-10 years)',
    infants: 'Infants (0-4 years - Free)',
    experience: 'Experience of Interest',
    comments: 'Notes / Special Requirements',
    paxRangeLabel: 'Client Range per Reservation',
    paxRangeOptions: ['5-10', '11-20', '21-30', '31-40', '41-50', '+50'],
    preferredContactLabel: 'Preferred Response Channel',
    preferredContactOptions: ['WhatsApp', 'Email', 'Phone Call'],
    send: 'Send Quote Request',
    sending: 'Processing...',
    selectExperience: 'Select an experience...',
    successTitle: 'Request Received!',
    successDesc: 'We have received your quote request. Our agency support team will respond promptly.',
    validation: {
      agencyRequired: 'Agency name is required.',
      contactRequired: 'Contact person name is required.',
      countryRequired: 'Agency country is required.',
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
      a: 'No problem! All our key activities (wood-fired cooking, hands-on sugarcane mill, traditional dining room, dances) are carried out under safe, covered structures. Rain does not stop the traditional experience.'
    },
    {
      q: 'Do you have special rates for groups and agencies?',
      a: 'Yes, we offer preferential net rates and complimentary (FOC) policies for accredited guides and drivers. Please fill out the form in our Agencies section to receive the rate manual.'
    },
    {
      q: 'What are the cancellation policies?',
      a: 'Cancellations made more than 48 hours in advance receive a 100% refund. Between 48 and 24 hours receive 50%. Cancellations with less than 24 hours notice or no-shows are non-refundable.'
    }
  ],
  agenciesPage: {
    title: 'Partner Agencies & Tour Operators',
    subtitle: 'Commercial Agreements & Preferential Rates',
    desc: 'Welcome your visitor groups with the authenticity, punctuality, and warmth of La Fortuna’s most iconic rural farmhouse. We offer special rates and personalized coordination for travel agencies and tour operators.',
    benefitsTitle: 'Benefits for Partner Agencies',
    benefits: [
      {
        title: 'Preferential Rates',
        desc: 'Access to competitive special rates and commission structures for all our tours and dining services.'
      },
      {
        title: 'Complimentary Spots (FOC)',
        desc: 'We offer complimentary entries and meals for tour guides and drivers on all activities and buffet services.'
      },
      {
        title: 'Traditional Wood-Fired Buffet',
        desc: 'Typical lunch or dinner setup prepared over a wood stove, ideal for small, medium, or large groups.'
      },
      {
        title: 'Schedule Flexibility & Direct Coordination',
        desc: 'Priority booking and direct communication via WhatsApp or email to resolve itineraries in record time.'
      }
    ],
    quoteTitle: 'Request Group Quote',
    quoteDesc: 'Fill out this form to request a tailored quote for your group. We will respond the same day.'
  },
  aboutPage: {
    title: 'A Living Legacy of Costa Rican History',
    subtitle: 'Over 120 years of history and rural tradition',
    desc: 'Discover the historic farmhouse once owned by former President Rafael Yglesias Castro, proudly preserved today by the Rodríguez Arias Family to keep the true soul of Costa Rican countryside alive.',
    
    // Placa 1: History of the Casona
    casonaHistoryTitle: 'History of Casona Los Rodríguez',
    casonaHistorySubtitle: 'La Fortuna Heritage Landmark',
    casonaHistoryText: 'This is a Casona of more than 120 years that was owned by former President Rafael Yglesias Castro, then Mr. Fernando Retana became the owner and later sold it in 1963 to Mr. Federico (Kiko) Rodríguez Vargas, currently it is managed by the Rodríguez Arias Family.',
    
    // Placa 2: President Rafael Yglesias Castro
    presidentTitle: 'Rafael Anselmo José Yglesias Castro',
    presidentSubtitle: 'National Hero (President of Costa Rica 1894–1902)',
    presidentText1: 'He was a Costa Rican politician, businessman and merchant, president of Costa Rica from 1894 to 1902. A man of energetic personality, he ruled the country for 8 years, during which he completed many works, driven by his desire for illustration and progress.',
    presidentText2: 'On the economic level, it promoted an important monetary reform, in which it established the gold standard and allowed the creation of the colón as a national currency (1896), which came to lay a new basis on the economic life of the nation. He began the construction of the railroad to the Pacific, which took place until 1909. He promoted teaching and brought from abroad a large number of construction teachers and specialized workers.',
    presidentText3: 'Also, he promoted the construction and completion of the National Theater of Costa Rica, inaugurated in his first government (1897). At the international level, the Pacheco-Matus treaty (1896) was signed in their governments, which ended border disputes with Nicaragua; and the Loubet Award with Colombia. He was a candidate for the presidency of the Republic on two more occasions, after his second government: 1910 and 1913. The Legislative Assembly of Costa Rica declared him "Benemérito de la Patria" on November 16, 1981.',

    // Placa 3: 5 Colones Bill
    billTitle: 'The 5 Colones Banknote (D Series, 1968)',
    billSubtitle: 'Allegory of Coffee, Bananas, and Hardworking Country Farmers',
    billText: 'It was first issued in 1968. On the obverse contains the portrait of former President Rafael Yglesias Castro (1894-1902), during whose Government the National Theater was built and, by the reverse, an engraving of the painting found in the lobby of that Theater, which is an "allegory of coffee and bananas" as the basis of commercial agriculture. With this, the idea of the importance of coffee within the economic base of the country and of the agricultural vocation of the Costa Rican society, a society of "simple farmers", was maintained.',

    // Timeline Section
    timelineTitle: '120-Year Historical Timeline',
    timelineSubtitle: 'Heritage Chronology',
    timelineEvents: [
      {
        year: '~1894',
        title: 'Presidential Construction',
        desc: 'Original construction of the rustic farmhouse in native Costa Rican woods. Originally owned by President Rafael Yglesias Castro.'
      },
      {
        year: '1896 – 1897',
        title: 'The Colón & National Theater',
        desc: 'Yglesias Castro enacts the monetary reform creating the Colón currency (1896) and inaugurates the National Theater (1897).'
      },
      {
        year: '1940s',
        title: 'Country Stewardship',
        desc: 'Mr. Fernando Retana acquires the property, preserving the native wooden architecture and traditional Costa Rican farming.'
      },
      {
        year: '1963',
        title: 'Start of the Rodríguez Legacy',
        desc: 'Mr. Federico "Kiko" Rodríguez Vargas purchases the farmhouse and farm in 1963, establishing wood-fired cooking and sugarcane milling.'
      },
      {
        year: '1968',
        title: 'Allegory of Hardworking Farmers',
        desc: 'The Central Bank issues the historic 5 Colones bill (D Series), honoring the agricultural vocation and country hospitality that thrives on the farm.'
      },
      {
        year: 'Today',
        title: 'Living Cultural Experience',
        desc: 'The Rodríguez Arias Family (Celin Rodríguez & Yamileth Arias) opens the doors to share wood-fired cooking, sugarcane milling, and traditions.'
      }
    ],

    // Mission and Values
    missionTitle: 'Our Cultural Pillars',
    missionSubtitle: 'Mission & Commitment',
    missionList: [
      {
        title: 'Historic & Cultural Preservation',
        desc: 'We maintain the original native wood architecture of over 120 years, keeping Costa Rica’s political and rural heritage alive.'
      },
      {
        title: 'Country Cuisine & Traditions',
        desc: 'We rescue 100% wood-fired cooking in traditional utensils, interactive sugarcane milling, and traditional Tico hospitality.'
      },
      {
        title: 'Community & Sustainability',
        desc: 'We actively support the Sona Fluca community, collaborating with local schools and northern farmers.'
      }
    ],
    familyTitle: 'The Rodríguez Arias Family',
    familySubtitle: 'Hospitality & Rural Stewardship',
    familyText: 'Led by Celin Rodríguez López and Yamileth Arias, we open the doors of the casona so every visitor feels like an honored guest in our home. We share artisanal sugarcane milling, hand-patted tortillas over wood fires, and the authentic joy of our countryside roots.'
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
