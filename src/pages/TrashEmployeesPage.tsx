import { selectSearchEmployeeTrash } from '~/components/ListEmployee';
import { useAppSelector } from '~/hooks/redux';
import ListEmployee from '~/components/ListEmployee';

export default function TrashEmployeesPage() {
  const selectorListEmployeeTrash = useAppSelector(selectSearchEmployeeTrash);

  return (
    <>
      <ListEmployee data={selectorListEmployeeTrash} />
    </>
  );
}
