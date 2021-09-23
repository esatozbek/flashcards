/** @jsxImportSource theme-ui */
import { ReactElement, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Text } from 'components/Typography';
import Button from 'components/Button';
import Card from 'components/Card';
import AddCardModal from 'modals/AddCardModal';
import { cardsAtom, addCardAtom } from 'atoms/cardAtoms';
import { isModalOpenAtom } from 'atoms/modalAtoms';
import { TLocationState } from 'types/location.types';
import { CONTAINER_STYLE, HEADER_CONTAINER_STYLE, CARD_CONTAINER_STYLE } from './CardList.styles';

function CardList(): ReactElement {
    const location = useLocation<TLocationState>();
    const [cards] = useAtom(cardsAtom);
    const [, addCard] = useAtom(addCardAtom);
    const { deck } = location.state;
    const [isModalOpen, setModalOpen] = useAtom(isModalOpenAtom);
    console.log(deck);

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
                <div sx={{ width: '55%', borderBottom: '6px solid black', py: 3, px: 2 }}>
                    <Text fontSize={5}>{location.state.deck?.deckName}</Text>
                </div>
                <Button text="Add Card" onClick={onOpenModal} />
            </div>

            <div sx={CARD_CONTAINER_STYLE}>
                {deck?.cardIds.map((card) => (
                    <Card card={cards[card]} />
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
