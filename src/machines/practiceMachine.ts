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
                        actions: 'start',
                    },
                },
            },
            starting: {
                invoke: {
                    src: 'countdown',
                },
                on: {
                    TICK: [
                        {
                            actions: 'tickCountdown',
                            cond: (context: any) => context.countdown > 1,
                        } as any,
                        { target: 'started' },
                    ],
                },
            },
            started: {
                invoke: {
                    src: 'countdown',
                },
                on: {
                    NEXT_CARD: [
                        {
                            actions: 'goNextCard',
                            cond: (context) =>
                                context.selectedCardIdx < context.practiceCardIds.length - 1,
                        },
                        { target: 'ended', actions: 'endPractice' },
                    ],
                    PREV_CARD: [
                        {
                            actions: 'returnPrevCard',
                            cond: (context) => context.selectedCardIdx > 0,
                        },
                    ],
                    TURN_BACK: [
                        {
                            actions: 'turnCardBack',
                        },
                    ],
                    TICK: {
                        actions: 'tickTimeElapsed',
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
            tickCountdown: assign({
                countdown: (context: IContext, event) => context.countdown - 1,
            }),
            start: assign<IContext, any>((context, event) => ({
                practiceCardIds: event.practiceCardIds,
                startTime: new Date().getTime(),
            })),
            goNextCard: assign({
                selectedCardIdx: (context, event) => context.selectedCardIdx + 1,
            }),
            returnPrevCard: assign({
                selectedCardIdx: (context, event) => context.selectedCardIdx - 1,
            }),
            turnCardBack: assign<IContext, any>({
                turnBackCardIdxs: (context, event) => context.turnBackCardIdxs.add(event.cardIdx),
            }),
            tickTimeElapsed: assign({
                timeElapsed: (context, event) => context.timeElapsed + 1,
            }),
        },
        services: {
            countdown: (context) => (cb) => {
                const interval = setInterval(() => {
                    cb('TICK');
                }, 1000);

                return () => {
                    clearInterval(interval);
                };
            },
        },
    }
);

export default practiceMachine;
