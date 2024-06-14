import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Fixbn = () => {
    const fixBnRef = useRef();

    useLayoutEffect(() => {

        gsap.to(fixBnRef.current, {
            opacity: 1,
            y: 34,
            delay: 1.4,
            duration: 0.1,
        });
    });

    return (
        <div className="fix_bn" ref={fixBnRef}>
            <div className="left">
                <p><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span></p>
                <p><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span></p>
            </div>
            <div className="right">
                <p><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span></p>
                <p><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span><span>Try not to become a man of success but rather try to become a man of value.</span></p>
            </div>
        </div>
    )
}

export default Fixbn