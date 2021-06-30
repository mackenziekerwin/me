import _ from "lodash";

import { A } from "../../theme/typography";
import { ContentsList, ContentsLink } from "./styled";

const Contents = ({ isCaseStudy }) => {
  const sections = [
    "description",
    "role",
    "tools",
    "challenge",
    "solution",
    "takeaways",
  ];

  return (
    <ContentsList>
      {isCaseStudy &&
        sections.map((s, i) => (
          <ContentsLink key={(s, i)}>
            <A href={`#${s}`}>{_.capitalize(s)}</A>
          </ContentsLink>
        ))}
    </ContentsList>
  );
};

export default Contents;
