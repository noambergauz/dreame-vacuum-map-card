import './Toast.scss';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="toast">
      <span className="toast__message">{message}</span>
      <button className="toast__close" onClick={onClose} aria-label="Close">
        ×
      </button>
    </div>
  );
}
