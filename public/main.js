var view = new Thorax.View({
  greeting: "Hello",
  template: Handlebars.compile("{{greeting}} world!")
});
view.appendTo('body');