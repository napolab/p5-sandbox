#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 pos = gl_FragCoord.xy / u_resolution.xy;

  vec3 RED = vec3(1.0, 0.0, 0.0);
  vec3 BLUE = vec3(0.0, 0.0, 1.0);
  vec3 GREEN = vec3(0.0, 1.0, 0.0);
  vec3 YELLOW = vec3(1.0, 1.0, 0.0);

  vec3 col = mix(mix(RED, BLUE, pos.x), mix(GREEN, YELLOW, pos.x), pos.y);
  gl_FragColor = vec4(col, 1.0);
}
