"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "@/graphql/mutations/products";
import { toast } from "react-toastify";
import { FaChevronDown } from "react-icons/fa";

const FormProduct = ({ categories = [] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT);

  const onSubmit = (data) => {
    try {
      console.log(data);
      // createProduct({
      //   variables: {
      //     nombre: data.nombre,
      //     precio: parseFloat(data.precio),
      //     categoria: data.categoria,
      //   },
      // });
      // toast.success("Producto creado correctamente");
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <>
      {error && <p className="text-red-500 mb-2">Error: {error.message}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre:
          </label>
          <input
            {...register("nombre", { required: "Este campo es obligatorio" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre del producto"
          />
          {errors.nombre && (
            <span className="text-red-500 text-xs mt-2">
              {errors.nombre.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="precio"
          >
            Precio:
          </label>
          <input
            {...register("precio", { required: "Este campo es obligatorio" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="precio"
            type="number"
            placeholder="Precio del producto"
          />
          {errors.precio && (
            <span className="text-red-500 text-xs mt-2">
              {errors.precio.message}
            </span>
          )}
        </div>
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoria"
          >
            Categoría:
          </label>
          <div className="relative">
            <select
              {...register("categoria", {
                required: "Este campo es obligatorio",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="categoria"
              defaultValue={""}
            >
              <option value="" disabled>
                Seleccione una categoría
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            {errors.categoria && (
              <span className="text-red-500 text-xs mt-2">
                {errors.categoria.message}
              </span>
            )}
          </div>
        </div>
        <div className="col-span-full flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? "Creando..." : "Crear Producto"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormProduct;
