import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";

const ViewModalWindow = ({ data }) => {
  const { handleViewClose, showViewModal } = useGlobalContext();

  return (
    <div className="view-modal">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Qualification</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.firstName} {data.lastName}
            </td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>
            <td>
              {data.address1}
              <br />
              {data.address2}
              <br />
              {data.city}
              <br />
              {data.state}
              <br />
              {data.zipCode}
              <br />
            </td>
            <td>{data.qualification}</td>
            <td>{data.comments}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-danger m-4" onClick={handleViewClose}>
        close
      </button>
    </div>
  );
};

export default ViewModalWindow;
