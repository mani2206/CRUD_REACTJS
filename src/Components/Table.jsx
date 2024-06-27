import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";
import { tableHeaders } from "../Data";
import TableItems from "./TableItems";

const Table = () => {
  const { userData } = useGlobalContext();

  // Map table headers and ensure each has a unique key
  const headerList = tableHeaders.map((header) => (
    <th key={header.id}>{header.value}</th>
  ));

  // Map user data and ensure each item has a unique key
  const tableData = userData.map((data) => {
    const { id, firstName, email, phoneNumber } = data; // Assuming '_id' is the unique identifier
    return (
      <TableItems
        key={id} // Ensure the key is unique
        id={id}
        firstName={firstName}
        email={email}
        phoneNumber={phoneNumber}
        data={data}
      />
    );
  });

  return (
    <div className="col-md-6 tabt">
      <table className="table">
        <thead>
          <tr className="ztxt">{headerList}</tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default Table;
