import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from './api/post';

export const GlobalContext = createContext();

const AppContext = (props) => {
  const [userData, setUserData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [selectedEditData, setSelectedEditData] = useState({});
  const [selectedDeleteData, setSelectedDeleteData] = useState({});
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Get Data
  const fetchData = async () => {
    try {
      const response = await api.get('/post'); // Assuming api.get('/post') is correct and configured
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); // Improved error handling with console.error
      // Handle error state or display appropriate message to the user
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneNumber2: "",
    phoneNumber3: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    qualification: "",
    comments: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Post Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await postData(input);
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        phoneNumber2: "",
        phoneNumber3: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        qualification: "",
        comments: "",
      });
      toast.success("Successfully added");
      fetchData(); // Refresh data after successful post
    } catch (error) {
      console.error("Error while saving data:", error);
      toast.error("Failed to add data. Please try again.");
    }
  };
  
  const postData = async (input) => {
    try {
      await api.post("/post", input); // Use the configured Axios instance
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  };

  // Edit Data
  const handleEdit = (data) => {
    setSelectedEditData(data);
    setShowEditModal(true);
    document.body.classList.add("modal-open");
  };

  const handleEditClose = () => {
    setShowEditModal(false);
    document.body.classList.remove("modal-open");
  };

  const handleEditSubmission = async (e, data) => {
    e.preventDefault();

    try {
      await api.put(`/post/${data._id}`, data); // Use the configured Axios instance
      toast.success("Successfully updated");
      setShowEditModal(false);
      fetchData(); 
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  };

  // Delete Data
  const handleDeleteModal = (data) => {
    setSelectedDeleteData(data.id);
    setShowDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = async (id) => {
    try {
      await api.delete(`/post/${id}`); // Use the configured Axios instance
      toast.success("User has been removed");
      setShowDeleteModal(false);
      fetchData(); 
    } catch (error) {
      console.log(error.response.data);
      throw error;
    }
  };

  // View Data
  const handleView = (data) => {
    setSelectedData(data);
    setShowViewModal(true);
    document.body.classList.add("modal-open");
  };

  // Close View Window
  const handleViewClose = () => {
    setShowViewModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <GlobalContext.Provider
      value={{
        userData,
        input,
        handleChange,
        handleSubmit,
        handleEdit,
        handleDeleteModal,
        handleView,
        handleDeleteClose,
        selectedData,
        showViewModal,
        handleViewClose,
        showDeleteModal,
        setShowDeleteModal,
        confirmDelete,
        selectedEditData,
        showEditModal,
        handleEditClose,
        handleEditSubmission,
        selectedDeleteData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
