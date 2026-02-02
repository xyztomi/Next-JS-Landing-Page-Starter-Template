type IBlogAuthorProps = {
  name: string;
  date: string;
};

const BlogAuthor = (props: IBlogAuthorProps) => (
  <div className="flex items-center gap-3">
    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
      {props.name
        .split(' ')
        .map((n) => n[0])
        .join('')}
    </div>
    <div>
      <p className="font-medium text-foreground">{props.name}</p>
      <p className="text-sm text-muted-foreground">
        {new Date(props.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </div>
  </div>
);

export { BlogAuthor };
