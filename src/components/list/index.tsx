import style from './list.module.scss';
import Item from './item';
import { ITask } from '../../types/Itask';


function Lista({ tasks }: { tasks: ITask[] }) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul >
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item} />
                ))}
            </ul>
        </aside>
    )
}


export default Lista;