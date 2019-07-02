function buildGeometry() {
	var i;
	
	// Draws a pyramid
	var vert1 = [[0,1,0], // 0
				 [-1,-1,1], // 1
				 [1,-1,1], // 2
				 [-1,-1,-1], // 3
				 [1,-1,-1]]; // 4
	var ind1 = [0, 1, 2, 0, 3, 1, 0, 4, 3, 0, 2, 4, 1, 3, 2, 2, 3, 4];
	var color1 = [1.0, 0.0, 0.0];
	addMesh(vert1, ind1, color1);

	// Draws a cube
	var vert2 = [
		[-1,-1,1], // 0
		[1,-1,1], // 1
		[-1,1,1], // 2
		[1,1,1], // 3
		[-1,-1,-1], // 4
		[1,-1,-1], // 5
		[-1,1,-1], // 6
		[1,1,-1] // 7
	];
	var ind2 = [0,1,2, 1,3,2, 0,4,1, 1,4,5, 0,2,6, 0,6,4, 4,6,5, 6,7,5, 2,3,6, 6,3,7, 7,3,1, 1,5,7];
	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);

	// Draws a Monopoly house
	var vert3 = [[-1,-1,1], // 0
				 [1,-1,1], // 1
				 [1,1,1], // 2
				 [-1,1,1], // 3
				 [0,1.5,1], // 4
				 [-1,-1,-1], // 5
				 [1,-1,-1], // 6
				 [1,1,-1], // 7
				 [-1,1,-1], // 8
				 [0,1.5,-1]]; //9
	var ind3 = [0, 1, 2,  0, 2, 3,  3, 2, 4, // fronte
				1, 0, 5,  5, 6, 1, // pavimento
				5, 0, 8,  8, 0, 3, // parete sx
				8, 6, 5,  6, 8, 7,  8, 9, 7,// retro
				9, 8, 3,  3, 4, 9,  9, 4, 2,  7, 9, 2, // tetto
				1, 7, 2,  6, 7, 1
			];
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
	
	// Draws a Cone
	var vert4 = [[0.0, 0.0, 0.0]];
	var ind4 = [];
	var color4 = [1.0, 1.0, 0.0];
	var slices4 = 6;
	var max = 0;
	for(i = 0; i < slices4; i++) {
		vert4[i+1] = [Math.cos(2*Math.PI / slices4 * i), 0, Math.sin(2*Math.PI / slices4 * i)];
		ind4[3*i] = 0;
		ind4[3*i+1] = i+1;
		ind4[3*i+2] = (i < slices4-1) ? i+2 : 1;
	}	
	vert4[vert4.length] = [0.0, 2.0, 0.0];
	for(i = 1; i <= slices4; i++){
		console.log(i, (i+1 == slices4+1) ? 1 : i+1);
		ind4.push(vert4.length - 1, (i+1 == slices4+1) ? 1 : i+1, i);
	}
	addMesh(vert4, ind4, color4);

	// Draws a Cylinder
	var vert5 = [[0.0, 0.0, 0.0]];
	var ind5 = [];
	var color5 = [1.0, 0.0, 1.0];
	var slices5 = 64;
	for(i = 0; i < slices5; i++) {
		vert5[i+1] = [Math.cos(2*Math.PI / slices5 * i), 0.0, Math.sin(2*Math.PI / slices5 * i)];
		ind5[3*i]   = 0;
		ind5[3*i+1] = i+1;
		ind5[3*i+2] = (i < slices5-1) ? i+2 : 1 ;
	}
	vert5.push([0.0, 2.0, 0.0]);
	var pos = vert5.length-1;
	for(i = 0; i < slices5; i++) {
		vert5[pos+i+1] = [Math.cos(2*Math.PI / slices5 * i), 2.0, Math.sin(2*Math.PI / slices5 * i)];
		ind5.push(pos+i+1, pos, (i < slices5-1) ? pos+i+2 : pos+1);
	}

	for(i = 1; i <= slices5; i++){
		console.log((i+1) > slices5 ? 1 : i+1, (pos+i) > vert5.length-1 ? pos+1 : pos+i, (pos+i+1) > slices5+pos ? 1 : pos+i+1);
		ind5.push((i+1) > slices5 ? 1 : i+1, i, (pos+i) > vert5.length-1 ? pos+1 : pos+i);
		ind5.push((i+1) > slices5 ? 1 : i+1, (pos+i) > vert5.length-1 ? pos+1 : pos+i, (pos+i+1) > slices5+pos ? pos+1 : pos+i+1);
	}
	addMesh(vert5, ind5, color5);

	// Draws a Sphere
	var vert6 = [[0.0, 0.0, 0.0]];
	var ind6 = [];
	var color6 = [0.0, 1.0, 1.0];
	var slices6 = 5;
	for(i = 0; i < slices6; i++) {
		vert6[i+1] = [Math.sin(2*Math.PI / slices6 * i), -Math.cos(2*Math.PI / slices6 * i), 0.0];
		vert6[i+slices6+1] = [2.6*Math.sin(2*Math.PI / slices6 * (i+0.5)), -2.6*Math.cos(2*Math.PI / slices6 * (i+0.5)), 0.0];
		ind6[6*i]   = 0;
		ind6[6*i+1] = i+1;
		ind6[6*i+2] = (i < slices6-1) ? i+2 : 1 ;
		ind6[6*i+4] = i+1;
		ind6[6*i+3] = (i < slices6-1) ? i+2 : 1 ;
		ind6[6*i+5] = slices6 + i + 1;
	}
	addMesh(vert6, ind6, color6);
}

