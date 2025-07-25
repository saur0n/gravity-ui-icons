import * as React from 'react';
import type {SVGProps} from 'react';
const MathUnionShape = (props: SVGProps<SVGSVGElement>) => (
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
            fillRule="evenodd"
            d="M3 2.75V8.5a5 5 0 1 0 10 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25V8.5a3 3 0 1 1-6 0V2.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25M1.5 8.5V2.75C1.5 1.783 2.284 1 3.25 1h1.5c.966 0 1.75.783 1.75 1.75V8.5a1.5 1.5 0 1 0 3 0V2.75c0-.967.784-1.75 1.75-1.75h1.5c.966 0 1.75.783 1.75 1.75V8.5a6.5 6.5 0 0 1-13 0"
            clipRule="evenodd"
        />
    </svg>
);
export default MathUnionShape;
