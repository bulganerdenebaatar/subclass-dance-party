var MakeHermoine = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="hermoine bounce-1"></span>');
  this.setPosition(top, left);
};

MakeHermoine.prototype = Object.create(MakeDancer.prototype);

MakeHermoine.prototype.constructor = MakeHermoine;

MakeHermoine.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
};