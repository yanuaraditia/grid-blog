---
title: Provide Dark Mode Toggle
date: 2020-03-04
published: true
tags: ['CSS','HTML','Javascript','Dark Mode']
canonical_url: false
description: "Hi! I'm yanuar aditia and i want to show you how to interact with dark / light mode using only Native Javascipt, CSS, and also simple HTML code. Let's get started."

---

Hi! I'm yanuar aditia and i want to show you how to interact with dark / light mode using only Native Javascipt, CSS, and also simple HTML code. Let's get started.

We think **dark mode** is the best solutions when you have an amoled devices screen, they can help to save more battery life of your devices. So what you need to become a light or dark mode website using switcher?

Here the source code:


```html
<body id="body" class="dark-mode">
  <h1>Dark/Light Mode Switcher</h1>
   
  <button type="button" name="dark_light" onclick="toggleDarkLight()" title="Toggle dark/light mode">🌛</button>
  
  <p>Just press the button above to toggle!</p>
</body>
```
```javascript
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
```

```scss
$dark-color: #111;
$light-color: #eee;

body.dark-mode {
  background-color: $dark-color;
  color: $light-color;
  a {
    color: $dark-color;
  }
  button {
    background-color: $light-color;
    color: $dark-color;
  }
}

body.light-mode {
  background-color: $light-color;
  color: $dark-color;
  a {
    color: $dark-color;
  }
  button {
    background-color: $dark-color;
    color: $light-color;
  }
}
```

#### A better way to build websites

This site is built using **VueJS** where it has a site framework that calls **GridsomeJS**, and of course hosted by **Netlify** for sure.

#### Whats next

In the next couple of months we're going to continue to improve the sites, create tutorials, add more source & project that you can use at learn. 