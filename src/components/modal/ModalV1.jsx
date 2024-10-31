import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

export default function ModalV1({ children, onClose }) {
  return createPortal(
    <>
      <div className="bg-gray-800/80 fixed top-0 left-0  w-full h-screen  backdrop-blur-[.7px] z-[1000] duration-300 transition-all">
        <div className="p-[40px] fixed top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2  rounded-lg transition-all">
          <button
            onClick={() => onClose?.()}
            className="absolute top-[15px] right-[15px] border rounded-md bg-red-600 text-white"
          >
            <MdClose size={30} />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.body
  );
}
