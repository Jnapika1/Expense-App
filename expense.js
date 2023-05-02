const myForm = document.querySelector('#form1');
const addExp = document.querySelector('#addExp');
const expAmt = document.querySelector('#amt');
const desc = document.querySelector('#desc');
const cat = document.querySelector('#select');
const ul=document.getElementById("list-group");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
     let myObj = {
            amt:expAmt.value,
            des:desc.value,
            cg:cat.value
        }
    let obj = JSON.stringify(myObj);
    localStorage.setItem(desc.value, obj);
    showObjOnScreen(myObj);
}

function showObjOnScreen(obj){
    
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${obj.des}`));
    li.appendChild(document.createTextNode(` - ${obj.amt}`));
    li.appendChild(document.createTextNode(` - ${obj.cg} `));
    ul.appendChild(li);

    let del = document.createElement('button');
    del.className="btn btn-danger btn-sm delete";
    del.appendChild(document.createTextNode("delete"));
    li.appendChild(del);

    let edit = document.createElement('button');
    edit.type="button";
    edit.className="btn btn-secondary btn-sm float-right edit";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
}

ul.addEventListener('click', deleteItem);
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        let user = e.target.parentElement;
        ul.removeChild(user);
        // console.log(user.firstChild.textContent);
        localStorage.removeItem(user.firstChild.textContent);
    }
}

ul.addEventListener('click', editItem);
function editItem(e){
    if(e.target.classList.contains('edit')){
        let user = e.target.parentElement;
        ul.removeChild(user);
        // console.log(user.firstChild.textContent);
        let userDetails = JSON.parse(localStorage.getItem(user.firstChild.textContent));
        localStorage.removeItem(user.firstChild.textContent);
        
        expAmt.value=userDetails.amt;
        desc.value=userDetails.des;
        cat.value=userDetails.cg;
    }
}