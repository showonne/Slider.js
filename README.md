# Slider.js

A Slider JavaScript Plugin.

## Usage

Need HTML structure

```
<div class="Slider_container">
  <div class="hide">
      <div class="slider">
          <img src="1.jpg" alt="">
          <img src="2.jpg" alt="">
          <img src="3.jpg" alt="">
          <img src="4.jpg" alt="">
      </div>
  </div>
</div>
```

And CSS Stylesheets:

```
//custom height and width
.Slider_container{
    height: 80px;
    width: 100%;
}
.hide{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

//If options.navigation is true, custome the navigator style
.slider_nav{
  position: absolute;
  right: 0;
  bottom: 5px;
  list-style: none;
}
.slider_nav li{
    float: left;
    height: 10px;
    width: 10px;
    padding: 4px;
    line-height: 10px;
    cursor: pointer;
    background: #0d897d;
    margin: 2px 5px;
}
.slider_nav li.current{
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

