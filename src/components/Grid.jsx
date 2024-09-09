import React from 'react';
import '../Asserts/style/grid.css';

const Grid = () => {
  const data = [
    { name: 'John Doe', age: 30, designation: 'Developer', salary: '$5000' },
    { name: 'Jane Smith', age: 25, designation: 'Designer', salary: '$4500' },
    { name: 'Michael Johnson', age: 35, designation: 'Manager', salary: '$6000' },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>Grid</h1>
      <p>This is the Grid section.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.designation}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
