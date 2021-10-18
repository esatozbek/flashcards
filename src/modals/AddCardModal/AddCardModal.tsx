/** @jsxImportSource theme-ui */
import { useState, useCallback } from 'react';
import { Box } from 'theme-ui';
import Modal from 'components/Modal';
import Card from 'components/Card';
import Button from 'components/Button';
import CardContentInputs from './views/CardContentInputs';
import { AddCardModalPropTypes } from './AddCardModal.types';
import { CONTAINER_STYLE } from './AddCardModal.styles';

function AddCardModal({ isModalOpen, onCloseModal, onAddCard }: AddCardModalPropTypes) {
    const [frontContent, setFrontContent] = useState<string>('');
    const [backContent, setBackContent] = useState<string>('');

    const onChangeFrontContent = useCallback(
        (e) => {
            setFrontContent(e.target.value);
        },
        [setFrontContent]
    );

    const onChangeBackContent = useCallback(
        (e) => {
            setBackContent(e.target.value);
        },
        [setBackContent]
    );

    const handleAddCard = useCallback(() => {
        onAddCard(frontContent, backContent);
        setFrontContent('');
        setBackContent('');
        onCloseModal();
    }, [onAddCard, frontContent, backContent, onCloseModal]);

    return (
        <Modal
            title="Add Card"
            showModal={isModalOpen}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <Box sx={CONTAINER_STYLE}>
                    <Card
                        card={{
                            uuid: '',
                            creationDate: 123,
                            statistics: { practiceCount: 0, flipCount: 0 },
                            frontContent,
                            backContent,
                        }}
                    />
                </Box>
            }
        >
            <CardContentInputs
                onChangeFrontContent={onChangeFrontContent}
                onChangeBackContent={onChangeBackContent}
                frontContent={frontContent}
                backContent={backContent}
            />

            <Button text="Add" onClick={handleAddCard} />
        </Modal>
    );
}

export default AddCardModal;
