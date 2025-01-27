import axios from "../axios";

export const AdminAPI = {
  // create-class
  createClass: async (data) => {
    const res = await axios.post(`class`, data);
    return res.data;
  },
  // edit-class
  editClass: async (data) => {
    const res = await axios.put(`class/${data.classId}`, data);
    return res.data;
  },
  //   add-book
  addBook: async (data) => {
    const res = await axios.post(`/class/${data.classId}/book`, data);
    return res.data;
  },
  // edit-book
  editBook: async (data) => {
    const res = await axios.put(`/class/${data.classId}/book/${data.bookId}`, data);
    return res.data;
  },
  getListClass: async () => {
    const res = await axios.get(`/class/list-class`);
    return res.data;
  }
};

export default AdminAPI;
