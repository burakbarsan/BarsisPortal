import React, { useCallback, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DataGrid, {
 Column, DataGridTypes, Editing, Export, Lookup, Paging, SearchPanel, Toolbar
} from 'devextreme-react/data-grid';
import { employees as defaultEmployees, states, getMaxID } from './data';
import './assets/styles.scss';
import 'devextreme/dist/css/dx.light.css';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import ContextMenu, { ContextMenuTypes } from 'devextreme-react/context-menu';
import { object } from 'yup';
import resim from 'logo.svg'
import { Button } from 'reactstrap';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';




const App = () => {
  const [employees, setEmployees] = useState(defaultEmployees);
  const [isChecked, setIsChecked] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    setIsChecked(prevState => !prevState); 
  }, []);
  const toggleMenu = useCallback(() => {
    console.log("Toggle menu function called");
    setIsMenuOpen(prevState => !prevState); 
  }, []);
 
  

  const onExporting = (e: DataGridTypes.ExportingEvent) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
  
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
  };
  const itemClick = (e: ContextMenuTypes.ItemClickEvent) => {
  
  };
  const contextMenuItems = [
    {
      text: 'Yeni Yük',
      icon: 'dx-icon-plus',
     
    },
    { text: 'Yük Kopyala', icon: 'dx-icon-copy' },
    { text: 'Yeni Sefer Oluştur', icon: 'dx-icon-newfolder' },
    { text: 'Var Olan Sefere Ekle', icon: 'dx-icon-newfolder' },
    { text: 'Raporlar', icon: 'dx-icon-file' },
    { text: 'Yük Masrafı', icon: 'dx-icon-bookmark' },
  ];
  
  const ItemTemplate = (itemData:any) => (
    <div className="item-template-container">
      {itemData.icon && <span className={`${itemData.icon} dx-icon`}></span>}
      <span className="dx-menu-item-text">{itemData.text}</span>
      {itemData.items && <span className="dx-icon-spinright dx-icon"></span>}
    </div>
  );

  const renderGridCell = (cellData: DataGridTypes.ColumnCellTemplateData) => (
    <div>
    
    
      <IconButton id="image" aria-label="dot">
      <MoreVertIcon />
</IconButton>
    </div>
  );

  return (
    <div>
<ContextMenu
      dataSource={contextMenuItems}
      width={200}
      target="#image"
      itemRender={ItemTemplate}
      onItemClick={itemClick}
      showEvent="dxclick" />

      <DataGrid
        id="gridContainer"
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
        selection={{ mode: 'multiple', showCheckBoxesMode: 'always'}}
        rowAlternationEnabled={true}
        onExporting={onExporting}
        wordWrapEnabled={false}
        columnAutoWidth={true}
       >
        
        <Editing
          mode="row"
          useIcons={true}
          allowUpdating={false}
          allowAdding={true}
          allowDeleting={false} 
           />
     

        <Column  width={40} cellRender={renderGridCell} />
        <Column dataField="Prefix" caption="Yük No"/>
        <Column dataField="FirstName" caption="Sefer No"/>
        <Column dataField="LastName" caption="Dosya No"/>
        <Column dataField="Position" caption="IMEX" width={130} />
        <Column dataField="Position" caption="Departman" width={130} />
        <Column dataField="Position" caption="Kar. Dpt." width={125} />
        <Column dataField="Position" caption="Yük Dpt." width={125} />
        <Column dataField="Position" caption="Firma" width={125} />
        <Column dataField="Position" caption="Firma Adı" width={125} />
        <Column dataField="Position" caption="Gönderici" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Column dataField="Position" caption="Alıcı" width={125} />
        <Paging defaultPageSize={10} />
        <SearchPanel visible={true} width={240} />
        <Export enabled={true} allowExportSelectedData={true} />
      </DataGrid>
    </div>
  );
};

export default App;
