import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "../common/icons";
import { useQuery } from "@tanstack/react-query";
import { apiFetchAllCategory } from "../../config/api";

const Footer = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetchAllCategories"],
    queryFn: () => apiFetchAllCategory(`page=1&size=100`),
  });

  return (
    <footer className="pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Tân xuân food
            </h1>
            <p className="text-gray-600 mb-4">
              Chuyên cung cấp thực phẩm đông lạnh chất lượng cao, đảm bảo vệ
              sinh an toàn thực phẩm.
            </p>
            <div className="flex gap-4">
              <NavLink
                to="https://www.facebook.com/anh.quoc.617407?locale=vi_VN"
                target="_blank"
                className="text-green-700 hover:text-green-900"
              >
                <Facebook size={20} color="currentColor" />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/aquoc.2110/"
                target="_blank"
                className="text-green-700 hover:text-green-900"
              >
                <Instagram size={20} color="currentColor" />
              </NavLink>
              <NavLink
                to="https://www.youtube.com/@quocbuianh8103"
                target="_blank"
                className="text-green-700 hover:text-green-900"
              >
                <Youtube size={20} color="currentColor" />
              </NavLink>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Danh mục sản phẩm
            </h3>
            <ul className="space-y-2">
              {categories?.data?.data?.result?.map(
                (category) =>
                  category.active === true && (
                    <li key={category.id}>
                      <NavLink
                        to={`/products?category=${category.id}`}
                        className="text-gray-600 hover:text-green-700 hover:underline"
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  )
              )}
            </ul>
          </div>
          {isLoading && (
            <div className="text-center text-gray-600">Loading...</div>
          )}
          {error && (
            <div className="text-center text-red-600">
              Error: {error.message}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Về chúng tôi
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Liên hệ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Chính sách bảo mật
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-and-conditions"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Điều khoản và điều kiện
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="text-gray-600 hover:text-green-700 hover:underline"
                >
                  Câu hỏi thường gặp
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="text-gray-700 font-semibold">
                  Địa chỉ: 
                </span> 179/58/16 Lê Đình Thám, phường Tân Quý, quận Tân Phú, TP. HCM
              </li>
              <li>
                <span className="text-gray-700 font-semibold">
                  Email:{' '}
                </span>anhquoc2110@gmail.com
              </li>
              <li>
                <span className="text-gray-700 font-semibold">
                  Hotline:{' '}
                </span>0394494821
              </li>
              <li>
                <span className="text-gray-700 font-semibold">
                  Giờ làm việc:{' '}
                </span>08h00 - 17h00, T2 - CN
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 border-gray-300 pt-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
          © Copyright 2025 Tân xuân food. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
