import { NextResponse } from 'next/server';

const employees = [
  {
    id: 1,
    name: "John Doe",
    fatherName: "Michael Doe",
    designation: "Software Engineer",
    bps: 17,
    placeOfPosting: "Islamabad"
  },
  {
    id: 2,
    name: "Jane Smith",
    fatherName: "Robert Smith",
    designation: "Project Manager",
    bps: 18,
    placeOfPosting: "Lahore"
  }
];

export async function GET() {
  return NextResponse.json(employees);
}

export async function POST(request: Request) {
  const newEmployee = await request.json();
  newEmployee.id = employees.length + 1;
  employees.push(newEmployee);
  return NextResponse.json(newEmployee, { status: 201 });
}