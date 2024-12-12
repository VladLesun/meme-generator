const MEMES_MOCK = [
	{
		id: '181913649',
		name: 'Drake Hotline Bling',
		url: 'resources/img1.jpg',
		width: 1200,
		height: 1200,
	},
	{
		id: '87743020',
		name: 'Two Buttons',
		url: 'resources/img2.jpg',
		width: 600,
		height: 908,
	},
	{
		id: '112126428',
		name: 'Distracted Boyfriend',
		url: 'resources/img3.jpg',
		width: 1200,
		height: 800,
	},
	{
		id: '124822590',
		name: 'Left Exit 12 Off Ramp',
		url: 'resources/img4.jpg',
		width: 804,
		height: 767,
	},
	{
		id: '222403160',
		name: 'Bernie I Am Once Again Asking For Your Support',
		url: 'resources/img5.jpg',
		width: 750,
		height: 750,
	},
	{
		id: '217743513',
		name: 'UNO Draw 25 Cards',
		url: 'resources/img6.jpg',
		width: 500,
		height: 494,
	},
	{
		id: '131087935',
		name: 'Running Away Balloon',
		url: 'resources/img7.jpg',
		width: 761,
		height: 1024,
	},
	{
		id: '97984',
		name: 'Disaster Girl',
		url: 'resources/img8.jpg',
		width: 500,
		height: 375,
	},
];

class API {
	constructor() {
		// this.memes = MEMES_MOCK;
		this.baseUrl = 'https://api.imgflip.com';
	}

	// getMemes() {
	// 	return this.memes;
	// }

	fetchMemes() {
		return fetch(`${this.baseUrl}/get_memes`).then(data => data.json());
	}
}
