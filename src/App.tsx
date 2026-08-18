import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HomePage } from './components/home/HomePage';
import { ClassesPage } from './components/classes/ClassesPage';
import { TrainingPage } from './components/training/TrainingPage';
import { ShopPage } from './components/shop/ShopPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { Footer } from './components/footer/Footer';
import { BookingModal, ModalMode } from './components/modals/BookingModal';
import { CartDrawer } from './components/modals/CartDrawer';
import { ToastNotification, ToastMessage } from './components/ui/ToastNotification';
import { FloatingActionBar } from './components/ui/FloatingActionBar';
import { ClassItem, MembershipPlan, ShopProduct, Trainer, CartItem, OrderDetails } from './types';

export type ActivePageView = 'home' | 'classes' | 'training' | 'store' | 'checkout';

export default function App() {
  // Page View state: 'home' | 'classes' | 'training' | 'store' | 'checkout'
  const [activeView, setActiveView] = useState<ActivePageView>('home');

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

  const handleBuyNow = (product: ShopProduct, size?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIdx > -1) {
        return prev;
      } else {
        return [...prev, { product, selectedSize: size, quantity: 1 }];
      }
    });
    setIsCartOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setActiveView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCompleted = (order: OrderDetails) => {
    setCartItems([]);
    addToast({
      title: `Order #${order.orderId} Confirmed!`,
      description: `Receipt sent to ${order.customer.email}. Pickup available at 2715 Emancipation Ave.`,
      type: 'success'
    });
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Navigation router helper
  const navigateTo = (view: ActivePageView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Dedicated Checkout Page
  if (activeView === 'checkout') {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#FF6321] selection:text-black">
        <CheckoutPage
          items={cartItems}
          onBackToStore={() => navigateTo('store')}
          onOrderCompleted={handleOrderCompleted}
          onUpdateQuantity={handleUpdateQuantity}
        />
        <ToastNotification toasts={toasts} onDismiss={removeToast} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#FF6321] selection:text-black">
      {/* Universal Sticky Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateHome={() => navigateTo('home')}
        onNavigateClasses={() => navigateTo('classes')}
        onNavigateTraining={() => navigateTo('training')}
        onNavigateStore={() => navigateTo('store')}
        activeView={activeView}
        cartCount={totalCartCount}
      />

      {/* Main Page View Switching */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onBookClass={handleBookClass}
            onSelectPlan={handleSelectPlan}
            onComparePlans={handleComparePlans}
            onAddToCart={handleAddToCart}
            onNavigateClasses={() => navigateTo('classes')}
            onNavigateTraining={() => navigateTo('training')}
            onNavigateStore={() => navigateTo('store')}
            onRSVPEvent={handleRSVPEvent}
            onLeadMagnetSuccess={addToast}
            onLocationSendMessage={addToast}
          />
        )}

        {activeView === 'classes' && (
          <ClassesPage
            onBookClass={handleBookClass}
            onOpenBooking={handleOpenBooking}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {activeView === 'training' && (
          <TrainingPage
            onSelectTrainer={handleSelectTrainer}
            onOpenBooking={handleOpenBooking}
            onSelectOnlineProduct={handleSelectOnlineProduct}
          />
        )}

        {activeView === 'store' && (
          <ShopPage
            onBackToHome={() => navigateTo('home')}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onOpenCart={() => setIsCartOpen(true)}
            cartCount={totalCartCount}
          />
        )}
      </main>

      {/* Unified Houston Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigateHome={() => navigateTo('home')}
        onNavigateClasses={() => navigateTo('classes')}
        onNavigateTraining={() => navigateTo('training')}
        onNavigateStore={() => navigateTo('store')}
      />

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
        onCheckout={handleProceedToCheckout}
      />

      {/* Floating Action Notifications */}
      <ToastNotification toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
