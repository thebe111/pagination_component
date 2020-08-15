import styled, { css } from "styled-components";
import colors from "../../global/colors";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiMoreHorizontal,
} from "react-icons/fi";

interface buttonItemProps {
  selected: boolean;
}

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1px solid ${colors.darkGray};
  border-radius: 50%;
  padding: 5px;
  color: ${colors.black};
  margin: 0 10px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(85%);
  }
`;

const StyledFirstButton = styled.button`
  ${buttonCss}
`;

const StyledLastButton = styled.button`
  ${buttonCss}
`;

const StyledPreviousButton = styled.button`
  ${buttonCss}
`;

const StyledNextButton = styled.button`
  ${buttonCss}
`;

const StyledPageItem = styled.button<buttonItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) =>
    props.selected ? colors.darkGray : "transparent"};
  border: 1px solid ${colors.darkGray};
  border-radius: 50%;
  padding: 5px;
  color: ${(props) => (!props.selected ? colors.black : colors.white)};
  margin: 0 10px;
  transition: filter 0.2s;
  font-weight: bold;

  &:hover {
    filter: brightness(85%);
  }
`;

const iconCss = css`
  width: 50px;
  height: 50px;
  color: ${colors.darkGray};
`;

const StyledPreviousIcon = styled(FiChevronLeft)`
  ${iconCss}
`;

const StyledNextIcon = styled(FiChevronRight)`
  ${iconCss}
`;

const StyledFirstIcon = styled(FiChevronsLeft)`
  ${iconCss}
`;

const StyledLastIcon = styled(FiChevronsRight)`
  ${iconCss}
`;

const StyledContinueIcon = styled(FiMoreHorizontal)`
  ${iconCss}
`;

export {
  StyledPagination,
  StyledFirstButton,
  StyledLastButton,
  StyledPreviousButton,
  StyledNextButton,
  StyledPreviousIcon,
  StyledNextIcon,
  StyledFirstIcon,
  StyledLastIcon,
  StyledPageItem,
  StyledContinueIcon,
};
