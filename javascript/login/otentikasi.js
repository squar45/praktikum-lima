var pilihAkun = [
	{ 
		username: "izzudin",
		password: "sttnf01"
	},
	{ 
		username: "andik",
		password: "sttnf02"
	},
	{ 
		username: "dita",
		password: "sttnf03"
	}

]

function cariInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < pilihAkun.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == pilihAkun[i].username && password == pilihAkun[i].password) {
            console.log(username + " sukses login")
            alert("login sukses")
			// stop the function if this is found to be true
			return
		}
	}
    console.log("username dan password salah")
    alert("login gagal")
}
