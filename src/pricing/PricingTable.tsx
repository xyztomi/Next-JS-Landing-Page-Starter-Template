const features = [
  { name: 'SEO Audit & Strategy', starter: true, growth: true, pro: true },
  {
    name: 'Keyword Research',
    starter: '5 keywords',
    growth: '15 keywords',
    pro: '30+ keywords',
  },
  { name: 'On-Page Optimization', starter: true, growth: true, pro: true },
  {
    name: 'Google Business Profile',
    starter: 'Setup',
    growth: 'Optimization',
    pro: 'Full management',
  },
  { name: 'Monthly Reporting', starter: true, growth: true, pro: true },
  {
    name: 'Content Creation',
    starter: false,
    growth: '2 posts/mo',
    pro: '4 posts/mo',
  },
  {
    name: 'Link Building',
    starter: false,
    growth: '5 links/mo',
    pro: '10 links/mo',
  },
  { name: 'Technical SEO Fixes', starter: false, growth: true, pro: true },
  { name: 'Competitor Analysis', starter: false, growth: true, pro: true },
  { name: 'Advanced Analytics', starter: false, growth: false, pro: true },
  { name: 'Priority Support', starter: false, growth: false, pro: true },
  {
    name: 'Dedicated Account Manager',
    starter: false,
    growth: false,
    pro: true,
  },
];

const renderCell = (value: boolean | string) => {
  if (value === true) {
    return (
      <svg
        className="mx-auto size-5 text-accent-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    );
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
        <tr className="border-b-2 border-gray-200">
          <th className="py-3 pr-4 text-navy-700">Feature</th>
          <th className="px-4 py-3 text-center text-navy-700">Starter</th>
          <th className="px-4 py-3 text-center font-bold text-accent-600">
            Growth
          </th>
          <th className="px-4 py-3 text-center text-navy-700">Pro</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature.name} className="border-b border-gray-100">
            <td className="py-3 pr-4 font-medium">{feature.name}</td>
            <td className="px-4 py-3 text-center">
              {renderCell(feature.starter)}
            </td>
            <td className="bg-accent-500/5 px-4 py-3 text-center">
              {renderCell(feature.growth)}
            </td>
            <td className="px-4 py-3 text-center">{renderCell(feature.pro)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { PricingTable };
