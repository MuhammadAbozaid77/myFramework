export default function FeatureForm({ onClick }) {
  // AddNewFeature
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className=" p-2 mt-[40px]  w-[500px]  flex flex-col gap-5"
      >
        <input
          className="border border-gray-500 outline-none rounded-md w-[100%] text-gray-400 font-semibold text-[18px] p-3"
          type="text"
          name=""
          id=""
        />
        <input
          className="border border-gray-500 outline-none rounded-md w-[100%] text-gray-400 font-semibold text-[18px] p-3"
          type="text"
          name=""
          id=""
        />
        <button
          className="p-3 w-[100%] bg-blue-500 text-gray-100 font-bold text-[20px] rounded-md"
          type="Submit"
        >
          Submit
        </button>
        <button
          onClick={onClick}
          className="p-3 w-[100%] bg-red-500 text-gray-100 font-bold text-[20px] rounded-md"
          type="button"
        >
          Close
        </button>
      </form>
    </>
  );
}
