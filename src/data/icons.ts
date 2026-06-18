export function withFill(svg: string): string {
  return svg.replace("<svg", '<svg fill="currentColor"');
}
