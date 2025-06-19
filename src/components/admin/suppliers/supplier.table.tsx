import "react-datepicker/dist/react-datepicker.css";
import { ISupplier } from "../../../types/backend";
import SupplierRow from "./supplier.row";
interface IProps {
  supplierData?: ISupplier[] | null;
  onEditClick: (supplier: ISupplier) => void;
  onDeleteClick: (supplier: ISupplier) => void;
  onViewClick: (supplier: ISupplier) => void;
}

const SupplierTable = (props: IProps) => {
  const { supplierData, onEditClick, onDeleteClick, onViewClick } = props;

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
                      Tên nhà cung cấp
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Thông tin liên hệ
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
                    className="px-4 py-3 text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex items-center gap-x-1">
                      Tổng sản phẩm
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
                    className="px-4 py-3 text-end text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supplierData?.map((supplier) => (
                  <SupplierRow
                    key={supplier.id}
                    supplierData={supplier}
                    onEditClick={() => onEditClick(supplier)}
                    onDeleteClick={() => onDeleteClick(supplier)}
                    onViewClick={() => onViewClick(supplier)}
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

export default SupplierTable;
