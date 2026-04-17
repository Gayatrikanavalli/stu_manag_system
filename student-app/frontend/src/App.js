import React from "react";
import StudentForm from "./components/StudentForm";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Student Management System</h1>
      <StudentForm />
    </div>
  );
}
