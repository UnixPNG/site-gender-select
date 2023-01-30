console.log("Gender Selector™ Activated®!!")
let drop = document.getElementById("gender_drop")
let val = document.getElementById("value")
let sel = document.getElementById("sel")
let button = document.getElementById("submit")
button.addEventListener("click", () => {
	val.innerHTML = drop.selectedOptions[0].value;
	sel.innerHTML = drop.selectedOptions[0].label;
});
