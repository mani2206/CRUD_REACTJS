import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";

const DeleteModalWindow = () => {
  const { handleDeleteClose, confirmDelete, selectedDeleteData } =
    useGlobalContext();
  return (
    <div className="delete-modal rounded">
      <h5>Are you sure?</h5>
      <div style={{ display: "flex" }}>
        <button
          className="btn btn-success"
          onClick={() => {
            confirmDelete(selectedDeleteData);
          }}
        >
          yes
        </button>
        <button className="btn btn-danger mx-5" onClick={handleDeleteClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModalWindow;
