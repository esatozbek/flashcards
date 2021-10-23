import { useInterpret, useSelector } from '@xstate/react';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { decksAtom } from 'atoms/deckAtoms';
import { setServiceAtom } from 'atoms/serviceAtoms';
import { TDeck } from 'types/deck.types';
import practiceMachine, { TPracticeService } from 'machines/practiceMachine';

type TPracticeModel = {
    selectedDeck: TDeck;
    practiceCardIds: string[];
    turnBackCardIdxs: Set<string>;
    value: string;
    started: boolean;
};

export function usePracticeModel(
    practiceService: TPracticeService,
    deckId: string
): TPracticeModel {
    const [decks] = useAtom(decksAtom);
    const practiceCardIds = useSelector(practiceService, (state) => state.context.practiceCardIds);
    const turnBackCardIdxs = useSelector(
        practiceService,
        (state) => state.context.turnBackCardIdxs
    );
    const value = useSelector(practiceService, (state) => state.value.toString());
    const started = useSelector(practiceService, (state) => !state.matches('idle'));

    return { selectedDeck: decks[deckId], practiceCardIds, turnBackCardIdxs, value, started };
}

export function usePracticeService() {
    const practiceService = useInterpret(practiceMachine);
    const [, setService] = useAtom(setServiceAtom);

    useEffect(() => {
        setService({ serviceKey: 'practiceService', service: practiceService });
    }, [practiceService, setService]);

    return { practiceService };
}
