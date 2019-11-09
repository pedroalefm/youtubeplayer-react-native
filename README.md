# Youtube player for react native

\*\*Version 1.0.0

A Simple react-native based youtube player.

---

## Instalation

```
npm i youtubeplayer-react-native --save

```

## Getting started

```jsx
import YoutubePlayer from 'youtubeplayer-react-native';


    state = {
        id : "dQw4w9WgXcQ"
    }

    render(){
        return(
            <YoutubePlayer videoId = {this.state.id} width= {300} height = {250} showControls = {true}/>
        )
    }

```

---

# Props

## videoId

You have to pass the youtube video Id.

---

## autoplay (Default: false)

If autoplay is true the video will start automatically.

---

## showinfo (Default: false)

If shoeinfo is true, information like title will be showed.

## showControls (Default: false)

if true, the video controlers will be showed.

---

# Contributing

Welcome =D

---

# License

MIT
