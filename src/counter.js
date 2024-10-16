import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>you pressed me {count} times</button>
        </div>
    );
}

export default Counter