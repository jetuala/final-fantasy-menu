import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SelectParty.css';
import { deletePartyMember } from '../../../store/store';
import { reorderParty } from '../../../store/store';
import { useDrag, useDrop } from 'react-dnd';

// This component is different from the main Party component. Probably will just contain pictures of party members

const SelectCharacter = ({img, name, index, moveListItem}) => {
    // Drag and Drop section
    // medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

    // this item is draggable
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'character',
        // says that this item is of a type that can be dropped in the same area
        item: { index },
        // only needs the index to specify what item is being dragged
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    // this item is also a drop area
    const [spec, dropRef] = useDrop({
        accept: 'character',
        hover: (item, monitor) => {
            // dragged item's index
            const dragIndex = item.index
            // currently hovered-over item's index
            const hoverIndex = index
            // getting dimensions
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            // if dragging down, continue only when hover is smaller than middle Y
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            // if dragging up, continue only when hover is bigger than middle Y
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
            // THIS HAS GOT SOME MAJOR BUGS IN IT
        },
    })

    // Join 2 refs together into one (both draggable and can be dropped on)
    const ref = useRef(null);
    const dragDropRef = dragRef(dropRef(ref))

    // Make items being dragged transparent, so it's easier to see where we drop them
    const opacity = isDragging ? 0 : 1

    return (
        <div style={{ opacity }} ref={dragDropRef} >
            <img src={img} alt={name} />
        </div>
    )

}

const SelectParty = ({index, moveListItem}) => {
    const party = useSelector(state => state.party.party)
    const dispatch = useDispatch();

    function deleteFromParty(id, name) {
        if (window.confirm("Delete " + name + " from party?")) {
            dispatch(deletePartyMember(id));
        } else {
            return;
        }
    }

    return (
        <div className="window selectParty">
            <ul>
                {party.map((x, index) => {
                    return (
                        <li key={x.id}  onClick={() => deleteFromParty(x.id, x.name)}>
                            <SelectCharacter index={index} img={x.pictures[0].url} name={x.name} moveListItem={(dragIndex, hoverIndex) => dispatch(reorderParty({dragIndex, hoverIndex}))} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SelectParty;

// function (x.id, x.name) {deleteFromParty(x.id, x.name)}