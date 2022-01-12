var MakeHagrid = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="hagrid"></span>');
  this.$node = $('<span class="hagrid bounce-2"></span>');
  this.setPosition(top, left);
};

MakeHagrid.prototype = Object.create(MakeDancer.prototype);
MakeHagrid.prototype.constructor = MakeHagrid;
MakeHagrid.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
};