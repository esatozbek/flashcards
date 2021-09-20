/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import Deck from 'components/Deck';
import Button from 'components/Button';
import CreateDeckModal from 'modals/CreateDeckModal';
import { isDeckModalOpenAtom } from 'atoms/modalAtoms';
import { decksAtom } from 'atoms/deckAtoms';
import { CONTAINER_STYLE, TOP_CONTAINER_STYLE, DECK_CONTAINER_STYLE } from './DeckList.style';
import { TDeck } from 'types/deck.types';

function DeckList(): ReactElement {
    const history = useHistory();
    const [isDeckModalOpen, setDeckModalOpen] = useAtom(isDeckModalOpenAtom);
    const [decks, setDecks] = useAtom(decksAtom);

    const handleOpenModal = useCallback(() => {
        setDeckModalOpen(true);
    }, [setDeckModalOpen]);

    const handleCloseModal = useCallback(() => {
        setDeckModalOpen(false);
    }, [setDeckModalOpen]);

    const handleCreateDeck = useCallback(
        (deckName) => {
            setDecks((prevDecks) => [...prevDecks, { deckName, cardIds: [] }]);
            setDeckModalOpen(false);
        },
        [setDecks, setDeckModalOpen]
    );

    const handleDeckClick = useCallback(
        (deck: TDeck) => {
            history.push('/deck', { deck });
        },
        [history]
    );

    return (
        <div sx={CONTAINER_STYLE}>
            <CreateDeckModal
                onCreateDeck={handleCreateDeck}
                isDeckModalOpen={isDeckModalOpen}
                onCloseModal={handleCloseModal}
            />
            <div sx={TOP_CONTAINER_STYLE}>
                <Button onClick={handleOpenModal} text="New Deck" />
            </div>
            <div sx={DECK_CONTAINER_STYLE}>
                {decks.map((deck) => (
                    <Deck deck={deck} onDeckClick={handleDeckClick} />
                ))}
            </div>
        </div>
    );
}

export default DeckList;
