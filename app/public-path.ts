// O Next.js aplica basePath aos próprios bundles, mas imagens e links HTML
// precisam receber o prefixo explicitamente em publicações em subdiretórios.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

export function publicPath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}
