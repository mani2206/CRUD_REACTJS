import { useState } from "react";
import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";

const EditModalWindow = ({ data }) => {
  const { handleEditClose, handleEditSubmission } = useGlobalContext();
  const [editedValue, setEditedValue] = useState(data);

  const handleChange = (e) => {
    setEditedValue({ ...editedValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-modal p-5 rounded">
      <form onSubmit={(e) => handleEditSubmission(e, editedValue)}>
        <div className="py-2 edit-form-group">
          <label className="px-2 edit-label" htmlFor="firstName">
            First Name <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "30px" }}
            type="text"
            name="firstName"
            value={editedValue.firstName}
            onChange={handleChange}
            required
            maxLength={50}
          />
        </div>

        <div className="py-2 edit-form-group">
          <label className="px-2" htmlFor="lastName">
            Last Name <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "30px" }}
            type="text"
            name="lastName"
            value={editedValue.lastName}
            onChange={handleChange}
            required
            maxLength={50}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="email">
            email <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "60px" }}
            type="email"
            name="email"
            value={editedValue.email}
            onChange={handleChange}
            required
            maxLength={50}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="phoneNumber">
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            className="editInputs"
            type="tel"
            name="phoneNumber"
            value={editedValue.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="address1">
            Line 1<sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "60px" }}
            type="text"
            name="address1"
            value={editedValue.address1}
            onChange={handleChange}
            required
            maxLength={250}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="address2">
            Line 2<sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "60px" }}
            type="text"
            name="address2"
            value={editedValue.address2}
            onChange={handleChange}
            required
            maxLength={250}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="city">
            City <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "68px" }}
            type="text"
            name="city"
            value={editedValue.city}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="state">
            State <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "60px" }}
            type="text"
            name="state"
            value={editedValue.state}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="zipCode">
            Zip Code <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "36px" }}
            type="text"
            name="zipCode"
            value={editedValue.zipCode}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="country">
            Country <sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "41px" }}
            type="text"
            name="country"
            value={editedValue.country}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="pt-2 edit-form-group">
          <label className="px-2" htmlFor="qualification">
            Qualification<sup className="text-danger">*</sup>
          </label>
          <input
            className="editInputs"
            style={{ marginLeft: "18px" }}
            type="text"
            name="qualification"
            value={editedValue.qualification}
            onChange={handleChange}
            required
            maxLength={250}
          />
        </div>

        <div className="pt-2">
          <label className="px-2" htmlFor="comments">
            Comments<sup className="text-danger">*</sup>
          </label>
          <textarea
            type="text"
            name="comments"
            value={editedValue.comments}
            onChange={handleChange}
            maxLength={250}
            className="form-register text editInputs"
            required
          ></textarea>
        </div>

        <div className="pt-5 edit-form-group">
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <button onClick={handleEditClose} className="btn btn-danger mx-2">
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModalWindow;
