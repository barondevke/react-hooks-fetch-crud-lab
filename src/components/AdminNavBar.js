import React from "react";

function AdminNavBar({ onChangePage, update }) {


  return (
    <nav>
      <button onClick={() => onChangePage("Form")}>New Question</button>
      <button onClick={() => update()}>View Questions</button>

    </nav>
  );
}

export default AdminNavBar;
