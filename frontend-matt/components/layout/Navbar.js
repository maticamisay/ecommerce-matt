// src/components/Navbar.js

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link className="text-2xl font-bold" href={"/"}>
              Matt
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/productos" className="hover:underline">
              Productos
            </Link>
            <Link href="/contacto" className="hover:underline">
              Contacto
            </Link>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/admin" className="hover:underline">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
