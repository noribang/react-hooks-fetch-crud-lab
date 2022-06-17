import React from "react";

/* PASS PAGE SET STATE AS PROPS. */
function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
