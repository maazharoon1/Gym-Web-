import {
  ClassItem,
  MembershipPlan,
  Trainer,
  TransformationStory,
  ShopProduct,
  CommunityEvent,
  Testimonial
} from '../types';

export const BUSINESS_INFO = {
  name: 'MORR FIT HOUSTON',
  tagline: 'MORE THAN A GYM. THIS IS MORR.',
  subtagline: 'Train hard. Get stronger. Find your people.',
  handle: '@morrfitness',
  subtitle: 'Best Gym in Houston!',
  address: '2715 Emancipation Ave',
  cityStateZip: 'Houston, TX 77004',
  fullAddress: '2715 Emancipation Ave, Houston, TX 77004, United States',
  phone: '+1 832-570-9699',
  phoneDisplay: '(832) 570-9699',
  email: 'info@morrfithouston.com',
  instagramUrl: 'https://www.instagram.com/morrfithouston',
  instagramHandle: '@morrfitness',
  facebookUrl: 'https://facebook.com/MorrFitHouston',
  linktreeUrl: 'https://linktr.ee/morrfitness',
  hours: {
    members: '24/7/365 Keycard Access for 24-Hour Members',
    staffed: 'Mon - Fri: 5:00 AM – 9:00 PM | Sat: 7:00 AM – 6:00 PM | Sun: 8:00 AM – 4:00 PM',
  },
  neighborhood: 'Third Ward / Emancipation Ave',
  stats: {
    followers: '27K+',
    houstonLocation: 'Third Ward, Houston',
    access: '24/7 Keycard',
    rating: '4.9 ★',
    membersTrained: '2,500+'
  }
};

// Exact Membership Plans from Official MORR FIT Flyer & Linktree
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // 1. Month-to-Month (No Contract)
  {
    id: 'morr-flex-pass',
    name: 'MorrFlex Pass',
    tagline: 'Flexible Month-to-Month Gym Access',
    priceMonthly: 55,
    priceDisplay: '$55',
    commitment: 'month-to-month',
    accessHours: 'Gym Access During Business Hours',
    features: [
      'Gym Access During Business Hours',
      'Month-To-Month Agreement',
      'Cancel Anytime (No Long-Term Contract)',
      'Full Dumbbell, Barbell & Turf Zones',
      'Locker Room & Shower Amenities',
      'DM "FIT" to Get Started Today'
    ],
    ctaText: 'CHOOSE MORRFLEX ($55/MO)',
  },
  {
    id: 'morr-flex-24',
    name: 'MorrFlex 24',
    tagline: 'Signature 24/7 Unlimited Access',
    priceMonthly: 65,
    priceDisplay: '$65',
    commitment: 'month-to-month',
    popular: true,
    badge: 'MOST POPULAR',
    accessHours: '24/7 Full Keycard Gym Access',
    features: [
      '24/7 Keycard Gym Access',
      'Month-To-Month (Cancel Anytime)',
      'Train Late Nights, Early Mornings & Holidays',
      'Full Equipment & Olympic Lifting Platforms',
      'Priority Locker Access',
      'DM "FIT" to Get Started Today'
    ],
    ctaText: 'JOIN MORRFLEX 24 ($65/MO)',
  },

  // 2. 12-Month Commitment Plans
  {
    id: 'morr-gold',
    name: 'Morr Gold',
    tagline: 'Year-Round Results & Member Perks',
    priceMonthly: 29.99,
    priceDisplay: '$29.99',
    commitment: '12-month',
    signupFee: '+ Sign-Up Fee',
    accessHours: 'Gym Access During Business Hours',
    features: [
      'Gym Access During Business Hours',
      '1 Guest Pass Per Month',
      'Discounted Class Rates',
      '12-Month Lock-In Commitment',
      'Access to Member Challenges'
    ],
    ctaText: 'LOCK IN MORR GOLD ($29.99/MO)',
  },
  {
    id: 'morr-platinum',
    name: 'Morr Platinum',
    tagline: 'VIP 24/7 Access + Unlimited Guest Passes',
    priceMonthly: 39.99,
    priceDisplay: '$39.99',
    commitment: '12-month',
    badge: 'BEST VALUE',
    signupFee: '+ Sign-Up Fee',
    accessHours: '24/7 Keycard Gym Access',
    features: [
      '24/7 Keycard Gym Access',
      'Unlimited Guest Passes*',
      'Official Merch Discounts',
      'Discounted Class Rates',
      'VIP Member Benefits & Events',
      '12-Month Lock-In Commitment'
    ],
    ctaText: 'GET MORR PLATINUM ($39.99/MO)',
  },
  {
    id: 'swolemates',
    name: 'Swolemates',
    tagline: '24/7 Access for Couples & Training Partners',
    priceMonthly: 49.99,
    priceDisplay: '$49.99 for 2*',
    commitment: '12-month',
    badge: 'FOR 2 LIFTERS',
    signupFee: '+ Sign-Up Fee',
    membersCovered: 'Covers 2 Members',
    accessHours: '24/7 Keycard Gym Access For 2',
    features: [
      '24/7 Gym Access For 2 Members',
      'Unlimited Guest Passes*',
      'Official Merch Discounts For Both',
      'Discounted Class Rates For Both',
      'VIP Benefits For 2',
      '12-Month Lock-In Commitment'
    ],
    ctaText: 'GET SWOLEMATES ($49.99 FOR 2)',
  }
];

