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
    return <Check className="mx-auto size-5 text-accent" />;
  }
  if (value === false) {
    return <span className="text-gray-300">&mdash;</span>;
  }
  return <span className="text-sm">{value}</span>;
};

const PricingTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b-2 border-border">
          <th className="py-3 pr-4 text-foreground">Feature</th>
          <th className="px-4 py-3 text-center text-foreground">Essentials</th>
          <th className="px-4 py-3 text-center font-bold text-accent">Pro</th>
          <th className="px-4 py-3 text-center text-foreground">Growth</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature.name} className="border-b border-border/50">
            <td className="py-3 pr-4 font-medium">{feature.name}</td>
            <td className="px-4 py-3 text-center">
              {renderCell(feature.essentials)}
            </td>
            <td className="bg-accent/5 px-4 py-3 text-center">
              {renderCell(feature.pro)}
            </td>
            <td className="px-4 py-3 text-center">
              {renderCell(feature.growth)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { PricingTable };
