'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['תאריך', 'חלון', 'ילד', 'נהג', 'איסוף→הורדה', 'סטטוס'];

export default function AssignmentsPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/assignments/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="שיבוצים" 
        actionLabel="הוסף שיבוץ"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין שיבוצים במערכת"
        />
      </div>
    </div>
  );
}