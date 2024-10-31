export default function Button({ type, onClick, children }) {
  const buttonType =
    type === "delete"
      ? "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 duration-200  rounded-md  text-[18px] font-semibold px-5 py-4 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
      : type === "confirm"
        ? "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 duration-200  rounded-md  text-[18px] font-semibold px-5 py-4 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        : type === "submit"
          ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-200  rounded-md  text-[18px] font-semibold px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          : type === "add"
            ? "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 duration-200  rounded-md  text-[18px] font-semibold px-5 py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            : "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 duration-200  rounded-md  text-[18px] font-semibold px-5 py-4 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800";

  return (
    <>
      <button type={type} className={buttonType} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
