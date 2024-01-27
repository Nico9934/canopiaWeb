import { useNavigate } from "react-router-dom";
import { useClientes } from "./UserContext";

const UserForm = () => {
  const { user, setUser } = useClientes();

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate("/budget");
  };

  return (
    <div className="w-full flex flex-col justify-center item mt-10 text-negro">
      <div className="w-10/12 m-auto flex gap-8 font-comfortaa h-auto justify-center">
        <div className="flex w-1/2 justify-center gap-10 flex-col">
          <h3 className="text-3xl">Cotización Gratis</h3>
          <p className="text-sm">
            Cotiza tu presupuesto de paisajismo en el instante. Completa tus
            datos y en breve nos estaremos comunicando con vos.
          </p>
        </div>
        <form
          action=""
          className="w-1/2 justify-center items-center gap-10 flex flex-col flex-wrap"
        >
          <div className="w-full flex flex-col ">
            <label htmlFor="name" className="text-sm">
              Nombre: *
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="text-sm text-verdeOscuro border-b border-verdeOscuro"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="city" className="text-sm">
              Ciudad: *
            </label>
            <input
              type="text"
              id="city"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              className="text-sm text-verdeOscuro border-b border-verdeOscuro"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="email" className="text-sm">
              Email: *
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="text-sm text-verdeOscuro border-b border-verdeOscuro"
            />
          </div>
          <div className="w-full flex flex-col ">
            <label htmlFor="phone" className="text-sm">
              Telefono: *
            </label>
            <input
              type="number"
              id="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="text-sm text-verdeOscuro border-b border-verdeOscuro"
            />
          </div>
          <button
            className="w-full m-auto bg-verdeOscuro p-2"
            type="submit"
            onClick={onHandleSubmit}
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
