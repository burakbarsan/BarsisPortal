import React, { useCallback, useRef, useState } from 'react';
import DropDownBox, { DropDownBoxTypes } from 'devextreme-react/drop-down-box';
import TreeView, { TreeViewTypes } from 'devextreme-react/tree-view';
import DataGrid, {
  Selection, Paging, FilterRow, Scrolling,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';
import './styles.scss';
import 'devextreme/dist/css/dx.light.css';

const gridColumns = ['CompanyName', 'City', 'Phone'];
const ownerLabel = { 'aria-label': 'Owner' };

const makeAsyncDataSource = (jsonFile: string) =>
  new CustomStore({
    loadMode: 'raw',
    key: 'ID',
    load() {
      return fetch(`data/${jsonFile}`).then((response) => response.json());
    },
  });

const gridDataSource = makeAsyncDataSource('testData.json');


const gridBoxDisplayExpr = (item: { CompanyName: any; Phone: any }) =>
  item && `${item.CompanyName} <${item.Phone}>`;

function AirListEnter() {

  const [gridBoxValue, setGridBoxValue] = useState([3]);
  const [isGridBoxOpened, setIsGridBoxOpened] = useState(false);



  const dataGridOnSelectionChanged = useCallback((e: { selectedRowKeys: any }) => {
    setGridBoxValue(e.selectedRowKeys);
    setIsGridBoxOpened(false);
  }, []);

 

  
  const dataGridRender = useCallback(
    () => (
      <DataGrid
        dataSource={gridDataSource}
        columns={gridColumns}
        hoverStateEnabled={true}
        showBorders={true}
        selectedRowKeys={gridBoxValue}
        onSelectionChanged={dataGridOnSelectionChanged}
        height="100%"
      >
        <Selection mode="single" />
        <Scrolling mode="virtual" />
        <Paging
          enabled={true}
          pageSize={10}
        />
        <FilterRow visible={true} />
      </DataGrid>
    ),
    [gridBoxValue, dataGridOnSelectionChanged],
  );



  const syncDataGridSelection = useCallback((e: DropDownBoxTypes.ValueChangedEvent) => {
    setGridBoxValue(e.value);
  }, []);

  const onGridBoxOpened = useCallback((e: DropDownBoxTypes.OptionChangedEvent) => {
    if (e.name === 'opened') {
      setIsGridBoxOpened(e.value);
    }
  }, []);


  return (

    
      
        <div className="dx-field-value">
          <DropDownBox
            value={gridBoxValue}
            opened={isGridBoxOpened}
            valueExpr="ID"
            deferRendering={false}
            inputAttr={ownerLabel}
            displayExpr={gridBoxDisplayExpr}
            placeholder="Select a value..."
            showClearButton={true}
            dataSource={gridDataSource}
            onValueChanged={syncDataGridSelection}
            onOptionChanged={onGridBoxOpened}
            contentRender={dataGridRender}
          />
  
    </div>
  );
}

export default AirListEnter;
