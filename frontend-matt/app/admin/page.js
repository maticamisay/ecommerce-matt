import Card from "@/components/Card";
import Text from "@/components/Text";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Card>
      <Text>Panel Admin</Text>
      <Text tag="h3">Acceso rápido de acciones</Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        <Link
          href="/admin/productos/crear"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Añadir producto
        </Link>
        <Link
          href="/admin/ver-pedidos"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Ver Pedidos
        </Link>
        <Link
          href="/admin/crear-categorias"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Crear Categorías
        </Link>
        <Link
          href="/admin/crear-contenido"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Crear Contenido
        </Link>
        <Link
          href="/admin/productos"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Ver listado de productos
        </Link>
        <Link
          href="/admin/listado-categorias"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Ver listado de categorías
        </Link>
      </div>
    </Card>
  );
};

export default Page;
