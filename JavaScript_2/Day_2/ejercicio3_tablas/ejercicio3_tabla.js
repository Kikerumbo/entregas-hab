/*
Ejercicio DOM 1
☑ Cargar este archivo de javascript desde un documento HTML sin 
  ningún contenido.
☑ A partir de los datos del objeto de abajo crear una <table> en el
  body usando los métodos del DOM aprendidos hasta ahora.
☑ La <table> debe de tener un caption, una fila de <th> con el  
  nombre de las columnas y 5 filas con los datos.
☑ La tabla debe de tener un CSS que diferencie visualmente la fila de 
  cabecera y las filas de datos.
☑ BONUS: detectar y destacar visualmente los valores mayores y menores
  de cada fila.
*/

const tableData = {
    caption: 'Temperatura',
    columns: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    data: [
      [10.3, 11, 10.8, 11.22, 21.3],
      [9.2, 3.1, 7.7, 2.56, 12.7],
      [7.4, 9.22, 5.61, 3.9, 44.25],
      [5.5, 11.12, 11.33, 14.16, 22.37],
      [11.3, 7.75, 15.78, 11.36, 8.02]
    ]
  };
  
  function generateHeaderRow(data) {
    const headerRow = document.createElement('tr');
    for (const item of data) {
      const th = document.createElement('th');
      th.textContent = item;
      headerRow.append(th);
    }
    return headerRow;
  }
  
  function generateTableRows(data) {
    const tableRowData = document.createElement('tr');
    //encontrar el número más alto y más bajo del array.
    let highest = Math.max(...data);
    let lowest = Math.min(...data);
    //Crear la fila de la tabla con las temperaturas del array.
    for (const itemArray of data) {
      const td = document.createElement('td');
      td.textContent = itemArray;
      tableRowData.append(td);
      //aplicar CSS al número más bajo del array para diferenciarlo.
      if (itemArray === lowest) {
        td.style.backgroundColor = 'rgb(0, 0, 255';
        td.style.color = 'white';
      }
      //aplicar CSS al número más alto del array para diferenciarlo.
      if (itemArray === highest) {
        td.style.backgroundColor = 'rgb(255, 0, 0';
        td.style.color = 'yellow';
      }
    }
    return tableRowData;
  }
  
  function buildTable() {
    const section = document.querySelector('#main');
    const table = document.createElement('table');
  
    //Crear el caption
    const caption = document.createElement('caption');
    caption.textContent = tableData.caption;
    table.append(caption);
  
    //Crear cabecera
    const header = generateHeaderRow(tableData.columns);
    table.append(header);
    section.append(table);
  
    //Crear filas de datos
    for (let i = 0; i < tableData.data.length; i++) {
      const datosTabla = generateTableRows(tableData.data[i]);
      table.append(datosTabla);
    }
  }
  
  buildTable();
  