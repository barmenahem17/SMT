'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'firstName', label: 'שם פרטי', type: 'text' as const, placeholder: 'הזן שם פרטי' },
  { name: 'lastName', label: 'שם משפחה', type: 'text' as const, placeholder: 'הזן שם משפחה' },
  { name: 'relationship', label: 'סוג קשר', type: 'select' as const, options: ['אמא', 'אבא', 'אחר'] },
  { name: 'phones', label: 'טלפון/ים', type: 'text' as const, placeholder: '050-1234567, 03-1234567' },
  { name: 'address', label: 'כתובת', type: 'text' as const, placeholder: 'רחוב, מספר, עיר' },
];

const advancedFields: any[] = [];

export default function NewGuardianPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף הורה חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי ההורה"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}