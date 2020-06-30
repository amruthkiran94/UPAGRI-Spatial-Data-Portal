((self || window)["webpackJsonp"] = (self || window)["webpackJsonp"] || []).push([["vendors~3D~Cesium-DataSources"],{

/***/ "./node_modules/terriajs-cesium/Source/Core/CornerType.js":
/*!****************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/Core/CornerType.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    /**
     * Style options for corners.
     *
     * @demo The {@link https://sandcastle.cesium.com/index.html?src=Corridor.html&label=Geometries|Corridor Demo}
     * demonstrates the three corner types, as used by {@link CorridorGraphics}.
     *
     * @exports CornerType
     */
    var CornerType = {
        /**
         * <img src="Images/CornerTypeRounded.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner has a smooth edge.
         * @type {Number}
         * @constant
         */
        ROUNDED : 0,

        /**
         * <img src="Images/CornerTypeMitered.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner point is the intersection of adjacent edges.
         * @type {Number}
         * @constant
         */
        MITERED : 1,

        /**
         * <img src="Images/CornerTypeBeveled.png" style="vertical-align: middle;" width="186" height="189" />
         *
         * Corner is clipped.
         * @type {Number}
         * @constant
         */
        BEVELED : 2
    };
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze(CornerType));


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositePositionProperty.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defaultValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defaultValue.js */ "./node_modules/terriajs-cesium/Source/Core/defaultValue.js");
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/ReferenceFrame.js */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js");
/* harmony import */ var _CompositeProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CompositeProperty.js */ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");








    /**
     * A {@link CompositeProperty} which is also a {@link PositionProperty}.
     *
     * @alias CompositePositionProperty
     * @constructor
     *
     * @param {ReferenceFrame} [referenceFrame=ReferenceFrame.FIXED] The reference frame in which the position is defined.
     */
    function CompositePositionProperty(referenceFrame) {
        this._referenceFrame = Object(_Core_defaultValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceFrame, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__["default"].FIXED);
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._composite = new _CompositeProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this._composite.definitionChanged.addEventListener(CompositePositionProperty.prototype._raiseDefinitionChanged, this);
    }

    Object.defineProperties(CompositePositionProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._composite.isConstant;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._composite.intervals;
            }
        },
        /**
         * Gets or sets the reference frame which this position presents itself as.
         * Each PositionProperty making up this object has it's own reference frame,
         * so this property merely exposes a "preferred" reference frame for clients
         * to use.
         * @memberof CompositePositionProperty.prototype
         *
         * @type {ReferenceFrame}
         */
        referenceFrame : {
            get : function() {
                return this._referenceFrame;
            },
            set : function(value) {
                this._referenceFrame = value;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time in the fixed frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__["default"].FIXED, result);
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositePositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        var innerProperty = this._composite._intervals.findDataForIntervalContainingDate(time);
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_1__["default"])(innerProperty)) {
            return innerProperty.getValueInReferenceFrame(time, referenceFrame, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositePositionProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositePositionProperty && //
                this._referenceFrame === other._referenceFrame && //
                this._composite.equals(other._composite, _Property_js__WEBPACK_IMPORTED_MODULE_6__["default"].equals));
    };

    /**
     * @private
     */
    CompositePositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (CompositePositionProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/CompositeProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_EventHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/EventHelper.js */ "./node_modules/terriajs-cesium/Source/Core/EventHelper.js");
