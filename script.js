const sliders = document.querySelectorAll("input[type='range']");
// console.log(sliders);
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});


const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);
// console.log(billInput);


function calculateTip(){
let bill = parseFloat(billInput.value);
let tipPercent = document.getElementById("tip").value;

billInput.value=bill.toFixed(2);
// console.log(bill,tipPercent)

let totalTip = parseFloat((bill*(tipPercent/100)).toFixed(2));
let total = parseFloat((bill+totalTip).toFixed(2));

// console.log( totalTip, total );

document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
document.getElementById("total-amount").textContent =  `\$ ${total}`;

document.getElementById("tip-percent").textContent = `\$ ${tipPercent}%`;
}