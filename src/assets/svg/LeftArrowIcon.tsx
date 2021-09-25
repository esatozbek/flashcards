import { SvgPropTypes } from './Svg.types';

function LeftArrowIcon({ height, width }: SvgPropTypes) {
    return (
        <svg
            enableBackground="new 0 0 451.111 451.111"
            height={height || '512'}
            viewBox="0 0 451.111 451.111"
            width={width || '512'}
        >
            <path d="m451.111 193.333h-322.222l112.778-112.777-48.333-48.333-193.334 193.333 193.333 193.333 48.333-48.333-112.777-112.778h322.222z" />
        </svg>
    );
}

export default LeftArrowIcon;
