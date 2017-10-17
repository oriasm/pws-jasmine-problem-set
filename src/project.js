function Project() {
this.latestIteration = new Iteration();
this.middleIteration = new Iteration();
this.oldestIteration = new Iteration();
this.count = 0;
}

Project.prototype.addIteration = function(iteration) {
if (this.count < 3)
	this.count = this.count + 1;

this.oldestIteration = this.middleIteration
this.middleIteration= this.latestIteration;
this.latestIteration = iteration;
}

Project.prototype.velocity = function() {
var total = this.latestIteration.totalPoints() + this.middleIteration.totalPoints() + this.oldestIteration.totalPoints();
return total / this.count;
}


