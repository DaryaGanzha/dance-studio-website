let key = 0;

function getValue() {
    let select = document.getElementById("select1");
    let value1 = select.value;
    select = document.getElementById("select2");
    let value2 = select.value;
    let input = document.getElementById("input1")
    let value3 = input.value;
    let node = document.createElement('tr');
    let node1 = document.createElement('td');
    let node2 = document.createElement('td');
    let node3 = document.createElement('td');
    node1.innerHTML = value1;
    node2.innerHTML = value2;
    node3.innerHTML = value3;
    document.getElementById('table').appendChild(node);
    node.appendChild(node1);
    node.appendChild(node2);
    node.appendChild(node3);
    key++;
    raspis = {
        day: value1,
        time: value2,
        note: value3
    };
    localStorage.setItem(key, JSON.stringify(raspis));
    event.preventDefault()
}

window.addEventListener("load", function () {
    let lsLen = localStorage.length;
    for (let i = 1; i <= lsLen; i++) {
        let node1 = document.createElement('td');
        let node2 = document.createElement('td');
        let node3 = document.createElement('td');
        let node = document.createElement('tr');
        raspis = {
            day: "",
            time: "",
            note: ""
        };
        raspis = JSON.parse(localStorage.getItem(i));
        node1.innerHTML = raspis.day;
        node2.innerHTML = raspis.time;
        node3.innerHTML = raspis.note;
        document.getElementById('table').appendChild(node);
        node.appendChild(node1);
        node.appendChild(node2);
        node.appendChild(node3);

    }
});




