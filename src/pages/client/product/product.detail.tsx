import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { apiFetchProductById } from "../../../config/api";
import LoadingSpinner from "../../../components/common/loading.spinner";
import Card from "../../../components/common/card";
import { Heart } from "../../../components/common/icons";

const ProductDetailPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => apiFetchProductById(id || ""),
    enabled: !!id,
  });
  if (isLoading) return <LoadingSpinner />;
  if (isError || !product?.data?.data)
    return (
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Không tìm thấy sản phẩm
        </h1>
        <p className="text-gray-600 mb-6">
          Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <NavLink
          to="/products"
          className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
        >
          ← Quay lại trang sản phẩm
        </NavLink>
      </div>
    );
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm">
        <NavLink to="/" className="text-gray-500 hover:text-gray-700">
          Trang chủ
        </NavLink>
        <span className="mx-2 text-gray-500">/</span>
        <NavLink to="/products" className="text-gray-500 hover:text-gray-700">
          Sản phẩm
        </NavLink>
        <span className="mx-2 text-gray-500">/</span>
        <span
          className="font-semibold text-gray-800 truncate"
          aria-current="page"
        >
          {product.data.data?.name}
        </span>
      </nav>

      {/* Product detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Product image section */}
          <Card className="border-none shadow-xl">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={`${process.env.REACT_APP_URL_STORAGE_FILE}/productImgs/${product.data.data?.productImage}`}
                  alt={product.data.data?.name}
                  className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="absolute top-4 left-4 z-10">
                <span className="text-white px-2 py-1 rounded-md text-sm bg-amber-500 font-medium backdrop-blur-sm">
                  Bán chạy
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <button className="bg-red-50 rounded-full p-2 hover:bg-red-100 transition-colors backdrop-blur-sm">
                  <Heart
                    size={20}
                    color="black"
                    className="hover:fill-red-500 hover:stroke-red-500 hover:scale-110"
                  />
                </button>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-white/50 to-white/10">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Ảnh sản phẩm chính thức
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-green-700"></div>
                  <span className="text-xs text-green-700">Chất lượng HD</span>
                  <div className="w-2 h-2 rounded-full animate-pulse bg-green-700"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
