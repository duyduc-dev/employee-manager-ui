import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { useAppSelector } from '~/hooks/redux';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { routes } from '~/utils/constants';

export default function DetailEmployee() {
  const { employeeId } = useParams();
  const employeeEdit = useAppSelector((state) =>
    state.listEmployeeReducer.listEmployee.find((employee) => employee.id === employeeId)
  );

  return (
    <div className="border-4 rounded-lg p-6 border-primary">
      <div>
        <p>
          <span className="text-[14px] font-bold text-primary mr-2">Full name:</span>
          <span>{employeeEdit?.fullName}</span>
        </p>
      </div>
      <div>
        <p>
          <span className="text-[14px] font-bold text-primary mr-2">Date of birth:</span>
          <span>{employeeEdit?.dateOfBirth}</span>
        </p>
      </div>
      <div>
        <p>
          <span className="text-[14px] font-bold text-primary mr-2">Email:</span>
          <span>{employeeEdit?.email}</span>
        </p>
      </div>
      <div>
        <p>
          <span className="text-[14px] font-bold text-primary mr-2">Phone:</span>
          <span>{employeeEdit?.phone}</span>
        </p>
      </div>
      <div className="flex">
        <p className="flex-1">
          <span className="text-[14px] font-bold text-primary mr-2">Address:</span>
          <span>{employeeEdit?.address}</span>
        </p>
        <Button
          className="bg-primary text-white h-[40px] px-3 flex items-center justify-center rounded-lg hover:opacity-[0.9] transition"
          to={`${routes.EDIT_EMPLOYEE}/${employeeId}`}
        >
          <FontAwesomeIcon icon={solid.faPen} />
          <span className="ml-3">Edit</span>
        </Button>
      </div>
    </div>
  );
}
