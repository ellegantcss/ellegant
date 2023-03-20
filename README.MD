# Ellegant CSS microframework

Ellegant's goal is to allow CSS to provide everything CSS is capable of; without replacing your current framework.

The bottom line is we can manipulate elements without Javascript.

See it in action [here](https://lucaslealdev.github.io/ellegant/).
<hr>

### How? 🤯
By using inputs and labels we can take advantage of selectors like `+` and `~`
to target the elements after the right `input:checked`. This is why the HTML may look
just a little verbose, while the page remains fast and clean even when running on low-end mobile devices.

You already use CSS to change how elements are shown inside your JS code.
Ellegant goes one step further and removes the JS code.


### Why? 🙄
We've been using many Javascript codes that we could replace with clever CSS selectors to replicate its function.

With this kind of no-JS component, you may use your Javascript code to do more complex interactions with less fear of jamming your user experience.

That is what we are talking about.

## How to use

You may include Ellegant's CSS and optional JS file using those public CDN URL:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lucaslealdev/ellegant@master/ellegant-min.css">`

`<script src="https://cdn.jsdelivr.net/gh/lucaslealdev/ellegant@master/ellegant.js"></script>`