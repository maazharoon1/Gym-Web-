import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  description: string;
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="pointer-events-auto bg-[#141416] border border-[#27272A] p-4 rounded-xl shadow-2xl flex items-start gap-3 text-white backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#FF5500]" />
            
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-[#FF5500]" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-neutral-300" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <h4 className="text-sm font-semibold text-white tracking-wide">{toast.title}</h4>
              <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">{toast.description}</p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-neutral-500 hover:text-white p-1 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
