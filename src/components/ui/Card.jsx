export function Card({ children, className }) {
    return (
      <div className={`border border-gray-200 rounded-lg shadow-lg p-4 bg-white ${className}`}>
        {children}
      </div>
    );
  }

export function CardContent({ children, className }) {
    return (
        <div className={`p-4 ${className}`}>
        {children}
        </div>
    );
}

  