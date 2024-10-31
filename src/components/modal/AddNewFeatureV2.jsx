import Button from "../ui/Button";
import FeatureForm from "./FeatureForm";
import ModalV2 from "./ModalV2";

export default function AddNewFeatureV2() {
  return (
    <>
      <ModalV2>
        <ModalV2.Open openModalName={"open-form"}>
          <Button>Add New Feature Form</Button>
        </ModalV2.Open>
        <ModalV2.Window windowModalName={"open-form"}>
          <FeatureForm />
        </ModalV2.Window>
      </ModalV2>
    </>
  );
}
