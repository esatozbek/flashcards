/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useAtom } from 'jotai';
import Deck from 'components/Deck';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { isDeckModalOpenAtom } from 'atoms/modalAtoms';
import { CONTAINER_STYLE, TOP_CONTAINER_STYLE, DECK_CONTAINER_STYLE } from './DeckList.style';

function DeckList(): ReactElement {
    const [isDeckModalOpen, setDeckModalOpen] = useAtom(isDeckModalOpenAtom);

    const handleOpenModal = useCallback(() => {
        setDeckModalOpen(true);
    }, [setDeckModalOpen]);

    const handleCloseModal = useCallback(() => {
        setDeckModalOpen(false);
    }, [setDeckModalOpen]);

    return (
        <div sx={CONTAINER_STYLE}>
            <Modal showModal={isDeckModalOpen} onCloseModal={handleCloseModal}>
                New Deck
            </Modal>
            <div sx={TOP_CONTAINER_STYLE}>
                <Button onClick={handleOpenModal}>New Deck</Button>
            </div>
            <div sx={DECK_CONTAINER_STYLE}>
                {Array(5)
                    .fill(0)
                    .map(() => (
                        <Deck />
                    ))}
            </div>
        </div>
    );
}

export default DeckList;
