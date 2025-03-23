import { useGetBannerQuery } from "../../Redux/banner/banner";

export default function Banner() {
  const { data } = useGetBannerQuery();
  const banner = data?.data;

  return (
    <section className="py-5 sm:py-7">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl text-primary font-bold">
              {banner?.title}
            </h2>
            <p className="sm:mt-4 text-lg font-medium">{banner?.description}</p>

            <div className="mt-8">
              <a
                href="#order"
                className="bg-primary text-base-100 px-4 py-2 rounded"
              >
                Click to order
              </a>
            </div>
          </div>

          <div className="-order-1 md:order-1 hidden sm:block">
            {banner?.video ? (
              <iframe
                width="100%"
                height="370"
                src={`https://www.youtube.com/embed/${banner?.video}?autoplay=1&mute=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ borderRadius: "10px" }}
              ></iframe>
            ) : (
              <div className="h-[370] bg-black">Loading...</div>
            )}
          </div>

          <div className="-order-1 md:order-1  sm:hidden">
            {banner?.video ? (
              <iframe
                width="100%"
                height="260"
                src={`https://www.youtube.com/embed/${banner?.video}?autoplay=1&mute=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ borderRadius: "10px" }}
              ></iframe>
            ) : (
              <div className="h-[260] bg-black">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
