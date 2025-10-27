'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'date', label: 'תאריך', type: 'text' as const, placeholder: '01/01/2024' },
  { name: 'timeWindow', label: 'חלון', type: 'select' as const, options: ['בוקר', 'צהריים'] },
  { name: 'child', label: 'ילד', type: 'text' as const, placeholder: 'שם הילד' },
  { name: 'driver', label: 'נהג', type: 'text' as const, placeholder: 'שם הנהג' },
  { name: 'pickupTime', label: 'שעות איסוף', type: 'text' as const, placeholder: '08:00' },
  { name: 'dropoffTime', label: 'שעות הורדה', type: 'text' as const, placeholder: '16:00' },
  { name: 'pickupLocation', label: 'נק׳ איסוף', type: 'text' as const, placeholder: 'כתובת איסוף' },
  { name: 'dropoffLocation', label: 'נק׳ הורדה', type: 'text' as const, placeholder: 'כתובת הורדה' },
  { name: 'status', label: 'סטטוס', type: 'select' as const, options: ['מתוכנן', 'בוצע', 'בוטל'] },
];

const advancedFields = [
  { name: 'notes', label: 'הערות', type: 'textarea' as const, placeholder: 'הערות נוספות...' },
];

export default function NewAssignmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף שיבוץ חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי השיבוץ"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}