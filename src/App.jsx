import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Modal from "./components/modal";
import { IoMdCloseCircle } from "react-icons/io";
import AddProductForm from "./forms/addProduct";
import SimpleForm from "./forms/simpleForm";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {openModal ? (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircle
                onClick={() => setOpenModal(false)}
                className="text-red-500 text-xl cursor-pointer"
              />
            </div>

            <SimpleForm/>
            {/* <AddProductForm /> */}
          </div>
        </Modal>
      ) : null}

      <div className="border-b-2 border-black">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-red-500 rounded-md p-2 m-4 text-white bold"
        >
          Add new product
        </button>
      </div>
      <Card />
    </div>
  );
}

export default App;
