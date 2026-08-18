import { ShopProduct } from '../types';

export const SHOPIFY_STORE_INFO = {
  name: 'MORR FIT HOUSTON STORE',
  handle: 'morr-fit-houston.myshopify.com',
  url: 'https://morr-fit-houston.myshopify.com',
  currency: 'USD',
  pickupAddress: '2715 Emancipation Ave, Houston, TX 77004',
  pickupNotice: 'Free same-day pickup available at MORR FIT Front Desk during staffed hours.',
  supportEmail: 'orders@morrfithouston.com',
  shippingPolicy: 'Free shipping on orders over $75 within the USA. Standard shipping $4.99.',
  announcement: '🔥 OFFICIAL MORR FIT STORE IS LIVE — USE CODE "MORR10" FOR 10% OFF YOUR ORDER'
};

export const SHOPIFY_CATEGORIES = [
  'All Products',
  'Women’s Activewear',
  'Shorts & Bottoms',
  'Hoodies & Outerwear',
  'Gear & Accessories'
];

export const SHOPIFY_ALL_PRODUCTS: ShopProduct[] = [
  // 1. Body by Morr Fit Crop
  {
    id: 'shopify-body-crop',
    name: 'Body by Morr Fit Crop',
    category: 'Sets',
    subcategory: 'Women’s Activewear',
    price: 54.99,
    originalPrice: 65.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/8213DBB3-3DAC-4E3B-A3E5-D8365C50912C.jpg?v=1759268104&width=1100',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/8213DBB3-3DAC-4E3B-A3E5-D8365C50912C.jpg?v=1759268104&width=1100'
    ],
    badge: 'BESTSELLER',
    colors: ['Jet Black', 'Houston Clay'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    description: 'The signature Body by Morr Fit performance crop top. Engineered with ultra-soft 4-way compression fabric, supportive under-bust elastic band, and premium breathable stretch.'
  },

  // 2. High-waist scrunch shorts
  {
    id: 'shopify-scrunch-shorts',
    name: 'High-waist scrunch shorts',
    category: 'Shorts',
    subcategory: 'Shorts & Bottoms',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/36383A1F-860E-44DD-99EE-D4E209B2263F.png?v=1779816295&width=1100',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/36383A1F-860E-44DD-99EE-D4E209B2263F.png?v=1779816295&width=1100'
    ],
    badge: 'COMMUNITY FAVORITE',
    colors: ['Black', 'Olive', 'Terracotta'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 5.0,
    reviewCount: 92,
    inStock: true,
    description: 'High-waisted compression contour scrunch booty shorts. Form-fitting contouring seam, squat-proof non-sheer knit, and anti-slip waistband.'
  },

  // 3. Jacquard Elastic Band Leggings
  {
    id: 'shopify-jacquard-leggings',
    name: 'Jacquard Elastic Band Leggings',
    category: 'Apparel',
    subcategory: 'Women’s Activewear',
    price: 44.99,
    originalPrice: 55.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/501C0826-06FD-4DBE-AB29-A9224807A4AD.png?v=1759265078&width=533',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/501C0826-06FD-4DBE-AB29-A9224807A4AD.png?v=1759265078&width=533'
    ],
    badge: 'NEW DROP',
    colors: ['Charcoal Black', 'Slate Grey'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    description: 'Sculpting high-rise leggings featuring the custom jacquard MORR FIT branded elastic waistband. Maximum support and flexibility for training.'
  },

  // 4. Morr Athletic Men Shorts
  {
    id: 'shopify-athletic-men-shorts',
    name: 'Morr Athletic Men Shorts',
    category: 'Shorts',
    subcategory: 'Shorts & Bottoms',
    price: 34.99,
    originalPrice: 45.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/image_d2fef37a-c956-4b29-93ef-4cece94d2cb8.heic?v=1689040919&width=1100',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/image_d2fef37a-c956-4b29-93ef-4cece94d2cb8.heic?v=1689040919&width=1100'
    ],
    badge: 'HOT SELLER',
    colors: ['Matte Black', 'Heather Grey'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    rating: 4.9,
    reviewCount: 65,
    inStock: true,
    description: 'Lightweight performance training shorts designed for heavy squats, Olympic lifting, and turf sprint drills. Breathable moisture-wicking fabric.'
  },

  // 5. MorrFit Men Hoodies
  {
    id: 'shopify-men-hoodie',
    name: 'MorrFit Men Hoodies',
    category: 'Apparel',
    subcategory: 'Hoodies & Outerwear',
    price: 64.99,
    originalPrice: 75.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-4039.png?v=1771998884&width=533',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-4039.png?v=1771998884&width=533'
    ],
    badge: 'PREMIUM HEAVYWEIGHT',
    colors: ['Matte Black', 'Vintage Washed Grey'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    rating: 5.0,
    reviewCount: 83,
    inStock: true,
    description: 'Heavyweight athletic drop-shoulder fleece hoodie. Double-lined hood, ribbed cuffs, and high-density MORR FIT Houston chest embroidery.'
  },

  // 6. Morr Body suits
  {
    id: 'shopify-body-suit',
    name: 'Morr Body suits',
    category: 'Apparel',
    subcategory: 'Women’s Activewear',
    price: 34.99,
    originalPrice: 45.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/6908CC3C-7C28-46B9-B4A2-4545024694A4.jpg?v=1696036257&width=1100',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/6908CC3C-7C28-46B9-B4A2-4545024694A4.jpg?v=1696036257&width=1100'
    ],
    badge: 'VERSATILE FIT',
    colors: ['Jet Black', 'Chocolate Brown'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.9,
    reviewCount: 42,
    inStock: true,
    description: 'Seamless all-in-one athletic bodysuit. Perfect for gym sessions, Pilates, yoga flows, or layered streetwear styling.'
  },

  // 7. Sports Bra
  {
    id: 'shopify-sports-bra',
    name: 'Sports Bra',
    category: 'Apparel',
    subcategory: 'Women’s Activewear',
    price: 24.99,
    originalPrice: 32.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-2661.png?v=1779818270&width=533',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-2661.png?v=1779818270&width=533'
    ],
    badge: 'MEDIUM IMPACT',
    colors: ['Black', 'Houston Orange'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    description: 'Supportive medium-to-high impact athletic sports bra with removable padding and sweat-wicking crisscross rear straps.'
  },

  // 8. Morr Bands
  {
    id: 'shopify-morr-bands',
    name: 'Morr Bands',
    category: 'Gear',
    subcategory: 'Gear & Accessories',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/image.heic?v=1688665299&width=1100',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/image.heic?v=1688665299&width=1100'
    ],
    badge: 'ESSENTIAL GEAR',
    colors: ['Black & Orange'],
    sizes: ['Light, Medium, Heavy (Pack)'],
    rating: 5.0,
    reviewCount: 110,
    inStock: true,
    description: 'Non-slip premium fabric resistance booty & glute activation bands. Rated for heavy hip thrusts, squats, and warmup mobility drills.'
  },

  // 9. Morr Fit Recovery Slides
  {
    id: 'shopify-recovery-slides',
    name: 'Morr Fit Recovery Slides',
    category: 'Accessories',
    subcategory: 'Gear & Accessories',
    price: 24.99,
    originalPrice: 35.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-1793.png?v=1777322201&width=533',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/IMG-1793.png?v=1777322201&width=533'
    ],
    badge: 'COMFORT ESSENTIAL',
    colors: ['Matte Black'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    description: 'Ergonomic EVA arch-support recovery slide sandals. Ultra-cushioned footbed for post-workout relief and everyday gym comfort.'
  },

  // 10. MF Performance Crew Socks
  {
    id: 'shopify-performance-socks',
    name: 'MF Performance Crew Socks',
    category: 'Accessories',
    subcategory: 'Gear & Accessories',
    price: 11.99,
    originalPrice: 16.00,
    image: 'https://morr-fit-houston.myshopify.com/cdn/shop/files/5F1DF446-0233-451F-AABE-3245705557BF.jpg?v=1776956085',
    galleryImages: [
      'https://morr-fit-houston.myshopify.com/cdn/shop/files/5F1DF446-0233-451F-AABE-3245705557BF.jpg?v=1776956085'
    ],
    badge: '3-PACK',
    colors: ['White with Black MF Logo', 'All Black'],
    sizes: ['Standard Unisex (US 6-12)'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    description: 'Cushioned athletic crew socks with arch compression band and reinforced heel/toe. Jacquard MF monogram embroidery.'
  }
];

export const PROMO_CODES = [
  { code: 'MORR10', discountPercent: 10, description: '10% Off Your Entire Order' },
  { code: 'EMANCIPATION', discountPercent: 15, description: '15% Off Houston Community Discount' },
  { code: 'SWOLE20', discountPercent: 20, description: '20% Off Orders Over $100' },
  { code: 'FREESHIP', discountPercent: 0, freeShipping: true, description: 'Free Standard USA Shipping' }
];
