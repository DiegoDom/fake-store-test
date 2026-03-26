import { useNavigate } from "react-router";
export const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <button onClick={handleGoBack} className="btn btn-ghost flex items-center gap-2 mb-4">
      ← Back
    </button>
  );
};
