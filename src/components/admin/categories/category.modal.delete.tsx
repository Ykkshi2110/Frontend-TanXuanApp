import { toast } from "react-toastify";
import { apiDeleteCategory, apiDeleteSupplier } from "../../../config/api";
import { ICategory, ISupplier } from "../../../types/backend";
import CustomToast from "../../common/toast.message";

interface ICategoryModalDeleteProps {
  isOpenDeleteModal: boolean;
  dataInit?: ICategory | null;
  setDataInit: React.Dispatch<React.SetStateAction<ICategory | null>>;
  onClose: () => void;
  reloadTable: () => void;
}

const CategoryModalDelete = (props: ICategoryModalDeleteProps) => {
  const { isOpenDeleteModal, dataInit, setDataInit, onClose, reloadTable } =
    props;
  const handleDelete = async () => {
    const res = await apiDeleteCategory(dataInit?.id ?? "");
    if (res?.data?.statusCode === 200) {
      toast.success(<CustomToast message="Xóa danh mục thành công!" />);
    } else {
      toast.error(<CustomToast message="Xóa danh mục thất bại!" />);
    }
    onClose();
  };

  return (
    <div
      id="hs-basic-modal-delete"
      className={`hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 size-full fixed top-0 start-0 z-50 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none ${
        isOpenDeleteModal ? "open opened" : "hidden"
      }`}
      tabIndex={-1}
      aria-labelledby="hs-basic-modal-delete-label"
    >
      {isOpenDeleteModal && (
        <div className="z-[-1] transition duration fixed inset-0 bg-gray-900/50 dark:bg-neutral-900/80"></div>
      )}
      <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200">
            <h3
              id="hs-basic-modal-delete-label"
              className="font-bold text-gray-800 text-lg"
            >
              Bạn có chắc chắn muốn xóa danh mục: {dataInit?.name}?
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="mt-1 text-gray-800 text-sm">
              Hành động này không thể hoàn tác. Danh mục này sẽ bị xóa vĩnh viễn
              khỏi hệ thống.
            </p>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={onClose}
            >
              Hủy
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => {
                handleDelete();
                reloadTable();
              }}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModalDelete;
