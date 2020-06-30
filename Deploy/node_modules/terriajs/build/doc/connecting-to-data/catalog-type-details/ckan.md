!!! note    This page is automatically generated from the source code, and is a bit rough.  If you have    trouble, check the [source code for this type](https://github.com/TerriaJS/terriajs/blob/master/lib/Models/CkanCatalogGroup.js) or post a message to the [forum](https://groups.google.com/forum/#!forum/terriajs).A CatalogGroup representing a collection of layers from a [CKAN](http://ckan.org) server.## [Initialization File](../../customizing/initialization-files.md) properties:`"type": "ckan"``_nameInCatalog`The name of the item to show in the catalog, if different from `name`. Default undefined.
This property is observed.`_sourceInfoItemNames`The names of items in the CatalogMember's info array that contain details of the source of this
CatalogMember's data. This should be overridden by children of this class.`allowEntireWfsServers`True to allow entire WFS servers (that is, WFS resources without a clearly-defined layer) to be
added to the catalog; otherwise, false.`allowEntireWmsServers`True to allow entire WMS servers (that is, WMS resources without a clearly-defined layer) to be
added to the catalog; otherwise, false.`blacklist`A hash of names of blacklisted groups and data sources.  A group or data source that appears in this hash
will not be shown to the user.  In this hash, the keys should be the names of the groups and data sources to blacklist,
and the values should be "true".`cacheDuration`The cache duration to use for proxied URLs for this catalog member.  If undefined, proxied URLs are effectively cachable
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).`customProperties`The dictionary of custom item properties.`dataCustodian`A description of the custodian of the data sources in this group.
This property is an HTML string that must be sanitized before display to the user.`description`The description of the item.`filterByWmsGetCapabilities`A value indicating whether the CKAN datasets should be filtered by querying GetCapabilities from each
referenced WMS server and excluding datasets not found therein.`filterQuery`The filter query to pass to CKAN when querying the available data sources and their groups. Each item in the
array causes an independent request to the CKAN, and the results are concatenated.  The
search string is equivalent to what would be in the parameters segment of the url calling the CKAN search api.
See the [Solr documentation](http://wiki.apache.org/solr/CommonQueryParameters#fq) for information about filter queries.
Each item can be either a URL-encoded string ("fq=res_format%3awms") or an object ({ fq: 'res_format:wms' }). The latter
format is easier to work with.
  To get all the datasets with wms resources: [{ fq: 'res_format%3awms' }]
  To get all wms/WMS datasets in the Surface Water group: [{q: 'groups=Surface Water', fq: 'res_format:WMS' }]
  To get both wms and esri-mapService datasets: [{q: 'res_format:WMS'}, {q: 'res_format:"Esri REST"' }]
  To get all datasets with no filter, you can use ['']
This property is required.`forceProxy`Gets or sets whether or not this member should be forced to use a proxy.
This property is not observable.`groupBy`A value indicating how datasets should be grouped.  Valid values are:
* `none` - Datasets are put in a flat list; they are not grouped at all.
* `group` - Datasets are grouped according to their CKAN group.  Datasets that are not in any groups are put at the top level.
* `organization` - Datasets are grouped by their CKAN organization.  Datasets that are not associated with an organization are put at the top level.`hideSource`Indicates that the source of this data should be hidden from the UI (obviously this isn't super-secure as you
can just look at the network requests).`id`An optional unique id for this member, that is stable across renames and moves.
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.`includeCsv`True to allow CSV resources to be added to the catalog; otherwise, false.`includeCzml`True to allow CZML resources to be added to the catalog; otherwise, false.`includeEsriFeatureServer`True to allow ESRI FeatureServer resources to be added to the catalog; otherwise, false.`includeEsriMapServer`True to allow ESRI MapServer resources to be added to the catalog; otherwise, false.`includeGeoJson`True to allow GeoJSON resources to be added to the catalog; otherwise, false.`includeKml`True to allow KML resources to be added to the catalog; otherwise, false.`includeWfs`True to allow WFS resources to be added to the catalog; otherwise, false.`includeWms`True to allow WMS resources to be added to the catalog; otherwise, false.`initialMessage`A message object that is presented to the user when an item or group is initially clicked
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.`isHidden`A value indicating whether this item is hidden from the catalog.  This
property is observable.`isOpen`A value indicating whether the group is currently expanded and showing
its children.`isPromoted`A value indicating whether this item is kept above other non-promoted items.`isUserSupplied`A value indicating whether this member was supplied by the user rather than loaded from one of the
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.`isWaitingForDisclaimer`Whether this catalog member is waiting for a disclaimer to be accepted before showing itself.`itemProperties`A hash of properties that will be set on each child item.
For example, { "treat404AsError": false }`minimumMaxScaleDenominator`The minimum MaxScaleDenominator that is allowed for a WMS dataset to be included in this CKAN group.
If this property is undefined or if CkanCatalogGroup's filterByWmsGetCapabilities is false, no
filtering based on MaxScaleDenominator is performed.`name`The name of the item.`nameInCatalog`The name of this catalog member in the catalog. By default this is just `name`, but can be overridden.`shortReport`A short report to show on the now viewing tab.`ungroupedTitle`A title for the group holding all items that don't have a group in CKAN. If the value is a blank string or undefined,
these items will be left at the top level, not grouped.`url`The URL of the CKAN server.`useCombinationNameWhereMultipleResources`A value indicating whether each catalog item's name should be populated from
individual resources and the CKAN dataset where the are multiple resources for a single dataset.`useResourceName`A value indicating whether each catalog item's name should be populated from
individual resources instead of from the CKAN dataset.`wmsParameters`Any extra wms parameters that should be added to the wms query urls in this CKAN group.
If this property is undefined then no extra parameters are added.