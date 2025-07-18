import { IStaticMethods } from "preline/preline";
import "preline/preline";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "./App.css";
import AdminLayout from "./layouts/AdminLayout";
import AppLayout from "./layouts/AppLayout";
import ClientLayout from "./layouts/ClientLayout";
import HomePage from "./pages/admin/home";
import OrderPage from "./pages/admin/orders";
import ProductPage from "./pages/admin/products";
import SupplierPage from "./pages/admin/supplier";
import UserPage from "./pages/admin/users";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import ProtectedRoute from "./pages/auth/route/protected.route";
import ErrorPage from "./pages/error-page";
import { useAppDispatch } from "./redux/hooks";
import { fetchUserInfo } from "./redux/slice/account.slice";
import "./styles/datepicker-xs.css";
import "react-datepicker/dist/react-datepicker.css";
import CategoryPage from "./pages/admin/category";
import PermissionPage from "./pages/admin/permissions";
import RolePage from "./pages/admin/roles";
import LoginInternalUserPage from "./pages/auth/login.internal.user";
import CustomerPage from "./pages/admin/customer";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export const routes = [
  {
    path: "/",
    element: (
      <AppLayout>
        <ClientLayout />
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <AppLayout>
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      </AppLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        breadcrumb: "Quản trị",
      },
      {
        path: "dashboard",
        element: <HomePage />,
        breadcrumb: "Trang chủ",
      },
      {
        path: "users",
        element: <UserPage />,
        breadcrumb: "Nhân viên",
      },
      {
        path: "customers",
        element: <CustomerPage />,
        breadcrumb: "Khách hàng",
      },
      {
        path: "products",
        element: <ProductPage />,
        breadcrumb: "Sản phẩm",
      },
      {
        path: "orders",
        element: <OrderPage />,
        breadcrumb: "Đơn hàng",
      },
      {
        path: "suppliers",
        element: <SupplierPage />,
        breadcrumb: "Nhà cung cấp",
      },
      {
        path: "categories",
        element: <CategoryPage />,
        breadcrumb: "Danh mục",
      },
      {
        path: "permissions",
        element: <PermissionPage />,
        breadcrumb: "Quyền hạn",
      },
      {
        path: "roles",
        element: <RolePage />,
        breadcrumb: "Vai trò",
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin/login",
    element: <LoginInternalUserPage />,
  },
];

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  useEffect(() => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/admin/login"
    )
      return;
    dispatch(fetchUserInfo());
  }, []);

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        pauseOnHover={false}
        draggable={true}
        newestOnTop
        transition={Slide}
      />
    </>
  );
}

export default App;
