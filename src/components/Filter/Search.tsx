import {FC} from "react";
import {SearchBar, SearchIcon, SearchInput} from "./filter.styled";


interface IProps {
    setSearchFilter: (searchFilter: string) => void;
}

export const Search: FC<IProps> = ({setSearchFilter}) => {
    return (
        <div style={{
            marginBottom: '20px'
        }}>
            <SearchBar>
                <SearchInput onChange={(e) => {
                    setSearchFilter(e.target.value)
                }} type="text" placeholder="Search products"/>
                <SearchIcon/>
            </SearchBar>

        </div>
    )
}