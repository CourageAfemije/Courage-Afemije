export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-container px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
