import { createMachine, assign, Interpreter } from 'xstate';

export type TEvent =
    | { type: '' }
    | { type: 'START'; practiceCardIds: string[] }
    | { type: 'TICK' }
    | { type: 'PREV_CARD' }
    | { type: 'NEXT_CARD' }
    | { type: 'TURN_BACK'; cardIdx: string };

export interface IContext {
    startTime: number;
    endTime: number;
    practiceCardIds: string[];
    selectedCardIdx: number;
    countdown: number;
    timeElapsed: number;
    turnBackCardIdxs: Set<string>;
}

export type TPracticeService = Interpreter<
    IContext,
    any,
    TEvent,
    {
        value: any;
        context: IContext;
    }
>;

const practiceMachine = createMachine<IContext, TEvent>(
    {
        id: 'practice',
        initial: 'idle',
        context: {
            startTime: 0,
            endTime: 0,
            countdown: 3,
            practiceCardIds: [],
            selectedCardIdx: 0,
            timeElapsed: 0,
            turnBackCardIdxs: new Set<string>(),
        },
        states: {
            idle: {
                on: {
                    START: {
                        target: 'starting',
                        actions: assign((context, event) => ({
                            practiceCardIds: event.practiceCardIds,
                            startTime: new Date().getTime(),
                        })),
                    },
                },
            },
            starting: {
                invoke: {
                    src: (context) => (cb) => {
                        const interval = setInterval(() => {
                            cb('TICK');
                        }, 1000);

                        return () => {
                            clearInterval(interval);
                        };
                    },
                },
                on: {
                    TICK: [
                        {
                            actions: assign({
                                countdown: (context: IContext, event) => context.countdown - 1,
                            }),
                            cond: (context: any) => context.countdown > 1,
                        } as any,
                        { target: 'started' },
                    ],
                },
            },
            started: {
                invoke: {
                    src: (context) => (cb) => {
                        const interval = setInterval(() => {
                            cb('TICK');
                        }, 1000);

                        return () => {
                            clearInterval(interval);
                        };
                    },
                },
                on: {
                    NEXT_CARD: [
                        {
                            actions: assign({
                                selectedCardIdx: (context, event) => context.selectedCardIdx + 1,
                            }),
                            cond: (context) =>
                                context.selectedCardIdx < context.practiceCardIds.length - 1,
                        },
                        { target: 'ended', actions: 'endPractice' },
                    ],
                    PREV_CARD: [
                        {
                            actions: assign({
                                selectedCardIdx: (context, event) => context.selectedCardIdx - 1,
                            }),
                            cond: (context) => context.selectedCardIdx > 0,
                        },
                    ],
                    TURN_BACK: [
                        {
                            actions: assign({
                                turnBackCardIdxs: (context, event) =>
                                    context.turnBackCardIdxs.add(event.cardIdx),
                            }),
                        },
                    ],
                    TICK: {
                        actions: assign({
                            timeElapsed: (context, event) => context.timeElapsed + 1,
                        }),
                    },
                },
            },
            ended: {
                type: 'final',
            },
        },
    },
    {
        actions: {
            endPractice: assign<IContext, any>({
                endTime: new Date().getTime(),
            }),
        },
    }
);

export default practiceMachine;
