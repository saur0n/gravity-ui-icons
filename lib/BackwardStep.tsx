import * as React from 'react';
import type {SVGProps} from 'react';
const BackwardStep = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            d="M2.25 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 2.25 2M13 3.896a.25.25 0 0 0-.384-.212l-6.48 4.105a.25.25 0 0 0 0 .422l6.48 4.106a.25.25 0 0 0 .384-.21zm1.5 8.21-.005.127c-.09 1.303-1.553 2.066-2.681 1.351L5.333 9.479a1.75 1.75 0 0 1 0-2.958l6.48-4.104.11-.064c1.112-.601 2.485.154 2.572 1.415l.005.128z"
        />
    </svg>
);
export default BackwardStep;
