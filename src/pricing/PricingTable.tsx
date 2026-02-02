import { Check } from 'lucide-react';

const features = [
  {
    name: 'Technical SEO Audit',
    essentials: true,
    pro: true,
    growth: true,
  },
  {
    name: 'On-Page Optimization',
    essentials: true,
    pro: true,
    growth: true,
  },
  {
    name: 'Keyword Targets',
    essentials: '5 keywords',
    pro: '10 keywords',
    growth: '15+ keywords',
  },
  {
    name: 'Google Business Profile',
    essentials: 'Setup',
    pro: 'Optimization',
    growth: 'Full management',
  },
  {
    name: 'Performance Reports',
    essentials: 'Monthly',
    pro: 'Weekly',
    growth: 'Weekly',
  },
  {
    name: 'Content Strategy & Creation',
    essentials: false,
    pro: true,
    growth: true,
  },
  {
    name: 'Backlink Building & Outreach',
    essentials: false,
    pro: true,
    growth: true,
  },
  {
    name: 'Dedicated Account Manager',
    essentials: false,
    pro: true,
    growth: true,
  },
  { name: 'Competitor Analysis', essentials: false, pro: false, growth: true },
  {
    name: 'Advanced Content Creation',
    essentials: false,
    pro: false,
    growth: true,
  },
  { name: 'Priority Support', essentials: false, pro: false, growth: true },
  {
    name: 'WhatsApp/Slack Support',
    essentials: false,
    pro: false,
    growth: true,
  },
];

const renderCell = (value: boolean | string) => {
  if (value === true) {
    return <Check className="mx-auto size-4 text-accent sm:size-5" />;
  }
  if (value === false) {
    return <span className="text-gray-300">&mdash;</span>;
  }
  return <span className="text-xs sm:text-sm">{value}</span>;
};

const PricingTable = () => (
  <div className="-mx-4 overflow-x-auto sm:mx-0">
    <table className="w-full min-w-[480px] text-left text-sm sm:text-base">
      <thead>
        <tr className="border-b-2 border-border">
          <th className="py-2 pr-2 text-foreground sm:py-3 sm:pr-4">Feature</th>
          <th className="p-2 text-center text-foreground sm:px-4 sm:py-3">
            Essentials
          </th>
          <th className="p-2 text-center font-bold text-accent sm:px-4 sm:py-3">
            Pro
          </th>
          <th className="p-2 text-center text-foreground sm:px-4 sm:py-3">
            Growth
          </th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature.name} className="border-b border-border/50">
            <td className="py-2 pr-2 font-medium sm:py-3 sm:pr-4">
              {feature.name}
            </td>
            <td className="p-2 text-center sm:px-4 sm:py-3">
              {renderCell(feature.essentials)}
            </td>
            <td className="bg-accent/5 p-2 text-center sm:px-4 sm:py-3">
              {renderCell(feature.pro)}
            </td>
            <td className="p-2 text-center sm:px-4 sm:py-3">
              {renderCell(feature.growth)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { PricingTable };
