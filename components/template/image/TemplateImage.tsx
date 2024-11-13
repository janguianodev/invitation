import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>["className"];
  width: number;
  height: number;
}

export const TemplateImage = ({
  alt,
  height,
  width,
  className,
  src,
}: Props) => {
  const localSrc = src || "/images/placeholder.jpg";
  return (
    <Image
      src={localSrc}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};
