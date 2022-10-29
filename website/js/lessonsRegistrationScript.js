function getValue() {
    let select = document.getElementById("select1");
    let value1 = select.value;
    select = document.getElementById("select2");
    let value2 = select.value;
    let input = document.getElementById("input1")
    let value3 = input.value;
    let nodet = document.createElement('tr');
    let node = document.createElement('td');
    let node2 = document.createElement('td');
    let node3 = document.createElement('td');
    node.innerHTML = "<div>" + value1 + "</div>";
    node2.innerHTML = "<div>" + value2 + "</div> ";
    node3.innerHTML = "<div>" + value3 + "</div> ";
    document.getElementById('table').appendChild(nodet);
    nodet.appendChild(node);
    nodet.appendChild(node2);
    nodet.appendChild(node3);
    event.preventDefault()
}

