const input_box = document.querySelector("#box");
const list_container = document.querySelector(".list-container");


//eleent yazmadan add elesek alerte element elave et yazlsn 
function addelement() {
    if (input_box.value === '') {
        alert(" eleent elave edin");

    }
    //elave edildikden sonra elementin qarsisinda x yazlsn(icon qoymaga erindim hfewdjsak)
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x ";
        li.appendChild(span)
    }
}

//list container funksiya yaradriq, burada li tagoinda olan 
//eklemente click elesek stylde verdiyi formya cevrilsin
list_container.addEventListener("click", function (a) {
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("check");
    }

    // else halinda ise (xe click edende) elementi remove etsin
    else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
    }
},
    false
);
function saveData(){
    localStorage.setItem("data", JSON.stringify(list_container))
}
function showlist() {
    console.log(JSON.parse(localStorage.getItem("data")));
    // list_container.innerHTML = localStorage.getItem("data");
    // const arr=[{text:"wake up at 8:00"}, {text:"brush your teeth"},{text:"brush your face"}, {text:"make your bed"},{text:"to do homework"}]
        // localStorage.setItem("todolist",JSON.stringify(arr))
        // console.log(JSON.parse(localStorage.getItem("todolist")));
}