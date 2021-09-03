/** @jsxImportSource theme-ui */
import { ReactElement } from 'react';
import Deck from 'components/Deck';

function DeckList(): ReactElement {
    return (
        <div sx={{ pl: '100px', display: 'flex', flexFlow: 'wrap' }}>
            {Array(5)
                .fill(0)
                .map(() => (
                    <Deck />
                ))}
        </div>
    );
}

export default DeckList;
