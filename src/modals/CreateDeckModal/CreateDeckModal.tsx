/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import Modal from 'components/Modal';
import Input from 'components/Input';
import Button from 'components/Button';
import { CreateDeckModalPropTypes } from './CreateDeckModal.types';

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
            <div sx={{ mb: 8 }}>
                <Input
                    placeholder="Name of new deck"
                    value={newDeckName}
                    onChange={handleDeckNameChange}
                />
            </div>

            <div sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleCreateDeck} text="Create Deck" />
            </div>
        </Modal>
    );
}

export default CreateDeckModal;
