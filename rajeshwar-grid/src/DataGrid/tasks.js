import React, { useRef } from "react";
import "devextreme/data/odata/store";

import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
  Toolbar,
  Item,
} from "devextreme-react/data-grid";
import CUSTOMER from "./customer.json";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import { Button } from "devextreme-react/button";

const dataSource = new DataSource({
  store: new ArrayStore({
    data: CUSTOMER,
    key: "ID",
  }),
});

export default function Task() {
  const dataGridRef = useRef();

  const Save = async () => {
    const updatedData = await dataGridRef.current.instance
      .getDataSource()
      .store()
      .load();
      console.log(JSON.stringify(updatedData));   
  };

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Tasks</h2>
      <DataGrid
        id="gridContainer"
        dataSource={dataSource}
        ref={dataGridRef}
        showBorders={true}
    
      >
        <Editing
          mode="cell"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />

        <Selection mode="multiple" />
        <Paging enabled={false} />
        <Editing
          mode="cell"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />

        <Column dataField="Prefix" caption="Title" width={55} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={170} />
        
        <Column dataField="BirthDate" dataType="date" />
        <Toolbar>
          <Item name="addRowButton" showText="always" />
        </Toolbar>
      </DataGrid>
      <Button onClick={Save}>Save</Button>
    </React.Fragment>
  );
}
