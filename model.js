const PREVIEW_MOCK = {
	url: 'resources/img1.jpg',
	textTop: 'Верхняя подпись',
	textBottom: 'Нижняя подпись',
};

export default class Model {
	constructor({
		onCurrentMemeIdChange,
		onMemeChange,
		onTextTopChange,
		onTextBottomChange,
	}) {
		this.memes = [];
		this.currentMemeId = null;
		this.preview = PREVIEW_MOCK;
		this.textTop = 'Верхняя подпись';
		this.textBottom = 'Нижняя подпись';

		this.onCurrentMemeIdChange = onCurrentMemeIdChange;
		this.onMemeChange = onMemeChange;
		this.onTextTopChange = onTextTopChange;
		this.onTextBottomChange = onTextBottomChange;
	}

	setMemes(memes) {
		this.memes = memes;
		this.currentMemeId = memes[0].id;

		this.onCurrentMemeIdChange();
		this.onMemeChange();
	}

	setCurrentMemeId(currentMemeId) {
		this.currentMemeId = currentMemeId;

		this.onCurrentMemeIdChange();
	}

	setTextTop(text) {
		this.textTop = text;

		this.onTextTopChange();
	}

	setTextBottom(text) {
		this.textBottom = text;

		this.onTextBottomChange();
	}

	getMemes() {
		return this.memes;
	}

	getCurrentMemeId() {
		return this.currentMemeId;
	}

	getPreview() {
		return {
			url: this.getCurrentMeme().url,
			textTop: this.textTop,
			textBottom: this.textBottom,
		};
	}

	getCurrentMeme() {
		let currentMeme = null;

		this.memes.forEach(meme => {
			if (meme.id === this.getCurrentMemeId()) {
				currentMeme = meme;
			}
		});

		return currentMeme;
	}
}
