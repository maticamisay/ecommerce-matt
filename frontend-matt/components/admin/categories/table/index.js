import React from "react";

const DataTable = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Nombre
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Precio
          </th>
          <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Categoria
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
            <td className="py-2 px-4 border-b border-gray-200">
              ${item.price}
            </td>
            <td className="py-2 px-4 border-b border-gray-200">
              {item.category}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
