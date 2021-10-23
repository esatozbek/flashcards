/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import CheckBox from 'components/CheckBox';
import Input from 'components/Input';
import { Text } from 'components/Typography';
import Button from 'components/Button';
import { MODAL_ROW_STYLE } from '../PracticeModal.styles';
import { PracticeFormPropTypes } from '../PracticeModal.types';

function PracticeForm({
    onStartPractice,
    defaultCardNumber = 0,
}: PracticeFormPropTypes): ReactElement {
    const [isShuffle, setShuffle] = useState<boolean>(false);
    const [cardNumber, setCardNumber] = useState<number>(defaultCardNumber);

    const handleShuffleChanged = useCallback(
        (e: boolean) => {
            setShuffle(e);
        },
        [setShuffle]
    );

    const handleCardNumberChanged = useCallback(
        (e) => {
            setCardNumber(Number(e.target.value));
        },
        [setCardNumber]
    );

    const handleStartPractice = useCallback(() => {
        onStartPractice(isShuffle, cardNumber);
    }, [onStartPractice, cardNumber, isShuffle]);

    return (
        <div>
            <div sx={MODAL_ROW_STYLE}>
                <Text fontSize={3} fontFamily="heading">
                    Card Number
                </Text>
                <Input
                    type="number"
                    min={1}
                    max={defaultCardNumber}
                    placeholder="All"
                    value={cardNumber.toString()}
                    onChange={handleCardNumberChanged}
                />
            </div>
            <div
                sx={{
                    ...MODAL_ROW_STYLE,
                    my: 3,
                }}
            >
                <Text fontSize={3} fontFamily="heading">
                    Shuffle
                </Text>
                <CheckBox checked={isShuffle} onChange={handleShuffleChanged} />
            </div>
            <div sx={{ mt: 3 }}>
                <Button text="Start Practice" onClick={handleStartPractice} />
            </div>
        </div>
    );
}

export default PracticeForm;
