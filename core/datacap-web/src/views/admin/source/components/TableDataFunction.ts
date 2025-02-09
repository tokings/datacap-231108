import TableGridOptions from "@/components/table/TableGridOptions";

/**
 * Create column definitions based on headers and types.
 *
 * @param {any[]} headers - The array of headers.
 * @param {any[]} types - The array of types.
 * @return {any[]} The array of column definitions.
 */
const createColumnDefs = (headers: any[], types: any[]): any[] => {
  const columnDefs = [];
  headers.forEach((header, index) => {
    const columnDef = {
      headerName: header,
      field: header,
      headerTooltip: header + ' [' + types[index] + ']',
      unSortIcon: true,
      cellRenderer: params => {
        return '<div style="white-space: pre-wrap;">' + params.value + '</div>';
      },
      cellEditorPopup: true,
      cellEditor: 'agLargeTextCellEditor',
      cellEditorParams: {maxLength: 9999999999999, rows: 10}
    };
    columnDefs.push(columnDef);
  })
  return columnDefs;
};

/**
 * Creates data editor options.
 *
 * @param {any} i18n - The i18n object.
 * @return {Object} The grid options.
 */
const createDataEditorOptions = (i18n: any): object => {
  const gridOptions = {
    animateRows: true,
    localeText: TableGridOptions.createLocale(i18n),
    // Fixed issues: https://github.com/EdurtIO/datacap/issues/219
    suppressFieldDotNotation: true,
    // Turn on multi-column sorting
    alwaysMultiSort: true,
    defaultColDef: {
      sortable: true,
      resizable: true,
      wrapText: true,
      editable: true,
      // Prevents the front-end from reordering data
      comparator: (valueA, valueB, nodeA, nodeB, isDescending) => 0
    }
  }
  return gridOptions;
}

export {
  createColumnDefs,
  createDataEditorOptions
}
