/** @jsxImportSource theme-ui */
import { ReactElement, ReactNode } from 'react';
import { Text } from 'components/Typography';

function InfoText({ children }: { children: ReactNode }): ReactElement {
    return (
        <Text fontSize={4} fontFamily="heading" as="div">
            {children}
        </Text>
    );
}

export default InfoText;
