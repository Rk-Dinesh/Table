function createele (tagname,attrname,attrvalue,content) {
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}
function input(tagname,attrname,attrvalue){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;  
}

function inputele(tagname){
    let ele = document.createElement(tagname);
    return ele;  
}

function input1(tagname,content){
    let ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;  
}

var table=input("table","class","table");
var thead=input("thead","class","thead");

var tr=inputele("tr");
thead.append(tr);
var th1=createele("th","scope","col","First");
var th2 = createele("th","scope","col","last");
tr.append(th1,th2);
var tbody = inputele("tbody");
var tr1 = inputele("tr");
var td1 = input1("td","mark");
var td2 = input1("td","Otto");
tr1.append(td1,td2);
tbody.append(tr1);
table.append(thead,tbody);
document.body.append(table);
