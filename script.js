'use strict';

function makeNode(number, tree) {
    var leftChild = document.createElement("div");
    leftChild.classList.add("tree", "left-child")

    var node = document.createElement("div");
    node.classList.add("node")
    var text = document.createTextNode(number)
    node.appendChild(text)

    var rightChild = document.createElement("div");
    rightChild.classList.add("tree", "right-child")

    tree.appendChild(node)
    tree.appendChild(leftChild)
    tree.appendChild(rightChild)

    tree.classList.add("leaf")
}

function binaryInsert(number, tree) {
    var childNodes = tree.childNodes

    if (childNodes.length == 0) {
        makeNode(number,tree)
        return
    }

    var textNode = childNodes[0].childNodes[0]
    var nodeVal = parseInt(textNode.textContent)

    tree.classList.remove("leaf")

    if (number < nodeVal)
        binaryInsert(number, childNodes[1])
    else
        binaryInsert(number, childNodes[2])
}

function add() {
    var text = document.getElementById("text-field").value;
    var numbers = text.split(/[^0-9]+/)

    if (numbers[0] == "")
        numbers.splice(0, 1)
    if (numbers[numbers.length - 1] == "")
        numbers.pop()

    var root = document.getElementById("root")
    numbers.forEach(element => {
        binaryInsert(parseInt(element), root)
    });
}

function clear() {
    var root = document.getElementById("root")
    while (root.firstChild) {
        root.removeChild(root.firstChild)
    }
}