import React from "react";

const Exeat = () => {
  const exeatData = {
    matricNo: "MDS/MED/01600001",
    destination: "Lagos",
    reasonForExeat: "Medical appointment",
    dateOfLeave: "02/12/2025",
    dateOfReturn: "02/15/2025",
    parentContact: "08034567890",
    level: "200",
    department: "Medicine and Surgery",
  };

  return (
    <div className="bg-white md:w-[35%] m-auto my-5 p-5 shadow-lg rounded-xl">
      <h2 className="text-lg uppercase font-bold mb-4">Exeat Request</h2>
      <div className="space-y-2">
        <p className="py-5">Matriculation Number: {exeatData.matricNo}</p>
        <p className="py-5">Destination: {exeatData.destination}</p>
        <p className="py-5">Reason: {exeatData.reasonForExeat}</p>
        <p className="py-5">Date of Leave: {exeatData.dateOfLeave}</p>
        <p className="py-5">Date of Return: {exeatData.dateOfReturn}</p>
        <p className="py-5">Parent Contact: {exeatData.parentContact}</p>
        <p className="py-5">Level: {exeatData.level}</p>
        <p className="py-5">Department: {exeatData.department}</p>
        <p className="py-5">Chief Porter Approved: {"True"}</p>
        <p className="py-5">Dean Approved: {"False"}</p>
        <p className="py-5">Gate Approved: {"False"}</p>
      </div>
    </div>
  );
};

export default Exeat;
