var MakeDobby = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //add bounce-1 animation in css to dobby
  this.$node = $('<span class="dobby bounce-1"></span>');
  this.setPosition(top, left);
};

MakeDobby.prototype = Object.create(MakeDancer.prototype);

MakeDobby.prototype.constructor = MakeDobby;

MakeDobby.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
};