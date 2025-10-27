'use client';

interface TopbarProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
}

export default function Topbar({ 
  title, 
  actionLabel = 'הוסף', 
  onAction, 
  actionDisabled = true 
}: TopbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <div>
          <button
            onClick={onAction}
            disabled={actionDisabled}
            className={`
              px-4 py-2 rounded-lg font-medium transition-colors duration-200
              ${actionDisabled 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }
            `}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}