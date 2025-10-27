'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['שם פרטי', 'שם משפחה', 'סוג קשר', 'טלפונים'];

export default function GuardiansPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/guardians/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="הורים" 
        actionLabel="הוסף הורה"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין הורים רשומים במערכת"
        />
      </div>
    </div>
  );
}