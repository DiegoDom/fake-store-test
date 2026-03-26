import { Link } from "react-router";
import { formatPrice } from "../../helpers";
import type { Product } from "../../interfaces";

export const ProductCard = (product: Product) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* IMAGE */}
      <figure className="p-4 bg-white h-60 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="h-full object-contain" />
      </figure>

      {/* BODY */}
      <div className="card-body p-4">
        {/* CATEGORY */}
        <span className="text-xs badge badge-outline w-fit">{product.category}</span>

        {/* TITLE */}
        <h2 className="card-title text-sm line-clamp-2 min-h-12">{product.title}</h2>

        {/* PRICE */}
        <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>

        {/* ACTIONS */}
        <div className="card-actions justify-end mt-2">
          <Link to={`/products/${product.id}`} className="btn btn-secondary btn-sm">
            View details
          </Link>
          <button className="btn btn-primary btn-sm">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
