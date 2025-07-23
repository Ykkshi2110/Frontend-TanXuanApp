import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.account.isAuthenticated
  );

  return (
    
    <header className="sticky top-0 inset-x-0 z-30 flex flex-col bg-white border-b border-gray-200 text-sm pt-2 shadow-sm">
      <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto mb-2 py-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <div>
              <NavLink to="/">
                <img
                  src="/images/Group.svg"
                  alt="Tân Xuân Food Logo"
                  className="w-40 max-w-full h-auto mx-auto transition-transform duration-200 hover:scale-105"
                />
              </NavLink>
            </div>

            <div className="relative w-72 hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg
                  className="shrink-0 size-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <input
                className="py-2 sm:py-2.5 ps-10 pe-4 block w-full border-gray-200 border rounded-full sm:text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                type="text"
                id="search"
                placeholder="Tìm kiếm thực phẩm đông lạnh..."
              />
            </div>
          </div>

          <div className="hidden md:flex flex-row items-center gap-4">
            <button
              type="button"
              className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="sr-only">Notifications</span>
            </button>

            <button
              type="button"
              className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <span className="sr-only">Cart</span>
            </button>

            {!isAuthenticated ? (
              <button
                type="button"
                className="hidden py-3 px-4 md:inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 focus:outline-hidden focus:bg-green-900 disabled:opacity-50 disabled:pointer-events-none"
              >
                Đăng nhập
              </button>
            ) : (
              <div className="hidden hs-dropdown relative md:inline-flex">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="hs-dropdown-toggle inline-flex items-center gap-x-2 font-medium rounded-full text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <img
                    className="shrink-0 size-9 rounded-full"
                    src="/images/default-avatar.png"
                    alt="Avatar"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
