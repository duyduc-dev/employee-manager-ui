import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '~/hooks/redux';
import { createEmployee } from '~/components/ListEmployee';
import Button from '~/components/Button';
import formatDate from '~/utils/formatDate';
import { routes } from '~/utils/constants';

export default function CreateEmployeePage() {
  const [fullName, setFullName] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClickBtnCreate = useCallback(() => {
    if (fullName && dateOfBirth && email && phone && address) {
      dispatch(
        createEmployee({
          fullName,
          dateOfBirth: formatDate(dateOfBirth),
          email,
          address,
          phone,
        })
      );
      navigate(routes.HOMEPAGE, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, dateOfBirth, email, fullName, phone]);

  return (
    <div className="w-full flex flex-row items-center justify-center flex-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 py-5 px-5">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex-1 w-full">
          <label htmlFor="fullName" className="block text-gray-700 text-[14px] font-bold mb-2">
            Full name:
          </label>
          <input
            id="fullName"
            type="text"
            className="shadow appearance-none border rounded-lg w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="sm:ml-5 mt-5 sm:mt-0 flex-1">
          <label htmlFor="dayOfBirth" className="block text-gray-700 text-[14px] font-bold mb-2">
            Date of birth:
          </label>
          <input
            id="dayOfBirth"
            type="date"
            autoComplete="off"
            className="shadow appearance-none border rounded-lg w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full mt-5">
        <div className="flex-1 w-full">
          <label htmlFor="fullName" className="block text-gray-700 text-[14px] font-bold mb-2">
            Email:
          </label>
          <input
            id="fullName"
            type="text"
            className="shadow appearance-none border rounded-lg w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sm:ml-5 mt-5 sm:mt-0 flex-1">
          <label htmlFor="dayOfBirth" className="block text-gray-700 text-[14px] font-bold mb-2">
            Phone:
          </label>
          <input
            id="dayOfBirth"
            type="text"
            autoComplete="off"
            className="shadow appearance-none border rounded-lg w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex w-full mt-5">
        <div className="flex-1">
          <label htmlFor="address" className="block text-gray-700 text-[14px] font-bold mb-2">
            Address:
          </label>
          <textarea
            id="address"
            className="shadow appearance-none border rounded-lg w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex w-full mt-5">
        <div className="flex-1 flex justify-end">
          <Button
            className="bg-primary text-white px-4 py-4 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
            onClick={handleClickBtnCreate}
          >
            Create Employee
          </Button>
        </div>
      </div>
    </div>
  );
}
