import { useParams, useNavigate } from "react-router";
import { ErrorAlert, Loader } from "../components";
import { formatPrice } from "../helpers";
import { useProduct } from "../hooks";

export const ProductDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { product, loading, error, refetch } = useProduct(id);

  if (loading) return <Loader />;

  if (error) {
    return <ErrorAlert message={error} onRetry={refetch} />;
  }

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <button onClick={handleGoBack} className="btn btn-ghost flex items-center gap-2 mb-4">
        ← Back
      </button>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center bg-white p-6 rounded-lg">
          <img src={product.image} alt={product.title} className="h-80 object-contain" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="badge badge-outline w-fit">{product.category}</span>

          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="text-base-content/70">{product.description}</p>

          <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>

          <button className="btn btn-primary w-full md:w-fit">Add to cart</button>
        </div>
      </div>
    </>
  );
};
