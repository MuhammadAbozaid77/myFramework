import { useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";

export default function FileUpload() {
  const fileRef = useRef();
  const [selectedFile, setSelectedFile] = useState("");
  const [progressStatus, setProgressStatus] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select"); // select - uploading - done

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("selectedFile", selectedFile);
    if (!selectedFile) {
      return null;
    } else {
      const fd = new FormData();
      fd.append("file", selectedFile);
      //Calling API
    }
  };
  const onChooseFile = () => {
    fileRef.current.click();
  };
  return (
    <>
      <div>
        <form onSubmit={handelSubmit}>
          <div className="flex flex-col my-5">
            <input
              ref={fileRef}
              style={{ display: "none" }}
              type="file"
              name=""
              id=""
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>
          {!selectedFile && (
            <>
              <button
                className="border bg-blue-500 p-2 text-white font-semibold rounded-md "
                onClick={onChooseFile}
              >
                Upload File
              </button>
            </>
          )}
          {selectedFile && (
            <>
              <div className="w-[300px]">
                <div className="flex justify-between p-2 rounded-md text-gray-500 font-semibold items-center  border">
                  <div className="flex items-center gap-1">
                    <FaFileAlt size={20} />
                    <h2 className="text-[12px]">{selectedFile?.name}</h2>
                  </div>
                  <IoIosCloseCircleOutline
                    size={30}
                    className="cursor-pointer"
                    onClick={() => setSelectedFile("")}
                  />
                </div>
                <div className="border-[3px] bg-gray-500 mt-2 rounded-full"></div>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
