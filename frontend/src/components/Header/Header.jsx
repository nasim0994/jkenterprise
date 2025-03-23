import { Link } from "react-router-dom";
import { useGetLogosQuery } from "../../Redux/logo/logoApi";

export default function Header() {
  const { data } = useGetLogosQuery();
  const logo = data?.data[0];

  return (
    <header className="py-2 border-b border-primary bg-secondary/5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/logo/${logo?.logo}`}
              alt="logo"
              className="w-32 sm:w-36"
            />
          </Link>

          <a href="#order" className="primary_btn text-sm">
            Click to order
          </a>
        </div>
      </div>
    </header>
  );
}
