// class View {
// 	constructor({ onMemeChange, onTextTopChange, onTextBottomChange }) {
// 		//! preview
// 		this.previewImageNode = document.getElementById('js-image');
// 		this.previewTextTopNode = document.getElementById('js-text-top');
// 		this.previewTextBottomNode = document.getElementById('js-text-bottom');
// 		//! setting
// 		this.selectSettingNode = document.getElementById('js-select');
// 		this.inputSettingTextTopNode = document.getElementById('js-input-top');
// 		this.inputSettingTextBottomNode =
// 			document.getElementById('js-input-bottom');

// 		this.onMemeChange = onMemeChange;
// 		this.onTextTopChange = onTextTopChange;
// 		this.onTextBottomChange = onTextBottomChange;

// 		//! events
// 		this.selectSettingNode.addEventListener('change', this._handleSelectChange);
// 		this.inputSettingTextTopNode.addEventListener(
// 			'input',
// 			this._handleTextTopChange
// 		);
// 		this.inputSettingTextBottomNode.addEventListener(
// 			'input',
// 			this._handleTextBottomChange
// 		);
// 	}

// 	renderMemeSelect(memes, currentMemeId) {
// 		memes.forEach(meme => {
// 			const { id, name } = meme;

// 			const optionNode = document.createElement('option');
// 			optionNode.value = id;
// 			optionNode.innerText = name;

// 			if (id === currentMemeId) {
// 				optionNode.selected = true;
// 			}

// 			this.selectSettingNode.append(optionNode);
// 		});
// 	}

// 	renderPreview(preview) {
// 		const { url, textTop, textBottom } = preview;

// 		this.previewImageNode.src = url;
// 		this.previewTextTopNode.innerText = textTop;
// 		this.previewTextBottomNode.innerText = textBottom;
// 	}

// 	_handleSelectChange = () => {
// 		const id = this.selectSettingNode.value;

// 		this.onMemeChange(id);
// 	};

// 	_handleTextTopChange = event => {
// 		this.onTextTopChange(event.target.value);
// 	};

// 	_handleTextBottomChange = event => {
// 		this.onTextBottomChange(event.target.value);
// 	};
// }

class View {
	constructor({ onMemeChange, onTextTopChange, onTextBottomChange }) {
		//! preview
		this.previewImageNode = document.getElementById('js-image');
		this.previewTextTopNode = document.getElementById('js-text-top');
		this.previewTextBottomNode = document.getElementById('js-text-bottom');

		//! setting
		this.selectSettingNode = document.getElementById('js-select');
		this.inputTextTopNode = document.getElementById('js-input-top');
		this.inputTextBottomNode = document.getElementById('js-input-bottom');

		this.onMemeChange = onMemeChange;
		this.onTextTopChange = onTextTopChange;
		this.onTextBottomChange = onTextBottomChange;

		//! events
		this.selectSettingNode.addEventListener(
			'change',
			this._handlerSelectMemeChange
		);
		this.inputTextTopNode.addEventListener(
			'input',
			this._handleInputTextTopChange
		);
		this.inputTextBottomNode.addEventListener(
			'input',
			this._handleInputTextBottomChange
		);
	}

	renderSelectSetting(memes, currentMemeId) {
		memes.forEach(meme => {
			const { id, name } = meme;

			const optionNode = document.createElement('option');
			optionNode.value = id;
			optionNode.innerText = name;

			if (id === currentMemeId) {
				optionNode.selected = true;
			}

			this.selectSettingNode.append(optionNode);
		});
	}

	renderPreview(preview) {
		const { url, textTop, textBottom } = preview;

		this.previewImageNode.src = url;
		this.previewTextTopNode.innerText = textTop;
		this.previewTextBottomNode.innerText = textBottom;
	}

	_handlerSelectMemeChange = () => {
		const id = this.selectSettingNode.value;

		this.onMemeChange(id);
	};

	_handleInputTextTopChange = event => {
		this.onTextTopChange(event.target.value);
	};

	_handleInputTextBottomChange = event => {
		this.onTextBottomChange(event.target.value);
	};
}
