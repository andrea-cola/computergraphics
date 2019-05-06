function axonometry() {
	// Make an isometric view, w = 40, a = 16/9, n = 1, f = 101.
	var step1 =  [1/40,	0.0,		0.0,		0.0,
				0.0,		(16/9)/40,		0.0,		0.0,
				0.0,		0.0,		-2/100,		-102/100,
				0.0,		0.0,		0.0,		1.0];

	var step2 =  [1,	0.0,		0.0,		0.0,
				0.0,		0.816541,		-0.577287,		0.0,
				0.0,		0.577287,		0.816541,		0.0,
				0.0,		0.0,		0.0,		1.0];

	var step3 =  [Math.cos(Math.PI/4),	0.0,		Math.sin(Math.PI/4),		0.0,
				0.0,		1,		0,		0.0,
				-Math.sin(Math.PI/4),		0,		Math.cos(Math.PI/4),		0.0,
				0.0,		0.0,		0.0,		1.0];

	var A1 =  utils.multiplyMatrices(step1, step2);
	A1 = utils.multiplyMatrices(A1, step3);
			   
	// Make a dimetric view, w = 40, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var step1 =  [1/40,	0.0,		0.0,		0.0,
				0.0,		(16/9)/40,		0.0,		0.0,
				0.0,		0.0,		-2/100,		-102/100,
				0.0,		0.0,		0.0,		1.0];

	var step2 =  [1,	0.0,		0.0,		0.0,
				0.0,		0.939693,		-0.342020,		0.0,
				0.0,		0.342020,		0.939693,		0.0,
				0.0,		0.0,		0.0,		1.0];

	var step3 =  [Math.cos(Math.PI/4),	0.0,		Math.sin(Math.PI/4),		0.0,
			0.0,		1,		0,		0.0,
			-Math.sin(Math.PI/4),		0,		Math.cos(Math.PI/4),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var A2 =  utils.multiplyMatrices(step1, step2);
	A2 = utils.multiplyMatrices(A2, step3);
			   
	// Make a trimetric view, w = 40, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var step1 =  [1/40,	0.0,		0.0,		0.0,
			0.0,		(16/9)/40,		0.0,		0.0,
			0.0,		0.0,		-2/100,		-102/100,
			0.0,		0.0,		0.0,		1.0];

	var step2 =  [1,	0.0,		0.0,		0.0,
			0.0,		Math.cos(Math.PI/6),		Math.sin(Math.PI/6),		0.0,
			0.0,		Math.sin(Math.PI/6),		Math.cos(Math.PI/6),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var step3 =  [Math.cos(Math.PI/6),	0.0,		Math.sin(Math.PI/6),		0.0,
			0.0,		1,		0,		0.0,
			-Math.sin(Math.PI/6),		0,		Math.cos(Math.PI/6),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var A3 =  utils.multiplyMatrices(step1, step2);
	A3 = utils.multiplyMatrices(A3, step3);
			   
	// Make an cavalier projection view, w = 40, a = 16/9, n = 1, f = 101, at 45 degrees
	var step1 =  [1/40,	0.0,		0.0,		0.0,
			0.0,		(16/9)/40,		0.0,		0.0,
			0.0,		0.0,		-2/100,		-102/100,
			0.0,		0.0,		0.0,		1.0];

	var step2 =  [1,	0.0,	-Math.cos(Math.PI/4),		0.0,
			0.0,		1,		-Math.sin(Math.PI/4),		0.0,
			0.0,		0,		1,		0.0,
			0.0,		0.0,		0.0,		1.0];
	
	var O1 =  utils.multiplyMatrices(step1, step2);

	// Make a cabinet projection view, w = 40, a = 16/9, n = 1, f = 101, at 60 degrees
	var step1 =  [1/40,	0.0,		0.0,		0.0,
		0.0,		(16/9)/40,		0.0,		0.0,
		0.0,		0.0,		-2/100,		-102/100,
		0.0,		0.0,		0.0,		1.0];

	var step2 =  [1,	0.0,	0.5 * Math.cos(Math.PI/3*2),		0.0,
			0.0,		1,		-0.5 * Math.sin(Math.PI/3*2),		0.0,
			0.0,		0,		1,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var O2 =  utils.multiplyMatrices(step1, step2);

	return [A1, A2, A3, O1, O2];
}

