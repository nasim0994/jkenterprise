import { useGetBannerQuery } from "../../Redux/banner/banner";
import parse from "html-react-parser";

export default function Banner() {
  const { data } = useGetBannerQuery();
  const banner = data?.data;

  return (
    <section className="py-5 sm:py-7">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl text-primary font-bold">
              {banner?.title}
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-medium">
              {banner?.description}
            </p>

            <div className="mt-8">
              <a
                href="#order"
                className="bg-primary text-base-100 px-4 py-2 rounded"
              >
                এখানে অর্ডার করুন
              </a>
            </div>
          </div>

          <div className="-order-1 md:order-1 video-container">
            {banner?.video && parse(banner?.video)}
          </div>
        </div>
      </div>
    </section>
  );
}