/* harmony import */ var _Core_TimeIntervalCollection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/TimeIntervalCollection.js */ "./node_modules/terriajs-cesium/Source/Core/TimeIntervalCollection.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");







    function subscribeAll(property, eventHelper, definitionChanged, intervals) {
        function callback() {
            definitionChanged.raiseEvent(property);
        }
        var items = [];
        eventHelper.removeAll();
        var length = intervals.length;
        for (var i = 0; i < length; i++) {
            var interval = intervals.get(i);
            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(interval.data) && items.indexOf(interval.data) === -1) {
                eventHelper.add(interval.data.definitionChanged, callback);
            }
        }
    }

    /**
     * A {@link Property} which is defined by a {@link TimeIntervalCollection}, where the
     * data property of each {@link TimeInterval} is another Property instance which is
     * evaluated at the provided time.
     *
     * @alias CompositeProperty
     * @constructor
     *
     *
     * @example
     * var constantProperty = ...;
     * var sampledProperty = ...;
     *
     * //Create a composite property from two previously defined properties
     * //where the property is valid on August 1st, 2012 and uses a constant
     * //property for the first half of the day and a sampled property for the
     * //remaining half.
     * var composite = new Cesium.CompositeProperty();
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T00:00:00.00Z/2012-08-01T12:00:00.00Z',
     *     data : constantProperty
     * }));
     * composite.intervals.addInterval(Cesium.TimeInterval.fromIso8601({
     *     iso8601 : '2012-08-01T12:00:00.00Z/2012-08-02T00:00:00.00Z',
     *     isStartIncluded : false,
     *     isStopIncluded : false,
     *     data : sampledProperty
     * }));
     *
     * @see CompositeMaterialProperty
     * @see CompositePositionProperty
     */
    function CompositeProperty() {
        this._eventHelper = new _Core_EventHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this._intervals = new _Core_TimeIntervalCollection_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._intervals.changedEvent.addEventListener(CompositeProperty.prototype._intervalsChanged, this);
    }

    Object.defineProperties(CompositeProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.  A property is considered
         * constant if getValue always returns the same result for the current definition.
         * @memberof CompositeProperty.prototype
         *
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return this._intervals.isEmpty;
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever setValue is called with data different
         * than the current value.
         * @memberof CompositeProperty.prototype
         *
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the interval collection.
         * @memberof CompositeProperty.prototype
         *
         * @type {TimeIntervalCollection}
         */
        intervals : {
            get : function() {
                return this._intervals;
            }
        }
    });

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    CompositeProperty.prototype.getValue = function(time, result) {
        

        var innerProperty = this._intervals.findDataForIntervalContainingDate(time);
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(innerProperty)) {
            return innerProperty.getValue(time, result);
        }
        return undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    CompositeProperty.prototype.equals = function(other) {
        return this === other || //
               (other instanceof CompositeProperty && //
                this._intervals.equals(other._intervals, _Property_js__WEBPACK_IMPORTED_MODULE_5__["default"].equals));
    };

    /**
     * @private
     */
    CompositeProperty.prototype._intervalsChanged = function() {
        subscribeAll(this, this._eventHelper, this._definitionChanged, this._intervals);
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (CompositeProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ReferenceProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");





    function resolve(that) {
        var targetProperty = that._targetProperty;

        if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetProperty)) {
            var targetEntity = that._targetEntity;

            if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                targetEntity = that._targetCollection.getById(that._targetId);

                if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                    // target entity not found
                    that._targetEntity = that._targetProperty = undefined;
                    return;
                }

                // target entity was found. listen for changes to entity definition
                targetEntity.definitionChanged.addEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, that);
                that._targetEntity = targetEntity;
            }

            // walk the list of property names and resolve properties
            var targetPropertyNames = that._targetPropertyNames;
            targetProperty = that._targetEntity;
            for (var i = 0, len = targetPropertyNames.length; i < len && Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetProperty); ++i) {
                targetProperty = targetProperty[targetPropertyNames[i]];
            }

            // target property may or may not be defined, depending on if it was found
            that._targetProperty = targetProperty;
        }

        return targetProperty;
    }

    /**
     * A {@link Property} which transparently links to another property on a provided object.
     *
     * @alias ReferenceProperty
     * @constructor
     *
     * @param {EntityCollection} targetCollection The entity collection which will be used to resolve the reference.
     * @param {String} targetId The id of the entity which is being referenced.
     * @param {String[]} targetPropertyNames The names of the property on the target entity which we will use.
     *
     * @example
     * var collection = new Cesium.EntityCollection();
     *
     * //Create a new entity and assign a billboard scale.
     * var object1 = new Cesium.Entity({id:'object1'});
     * object1.billboard = new Cesium.BillboardGraphics();
     * object1.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object1);
     *
     * //Create a second entity and reference the scale from the first one.
     * var object2 = new Cesium.Entity({id:'object2'});
     * object2.model = new Cesium.ModelGraphics();
     * object2.model.scale = new Cesium.ReferenceProperty(collection, 'object1', ['billboard', 'scale']);
     * collection.add(object2);
     *
     * //Create a third object, but use the fromString helper function.
     * var object3 = new Cesium.Entity({id:'object3'});
     * object3.billboard = new Cesium.BillboardGraphics();
     * object3.billboard.scale = Cesium.ReferenceProperty.fromString(collection, 'object1#billboard.scale');
     * collection.add(object3);
     *
     * //You can refer to an entity with a # or . in id and property names by escaping them.
     * var object4 = new Cesium.Entity({id:'#object.4'});
     * object4.billboard = new Cesium.BillboardGraphics();
     * object4.billboard.scale = new Cesium.ConstantProperty(2.0);
     * collection.add(object4);
     *
     * var object5 = new Cesium.Entity({id:'object5'});
     * object5.billboard = new Cesium.BillboardGraphics();
     * object5.billboard.scale = Cesium.ReferenceProperty.fromString(collection, '\\#object\\.4#billboard.scale');
     * collection.add(object5);
     */
    function ReferenceProperty(targetCollection, targetId, targetPropertyNames) {
        

        this._targetCollection = targetCollection;
        this._targetId = targetId;
        this._targetPropertyNames = targetPropertyNames;
        this._targetProperty = undefined;
        this._targetEntity = undefined;
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        targetCollection.collectionChanged.addEventListener(ReferenceProperty.prototype._onCollectionChanged, this);
    }

    Object.defineProperties(ReferenceProperty.prototype, {
        /**
         * Gets a value indicating if this property is constant.
         * @memberof ReferenceProperty.prototype
         * @type {Boolean}
         * @readonly
         */
        isConstant : {
            get : function() {
                return _Property_js__WEBPACK_IMPORTED_MODULE_3__["default"].isConstant(resolve(this));
            }
        },
        /**
         * Gets the event that is raised whenever the definition of this property changes.
         * The definition is changed whenever the referenced property's definition is changed.
         * @memberof ReferenceProperty.prototype
         * @type {Event}
         * @readonly
         */
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        /**
         * Gets the reference frame that the position is defined in.
         * This property is only valid if the referenced property is a {@link PositionProperty}.
         * @memberof ReferenceProperty.prototype
         * @type {ReferenceFrame}
         * @readonly
         */
        referenceFrame : {
            get : function() {
                var target = resolve(this);
                return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.referenceFrame : undefined;
            }
        },
        /**
         * Gets the id of the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {String}
         * @readonly
         */
        targetId : {
            get : function() {
                return this._targetId;
            }
        },
        /**
         * Gets the collection containing the entity being referenced.
         * @memberof ReferenceProperty.prototype
         * @type {EntityCollection}
         * @readonly
         */
        targetCollection : {
            get : function() {
                return this._targetCollection;
            }
        },
        /**
         * Gets the array of property names used to retrieve the referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {String[]}
         * @readonly
         */
        targetPropertyNames : {
            get : function() {
                return this._targetPropertyNames;
            }
        },
        /**
         * Gets the resolved instance of the underlying referenced property.
         * @memberof ReferenceProperty.prototype
         * @type {Property}
         * @readonly
         */
        resolvedProperty : {
            get : function() {
                return resolve(this);
            }
        }
    });

    /**
     * Creates a new instance given the entity collection that will
     * be used to resolve it and a string indicating the target entity id and property.
     * The format of the string is "objectId#foo.bar", where # separates the id from
     * property path and . separates sub-properties.  If the reference identifier or
     * or any sub-properties contains a # . or \ they must be escaped.
     *
     * @param {EntityCollection} targetCollection
     * @param {String} referenceString
     * @returns {ReferenceProperty} A new instance of ReferenceProperty.
     *
     * @exception {DeveloperError} invalid referenceString.
     */
    ReferenceProperty.fromString = function(targetCollection, referenceString) {
        

        var identifier;
        var values = [];

        var inIdentifier = true;
        var isEscaped = false;
        var token = '';
        for (var i = 0; i < referenceString.length; ++i) {
            var c = referenceString.charAt(i);

            if (isEscaped) {
                token += c;
                isEscaped = false;
            } else if (c === '\\') {
                isEscaped = true;
            } else if (inIdentifier && c === '#') {
                identifier = token;
                inIdentifier = false;
                token = '';
            } else if (!inIdentifier && c === '.') {
                values.push(token);
                token = '';
            } else {
                token += c;
            }
        }
        values.push(token);

        return new ReferenceProperty(targetCollection, identifier, values);
    };

    /**
     * Gets the value of the property at the provided time.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {Object} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Object} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValue = function(time, result) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getValue(time, result) : undefined;
    };

    /**
     * Gets the value of the property at the provided time and in the provided reference frame.
     * This method is only valid if the property being referenced is a {@link PositionProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the value.
     * @param {ReferenceFrame} referenceFrame The desired referenceFrame of the result.
     * @param {Cartesian3} [result] The object to store the value into, if omitted, a new instance is created and returned.
     * @returns {Cartesian3} The modified result parameter or a new instance if the result parameter was not supplied.
     */
    ReferenceProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getValueInReferenceFrame(time, referenceFrame, result) : undefined;
    };

    /**
     * Gets the {@link Material} type at the provided time.
     * This method is only valid if the property being referenced is a {@link MaterialProperty}.
     *
     * @param {JulianDate} time The time for which to retrieve the type.
     * @returns {String} The type of material.
     */
    ReferenceProperty.prototype.getType = function(time) {
        var target = resolve(this);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) ? target.getType(time) : undefined;
    };

    /**
     * Compares this property to the provided property and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     *
     * @param {Property} [other] The other property.
     * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    ReferenceProperty.prototype.equals = function(other) {
        if (this === other) {
            return true;
        }

        var names = this._targetPropertyNames;
        var otherNames = other._targetPropertyNames;

        if (this._targetCollection !== other._targetCollection || //
            this._targetId !== other._targetId || //
            names.length !== otherNames.length) {
            return false;
        }

        var length = this._targetPropertyNames.length;
        for (var i = 0; i < length; i++) {
            if (names[i] !== otherNames[i]) {
                return false;
            }
        }

        return true;
    };

    ReferenceProperty.prototype._onTargetEntityDefinitionChanged = function(targetEntity, name, value, oldValue) {
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._targetProperty) && this._targetPropertyNames[0] === name) {
            this._targetProperty = undefined;
            this._definitionChanged.raiseEvent(this);
        }
    };

    ReferenceProperty.prototype._onCollectionChanged = function(collection, added, removed) {
        var targetEntity = this._targetEntity;
        if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity) && removed.indexOf(targetEntity) !== -1) {
            targetEntity.definitionChanged.removeEventListener(ReferenceProperty.prototype._onTargetEntityDefinitionChanged, this);
            this._targetEntity = this._targetProperty = undefined;
        } else if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
            targetEntity = resolve(this);
            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEntity)) {
                this._definitionChanged.raiseEvent(this);
            }
        }
    };
/* harmony default export */ __webpack_exports__["default"] = (ReferenceProperty);


/***/ }),

