import React, { useEffect, useState } from 'react';
import ListEmployee from '~/components/ListEmployee';
import { useAppSelector } from '~/hooks/redux';
import { selectSearchListEmployee } from '~/components/ListEmployee';

export default function HomePage() {
  const selectorListEmployee = useAppSelector(selectSearchListEmployee);

  return (
    <>
      <ListEmployee data={selectorListEmployee} />
    </>
  );
}
