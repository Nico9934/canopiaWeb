import React, { useEffect, useState } from "react";
import { getItemsRequest, newBudgetRequest } from "../api/budget";
import { useClientes } from "./UserContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const UserBudget = () => {
  const {
    dataList,
    setDataList,
    services,
    setServices,
    newBudget,
    setUser,
    onLoad,
    setOnLoad,
  } = useClientes();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getItemsRequest();
        setDataList(res.data);
      } catch (error) {
        if (error) console.error("Error al obtener los items:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newPresupuestos = [...services];
    newPresupuestos[index][name] = value;
    setServices(newPresupuestos);
  };
  const handleAddPresupuesto = () => {
    setServices([
      ...services,
      {
        id: Date.now(),
        item: "",
        cantidad: "",
      },
    ]);
  };
  const handleRemovePresupuesto = (index) => {
    const newPresupuestos = [...services];
    newPresupuestos.splice(index, 1);
    setServices(newPresupuestos);
  };
  const handleSubmit = async () => {
    setOnLoad(true);
    const res = await newBudget();
    if (res.status == 200) {
      setOnLoad(false);
      navigate("/success");
    }

    setUser({
      name: "",
      city: "",
      email: "",
      phone: "",
    });
    setServices([{ id: Math.random(), item: "", cantidad: "" }]);
  };

  return (
    <>
      {onLoad && <Spinner />}
      <div className="container mx-auto mt-8 font-comfortaa items-center justify-center flex flex-col">
        {services.map((presupuesto, index) => (
          <div
            key={presupuesto.id}
            className="mb-4 p-4 border border-verdeOscuro"
          >
            <h2 className="text-sm font-semibold mb-2">Servicio {index + 1}</h2>
            <div className="flex w-full justify-around items-center text-sm text-negro gap-6">
              <div className="flex w-full items-center">
                <label className="mr-2">Item:</label>
                <select
                  className="border text-sm border-verdeOscuro p-2 flex-1"
                  name="item"
                  value={presupuesto.item}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <option value="" disabled>
                    -- Seleccione una opción --
                  </option>
                  {dataList.map((item) => (
                    <option
                      key={item.id}
                      value={item.name}
                      className="text-negro"
                    >
                      {item.name} {item.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-full items-center">
                <label className="mr-2">Cantidad:</label>
                <input
                  type="number"
                  className="border border-verdeOscuro p-2 flex-1"
                  name="cantidad"
                  value={presupuesto.cantidad}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
              <button
                className="bg-violeta hover:cursor-pointer hover:opacity-90 transition-all text-gris px-4 py-2"
                onClick={() => handleRemovePresupuesto(index)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}

        <div className="flex mb-4 w-full justify-around">
          <button
            className="bg-verdeOscuro hover:cursor-pointer hover:opacity-90 transition-all text-gris px-4 py-2"
            onClick={handleAddPresupuesto}
          >
            Agregar Presupuesto
          </button>
          <button
            className="bg-verdeOscuro hover:cursor-pointer hover:opacity-90 transition-all text-gris px-4 py-2"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default UserBudget;
