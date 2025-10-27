'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['שם', 'סוג', 'אות/קוד', 'טלפון', 'תת־סוג'];

export default function InstitutionsPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/institutions/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="מוסדות" 
        actionLabel="הוסף מוסד"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין מוסדות רשומים במערכת"
        />
      </div>
    </div>
  );
}