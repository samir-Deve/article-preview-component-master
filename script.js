const shareBTN = document.querySelector(".profile_fovorite")
const shareCont = document.querySelector(".share_cont")
const profile = document.querySelector('.profile')
const body = document.querySelector("body")

let shareState = "none"
function show(){
	if(shareState === "none") {
		shareCont.style.display = "inline"
		shareState = shareCont.style.display 
		if(body.clientWidth > 900) {
			return
		}
		else if(body.clientWidth < 900) {
			profile.style.display = "none"
		}
	}
	else if(shareState === "inline") {
		shareCont.style.display = "none"
		shareState = shareCont.style.display 
		if(body.clientWidth > 900) {
			return
		}
		else if(body.clientWidth < 900) {
			profile.style.display = "none"
		}
	}
}
shareBTN.addEventListener("click", show)