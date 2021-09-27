/** @jsxImportSource theme-ui */
import { ReactElement, useState, useCallback } from 'react';
import Modal from 'components/Modal';
import { Text } from 'components/Typography';
import Input from 'components/Input';
import Button from 'components/Button';
import CheckBox from 'components/CheckBox';
import { PracticeModalPropTypes } from './PracticeModal.types';

function PracticeModal({ showModal, onCloseModal }: PracticeModalPropTypes): ReactElement {
    const [isShuffle, setShuffle] = useState<boolean>(false);

    const handleShuffleChanged = useCallback(
        (e: boolean) => {
            setShuffle(e);
        },
        [setShuffle]
    );

    return (
        <Modal
            title="Practice"
            showModal={showModal}
            onCloseModal={onCloseModal}
            direction="right"
            absoluteContent={
                <div
                    sx={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        p: 3,
                        backgroundColor: 'primary',
                        boxShadow: '4px 4px 2px 0px rgb(0 0 0 / 50%)',
                    }}
                >
                    <Text fontSize={5}>CS Deck</Text>
                </div>
            }
        >
            <div>
                <div
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text fontSize={3} fontFamily="heading">
                        Card Number
                    </Text>
                    <Input placeholder="All" value={''} onChange={() => {}} />
                </div>
                <div
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        my: 3,
                    }}
                >
                    <Text fontSize={3} fontFamily="heading">
                        Shuffle
                    </Text>
                    <CheckBox checked={isShuffle} onChange={handleShuffleChanged} />
                </div>
                <div sx={{ mt: 3 }}>
                    <Button text="Start Practice" />
                </div>
            </div>
        </Modal>
    );
}

export default PracticeModal;
