import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import { Employee } from './listEmployeeSlice';
import Button from '../Button';
import { useAppDispatch } from '~/hooks/redux';
import { addEmployeeTrash, removeEmployee, restoreEmployee } from './listEmployeeSlice';
import { routes } from '~/utils/constants';
import classNames from '~/utils/classNames';

interface PropsListEmployee {
  data: Employee[];
}

export default function ListEmployee({ data }: PropsListEmployee) {
  const dispatch = useAppDispatch();

  const location = useLocation();

  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <div className="container">
          {data && data.length > 0 ? (
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                {data.map(({ id }) => {
                  return (
                    <tr
                      key={id}
                      className="bg-[#6c6cff] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                    >
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left w-[110px]">Actions</th>
                    </tr>
                  );
                })}
              </thead>
              <tbody className="flex-1 sm:flex-none">
                {data.map(({ id, fullName, email, phone, deleted }, index) => (
                  <tr
                    key={id}
                    className={classNames(
                      'flex flex-col flex-no wrap sm:table-row border border-gray-50 sm:border-none mb-2 sm:mb-0 mr-2 sm:mr-0 hover:bg-gray-100 cursor-pointer',
                      (index + 1) % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    )}
                  >
                    <td className="border border-gray-50 p-3">{fullName}</td>
                    <td className="border border-gray-50 p-3 truncate">{email}</td>
                    <td className="border border-gray-50 p-3 truncate">{phone}</td>
                    <td className="border border-gray-50 p-3 ">
                      <div className="flex items-center justify-start sm:justify-center h-full">
                        {!deleted ? (
                          <>
                            <Button
                              to={`${routes.DETAIL_EMPLOYEE}/${id}`}
                              className="px-2 text-blue-300 hover:text-primary transition transition-700 ease-linear"
                            >
                              <FontAwesomeIcon icon={solid.faUser} />
                            </Button>
                            <Button
                              className="px-2 ml-5 text-blue-300 hover:text-primary transition transition-700 ease-linear"
                              to={`${routes.EDIT_EMPLOYEE}/${id}`}
                            >
                              <FontAwesomeIcon icon={solid.faPen} />
                            </Button>
                            <Button
                              className="px-2 ml-5 text-red-300 hover:text-red-500 transition transition-700 ease-linear"
                              onClick={() => dispatch(addEmployeeTrash(id))}
                            >
                              <FontAwesomeIcon icon={solid.faTrash} />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              className="px-2 text-blue-300 hover:text-primary transition transition-700 ease-linear"
                              onClick={() => dispatch(restoreEmployee(id))}
                            >
                              <FontAwesomeIcon icon={solid.faTrashCanArrowUp} />
                            </Button>
                            <Button
                              className="px-2 ml-5 text-[18px] text-red-300 hover:text-red-500 transition transition-700 ease-linear"
                              onClick={() => dispatch(removeEmployee(id))}
                            >
                              <FontAwesomeIcon icon={solid.faXmark} />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full min-h-[100px] flex flex-row items-center justify-center flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              No Employee.
              {location.pathname === routes.HOMEPAGE && (
                <Button to={routes.CREATE_EMPLOYEE} className="ml-2 text-primary hover:underline">
                  Create Employee
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
