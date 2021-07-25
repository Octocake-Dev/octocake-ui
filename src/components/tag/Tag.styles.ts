import { variant } from "styled-system";
import styled from "styled-components";

import { TagProps } from "../../types/tag";

export const StyledTag = styled("span")<TagProps>({}, variant({}));
