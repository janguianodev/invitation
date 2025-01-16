interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, className, subtitle }: Props) => {
  return (
    <div className={`p-3 ${className}`}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      {subtitle && <h3 className="text-2xl mb-2 text-gray-500">{subtitle}</h3>}
    </div>
  );
};
