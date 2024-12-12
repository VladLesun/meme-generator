// class Controller {
// 	constructor() {
// 		this.model = new Model({
// 			onMemesChange: this.handelModelMemesChange,
// 			onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
// 			onTextTopChange: this.handleModelTextTopChange,
// 			onTextBottomChange: this.handleModelTextBottomChange,
// 		});
// 		this.view = new View({
// 			onMemeChange: this.handleViewMemeChange,
// 			onTextTopChange: this.handleViewTextTopChange,
// 			onTextBottomChange: this.handleViewTextBottomChange,
// 		});
// 		this.api = new API();
// 	}

// 	init() {
// 		const memes = this.api.getMemes();

// 		this.model.setMemes(memes);
// 		// this.model.setCurrentMemeId(memes[0].id);

// 		// const preview = this.model.getPreview();
// 		// this.view.renderPreview(preview);
// 	}

// 	handelModelMemesChange = () => {
// 		this.view.renderMemeSelect(
// 			this.model.getMemes(),
// 			this.model.getCurrentMemeId()
// 		);
// 	};

// 	handleViewMemeChange = id => {
// 		this.model.setCurrentMemeId(id);
// 	};

// 	handleModelCurrentMemeIdChange = () => {
// 		this.view.renderPreview(this.model.getPreview());
// 	};

// 	handleViewTextTopChange = text => {
// 		this.model.setTextTop(text);
// 	};

// 	handleViewTextBottomChange = text => {
// 		this.model.setTextBottom(text);
// 	};

// 	handleModelTextTopChange = () => {
// 		this.view.renderPreview(this.model.getPreview());
// 	};

// 	handleModelTextBottomChange = () => {
// 		this.view.renderPreview(this.model.getPreview());
// 	};
// }

class Controller {
	constructor() {
		this.model = new Model({
			onCurrentMemeIdChange: this.handleModelCurrentMemeIdChange,
			onMemeChange: this.handleModelMemeChange,
			onTextTopChange: this.handleModelTextTopChange,
			onTextBottomChange: this.handleModelTextBottomChange,
		});
		this.view = new View({
			onMemeChange: this.handleViewMemeChange,
			onTextTopChange: this.handleViewTextTopChange,
			onTextBottomChange: this.handleViewTextBottomChange,
		});
		this.api = new API();
	}

	init() {
		this.api.fetchMemes().then(data => {
			if (data.success) {
				const memes = data.data.memes;
				memes.length = 10;
				this.model.setMemes(memes);
			} else {
				console.warn('Error data...');
			}
		});
	}

	handleModelMemeChange = () => {
		this.view.renderSelectSetting(
			this.model.getMemes(),
			this.model.getCurrentMemeId()
		);
	};

	handleViewMemeChange = id => {
		this.model.setCurrentMemeId(id);
	};

	handleModelCurrentMemeIdChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleViewTextTopChange = text => {
		this.model.setTextTop(text);
	};

	handleViewTextBottomChange = text => {
		this.model.setTextBottom(text);
	};

	handleModelTextTopChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};

	handleModelTextBottomChange = () => {
		this.view.renderPreview(this.model.getPreview());
	};
}
