import MainLayout, { PropsMainLayout } from '~/layouts/MainLayout';
import { CreateEmployeePage, HomePage } from '~/pages';
import { routes } from '~/utils/constants';
import EditEmployeePage from '../pages/EditEmployeePage';
import TrashEmployeesPage from '../pages/TrashEmployeesPage';
import DetailEmployee from '../pages/DetailEmployee';

interface PublicRoute {
  route: string;
  page: () => JSX.Element;
  layout: (props: PropsMainLayout) => JSX.Element;
}

export const PUBLIC_ROUTES: PublicRoute[] = [
  {
    route: routes.HOMEPAGE,
    page: HomePage,
    layout: MainLayout,
  },
  {
    route: routes.CREATE_EMPLOYEE,
    page: CreateEmployeePage,
    layout: MainLayout,
  },
  {
    route: routes.EDIT_EMPLOYEE + '/:employeeId',
    page: EditEmployeePage,
    layout: MainLayout,
  },
  {
    route: routes.TRASH_EMPLOYEE,
    page: TrashEmployeesPage,
    layout: MainLayout,
  },
  {
    route: routes.DETAIL_EMPLOYEE + '/:employeeId',
    page: DetailEmployee,
    layout: MainLayout,
  },
];
