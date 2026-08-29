import { useBulkCreateEmployeesMutation } from '@/core/store/features/employees/employeesApi';
import { EmployeeSchema, EMP_LEAF_FIELDS } from '@/core/schemas/employeeSchema';
import { BulkImportModal } from '@/features/platform/bulkImportModal/BulkImportModal';


export function EmployeeImportModal(props) {
  const [bulkCreate] = useBulkCreateEmployeesMutation();

  const handleImport = async (rows) => bulkCreate(rows).unwrap();

  return (
    <BulkImportModal
      {...props}
      onImport={handleImport}
      schema={EmployeeSchema}
      entityLabel="employees"
      leafFields={EMP_LEAF_FIELDS}
    />
  );
}
