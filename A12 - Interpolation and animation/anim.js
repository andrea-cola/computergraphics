var out;
function anim(cx, cy, cz, qx, qy, qz, qw, alpha) {

	if(out == null)
		out = utils.identityMatrix();

	// cx, cy, cz are arrays of four points
	// qx, qy, qz, qw are arrays of four quaternions
	// returns transform matrix with rotation and translation given
	// by Bezier interpolation of the input positions
	// according to parameter alpha (0 <= alpha <= 1)

	var p0 = [cx[0], cy[0], cz[0]];
	var p1 = [cx[1], cy[1], cz[1]];
	var p2 = [cx[2], cy[2], cz[2]];
	var p3 = [cx[3], cy[3], cz[3]];

	var q0 = new Quaternion(qw[0], qx[0], qy[0], qz[0]);
	var q1 = new Quaternion(qw[1], qx[1], qy[1], qz[1]);
	var q2 = new Quaternion(qw[2], qx[2], qy[2], qz[2]);
	var q3 = new Quaternion(qw[3], qx[3], qy[3], qz[3]);

	var bez = bezier(alpha, p0, p1, p2, p3);

	out = utils.MakeTranslateMatrix(bez[0], bez[1], bez[2]);

	var q = new Quaternion(rotationBezier(alpha, q0, q1, q2, q3));
	console.log(q);
	
	out = utils.multiplyMatrices(out, q.toMatrix4());

	console.log(out);

	return out;
}

function bezier (a, p0, p1, p2, p3){
	return sum(
		sum(
			mul(p0, Math.pow(1-a, 3)),
			mul(p1, 3*Math.pow(1-a, 2)*a),
		),
		sum(
			mul(p2, (1-a)*Math.pow(a,2)),
			mul(p3, Math.pow(a,3))
		)
	);
};

function rotationBezier(a, q0, q1, q2, q3){
	var q01 = slerp(a, q0, q1);
	var q12 = slerp(a, q1, q2);
	var q23 = slerp(a, q2, q3);
	var q012 = slerp(a, q01, q12);
	var q123 = slerp(a, q12, q23);

	return slerp(a, q012, q123);
}

function slerp(a, q1, q2){
	//console.log(q2);
	q1 = q1.normalize();
	q2 = q2.normalize();
	var teta = tetaSlerp(q1, q2);
	return new Quaternion(q1.scale((Math.sin(1-a)*teta)/Math.sin(teta)).add(q2.scale((Math.sin(a)*teta)/Math.sin(teta))));
}

function tetaSlerp(q1, q2){
	var a1 = q1.toVector();
	var a2 = q2.toVector();
	var sum = a1[0]*a2[0] + a1[1]*a2[1] + a1[2]*a2[2] + a1[3]*a2[3];
	var arcos = Math.acos(sum);
	return 2 * arcos;
}

function mul(a, b){
	return a.map(function(x) { return x * b; });
}

function sum(a, b){
	return a.map(function (num, idx) {
		return num + b[idx];
	  });
}