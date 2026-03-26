export const ProductCard = () => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* IMAGE */}
      <figure className="p-4 bg-white h-60 flex items-center justify-center">
        <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"} alt={"product 1"} className="h-full object-contain" />
      </figure>

      {/* BODY */}
      <div className="card-body p-4">
        {/* CATEGORY */}
        <span className="text-xs badge badge-outline w-fit">men's clothing</span>

        {/* TITLE */}
        <h2 className="card-title text-sm line-clamp-2 min-h-[3rem]">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>

        {/* PRICE */}
        <p className="text-lg font-bold text-primary">$109.95</p>

        {/* ACTIONS */}
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary btn-sm">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
