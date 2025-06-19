import "react-datepicker/dist/react-datepicker.css";
import { ICategory } from "../../../types/backend";
import CategoryRow from "./category.row";

interface IProps {
  categoryData?: ICategory[] | null;
  onEditClick: (category: ICategory) => void;
  onDeleteClick: (category: ICategory) => void;
  onViewClick: (category: ICategory) => void;
}

const CategoryTable = (props: IProps) => {
  const { categoryData, onEditClick, onDeleteClick, onViewClick } = props;

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Tên danh mục
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Trạng thái
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Ngày tạo
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Ngày cập nhật
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-end text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categoryData?.map((category) => (
                  <CategoryRow
                    key={category.id}
                    categoryData={category}
                    onEditClick={() => onEditClick(category)}
                    onDeleteClick={() => onDeleteClick(category)}
                    onViewClick={() => onViewClick(category)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
