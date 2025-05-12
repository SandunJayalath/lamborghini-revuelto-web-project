import { ChevronRight } from 'lucide-react';

export function DropDown(props) {
    return (
        <>
        <div className="btn-group dropend">
            <button type="button" id="drop-end-button">
                {props.title} <ChevronRight/>
            </button>
            <ul className="dropdown-menu dropend-container">
                {props.menu}
            </ul>
        </div>
        </>
    );
}

export function DropList(props) {
    return (
        <>
        <a href="" className='drop-end-a'>
            <li>{props.list}</li>
        </a>
        </>
    );
}