// Passes & Single Drops from Linktree
export const PASSES_DATA = [
  {
    id: 'day-pass',
    name: 'Single Day Pass',
    price: 20,
    description: 'Full day open gym access to all free weights, turf, and machines.'
  },
  {
    id: 'class-pass',
    name: 'Single Class Pass',
    price: 25,
    description: 'Drop-in access to any scheduled group class (HIIT, Bootcamp, Yoga).'
  },
  {
    id: 'sweat-saturday',
    name: 'FREE - Sweat It Out Saturdays',
    price: 0,
    description: 'Complimentary high-energy community workout every Saturday morning on Emancipation Ave.'
  }
];

// Classes matching Linktree & Schedule
export const CLASSES_DATA: ClassItem[] = [
  {
    id: 'class-brick-whit-it',
    name: 'BRICK WHIT IT — HIIT CLASS',
    category: 'HIIT',
    time: '6:30 PM & Saturday Mornings',
    duration: '50 Min',
    days: ['Mon', 'Wed', 'Fri', 'Sat'],
    trainer: 'Coach Whitney',
    intensity: 'High',
    spotsLeft: 4,
    description: 'The signature high-octane MORR HIIT experience. Explosive cardio intervals, kettlebells, turf drills, and heavy bodyweight movements.',
    image: '/src/assets/images/morr_group_class_1787007835845.jpg'
  },
  {
    id: 'class-morning-515',
    name: 'MORNING DRILLS (5:15 AM)',
    category: 'Bootcamp',
    time: '5:15 AM Daily',
    duration: '45 Min',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    trainer: 'Coach Marcus',
    intensity: 'High',
    spotsLeft: 6,
    description: 'Early morning grind before the Houston heat. Compound lifting circuits, tire flips, battle ropes, and functional conditioning to start your day with power.',
    image: '/src/assets/images/morr_hero_gym_1787007820351.jpg'
  },
  {
    id: 'class-evening-630',
    name: 'EVENING SWEAT SESSIONS (6:30 PM)',
    category: 'Strength',
    time: '6:30 PM Daily',
    duration: '55 Min',
    days: ['Mon', 'Tue', 'Wed', 'Thu'],
    trainer: 'Coach Dre',
    intensity: 'High',
    spotsLeft: 5,
    description: 'Peak hour electric atmosphere. Heavy compound barbell training, dumbbell complexes, and metabolic conditioning accompanied by live DJ sets.',
    image: '/src/assets/images/morr_community_1787007850135.jpg'
  },
  {
    id: 'class-yoga-ricky',
    name: 'YOGA W/ RICKY',
    category: 'Yoga',
    time: 'Wednesday 6:30 PM & Sunday 9:00 AM',
    duration: '50 Min',
    days: ['Wed', 'Sun'],
    trainer: 'Coach Ricky',
    intensity: 'Restorative',
    spotsLeft: 8,
    description: 'Targeted athletic mobility, hip opener flows, diaphragmatic breathwork, and fascial release designed specifically for lifters and athletes.',
    image: '/src/assets/images/morr_yoga_recovery_1787007863409.jpg'
  },
  {
    id: 'class-sweat-saturday',
    name: 'FREE — SWEAT IT OUT SATURDAYS',
    category: 'Conditioning',
    time: 'Saturday 9:00 AM',
    duration: '60 Min',
    days: ['Sat'],
    trainer: 'The MORR Team',
    intensity: 'High',
    spotsLeft: 12,
    description: 'Houston’s biggest free community workout! Bring your friends, family, and training partners to 2715 Emancipation Ave for turf circuits and music.',
    image: '/src/assets/images/morr_group_class_1787007835845.jpg'
  },
  {
    id: 'class-glutes',
    name: 'GLUTE LAB & LOWER BODY',
    category: 'Glutes',
    time: 'Tuesday & Thursday 5:30 PM',
    duration: '50 Min',
    days: ['Tue', 'Thu'],
    trainer: 'Brianna Cole',
    intensity: 'High',
    spotsLeft: 3,
    description: 'Specialized hip thrust progressions, Romanian deadlifts, cable kicks, and band activation for shape and power.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Coach Marcus',
    role: 'Head Strength Coach & Founder',
    specialty: 'Powerlifting, Strength & Conditioning, 5:15 AM Dawn Patrol',
    experience: '9+ Years Experience',
    bio: 'Dedicated to cultivating physical power and mental discipline. Marcus has trained hundreds of Houston athletes, beginners, and competitive lifters to shatter their PRs.',
    instagram: '@morrfitness',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    certifications: ['CSCS Certified', 'USAW Level 2', 'Precision Nutrition']
  },
  {
    id: 'trainer-whitney',
    name: 'Coach Whitney ("Whit")',
    role: 'Lead HIIT & Conditioning Specialist',
    specialty: 'Brick WHIT it - HIIT, High-Intensity Aerobics, Fat Loss',
    experience: '6+ Years Experience',
    bio: 'Creator of the famed "Brick WHIT it" HIIT class. Bringing contagious energy, fierce rhythms, and transformative interval training to Emancipation Ave.',
    instagram: '@morrfitness',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    certifications: ['NASM-CPT', 'HIIT Master Trainer', 'Athletic Conditioning']
  },
  {
    id: 'trainer-ricky',
    name: 'Coach Ricky',
    role: 'Yoga & Athletic Mobility Coach',
    specialty: 'Yoga w/ Ricky, Fascial Recovery, Breathwork, Joint Longevity',
    experience: '7+ Years Experience',
    bio: 'Guiding lifters through athletic restoration and deep mobility. Ricky connects mindful breathing with active recovery to keep Houston athletes injury-free.',
    instagram: '@morrfitness',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    certifications: ['RYT-500 Yoga Alliance', 'FST Certified', 'Mobility Specialist']
  },
  {
    id: 'trainer-dre',
    name: 'Coach Dre',
    role: 'Evening Strength & Performance Coach',
    specialty: '6:30 PM Evening Sessions, Barbell Complexes, Agility',
    experience: '7+ Years Experience',
    bio: 'Bringing unmatched Houston energy to every evening session. Dre turns high-intensity training into a communal triumph where no one gets left behind.',
    instagram: '@morrfitness',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    certifications: ['ACE-CPT', 'CrossFit Level 1', 'Cardio Kinetics']
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'trans-1',
    name: 'Jordan M.',
    timeframe: '6 Months at MORR FIT',
    goal: 'Fat loss & Lean muscle building',
    result: '-32 lbs & Deadlift increased by 95 lbs',
    quote: 'MORR FIT completely changed my mindset. The coaches push you because they genuinely care, and the community on Emancipation Ave makes you show up every single day.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    program: 'MorrFlex 24 + Brick WHIT it'
  },
  {
    id: 'trans-2',
    name: 'Sierra K.',
    timeframe: '4 Months at MORR FIT',
    goal: 'Glute Hypertrophy & Athletic Endurance',
    result: '+12 lbs Lean Mass & Conquered First Pull-Up',
    quote: 'The energy at 2715 Emancipation Ave is unlike any corporate gym. It feels like family from the moment you walk through the door.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80',
    program: 'Glute Lab + 1-on-1 Coaching'
  },
  {
    id: 'trans-3',
    name: 'Darius T.',
    timeframe: '8 Months at MORR FIT',
    goal: 'Strength PRs & Cardio Recovery',
    result: '405 lb Squat & 500 lb Deadlift Milestone',
    quote: 'Having 24/7 keycard access allows me to lift on my schedule without crowds. The barbells and turf are top tier.',
    image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80',
    program: 'Morr Platinum 24/7'
  }
];

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'merch-1',
    name: 'MORR Heavyweight Boxy Tee',
    category: 'Apparel',
    price: 38,
    image: '/src/assets/images/morr_apparel_merch_1787007876805.jpg',
    badge: 'BESTSELLER',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: '280 GSM vintage wash 100% cotton tee with iconic high-density screenprinted MORR FIT Houston chest logo.'
  },
  {
    id: 'merch-2',
    name: 'MORR Athletic Drop-Shoulder Hoodie',
    category: 'Apparel',
    price: 68,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW DROP',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Heavyweight fleece hoodie built for cold morning warmups and streetwear comfort. Custom orange aglets and MF sleeve print.'
  },
  {
    id: 'merch-3',
    name: 'Official MORR Foam Trucker Cap',
    category: 'Apparel',
    price: 32,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    badge: 'HOT',
    sizes: ['One Size Fits All (Snapback)'],
    description: 'Breathable mesh back with 3D puff embroidered MORR FIT mark. Houston orange on matte black.'
  },
  {
    id: 'merch-4',
    name: 'MORR Matte Black 32oz Insulated Shaker',
    category: 'Accessories',
    price: 26,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    description: 'Triple-wall stainless steel shaker bottle. Keeps pre-workout cold for 24 hours with zero condensation.'
  },
  {
    id: 'merch-5',
    name: 'Heavy-Duty MORR Lifting Straps & Band Set',
    category: 'Gear',
    price: 30,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    badge: 'ESSENTIAL',
    description: 'Reinforced cotton deadlift straps and 3-level glute activation resistance loop bands.'
  },
  {
    id: 'merch-6',
    name: 'MORR Duffle Bag (Emancipation Edition)',
    category: 'Gear',
    price: 65,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    description: 'Water-resistant nylon gym duffle with ventilated shoe compartment, padded shoulder strap, and keycard pocket.'
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'event-runway',
    title: 'MORR FIT Runway Experience',
    date: 'Saturday, Nov 15',
    time: '7:00 PM – 10:00 PM',
    location: 'MORR FIT Facility (2715 Emancipation Ave)',
    category: 'Special Class',
    description: 'The premier Houston fitness fashion & athletic runway showcase. Merch debuts, live DJ sets, local vendors, and community celebration.',
    freeEntry: false,
    image: '/src/assets/images/morr_community_1787007850135.jpg'
  },
  {
    id: 'event-sweat-saturday',
    title: 'FREE — Sweat It Out Saturdays',
    date: 'Every Saturday Morning',
    time: '9:00 AM – 10:00 AM',
    location: '2715 Emancipation Ave, Houston TX',
    category: 'Community',
    description: 'Weekly free open-to-the-public community workout! High-energy circuits, Houston DJ tracks, and community connection.',
    freeEntry: true,
    image: '/src/assets/images/morr_group_class_1787007835845.jpg'
  },
  {
    id: 'event-block-party',
    title: 'Third Ward Community Youth & Fitness Drive',
    date: 'Saturday, Dec 6',
    time: '10:00 AM – 2:00 PM',
    location: '2715 Emancipation Ave, Houston TX',
    category: 'Community',
    description: 'Giving back to Houston Third Ward families. School supplies, free youth movement clinics, healthy food trucks, and hydration stations.',
    freeEntry: true,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Kendra Washington',
    role: 'Third Ward Resident & Member',
    rating: 5,
    quote: 'MORR FIT is the best gym in Houston hands down! The atmosphere is electric, the trainers actually know what they are doing, and having 24/7 keycard access is unmatched.',
    source: 'Google Review'
  },
  {
    id: 'test-2',
    author: 'Marcus Vance',
    role: 'Competitive Powerlifter',
    rating: 5,
    quote: 'Heavy calibrated plates, pristine turf, dumbbells up to 150 lbs, and no gimmicks. If you are serious about getting stronger, this is where you need to be.',
    source: 'Google Review'
  },
  {
    id: 'test-3',
    author: 'Aaliyah Brooks',
    role: 'Morning Class Regular (5:15 AM)',
    rating: 5,
    quote: 'Brick WHIT it and the morning 5:15am sessions transformed my body and my discipline. The community keeps you motivated even on days when you feel exhausted.',
    source: 'Member'
  },
  {
    id: 'test-4',
    author: 'Devon Richardson',
    role: 'Swolemates Plan Member',
    rating: 5,
    quote: 'My partner and I signed up for the Swolemates 24/7 plan. Best decision ever. Great value, awesome merchandise, and genuine Houston pride.',
    source: 'Google Review'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/src/assets/images/morr_hero_gym_1787007820351.jpg',
    likes: '1,420',
    comments: '88'
  },
  {
    id: 'ig-2',
    image: '/src/assets/images/morr_group_class_1787007835845.jpg',
    likes: '2,150',
    comments: '134'
  },
  {
    id: 'ig-3',
    image: '/src/assets/images/morr_community_1787007850135.jpg',
    likes: '1,890',
    comments: '92'
  },
  {
    id: 'ig-4',
    image: '/src/assets/images/morr_yoga_recovery_1787007863409.jpg',
    likes: '940',
    comments: '45'
  },
  {
    id: 'ig-5',
    image: '/src/assets/images/morr_apparel_merch_1787007876805.jpg',
    likes: '3,210',
    comments: '210'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    likes: '1,680',
    comments: '115'
  }
];
