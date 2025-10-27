'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'firstName', label: 'שם פרטי', type: 'text' as const, placeholder: 'הזן שם פרטי' },
  { name: 'lastName', label: 'שם משפחה', type: 'text' as const, placeholder: 'הזן שם משפחה' },
  { name: 'phone', label: 'טלפון', type: 'text' as const, placeholder: '050-1234567' },
];

const advancedFields: any[] = [];

export default function NewEscortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף מלווה חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי המלווה"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}