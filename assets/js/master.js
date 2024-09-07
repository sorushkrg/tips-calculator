let selected_tip = 0;
let num_of_ppl = 0;
let bill = 0;

select_tip_btn = document.querySelectorAll("#select-tip");
reset_btn = document.querySelector(".result button");

for (let i = 0; i < 5; i++) {
	select_tip_btn[i].addEventListener("click", function () {
		selected_tip = this.innerText.slice(0, -1);
		unselected_tip();
		this.classList.toggle("selected");
		reset_btn.disabled = false;
		update_result();
	});
}

document
	.querySelector("#tip-percent-input")
	.addEventListener("input", function () {
		unselected_tip();
		selected_tip = this.value;
		reset_btn.disabled = false;
		update_result();
	});

document.querySelector("#bill-input").addEventListener("input", function () {
	bill = this.value;
	reset_btn.disabled = false;
	update_result();
});

document.querySelector("#num-ppl-input").addEventListener("input", function () {
	reset_btn.disabled = false;
	if (this.value <= 0) {
		this.style.setProperty("border-color", "hsl(0, 100%, 66%)");
		document.querySelector(".invalid-value-mess").style.color =
			"hsl(0, 100%, 66%)";
	} else {
		this.style.setProperty("border-color", "hsl(172, 67%, 45%)");
		document.querySelector(".invalid-value-mess").style.color =
			"hsl(0, 0%, 100%)";
	}
	num_of_ppl = this.value;
	update_result();
});

reset_btn.addEventListener("click", () => {
	location.reload();
});

function unselected_tip() {
	const selected_tip_btn = document.querySelector(".selected");
	if (selected_tip_btn != null) {
		selected_tip_btn.classList.toggle("selected");
	}
}

function calc_tip() {
	return (bill * (selected_tip / 100)) / num_of_ppl;
}

function update_result() {
	tip_amount = calc_tip();
	document.querySelector("#tip-amount").innerHTML = `$${tip_amount.toFixed(2)}`;
	document.querySelector("#total").innerHTML =
		`$${(bill / num_of_ppl + tip_amount).toFixed(2)}`;
}
