import {FC} from "react";


interface IProps {
    setSort: (sort: string) => void;
}

export const SortBy: FC<IProps> = ({setSort}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '5rem',
            alignItems: 'center',
        }}>
            <h3>Sort by</h3>
            <select style={{
                outline: 'none',
                fontSize: '1.5rem',
                padding: '.5rem',
                fontWeight: 500,
                color: '#000',
                cursor: 'pointer',
            }} onChange={(e) => {
                setSort(e.target.value)
            }}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    )
}