/***/ "./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/terriajs-cesium/Source/DataSources/ScaledPositionProperty.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/defined.js */ "./node_modules/terriajs-cesium/Source/Core/defined.js");
/* harmony import */ var _Core_DeveloperError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/DeveloperError.js */ "./node_modules/terriajs-cesium/Source/Core/DeveloperError.js");
/* harmony import */ var _Core_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/Ellipsoid.js */ "./node_modules/terriajs-cesium/Source/Core/Ellipsoid.js");
/* harmony import */ var _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Event.js */ "./node_modules/terriajs-cesium/Source/Core/Event.js");
/* harmony import */ var _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/ReferenceFrame.js */ "./node_modules/terriajs-cesium/Source/Core/ReferenceFrame.js");
/* harmony import */ var _Property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Property.js */ "./node_modules/terriajs-cesium/Source/DataSources/Property.js");







    /**
     * This is a temporary class for scaling position properties to the WGS84 surface.
     * It will go away or be refactored to support data with arbitrary height references.
     * @private
     */
    function ScaledPositionProperty(value) {
        this._definitionChanged = new _Core_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._value = undefined;
        this._removeSubscription = undefined;
        this.setValue(value);
    }

    Object.defineProperties(ScaledPositionProperty.prototype, {
        isConstant : {
            get : function() {
                return _Property_js__WEBPACK_IMPORTED_MODULE_5__["default"].isConstant(this._value);
            }
        },
        definitionChanged : {
            get : function() {
                return this._definitionChanged;
            }
        },
        referenceFrame : {
            get : function() {
                return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._value) ? this._value.referenceFrame : _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__["default"].FIXED;
            }
        }
    });

    ScaledPositionProperty.prototype.getValue = function(time, result) {
        return this.getValueInReferenceFrame(time, _Core_ReferenceFrame_js__WEBPACK_IMPORTED_MODULE_4__["default"].FIXED, result);
    };

    ScaledPositionProperty.prototype.setValue = function(value) {
        if (this._value !== value) {
            this._value = value;

            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._removeSubscription)) {
                this._removeSubscription();
                this._removeSubscription = undefined;
            }

            if (Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
                this._removeSubscription = value.definitionChanged.addEventListener(this._raiseDefinitionChanged, this);
            }
            this._definitionChanged.raiseEvent(this);
        }
    };

    ScaledPositionProperty.prototype.getValueInReferenceFrame = function(time, referenceFrame, result) {
        

        if (!Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._value)) {
            return undefined;
        }

        result = this._value.getValueInReferenceFrame(time, referenceFrame, result);
        return Object(_Core_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result) ? _Core_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_2__["default"].WGS84.scaleToGeodeticSurface(result, result) : undefined;
    };

    ScaledPositionProperty.prototype.equals = function(other) {
        return this === other || (other instanceof ScaledPositionProperty && this._value === other._value);
    };

    ScaledPositionProperty.prototype._raiseDefinitionChanged = function() {
        this._definitionChanged.raiseEvent(this);
    };
