import React, { useState, useEffect } from 'react';

function Loading() {
    const [isLoading, setIsLoading] = useState(true);
    const [isCheck, setIsCheck] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsCheck(false);
        }, 6000);
    }, [isCheck]);
}

export default Loading;
