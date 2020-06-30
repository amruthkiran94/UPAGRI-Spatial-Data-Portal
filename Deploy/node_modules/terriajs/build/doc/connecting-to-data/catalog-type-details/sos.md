!!! note    This page is automatically generated from the source code, and is a bit rough.  If you have    trouble, check the [source code for this type](https://github.com/TerriaJS/terriajs/blob/master/lib/Models/SensorObservationServiceCatalogItem.js) or post a message to the [forum](https://groups.google.com/forum/#!forum/terriajs).A CatalogItem representing data obtained from a Sensor Observation Service (SOS) 2.0 server.
The SOS specifications are available at http://www.opengeospatial.org/standards/sos .
This requires a json configuration file which specifies the procedures and observableProperties to show.
If more than one procedure or observableProperty is provided, the user can choose between the options.
Note because of this need for configuration, there is no SOS catalog "group" (yet).

The offerings parameter is not used, and no spatial filters are provided.
The default soap XML request body can be overridden to handle custom requirements.## [Initialization File](../../customizing/initialization-files.md) properties:`"type": "sos"``_nameInCatalog`The name of the item to show in the catalog, if different from `name`. Default undefined.
This property is observed.`_sourceInfoItemNames`The names of items in the CatalogMember's info array that contain details of the source of this
CatalogMember's data. This should be overridden by children of this class.`cacheDuration`The cache duration to use for proxied URLs for this catalog member.  If undefined, proxied URLs are effectively cachable
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).`customProperties`The dictionary of custom item properties.`data`The data, represented as a binary Blob, a string, or a Promise for one of those things.
If this property is set, CatalogItem's url is ignored.`dataCustodian`A description of the custodian of this data item.
This property is an HTML string that must be sanitized before display to the user.`dataSourceUrl`The URL from which the TableCatalogItem's data was obtained.  This is informational; it is not
used.  This propery is observable.`dataUrl`The URL from which this data item's raw data can be retrieved, or undefined if raw data for
this data item is not available.`dataUrlType`The type of the CatalogItem's dataUrl, or undefined if raw data for this data
source is not available.
Valid values are:
 * `direct` - A direct link to the data.
 * `wfs` - A Web Feature Service (WFS) base URL.  If CatalogItem's dataUrl is not
           specified, the base URL will be this data item's URL.
 * `wfs-complete` - A complete, ready-to-use link to download features from a WFS server.
 * `none` - There is no data link.`dateFormat`Options for formatting current time and timeline tic labels. Options are:
   currentTime   // Current time in time slider will be shown in this format. For example "mmmm yyyy" for Jan 2016.
   timelineTic   // Timeline tics will have this label. For example "yyyy" will cause each tic to be labelled with the year.`description`The description of the item.`displayChoicesBeforeLegend`A flag which determines whether the legend comes before (false) or after (true) the display variable choice.
