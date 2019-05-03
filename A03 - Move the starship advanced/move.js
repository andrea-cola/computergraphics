function move() {
	// Rotate 30 degrees around an arbitrary axis passing through (1,1,0). The x-axis can be aligned to the arbitrary axis after a rotation of 15 degrees around the z-axis, and then 45 degrees around the y-axis.

	var T = [1.0,		0.0,		0.0,		1.0,
			0.0,		1.0,		0.0,		1.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var T_1 = [1.0,		0.0,		0.0,		-1.0,
			0.0,		1.0,		0.0,		-1.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_x =  [1.0,		0.0,		0.0,		0.0,
			0.0,		Math.cos(Math.PI/6),		-Math.sin(Math.PI/6),		0.0,
			0.0,		Math.sin(Math.PI/6),		Math.cos(Math.PI/6),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_y = [Math.cos(Math.PI/4),		0.0,		Math.sin(Math.PI/4),		0.0,
			0.0,		1.0,		0.0,		0.0,
			-Math.sin(Math.PI/4),		0.0,		Math.cos(Math.PI/4),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_z = [Math.cos(Math.PI/12),		-Math.sin(Math.PI/12),		0.0,		0.0,
			Math.sin(Math.PI/12),		Math.cos(Math.PI/12),		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_y_1 = [Math.cos(Math.PI/4),		0.0,		-Math.sin(Math.PI/4),		0.0,
			0.0,		1.0,		0.0,		0.0,
			Math.sin(Math.PI/4),		0.0,		Math.cos(Math.PI/4),		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_z_1 = [Math.cos(Math.PI/12),		Math.sin(Math.PI/12),		0.0,		0.0,
			-Math.sin(Math.PI/12),		Math.cos(Math.PI/12),		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R1 = utils.multiplyMatrices(T, R_y);
	R1 = utils.multiplyMatrices(R1, R_z);
	R1 = utils.multiplyMatrices(R1, R_x);
	R1 = utils.multiplyMatrices(R1, R_z_1);
	R1 = utils.multiplyMatrices(R1, R_y_1);
	R1 = utils.multiplyMatrices(R1, T_1);
			   
	// Double the size of an object, using as fixed point (1,1,0)
	var T =  [1.0,		0.0,		0.0,		1.0,
			0.0,		1.0,		0.0,		1.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var S =  [2.0,		0.0,		0.0,		0.0,
			0.0,		2.0,		0.0,		0.0,
			0.0,		0.0,		2.0,		0.0,
			0.0,		0.0,		0.0,		1.0];		

	var S1 =  utils.multiplyMatrices(T, S);
	S1 = utils.multiplyMatrices(S1, utils.invertMatrix(T));
		   
	// Mirror the starship along a plane passing through (1,2,0), and obtained rotating 38 degree around the y axis the xy plane
	var T =  [1.0,		0.0,		0.0,		1.0,
			0.0,		1.0,		0.0,		2.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var R_y = [Math.cos(0.66),		0.0,		Math.sin(0.66),		0.0,
			0.0,		1.0,		0.0,		0.0,
			-Math.sin(0.66),		0.0,		Math.cos(0.66),		0.0,
			0.0,		0.0,		0.0,		1.0];
	
	var S =  [1.0,		0.0,		0.0,		0.0,
			0.0,		1.0,		0.0,		0.0,
			0.0,		0.0,		-1.0,		0.0,
			0.0,		0.0,		0.0,		1.0];

	var S2 = utils.multiplyMatrices(T, R_y);
	S2 = utils.multiplyMatrices(S2, S);
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(R_y));
	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(T));
			   
	// The ship has been doubled in size, rotated 45 degrees around the x axis, 30 degrees around the y axis, and moved to (1,1,-2). Return the ship in its original position
	var T =  [1.0,		0.0,		0.0,		1.0,
			   0.0,		1.0,		0.0,		1.0,
			   0.0,		0.0,		1.0,		-2.0,
			   0.0,		0.0,		0.0,		1.0];

	var S =  [0.5,		0.0,		0.0,		0.0,
				0.0,		0.5,		0.0,		0.0,
				0.0,		0.0,		0.5,		0.0,
				0.0,		0.0,		0.0,		1.0];
				
	var R_y = [Math.cos(Math.PI/6),		0.0,		Math.sin(Math.PI/6),		0.0,
				0.0,		1.0,		0.0,		0.0,
				-Math.sin(Math.PI/6),		0.0,		Math.cos(Math.PI/6),		0.0,
				0.0,		0.0,		0.0,		1.0];

	var R_x =  [1.0,		0.0,		0.0,		0.0,
				0.0,		Math.cos(Math.PI/4),		-Math.sin(Math.PI/4),		0.0,
				0.0,		Math.sin(Math.PI/4),		Math.cos(Math.PI/4),		0.0,
				0.0,		0.0,		0.0,		1.0];

	var I1 = utils.multiplyMatrices(S, utils.invertMatrix(R_x));
	I1 = utils.multiplyMatrices(I1, utils.invertMatrix(R_y));
	I1 = utils.multiplyMatrices(I1, utils.invertMatrix(T));

	return [R1, S1, S2, I1];
}

