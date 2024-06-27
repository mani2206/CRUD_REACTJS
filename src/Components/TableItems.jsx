import { useState } from "react";
import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";

const TableItems = (tableData) => {
  const { handleEdit, handleDeleteModal, handleView } = useGlobalContext();
  const { firstName, email, phoneNumber, data } = tableData;
  const [availableData, setAvailableData] = useState(tableData);

  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>
          <button className="ed" onClick={() => handleEdit(data)}>
            Edit
          </button>
        </td>
        <td>
          <button
            className="ed"
            style={{ background: "#f00" }}
            onClick={() => handleDeleteModal(data)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="ed"
            onClick={() => handleView(data)}
            style={{ background: "#000" }}
          >
            View
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableItems;
