import { toast } from "react-hot-toast";
import {
  useAddBannerMutation,
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "../../../Redux/banner/banner";

export default function Banner() {
  const { data } = useGetBannerQuery();
  const banner = data?.data;
  const id = banner?._id;

  const [addBanner, { isLoading: addIsLoading }] = useAddBannerMutation();
  const [updateBanner, { isLoading: updateIsLoading }] =
    useUpdateBannerMutation();

  const hanldeBanner = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const video = e.target.video.value;

    const info = new FormData();
    info.append("title", title);
    info.append("description", description);
    info.append("video", video);

    if (id) {
      const res = await updateBanner({ id, info });
      if (res?.data?.success) {
        toast.success("Banner Update Success");
      } else {
        toast.error(res?.data?.message || "something went wrong!");
        console.log(res);
      }
    } else {
      const res = await addBanner(info);
      if (res?.data?.success) {
        toast.success("Banner Add Success");
      } else {
        toast.error(res?.data?.message || "something went wrong!");
        console.log(res);
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Banner</h3>
      </div>

      <form className="p-4" onSubmit={hanldeBanner}>
        <div className="text-neutral-content flex flex-col gap-4 w-full items-start">
          <div className="w-full">
            <p className="mb-1">Banner Title</p>
            <input
              type="text"
              name="title"
              required
              defaultValue={banner?.title}
            />
          </div>
          <div className="w-full">
            <p className="mb-1">Banner Description</p>
            <textarea
              type="text"
              name="description"
              required
              defaultValue={banner?.description}
            />
          </div>

          <div className="w-full">
            <p className="mb-1">Video Iframe</p>
            <textarea
              type="text"
              rows={5}
              name="video"
              defaultValue={banner?.video}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex gap-2">
            <button
              disabled={addIsLoading || updateIsLoading}
              className="primary_btn"
            >
              {addIsLoading || updateIsLoading
                ? "Loading..."
                : id
                ? "Update Banner"
                : "Add Banner"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
