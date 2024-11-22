import { NextApiRequest, NextApiResponse } from "next";

const employees: { id: number; name: string; age: number; }[] = []; // Temporary in-memory storage

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newEmployee = req.body;
    newEmployee.id = employees.length + 1; // Assign a new ID
    employees.push(newEmployee);
    return res.status(201).json(newEmployee);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
