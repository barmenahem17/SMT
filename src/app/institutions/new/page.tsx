'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'name', label: 'שם', type: 'text' as const, placeholder: 'שם המוסד' },
  { name: 'type', label: 'סוג', type: 'select' as const, options: ['בית ספר', 'גן', 'אחר'] },
  { name: 'code', label: 'אות/קוד', type: 'text' as const, placeholder: 'A1, ב2' },
  { name: 'address', label: 'כתובת', type: 'text' as const, placeholder: 'רחוב, מספר, עיר' },
  { name: 'phone', label: 'טלפון', type: 'text' as const, placeholder: '03-1234567' },
  { name: 'subType', label: 'תת־סוג', type: 'text' as const, placeholder: 'יסודי, תיכון, וכו׳' },
];

const advancedFields: any[] = [];

export default function NewInstitutionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף מוסד חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי המוסד"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}