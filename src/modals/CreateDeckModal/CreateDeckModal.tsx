/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import Modal from 'components/Modal';
import Input from 'components/Input';
import Button from 'components/Button';
import { CreateDeckModalPropTypes } from './CreateDeckModal.types';
import { INPUT_CONTAINER_STYLE, FOOTER_CONTAINER_STYLE } from './CreateDeckModal.styles';

function CreateDeckModal({
    isDeckModalOpen,
    onCloseModal,
    onCreateDeck,
}: CreateDeckModalPropTypes): ReactElement {
    const [newDeckName, setNewDeckName] = useState('');

    const handleDeckNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewDeckName(e.target.value);
    }, []);

    const handleCreateDeck = useCallback(() => {
        onCreateDeck(newDeckName);
        setNewDeckName('');
    }, [newDeckName, onCreateDeck, setNewDeckName]);

    return (
        <Modal title="Create New Deck" showModal={isDeckModalOpen} onCloseModal={onCloseModal}>
            <div sx={INPUT_CONTAINER_STYLE}>
                <Input
                    placeholder="Name of new deck"
                    value={newDeckName}
                    onChange={handleDeckNameChange}
                />
            </div>

            <div sx={FOOTER_CONTAINER_STYLE}>
                <Button onClick={handleCreateDeck} text="Create Deck" />
            </div>
        </Modal>
    );
}

export default CreateDeckModal;
