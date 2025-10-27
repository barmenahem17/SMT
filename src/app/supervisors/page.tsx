'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['שם פרטי', 'שם משפחה', 'גוף', 'נייד', 'אימייל'];

export default function SupervisorsPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/supervisors/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="מפקחים" 
        actionLabel="הוסף מפקח"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין מפקחים רשומים במערכת"
        />
      </div>
    </div>
  );
}