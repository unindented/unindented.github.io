/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LayoutFooter_viewer$ref: FragmentReference;
declare export opaque type LayoutFooter_viewer$fragmentType: LayoutFooter_viewer$ref;
export type LayoutFooter_viewer = {|
  +name: ?string,
  +websiteUrl: ?any,
  +$refType: LayoutFooter_viewer$ref,
|};
export type LayoutFooter_viewer$data = LayoutFooter_viewer;
export type LayoutFooter_viewer$key = {
  +$data?: LayoutFooter_viewer$data,
  +$fragmentRefs: LayoutFooter_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LayoutFooter_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "websiteUrl",
      "storageKey": null
    }
  ],
  "type": "User"
};
// prettier-ignore
(node/*: any*/).hash = 'e5b5928250d50f37744f50ff1f7b519e';

module.exports = node;
