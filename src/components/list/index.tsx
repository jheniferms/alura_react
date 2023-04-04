import React from 'react';
import style from './list.module.scss';
import Item from './item';

function Lista() {
    const taks = [{ task: 'React', time: '02:00:00' }, { task: 'Go', time: '01:00:00' }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul >
                {taks.map((item, index) => (
                    <Item
                        key={index}
                        {...item} />
                ))}
            </ul>
        </aside>
    )
}


export default Lista;