const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const descrption = document.querySelector("#descrption");
const category = document.querySelector("#category");
const listitems = document.querySelector("#item")

form.addEventListener("submit", onsubmit);

function onsubmit(event) {
    event.preventDefault();
    // creating object to store value in object
    const Data = {
        useramount:`${amount.value}`,
        userdescrption:`${descrption.value}`,
        usercategory:`${category.value}`
    }
    userdatastring = JSON.stringify(Data) // static method use to convert Javascript value in json string
    //adding element to local storage
    localStorage.setItem(`${amount.value}`,`${JSON.stringify(Data)}`);

    //creating element for document
    const newli = document.createElement("li");
    newli.className = `li`;
    newli.setAttribute = ("id","items");
    newli.innerText = `${amount.value} rs - ${descrption.value} - ${category.value}`

    //edit button
    const editbtn= document.createElement(`button`);
    editbtn.className=`btn btn-success editbtn m-2`;
    editbtn.setAttribute("type","submit");
    editbtn.setAttribute("id",`${userdatastring}`)
    editbtn.innerHTML=`Edit`;

    //delebtn 
    const delbtn= document.createElement(`button`);
    delbtn.className=`btn btn-danger delbtn m-2`;
    delbtn.setAttribute("type","submit");
    delbtn.setAttribute("id",`${userdatastring}`)
    delbtn.innerHTML=`Delete`;

   // appending edit button to new li
    newli.appendChild(editbtn);
    // appending delete button to new li
    newli.appendChild(delbtn);
    listitems.append(newli);

    // reintializing to blank
    amount.value = '';
    descrption.value = '';
    category.value = '';
}

listitems.addEventListener('click',onDelete);

function onDelete(event){
    event.preventDefault();
    if (event.target.classList.contains('delbtn')) {
        // remove from local storage
        const btnId = JSON.parse(event.target.id).useramount;
        localStorage.removeItem(`${btnId}`);

        //delete value from browser
        event.target.parentElement.remove();

    }
    if (event.target.classList.contains('editbtn')) {
        //remove from local storage
        const btnId = JSON.parse(event.target.id);
        localStorage.removeItem(`${btnId.useramount}`);
        
        //regain details
        const editAmout= document.querySelector('input');
        editAmout.value=`${btnId.useramount}`;
        const editselect= document.querySelectorAll('select');
        editselect[0].value=`${btnId.userdescrption}`;
        editselect[1].value=`${btnId.usercategory}`;
        //delete value from browser
        event.target.parentElement.remove();
    }
}




