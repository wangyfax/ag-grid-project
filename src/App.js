import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ReactSelect from './ReactSelect.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: 'name',
          width: 300,
          editable: false,
          cellRenderer: 'reactSelect',
          cellStyle: {
            overflow: 'visible',
            textAlign: 'center'
          }
        },
        {
          field: 'mood',
          cellRenderer: 'moodRenderer',
          cellEditor: 'moodEditor',
          editable: true,
          width: 300,
        },
        {
          headerName: 'Numeric',
          field: 'number',
          cellEditor: 'numericEditor',
          editable: true,
          width: 280,
        },
      ],
      rowData: this.createRowData(),
      frameworkComponents: {
        reactSelect: ReactSelect,
      },
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  createRowData = () => {
    return [
      {
        name: 'Bob',
        mood: 'Happy',
        number: 10,
      }
    ]
  };

  render () {
    return (
      <div style={{ width: '600px', height: '400px', margin: 'auto' }}>
        <div style={{ height: '100%', boxSizing: 'border-box' }}>
          <div
            id="myGrid"
            style={{
              height: '100%',
              width: '100%',
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              frameworkComponents={this.state.frameworkComponents}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;