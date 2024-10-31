import { useState } from "react";
import ModalV1 from "./ModalV1";
import FeatureForm from "./FeatureForm";

export default function AddNewFeatureV1() {
  const [showModal, setShowModal] = useState(false);
  const handelShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="flex justify-center  items-center h-[80vh] flex-col gap-5">
        <button
          className="border bg-gray-500 font-bold p-3 rounded-lg"
          onClick={handelShowModal}
        >
          Add New Feature Form
        </button>

        {showModal && (
          <>
            <ModalV1 onClose={() => setShowModal(false)}>
              <FeatureForm onClose={() => setShowModal(false)} />
            </ModalV1>
            {/* <FeatureForm /> */}
          </>
        )}
      </div>
    </>
  );
}
