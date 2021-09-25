/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import Deck from 'components/Deck';
import Button from 'components/Button';
import CreateDeckModal from 'modals/CreateDeckModal';
import { isModalOpenAtom } from 'atoms/modalAtoms';
import { decksAtom, addDeckAtom } from 'atoms/deckAtoms';
import { CONTAINER_STYLE, TOP_CONTAINER_STYLE, DECK_CONTAINER_STYLE } from './DeckList.style';
import { TDeck } from 'types/deck.types';

function DeckList(): ReactElement {
    const history = useHistory();
    const [isModalOpen, setModalOpen] = useAtom(isModalOpenAtom);
    const [decks] = useAtom(decksAtom);
    const [, addDeck] = useAtom(addDeckAtom);

    const handleOpenModal = useCallback(() => {
        setModalOpen(true);
    }, [setModalOpen]);

    const handleCloseModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    const handleCreateDeck = useCallback(
        (deckName) => {
            addDeck({ deckName, cardIds: [] });
            setModalOpen(false);
        },
        [addDeck, setModalOpen]
    );

    const handleDeckClick = useCallback(
        (deck: TDeck) => {
            history.push('/deck', { deckId: deck.deckId });
        },
        [history]
    );

    return (
        <div sx={CONTAINER_STYLE}>
            <CreateDeckModal
                onCreateDeck={handleCreateDeck}
                isDeckModalOpen={isModalOpen}
                onCloseModal={handleCloseModal}
            />
            <div sx={TOP_CONTAINER_STYLE}>
                <Button onClick={handleOpenModal} text="New Deck" />
            </div>
            <div sx={DECK_CONTAINER_STYLE}>
                {Object.values(decks).map((deck) => (
                    <Deck key={deck.deckId} deck={deck} onDeckClick={handleDeckClick} />
                ))}
            </div>
        </div>
    );
}

export default DeckList;
