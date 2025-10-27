'use client';

import Topbar from '@/components/Topbar';
import CreateFormShell from '@/components/CreateFormShell';

const basicFields = [
  { name: 'firstName', label: 'שם פרטי', type: 'text' as const, placeholder: 'הזן שם פרטי' },
  { name: 'lastName', label: 'שם משפחה', type: 'text' as const, placeholder: 'הזן שם משפחה' },
  { name: 'gender', label: 'מין', type: 'select' as const, options: ['זכר', 'נקבה', 'אחר'] },
  { name: 'phone', label: 'טלפון', type: 'text' as const, placeholder: '050-1234567' },
  { name: 'address', label: 'כתובת מגורים', type: 'text' as const, placeholder: 'רחוב, מספר, עיר' },
  { name: 'institution', label: 'מוסד', type: 'text' as const, placeholder: 'שם המוסד' },
  { name: 'escort', label: 'מלווה', type: 'text' as const, placeholder: 'שם המלווה' },
  { name: 'guardians', label: 'הורים', type: 'text' as const, placeholder: 'שמות ההורים' },
];

const advancedFields = [
  { name: 'birthYear', label: 'שנת לידה', type: 'text' as const, placeholder: '2010' },
  { name: 'limitedNotes', label: 'הערות מוגבלות', type: 'textarea' as const, placeholder: 'הערות כלליות...' },
  { name: 'sensitiveNotes', label: 'הערות רגישות', type: 'textarea' as const, placeholder: 'הערות רגישות...' },
];

export default function NewChildPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הוסף ילד חדש" 
        actionLabel="שמור"
        actionDisabled={true}
      />
      
      <div className="p-6">
        <CreateFormShell
          title="פרטי הילד"
          basicFields={basicFields}
          advancedFields={advancedFields}
        />
      </div>
    </div>
  );
}