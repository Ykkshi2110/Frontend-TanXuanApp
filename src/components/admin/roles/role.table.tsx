import "react-datepicker/dist/react-datepicker.css";
import { IRole } from "../../../types/backend";
import RoleRow from "./role.row";

interface IProps {
  roleData?: IRole[] | null;
  onEditClick: (role: IRole) => void;
  onDeleteClick: (role: IRole) => void;
}

const RoleTable = (props: IProps) => {
  const { roleData, onEditClick, onDeleteClick } = props;

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
                      Tên vai trò
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-start text-xs font-medium text-gray-500 bg-green-50 uppercase"
                  >
                    <div className="flex flex-nowrap items-center gap-x-1">
                      Mô tả
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
                {roleData?.map((role) => (
                  <RoleRow
                    key={role.id}
                    roleData={role}
                    onEditClick={() => onEditClick(role)}
                    onDeleteClick={() => onDeleteClick(role)}
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

export default RoleTable;
