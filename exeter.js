function get_games(){
    const date = new Date();
    fetch(`https://v3.football.api-sports.io/fixtures?season=2022&team=1364&date=${date.toISOString().split('T')[0]}`, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "v3.football.api-sports.io",
    		"x-rapidapi-key": "2efb401b74be220283d88c98d0d19472"
    	}
    })
    .then(async response => {
    	const result = await response.json();
        if (result.response.length !== 0) {
            document.getElementById('exeter').innerHTML = "<a href=\"https://poscitech.click/hd/ch190.php\">Exeter City FC</a>";
        }
        else {
            document.getElementById('exeter').innerHTML = "";
        }

    })
    .catch(err => {
    	console.log(err);
    });
}

get_games();