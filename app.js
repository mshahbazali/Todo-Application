function display() {

    document.getElementById("heading").style.display = "none";
    document.getElementById("searchInput").style.display = "block";
}
function back() {

    document.getElementById("heading").style.display = "block";
    document.getElementById("searchInput").style.display = "none";
}

var addInput = document.getElementById("addinput");
var addBtn = document.getElementById("addBtn");
var view = document.getElementById("taskView");

addBtn.addEventListener("click", function () {

    if (addInput.value === "") {
        alert("Please Enter Your Task")
    }
    else {
        displayTask()
    }

})

function displayTask() {

    var taskList = document.getElementById("taskView");
    var tr = document.createElement('tr');
    taskList.appendChild(tr);
    // tr.setAttribute("onClick","deleteitem()")
    var td = document.createElement('td');
    td.className = "name";
    tr.appendChild(td);
    td.setAttribute("id", "name")
    var tdText = document.createTextNode(addInput.value);
    td.appendChild(tdText)
    var td2 = document.createElement('td');
    tr.appendChild(td2)
    td2.className = "edit";
    var editImg = document.createElement('img');
    td2.appendChild(editImg);
    editImg.src = 'edit.png';
    editImg.className = "editimg"
    editImg.setAttribute("onClick", "editVal(this)")
    var td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.className = "delete";
    var deleteImg = document.createElement('img');
    deleteImg.src = 'delete.png';
    td3.appendChild(deleteImg);
    deleteImg.className = "deleteimg"
    deleteImg.setAttribute("onClick", "deleteitem(this)");
    deleteImg.setAttribute("id", "deleteImg");

    var td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.className = "complete";
    var completeImg = document.createElement('img');
    completeImg.src = 'complete.png';
    td4.appendChild(completeImg);
    completeImg.className = "completeimg"
    completeImg.setAttribute("onClick", "completeTask(this)");
    completeImg.setAttribute("id", "completeImg");

    addInput.value = '';
}

function alldelete() {
    view.innerHTML = '';
}

function deleteitem(e) {

    e.parentNode.parentNode.remove()
}

function editVal(e) {

    // var a = e.parentNode.parentNode.firstChild.innerText

    // var b = prompt("Enter");

    var addInput = document.getElementById("addinput");
    // var addBtn = document.getElementById("addBtn");
    var updateVal = document.getElementById("updateBtn");
    addInput.value = e.parentNode.parentNode.firstChild.innerText
    document.getElementById("addBtn").style.display = "none"
    document.getElementById("updateBtn").style.display = "inline"
    // e.parentNode.parentNode.firstChild.innerText = b


}

function updateVal(e) {

    var view = document.getElementById("name");
    view.parentNode.firstChild.innerText = addInput.value
    document.getElementById("addBtn").style.display = "inline"
    document.getElementById("updateBtn").style.display = "none"
    view.setAttribute("class", "name")
    addInput.value = ""
}

function completeTask(a) {

    var b = document.getElementById("name");
    a.parentNode.parentNode.firstChild.innerText = b.innerText
    b.setAttribute("class", "complete")


}




var searchInput = document.getElementById("search");
searchInput.addEventListener("input", function () {
    var trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function (item) {
        var searchedtext = item.getElementsByTagName("td")[0].innerText;
        var searchInputval = searchInput.value;
        var re = new RegExp(searchInputval, 'gi');
        if (searchedtext.match(re)) {
            item.style.display = "taskView";
        }
        else {
            item.style.display = "none";
        }
    })
})




