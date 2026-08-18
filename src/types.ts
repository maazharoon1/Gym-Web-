export interface ClassItem {
  id: string;
  name: string;
  category: 'HIIT' | 'Bootcamp' | 'Glutes' | 'Strength' | 'Yoga' | 'Conditioning';
  time: string;
  duration: string;
  days: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun')[];
  trainer: string;
  intensity: 'High' | 'Moderate' | 'Restorative';
  spotsLeft: number;
  description: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceDisplay?: string;
  commitment: 'month-to-month' | '12-month';
  signupFee?: string;
  membersCovered?: string;
  popular?: boolean;
  accessHours: string;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  instagram: string;
  image: string;
  certifications: string[];
}

export interface TransformationStory {
  id: string;
  name: string;
  timeframe: string;
  goal: string;
  result: string;
  quote: string;
  image: string;
  program: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  category: 'Apparel' | 'Accessories' |  'Sets' | 'Shorts';
  subcategory?: string;
  price: number;
  originalPrice?: number;
  image: string;
  galleryImages?: string[];
  colors?: string[];
  badge?: string;
  sizes?: string[];
  description: string;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
}

export interface OrderDetails {
  orderId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  items: CartItem[];
  shippingMethod: 'pickup' | 'standard' | 'express';
  shippingCost: number;
  discountCode?: string;
  discountAmount: number;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: 'card' | 'shoppay' | 'applepay' | 'cash_in_gym';
  createdAt: string;
  estimatedDelivery: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Community' | 'Challenge' | 'Special Class' | 'Social';
  description: string;
  freeEntry: boolean;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
  source: 'Google Review' | 'Instagram' | 'Member';
  avatar?: string;
}

export interface CartItem {
  product: ShopProduct;
  selectedSize?: string;
  quantity: number;
}
