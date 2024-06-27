import Form from "./Components/Form";
import Table from "./Components/Table";
import { useGlobalContext } from "./CustomHooks.jsx/useGlobalContext";
import ViewModalWindow from "./Components/ViewModalWindow";
import EditModalWindow from "./Components/EditModalWindow";
import DeleteModalWindow from "./Components/DeleteModalWindow";

function App() {
  const {
    showViewModal,
    selectedData,
    handleViewClose,
    selectedEditData,
    showEditModal,
    handleEditClose,
    showDeleteModal,
    setShowDeleteModal,
    handleDeleteClose,
  } = useGlobalContext();

  return (
    <>
      <div className="container px-lg-5 px-sm-1">
        <div className="register pt-4 col-md-5 col-sm-6" >
          <h1 className="title">
            <strong>Bio Data</strong>
          </h1>
          <Form />
        </div>
        <Table />
      </div>
      {showViewModal && <ViewModalWindow data={selectedData} />}

      {showViewModal && (
        <div className="overlay" onClick={handleViewClose}></div>
      )}

      {showEditModal && <EditModalWindow data={selectedEditData} />}

      {showEditModal && (
        <div className="overlay" onClick={handleEditClose}></div>
      )}

      {showDeleteModal && <DeleteModalWindow />}

      {showDeleteModal && (
        <div className="overlay" onClick={handleDeleteClose}></div>
      )}
    </>
  );
}

export default App;
