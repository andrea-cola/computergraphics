function view(cx, cy, cz, alpha, beta, rho) {
	// Create a view matrix for a camera in position cx, cy and cz, 
	// looking in the direction specified by
	// alpha, beta and rho, as outlined in the course slides.

	var a = alpha * Math.PI / 180;
	var b = beta * Math.PI / 180;
	var c = rho * Math.PI / 180;

	var t =  [1.0,		0.0,		0.0,		cx,
			   0.0,		1.0,		0.0,		cy,
			   0.0,		0.0,		1.0,	    cz,
			   0.0,		0.0,		0.0,		1.0];

	var rb =  [1.0,		0.0,		0.0,		0.0,
				0.0,		Math.cos(b),		-Math.sin(b),		0.0,
				0.0,		Math.sin(b),		Math.cos(b),	    0.0,
				0.0,		0.0,		0.0,		1.0];

	var ra =  [Math.cos(a),		0.0,	Math.sin(a),		0.0,
				0.0,		1.0,		0.0,		0.0,
				-Math.sin(a),		0.0,		Math.cos(a),	    0.0,
				0.0,		0.0,		0.0,		1.0];

	var rc =  [Math.cos(c),		-Math.sin(c),	0.0,		0.0,
				Math.sin(c),		Math.cos(c),		0.0,		0.0,
				0.0,		0.0,		1.0,	    0.0,
				0.0,		0.0,		0.0,		1.0];

	var out = utils.multiplyMatrices(t, ra);
	out = utils.multiplyMatrices(out, rb);
	out = utils.multiplyMatrices(out, rc);
	out = utils.invertMatrix(out);

	return out;
}

