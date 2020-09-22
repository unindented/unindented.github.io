/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LayoutFooter_viewer$ref = any;
type LayoutHeader_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Layout_viewer$ref: FragmentReference;
declare export opaque type Layout_viewer$fragmentType: Layout_viewer$ref;
export type Layout_viewer = {|
  +$fragmentRefs: LayoutHeader_viewer$ref & LayoutFooter_viewer$ref,
  +$refType: Layout_viewer$ref,
|};
export type Layout_viewer$data = Layout_viewer;
export type Layout_viewer$key = {
  +$data?: Layout_viewer$data,
  +$fragmentRefs: Layout_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Layout_viewer",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LayoutHeader_viewer"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LayoutFooter_viewer"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '18fc5aca14b01ace2d78695c2eb1c508';

module.exports = node;
