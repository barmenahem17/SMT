'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['שם פרטי', 'שם משפחה', 'טלפון', 'ילדים משויכים'];

export default function EscortsPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/escorts/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="מלווים" 
        actionLabel="הוסף מלווה"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין מלווים רשומים במערכת"
        />
      </div>
    </div>
  );
}