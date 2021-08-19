// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

const rec1 = document.getElementById("rec-1");
const rec2 = document.getElementById("rec-2");
const rec3 = document.getElementById("rec-3");
const rec4 = document.getElementById("rec-4");
const rec5 = document.getElementById("rec-5");

const asec = document.getElementById("ord-1");
const desc = document.getElementById("ord-2");

let ordbtn = 1;

function changeorder(order) {
    if (order != ordbtn) {
        if (order == 1) {
            asec.classList.add("btn-primary");
            asec.classList.remove("btn-outline-primary");

            desc.classList.add("btn-outline-primary");
            desc.classList.remove("btn-primary");
        }
        else {
            desc.classList.add("btn-primary");
            desc.classList.remove("btn-outline-primary");

            asec.classList.add("btn-outline-primary");
            asec.classList.remove("btn-primary");
        }
        ordbtn = order;
    }
}


let recbtn = 1;

function recchange(numberofrec) {
    if (numberofrec != recbtn) {
        if (numberofrec == 1) {
            rec1.classList.add("btn-primary");
            rec1.classList.remove("btn-outline-primary");
        }
        else if (numberofrec == 2) {
            rec2.classList.add("btn-primary");
            rec2.classList.remove("btn-outline-primary");
        }
        else if (numberofrec == 3) {
            rec3.classList.add("btn-primary");
            rec3.classList.remove("btn-outline-primary");
        }
        else if (numberofrec == 4) {
            rec4.classList.add("btn-primary");
            rec4.classList.remove("btn-outline-primary");
        }
        else if (numberofrec == 5) {
            rec5.classList.add("btn-primary");
            rec5.classList.remove("btn-outline-primary");
        }

        if (recbtn == 1) {
            rec1.classList.add("btn-outline-primary");
            rec1.classList.remove("btn-primary");
        }
        else if (recbtn == 2) {
            rec2.classList.add("btn-outline-primary");
            rec2.classList.remove("btn-primary");
        }
        else if (recbtn == 3) {
            rec3.classList.add("btn-outline-primary");
            rec3.classList.remove("btn-primary");
        }
        else if (recbtn == 4) {
            rec4.classList.add("btn-outline-primary");
            rec4.classList.remove("btn-primary");
        }
        else if (recbtn == 5) {
            rec5.classList.add("btn-outline-primary");
            rec5.classList.remove("btn-primary");
        }

        recbtn = numberofrec;
    }
}


const catbtn = new Set()
catbtn.add(3);

function categorychange(btntype) {
    if (catbtn.has(btntype)) {
        console.log(catbtn.size);
        if (catbtn.size > 1) {
            catbtn.delete(btntype);
            // if (btntype == 1) {
            //     btn1.classList.add("btn-outline-primary");
            //     btn1.classList.remove("btn-primary");
            // }
            // else if (btntype == 2) {
            //     btn2.classList.add("btn-outline-primary");
            //     btn2.classList.remove("btn-primary");
            // }
            if (btntype == 3) {
                btn3.classList.add("btn-outline-primary");
                btn3.classList.remove("btn-primary");
            }
            else if (btntype == 4) {
                btn4.classList.add("btn-outline-primary");
                btn4.classList.remove("btn-primary");
            }
        }
    }
    else {
        catbtn.add(btntype);
        // if (btntype == 1) {
        //     btn1.classList.remove("btn-outline-primary");
        //     btn1.classList.add("btn-primary");
        // }
        // else if (btntype == 2) {
        //     btn2.classList.remove("btn-outline-primary");
        //     btn2.classList.add("btn-primary");
        // }
        if (btntype == 3) {
            btn3.classList.remove("btn-outline-primary");
            btn3.classList.add("btn-primary");
        }
        else if (btntype == 4) {
            btn4.classList.remove("btn-outline-primary");
            btn4.classList.add("btn-primary");
        }
    }
    document.getElementById("tagname-1").innerText = "Category " + catbtn.size;
}


function getdata() {
    let tablebody = document.getElementById("tabledata");
    tablebody.innerHTML = "";

    let numberofrec = -1;
    if (recbtn == 1)
        numberofrec = 10;
    else if (recbtn == 2)
        numberofrec = 20;
    else if (recbtn == 3)
        numberofrec = 30;
    else if (recbtn == 4)
        numberofrec = 50;
    else if (recbtn == 5)
        numberofrec = -1;

    let order = "asec";
    if (ordbtn == 1)
        order = "asec";
    else
        order = "desc";

    let cat = "mentoring";
    if (catbtn.size == 2)
        cat = "mentoring guidance";
    else if (catbtn.size == 1)
        if (catbtn.has(3))
            cat = "mentoring";
        else
            cat = "guidance";


    fetch("http://157.245.204.170:8080/get-data", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            count: numberofrec,
            sort: order,
            category: cat
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

        // Converting to JSON
        .then(response => response.json())
        .then(json => {
            let count = 1;
            console.log(json);
            if (json.length > 0)
                for (i = 0; i < json.length; i++) {
                    tablebody.innerHTML += `<tr><th scope='row'>${count++}</th>
                    <td>${json[i].firstName}</td>
                    <td>${json[i].lastName}</td>
                    <td>${json[i].userId}</td>
                    <td>${json[i].category}</td>
                    <td>${json[i].description}</td>
                    </tr>`
                }
            else
                tablebody.innerHTML = `<h1 class="my-5 text-center">No data Found</h1>`;
                
                //<td>${json[i].subject}</td>
        });
}