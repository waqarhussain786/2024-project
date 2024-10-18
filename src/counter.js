import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

function Counter() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
        // const [isExploding, setIsExploding] = React.useState(false);
    }
    
    return (
        <div>
            <ConfettiExplosion />
            <button onClick={handleClick}>you distroyed me {count} times</button>
        </div >
    );
}

export default Counter