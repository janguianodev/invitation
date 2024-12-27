export const validateImageSrc = (
  src: string | undefined
): string | undefined => {
  return src && (src.startsWith("http://") || src.startsWith("https://"))
    ? src
    : undefined;
};
