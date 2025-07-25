import { useQuery } from "@tanstack/react-query";
import SearchIcon from "../../../components/common/icons/search";
import { apiFetchAllCategory, apiFetchAllProduct } from "../../../config/api";
import SliderItem from "../../../components/common/slider";
import ProductCard from "../../../components/client/card/product.card";

const ProductShowPage = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["fetchAllCategories"],
    queryFn: () => apiFetchAllCategory(`page=1&size=100`),
  });

  const { data: products } = useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: () => apiFetchAllProduct(`page=1&size=12`),
  });

  return (
    <div className="container mx-auto px-4 py-10 bg-gray-50">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Sản phẩm</h1>
        <p className="text-gray-500">
          Khám phá bộ sưu tập thực phẩm đông lạnh chất lượng cao
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-6">
        {/* Left content*/}
        <div className="lg:w-80 w-full flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
            {/* Search bar*/}
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <SearchIcon size={14} color="gray" />
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  className="py-2 sm:py-2.5 ps-10 pe-4 block w-full border-gray-200 border rounded-lg sm:text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>

            {/* Category filter*/}
            <div className="mb-6">
              <div className="font-medium text-gray-700 mb-2">Danh mục</div>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors">
                  Tất cả
                </button>
                {categories?.data.data?.result.map(
                  (category) =>
                    category.active === true && (
                      <button
                        key={category.id}
                        className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors"
                      >
                        {category.name}
                      </button>
                    )
                )}
                {isLoading && (
                  <div className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-amber-700">
                    Đang tải...
                  </div>
                )}
                {isError && (
                  <div className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-red-700">
                    Lỗi khi tải danh mục
                  </div>
                )}
              </div>
            </div>
            {/* price range*/}
            <div className="mb-6">
              <div className="font-medium text-gray-700 mb-2">Khoảng giá</div>
              <div className="space-y-2">
                <SliderItem
                  className="w-full"
                  defaultValue={[50]}
                  min={10000}
                  max={100000}
                  step={10000}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>10.000đ</span>
                  <span>100.000đ</span>
                </div>
              </div>
            </div>

            {/* product status*/}
            <div className="mb-6">
              <div className="font-medium text-gray-700 mb-2">Trạng thái</div>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors">
                  Tất cả
                </button>
                <button className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors">
                  Sản phẩm nổi bật
                </button>
                <button className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors">
                  Sản phẩm mới nhất
                </button>
                <button className="w-full py-2 px-4 rounded-lg text-left border border-gray-200 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-white focus:bg-green-700 focus:text-white transition-colors">
                  Sản phẩm bán chạy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right content*/}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-500">
              Hiển thị {products?.data.data?.result.length} sản phẩm
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products?.data.data?.result.map((product) => (
              <ProductCard
                key={product.id}
                image={`${process.env.REACT_APP_URL_STORAGE_FILE}/productImgs/${product.productImage}`}
                name={product.name}
                price={product.price}
                categoryName={product.category?.name || "Không có danh mục"}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowPage;
