!!! note    This page is automatically generated from the source code, and is a bit rough.  If you have    trouble, check the [source code for this type](https://github.com/TerriaJS/terriajs/blob/master/lib/Models/AbsIttCatalogGroup.js) or post a message to the [forum](https://groups.google.com/forum/#!forum/terriajs).A CatalogGroup representing a collection of items from an Australian Bureau of Statistics
(ABS) ITT server, formed by querying for all the codes in a given dataset and concept.## [Initialization File](../../customizing/initialization-files.md) properties:`"type": "abs-itt-dataset-list"``_nameInCatalog`The name of the item to show in the catalog, if different from `name`. Default undefined.
This property is observed.`_sourceInfoItemNames`The names of items in the CatalogMember's info array that contain details of the source of this
CatalogMember's data. This should be overridden by children of this class.`blacklist`A hash of names of blacklisted datasets.  A dataset that appears in this hash
will not be shown to the user.  In this hash, the keys should be the name of the dataset to blacklist,
and the values should be "true".`cacheDuration`The cache duration to use for proxied URLs for this catalog member.  If undefined, proxied URLs are effectively cachable
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).`conceptNamesUrl`The URL of a JSON file containing human-readable names of Australian Bureau of Statistics concept codes.`customProperties`The dictionary of custom item properties.`dataCustodian`A description of the custodian of the data sources in this group.
This property is an HTML string that must be sanitized before display to the user.`description`The description of the item.`forceProxy`Gets or sets whether or not this member should be forced to use a proxy.
This property is not observable.`hideSource`Indicates that the source of this data should be hidden from the UI (obviously this isn't super-secure as you
can just look at the network requests).`id`An optional unique id for this member, that is stable across renames and moves.
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.`initialMessage`A message object that is presented to the user when an item or group is initially clicked
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.`isHidden`A value indicating whether this item is hidden from the catalog.  This
property is observable.`isOpen`A value indicating whether the group is currently expanded and showing
its children.`isPromoted`A value indicating whether this item is kept above other non-promoted items.`isUserSupplied`A value indicating whether this member was supplied by the user rather than loaded from one of the
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.`isWaitingForDisclaimer`Whether this catalog member is waiting for a disclaimer to be accepted before showing itself.`name`The name of the item.`nameInCatalog`The name of this catalog member in the catalog. By default this is just `name`, but can be overridden.`regionPopulationsUrlPrefix`The start of a URL of a csv file containing the total number of people in each region, eg.
SA4,Tot_P_M,Tot_P_F,Tot_P_P
101,100000,23450,123450
102,130000,100000,234560
The region code and '.csv' are appended to the end of this URL for the request, eg.
'data/2011Census_TOT_' -> 'data/2011Census_TOT_SA4.csv' (and other region types).`shortReport`A short report to show on the now viewing tab.`url`The URL of the ABS ITT API, typically http://stat.abs.gov.au/itt/query.jsp.`whitelist`A hash of names of whitelisted datasets.  A dataset that doesn't appears in this hash
will not be shown to the user.  In this hash, the keys should be the name of the dataset to blacklist,
and the values should be "true".