function Slider(options){

    if(Object.prototype.toString.call(options) !== "[object Object]" && options !== undefined){
        throw new Error("Slider\'s options should be a object!")
    }

    var defaults = {
        duration: 1000,
        stayTime: 1000,
        animationType: 'ease',
        navigation: true
    }

    var _options = Object.assign({}, defaults, options)

    var index = 0

    var container, slider, children, childrenCount, containerWidth, _nav, navs

    function _selectElements(){

        container = document.querySelector('.Slider_container')

        slider = document.querySelector('.Slider')

        children = slider.children

    }

    function _init(){

        containerWidth = container.offsetWidth

        childrenCount = children.length

        for(var item of Array.from(children)){

            item.style.display = 'inline-block'
            item.style.width = `${ containerWidth }px`
            item.style.height = '100%'
            item.style.float = 'left'

            item.children[0].style.width = '100%'
            item.children[0].style.height = '100%'

        }

        slider.style.width = `${ childrenCount * 100 }%`
        slider.style.height = '100%'
        slider.style.transition = `all ${ _options.duration }ms ${ _options.animationType }`
        slider.style.position = 'relative'

    }

    function _repaint(){

        containerWidth = container.offsetWidth

        for(var item of Array.from(children)){

            item.style.width = `${ containerWidth }px`

        }

    }

    function _addNav(){

        _nav = document.createElement('ul')

        for(var i = 0; i < childrenCount; i++){

            var item = document.createElement('li')
            i === 0 && item.classList.add('current')
            item.innerText = i + 1
            item.setAttribute('_target', i)
            item.addEventListener('click', _navTo)
            _nav.appendChild(item)

        }

        _nav.classList.add('Slider_nav')

        document.querySelector('.Slider_hide').appendChild(_nav)

        navs = Array.from(_nav.children)

    }

    function _navTo(){

        var current = this

        for(var item of navs){
            item.classList.remove('current')
        }

        this.classList.add('current')

        var current = this.getAttribute('_target')

        _move(current - index, current)
    }

    function _move(delta, current){

        index += delta

        index = index < 0 ? childrenCount - 1 : index
        index = index === childrenCount ? 0 : index

        slider.style.transform = `translate3d(${ -index * containerWidth }px, 0, 0)`

        if(_options.navigation){
            for(var item of navs){
                item.classList.remove('current')
            }
        }

        _options.navigation && current && document.querySelector(`.Slider_nav li[_target="${ current }"]`).classList.add('current')
        _options.navigation && (current || document.querySelector(`.Slider_nav li[_target="${ index }"]`).classList.add('current'))

    }

    _selectElements()
    _init()
    _options.navigation && _addNav()

    var interval = setInterval(function(){
        _move(1)
    }, _options.duration + _options.stayTime + 100)

    var timeout

    window.addEventListener('resize', function(){

        timeout && clearTimeout(timeout)
        interval && clearInterval(interval)

        timeout = setTimeout(function(){

            _repaint()
            _move(1)

            interval = setInterval(function(){
                _move(1)
            }, _options.duration + _options.stayTime + 100)

        }, 300)
    })

}