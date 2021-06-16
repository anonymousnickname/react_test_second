import React, {useState} from "react";
import {observer, useLocalObservable} from "mobx-react";

import "./app.css";

export type CounterProps = {
    initialCount: number;
};

const Counter = observer((props: CounterProps) => {
    const store = useLocalObservable(() => {
        return {
            count: props.initialCount ?? 0,
            dec() {
                this.count--;
            },
            inc() {
                this.count++;
            }
        };
    });

    return (
        <main className="mainWrap">
            <div className="innerWrap">
                <h1 className="count">Clicks {store.count}</h1>

                <div className="buttonsWrap">
                    <button className="buttonPrimary" onClick={store.dec}>
                        Decrement
                    </button>

                    <button className="buttonPrimary" onClick={store.inc}>
                        Increment
                    </button>
                </div>
            </div>
        </main>
    );
});

export default Counter;
