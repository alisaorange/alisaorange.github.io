import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './list.css';

export interface ListProps {
    elements: string[];
}

export const List: React.FC<ListProps> = ({elements}) => {
    const [displayedElements, setDisplayedElements] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [itemHeight, setItemHeight] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);

    const listRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDisplayedElements(elements.slice(0, 10));
    }, []);


    useLayoutEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const item = containerRef.current.querySelector('.sneaker-item');
                if (item) {
                    setItemHeight(item.clientHeight);
                }
            }
        };

        const observer = new ResizeObserver(handleResize);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    const handleScroll = () => {
        if (loading) return;  // Если идет загрузка, ничего не делаем
        if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 100) {  // Когда почти дошли до конца
                loadMoreItems();
            }
        }
    };

    const loadMoreItems = () => {
        setLoading(true);
        const nextItems = elements.slice(displayedElements.length, displayedElements.length + 10);
        setTimeout(() => {
            setDisplayedElements((prev) => [...prev, ...nextItems]);
            setLoading(false);
        }, 1000);  // Имитация асинхронной загрузки
    };

    return (
        <div
            ref={listRef}
            className="sneaker-list-container"
            onScroll={handleScroll}
        >
            <div ref={containerRef} className="sneaker-list">
                {displayedElements.map((sneaker, index) => (
                    <div key={index} className="sneaker-item">
                        {sneaker}
                    </div>
                ))}
                {loading && <div>Загрузка...</div>}
            </div>
        </div>
    );
};

export default List;