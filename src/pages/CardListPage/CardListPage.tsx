/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Grid, Box, Flex } from 'theme-ui';
import DefaultLayout from 'layouts/DefaultLayout';
import { Text } from 'components/Typography';
import Button from 'components/Button';
import Card from 'components/Card';
import AddCardModal from 'modals/AddCardModal';
import PracticeModal from 'modals/PracticeModal';
import { cardsAtom, addCardAtom } from 'atoms/cardAtoms';
import { decksAtom } from 'atoms/deckAtoms';
import { isModalOpenAtom } from 'atoms/modalAtoms';
import { TLocationState } from 'types/location.types';
import { LeftArrowIcon } from 'assets/svg';
import {
    HEADER_CONTAINER_STYLE,
    TITLE_CONTAINER_STYLE,
    ICON_BUTTON_CONTAINER_STYLE,
} from './CardListPage.styles';

function CardListPage(): ReactElement {
    const location = useLocation<TLocationState>();
    const history = useHistory();
    const [cards] = useAtom(cardsAtom);
    const [decks] = useAtom(decksAtom);
    const [, addCard] = useAtom(addCardAtom);
    const [, setModalOpen] = useAtom(isModalOpenAtom);
    const [isAddCardModalOpen, setAddCardModalOpen] = useState<boolean>(false);
    const [isPracticeModalOpen, setPracticeModalOpen] = useState<boolean>(false);
    const { deckId } = location.state || {};
    const deck = decks[deckId || ''];

    useEffect(() => {
        if (!deck) {
            history.push('/');
        }
    }, [deck, history]);

    const onGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const onCloseAddCardModal = useCallback(() => {
        setModalOpen(false);
        setAddCardModalOpen(false);
    }, [setModalOpen, setAddCardModalOpen]);

    const onOpenAddCardModal = useCallback(() => {
        setModalOpen(true);
        setAddCardModalOpen(true);
    }, [setModalOpen, setAddCardModalOpen]);

    const onClosePracticeModal = useCallback(() => {
        setModalOpen(false);
        setPracticeModalOpen(false);
    }, [setModalOpen, setPracticeModalOpen]);

    const onOpenPracticeModal = useCallback(() => {
        setModalOpen(true);
        setPracticeModalOpen(true);
    }, [setModalOpen, setPracticeModalOpen]);

    const handleAddCard = useCallback(
        (frontContent: string, backContent: string) => {
            addCard({ frontContent, backContent, deckId: deck?.deckId || '' });
        },
        [addCard, deck]
    );

    return (
        <DefaultLayout>
            <Box my={4} mx={[1, 4, 7]}>
                <Flex sx={HEADER_CONTAINER_STYLE} m={3}>
                    <Flex sx={{ flex: 1, marginBottom: [3, null, null], alignItems: 'center' }}>
                        <Box sx={ICON_BUTTON_CONTAINER_STYLE} onClick={onGoBack}>
                            <LeftArrowIcon height={32} width={32} />
                        </Box>
                        <Box sx={TITLE_CONTAINER_STYLE} p={3} mr={64} ml={3}>
                            <Text fontSize={5}>{deck?.deckName}</Text>
                        </Box>
                    </Flex>

                    <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Button text="Add Card" onClick={onOpenAddCardModal} style={{ mr: 3 }} />
                        <Button text="Practice Deck" onClick={onOpenPracticeModal} />
                    </Flex>
                </Flex>

                <Grid variant="deckGrid">
                    {deck?.cardIds.map((card) => (
                        <Card key={card} card={cards[card]} />
                    ))}
                </Grid>
                <AddCardModal
                    isModalOpen={isAddCardModalOpen}
                    onCloseModal={onCloseAddCardModal}
                    onAddCard={handleAddCard}
                />
                <PracticeModal
                    showModal={isPracticeModalOpen}
                    onCloseModal={onClosePracticeModal}
                    deckId={deckId || ''}
                />
            </Box>
        </DefaultLayout>
    );
}

export default CardListPage;
