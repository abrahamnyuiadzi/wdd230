document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const hamburgerElement = document.querySelector('#mybutton')
const navElement =document.querySelector('.menulinks')

hamburgerElement.addEventListener('click',()=>{
    navElement.classList.toggle('open');
   hamburgerElement.classList.toggle('open');

})


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

