import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styled from 'styled-components';

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  border: 1px solid #F86338;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 40px 0 10px;
  font-size: 16px;
  outline: none;
  border: none;
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  position: absolute;
  right: 10px;
  color: #9A9AB0;
  cursor: pointer;
`;