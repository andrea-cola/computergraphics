// these global variables are used to contain the current angles of the world
var worldAngle = 0;
var worldElevation = 0;
var worldRoll = 0;

var rad = Math.PI/180;
var p = Quaternion.fromEuler(0, 0, 0);

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
function updateWorld(rvx, rvy, rvz) {
	
	var q = Quaternion.fromEuler(rvz*rad, rvx*rad, rvy*rad, 'ZXY');

	p = q.mul(p);
	var out = p.toMatrix4();

	return out;
}