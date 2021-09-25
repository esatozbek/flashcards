/** @jsxImportSource theme-ui */
import { ReactElement, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import Button from 'components/Button';
import Card from 'components/Card';
import AddCardModal from 'modals/AddCardModal';
import { cardsAtom, addCardAtom } from 'atoms/cardAtoms';
import { decksAtom } from 'atoms/deckAtoms';
import { isModalOpenAtom } from 'atoms/modalAtoms';
import { TLocationState } from 'types/location.types';
import { LeftArrowIcon } from 'assets/svg';
import { CONTAINER_STYLE, HEADER_CONTAINER_STYLE, CARD_CONTAINER_STYLE } from './CardList.styles';

function CardList(): ReactElement {
    const location = useLocation<TLocationState>();
    const history = useHistory();
    const [cards] = useAtom(cardsAtom);
    const [decks] = useAtom(decksAtom);
    const [, addCard] = useAtom(addCardAtom);
    const [isModalOpen, setModalOpen] = useAtom(isModalOpenAtom);
    const { deckId } = location.state;
    const deck = decks[deckId || ''];
    console.log(deck);
    console.log(cards);
    console.log(decks);
    useEffect(() => {
        if (!deck) {
            history.push('/asd');
        }
    }, [deck, history]);

    const onGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    const onCloseModal = useCallback(() => {
        setModalOpen(false);
    }, [setModalOpen]);

    const onOpenModal = useCallback(() => {
        setModalOpen(true);
    }, [setModalOpen]);

    const handleAddCard = useCallback(
        (frontContent: string, backContent: string) => {
            console.log(frontContent, backContent);
            addCard({ frontContent, backContent, deckId: deck?.deckId || '' });
        },
        [addCard, deck]
    );

    return (
        <div sx={CONTAINER_STYLE}>
            <div sx={HEADER_CONTAINER_STYLE}>
                <div sx={{ cursor: 'pointer' }} onClick={onGoBack}>
                    <LeftArrowIcon height={32} width={32} />
                </div>
                <div
                    sx={{
                        width: '55%',
                        borderBottom: '6px solid black',
                        py: 3,
                        px: 3,
                        mr: 64,
                        ml: 3,
                        flex: 1,
                    }}
                >
                    <Text fontSize={5}>{deck?.deckName}</Text>
                </div>

                <Button text="Add Card" onClick={onOpenModal} />
            </div>

            <div sx={CARD_CONTAINER_STYLE}>
                {deck?.cardIds.map((card) => (
                    <Card key={card} card={cards[card]} />
                ))}
            </div>
            <AddCardModal
                isModalOpen={isModalOpen}
                onCloseModal={onCloseModal}
                onAddCard={handleAddCard}
            />
        </div>
    );
}

export default CardList;
