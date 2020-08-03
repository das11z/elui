
// Tab Model
class Tab {
	constructor ({ el, navi, panl }) {
		this.el = document.querySelector(el)
		this.navi = this.el.querySelectorAll(navi)
		this.panl = this.el.querySelectorAll(panl)
	}

	// config init
	init (lines) {
		// 给 line 添加 style
		const line = document.querySelector(lines)
		this._createStyle(line, {
			width: this.navi[0].offsetWidth + 'px',
			transform: 'translateX(' + this.navi[0].offsetLeft + 'px)'
		})
		this.bind(this.navi, this.panl, line)
	}

	// event bind
	bind (navi, panl, line) {
		this.navi.forEach(item => {
			item.addEventListener('click', function () {
				line.style.width = this.offsetWidth + 'px'
				line.style.transform = 'translateX(' + this.offsetLeft + 'px)'

				navi.forEach(item => item.classList.remove('active'))
				this.classList.add('active')

				panl.forEach(item => item.classList.remove('active'))
				panl[[...navi].indexOf(this)].classList.add('active')
			})
		})
	}

	// add style
	_createStyle (node, css) {
		Object.assign(node.style, css)
	}
}
