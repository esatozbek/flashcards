/** @jsxImportSource theme-ui */
import { Box, Textarea } from '@theme-ui/components';
import Button from 'components/Button';
import { Text } from 'components/Typography';
import { Fragment, ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function MobileView({
    onChangeFrontContent,
    onChangeBackContent,
    frontContent,
    backContent,
}: any): ReactElement {
    const [isFrontContentEditing, setFrontContentEditing] = useState(true);

    return (
        <Box>
            <Box mb={3}>
                <Button
                    text="Front"
                    onClick={() => setFrontContentEditing(true)}
                    variant={isFrontContentEditing ? 'secondary' : 'primary'}
                />
                <Button
                    text="Back"
                    onClick={() => setFrontContentEditing(false)}
                    variant={isFrontContentEditing ? 'primary' : 'secondary'}
                />
            </Box>

            {isFrontContentEditing ? (
                <Textarea
                    mb={3}
                    sx={{ width: '100%' }}
                    variant="styles.inputs.primary"
                    rows={5}
                    placeholder="Front Content"
                    value={frontContent}
                    onChange={onChangeFrontContent}
                />
            ) : (
                <Textarea
                    mb={3}
                    sx={{ width: '100%' }}
                    variant="styles.inputs.primary"
                    rows={5}
                    placeholder="Back Content"
                    value={backContent}
                    onChange={onChangeBackContent}
                />
            )}
        </Box>
    );
}

function DesktopOrTabletView({
    onChangeFrontContent,
    onChangeBackContent,
    frontContent,
    backContent,
}: any): ReactElement {
    return (
        <Fragment>
            <Box>
                <Box my={3}>
                    <Text fontFamily="heading" fontSize={3}>
                        Front content
                    </Text>
                </Box>
                <textarea
                    sx={{ width: '100%' }}
                    rows={10}
                    placeholder="Front Content"
                    value={frontContent}
                    onChange={onChangeFrontContent}
                />
            </Box>

            <Box mb={2}>
                <Box my={3}>
                    <Text fontFamily="heading" fontSize={3}>
                        Back content
                    </Text>
                </Box>
                <textarea
                    sx={{ width: '100%' }}
                    rows={10}
                    placeholder="Back Content"
                    value={backContent}
                    onChange={onChangeBackContent}
                />
            </Box>
        </Fragment>
    );
}

function CardContentInputs({
    onChangeFrontContent,
    onChangeBackContent,
    frontContent,
    backContent,
}: any): ReactElement {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return isMobile ? (
        <MobileView
            onChangeFrontContent={onChangeFrontContent}
            onChangeBackContent={onChangeBackContent}
            frontContent={frontContent}
            backContent={backContent}
        />
    ) : (
        <DesktopOrTabletView
            onChangeFrontContent={onChangeFrontContent}
            onChangeBackContent={onChangeBackContent}
            frontContent={frontContent}
            backContent={backContent}
        />
    );
}

export default CardContentInputs;
