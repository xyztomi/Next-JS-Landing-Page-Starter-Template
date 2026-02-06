'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

type IServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  id?: string;
  expandedDescription?: string;
};

const ServiceCard = (props: IServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const cardContent = (
    <Card
      id={props.id}
      className={`transition-shadow ${props.href ? 'hover:shadow-lg' : ''}`}
    >
      <CardContent className="p-6">
        <div className="mb-4 text-accent">{props.icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {props.title}
        </h3>
        <p className="text-muted-foreground">{props.description}</p>
        {props.expandedDescription && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              {expanded ? 'Show less' : 'Learn more'}
              {expanded ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
            {expanded && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {props.expandedDescription}
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );

  if (props.href) {
    return (
      <Link href={props.href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export { ServiceCard };
