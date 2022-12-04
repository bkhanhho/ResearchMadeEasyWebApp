import React from "react";
import { getRelatedPapers } from "../../../services/paper_service";
// async function listFrom(title, abstract) {
//   if (!title || !abstract) return;
//   const res = await getRelatedPapers(title, abstract);
//   return res.map(({ paper }) => (
//     <li>
//       <a href={paper.url}>
//         {paper.score}: {paper.title}
//       </a>
//     </li>
//   ));
// }
export default function RelatedPapersTable({ title, abstract }) {
  return <div></div>;
  //     <div>
  //         {title}, {abstract}
  //         <ul>
  //             {await getRelatedPapers(title, abstract)}
  //         </ul>
  //     </div>
  // );
}
