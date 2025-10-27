'use client';

import Topbar from '@/components/Topbar';
import TableShell from '@/components/TableShell';
import { useRouter } from 'next/navigation';

const headers = ['שם פרטי', 'שם משפחה', 'מין', 'מוסד', 'מלווה', 'הורים'];

export default function ChildrenPage() {
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/children/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar 
        title="ילדים" 
        actionLabel="הוסף ילד"
        onAction={handleAddNew}
        actionDisabled={false}
      />
      
      <div className="p-6">
        <TableShell 
          headers={headers}
          showSkeleton={true}
          emptyMessage="אין ילדים רשומים במערכת"
        />
      </div>
    </div>
  );
}