// write a fruntion to retrieve a blob of json
// make an ajax request
//use the fetch function
// https://rallycoding.herokuapp.com/api/music_albums

// promise version
function fetchAlbums() {
	fetch("https://rallycoding.herokuapp.com/api/music_albums")
		.then(res => res.json())
		.then(json => console.log(json));
}

//asyn await es2017
async function fetchAlbums() {
	const res = await fetch(
		"https://rallycoding.herokuapp.com/api/music_albums"
	);
	const json = await res.json();
	console.log(json);
}

fetchAlbums();

//arrow function version
const fetchAlbums = async () => {
	const res = await fetch(
		"https://rallycoding.herokuapp.com/api/music_albums"
	);
	const json = await res.json();
	console.log(json);
};
fetchAlbums();
