import React from 'react';
import { getRelatedPapers } from "../../../services/paper_service";
// function listFrom(authors) {
//   if (!authors) return;
//   return authors.map(({ name }) => `${name}`).join(", ");
// }
export default async function RelatedPapersTable({ title, abstract }) {


  return (
    <div>
       {title}, {abstract}
       {await getRelatedPapers(title, abstract)}
    </div>
  );
}
