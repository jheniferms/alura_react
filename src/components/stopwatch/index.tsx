import Button from '../button';
import { Watch } from './watch';
import style from './stopwatch.module.scss'
import { ITask } from '../../types/Itask';
import { useState } from 'react';
import { timeToSecond } from '../../common/utils/time';

interface Props{
    taskSelected:ITask|undefined
}

export default function StopWatch({taskSelected}:Props) {

    const[time,setTime]= useState<Number|undefined>();

    if (taskSelected?.selected) {
       setTime(timeToSecond(taskSelected.time))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro</p>
            
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button label='Começar' />
        </div>
    )
}