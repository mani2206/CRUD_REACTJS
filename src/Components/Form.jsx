import { useGlobalContext } from "../CustomHooks.jsx/useGlobalContext";

const Form = () => {
  const { input, handleChange, handleSubmit } = useGlobalContext();
  return (
    <form role="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="reg_txt">
          Name <sup className="text-danger">*</sup>
        </label>
        <div className="controls form-inline">
          <input
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleChange}
            className="input-name"
            placeholder="First"
            maxLength={50}
            required
          />
          <input
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
            className="input-name"
            placeholder="Last"
            maxLength={50}
            required
          />
        </div>
      </div>
      <div className="clearfix"></div>

      <div className="form-group">
        <label className="reg_txt">
          Email <sup className="text-danger">*</sup>
        </label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          className="form-register text"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="clearfix"></div>

      <div className="form-group" style={{ height: "70px" }}>
        <label className="reg_txt">
          Phone Number <sup className="text-danger">*</sup>
        </label>
        <div className="clearfix"></div>
        <div className="wsite-form">
          <input
            type="tel"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="8608097856"
            className="text input-name1"
            required
          />
        </div>
        <div className="line">-</div>
        <div className="wsite-form">
          <input
            type="tel"
            name="phoneNumber2"
            value={input.phoneNumber2}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="8608097856"
            className="text input-name1"
          />
        </div>
        <div className="line">-</div>
        <div className="wsite-form">
          <input
            type="tel"
            name="phoneNumber3"
            value={input.phoneNumber3}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="8608097856"
            className="text input-name1"
          />
        </div>
      </div>

      <div className="clearfix"></div>

      <div className="form-group">
        <label className="reg_txt">
          Address <sup className="text-danger">*</sup>
        </label>
        <input
          type="text"
          name="address1"
          value={input.address1}
          onChange={handleChange}
          className="form-register text"
          placeholder="Line 1"
          style={{ marginBottom: "15px" }}
          maxLength={250}
          required
        />
        <input
          type="text"
          name="address2"
          value={input.address2}
          onChange={handleChange}
          className="form-register text"
          placeholder="Line 2"
          maxLength={250}
          required
        />
      </div>

      <div className="form-group">
        <div className="controls form-inline">
          <input
            type="text"
            name="city"
            value={input.city}
            onChange={handleChange}
            className="input-name"
            placeholder="City"
            maxLength={100}
            required
          />
          <input
            type="text"
            name="state"
            value={input.state}
            onChange={handleChange}
            className="input-name"
            placeholder="State"
            maxLength={100}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <div className="controls form-inline">
          <input
            type="text"
            name="zipCode"
            value={input.zipCode}
            onChange={handleChange}
            className="input-name"
            placeholder="Zip Code"
            maxLength={100}
            required
          />
          <input
            type="text"
            name="country"
            value={input.country}
            onChange={handleChange}
            className="input-name"
            placeholder="Country"
            maxLength={100}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="reg_txt">
          Write Your qualification <sup className="text-danger">*</sup>
        </label>
        <input
          type="text"
          name="qualification"
          value={input.qualification}
          onChange={handleChange}
          className="form-register text"
          placeholder=""
          maxLength={250}
          style={{ marginBottom: "15px" }}
          required
        />
      </div>

      <div className="clearfix"></div>

      <div className="form-group">
        <label className="reg_txt">
          Comment <sup className="text-danger">*</sup>
        </label>
        <textarea
          type="text"
          name="comments"
          value={input.comments}
          onChange={handleChange}
          maxLength={250}
          className="form-register text"
          required
        ></textarea>
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-default submit form-submit"
          style={{ width: "97%", background: "#a8a4a4" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
