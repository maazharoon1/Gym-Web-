import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { QuickActions } from './components/quick-actions/QuickActions';
import { WhyMorr } from './components/why-morr/WhyMorr';
import { FreeTrialSection } from './components/free-trial/FreeTrialSection';
import { MembershipsSection } from './components/memberships/MembershipsSection';
import { ClassesSchedule } from './components/classes/ClassesSchedule';
import { ResultsSection } from './components/results/ResultsSection';
import { CommunitySection } from './components/community/CommunitySection';
import { PersonalTrainingSection } from './components/personal-training/PersonalTrainingSection';
import { TrainersSection } from './components/trainers/TrainersSection';
import { OnlineMorrSection } from './components/online/OnlineMorrSection';
import { YogaRecoverySection } from './components/yoga/YogaRecoverySection';
import { ShopSection } from './components/shop/ShopSection';
import { EventsSection } from './components/events/EventsSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { InstagramSection } from './components/instagram/InstagramSection';
import { LeadMagnetSection } from './components/lead-magnet/LeadMagnetSection';
import { LocationSection } from './components/location/LocationSection';
import { FinalCta } from './components/cta/FinalCta';
import { Footer } from './components/footer/Footer';
import { BookingModal, ModalMode } from './components/modals/BookingModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { ToastNotification, ToastMessage } from './components/ui/ToastNotification';
import { FloatingActionBar } from './components/ui/FloatingActionBar';
import { ClassItem, MembershipPlan, ShopProduct, Trainer, CartItem } from './types';

export default function App() {
  // Modal states
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);

  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Toast feedback state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (toast: { title: string; description: string; type?: 'success' | 'info' | 'error' }) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      id,
      title: toast.title,
      description: toast.description,
      type: toast.type || 'success'
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Booking Modal triggers
  const handleOpenBooking = (mode: 'free-pass' | 'membership' | 'class-booking' | 'pt-consultation') => {
    setModalMode(mode);
  };

  const handleBookClass = (classItem: ClassItem) => {
    setSelectedClass(classItem);
    setModalMode('class-booking');
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setModalMode('membership');
  };

  const handleComparePlans = () => {
    setModalMode('compare-plans');
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    setModalMode('pt-consultation');
    addToast({
      title: `Selected Coach: ${trainer.name}`,
      description: 'Fill out your fitness goals to schedule your 1-on-1 session.',
      type: 'info'
    });
  };

  const handleSelectOnlineProduct = (productName: string, price: string) => {
    setModalMode('membership');
    addToast({
      title: `${productName} (${price})`,
      description: 'Complete registration to activate your instant digital workout portal access.',
      type: 'info'
    });
  };

  const handleRSVPEvent = (eventTitle: string) => {
    addToast({
      title: 'Spot Reserved!',
      description: `You are on the guestlist for "${eventTitle}". See you on Emancipation Ave!`
    });
  };

  // Cart operations
  const handleAddToCart = (product: ShopProduct, size?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, selectedSize: size, quantity: 1 }];
      }
    });

    setIsCartOpen(true);
    addToast({
      title: 'Added to MORR Cart',
      description: `${product.name} ${size ? `(${size})` : ''} added.`
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCartItems([]);
    addToast({
      title: 'Order Placed!',
      description: 'Your MORR apparel is confirmed for pickup or priority shipping.'
    });
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#FF6321] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 6 Quick Action Cards */}
        <QuickActions onOpenBooking={handleOpenBooking} onOpenCart={() => setIsCartOpen(true)} />

        {/* Why MORR FIT - 4 Pillars */}
        <WhyMorr />

        {/* Free First Workout Pass Conversion Banner */}
        <FreeTrialSection onOpenFreePass={() => handleOpenBooking('free-pass')} />

        {/* Memberships & Verified Pricing */}
        <MembershipsSection
          onSelectPlan={handleSelectPlan}
          onComparePlans={handleComparePlans}
        />

        {/* Interactive Group Classes Schedule & Filters */}
        <ClassesSchedule onBookClass={handleBookClass} />

        {/* Transformations & Real Results */}
        <ResultsSection onOpenBooking={handleOpenBooking} />

        {/* Community & Houston Culture Masonry */}
        <CommunitySection />

        {/* 1-on-1 Personal Training */}
        <PersonalTrainingSection onBookConsultation={() => handleOpenBooking('pt-consultation')} />

        {/* Trainers & Coaches Roster */}
        <TrainersSection onSelectTrainer={handleSelectTrainer} />

        {/* Online Programs & Challenges */}
        <OnlineMorrSection onSelectProduct={handleSelectOnlineProduct} />

        {/* Yoga & Active Recovery */}
        <YogaRecoverySection onBookYoga={() => handleOpenBooking('class-booking')} />

        {/* Shop MORR Apparel & Gear */}
        <ShopSection onAddToCart={handleAddToCart} />

        {/* Member Testimonials & 5-Star Reviews */}
        <TestimonialsSection />

        {/* Houston Community Events Calendar */}
        <EventsSection onRSVP={handleRSVPEvent} />

        {/* Instagram Movement Feed */}
        <InstagramSection />

        {/* Lead Magnet: Free 7-Day Workout & Nutrition Plan PDF */}
        <LeadMagnetSection onSuccess={addToast} />

        {/* Location, 2715 Emancipation Ave Map, Operating Hours & Contact Form */}
        <LocationSection onSendMessage={addToast} />

        {/* Final Conversion Section */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* Comprehensive Houston Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Mobile Bottom Conversion Floating Bar */}
      <FloatingActionBar onOpenBooking={handleOpenBooking} />

      {/* Reusable Booking & Plan Modal */}
      <BookingModal
        mode={modalMode}
        selectedClass={selectedClass}
        selectedPlan={selectedPlan}
        onClose={() => {
          setModalMode(null);
          setSelectedClass(null);
          setSelectedPlan(null);
        }}
        onSuccess={addToast}
      />

      {/* Shop Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Floating Action Notifications */}
      <ToastNotification toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
