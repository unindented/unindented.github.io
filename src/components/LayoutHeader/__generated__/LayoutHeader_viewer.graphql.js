/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LayoutHeader_viewer$ref: FragmentReference;
declare export opaque type LayoutHeader_viewer$fragmentType: LayoutHeader_viewer$ref;
export type LayoutHeader_viewer = {|
  +login: string,
  +name: ?string,
  +$refType: LayoutHeader_viewer$ref,
|};
export type LayoutHeader_viewer$data = LayoutHeader_viewer;
export type LayoutHeader_viewer$key = {
  +$data?: LayoutHeader_viewer$data,
  +$fragmentRefs: LayoutHeader_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LayoutHeader_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User"
};
// prettier-ignore
(node/*: any*/).hash = '196d1954be49e19e66d5a825c63e5a2b';

module.exports = node;
