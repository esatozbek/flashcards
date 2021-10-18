/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Box, Flex, Grid } from 'theme-ui';
import DefaultLayout from 'layouts/DefaultLayout';
import Deck from 'components/Deck';
import Button from 'components/Button';
import CreateDeckModal from 'modals/CreateDeckModal';
import { isModalOpenAtom } from 'atoms/modalAtoms';
import { decksAtom, addDeckAtom } from 'atoms/deckAtoms';
import { TOP_CONTAINER_STYLE } from './DeckListPage.style';
import { TDeck } from 'types/deck.types';

function DeckListPage(): ReactElement {
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
        <DefaultLayout>
            <Box mx={7} mt={5}>
                <CreateDeckModal
                    onCreateDeck={handleCreateDeck}
                    isDeckModalOpen={isModalOpen}
                    onCloseModal={handleCloseModal}
                />
                <Flex sx={TOP_CONTAINER_STYLE}>
                    <Button onClick={handleOpenModal} text="New Deck" />
                </Flex>
                <Grid variant="deckGrid">
                    {Object.values(decks).map((deck) => (
                        <Deck key={deck.deckId} deck={deck} onDeckClick={handleDeckClick} />
                    ))}
                </Grid>
            </Box>
        </DefaultLayout>
    );
}

export default DeckListPage;
