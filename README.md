# Slider.js

A Slider JavaScript Plugin.

## Usage

Need HTML structure

```html
<div class="Slider_container">
  <div class="Slider_hide">
      <div class="Slider">
          <img src="1.jpg" alt="">
          <img src="2.jpg" alt="">
          <img src="3.jpg" alt="">
          <img src="4.jpg" alt="">
      </div>
  </div>
</div>
```

And CSS Stylesheets:

```html
//custom height and width
.Slider_container{
    height: 80px;
    width: 100%;
}
.Slider_hide{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

//If options.navigation is true, custome the navigator style
.Slider_nav{
  position: absolute;
  right: 0;
  bottom: 5px;
  list-style: none;
}
.Slider_nav li{
    float: left;
    height: 10px;
    width: 10px;
    padding: 4px;
    line-height: 10px;
    cursor: pointer;
    background: #0d897d;
    margin: 2px 5px;
}
.Slider_nav li.current{
    background: rgba(255, 255, 255, .4);
}
```

Then:

```
Slider(options)
```

#### options

- `duration`: animation duration. `default: 1000`
- `stayTime`: each img stay time. `default: 1000`
- `animationType`: animation timing function. `default: 'ease'`
- `navigation`: Show navigator or not. `default: true`

