var custom = document.getElementById("custom")
var error = document.querySelector("#error");
var bill = ''
document.getElementById("bill-inp").addEventListener('keyup', e => {
    bill = e.target.value
})

var person = ''

document.getElementById("numbers").addEventListener('keyup', e => {

    person = e.target.value
})


document.querySelector('.percent').addEventListener('click', e => {

    switch (e.target.id) {
        case 'five':
            if (person == '') {
                error.style.display = "block"
                break;
            }
            var total = parseFloat(bill) * (5 / 100)
            var tip = parseFloat(total) / (person)
            document.getElementById("tip-person").innerText = '$' + tip;
            var per = parseFloat(bill) + (total)
            var total_per = parseFloat(per) / (person)
            document.getElementById("total-per").innerText = '$' + total_per;

            break;
        case 'ten':
            if (person == '') {
                error.style.display = "block"
                break;
            }
            total  = Math.round(parseFloat(bill) * (10 / 100) * 100) / 100;
            tip = parseFloat(total) / (person)
            document.getElementById("tip-person").innerText = '$' + tip;
            per = parseFloat(bill) + (total)
            total_per = parseFloat(per) / (person)
            document.getElementById("total-per").innerText = '$' + total_per;
            break;

        case 'fifteen':
            if (person == '') {
                error.style.display = "block"
                break;
            }
            total = parseFloat(bill) * (15 / 100)
            tip = parseFloat(total) / (person)
            document.getElementById("tip-person").innerText = '$' + tip;
            per = parseFloat(bill) + (total)
            total_per = parseFloat(per) / (person)
            document.getElementById("total-per").innerText = '$' + total_per;
            break;

        case 'twenty':
            if (person == '') {
                error.style.display = "block"
                break;
            }
            total = parseFloat(bill) * (20 / 100)
            tip = parseFloat(total) / (person)
            document.getElementById("tip-person").innerText = '$' + tip;
            per = parseFloat(bill) + (total)
            total_per = parseFloat(per) / (person)
            document.getElementById("total-per").innerText = '$' + total_per;

            break;


        case 'twnf':
            if (person == '') {
                error.style.display = "block"
                break;
            }
            total = parseFloat(bill) * (25 / 100)
            tip = parseFloat(total) / (person)
            document.getElementById("tip-person").innerText = '$' + tip;
            per = parseFloat(bill) + (total)
            total_per = parseFloat(per) / (person)
            document.getElementById("total-per").innerText = '$' + total_per;
            break;

        case 'custom':
            if (person == '') {
                error.style.display = "block"
                break;
            }

            document.querySelector("#custom").style.display = "none";
            document.querySelector("#custom-input").style.display = "block";

        // total = parseFloat(bill) * (25 / 100)
        // tip = parseFloat(total) / (person)
        // document.getElementById("tip-person").innerHTML = '$' + tip;
        // break;



    }
})

document.getElementById("rest").addEventListener('click', e => {

    location.reload();
})







