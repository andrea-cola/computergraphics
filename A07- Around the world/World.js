// these global variables are used to contain the current angles of the world
var worldAngle = 0;
var worldElevation = 0;
var worldRoll = 0;

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
function updateWorld(rvx, rvy, rvz) {
	// updates the angles
	worldAngle += rvy;
	worldElevation += rvx;
	worldRoll += rvz;

	out = Quaternion.fromEuler(
						convertAngle(worldRoll),
						convertAngle(worldElevation), 
						convertAngle(worldAngle), 
						"ZXY")
						.conjugate()
						.toMatrix4();

	return out;
}

function convertAngle(worldAngle){
	return worldAngle * Math.PI / 180;
}