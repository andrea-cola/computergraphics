function perspective(w, h, fov) {
	// Build a perspective projection matrix, for a viewport whose size is determined by parameters w (width) and h (height), and whose fov-y is passed in parameter fov. Near plane is n=0.1, and far plane f=100.
	var angle = fov * Math.PI / 180;
	var a = w/h;
	var t = Math.tan(angle/2);
	var n = 0.1;
	var f = 100.0;

	console.log(angle + " " + t);

	var out = [1.0/(a*t),		0.0,		0.0,		0.0,
			   0.0,		1.0/t,		0.0,			0.0,
			   0.0,		0.0,		(f+n)/(n-f),		2*f*n/(n-f),
			   0.0,		0.0,		-1.0,		1.0];

	return out;
}

