/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * file-upload function
 *
 * Upload file control
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

(function (AU) {

	var INPUT_SELECTOR = 'au-file-upload__input';
	var INPUT_HIDDEN = 'au-file-upload__input--visually-hidden';
	var INPUT_LABEL_SELECTOR = 'au-file-upload__label';
	var FILES_LIST = 'au-file-upload__files-list';
	var FILE_ITEM = 'au-file-upload__files-item';
	var FILE_ITEM_BUTTON = 'au-file-upload__files-item-remove-button';

	/**
	 * PRIVATE
	 *
	 * @param {string} tag - element tag
	 * @param {object} attributes
	 * @param {array} [children] - elements for append
	 * @return {HTMLElement}
	 */
	function createElement(tag, attributes, children) {
		var el = document.createElement(tag);

		attributes = attributes || {};

		if (attributes.className) {
			var classes = typeof attributes.className === 'string' ? [attributes.className] : attributes.className;
			classes.forEach(function (className) {
				el.classList.add(className)
			});
		}

		if (attributes.text) {
			el.innerText = attributes.text
		}

		if (attributes.title) {
			el.setAttribute('title', attributes.title)
		}

		if (attributes.events) {
			Object.keys(attributes.events).forEach(function (evt) {
				el.addEventListener(evt, attributes.events[evt]);
			})
		}


		if (Array.isArray(children)) {
			children.forEach(function (child) {
				el.appendChild(child)
			})
		}

		return el
	}

	/**
	 * Create container with files list
	 *
	 * @param element
	 * @param {object} callbacks
	 * @return {{container: HTMLElement, render: render, remove: remove}}
	 */
	function createFilesList(element, callbacks) {
		/**
		 * Existed list item cache
		 *
		 * @type {{}}
		 */
		var itemsMap = {};

		/**
		 * List item markup
		 *
		 * @param {File} file
		 * @return {HTMLElement}
		 */
		function createListItem(file) {
			return createElement('div',{className: FILE_ITEM, text: file.name}, [
				createElement('button', {
					className: [FILE_ITEM_BUTTON, 'au-btn'],
					title: 'Remove file (' + file.name + ') from list',
					text: 'Remove',
					events: {
						'click': function (evt) {
							return callbacks.onFileRemove(file, evt)
						}
					}
				})
			]);
		}

		/**
		 * Create list container,
		 *
		 * @return {HTMLElement}
		 */
		function createContainer() {
			var container = createElement('div', {className: FILES_LIST});
			element.appendChild(container);
			return container;
		}

		var container = createContainer();

		// PUBLIC METHODS
		return {
			container: container,
			/**
			 * Render files list
			 *
			 * @param {array} files
			 */
			render: function (files) {
				files.forEach(function (file) {
					if (itemsMap[file.name] === undefined) {
						itemsMap[file.name] = createListItem(file);
						container.appendChild(itemsMap[file.name]);
					} else {
						var newItem = createListItem(file);
						container.replaceChild(newItem, itemsMap[file.name]);
						itemsMap[file.name] = newItem;
					}
				});
			},

			/**
			 * Remove file from list
			 *
			 * @param {File} file
			 */
			remove: function (file) {
				container.removeChild(itemsMap[file.name]);
				delete itemsMap[file.name];
			}
		}
	}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 *
	 * @param {string} elementSelector - selector of element
	 * @param {object} [callbacks]
	 * @return {{multiple: boolean, files: (function(): Array)}}
	 */
	var fileUpload = function (elementSelector, callbacks) {
		var container = null;
		var input = null;
		var label = null;
		var multiple = false;
		var accept = '';
		var files = [];
		var filesList = null;

		/** Checking ability to use modern API */
		var canUseModernFunctionality = (function () {
			// If FileReader available: browser supports FileAPI
			return 'FileReader' in window;
		})(window);

		// PRIVATE FUNCTIONS
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------

		/**
		 * @param {string} elementSelector
		 */
		function init(elementSelector) {
			// Fallback to native functionality
			if (!canUseModernFunctionality) {
				console.warn("Browser doesn't support File API");
				return;
			}

			container = document.querySelector(elementSelector);
			input = container.querySelector('.' + INPUT_SELECTOR);
			label = container.querySelector('.' + INPUT_LABEL_SELECTOR);
			input.classList.add(INPUT_HIDDEN);

			multiple = input.hasAttribute('multiple');
			accept = input.hasAttribute(accept) ? input.getAttribute(accept) : '';

			if (typeof callbacks !== 'object') {
				callbacks = {
					onFilesSelected: function () {
					}
				};
			}

			if (multiple) {
				filesList = createFilesList(container, {
					onFileRemove: onFileRemove
				});
			}

			initEvents(input);
		}

		/**
		 * @param input
		 */
		function initEvents(input) {
			input.addEventListener('change', onChange);
		}

		function onChange(e) {
			var selectedFiles = e.target.files;
			// TODO: Implement check for accept attribute
			if (!multiple) {
				processSingleFile(selectedFiles[0]);
			} else {
				processMultipleFiles(selectedFiles);
			}

			callbacks.onFilesSelected(files);
		}

		/**
		 * Remove file from list
		 *
		 * @param {File} file
		 * @param event
		 */
		function onFileRemove(file, event) {
			var index = files.findIndex(function (currentFile) {
				return currentFile.name === file.name
			});
			if (index !== -1) {
				files.splice(index, 1);
			}

			filesList.remove(file);
		}

		/**
		 * @param {File} file
		 */
		function processSingleFile(file) {
			label.innerText = file.name;
			files = [file];
		}

		/**
		 * @param {FileList} selectedFiles
		 */
		function processMultipleFiles(selectedFiles) {
			for (var i = 0; i < selectedFiles.length; i++) {
				var file = selectedFiles.item(i);
				var index = files.findIndex(function (currentFile) {
					return currentFile.name === file.name
				});

				if (index === -1) {
					files.push(file);
				} else {
					files.splice(index, 1, file)
				}
			}

			filesList.render(files);
		}

		init(elementSelector);

		//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		// PUBLIC FUNCTIONS
		//--------------------------------------------------------------------------------------------------------------------------------------------------------------
		return {
			multiple: multiple,

			/**
			 * Selected files
			 *
			 * @return {Array<File>}
			 */
			files: function () {
				return files;
			}
		}
	};

	AU.fileUpload = fileUpload

}(AU));

if (typeof module !== 'undefined') {
	module.exports = AU
}
