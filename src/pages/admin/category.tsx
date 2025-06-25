import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/loading.spinner";
import Pagination from "../../components/common/pagination";

import { Plus } from "lucide-react";
import CategoryTable from "../../components/admin/categories/category.table";
import { apiFetchAllCategory, apiSearchCategory } from "../../config/api";
import { ICategory, ICategoryFilter } from "../../types/backend";
import CategoryModal from "../../components/admin/categories/category.modal";
import CategoryModalDelete from "../../components/admin/categories/category.modal.delete";
import { useDebounce } from "use-debounce";

const CategoryPage = () => {
  const MAX_CATEGORIES_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);
  const [totalSearchPage, setTotalSearchPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenActionModal, setIsOpenActionModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState<ICategoryFilter>({
    name: "",
    active: true,
    createdAt: null,
  });
  const [debouncedFilters] = useDebounce(filters, 500);


  const {
    isPending,
    data: categories,
    error,
  } = useQuery({
    queryKey: [["fetchAllCategories"], currentPage],
    queryFn: () =>
      apiFetchAllCategory(`page=${currentPage}&size=${MAX_CATEGORIES_PAGE}`),
  });

  const [displayData, setDisplayData] = useState<ICategory[] | null>(
    categories?.data.data?.result ?? null
  );

  useEffect(() => {
    if (categories) {
      window.HSStaticMethods.autoInit(["select", "dropdown"]);
    }
  }, [categories]);

  // Search suppliers
  const { data: searchData, error: searchError } = useQuery({
    queryKey: ["searchCategories", debouncedFilters, searchCurrentPage],
    queryFn: () =>
      apiSearchCategory(
        `page=${searchCurrentPage}&size=${MAX_CATEGORIES_PAGE}`,
        {
          name: debouncedFilters.name,
          active: debouncedFilters.active,
          createdAt: debouncedFilters.createdAt,
        }
      ),
    enabled: Object.values(debouncedFilters).some(
      (value) => value !== "" || value !== null
    ),
  });

  //   // Set total search page
  useEffect(() => {
    if (searchData) {
      setTotalSearchPage(searchData?.data?.data?.meta?.pages ?? 0);
      setDisplayData(searchData?.data?.data?.result ?? []);
    }
  }, [searchData]);

  // Set display data
  useEffect(() => {
    if (!isSearching && categories) {
      setDisplayData(categories?.data.data?.result ?? []);
    }
  }, [categories, isSearching]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setIsSearching(!!value);
  };

  const queryClient = useQueryClient();
  const reloadTable = () => {
    queryClient.invalidateQueries({ queryKey: ["fetchAllCategories"] });
  };

  const handleOpenCreateModal = () => {
    setIsOpenActionModal(true);
    setSelectedCategory(null);
  };

  const handleOpenEditModal = (category: ICategory) => {
    setIsOpenActionModal(true);
    setSelectedCategory(category);
  };

  const handleOpenDeleteModal = (category: ICategory) => {
    setIsOpenDeleteModal(true);
    setSelectedCategory(category);
  };

    if (error || searchError) {
      return (
        <div>
          <p>Something went wrong!</p>
        </div>
      );
    }

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-lg font-semibold">Quản lý danh mục</h1>
        <button
          type="button"
          className="py-2.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 focus:outline-hidden focus:bg-green-900 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"
          onClick={handleOpenCreateModal}
        >
          <Plus className="w-4 h-4 text-white mr-2" />
          Thêm danh mục
        </button>
      </div>

      {isPending ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="mb-6">
            <CategoryTable
              categoryData={displayData}
              onEditClick={handleOpenEditModal}
              onDeleteClick={handleOpenDeleteModal}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="flex justify-center">
            <Pagination
              currentPage={isSearching ? searchCurrentPage : currentPage}
              setCurrentPage={isSearching ? setSearchCurrentPage : setCurrentPage}
              total={isSearching ? totalSearchPage : categories?.data.data?.meta.pages ?? 0}
            />
          </div>
        </>
      )}

      <CategoryModal
        isOpenActionModal={isOpenActionModal}
        dataInit={selectedCategory}
        setDataInit={setSelectedCategory}
        onClose={() => {
          setSelectedCategory(null);
          setIsOpenActionModal(false);
        }}
      />

      <CategoryModalDelete
        isOpenDeleteModal={isOpenDeleteModal}
        dataInit={selectedCategory}
        setDataInit={setSelectedCategory}
        onClose={() => {
          setSelectedCategory(null);
          setIsOpenDeleteModal(false);
        }}
        reloadTable={reloadTable}
      />
    </div>
  );
};

export default CategoryPage;
