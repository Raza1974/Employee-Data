"use client"; // Add this at the top to mark the file as a Client Component

import { useState } from "react";
import Layout from "@/app/layout";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export default function EmployeeData() {
  const [employeeData, setEmployeeData] = useState({
   id : "",
    name: "",
    fatherName: "",
    designation: "",
    bs: "",
    medicalFitnessCertificate: "",
    dob: "",
    dor: "",
    doa: "",
    cnic: "",
    sindhBankNo: "",
    postalAddress: "",
    cellNo: "",
    placeOfPosting: "",
    basicPay: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(employeeData);
    alert("Data submitted successfully!");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("Downloading Excel file...");
  };

  return (
    <Layout>
      <h1 className="mb-4 text-2xl font-bold">Employee Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(employeeData).map(([key, value]) => (
          <div key={key}>
            <Label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Label>
            <Input
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
      <div className="mt-8 space-x-4">
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleDownload}>Download Excel</Button>
      </div>
    </Layout>
  );
}
