/*
 * noGL.js - A minimalist webgl feature detector
 * Copyright 2014 Active 9 LLC.
 * LICENSE: MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Active 9 LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * * *AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @return {true, false}
 */
noGL = function() {
	var can,gl;
	try {
		can = document.createElement('canvas');
		gl = can.getContext("3d") || can.getContext("webgl") || can.getContext("moz-webgl") || can.getContext("webkit-3d") || can.getContext("experimental-webgl");
	}
	catch(e) {
		console.log(e);
		gl = false;
	}
	finally {
		return !(window.WebGLRenderingContext) || !gl ? false : true;
	}
}
