/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Repository_repository$ref: FragmentReference;
declare export opaque type Repository_repository$fragmentType: Repository_repository$ref;
export type Repository_repository = {|
  +nameWithOwner: string,
  +$refType: Repository_repository$ref,
|};
export type Repository_repository$data = Repository_repository;
export type Repository_repository$key = {
  +$data?: Repository_repository$data,
  +$fragmentRefs: Repository_repository$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repository_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nameWithOwner",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'faa64d71070b44258c3bc76b2640bdcc';

module.exports = node;
