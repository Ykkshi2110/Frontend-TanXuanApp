import { NumericFormat } from "react-number-format";
import { CartIcon } from "../../common/icons";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  description: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ image, name, price, description, isBestSeller, isNew, isSale }: ProductCardProps) => {
    const status = (() => {
        if (isNew) return "Mới";
        if (isBestSeller) return "Bán chạy";
        if (isSale) return "Giảm giá";
        return null;
    })();
    const statusColor = (() => {
        if (isNew) return "bg-blue-500";
        if (isBestSeller) return "bg-amber-500";
        if (isSale) return "bg-red-500";
        return null;
    })();
  return (
    <div className="bg-white pb-4 rounded-md shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md"
        />
        {status && (
            <div className="absolute top-2 right-2 left-2">
                <span className={`text-white px-2 py-1 rounded-md text-xs ${statusColor} font-medium`}>
                    {status}
                </span>
            </div>
        )}
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-lg font-medium text-gray-800 mt-4">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-700 font-medium">
            <NumericFormat
              value={price}
              displayType="text"
              allowLeadingZeros
              thousandSeparator={true}
              suffix={"đ"}
            />
          </span>
        </div>
        <div>
          <button className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-900 flex justify-center items-center gap-2">
            <CartIcon size={16} color="white" className="size-4" />
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
