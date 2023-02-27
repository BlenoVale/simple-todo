import { ChangeEvent, useState } from 'react';

import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item,
    onCheck: (index: number, checkValue: boolean) => void;
}

export const ListItem = ({ item, onCheck }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
        onCheck(item.id, e.target.checked);
    }

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleIsChecked}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    );
}