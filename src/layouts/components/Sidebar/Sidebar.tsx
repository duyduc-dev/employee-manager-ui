import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '~/utils/constants';
import classNames from '~/utils/classNames';
import { useAppSelector } from '~/hooks/redux';
import { selectListEmployeeTrash } from '~/components/ListEmployee';

export default function Sidebar() {
  const selectorListEmployeeTrash = useAppSelector(selectListEmployeeTrash);

  const NavLinkActive = ({ isActive }: { isActive: boolean }) => {
    return classNames(
      'flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-[14px] h-[40px]',
      isActive ? 'bg-[#6c6cff] text-[#fff] hover:bg-[#6c6cffe5]' : ''
    );
  };

  const classNameNavItem = classNames('mt-2 sm:mt-0 ml-5');

  return (
    <div className="sm:w-full min-w-[100px] mx-5 sm:mx-0 sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px]">
      <aside className="w-full" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded-[8px] dark:bg-gray-800">
          <ul className="space-y-2 flex justify-center items-center  sm:block">
            <li className={classNameNavItem}>
              <NavLink to={routes.HOMEPAGE} className={NavLinkActive}>
                <FontAwesomeIcon icon={solid.faHouseChimney} />
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li className={classNameNavItem}>
              <NavLink to={routes.CREATE_EMPLOYEE} className={NavLinkActive}>
                <FontAwesomeIcon icon={solid.faUserPlus} />
                <span className="flex-1 ml-3 whitespace-nowrap">Create Employee</span>
              </NavLink>
            </li>
            <li className={classNameNavItem}>
              <NavLink to={routes.TRASH_EMPLOYEE} className={NavLinkActive}>
                <FontAwesomeIcon icon={solid.faTrash} />
                <span className="flex-1 ml-3 whitespace-nowrap">Trash</span>
                <span className=" justify-center p-4 text-[13px] ml-3 w-4 h-4 font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200 flex items-center">
                  {selectorListEmployeeTrash.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
