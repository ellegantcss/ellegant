# Ellegant CSS microframework

Ellegant's goal is to allow CSS to be used for everything it is capable of without replacing your loved css framework. This means showing and hiding elements without Javascript.

See it in action [here](https://lucaslealdev.github.io/ellegant/).
<hr>

### How? 🤯
Using inputs and labels we can take advantage of selectors like `+` and `~` to target the elements after the right `input:checked`. This is why the HTML may look just a little verbose, while the page remains fast and clean even when running on low-end mobile devices.
You already use CSS to change how elements are shown inside your JS code. Ellegant goes one step further and removes the JS code.


### Why? 🙄
We've been using a lot of Javascript code that we could replace with some clever CSS selectors to replicate it's function.
When you have this kind of no-JS components, you may use your Javascript code to do more complex interactions with less fear of jamming your user experience.