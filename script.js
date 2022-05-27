var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function hourColor() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (i=9; i<18; i++) {
        var input = document.getElementById("input" + (i - 8))
        if (i < currentHour) { 
            input.classList.add("past")
        } else if (i == currentHour) {
            input.classList.add("present")
        } else {
            input.classList.add("future")
        }
        var storedText = localStorage.getItem("id" + (i-8));
        input.value = storedText
    } 
} 
hourColor();

function userInput(id) {
    var input = document.getElementById("input" + id)
    localStorage.setItem("id" + id, input.value);
}
