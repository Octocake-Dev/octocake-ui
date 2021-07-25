import { variant } from "styled-system";
import styled from "styled-components";

import { BoxProps } from "../../types/box";

export const StyledBox = styled("div")<BoxProps>({}, variant({}));
