document.getElementById('roiInput').addEventListener('input', function () {
    var roiValue = this.value;
    var regCitiInputContainer = document.getElementById('regCitiInputContainer');
    var senCitiInputContainer = document.getElementById('senCitiInputContainer');
    var spSenCitiInputContainer = document.getElementById('spSenCitiInputContainer');

    regCitiInputContainer.style.display = 'none';
    senCitiInputContainer.style.display = 'none';
    spSenCitiInputContainer.style.display = 'none';

    if (roiValue === 'Regular Citizen') {
        regCitiInputContainer.style.display = 'block';
    } else if (roiValue === 'Senior Citizen') {
        senCitiInputContainer.style.display = 'block';
    } else if (roiValue === 'Super Senior Citizen') {
        spSenCitiInputContainer.style.display = 'block';
    }
});

function getAmount(){
    let p = parseFloat(document.getElementById('prin').value);
    let t = parseFloat(document.getElementById('time').value);
    let r = 0;

    if (document.getElementById('roiInput').value === 'Regular Citizen') {
        r = parseFloat(document.getElementById('regCiti').value);
    } else if (document.getElementById('roiInput').value === 'Senior Citizen') {
        r = parseFloat(document.getElementById('senCiti').value);
    } else if (document.getElementById('roiInput').value === 'Super Senior Citizen') {
        r = parseFloat(document.getElementById('spSenCiti').value);
    }

    let si = (p * t * r) / 100;
    let tamt = p + si;

    document.getElementById('intAmt').innerHTML = "Interest Amount: &#8377;" + si.toFixed(2);
    document.getElementById('totAmt').innerHTML = "Total Amount: &#8377;" + tamt.toFixed(2);
}
