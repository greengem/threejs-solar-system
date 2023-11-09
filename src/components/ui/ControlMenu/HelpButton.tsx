// HelpButton.tsx
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { IconHelp } from '@tabler/icons-react';

const HelpButton = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button 
      isIconOnly 
      onPress={onOpen}
      color='secondary' 
      variant='flat'
    >
      <IconHelp />
    </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="opacity-90">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Help and Tips</ModalHeader>
          <ModalBody>
            <p><span className="text-secondary">Mobile: </span>Pinch to zoom, drag to rotate around focus.</p>
            <p><span className="text-secondary">Desktop: </span>Left click + drag to move, scroll to zoom.</p>
            <p>Drag the slider on the right to change speed.</p>
            <p>Click a planet from the menu at the bottom of the page to zoom in and see more info.</p>
            <p>To exit planet view click "Exit Detail View" at the top or press the home button.</p>
            <p><span className="text-secondary">Note: </span> Free movement and speed are disabled when zoomed in on a planet</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  </>
  );
};

export default HelpButton;
