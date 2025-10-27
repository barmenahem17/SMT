'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'firstName', label: 'שם פרטי', type: 'text' as const, placeholder: 'הזן שם פרטי' },
  { name: 'lastName', label: 'שם משפחה', type: 'text' as const, placeholder: 'הזן שם משפחה' },
  { name: 'body', label: 'גוף', type: 'select' as const, options: ['עיריית תל אביב', 'רווחה', 'יובל חינוך', 'אחר'] },
  { name: 'mobile', label: 'נייד', type: 'text' as const, placeholder: '050-1234567' },
  { name: 'officePhone', label: 'טלפון משרד', type: 'text' as const, placeholder: '03-1234567' },
  { name: 'email', label: 'אימייל', type: 'text' as const, placeholder: 'name@example.com' },
  { name: 'area', label: 'אזור', type: 'text' as const, placeholder: 'צפון, דרום, מרכז' },
];

const advancedFields: any[] = [];

export default function NewSupervisorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף מפקח חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי המפקח"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}