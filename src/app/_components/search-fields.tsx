"use client";

import {parseAsStringEnum, parseAsString, useQueryState} from "nuqs";
import {createSerializer} from "nuqs/server";

enum UserType {
  ADMIN = "admin",
  USER = "user",
}

const serialize = createSerializer({
  q: parseAsString,
  userType: parseAsStringEnum<UserType>(Object.values(UserType)),
});

export default function SearchFields() {
  const [q, setQ] = useQueryState("q", {defaultValue: ""});
  const [userType, setUserType] = useQueryState("userType", {
    ...parseAsStringEnum<UserType>(Object.values(UserType)),
    defaultValue: UserType.USER,
  });

  function getQueryString() {
    console.log(serialize({q, userType}));
  }

  return (
    <div className="flex flex-col gap-2">
      <pre>Busca: {q}</pre>
      <pre>Tipo de usuário: {userType}</pre>
      <hr />
      <div className="flex items-end gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="q">Busca</label>
          <input
            id="q"
            type="text"
            className="border rounded h-10 px-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="userType">Tipo de usuário</label>
          <select
            id="userType"
            className="border rounded h-10 px-2"
            value={userType}
            onChange={(e) => setUserType(e.target.value as UserType)}
          >
            <option value={UserType.ADMIN}>Administrador</option>
            <option value={UserType.USER}>Comum</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white h-10 px-4 rounded"
          onClick={getQueryString}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
