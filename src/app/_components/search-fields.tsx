"use client";

export default function SearchFields() {
  return (
    <div className="flex flex-col gap-2">
      <pre>Busca: </pre>
      <pre>Tipo de usuário: </pre>
      <hr />
      <div className="flex items-end gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="q">Busca</label>
          <input id="q" type="text" className="border rounded h-10 px-2" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="userType">Tipo de usuário</label>
          <select id="userType" className="border rounded h-10 px-2">
            <option>Administrador</option>
            <option>Comum</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white h-10 px-4 rounded"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
