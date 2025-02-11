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
      <pre>User Type: {userType}</pre>
      <hr />
      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="q">Busca</label>
          <input
            id="q"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="userType">Tipo de usuário</label>
          <select
            id="userType"
            value={userType ?? ""}
            onChange={(e) => setUserType(e.target.value as UserType)}
            className="border rounded p-2"
          >
            <option value={UserType.ADMIN}>Admin</option>
            <option value={UserType.USER}>User</option>
          </select>
        </div>
        <button type="button" onClick={getQueryString}>
          Buscar
        </button>
      </div>
    </div>
  );
}
