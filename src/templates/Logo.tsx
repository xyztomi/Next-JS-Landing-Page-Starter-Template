type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-bold text-lg sm:text-xl md:text-2xl'
    : 'font-bold text-base sm:text-xl';

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-foreground ${fontStyle}`}
    >
      <span className="text-xl sm:text-2xl">📈</span>
      <span className="whitespace-nowrap">
        SEO <span className="font-normal text-muted-foreground">Services</span>
        <span className="text-accent"> for Small Biz</span>
      </span>
    </span>
  );
};

export { Logo };
