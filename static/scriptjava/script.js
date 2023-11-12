
// put method triger
const btnEL = document.querySelector('.addButton');
const inputEL = document.querySelector('.textInput');
const statusEL = document.querySelector('.statusone');

const clickHandler = () => {
    const inputValue = inputEL.value;
    fetch(`${ipAddress}/putelement/${encodeURIComponent(inputValue)}`, {
        method: 'PUT',
    })
    .then((response) => {
        inputEL.value = ''
        statusEL.textContent = response.status;
    })
};
btnEL.addEventListener('click', clickHandler);
//end of put method triger

//delete methode triger
const delbtnEL = document.querySelector('.deleteButton');
const delinputEL = document.querySelector('.textInputdelete');
const delstatusEL = document.querySelector('.statustwo');

const delclickHandler = () => {
    const delinputValue = delinputEL.value;
    fetch(`${ipAddress}/deletelement/${encodeURIComponent(delinputValue)}`, {
        method: 'DELETE',
    })
    .then((response) => {
        delinputEL.value = ''
        delstatusEL.textContent = response.status;
    
    })
};
delbtnEL.addEventListener('click', delclickHandler);
//end of delete methode triger

//patch methode triger
const patchbtnEL = document.querySelector('.patchteButton');  // Corrected class name
const patchinputEL = document.querySelector('.textInputpatch');  // Corrected class name
const patchinputEL2 = document.querySelector('.textInputpatchone');  // Corrected class name
const patchstatusEL = document.querySelector('.statusthree');  // Corrected class name

const patchclickHandler = () => {
    const patchinputValue = patchinputEL.value;
    const patchinputValue2 = patchinputEL2.value;
    fetch(`${ipAddress}/patchelement/${encodeURIComponent(patchinputValue2)}/${encodeURIComponent(patchinputValue)}`, {
        method: 'PATCH', 
    })
    .then((response) => {
            patchinputEL.value = ''
            patchinputEL2.value = ''
            patchstatusEL.textContent = response.status;  // Corrected variable name
    })
};

patchbtnEL.addEventListener('click', patchclickHandler);  // Corrected class name

//patch of delete methode triger



//get methode triger
const getbtnEL = document.querySelector('.getbtn');
const getstatusEL = document.querySelector('.statusget');
const listUL = document.querySelector('ul'); // Get the <ul> element

const getclickHandler = () => {
    fetch(`${ipAddress}/mylist`, {})
    .then((response) => {
        getstatusEL.textContent = response.status;
        if (response.status === 200) {
            return response.json(); // Parse the response as JSON
        } else {
            return []; // Return an empty array if the response status is not 200
        }
    })
    .then((data) => {
        listUL.innerHTML = ''; // Clear the existing list items
        data.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listUL.appendChild(listItem); // Append the list item to the <ul>
        });
    });
};

getbtnEL.addEventListener('click', getclickHandler);

//end of get methode triger
