import { NavLink } from "react-router-dom"
import { Facebook, Instagram, Youtube } from "../common/icons"

const MainNav = () => {
    return (
        <nav className="px-4 sm:px-6 flex w-full py-2 bg-green-200">
        <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <NavLink
            className={({ isActive }) =>
              "px-4 py-4 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:bg-green-100" +
              (isActive
                ? " text-green-800 bg-green-100 border-b-2 border-green-800 font-semibold"
                : " text-gray-700 hover:bg-green-100 hover:border-b-2 hover:border-green-800 hover:font-semibold hover:text-green-800")
            }
            to="/"
          >
            Trang chủ
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "px-4 py-4 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:bg-green-100" +
              (isActive
                ? " text-green-800 bg-green-100 border-b-2 border-green-800 font-semibold"
                : " text-gray-700 hover:bg-green-100 hover:border-b-2 hover:border-green-800 hover:font-semibold hover:text-green-800")
            }
            to="/products"
          >
            Sản phẩm
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "px-4 py-4 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:bg-green-100" +
              (isActive
                ? " text-green-800 bg-green-100 border-b-2 border-green-800 font-semibold"
                : " text-gray-700 hover:bg-green-100 hover:border-b-2 hover:border-green-800 hover:font-semibold hover:text-green-800")
            }
            to="/about"
          >
            Giới thiệu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "px-4 py-4 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:bg-green-100" +
              (isActive
                ? " text-green-800 bg-green-100 border-b-2 border-green-800 font-semibold"
                : " text-gray-700 hover:bg-green-100 hover:border-b-2 hover:border-green-800 hover:font-semibold hover:text-green-800")
            }
            to="/contact"
          >
            Liên hệ
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
        </div>
      </nav>
    )
}

export default MainNav