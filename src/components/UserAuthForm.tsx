import { FC } from 'react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  // We can now pass anything that you normally can pass to a div to this component
  // Also, we can pass all the props we normally receive from the parent component right into the actual div so we can style this component.
  // Not only in this component but wherever we render it as well. Just as if this was a div.
  console.log(`${cn('flex justify-center', className)}`);
  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button>Google</Button>
    </div>
  );
};

export default UserAuthForm;
