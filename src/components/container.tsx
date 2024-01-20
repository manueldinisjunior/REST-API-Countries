import { cn } from '@/lib/utils';

type ContainerProps = React.ComponentProps<'div'>;

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn('xs:px-8 mx-auto max-w-7xl px-4', className)}
      {...props}
    />
  );
};
