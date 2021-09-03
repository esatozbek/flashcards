/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import Deck from 'components/Deck';
import Button from 'components/Button';

function DeckList(): ReactElement {
    return (
        <div sx={{ mx: '100px', mt: '24px' }}>
            <div sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                <Button>New Deck</Button>
            </div>
            <div
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    rowGap: '32px',
                    columnGap: '32px',
                    mt: '24px',
                }}
            >
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
