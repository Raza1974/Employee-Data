'use client';

import { useState, useEffect } from 'react';
import styles from '@/app/index.module.css'; // Ensure you have this CSS module or create it

interface Employee {
  id: string; // Employee ID as a string to support both numbers and text
  name: string;
  fatherName: string;
  designation: string;
  bps: number;
  placeOfPosting: string;
  contact: number; // Number
}

export default function EMS() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, 'id'>>({
    name: '',
    fatherName: '',
    designation: '',
    bps: 0,
    placeOfPosting: '',
    contact: 0,
  });
  const [newEmployeeId, setNewEmployeeId] = useState<string>('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      } else {
        console.error('Failed to fetch employees.');
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: name === 'bps' || name === 'contact' ? parseInt(value) || 0 : value,
    }));
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmployeeId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeId) {
      console.error('Employee ID is required');
      return;
    }
    const newEmployeeWithId = { ...newEmployee, id: newEmployeeId };

    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployeeWithId),
      });
      if (response.ok) {
        fetchEmployees();
        setNewEmployee({
          name: '',
          fatherName: '',
          designation: '',
          bps: 0,
          placeOfPosting: '',
          contact: 0,
        });
        setNewEmployeeId('');
      } else {
        console.error('Failed to add employee.');
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Welcome to the EMS Home Page</h1>
      <p>This is the homepage of the Employee Management System (EMS).</p>

      <div className={styles.container}>
        <h1 className={styles.title}>Employee Management System</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="id"
            value={newEmployeeId}
            onChange={handleIdChange}
            placeholder="Employee ID (e.g., E123, 456)"
            required
          />
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="fatherName"
            value={newEmployee.fatherName}
            onChange={handleInputChange}
            placeholder="Father's Name"
            required
          />
          <input
            type="text"
            name="designation"
            value={newEmployee.designation}
            onChange={handleInputChange}
            placeholder="Designation"
            required
          />
          <input
            type="number"
            name="bps"
            value={newEmployee.bps}
            onChange={handleInputChange}
            placeholder="BPS"
            required
          />
          <input
            type="text"
            name="placeOfPosting"
            value={newEmployee.placeOfPosting}
            onChange={handleInputChange}
            placeholder="Place of Posting"
            required
          />
          <input
            type="number"
            name="contact"
            value={newEmployee.contact}
            onChange={handleInputChange}
            placeholder="Contact (e.g., +923000000000)"
            required
          />
          <button type="submit">Add Employee</button>
        </form>

        <table className={styles.table}>
        <thead>
  <tr>
    <th>Sr. No.</th>
    <th>Employee ID</th>
    <th>Name</th>
    <th>Father Name</th>
    <th>Designation</th>
    <th>BPS</th>
    <th>Place of Posting</th>
    <th>Contact No</th> {/* Corrected the header label */}
  </tr>
</thead>
<tbody>
  {employees.map((employee, index) => (
    <tr key={employee.id}>
      <td>{index + 1}</td>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.fatherName}</td>
      <td>{employee.designation}</td>
      <td>{employee.bps}</td>
      <td>{employee.placeOfPosting}</td>
      <td>{employee.contact}</td> {/* Ensure contact is being correctly displayed */}
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}
