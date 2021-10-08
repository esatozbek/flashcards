/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
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
    CONTAINER_STYLE,
    HEADER_CONTAINER_STYLE,
    CARD_CONTAINER_STYLE,
    TITLE_CONTAINER_STYLE,
    ICON_BUTTON_CONTAINER_STYLE,
} from './CardList.styles';

function CardList(): ReactElement {
    const location = useLocation<TLocationState>();
    const history = useHistory();
    const [cards] = useAtom(cardsAtom);
    const [decks] = useAtom(decksAtom);
    const [, addCard] = useAtom(addCardAtom);
    const [, setModalOpen] = useAtom(isModalOpenAtom);
    const [isAddCardModalOpen, setAddCardModalOpen] = useState<boolean>(false);
    const [isPracticeModalOpen, setPracticeModalOpen] = useState<boolean>(false);
    const { deckId } = location.state;
    const deck = decks[deckId || ''];

    useEffect(() => {
        if (!deck) {
            history.push('/asd');
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
            console.log(frontContent, backContent);
            addCard({ frontContent, backContent, deckId: deck?.deckId || '' });
        },
        [addCard, deck]
    );

    return (
        <div sx={CONTAINER_STYLE}>
            <div sx={HEADER_CONTAINER_STYLE}>
                <div sx={ICON_BUTTON_CONTAINER_STYLE} onClick={onGoBack}>
                    <LeftArrowIcon height={32} width={32} />
                </div>
                <div sx={TITLE_CONTAINER_STYLE}>
                    <Text fontSize={5}>{deck?.deckName}</Text>
                </div>

                <div>
                    <Button text="Add Card" onClick={onOpenAddCardModal} style={{ mr: 3 }} />
                    <Button text="Practice Deck" onClick={onOpenPracticeModal} />
                </div>
            </div>

            <div sx={CARD_CONTAINER_STYLE}>
                {deck?.cardIds.map((card) => (
                    <Card key={card} card={cards[card]} />
                ))}
            </div>
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
        </div>
    );
}

export default CardList;
