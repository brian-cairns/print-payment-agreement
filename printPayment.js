const user = sessionStorage.getItem('signer');
const url = 'https://pffm.azurewebsites.net/'
const uri = `${url}?name=${user}`

fetch(uri)
    .then(response => response.json())
    .then(data => populatePage(data))
    .catch(console.error)

async function populatePage(data) {
    if (data.paymentChoice == '$300/mo') {
        document.getElementById('paymentOption1').style.display = 'none';
        document.getElementById('paymentOption1Label').style.display = 'none';
        document.getElementById('paymentOption2').style.backgroundColor = 'black';

    } else {
        document.getElementById('paymentOption2').style.display = 'none';
        document.getElementById('paymentOption2Label').style.display = 'none';
        document.getElementById('paymentOption1').style.backgroundColor = 'black';
    }
    document.getElementById('address').innerHTML = data.address;
    document.getElementById('city').innerHTML = data.city;
    document.getElementById('state').innerHTML = data.state;
    document.getElementById('zip').innerHTML = data.zip;
    document.getElementById('caregiverName').innerHTML = data.caregiverName
}

const printToPDF = document.getElementById('printToPDF')
printToPDF.addEventListener('click', (e) => {
    //add in a function to print to PDF
})