/* harmony default export */ __webpack_exports__["default"] = (ScaledPositionProperty);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc34zRH5DZXNpdW0tRGF0YVNvdXJjZXMuVGVycmlhTWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvQ29yZS9Db3JuZXJUeXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXJyaWFqcy1jZXNpdW0vU291cmNlL0RhdGFTb3VyY2VzL0NvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvQ29tcG9zaXRlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvUmVmZXJlbmNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RlcnJpYWpzLWNlc2l1bS9Tb3VyY2UvRGF0YVNvdXJjZXMvU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAvKipcbiAgICAgKiBTdHlsZSBvcHRpb25zIGZvciBjb3JuZXJzLlxuICAgICAqXG4gICAgICogQGRlbW8gVGhlIHtAbGluayBodHRwczovL3NhbmRjYXN0bGUuY2VzaXVtLmNvbS9pbmRleC5odG1sP3NyYz1Db3JyaWRvci5odG1sJmxhYmVsPUdlb21ldHJpZXN8Q29ycmlkb3IgRGVtb31cbiAgICAgKiBkZW1vbnN0cmF0ZXMgdGhlIHRocmVlIGNvcm5lciB0eXBlcywgYXMgdXNlZCBieSB7QGxpbmsgQ29ycmlkb3JHcmFwaGljc30uXG4gICAgICpcbiAgICAgKiBAZXhwb3J0cyBDb3JuZXJUeXBlXG4gICAgICovXG4gICAgdmFyIENvcm5lclR5cGUgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiA8aW1nIHNyYz1cIkltYWdlcy9Db3JuZXJUeXBlUm91bmRlZC5wbmdcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIgd2lkdGg9XCIxODZcIiBoZWlnaHQ9XCIxODlcIiAvPlxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JuZXIgaGFzIGEgc21vb3RoIGVkZ2UuXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKi9cbiAgICAgICAgUk9VTkRFRCA6IDAsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIDxpbWcgc3JjPVwiSW1hZ2VzL0Nvcm5lclR5cGVNaXRlcmVkLnBuZ1wiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTtcIiB3aWR0aD1cIjE4NlwiIGhlaWdodD1cIjE4OVwiIC8+XG4gICAgICAgICAqXG4gICAgICAgICAqIENvcm5lciBwb2ludCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mIGFkamFjZW50IGVkZ2VzLlxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAgICAgKiBAY29uc3RhbnRcbiAgICAgICAgICovXG4gICAgICAgIE1JVEVSRUQgOiAxLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiA8aW1nIHNyYz1cIkltYWdlcy9Db3JuZXJUeXBlQmV2ZWxlZC5wbmdcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIgd2lkdGg9XCIxODZcIiBoZWlnaHQ9XCIxODlcIiAvPlxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JuZXIgaXMgY2xpcHBlZC5cbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICogQGNvbnN0YW50XG4gICAgICAgICAqL1xuICAgICAgICBCRVZFTEVEIDogMlxuICAgIH07XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuZnJlZXplKENvcm5lclR5cGUpO1xuIiwiaW1wb3J0IGRlZmF1bHRWYWx1ZSBmcm9tICcuLi9Db3JlL2RlZmF1bHRWYWx1ZS5qcyc7XG5pbXBvcnQgZGVmaW5lZCBmcm9tICcuLi9Db3JlL2RlZmluZWQuanMnO1xuaW1wb3J0IERldmVsb3BlckVycm9yIGZyb20gJy4uL0NvcmUvRGV2ZWxvcGVyRXJyb3IuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL0NvcmUvRXZlbnQuanMnO1xuaW1wb3J0IFJlZmVyZW5jZUZyYW1lIGZyb20gJy4uL0NvcmUvUmVmZXJlbmNlRnJhbWUuanMnO1xuaW1wb3J0IENvbXBvc2l0ZVByb3BlcnR5IGZyb20gJy4vQ29tcG9zaXRlUHJvcGVydHkuanMnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJy4vUHJvcGVydHkuanMnO1xuXG4gICAgLyoqXG4gICAgICogQSB7QGxpbmsgQ29tcG9zaXRlUHJvcGVydHl9IHdoaWNoIGlzIGFsc28gYSB7QGxpbmsgUG9zaXRpb25Qcm9wZXJ0eX0uXG4gICAgICpcbiAgICAgKiBAYWxpYXMgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWZlcmVuY2VGcmFtZX0gW3JlZmVyZW5jZUZyYW1lPVJlZmVyZW5jZUZyYW1lLkZJWEVEXSBUaGUgcmVmZXJlbmNlIGZyYW1lIGluIHdoaWNoIHRoZSBwb3NpdGlvbiBpcyBkZWZpbmVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkocmVmZXJlbmNlRnJhbWUpIHtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlRnJhbWUgPSBkZWZhdWx0VmFsdWUocmVmZXJlbmNlRnJhbWUsIFJlZmVyZW5jZUZyYW1lLkZJWEVEKTtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnQoKTtcbiAgICAgICAgdGhpcy5fY29tcG9zaXRlID0gbmV3IENvbXBvc2l0ZVByb3BlcnR5KCk7XG4gICAgICAgIHRoaXMuX2NvbXBvc2l0ZS5kZWZpbml0aW9uQ2hhbmdlZC5hZGRFdmVudExpc3RlbmVyKENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLl9yYWlzZURlZmluaXRpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZSwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgaWYgdGhpcyBwcm9wZXJ0eSBpcyBjb25zdGFudC4gIEEgcHJvcGVydHkgaXMgY29uc2lkZXJlZFxuICAgICAgICAgKiBjb25zdGFudCBpZiBnZXRWYWx1ZSBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSByZXN1bHQgZm9yIHRoZSBjdXJyZW50IGRlZmluaXRpb24uXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0YW50IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvc2l0ZS5pc0NvbnN0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgZXZlbnQgdGhhdCBpcyByYWlzZWQgd2hlbmV2ZXIgdGhlIGRlZmluaXRpb24gb2YgdGhpcyBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAgICAgKiBUaGUgZGVmaW5pdGlvbiBpcyBjaGFuZ2VkIHdoZW5ldmVyIHNldFZhbHVlIGlzIGNhbGxlZCB3aXRoIGRhdGEgZGlmZmVyZW50XG4gICAgICAgICAqIHRoYW4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBpbnRlcnZhbCBjb2xsZWN0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1RpbWVJbnRlcnZhbENvbGxlY3Rpb259XG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnZhbHMgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9zaXRlLmludGVydmFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgb3Igc2V0cyB0aGUgcmVmZXJlbmNlIGZyYW1lIHdoaWNoIHRoaXMgcG9zaXRpb24gcHJlc2VudHMgaXRzZWxmIGFzLlxuICAgICAgICAgKiBFYWNoIFBvc2l0aW9uUHJvcGVydHkgbWFraW5nIHVwIHRoaXMgb2JqZWN0IGhhcyBpdCdzIG93biByZWZlcmVuY2UgZnJhbWUsXG4gICAgICAgICAqIHNvIHRoaXMgcHJvcGVydHkgbWVyZWx5IGV4cG9zZXMgYSBcInByZWZlcnJlZFwiIHJlZmVyZW5jZSBmcmFtZSBmb3IgY2xpZW50c1xuICAgICAgICAgKiB0byB1c2UuXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7UmVmZXJlbmNlRnJhbWV9XG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VGcmFtZSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWZlcmVuY2VGcmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZSBpbiB0aGUgZml4ZWQgZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0p1bGlhbkRhdGV9IHRpbWUgVGhlIHRpbWUgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3VsdF0gVGhlIG9iamVjdCB0byBzdG9yZSB0aGUgdmFsdWUgaW50bywgaWYgb21pdHRlZCwgYSBuZXcgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgUmVmZXJlbmNlRnJhbWUuRklYRUQsIHJlc3VsdCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZSBhbmQgaW4gdGhlIHByb3ZpZGVkIHJlZmVyZW5jZSBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7UmVmZXJlbmNlRnJhbWV9IHJlZmVyZW5jZUZyYW1lIFRoZSBkZXNpcmVkIHJlZmVyZW5jZUZyYW1lIG9mIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtDYXJ0ZXNpYW4zfSBbcmVzdWx0XSBUaGUgb2JqZWN0IHRvIHN0b3JlIHRoZSB2YWx1ZSBpbnRvLCBpZiBvbWl0dGVkLCBhIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJucyB7Q2FydGVzaWFuM30gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBDb21wb3NpdGVQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUgPSBmdW5jdGlvbih0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KSB7XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBpbm5lclByb3BlcnR5ID0gdGhpcy5fY29tcG9zaXRlLl9pbnRlcnZhbHMuZmluZERhdGFGb3JJbnRlcnZhbENvbnRhaW5pbmdEYXRlKHRpbWUpO1xuICAgICAgICBpZiAoZGVmaW5lZChpbm5lclByb3BlcnR5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGlubmVyUHJvcGVydHkuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lKHRpbWUsIHJlZmVyZW5jZUZyYW1lLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbXBhcmVzIHRoaXMgcHJvcGVydHkgdG8gdGhlIHByb3ZpZGVkIHByb3BlcnR5IGFuZCByZXR1cm5zXG4gICAgICogPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhleSBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Byb3BlcnR5fSBbb3RoZXJdIFRoZSBvdGhlciBwcm9wZXJ0eS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgbGVmdCBhbmQgcmlnaHQgYXJlIGVxdWFsLCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBvdGhlciB8fCAvL1xuICAgICAgICAgICAgICAgKG90aGVyIGluc3RhbmNlb2YgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eSAmJiAvL1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUZyYW1lID09PSBvdGhlci5fcmVmZXJlbmNlRnJhbWUgJiYgLy9cbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb3NpdGUuZXF1YWxzKG90aGVyLl9jb21wb3NpdGUsIFByb3BlcnR5LmVxdWFscykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLl9yYWlzZURlZmluaXRpb25DaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLnJhaXNlRXZlbnQodGhpcyk7XG4gICAgfTtcbmV4cG9ydCBkZWZhdWx0IENvbXBvc2l0ZVBvc2l0aW9uUHJvcGVydHk7XG4iLCJpbXBvcnQgZGVmaW5lZCBmcm9tICcuLi9Db3JlL2RlZmluZWQuanMnO1xuaW1wb3J0IERldmVsb3BlckVycm9yIGZyb20gJy4uL0NvcmUvRGV2ZWxvcGVyRXJyb3IuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL0NvcmUvRXZlbnQuanMnO1xuaW1wb3J0IEV2ZW50SGVscGVyIGZyb20gJy4uL0NvcmUvRXZlbnRIZWxwZXIuanMnO1xuaW1wb3J0IFRpbWVJbnRlcnZhbENvbGxlY3Rpb24gZnJvbSAnLi4vQ29yZS9UaW1lSW50ZXJ2YWxDb2xsZWN0aW9uLmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuL1Byb3BlcnR5LmpzJztcblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZUFsbChwcm9wZXJ0eSwgZXZlbnRIZWxwZXIsIGRlZmluaXRpb25DaGFuZ2VkLCBpbnRlcnZhbHMpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uQ2hhbmdlZC5yYWlzZUV2ZW50KHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZXZlbnRIZWxwZXIucmVtb3ZlQWxsKCk7XG4gICAgICAgIHZhciBsZW5ndGggPSBpbnRlcnZhbHMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBpbnRlcnZhbHMuZ2V0KGkpO1xuICAgICAgICAgICAgaWYgKGRlZmluZWQoaW50ZXJ2YWwuZGF0YSkgJiYgaXRlbXMuaW5kZXhPZihpbnRlcnZhbC5kYXRhKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBldmVudEhlbHBlci5hZGQoaW50ZXJ2YWwuZGF0YS5kZWZpbml0aW9uQ2hhbmdlZCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB7QGxpbmsgUHJvcGVydHl9IHdoaWNoIGlzIGRlZmluZWQgYnkgYSB7QGxpbmsgVGltZUludGVydmFsQ29sbGVjdGlvbn0sIHdoZXJlIHRoZVxuICAgICAqIGRhdGEgcHJvcGVydHkgb2YgZWFjaCB7QGxpbmsgVGltZUludGVydmFsfSBpcyBhbm90aGVyIFByb3BlcnR5IGluc3RhbmNlIHdoaWNoIGlzXG4gICAgICogZXZhbHVhdGVkIGF0IHRoZSBwcm92aWRlZCB0aW1lLlxuICAgICAqXG4gICAgICogQGFsaWFzIENvbXBvc2l0ZVByb3BlcnR5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIGNvbnN0YW50UHJvcGVydHkgPSAuLi47XG4gICAgICogdmFyIHNhbXBsZWRQcm9wZXJ0eSA9IC4uLjtcbiAgICAgKlxuICAgICAqIC8vQ3JlYXRlIGEgY29tcG9zaXRlIHByb3BlcnR5IGZyb20gdHdvIHByZXZpb3VzbHkgZGVmaW5lZCBwcm9wZXJ0aWVzXG4gICAgICogLy93aGVyZSB0aGUgcHJvcGVydHkgaXMgdmFsaWQgb24gQXVndXN0IDFzdCwgMjAxMiBhbmQgdXNlcyBhIGNvbnN0YW50XG4gICAgICogLy9wcm9wZXJ0eSBmb3IgdGhlIGZpcnN0IGhhbGYgb2YgdGhlIGRheSBhbmQgYSBzYW1wbGVkIHByb3BlcnR5IGZvciB0aGVcbiAgICAgKiAvL3JlbWFpbmluZyBoYWxmLlxuICAgICAqIHZhciBjb21wb3NpdGUgPSBuZXcgQ2VzaXVtLkNvbXBvc2l0ZVByb3BlcnR5KCk7XG4gICAgICogY29tcG9zaXRlLmludGVydmFscy5hZGRJbnRlcnZhbChDZXNpdW0uVGltZUludGVydmFsLmZyb21Jc284NjAxKHtcbiAgICAgKiAgICAgaXNvODYwMSA6ICcyMDEyLTA4LTAxVDAwOjAwOjAwLjAwWi8yMDEyLTA4LTAxVDEyOjAwOjAwLjAwWicsXG4gICAgICogICAgIGRhdGEgOiBjb25zdGFudFByb3BlcnR5XG4gICAgICogfSkpO1xuICAgICAqIGNvbXBvc2l0ZS5pbnRlcnZhbHMuYWRkSW50ZXJ2YWwoQ2VzaXVtLlRpbWVJbnRlcnZhbC5mcm9tSXNvODYwMSh7XG4gICAgICogICAgIGlzbzg2MDEgOiAnMjAxMi0wOC0wMVQxMjowMDowMC4wMFovMjAxMi0wOC0wMlQwMDowMDowMC4wMFonLFxuICAgICAqICAgICBpc1N0YXJ0SW5jbHVkZWQgOiBmYWxzZSxcbiAgICAgKiAgICAgaXNTdG9wSW5jbHVkZWQgOiBmYWxzZSxcbiAgICAgKiAgICAgZGF0YSA6IHNhbXBsZWRQcm9wZXJ0eVxuICAgICAqIH0pKTtcbiAgICAgKlxuICAgICAqIEBzZWUgQ29tcG9zaXRlTWF0ZXJpYWxQcm9wZXJ0eVxuICAgICAqIEBzZWUgQ29tcG9zaXRlUG9zaXRpb25Qcm9wZXJ0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXBvc2l0ZVByb3BlcnR5KCkge1xuICAgICAgICB0aGlzLl9ldmVudEhlbHBlciA9IG5ldyBFdmVudEhlbHBlcigpO1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudCgpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbHMgPSBuZXcgVGltZUludGVydmFsQ29sbGVjdGlvbigpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbHMuY2hhbmdlZEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLl9pbnRlcnZhbHNDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb21wb3NpdGVQcm9wZXJ0eS5wcm90b3R5cGUsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIGlmIHRoaXMgcHJvcGVydHkgaXMgY29uc3RhbnQuICBBIHByb3BlcnR5IGlzIGNvbnNpZGVyZWRcbiAgICAgICAgICogY29uc3RhbnQgaWYgZ2V0VmFsdWUgYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgcmVzdWx0IGZvciB0aGUgY3VycmVudCBkZWZpbml0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RhbnQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWxzLmlzRW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBldmVudCB0aGF0IGlzIHJhaXNlZCB3aGVuZXZlciB0aGUgZGVmaW5pdGlvbiBvZiB0aGlzIHByb3BlcnR5IGNoYW5nZXMuXG4gICAgICAgICAqIFRoZSBkZWZpbml0aW9uIGlzIGNoYW5nZWQgd2hlbmV2ZXIgc2V0VmFsdWUgaXMgY2FsbGVkIHdpdGggZGF0YSBkaWZmZXJlbnRcbiAgICAgICAgICogdGhhbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICogQG1lbWJlcm9mIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7RXZlbnR9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgZGVmaW5pdGlvbkNoYW5nZWQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBpbnRlcnZhbCBjb2xsZWN0aW9uLlxuICAgICAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtUaW1lSW50ZXJ2YWxDb2xsZWN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJ2YWxzIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVydmFscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGF0IHRoZSBwcm92aWRlZCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtyZXN1bHRdIFRoZSBvYmplY3QgdG8gc3RvcmUgdGhlIHZhbHVlIGludG8sIGlmIG9taXR0ZWQsIGEgbmV3IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJldHVybmVkLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtb2RpZmllZCByZXN1bHQgcGFyYW1ldGVyIG9yIGEgbmV3IGluc3RhbmNlIGlmIHRoZSByZXN1bHQgcGFyYW1ldGVyIHdhcyBub3Qgc3VwcGxpZWQuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24odGltZSwgcmVzdWx0KSB7XG4gICAgICAgIFxuXG4gICAgICAgIHZhciBpbm5lclByb3BlcnR5ID0gdGhpcy5faW50ZXJ2YWxzLmZpbmREYXRhRm9ySW50ZXJ2YWxDb250YWluaW5nRGF0ZSh0aW1lKTtcbiAgICAgICAgaWYgKGRlZmluZWQoaW5uZXJQcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbm5lclByb3BlcnR5LmdldFZhbHVlKHRpbWUsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZXMgdGhpcyBwcm9wZXJ0eSB0byB0aGUgcHJvdmlkZWQgcHJvcGVydHkgYW5kIHJldHVybnNcbiAgICAgKiA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGV5IGFyZSBlcXVhbCwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvcGVydHl9IFtvdGhlcl0gVGhlIG90aGVyIHByb3BlcnR5LlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBsZWZ0IGFuZCByaWdodCBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgQ29tcG9zaXRlUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBvdGhlciB8fCAvL1xuICAgICAgICAgICAgICAgKG90aGVyIGluc3RhbmNlb2YgQ29tcG9zaXRlUHJvcGVydHkgJiYgLy9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcnZhbHMuZXF1YWxzKG90aGVyLl9pbnRlcnZhbHMsIFByb3BlcnR5LmVxdWFscykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIENvbXBvc2l0ZVByb3BlcnR5LnByb3RvdHlwZS5faW50ZXJ2YWxzQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJzY3JpYmVBbGwodGhpcywgdGhpcy5fZXZlbnRIZWxwZXIsIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkLCB0aGlzLl9pbnRlcnZhbHMpO1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZC5yYWlzZUV2ZW50KHRoaXMpO1xuICAgIH07XG5leHBvcnQgZGVmYXVsdCBDb21wb3NpdGVQcm9wZXJ0eTtcbiIsImltcG9ydCBkZWZpbmVkIGZyb20gJy4uL0NvcmUvZGVmaW5lZC5qcyc7XG5pbXBvcnQgRGV2ZWxvcGVyRXJyb3IgZnJvbSAnLi4vQ29yZS9EZXZlbG9wZXJFcnJvci5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vQ29yZS9FdmVudC5qcyc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAnLi9Qcm9wZXJ0eS5qcyc7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlKHRoYXQpIHtcbiAgICAgICAgdmFyIHRhcmdldFByb3BlcnR5ID0gdGhhdC5fdGFyZ2V0UHJvcGVydHk7XG5cbiAgICAgICAgaWYgKCFkZWZpbmVkKHRhcmdldFByb3BlcnR5KSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEVudGl0eSA9IHRoYXQuX3RhcmdldEVudGl0eTtcblxuICAgICAgICAgICAgaWYgKCFkZWZpbmVkKHRhcmdldEVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRFbnRpdHkgPSB0aGF0Ll90YXJnZXRDb2xsZWN0aW9uLmdldEJ5SWQodGhhdC5fdGFyZ2V0SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWZpbmVkKHRhcmdldEVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFyZ2V0IGVudGl0eSBub3QgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fdGFyZ2V0RW50aXR5ID0gdGhhdC5fdGFyZ2V0UHJvcGVydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0YXJnZXQgZW50aXR5IHdhcyBmb3VuZC4gbGlzdGVuIGZvciBjaGFuZ2VzIHRvIGVudGl0eSBkZWZpbml0aW9uXG4gICAgICAgICAgICAgICAgdGFyZ2V0RW50aXR5LmRlZmluaXRpb25DaGFuZ2VkLmFkZEV2ZW50TGlzdGVuZXIoUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vblRhcmdldEVudGl0eURlZmluaXRpb25DaGFuZ2VkLCB0aGF0KTtcbiAgICAgICAgICAgICAgICB0aGF0Ll90YXJnZXRFbnRpdHkgPSB0YXJnZXRFbnRpdHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhbGsgdGhlIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHJlc29sdmUgcHJvcGVydGllc1xuICAgICAgICAgICAgdmFyIHRhcmdldFByb3BlcnR5TmFtZXMgPSB0aGF0Ll90YXJnZXRQcm9wZXJ0eU5hbWVzO1xuICAgICAgICAgICAgdGFyZ2V0UHJvcGVydHkgPSB0aGF0Ll90YXJnZXRFbnRpdHk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGFyZ2V0UHJvcGVydHlOYW1lcy5sZW5ndGg7IGkgPCBsZW4gJiYgZGVmaW5lZCh0YXJnZXRQcm9wZXJ0eSk7ICsraSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0UHJvcGVydHlbdGFyZ2V0UHJvcGVydHlOYW1lc1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRhcmdldCBwcm9wZXJ0eSBtYXkgb3IgbWF5IG5vdCBiZSBkZWZpbmVkLCBkZXBlbmRpbmcgb24gaWYgaXQgd2FzIGZvdW5kXG4gICAgICAgICAgICB0aGF0Ll90YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFByb3BlcnR5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFByb3BlcnR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEge0BsaW5rIFByb3BlcnR5fSB3aGljaCB0cmFuc3BhcmVudGx5IGxpbmtzIHRvIGFub3RoZXIgcHJvcGVydHkgb24gYSBwcm92aWRlZCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAYWxpYXMgUmVmZXJlbmNlUHJvcGVydHlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW50aXR5Q29sbGVjdGlvbn0gdGFyZ2V0Q29sbGVjdGlvbiBUaGUgZW50aXR5IGNvbGxlY3Rpb24gd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlc29sdmUgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0SWQgVGhlIGlkIG9mIHRoZSBlbnRpdHkgd2hpY2ggaXMgYmVpbmcgcmVmZXJlbmNlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSB0YXJnZXRQcm9wZXJ0eU5hbWVzIFRoZSBuYW1lcyBvZiB0aGUgcHJvcGVydHkgb24gdGhlIHRhcmdldCBlbnRpdHkgd2hpY2ggd2Ugd2lsbCB1c2UuXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBjb2xsZWN0aW9uID0gbmV3IENlc2l1bS5FbnRpdHlDb2xsZWN0aW9uKCk7XG4gICAgICpcbiAgICAgKiAvL0NyZWF0ZSBhIG5ldyBlbnRpdHkgYW5kIGFzc2lnbiBhIGJpbGxib2FyZCBzY2FsZS5cbiAgICAgKiB2YXIgb2JqZWN0MSA9IG5ldyBDZXNpdW0uRW50aXR5KHtpZDonb2JqZWN0MSd9KTtcbiAgICAgKiBvYmplY3QxLmJpbGxib2FyZCA9IG5ldyBDZXNpdW0uQmlsbGJvYXJkR3JhcGhpY3MoKTtcbiAgICAgKiBvYmplY3QxLmJpbGxib2FyZC5zY2FsZSA9IG5ldyBDZXNpdW0uQ29uc3RhbnRQcm9wZXJ0eSgyLjApO1xuICAgICAqIGNvbGxlY3Rpb24uYWRkKG9iamVjdDEpO1xuICAgICAqXG4gICAgICogLy9DcmVhdGUgYSBzZWNvbmQgZW50aXR5IGFuZCByZWZlcmVuY2UgdGhlIHNjYWxlIGZyb20gdGhlIGZpcnN0IG9uZS5cbiAgICAgKiB2YXIgb2JqZWN0MiA9IG5ldyBDZXNpdW0uRW50aXR5KHtpZDonb2JqZWN0Mid9KTtcbiAgICAgKiBvYmplY3QyLm1vZGVsID0gbmV3IENlc2l1bS5Nb2RlbEdyYXBoaWNzKCk7XG4gICAgICogb2JqZWN0Mi5tb2RlbC5zY2FsZSA9IG5ldyBDZXNpdW0uUmVmZXJlbmNlUHJvcGVydHkoY29sbGVjdGlvbiwgJ29iamVjdDEnLCBbJ2JpbGxib2FyZCcsICdzY2FsZSddKTtcbiAgICAgKiBjb2xsZWN0aW9uLmFkZChvYmplY3QyKTtcbiAgICAgKlxuICAgICAqIC8vQ3JlYXRlIGEgdGhpcmQgb2JqZWN0LCBidXQgdXNlIHRoZSBmcm9tU3RyaW5nIGhlbHBlciBmdW5jdGlvbi5cbiAgICAgKiB2YXIgb2JqZWN0MyA9IG5ldyBDZXNpdW0uRW50aXR5KHtpZDonb2JqZWN0Myd9KTtcbiAgICAgKiBvYmplY3QzLmJpbGxib2FyZCA9IG5ldyBDZXNpdW0uQmlsbGJvYXJkR3JhcGhpY3MoKTtcbiAgICAgKiBvYmplY3QzLmJpbGxib2FyZC5zY2FsZSA9IENlc2l1bS5SZWZlcmVuY2VQcm9wZXJ0eS5mcm9tU3RyaW5nKGNvbGxlY3Rpb24sICdvYmplY3QxI2JpbGxib2FyZC5zY2FsZScpO1xuICAgICAqIGNvbGxlY3Rpb24uYWRkKG9iamVjdDMpO1xuICAgICAqXG4gICAgICogLy9Zb3UgY2FuIHJlZmVyIHRvIGFuIGVudGl0eSB3aXRoIGEgIyBvciAuIGluIGlkIGFuZCBwcm9wZXJ0eSBuYW1lcyBieSBlc2NhcGluZyB0aGVtLlxuICAgICAqIHZhciBvYmplY3Q0ID0gbmV3IENlc2l1bS5FbnRpdHkoe2lkOicjb2JqZWN0LjQnfSk7XG4gICAgICogb2JqZWN0NC5iaWxsYm9hcmQgPSBuZXcgQ2VzaXVtLkJpbGxib2FyZEdyYXBoaWNzKCk7XG4gICAgICogb2JqZWN0NC5iaWxsYm9hcmQuc2NhbGUgPSBuZXcgQ2VzaXVtLkNvbnN0YW50UHJvcGVydHkoMi4wKTtcbiAgICAgKiBjb2xsZWN0aW9uLmFkZChvYmplY3Q0KTtcbiAgICAgKlxuICAgICAqIHZhciBvYmplY3Q1ID0gbmV3IENlc2l1bS5FbnRpdHkoe2lkOidvYmplY3Q1J30pO1xuICAgICAqIG9iamVjdDUuYmlsbGJvYXJkID0gbmV3IENlc2l1bS5CaWxsYm9hcmRHcmFwaGljcygpO1xuICAgICAqIG9iamVjdDUuYmlsbGJvYXJkLnNjYWxlID0gQ2VzaXVtLlJlZmVyZW5jZVByb3BlcnR5LmZyb21TdHJpbmcoY29sbGVjdGlvbiwgJ1xcXFwjb2JqZWN0XFxcXC40I2JpbGxib2FyZC5zY2FsZScpO1xuICAgICAqIGNvbGxlY3Rpb24uYWRkKG9iamVjdDUpO1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlZmVyZW5jZVByb3BlcnR5KHRhcmdldENvbGxlY3Rpb24sIHRhcmdldElkLCB0YXJnZXRQcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuX3RhcmdldENvbGxlY3Rpb24gPSB0YXJnZXRDb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLl90YXJnZXRJZCA9IHRhcmdldElkO1xuICAgICAgICB0aGlzLl90YXJnZXRQcm9wZXJ0eU5hbWVzID0gdGFyZ2V0UHJvcGVydHlOYW1lcztcbiAgICAgICAgdGhpcy5fdGFyZ2V0UHJvcGVydHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3RhcmdldEVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnQoKTtcblxuICAgICAgICB0YXJnZXRDb2xsZWN0aW9uLmNvbGxlY3Rpb25DaGFuZ2VkLmFkZEV2ZW50TGlzdGVuZXIoUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vbkNvbGxlY3Rpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIGlmIHRoaXMgcHJvcGVydHkgaXMgY29uc3RhbnQuXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdGFudCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eS5pc0NvbnN0YW50KHJlc29sdmUodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgZXZlbnQgdGhhdCBpcyByYWlzZWQgd2hlbmV2ZXIgdGhlIGRlZmluaXRpb24gb2YgdGhpcyBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgICAgICAgKiBUaGUgZGVmaW5pdGlvbiBpcyBjaGFuZ2VkIHdoZW5ldmVyIHRoZSByZWZlcmVuY2VkIHByb3BlcnR5J3MgZGVmaW5pdGlvbiBpcyBjaGFuZ2VkLlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtFdmVudH1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBkZWZpbml0aW9uQ2hhbmdlZCA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIHJlZmVyZW5jZSBmcmFtZSB0aGF0IHRoZSBwb3NpdGlvbiBpcyBkZWZpbmVkIGluLlxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgdmFsaWQgaWYgdGhlIHJlZmVyZW5jZWQgcHJvcGVydHkgaXMgYSB7QGxpbmsgUG9zaXRpb25Qcm9wZXJ0eX0uXG4gICAgICAgICAqIEBtZW1iZXJvZiBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGVcbiAgICAgICAgICogQHR5cGUge1JlZmVyZW5jZUZyYW1lfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHJlZmVyZW5jZUZyYW1lIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmluZWQodGFyZ2V0KSA/IHRhcmdldC5yZWZlcmVuY2VGcmFtZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGlkIG9mIHRoZSBlbnRpdHkgYmVpbmcgcmVmZXJlbmNlZC5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldElkIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgY29sbGVjdGlvbiBjb250YWluaW5nIHRoZSBlbnRpdHkgYmVpbmcgcmVmZXJlbmNlZC5cbiAgICAgICAgICogQG1lbWJlcm9mIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZVxuICAgICAgICAgKiBAdHlwZSB7RW50aXR5Q29sbGVjdGlvbn1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXRDb2xsZWN0aW9uIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldENvbGxlY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyB1c2VkIHRvIHJldHJpZXZlIHRoZSByZWZlcmVuY2VkIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmdbXX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXRQcm9wZXJ0eU5hbWVzIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldFByb3BlcnR5TmFtZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSByZXNvbHZlZCBpbnN0YW5jZSBvZiB0aGUgdW5kZXJseWluZyByZWZlcmVuY2VkIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyb2YgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlXG4gICAgICAgICAqIEB0eXBlIHtQcm9wZXJ0eX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICByZXNvbHZlZFByb3BlcnR5IDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgZ2l2ZW4gdGhlIGVudGl0eSBjb2xsZWN0aW9uIHRoYXQgd2lsbFxuICAgICAqIGJlIHVzZWQgdG8gcmVzb2x2ZSBpdCBhbmQgYSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgdGFyZ2V0IGVudGl0eSBpZCBhbmQgcHJvcGVydHkuXG4gICAgICogVGhlIGZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIFwib2JqZWN0SWQjZm9vLmJhclwiLCB3aGVyZSAjIHNlcGFyYXRlcyB0aGUgaWQgZnJvbVxuICAgICAqIHByb3BlcnR5IHBhdGggYW5kIC4gc2VwYXJhdGVzIHN1Yi1wcm9wZXJ0aWVzLiAgSWYgdGhlIHJlZmVyZW5jZSBpZGVudGlmaWVyIG9yXG4gICAgICogb3IgYW55IHN1Yi1wcm9wZXJ0aWVzIGNvbnRhaW5zIGEgIyAuIG9yIFxcIHRoZXkgbXVzdCBiZSBlc2NhcGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbnRpdHlDb2xsZWN0aW9ufSB0YXJnZXRDb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJlZmVyZW5jZVN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtSZWZlcmVuY2VQcm9wZXJ0eX0gQSBuZXcgaW5zdGFuY2Ugb2YgUmVmZXJlbmNlUHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAZXhjZXB0aW9uIHtEZXZlbG9wZXJFcnJvcn0gaW52YWxpZCByZWZlcmVuY2VTdHJpbmcuXG4gICAgICovXG4gICAgUmVmZXJlbmNlUHJvcGVydHkuZnJvbVN0cmluZyA9IGZ1bmN0aW9uKHRhcmdldENvbGxlY3Rpb24sIHJlZmVyZW5jZVN0cmluZykge1xuICAgICAgICBcblxuICAgICAgICB2YXIgaWRlbnRpZmllcjtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gICAgICAgIHZhciBpbklkZW50aWZpZXIgPSB0cnVlO1xuICAgICAgICB2YXIgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0b2tlbiA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZmVyZW5jZVN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGMgPSByZWZlcmVuY2VTdHJpbmcuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICBpZiAoaXNFc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4gKz0gYztcbiAgICAgICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5JZGVudGlmaWVyICYmIGMgPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBpbklkZW50aWZpZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaW5JZGVudGlmaWVyICYmIGMgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlbiArPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZVByb3BlcnR5KHRhcmdldENvbGxlY3Rpb24sIGlkZW50aWZpZXIsIHZhbHVlcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBhdCB0aGUgcHJvdmlkZWQgdGltZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzdWx0XSBUaGUgb2JqZWN0IHRvIHN0b3JlIHRoZSB2YWx1ZSBpbnRvLCBpZiBvbWl0dGVkLCBhIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbW9kaWZpZWQgcmVzdWx0IHBhcmFtZXRlciBvciBhIG5ldyBpbnN0YW5jZSBpZiB0aGUgcmVzdWx0IHBhcmFtZXRlciB3YXMgbm90IHN1cHBsaWVkLlxuICAgICAqL1xuICAgIFJlZmVyZW5jZVByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKHRpbWUsIHJlc3VsdCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGFyZ2V0KSA/IHRhcmdldC5nZXRWYWx1ZSh0aW1lLCByZXN1bHQpIDogdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgYXQgdGhlIHByb3ZpZGVkIHRpbWUgYW5kIGluIHRoZSBwcm92aWRlZCByZWZlcmVuY2UgZnJhbWUuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb25seSB2YWxpZCBpZiB0aGUgcHJvcGVydHkgYmVpbmcgcmVmZXJlbmNlZCBpcyBhIHtAbGluayBQb3NpdGlvblByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SnVsaWFuRGF0ZX0gdGltZSBUaGUgdGltZSBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7UmVmZXJlbmNlRnJhbWV9IHJlZmVyZW5jZUZyYW1lIFRoZSBkZXNpcmVkIHJlZmVyZW5jZUZyYW1lIG9mIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtDYXJ0ZXNpYW4zfSBbcmVzdWx0XSBUaGUgb2JqZWN0IHRvIHN0b3JlIHRoZSB2YWx1ZSBpbnRvLCBpZiBvbWl0dGVkLCBhIG5ldyBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZXR1cm5lZC5cbiAgICAgKiBAcmV0dXJucyB7Q2FydGVzaWFuM30gVGhlIG1vZGlmaWVkIHJlc3VsdCBwYXJhbWV0ZXIgb3IgYSBuZXcgaW5zdGFuY2UgaWYgdGhlIHJlc3VsdCBwYXJhbWV0ZXIgd2FzIG5vdCBzdXBwbGllZC5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWVJblJlZmVyZW5jZUZyYW1lID0gZnVuY3Rpb24odGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGFyZ2V0KSA/IHRhcmdldC5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCkgOiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHtAbGluayBNYXRlcmlhbH0gdHlwZSBhdCB0aGUgcHJvdmlkZWQgdGltZS5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvbmx5IHZhbGlkIGlmIHRoZSBwcm9wZXJ0eSBiZWluZyByZWZlcmVuY2VkIGlzIGEge0BsaW5rIE1hdGVyaWFsUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtKdWxpYW5EYXRlfSB0aW1lIFRoZSB0aW1lIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgdHlwZS5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgdHlwZSBvZiBtYXRlcmlhbC5cbiAgICAgKi9cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRhcmdldCkgPyB0YXJnZXQuZ2V0VHlwZSh0aW1lKSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29tcGFyZXMgdGhpcyBwcm9wZXJ0eSB0byB0aGUgcHJvdmlkZWQgcHJvcGVydHkgYW5kIHJldHVybnNcbiAgICAgKiA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGV5IGFyZSBlcXVhbCwgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UHJvcGVydHl9IFtvdGhlcl0gVGhlIG90aGVyIHByb3BlcnR5LlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBsZWZ0IGFuZCByaWdodCBhcmUgZXF1YWwsIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG4gICAgICovXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIGlmICh0aGlzID09PSBvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmFtZXMgPSB0aGlzLl90YXJnZXRQcm9wZXJ0eU5hbWVzO1xuICAgICAgICB2YXIgb3RoZXJOYW1lcyA9IG90aGVyLl90YXJnZXRQcm9wZXJ0eU5hbWVzO1xuXG4gICAgICAgIGlmICh0aGlzLl90YXJnZXRDb2xsZWN0aW9uICE9PSBvdGhlci5fdGFyZ2V0Q29sbGVjdGlvbiB8fCAvL1xuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0SWQgIT09IG90aGVyLl90YXJnZXRJZCB8fCAvL1xuICAgICAgICAgICAgbmFtZXMubGVuZ3RoICE9PSBvdGhlck5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuX3RhcmdldFByb3BlcnR5TmFtZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmFtZXNbaV0gIT09IG90aGVyTmFtZXNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vblRhcmdldEVudGl0eURlZmluaXRpb25DaGFuZ2VkID0gZnVuY3Rpb24odGFyZ2V0RW50aXR5LCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKGRlZmluZWQodGhpcy5fdGFyZ2V0UHJvcGVydHkpICYmIHRoaXMuX3RhcmdldFByb3BlcnR5TmFtZXNbMF0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldFByb3BlcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBSZWZlcmVuY2VQcm9wZXJ0eS5wcm90b3R5cGUuX29uQ29sbGVjdGlvbkNoYW5nZWQgPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgICB2YXIgdGFyZ2V0RW50aXR5ID0gdGhpcy5fdGFyZ2V0RW50aXR5O1xuICAgICAgICBpZiAoZGVmaW5lZCh0YXJnZXRFbnRpdHkpICYmIHJlbW92ZWQuaW5kZXhPZih0YXJnZXRFbnRpdHkpICE9PSAtMSkge1xuICAgICAgICAgICAgdGFyZ2V0RW50aXR5LmRlZmluaXRpb25DaGFuZ2VkLnJlbW92ZUV2ZW50TGlzdGVuZXIoUmVmZXJlbmNlUHJvcGVydHkucHJvdG90eXBlLl9vblRhcmdldEVudGl0eURlZmluaXRpb25DaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldEVudGl0eSA9IHRoaXMuX3RhcmdldFByb3BlcnR5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZWZpbmVkKHRhcmdldEVudGl0eSkpIHtcbiAgICAgICAgICAgIHRhcmdldEVudGl0eSA9IHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICBpZiAoZGVmaW5lZCh0YXJnZXRFbnRpdHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VQcm9wZXJ0eTtcbiIsImltcG9ydCBkZWZpbmVkIGZyb20gJy4uL0NvcmUvZGVmaW5lZC5qcyc7XG5pbXBvcnQgRGV2ZWxvcGVyRXJyb3IgZnJvbSAnLi4vQ29yZS9EZXZlbG9wZXJFcnJvci5qcyc7XG5pbXBvcnQgRWxsaXBzb2lkIGZyb20gJy4uL0NvcmUvRWxsaXBzb2lkLmpzJztcbmltcG9ydCBFdmVudCBmcm9tICcuLi9Db3JlL0V2ZW50LmpzJztcbmltcG9ydCBSZWZlcmVuY2VGcmFtZSBmcm9tICcuLi9Db3JlL1JlZmVyZW5jZUZyYW1lLmpzJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuL1Byb3BlcnR5LmpzJztcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSB0ZW1wb3JhcnkgY2xhc3MgZm9yIHNjYWxpbmcgcG9zaXRpb24gcHJvcGVydGllcyB0byB0aGUgV0dTODQgc3VyZmFjZS5cbiAgICAgKiBJdCB3aWxsIGdvIGF3YXkgb3IgYmUgcmVmYWN0b3JlZCB0byBzdXBwb3J0IGRhdGEgd2l0aCBhcmJpdHJhcnkgaGVpZ2h0IHJlZmVyZW5jZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTY2FsZWRQb3NpdGlvblByb3BlcnR5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkID0gbmV3IEV2ZW50KCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9yZW1vdmVTdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNjYWxlZFBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLCB7XG4gICAgICAgIGlzQ29uc3RhbnQgOiB7XG4gICAgICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvcGVydHkuaXNDb25zdGFudCh0aGlzLl92YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmluaXRpb25DaGFuZ2VkIDoge1xuICAgICAgICAgICAgZ2V0IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmluaXRpb25DaGFuZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWZlcmVuY2VGcmFtZSA6IHtcbiAgICAgICAgICAgIGdldCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXMuX3ZhbHVlKSA/IHRoaXMuX3ZhbHVlLnJlZmVyZW5jZUZyYW1lIDogUmVmZXJlbmNlRnJhbWUuRklYRUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24odGltZSwgcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlSW5SZWZlcmVuY2VGcmFtZSh0aW1lLCBSZWZlcmVuY2VGcmFtZS5GSVhFRCwgcmVzdWx0KTtcbiAgICB9O1xuXG4gICAgU2NhbGVkUG9zaXRpb25Qcm9wZXJ0eS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZCh0aGlzLl9yZW1vdmVTdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVTdWJzY3JpcHRpb24gPSB2YWx1ZS5kZWZpbml0aW9uQ2hhbmdlZC5hZGRFdmVudExpc3RlbmVyKHRoaXMuX3JhaXNlRGVmaW5pdGlvbkNoYW5nZWQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZGVmaW5pdGlvbkNoYW5nZWQucmFpc2VFdmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUgPSBmdW5jdGlvbih0aW1lLCByZWZlcmVuY2VGcmFtZSwgcmVzdWx0KSB7XG4gICAgICAgIFxuXG4gICAgICAgIGlmICghZGVmaW5lZCh0aGlzLl92YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSB0aGlzLl92YWx1ZS5nZXRWYWx1ZUluUmVmZXJlbmNlRnJhbWUodGltZSwgcmVmZXJlbmNlRnJhbWUsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHJlc3VsdCkgPyBFbGxpcHNvaWQuV0dTODQuc2NhbGVUb0dlb2RldGljU3VyZmFjZShyZXN1bHQsIHJlc3VsdCkgOiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIFNjYWxlZFBvc2l0aW9uUHJvcGVydHkucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzID09PSBvdGhlciB8fCAob3RoZXIgaW5zdGFuY2VvZiBTY2FsZWRQb3NpdGlvblByb3BlcnR5ICYmIHRoaXMuX3ZhbHVlID09PSBvdGhlci5fdmFsdWUpO1xuICAgIH07XG5cbiAgICBTY2FsZWRQb3NpdGlvblByb3BlcnR5LnByb3RvdHlwZS5fcmFpc2VEZWZpbml0aW9uQ2hhbmdlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9kZWZpbml0aW9uQ2hhbmdlZC5yYWlzZUV2ZW50KHRoaXMpO1xuICAgIH07XG5leHBvcnQgZGVmYXVsdCBTY2FsZWRQb3NpdGlvblByb3BlcnR5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdlRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=