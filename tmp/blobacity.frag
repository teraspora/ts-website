/*
	Blobacity
	Author: John Lynch
	Date: Feb. 2019
*/

#define PI 3.14159265
vec4 img;
vec3 black = vec3(0.);

// Some functions adapted from Github - 
// https://github.com/tobspr/GLSL-Color-Spaces/blob/master/ColorSpaces.inc.glsl

vec3 hue2rgb(float hue)
{
    float R = abs(hue * 6. - 3.) - 1.;
    float G = 2. - abs(hue * 6. - 2.);
    float B = 2. - abs(hue * 6. - 4.);
    return clamp(vec3(R,G,B), 0., 1.);
}

// Converts a value from linear RGB to HCV (Hue, Chroma, Value)
vec3 rgb2hcv(vec3 rgb) {
    // Based on work by Sam Hocevar and Emil Persson
    vec4 P = (rgb.g < rgb.b) ? vec4(rgb.bg, -1.0, 2.0/3.0) : vec4(rgb.gb, 0.0, -1.0/3.0);
    vec4 Q = (rgb.r < P.x) ? vec4(P.xyw, rgb.r) : vec4(rgb.r, P.yzx);
    float C = Q.x - min(Q.w, Q.y);
    float H = abs((Q.w - Q.y) / (6. * C + 1.e-10) + Q.z);
    return vec3(H, C, Q.x);
}

// Converts from HSL to linear RGB
vec3 hsl2rgb(vec3 hsl) {
    vec3 rgb = hue2rgb(hsl.x);
    float C = (1. - abs(2. * hsl.z - 1.)) * hsl.y;
    return (rgb - 0.5) * C + hsl.z;
}

// Converts from linear rgb to HSL
vec3 rgb2hsl(vec3 rgb) {
    vec3 HCV = rgb2hcv(rgb);
    float L = HCV.z - HCV.y * 0.5;
    float S = HCV.y / (1. - abs(L * 2. - 1.) + 1.e-10);
    return vec3(HCV.x, S, L);
}

// Colour fns.:
float hue(vec3 col) {
    return rgb2hsl(col).s;
}

vec3 changeHue(vec3 col, float newHue) {
    vec3 colHSL = rgb2hsl(col);
    colHSL.s = newHue;
    return hsl2rgb(colHSL);
}
    
float lightness(vec3 col) {
    return rgb2hsl(col).b;
}

vec3 changeLightness(vec3 col, float newLightness) {
    vec3 colHSL = rgb2hsl(col);
    colHSL.p = newLightness;
    return hsl2rgb(colHSL);
}
    
vec3 saturate(vec3 col) {
    vec3 colHSL = rgb2hsl(col);
    colHSL.t = 1.0;
    return hsl2rgb(colHSL);    
}

vec2 nmouse() {
    return iMouse.xy / iResolution.xy;
}

float om(float x) {     // one minus x
    return 1. - x;
}

vec3 om(vec3 v) {       // one minus v
    return 1. - v;
}

float op(float x) {     // one plus x 
    return 1. + x;
}

// Normalised trig fns.:
float nsin(float x) {
    return op(sin(x)) * 0.5;
}

float ncos(float x) {
    return op(cos(x)) * 0.5;
}

float arg(vec2 z) {
    return atan(z.y, z.x);
}

vec2 polar(float r, float phi) {
    return vec2(r * cos(phi), r * sin(phi));
}

vec2 times(vec2 v, vec2 w) {
    return vec2(v.x * w.x - v.y * w.y, v.x * w.y + v.y * w.x);
}

vec2 rotate(vec2 v, float phi) {
    return times(v, polar(1.0, phi)) ;
}

vec2 trt(vec2 v, vec2 offset, float phi) {
	return rotate(v - offset, phi) + offset;
}

float sec(float theta) {
    return 1. / cos(theta);
}

float iden(float x) {
    return x;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    
    float scale = exp2(nmouse().x * 6.) / 4.;
    vec3 col;
    float t = iTime / 2.;
    vec2 asp = vec2(iResolution.x / iResolution.y, 1.);
    vec2 uv = fragCoord.xy / iResolution.yy - asp * .5;
    float amp = 0.04; // * sin(t);
    float freq = 5.;
    float freqx = floor(3. + 32. * nsin(t / 24.)); // + mod(floor(iTime / 16.), 9.);
    
    float uvy = uv.y;
    col = mix(vec3(.0, .9, .6), vec3(.999, .3, .2), nsin(pow(length(uv), exp2(16. * nsin(t / 4.) * length(uv))))) / 2.;
    float cdelta = mod(iTime, 15.) / 15.;
    col = changeHue(col, fract(hue(col) + cdelta)); 
   
    vec2 offset = vec2(sin(t) / 2., -cos(t) / 2.) * asp * 0.75 * nsin(mod(t / 5., 64.));		// Path: Ellipse
    float edge = 0.3 + 0.03 * sin(arg((uv - offset)) * freqx)  + 0.03 * sin(arg(uv) * freqx) + 0.05 * sin(t / 5.);
    float dist = distance(uv, offset);
    if (dist < edge) {
        uv = trt(uv, offset, PI / 4. + t);
        col = vec3(.9, .3, .2);
        if (dist > edge - .04) {
            col = black;
        }
        if (dist < edge * .3) {
            col = vec3(.0, .7, .8);
            if (dist > edge * .5 - .1) {
                col = black;
            }
        }            
    } 
    float edge2 = 0.2 + 0.1 * sin(arg((uv - offset)) * freqx)  + 0.03 * sin(arg(uv) * freqx) + 0.05 * sin(t / 5.);
    float phi = t;
    float a = 1.9;
    offset = vec2(a * sin(phi), a * sin(phi) * cos(phi)) * asp * 0.75 * nsin(mod(t / 5., 64.));     // Path: Gerono lemniscate
    dist = distance(uv, offset);
    if (dist < edge2) {
        uv = trt(uv, offset, PI / 4. + t);
        col += vec3(.9, .3, .2).gbr;
        // col = texture2D(u_tex0, uv).rgb;
        if (dist > edge2 - .02) {
            col = black;
        }
        if (dist < edge2 * .33) {
            col = vec3(.8, .3, .3).gbr;
            if (dist > edge2 * .33 - .01) {
                col = black;
            }
        }            
    } 
    
    cdelta = mod(iTime, 32.) / 32.;
    col = changeHue(col, fract(hue(col) + cdelta)); 
    col *= pow(col, vec3(.45454545));
    col = saturate(col);
    fragColor = vec4(col,1.0);
}  
