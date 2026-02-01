type ITeamCardProps = {
  name: string;
  role: string;
  bio: string;
};

const TeamCard = (props: ITeamCardProps) => (
  <div className="rounded-lg bg-white p-6 text-center shadow">
    <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-600">
      {props.name
        .split(' ')
        .map((n) => n[0])
        .join('')}
    </div>
    <h3 className="text-xl font-semibold text-navy-700">{props.name}</h3>
    <p className="mb-2 text-accent-600">{props.role}</p>
    <p className="text-sm text-gray-600">{props.bio}</p>
  </div>
);

export { TeamCard };
