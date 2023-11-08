// InfoButton.tsx
import { Button } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';

const InfoButton = () => {
  return (
    <Button 
      isIconOnly 
      color='secondary' 
      variant='flat'
    >
      <IconInfoCircle />
    </Button>
  );
};

export default InfoButton;
