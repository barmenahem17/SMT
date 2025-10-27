'use client';

import { useState } from 'react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
}

interface CreateFormShellProps {
  title: string;
  basicFields: FormField[];
  advancedFields: FormField[];
  onSave?: () => void;
  onCancel?: () => void;
}

export default function CreateFormShell({
  title,
  basicFields,
  advancedFields,
  onSave,
  onCancel
}: CreateFormShellProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const renderField = (field: FormField) => {
    const baseClasses = "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
    
    switch (field.type) {
      case 'select':
        return (
          <select
            key={field.name}
            className={baseClasses}
            disabled
          >
            <option value="">בחר...</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            key={field.name}
            rows={3}
            className={baseClasses}
            placeholder={field.placeholder}
            disabled
          />
        );
      default:
        return (
          <input
            key={field.name}
            type="text"
            className={baseClasses}
            placeholder={field.placeholder}
            disabled
          />
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>

      <form className="p-6 space-y-6">
        {/* Basic Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {basicFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {renderField(field)}
            </div>
          ))}
        </div>

        {/* Advanced Fields Accordion */}
        {advancedFields.length > 0 && (
          <div className="border border-gray-200 rounded-lg">
            <button
              type="button"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className="w-full px-4 py-3 text-right font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
            >
              <span>שדות מתקדמים</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  isAdvancedOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isAdvancedOpen && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {advancedFields.map((field) => (
                    <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                      <label className="block text-sm font-medium text-gray-700">
                        {field.label}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 space-x-reverse pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onCancel}
            disabled
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ביטול
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שמור
          </button>
        </div>
      </form>
    </div>
  );
}