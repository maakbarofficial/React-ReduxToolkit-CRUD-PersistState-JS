import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "Muhammad Ali",
        lastName: "Akbar",
        email: "aliakbar.mql@gmail.com",
        phone: "+923143227662",
        address: "Karachi, Sindh",
      },
      {
        id: 2,
        firstName: "Misbah",
        lastName: "Ali",
        email: "misbah@gmail.com",
        phone: "+92123456789",
        address: "Karachi, Sindh",
      },
      {
        id: 3,
        firstName: "Imran Khan",
        lastName: "Niazi",
        email: "ik.niazi@gmail.com",
        phone: "+92123456789",
        address: "Karachi, Sindh",
      },
      {
        id: 4,
        firstName: "Muraad",
        lastName: "Saeed",
        email: "muraadsaeed@gmail.com",
        phone: "+92123456789",
        address: "Karachi, Sindh",
      },
      {
        id: 5,
        firstName: "Hammad",
        lastName: "Azhar",
        email: "hammadazhar@gmail.com",
        phone: "+92123456789",
        address: "Karachi, Sindh",
      },
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      console.log(state, action);
      state.student = state.students.find((el) => el.id == action.payload);
    },
    clearStudent: (state) => {
      state.student = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
      };
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((el) => el.id != action.payload);
    },
  },
});

export const { getStudent, clearStudent, addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
