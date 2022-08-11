import React, { ChangeEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import Button from '~/components/Button';
import { routes } from '~/utils/constants';
import { useAppDispatch } from '~/hooks/redux';
import { inputChange } from './headerSlice';
import useDebounce from '~/hooks/useDebounce';

export default function Header() {
  const [inputSearch, setInputSearch] = React.useState('');

  const debounce = useDebounce<string>(inputSearch, 800);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(inputChange(debounce));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const handleValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  const location = useLocation();

  return (
    <div className="h-header border border-b-[#ccc] flex items-center sm:shadow-sm ">
      <div className="flex items-center justify-between max-w-[1200px] w-full mx-auto px-5">
        <Button
          to={routes.HOMEPAGE}
          className="h-[40px] text-[35px] text-[#6c6cff] flex items-center mr-5"
        >
          <FontAwesomeIcon icon={solid.faPeopleRoof} />
        </Button>
        <div className="max-w-[500px] w-full">
          {location.pathname !== routes.CREATE_EMPLOYEE && (
            <input
              className="shadow appearance-none border rounded-[50px] w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
              autoComplete="off"
              spellCheck="false"
              value={inputSearch}
              onChange={handleValueInputChange}
            />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
