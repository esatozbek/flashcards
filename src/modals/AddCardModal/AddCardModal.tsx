/** @jsxImportSource theme-ui */
import { useState, useCallback } from 'react';
import Modal from 'components/Modal';
import Card from 'components/Card';
import Button from 'components/Button';
import { Text } from 'components/Typography';
import { AddCardModalPropTypes } from './AddCardModal.types';

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
        onCloseModal();
    }, [onAddCard, frontContent, backContent]);

    return (
        <Modal
            title="Add Card"
            showModal={isModalOpen}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <div
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '10%',
                        transform: 'translateY(-50%)',
                    }}
                >
                    <Card
                        card={{
                            uuid: '',
                            creationDate: 123,
                            statistics: { practiceCount: 0, flipCount: 0 },
                            frontContent,
                            backContent,
                        }}
                    />
                </div>
            }
        >
            <div>
                <div sx={{ my: 3 }}>
                    <Text fontFamily="heading" fontSize={3}>
                        Front content
                    </Text>
                </div>
                <textarea
                    rows={10}
                    cols={60}
                    placeholder="Front Content"
                    value={frontContent}
                    onChange={onChangeFrontContent}
                />
            </div>

            <div sx={{ mb: 2 }}>
                <div sx={{ my: 3 }}>
                    <Text fontFamily="heading" fontSize={3}>
                        Back content
                    </Text>
                </div>
                <textarea
                    rows={10}
                    cols={60}
                    placeholder="Front Content"
                    value={backContent}
                    onChange={onChangeBackContent}
                />
            </div>

            <Button text="Add" onClick={handleAddCard} />
        </Modal>
    );
}

export default AddCardModal;
