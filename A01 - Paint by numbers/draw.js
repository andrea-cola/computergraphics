function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2
	line(-0.5, 0.5, -0.5, -0.7);
	line(0.5, 0.5, 0.5, -0.7);
	line(0.5, -0.7,-0.5,-0.7);
	line(-0.5, 0.5, 0, 0.8);
	line(0, 0.8, 0.5, 0.5);

	// chimney
	line(0.2, 0.68, 0.2, 0.9);
	line(0.3, 0.62, 0.3, 0.9);
	line(0.2, 0.9, 0.3, 0.9);

	// door
	line(0.15, -0.7, 0.15, -0.1);
	line(-0.15, -0.7, -0.15, -0.1);
	line(-0.15, -0.1, 0.15, -0.1);

	// window 1
	line(-0.1, 0.1, -0.1, 0.4);
	line(-0.4, 0.1, -0.4, 0.4);
	line(-0.4, 0.1, -0.1, 0.1);
	line(-0.4, 0.4, -0.1, 0.4);

	// window 1
	line(0.1, 0.1, 0.1, 0.4);
	line(0.4, 0.1, 0.4, 0.4);
	line(0.4, 0.1, 0.1, 0.1);
	line(0.4, 0.4, 0.1, 0.4);
}