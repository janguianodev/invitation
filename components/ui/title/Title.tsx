interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, className, subtitle }: Props) => {
  return (
    <div className={`p-0 sm:p-3 ${className}`}>
      <h1 className="text-3xl font-semibold pl-4 md:pl-0">{title}</h1>
      {subtitle && <h3 className="text-xlmb-5">{subtitle}</h3>}
    </div>
  );
};
