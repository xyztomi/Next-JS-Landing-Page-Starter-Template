import { Card, CardContent } from '@/components/ui/card';

type ITeamCardProps = {
  name: string;
  role: string;
  bio: string;
};

const TeamCard = (props: ITeamCardProps) => (
  <Card>
    <CardContent className="p-6 text-center">
      <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
        {props.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{props.name}</h3>
      <p className="mb-2 text-accent">{props.role}</p>
      <p className="text-sm text-muted-foreground">{props.bio}</p>
    </CardContent>
  </Card>
);

export { TeamCard };
