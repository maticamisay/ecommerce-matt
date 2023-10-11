"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "@/graphql/mutations/products";
import { toast } from "react-toastify";

const FormCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createCategory, { data, loading, error }] =
    useMutation(CREATE_PRODUCT);

  const onSubmit = (data) => {
    try {
      createCategory({
        variables: {
          nombre: data.nombre,
        },
      });
      toast.success("Categoría creada correctamente");
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {error && <p className="text-red-500 mb-2">Error: {error.message}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="mb-4 col-span-1 sm:col-span-2 md:col-span-2">
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
        <div className="col-span-full md:col-span-1 flex items-center justify-center mt-4 md:mt-0">
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

export default FormCategory;
