/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// 1. Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// 2. Insert row and store newRowID
const newRowID: RowID = CRUD.insertRow(row);

// 3. Create updated row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// 4. Update and delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
