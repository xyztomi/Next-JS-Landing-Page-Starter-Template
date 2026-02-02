import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="[&_a:hover]:underline [&_a]:text-primary">
    &copy; Copyright {new Date().getFullYear()} {AppConfig.site_name}.
  </div>
);

export { FooterCopyright };
