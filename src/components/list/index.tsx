import style from './list.module.scss';
import Item from './item';
import { ITask } from '../../types/Itask';

interface Props{
    tasks: ITask[]
    selectTask:(taskSelected:ITask) => void
}

function Lista({ tasks ,selectTask}: Props ) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul >
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item} />
                ))}
            </ul>
        </aside>
    )
}


export default Lista;