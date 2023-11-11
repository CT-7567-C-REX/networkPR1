

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
        if (response.status === 200) {
            statusEL.textContent = 'Resource found (200)';
            inputEL.value = ''
        } 
        else{
            statusEL.textContent = response.status;
        }
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
        if (response.status === 200) {
            delstatusEL.textContent = 'Resource found (200)';
            inputEL.value = ''
        } 
        else{
            delstatusEL.textContent = response.status;
        }
    })
};
delbtnEL.addEventListener('click', delclickHandler);
//end of delete methode triger

