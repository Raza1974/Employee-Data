import EMS from '@/app/ems-data/page';


export default function  Home (){
  return (
    <div>
      <div className="container">
  <h1>_____________________________________________________________________________________________________________________________________________________________________________________________</h1>

</div>

      <EMS />
      </div>
  );
}


// interface Employee {
//   id: string; // Employee ID as a string to support both numbers and text
//   name: string;
//   fatherName: string;
//   designation: string;
//   bps: number;
//   placeOfPosting: string;
// }

// export default function Home() {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [newEmployee, setNewEmployee] = useState<Employee>({
//     id: '',
//     name: '',
//     fatherName: '',
//     designation: '',
//     bps: 0,
//     placeOfPosting: '',
//   });

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch('/api/employees');
//       if (response.ok) {
//         const data = await response.json();
//         setEmployees(data);
//       } else {
//         console.error('Failed to fetch employees.');
//       }
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewEmployee((prev) => ({
//       ...prev,
//       [name]: name === 'bps' ? parseInt(value) || 0 : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/employees', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newEmployee),
//       });
//       if (response.ok) {
//         fetchEmployees();
//         setNewEmployee({
//           id: '',
//           name: '',
//           fatherName: '',
//           designation: '',
//           bps: 0,
//           placeOfPosting: '',
//         });
//       } else {
//         console.error('Failed to add employee.');
//       }
//     } catch (error) {
//       console.error('Error adding employee:', error);
//     }
//   };

//   return (
//     <div className="container p-4 mx-auto">
//       <h1 className="mb-4 text-3xl font-bold">Welcome to the EMS Home Page</h1>
//       <p>This is the homepage of the Employee Management System (EMS).</p>

//       <div className={styles.container}>
//         <h1 className={styles.title}>Employee Management System</h1>

//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             name="id"
//             value={newEmployee.id}
//             onChange={handleInputChange}
//             placeholder="Employee ID (e.g., E123, 456)"
//             required
//           />
//           <input
//             type="text"
//             name="name"
//             value={newEmployee.name}
//             onChange={handleInputChange}
//             placeholder="Name"
//             required
//           />
//           <input
//             type="text"
//             name="fatherName"
//             value={newEmployee.fatherName}
//             onChange={handleInputChange}
//             placeholder="Father's Name"
//             required
//           />
//           <input
//             type="text"
//             name="designation"
//             value={newEmployee.designation}
//             onChange={handleInputChange}
//             placeholder="Designation"
//             required
//           />
//           <input
//             type="number"
//             name="bps"
//             value={newEmployee.bps}
//             onChange={handleInputChange}
//             placeholder="BPS"
//             required
//           />
//           <input
//             type="text"
//             name="placeOfPosting"
//             value={newEmployee.placeOfPosting}
//             onChange={handleInputChange}
//             placeholder="Place of Posting"
//             required
//           />
//           <button type="submit">Add Employee</button>
//         </form>

//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Sr. No.</th>
//               <th>Employee ID</th>
//               <th>Name</th>
//               <th>Father Name</th>
//               <th>Designation</th>
//               <th>BPS</th>
//               <th>Place of Posting</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => (
//               <tr key={employee.id}>
//                 <td>{index + 1}</td> {/* Sr. No. auto-generated */}
//                 <td>{employee.id}</td> {/* Employee ID can be text or number */}
//                 <td>{employee.name}</td>
//                 <td>{employee.fatherName}</td>
//                 <td>{employee.designation}</td>
//                 <td>{employee.bps}</td>
//                 <td>{employee.placeOfPosting}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
