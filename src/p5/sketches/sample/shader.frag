precision highp float;

uniform vec2 resolution;

const float freq = 20.0;

void main() {
  vec3 color;

  vec2 c = gl_FragCoord.xy / resolution;
  c = c * 2.0 - 1.0;
  color += vec3(pow(1.0 - abs(c.y), 64.0) * 2.0);
  color *= vec3(0.2, 0.5, 0.9);

  gl_FragColor = vec4(color, 1.0);
}
