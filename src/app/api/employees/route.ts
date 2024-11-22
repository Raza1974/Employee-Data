import { NextResponse } from 'next/server';

const employees = [
  {
    id: 'E123', // Employee ID is a string
    name: "Javeed Ahmed",
    fatherName: "Imran Ahmed",
    designation: "Software Engineer",
    bps: 17,
    placeOfPosting: "Islamabad"
    
  },
  {
    id: 'E124', // Employee ID is a string
    name: "Pervez Rasheed",
    fatherName: "Iqbal Rasheed",
    designation: "Project Manager",
    bps: 18,
    placeOfPosting: "Lahore"
  }
];

// Get all employees
export async function GET() {
  return NextResponse.json(employees);
}

// Add a new employee
export async function POST(request: Request) {
  const newEmployee = await request.json();
  
  // Ensure the ID is provided and can be both a string and a number
  if (!newEmployee.id) {
    return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 });
  }

  // If the ID is not a string, convert it to a string to maintain consistency
  newEmployee.id = String(newEmployee.id);

  // Push the new employee to the list
  employees.push(newEmployee);

  // Return the added employee
  return NextResponse.json(newEmployee, { status: 201 });
}