Default false.`endDate`An end date in ISO8601 format. All requests filter to this end date. Set to undefined to use the current date.`featureInfoTemplate`A template to display message in a info box.
May be a string or an object with template, name and/or partials properties.`forceProxy`Gets or sets whether or not this member should be forced to use a proxy.
This property is not observable.`hideSource`Indicates that the source of this data should be hidden from the UI (obviously this isn't super-secure as you
can just look at the network requests).`id`An optional unique id for this member, that is stable across renames and moves.
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.`initialMessage`A message object that is presented to the user when an item or group is initially clicked
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.`initialObservablePropertyIndex`The index of the initially selected observable property. Defaults to 0.`initialProcedureIndex`The index of the initially selected procedure. Defaults to 0.`isEnabled`A value indicating whether this data item is enabled.  An enabled data item appears in the
"Now Viewing" pane, but is not necessarily shown on the map.`isHidden`A value indicating whether this item is hidden from the catalog.  This
property is observable.`isLegendVisible`A value indicating whether the legend for this data item is currently visible.`isLoading`A value indicating whether this data source is currently loading.`isMappable`A value indicating whether this data source can be shown on the map (as opposed to a time-series dataset,
for instance, which can only be shown in a chart).`isPromoted`A value indicating whether this item is kept above other non-promoted items.`isSampled`A value indicating whether the rows correspond to "sampled" data.
This only makes a difference if there is a time column and idColumns.
In this case, if isSampled is true, then feature position, color and size are interpolated
to produce smooth animation of the features over time.
If isSampled is false, then times are treated as the start of periods, so that
feature positions, color and size are kept constant from one time until the next,
then change suddenly.
Color and size are never interpolated when they are drawn from a text column.`isShown`A value indicating whether this data item is currently shown on the map.  In order to be shown,
the item must also be enabled.`isUserSupplied`A value indicating whether this member was supplied by the user rather than loaded from one of the
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.`isWaitingForDisclaimer`Whether this catalog member is waiting for a disclaimer to be accepted before showing itself.`keepOnTop`Keeps the layer on top of all other imagery layers.`legendUrl`The URL of the legend to show when this catalog item is enabled.  If there is more than one
legend URL, this property returns the first one.`legendUrls`The URLs of the legends to show when this catalog item is enabled.`maximumShownFeatureInfos`The maximum number of features whose information can be shown at one time in the Feature Info Panel, from this item.
Defaults to terria.configParameters.defaultMaximumShownFeatureInfos`metadataUrl`The URL from which this data item's metadata description can be retrieved, or undefined if
metadata is not available for this data item.  The format of the metadata depends on the type of data item.
For example, Web Map Service (WMS) data items provide their metadata via their GetCapabilities document.`name`The name of the item.`nameInCatalog`The name of this catalog member in the catalog. By default this is just `name`, but can be overridden.`nowViewingIndex`The index of the item in the Now Viewing list.  Setting this property does not automatically change the order.
This property is used intenally to save/restore the Now Viewing order and is not intended for general use.`nowViewingMessage`A message to show when this item is enabled for the first time in order to call attention to the Now Viewing panel.`observablePropertiesName`The name seen by the user for the list of observable properties.
Defaults to "Property", but eg. for BoM, "Observation type" would be better.`opacity`The opacity (alpha) of the data item, where 0.0 is fully transparent and 1.0 is
fully opaque.`proceduresName`The name seen by the user for the list of procedures.
Defaults to "Procedure", but eg. for BoM, "Frequency" would be better.`rectangle`The geographic rectangle (extent or bounding box) containing this data item.`requestTemplate`The template XML string to POST to the SOS server to query for GetObservation.
If this property is undefined,
SensorObservationServiceCatalogItem.defaultRequestTemplate is used.
This is used as a Mustache template. See SensorObservationServiceRequestTemplate.xml for the default.
Be careful with newlines inside tags: Mustache can add an extra space in the front of them,
which causes the request to fail on the SOS server. Eg.
<wsa:Action>
http://www.opengis.net/...
</wsa:Action>
will render as <wsa:Action> http://www.opengis.net/...</wsa:Action>
The space before the "http" will cause the request to fail.`shortReport`A short report to show on the now viewing tab.`showWarnings`Should any warnings like failures in region mapping be displayed to the user?`showsInfo`A value indicating whether this data source should show an info icon.`startDate`A start date in ISO8601 format. All requests filter to this start date. Set to undefined for no temporal filter.`tryToLoadObservationData`A flag. If true, the catalog item will load all features, then, if
number of features < requestSizeLimit * requestNumberLimit, it will load all the observation data
for those features, and show that.
If false, or there are too many features, the observation data is only loaded when the feature is clicked on
(via a chart in the feature info panel).
Defaults to true.`url`The URL of this data.`useOwnClock`A flag indicating whether imagery should be displayed using this item's own clock (currentTime, multiplier),
or, if false, the terria clock (whose current time is shown in the timeline UI). Default false.`zoomOnEnable`A value indicating whether the map will automatically zoom to this catalog item when it is enabled.

Note that within a single init source:

* Catalog items with both `isEnabled` and `zoomOnEnable` set to true will override the top-level `initialCamera` property.
* If multiple catalog items have both `isEnabled` and `zoomOnEnable` set to true, it is undefined which one will affect the camera.

In the case of multiple init sources, however, the camera will reflect whatever happens in the _last_ init source, whether
it is a result of a `zoomOnEnable` or an `initialCamera`,