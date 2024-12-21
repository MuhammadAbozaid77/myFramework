import Header from "./components/layouts/header/Header";
import AddNewFeatureV2 from "./components/modal/AddNewFeatureV2";
import TableEx from "./components/table/TableEx";
import Button from "./components/ui/Button";
import FileUpload from "./components/ui/FileUpload.jsx/FileUpload";
import FillterData from "./pages/Filter/FillterData";

export default function App() {
  return (
    <>
      {/* <Header />
      <div>Hello</div>
      <AddNewFeatureV2 /> */}
      {/* <TableEx /> */}

      <FillterData />
      <FileUpload />
    </>
  );
}
