import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/loading.spinner";
import Pagination from "../../components/common/pagination";

import { Plus } from "lucide-react";
import RoleTable from "../../components/admin/roles/roles.table";
import { apiFetchAllRole } from "../../config/api";
import { IRole } from "../../types/backend";

const RolePage = () => {
  const MAX_PERMISSIONS_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState<IRole | null>(null);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenActionModal, setIsOpenActionModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [isSearching, setIsSearching] = useState(false);


  const {
    isPending,
    data: roles,
    error,
  } = useQuery({
    queryKey: [["fetchAllRoles"], currentPage],
    queryFn: () =>
      apiFetchAllRole(`page=${currentPage}&size=${MAX_PERMISSIONS_PAGE}`)
  });

  const [displayData, setDisplayData] = useState<IRole[] | null>(
    roles?.data.data?.result ?? null
  );

  useEffect(() => {
    if (roles) {
      window.HSStaticMethods.autoInit(["select", "dropdown"]);
    }
  }, [roles]);

  // Search suppliers
//   const { data: searchData, error: searchError } = useQuery({
//     queryKey: ["searchSuppliers", debouncedFilters, searchCurrentPage],
//     queryFn: () =>
//       apiSearchProduct(`page=${searchCurrentPage}&size=${MAX_PRODUCTS_PAGE}`, {
//         name: debouncedFilters.name,
//         quantity: debouncedFilters.quantity,
//         unit: debouncedFilters.unit,
//         price: debouncedFilters.price,
//         ...(debouncedFilters.category?.id
//           ? { category: { id: debouncedFilters.category.id } }
//           : {}),
//         ...(debouncedFilters.supplier?.id
//           ? { supplier: { id: debouncedFilters.supplier.id } }
//           : {}),
//       }),
//     enabled: Object.values(debouncedFilters).some(
//       (value) => value !== "" || value !== null || value !== 0
//     ),
//   });

//   // Set total search page
//   useEffect(() => {
//     if (searchData) {
//       setTotalSearchPage(searchData?.data?.data?.meta?.pages ?? 0);
//       setDisplayData(searchData?.data?.data?.result ?? []);
//     }
//   }, [searchData]);

  // Set display data
  useEffect(() => {
    if (!isSearching && roles) {
      setDisplayData(roles?.data.data?.result ?? []);
    }
  }, [roles, isSearching]);

//   const handleFilterChange = (key: string, value: string | number) => {
//     setFilters((prev) => {
//       let newValue;
//       if (key === "supplier") {
//         newValue = { supplier: { id: value as string } };
//       } else if (key === "category") {
//         newValue = { category: { id: value as string } };
//       } else {
//         newValue = { [key]: value };
//       }
//       return { ...prev, ...newValue };
//     });
//     setIsSearching(!!value);
//   };

  const queryClient = useQueryClient();
  const reloadTable = () => {
    queryClient.invalidateQueries({ queryKey: ["fetchAllRoles"] });
  };

  const handleOpenCreateModal = () => {
    setIsOpenActionModal(true);
    setSelectedRole(null);
  };

  const handleOpenEditModal = (role: IRole) => {
    setIsOpenActionModal(true);
    setSelectedRole(role);    
  };

  const handleOpenDeleteModal = (role: IRole) => {
    setIsOpenDeleteModal(true);
    setSelectedRole(role);
  };

  const handleOpenViewModal = (role: IRole) => {
    setIsOpenViewModal(true);
    setSelectedRole(role);
  };

//   if (error || searchError) {
//     return (
//       <div>
//         <p>Something went wrong!</p>
//       </div>
//     );
//   }

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-lg font-semibold">Quản lý vai trò</h1>
        <button
          type="button"
          className="py-2.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-800 text-white hover:bg-green-900 focus:outline-hidden focus:bg-green-900 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap"
          onClick={handleOpenCreateModal}
        >
          <Plus className="w-4 h-4 text-white mr-2" />
          Thêm vai trò
        </button>   
      </div>

      {isPending ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="mb-6">
            <RoleTable
              onViewClick={handleOpenViewModal}
              roleData={displayData}
              onEditClick={handleOpenEditModal}
              onDeleteClick={handleOpenDeleteModal}
            //   filters={filters}
            //   onFilterChange={handleFilterChange}
            />
          </div>

          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={
                setCurrentPage
              }
              total={
                roles?.data.data?.meta.pages ?? 0
              }
            />
          </div>
        </>
      )}

      {/* <ProductModal
        isOpenActionModal={isOpenActionModal}
        dataInit={selectedProduct}
        setDataInit={setSelectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          setIsOpenActionModal(false);
        }}
      /> */}

      {/* <ProductModalDelete
        isOpenDeleteModal={isOpenDeleteModal}
        dataInit={selectedProduct}
        setDataInit={setSelectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          setIsOpenDeleteModal(false);
        }}
        reloadTable={reloadTable}
      />

      <ProductModalDetail
        isOpenViewModal={isOpenViewModal}
        dataInit={selectedProduct}
        setDataInit={setSelectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          setIsOpenViewModal(false);
        }}
      /> */}
    </div>
  );
};

export default RolePage;
