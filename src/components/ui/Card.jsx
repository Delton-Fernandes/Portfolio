export function Card({ children, className, onDelete }) {
  return (
    <div className={`border border-gray-200 rounded-lg shadow-lg p-4 bg-white ${className}`}>
      {children}
      {onDelete && (
        <button
          onClick={onDelete}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      )}
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
