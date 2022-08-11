import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import type { RootState } from '~/store';
import { selectValueInputSearch } from '~/layouts/components/Header';

// Define a type for the slice state
export interface Employee {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  deleted?: boolean;
}

interface ListEmployeeSlice {
  listEmployee: Employee[];
}

// Define the initial state using that type
const initialState: ListEmployeeSlice = {
  listEmployee: [
    {
      id: uuidv4(),
      fullName: 'Đặng Duy Đức',
      address: 'Q.12, TP.HCM',
      dateOfBirth: '19/08/2003',
      email: 'dangduyducdangduyduc@gmail.com',
      phone: '0946407647',
    },
    {
      id: uuidv4(),
      fullName: 'Lê Nguyễn Hồng Diễm',
      address: 'Gò vấp, TP.HCM',
      dateOfBirth: '01/04/2003',
      email: 'hongdiem@gmail.com',
      phone: '0946229323',
    },
    {
      id: uuidv4(),
      fullName: 'Nguyễn Khải Hoàn Nhẫn',
      address: 'Nhà bè, TP.HCM',
      dateOfBirth: '21/06/2003',
      email: 'nguyenkhaihoannhan@gmail.com',
      phone: '0966829111',
    },
    {
      id: uuidv4(),
      fullName: 'Nguyễn Phước Hào',
      address: 'Cà Mau',
      dateOfBirth: '12/09/2002',
      email: 'haonp@gmail.com',
      phone: '099822122',
      deleted: true,
    },
    {
      id: uuidv4(),
      fullName: 'Nguyễn Phát Tài',
      address: 'Gia Lai',
      dateOfBirth: '12/09/1991',
      email: 'taihello@gmail.com',
      phone: '091182888',
    },
    {
      id: uuidv4(),
      fullName: 'Đinh Thị Thùy Linh',
      address: 'Kiên Giang',
      dateOfBirth: '12/02/1998',
      email: 'dinhthithuylinnh@gmail.com',
      phone: '0999811666',
    },
    {
      id: uuidv4(),
      fullName: 'Hoàng Thị Kim Khanh',
      address: 'Bắc Giang',
      dateOfBirth: '31/01/1998',
      email: 'linhhhqq@gmail.com',
      phone: '0761229339',
    },
    {
      id: uuidv4(),
      fullName: 'Trần Hữu Khánh',
      address: 'TP.HCM',
      dateOfBirth: '04/02/1976',
      email: 'khanh1177@gmail.com',
      phone: '0977117227',
    },
    {
      id: uuidv4(),
      fullName: 'Lý Tự Trọng',
      address: 'Hà Nội',
      dateOfBirth: '11/06/2001',
      email: 'tronghanoi@gmail.com',
      phone: '0999667221',
    },
  ],
};

export const listEmployeeSlice = createSlice({
  name: 'listEmployee',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createEmployee: (state, action: PayloadAction<Employee>) => {
      state.listEmployee.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    addEmployeeTrash: (state, action: PayloadAction<string | undefined>) => {
      state.listEmployee.forEach((employee) => {
        if (employee.id === action.payload) {
          employee.deleted = true;
        }
      });
    },
    removeEmployee: (state, action: PayloadAction<string | undefined>) => {
      state.listEmployee.forEach((employee, indexEmployee) => {
        if (employee.id === action.payload) {
          state.listEmployee.splice(indexEmployee, 1);
        }
      });
    },
    restoreEmployee: (state, action: PayloadAction<string | undefined>) => {
      state.listEmployee.forEach((employee) => {
        if (employee.id === action.payload) {
          employee.deleted = false;
        }
      });
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      state.listEmployee.forEach((employee) => {
        if (employee.id === action.payload.id) {
          const { address, dateOfBirth, email, fullName, phone } = action.payload;
          employee.fullName = fullName;
          employee.address = address;
          employee.dateOfBirth = dateOfBirth;
          employee.email = email;
          employee.phone = phone;
        }
      });
    },
  },
});

export const { addEmployeeTrash, createEmployee, removeEmployee, restoreEmployee, updateEmployee } =
  listEmployeeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectListEmployee = (state: RootState) =>
  state.listEmployeeReducer.listEmployee.filter(({ deleted }) => !deleted);

export const selectSearchListEmployee = createSelector(
  selectListEmployee,
  selectValueInputSearch,
  (listEmployee, valueInput) =>
    listEmployee.filter((employee) => employee.fullName.toLowerCase().includes(valueInput.toLowerCase()))
);

export const selectListEmployeeTrash = (state: RootState) =>
  state.listEmployeeReducer.listEmployee.filter(({ deleted }) => deleted);

export const selectSearchEmployeeTrash = createSelector(
  selectListEmployeeTrash,
  selectValueInputSearch,
  (employeeTrash, valueInputSearch) => {
    return employeeTrash.filter((employee) => employee.fullName.toLowerCase().includes(valueInputSearch.toLowerCase()));
  }
);

export default listEmployeeSlice.reducer;
