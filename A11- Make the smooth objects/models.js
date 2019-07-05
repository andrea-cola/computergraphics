function buildGeometry() {
	var i;
	
	// Draws a cube
	var vert1 = [[-1.0,-1.0,1.0], [1.0,-1.0,1.0], [1.0,1.0,1.0], [-1.0,1.0,1.0], [-1.0,-1.0,-1.0], [1.0,-1.0,-1.0], [1.0,1.0,-1.0], [-1.0,1.0,-1.0]];
	var norm1 = [[-1.0,-1.0,1.0], [1.0,-1.0,1.0], [1.0,1.0,1.0], [-1.0,1.0,1.0], [-1.0,-1.0,-1.0], [1.0,-1.0,-1.0], [1.0,1.0,-1.0], [-1.0,1.0,-1.0]];
	var ind1 = [0,1,2, 0,2,3, 0,4,5, 0,5,1, 0,7,4, 0,3,7, 6,4,7, 6,5,4, 6,1,5, 6,2,1, 6,7,3, 6,3,2];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, norm1, ind1, color1);
	
	// Draws a Cylinder
	var vert2 = [[0.0, 0.0,-1.0], [0.0, 0.0,1.0]];
	var norm2 = [[0.0, 0.0,-1.0], [0.0, 0.0,1.0]];
	var ind2 = [];
	var color2 = [1.0, 0.0, 1.0];
	var slices2 = 64;
	for(i = 0; i < slices2; i++) {
		vert2[2*i+2] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), -1.0];
		vert2[2*i+3] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), +1.0];
		norm2[2*i+2] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), -1.0];
		norm2[2*i+3] = [Math.cos(2*Math.PI / slices2 * i), Math.sin(2*Math.PI / slices2 * i), +1.0];
		ind2[12*i] 	 = 2*i+2;
		ind2[12*i+1] = 0;
		ind2[12*i+2] = (i < slices2-1) ? 2*i+4 : 2 ;
		ind2[12*i+3] = 1;
		ind2[12*i+4] = 2*i+3;
		ind2[12*i+5] = (i < slices2-1) ? 2*i+5 : 3 ;
		ind2[12*i+6] = 2*i+3;
		ind2[12*i+7] = 2*i+2;
		ind2[12*i+8] = (i < slices2-1) ? 2*i+4 : 2 ;
		ind2[12*i+9] = 2*i+3;
		ind2[12*i+10] = (i < slices2-1) ? 2*i+4 : 2 ;
		ind2[12*i+11] = (i < slices2-1) ? 2*i+5 : 3 ;
	}
	addMesh(vert2, norm2, ind2, color2);
	
	var vert3 = [[0.0, 0.0,-1.0], [0.0, 0,0, 1.0]];
	var norm3 = [[0.0, 0.0,-1.0], [0.0, 0.0, 1.0]];
	var ind3 = [];
	var color3 = [1.0, 1.0, 0.0];
	var slices3 = 64;
	for(i = 0; i < slices3; i++) {
		vert3[i+2] = [Math.cos(2*Math.PI / slices3 * i), Math.sin(2*Math.PI / slices3 * i), -1.0];
		norm3[i+2] = [Math.cos(2*Math.PI / slices3 * i), Math.sin(2*Math.PI / slices3 * i), -1.0];
		ind3[6*i]   = 0;
		ind3[6*i+2] = i+2;
		ind3[6*i+1] = (i < slices3-1) ? i+3 : 2 ;
		ind3[6*i+3] = 1;
		ind3[6*i+4] = i+2;
		ind3[6*i+5] = (i < slices3-1) ? i+3 : 2 ;
	}	
	addMesh(vert3, norm3, ind3, color3);

	// Draws a Sphere
	var vert4 = [];
	var norm4 = []
	var ind4 = [];
	var color4 = [0.0, 1.0, 1.0];
	var slices4 = 25;
	var slicesz4 = 25;

	for(i=0; i<slicesz4; i++){
		for(j=0; j < slices4; j++) {
			vert4[slices4*i+j] = [Math.cos(2*Math.PI*j / slices4)*Math.sin(Math.PI*i / slicesz4), 
								  Math.sin(2*Math.PI*j / slices4)*Math.sin(Math.PI*i / slicesz4), 
								  Math.cos(Math.PI*i / slicesz4)];
			norm4[slices4*i+j] = [Math.cos(2*Math.PI*j / slices4)*Math.sin(Math.PI*i / slicesz4), 
								  Math.sin(2*Math.PI*j / slices4)*Math.sin(Math.PI*i / slicesz4), 
								  Math.cos(Math.PI*i / slicesz4)];
			ind4[6*slices4*i+6*j]   = slices4*i+j;
			ind4[6*slices4*i+6*j+1] = slices4*(i+1)+j;
			ind4[6*slices4*i+6*j+2] = (j<slices4-1) ? slices4*(i+1)+j+1 : slices4*(i+1);
			ind4[6*slices4*i+6*j+3] = slices4*i+j;
			ind4[6*slices4*i+6*j+4] = (j<slices4-1) ? slices4*(i+1)+j+1 : slices4*(i+1);
			ind4[6*slices4*i+6*j+5] = (j<slices4-1) ? slices4*i+j+1 : slices4*i;
		}
	}
	for(j=0; j < slices4; j++) {
			vert4[slices4*i+j] = [0, 0, -1];
			norm4[slices4*i+j] = [0, 0, -1];
	}
	addMesh(vert4, norm4, ind4, color4);
}

