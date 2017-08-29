function arr(rowsCount, columnsCount){
 var matrix =[];

 for(var i=0; i<rowsCount; i++ ){
    matrix[i]=[];
    for(var x=0; x<columnsCount; x++){
     matrix[i].push(0);
    }
  }
return matrix;
}

var newmatrix = arr(4,4);
document.getElementById('step-2').innerHTML = newmatrix;

function renderPlainText(data){

    var  rows =[];
    data.forEach(function(columns){
      var row ='';
      row = columns.join('') + "<br>";
      rows.push(row);
    });
   var result = rows.join('\n')
  return result;
}

var join = renderPlainText(arr());
document.getElementById("div").innerHTML= join ;

function renderHTMLTable(matrix){

    var text = '';

    matrix.forEach(function(el){
      text += "<tr>";

      for(var i=0; i< el.length; i++){
         text += '<td>' + el[i] + "</td>";
      }

      text += "</tr>";
    })

    return text;
}

document.getElementById('step-3').innerHTML = renderHTMLTable(arr(4,4));

function matrixFillsequence(data){

    var newmatrixx= [];
    var counter = 0;
    for(var rownum=0; rownum < data.length ; rownum++){

      newmatrixx[rownum] = [];
      var columnscount= data[rownum].length;

      for(var i=0 ; i < columnscount ; i++){
        newmatrixx[rownum].push(counter);
        counter++;
      }
    }
    return newmatrixx;
}


var newmatrix= arr(4,4);
var transformed = matrixFillsequence(newmatrix);
document.getElementById('step-4').innerHTML = renderHTMLTable(transformed);

function matrixFillRowNum (data){

  var matrixx=[];

  data.forEach(function(rows, index){
    matrixx[index]= [];
    for(var i=0; i<data[index].length; i++){
      matrixx[index].push(index);
    }
  })
  return matrixx;
}

var newmatrix= arr(5,2);
var fillRow = matrixFillRowNum(newmatrix);
document.getElementById('step-5').innerHTML = renderPlainText(fillRow);

function matrixFillColNum(data){
  var matrixx=[];
  var counter=0;
  data.forEach(function(col,index){
     matrixx[index]=[];
     for(var i=0; i< data[index].length; i++){
       matrixx[index].push(counter+i);
     }
  })
  return matrixx;
}

var newMatrix = arr(2,5);
var fillCol = matrixFillColNum(newMatrix);
document.getElementById('step-6').innerHTML = renderPlainText(fillCol);

function matrixIncrement(data){

  var newmatrixx = [];
  var counter = 0;
  data.forEach(function(increment, index){
    newmatrixx[index]=[];
    for(var i=0; i < data[index].length; i++){
      counter++;
      newmatrixx[index].push(counter);
    }
  })
  return newmatrixx;
}

var newmatrix= arr(3,5);
var fillIncrement = matrixIncrement(newmatrix);
document.getElementById('step-7').innerHTML = renderHTMLTable(fillIncrement);


function matrixFillText(data){

  var text = 'abcdefghijklmnopqrstuvwxyz';
  var strToArr = text.split('');
  var newmatrixx = [];
  counter = 0;

  data.forEach(function(txt, index){

    newmatrixx[index]=[];

    for(var i=0; i<data[index].length; i++){
      newmatrixx[index].push(strToArr[counter]);
      counter++;
    }
  })
  return newmatrixx;
}

var newMatrix = arr(3,5);
var fillText = matrixFillText(newMatrix);
document.getElementById('step-8').innerHTML = renderHTMLTable(fillText);


function renderTabelDom(element, data){


  data.forEach(function(columns, index){

     var row = document.createElement('tr');

     for(var i=0; i < data[index].length; i++){

      var col = document.createElement('td');
      col.appendChild(document.createTextNode(data[index][i]));
      // col.textContent=data[index][i];
      row.appendChild(col);
     }
     element.appendChild(row);
  })
}

var newmatrix= arr(9,9);

renderTabelDom(document.getElementById("bonus"),matrixFillsequence(newmatrix));
document.getElementById("bonus").setAttribute("border", "4");
document.getElementById("bonus").setAttribute("style","background-color: #2f3f4f");