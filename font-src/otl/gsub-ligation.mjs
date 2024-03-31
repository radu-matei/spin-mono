'use strict';
var _s0_t0;
export {
    _s0_t0 as buildLigations
};
var r1_buildLigations, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8;
var _r1_t2 = function _r1_t8(r283_t) {
    var r283_n, r283_i, r283_a, _r283_t3, _r283_t4, _r283_t5, _r283_t6, _r283_t7, _r283_t8, _r283_t9, _r283_t10, _r283_t11, _r283_t12, _r283_t13, _r283_t14, _r283_t15, _r283_t16, _r283_t17, _r283_t18, _r283_t19, _r283_t20, _r283_t21, _r283_t22, _r283_t23, _r283_t24, _r283_t25, _r283_t26;
    var _r283_t0 = function () {
        _r283_t7 = function (_r283_t8) {
            _r283_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r283_t8
            };
        };
        _r283_t9 = r283_t instanceof Array;
        if (_r283_t9) {
            _r283_t10 = r283_n = r283_t.length;
            _r283_t11 = r283_i = 0;
            _r283_t12 = function (_r283_t14) {
                return _r283_t7(_r283_t14);
            };
            _r283_t13 = function (_r283_t15) {
                _r283_t16 = r283_i < r283_n;
                if (_r283_t16) {
                    _r283_t0 = function (_r283_t17) {
                        return _r283_t13(r283_i = r283_i + 1);
                    };
                    return {
                        'value': [
                            r283_i,
                            r283_t[r283_i]
                        ],
                        'done': false
                    };
                } else
                    return _r283_t12(_r283_t15);
            };
            return _r283_t13();
        } else {
            _r283_t18 = r283_a = Object.keys(r283_t);
            _r283_t19 = r283_n = r283_a.length;
            _r283_t20 = r283_i = 0;
            _r283_t21 = function (_r283_t23) {
                return _r283_t7(_r283_t23);
            };
            _r283_t22 = function (_r283_t24) {
                _r283_t25 = r283_i < r283_n;
                if (_r283_t25) {
                    _r283_t0 = function (_r283_t26) {
                        return _r283_t22(r283_i = r283_i + 1);
                    };
                    return {
                        'value': [
                            r283_a[r283_i],
                            r283_t[r283_a[r283_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r283_t21(_r283_t24);
            };
            return _r283_t22();
        }
    };
    var _r283_t1 = function (x) {
        try {
            return _r283_t0(x);
        } catch (ex) {
            return _r283_t2(ex);
        }
    };
    var _r283_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t8)
        _r283_t3 = this;
    else {
        _r283_t4 = function () {
            void 0;
        };
        _r283_t4.prototype = _r1_t8.prototype;
        _r283_t3 = new _r283_t4();
    }
    _r283_t3[Symbol.iterator] = function () {
        return _r283_t3;
    };
    _r283_t3.next = _r283_t1;
    _r283_t3.throw = function (x) {
        return _r283_t2(x);
    };
    return _r283_t3;
};
var r1_Map = Map;
var r1_Set = Set;
var r1_arrowBarX = function (r264_s) {
    var _r264_t0, _r264_t1;
    return function (r265_t) {
        var _r265_t0, _r265_t1;
        return r265_t.map(function (r266_x) {
            var _r266_t0, _r266_t1;
            return '' + r266_x + '.arrowBar.' + r264_s;
        });
    };
};
var r1_lsx = function (r267_s) {
    var _r267_t0, _r267_t1;
    return function (r268_t) {
        var _r268_t0, _r268_t1;
        return r268_t.map(function (r269_x) {
            var _r269_t0, _r269_t1;
            return '' + r269_x + '.lig.' + r267_s;
        });
    };
};
var r1_csx = function (r270_s) {
    var _r270_t0, _r270_t1;
    return function (r271_t) {
        var _r271_t0, _r271_t1;
        return r271_t.map(function (r272_x) {
            var _r272_t0, _r272_t1;
            return '' + r272_x + '.' + r270_s;
        });
    };
};
var r1_just = function (r273_s) {
    var _r273_t0, _r273_t1;
    return function (r274_t) {
        var _r274_t0, _r274_t1;
        return r274_t.map(function (r275_x) {
            var _r275_t0, _r275_t1;
            return r273_s;
        });
    };
};
var r1_xn$lookaround$5sIl = null;
var r1_advance = function (r276_t) {
    var _r276_t0, _r276_t1;
    return null;
};
var r1_ident = function (r277_t) {
    var _r277_t0, _r277_t1;
    return r277_t.map(function (r278_x) {
        var _r278_t0, _r278_t1;
        return r278_x;
    });
};
_s0_t0 = r1_buildLigations = function (r280_gsub, r280_para, r280_plm) {
    var r280_featureTag, r280_feature, _r280_t2, _r280_t3, _r280_t4;
    var r280_features = new r1_Map();
    var _r280_t0 = _r1_t2(r280_plm)[Symbol.iterator]();
    var _r280_t1 = void 0;
    while (!(_r280_t1 = _r280_t0.next()).done) {
        _r280_t2 = _r280_t1.value;
        r280_featureTag = _r280_t2[0];
        r280_feature = r280_gsub.addCommonFeature(r280_gsub.createFeature(r280_featureTag));
        r280_features.set(r280_featureTag, r280_feature);
    }
    return r1_buildLigationsImpl(r280_gsub, r280_para, r1_DoLigGroupT(r280_gsub, r280_plm, r280_features));
};
var r1_DoLigGroupT = function (r285_gsub, r285_plm, r285_features) {
    var _r285_t0, _r285_t1;
    return function (r286_F) {
        var r286_featureTag, r286_groups, r286_feature, r286_fUnique, r286_lookups, r286_lookup, _r286_t2, _r286_t3, _r286_t4, _r286_t5, _r286_t6, _r286_t7, _r286_t8, _r286_t10, _r286_t11, _r286_t12;
        var r286_deDupeGroups = new r1_Map();
        var r286_deDupe = function (r287_lookupsToPush) {
            var r287_raw, r287_lookup, _r287_t3, _r287_t4;
            var r287_h = JSON.stringify(r287_lookupsToPush);
            var r287_g = r286_deDupeGroups.get(r287_h);
            if (r287_g)
                return [
                    false,
                    r287_g
                ];
            var r287_results = [];
            var r287_rec = r285_gsub.beginBlock();
            var r287_lastLookupInGroup = null;
            var _r287_t0 = r287_lookupsToPush;
            var _r287_t1 = _r287_t0.length;
            var _r287_t2 = 0;
            while (_r287_t2 < _r287_t1) {
                r287_raw = _r287_t0[_r287_t2];
                r287_lookup = r285_gsub.createLookup(r287_raw);
                if (r287_lastLookupInGroup)
                    r285_gsub.setDependency(r287_lastLookupInGroup, r287_lookup);
                r287_lastLookupInGroup = r287_lookup;
                r287_results.push(r287_lookup);
                _r287_t2 = _r287_t2 + 1;
            }
            r285_gsub.endBlock(r287_rec);
            r286_deDupeGroups.set(r287_h, r287_results);
            return [
                true,
                r287_results
            ];
        };
        var _r286_t0 = _r1_t2(r285_plm)[Symbol.iterator]();
        var _r286_t1 = void 0;
        var _r286_t9 = !(_r286_t1 = _r286_t0.next()).done;
        while (_r286_t9) {
            _r286_t2 = _r286_t1.value;
            r286_featureTag = _r286_t2[0];
            r286_groups = _r286_t2[1];
            r286_feature = r285_features.get(r286_featureTag);
            _r286_t3 = r286_deDupe(r1_DoFeatureLigGroup(r285_gsub, r286_feature, r286_groups, r286_F));
            r286_fUnique = _r286_t3[0];
            r286_lookups = _r286_t3[1];
            _r286_t4 = r286_lookups;
            _r286_t5 = _r286_t4.length;
            _r286_t6 = 0;
            _r286_t11 = _r286_t6 < _r286_t5;
            while (_r286_t11) {
                _r286_t12 = (r286_lookup = _r286_t4[_r286_t6], r286_feature.addLookup(r286_lookup), _r286_t6 = _r286_t6 + 1);
                _r286_t11 = _r286_t6 < _r286_t5;
            }
            _r286_t10 = _r286_t12;
            _r286_t9 = !(_r286_t1 = _r286_t0.next()).done;
        }
        return _r286_t10;
    };
};
var r1_DoFeatureLigGroup = function (r293_gsub, r293_feature, r293_groups, r293_F) {
    var _r293_t0, _r293_t1;
    var r293_hasLG = function (r294_ln) {
        var _r294_t0, _r294_t1;
        return r293_groups.indexOf(r294_ln) >= 0;
    };
    var r293_lookupNamePrefix = 'lig_' + r293_feature.tag + '_';
    var r293_lookupsToPush = [];
    var r293_filterNulls = function (r295__rules) {
        var r295_rule, _r295_t3, _r295_t4;
        if (!r295__rules)
            return r295__rules;
        var r295_rules = [];
        var _r295_t0 = r295__rules;
        var _r295_t1 = _r295_t0.length;
        var _r295_t2 = 0;
        while (_r295_t2 < _r295_t1) {
            r295_rule = _r295_t0[_r295_t2];
            if (r295_rule)
                r295_rules.push(r295_rule);
            _r295_t2 = _r295_t2 + 1;
        }
        return r295_rules;
    };
    var r293_CreateLigationLookup = function (r298__rules) {
        var _r298_t0, _r298_t1;
        var r298_rules = r293_filterNulls(r298__rules);
        return r298_rules && r298_rules.length ? r293_lookupsToPush.push({
            'type': 'gsub_chaining',
            'rules': r298_rules
        }) : void 0;
    };
    var r293_CreateReverseLigationLookup = function (r299__rules) {
        var _r299_t0, _r299_t1;
        var r299_rules = r293_filterNulls(r299__rules);
        return r299_rules && r299_rules.length ? r293_lookupsToPush.push({
            'type': 'gsub_reverse',
            'rules': r299_rules
        }) : void 0;
    };
    r293_F(r293_hasLG, r293_CreateLigationLookup, r293_CreateReverseLigationLookup);
    return r293_lookupsToPush;
};
var r1_buildLigationsImpl = function (r305_gsub, r305_para, r305_xn$LigGroup$2Lrc9) {
    var _r305_t1, _r305_t2;
    var _r305_t0 = r305_gsub.ChainRuleBuilder();
    var r305_xn$chainrule$1aao = _r305_t0[0];
    var r305_xn$reverserule$3qIs = _r305_t0[1];
    var r305_less = ['less'];
    var r305_lessAndEquiv = [
        'less',
        'less.lig.shift0',
        'less.lig.shift0.anti'
    ];
    var r305_greater = ['greater'];
    var r305_greaterAndEquiv = [
        'greater',
        'greater.lig.shift0',
        'greater.lig.shift0.anti'
    ];
    var r305_lessOrGreater = [].concat(r305_less, r305_greater);
    var r305_lessOrGreaterAndEquiv = [].concat(r305_lessAndEquiv, r305_greaterAndEquiv);
    var r305_hyphen = ['hyphen'];
    var r305_equal = ['equal'];
    var r305_anyStraightRod = [
        'hyphen',
        'equal'
    ];
    var r305_anyWave = [
        'asciiTilde',
        'asciiTilde.low',
        'asciiTilde.high'
    ];
    var r305_bar = ['bar'];
    var r305_slash = ['slash'];
    var r305_exclam = ['exclam'];
    var r305_backslash = ['backslash'];
    var r305_underscore = ['underscore'];
    var r305_anyBar = [
        'bar',
        'slash',
        'backslash'
    ];
    var r305_regexLookAround = r305_less.concat(r305_hyphen, r305_equal, r305_exclam, r305_greater, r305_anyBar);
    r305_xn$LigGroup$2Lrc9(function (r307_hasLG, r307_CreateLigationLookup, r307_CreateReverseLigationLookup) {
        var _r307_t0, _r307_t1;
        return r307_hasLG('brst') ? r307_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            }),
            r305_xn$chainrule$1aao({
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            }, {
                'left': ['parenRight'],
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r313_hasLG, r313_CreateLigationLookup, r313_CreateReverseLigationLookup) {
        var _r313_t0, _r313_t1;
        return r313_hasLG('center-ops') ? r313_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': [
                    'parenLeft',
                    'bracketLeft',
                    'braceLeft'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['colon'],
                'right': ['colon/mid']
            }),
            r305_xn$chainrule$1aao({
                'left': ['colon'],
                'right': ['colon/mid']
            }, {
                'left': [
                    'parenRight',
                    'bracketRight',
                    'braceRight'
                ],
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r319_hasLG, r319_CreateLigationLookup, r319_CreateReverseLigationLookup) {
        var r319_triggerL, r319_triggerR, r319_skipL, r319_skipR, r319_acops, r319_acskip, r319_opcGroups, r319_opcFrom, r319_opcTo, r319_C, _r319_t0, _r319_t1;
        return r319_hasLG('center-ops') ? (r319_triggerL = [], r319_triggerR = [], r319_skipL = [
            'slash',
            'backslash',
            'at',
            'ampersand',
            'percent',
            'numberSign'
        ], r319_skipR = [
            'slash',
            'backslash',
            'at',
            'ampersand',
            'percent',
            'numberSign'
        ], r319_hasLG('center-op-trigger-plus-minus-l') ? r319_triggerL.push('plus', 'minus', 'hyphen') : void 0, r319_hasLG('center-op-trigger-plus-minus-r') ? r319_triggerR.push('plus', 'minus', 'hyphen') : void 0, r319_hasLG('center-op-trigger-equal-l') ? r319_triggerL.push('equal', 'ident') : void 0, r319_hasLG('center-op-trigger-equal-r') ? r319_triggerR.push('equal', 'ident') : void 0, r319_hasLG('center-op-trigger-bar-l') ? r319_triggerL.push('bar') : void 0, r319_hasLG('center-op-trigger-bar-r') ? r319_triggerR.push('bar') : void 0, r319_hasLG('center-op-trigger-slash-l') ? r319_triggerL.push('slash', 'backslash') : void 0, r319_hasLG('center-op-trigger-slash-r') ? r319_triggerR.push('slash', 'backslash') : void 0, r319_hasLG('center-op-trigger-angle-inside') ? (r319_triggerR.push('less'), r319_triggerL.push('greater')) : void 0, r319_hasLG('center-op-trigger-angle-outside') ? (r319_triggerL.push('less'), r319_triggerR.push('greater')) : void 0, !r319_hasLG('center-op-trigger-bar-l') ? r319_skipL.push('bar') : void 0, !r319_hasLG('center-op-trigger-bar-r') ? r319_skipR.push('bar') : void 0, r319_acops = function () {
            var _r320_t0, _r320_t1;
            return r319_hasLG('bar-triggers-op-centering') ? [
                'less',
                'greater',
                'hyphen',
                'equal',
                'plus',
                'slash',
                'bar',
                'backslash'
            ] : [
                'less',
                'greater',
                'hyphen',
                'equal',
                'plus'
            ];
        }, r319_acskip = function () {
            var _r321_t0, _r321_t1;
            return r319_hasLG('bar-triggers-op-centering') ? [
                'at',
                'ampersand',
                'percent',
                'numberSign'
            ] : [
                'slash',
                'bar',
                'backslash',
                'at',
                'ampersand',
                'percent',
                'numberSign'
            ];
        }, r319_opcGroups = [
            {
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            },
            {
                'left': ['asciiTilde'],
                'right': ['asciiTilde.low']
            }
        ], r319_hasLG('center-op-influence-dot') ? r319_opcGroups.push({
            'left': ['period'],
            'right': ['period/mid']
        }) : void 0, r319_hasLG('center-op-influence-colon') ? r319_opcGroups.push({
            'left': ['colon'],
            'right': ['colon/mid']
        }) : void 0, r319_opcFrom = r319_opcGroups.map(function (r326_x) {
            var _r326_t0, _r326_t1;
            return r326_x.left[0];
        }), r319_opcTo = r319_opcGroups.map(function (r327_x) {
            var _r327_t0, _r327_t1;
            return r327_x.right[0];
        }), r319_C = {
            'left': r319_opcFrom,
            'right': r319_opcTo
        }, r319_CreateLigationLookup([
            r305_xn$chainrule$1aao(r319_C, r319_C, r319_skipL, r319_skipL, r319_triggerL),
            r305_xn$chainrule$1aao(r319_C, r319_C, r319_skipL, r319_triggerL),
            r305_xn$chainrule$1aao(r319_C, r319_C, r319_triggerL),
            r305_xn$chainrule$1aao(r319_C, r319_skipL, r319_skipL, r319_triggerL),
            r305_xn$chainrule$1aao(r319_C, r319_skipL, r319_triggerL),
            r305_xn$chainrule$1aao(r319_C, r319_triggerL),
            r305_xn$chainrule$1aao(r319_triggerR, r319_skipR, r319_skipR, r319_C),
            r305_xn$chainrule$1aao(r319_triggerR, r319_skipR, r319_C),
            r305_xn$chainrule$1aao(r319_triggerR, r319_C)
        ]), r319_CreateLigationLookup([
            r305_xn$chainrule$1aao(r319_opcTo, r319_skipR, r319_skipR, r319_C),
            r305_xn$chainrule$1aao(r319_opcTo, r319_skipR, r319_C),
            r305_xn$chainrule$1aao(r319_opcTo, r319_C)
        ]), r319_CreateReverseLigationLookup([
            r305_xn$reverserule$3qIs(r319_C, r319_skipL, r319_skipL, r319_opcTo),
            r305_xn$reverserule$3qIs(r319_C, r319_skipL, r319_opcTo),
            r305_xn$reverserule$3qIs(r319_C, r319_opcTo)
        ]), r319_CreateLigationLookup([
            r305_xn$chainrule$1aao(r319_C, r319_skipR, r319_skipR, r319_opcTo),
            r305_xn$chainrule$1aao(r319_C, r319_skipR, r319_opcTo),
            r305_xn$chainrule$1aao(r319_C, r319_opcTo)
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r330_hasLG, r330_CreateLigationLookup, r330_CreateReverseLigationLookup) {
        var _r330_t0, _r330_t1;
        return r330_hasLG('slash-asterisk') ? (r330_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['slash'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashTop')
            }),
            r305_xn$chainrule$1aao({
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashBot')
            }, {
                'left': ['slash'],
                'right': r1_xn$lookaround$5sIl
            })
        ]), r330_CreateReverseLigationLookup([
            r305_xn$reverserule$3qIs({
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashBot')
            }, {
                'left': ['asterisk/slashBot'],
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$reverserule$3qIs({
                'left': ['asterisk/slashTop'],
                'right': r1_just('asterisk/sMid/ligComment')
            }, {
                'left': ['asterisk/slashBot'],
                'right': r1_xn$lookaround$5sIl
            })
        ]), r330_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['asterisk/slashTop'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': ['asterisk/slashTop']
            }),
            r305_xn$chainrule$1aao({
                'left': ['asterisk/sMid/ligComment'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': [
                    'asterisk',
                    'asterisk/slashBot'
                ],
                'right': r1_just('asterisk/sMid/ligComment')
            })
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r344_hasLG, r344_CreateLigationLookup, r344_CreateReverseLigationLookup) {
        var r344_dottyPunctuationSets, r344_dottyConnected, r344_dpShort, r344_dpTall, r344_dp, r344_dLeft, r344_dRight, r344_dLeftHalf, r344_dRightHalf, r344_dMid, r344_boundary, _r344_t0, _r344_t1, _r344_t2, _r344_t3, _r344_t4, _r344_t5, _r344_t6, _r344_t7, _r344_t8, _r344_t9, _r344_t10, _r344_t11, _r344_t12, _r344_tag13;
        if (r344_hasLG('kern-dotty')) {
            r344_dottyPunctuationSets = [
                [
                    [
                        'period',
                        'period/mid'
                    ],
                    [
                        'colon',
                        'colon/mid',
                        'question',
                        'exclam'
                    ]
                ],
                [
                    ['comma'],
                    ['semicolon']
                ]
            ];
            r344_dottyConnected = [
                [
                    'equal',
                    'hyphen',
                    'plus',
                    'less',
                    'greater',
                    'asterisk',
                    'asciiTilde',
                    'asciiCaret'
                ],
                [
                    'parenLeft',
                    'parenRight',
                    'bracketLeft',
                    'bracketRight',
                    'braceLeft',
                    'braceRight',
                    'numberSign',
                    'ampersand',
                    'slash',
                    'bar'
                ]
            ];
            _r344_t0 = r344_dottyPunctuationSets;
            _r344_t1 = _r344_t0.length;
            _r344_t2 = 0;
            _r344_t10 = _r344_t2 < _r344_t1;
            while (_r344_t10) {
                _r344_t3 = _r344_t0[_r344_t2];
                r344_dpShort = _r344_t3[0];
                r344_dpTall = _r344_t3[1];
                r344_dp = [].concat(r344_dpShort, r344_dpTall);
                r344_dLeft = r1_lsx('dLeft')(r344_dp);
                r344_dRight = r1_lsx('dRight')(r344_dp);
                r344_dLeftHalf = r1_lsx('dLeftHalf')(r344_dp);
                r344_dRightHalf = r1_lsx('dRightHalf')(r344_dp);
                r344_dMid = r1_lsx('dMid')(r344_dp);
                r344_CreateLigationLookup([
                    r305_xn$chainrule$1aao({
                        'left': r344_dRight.concat(r344_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r344_dp,
                        'right': r344_dMid
                    }, {
                        'left': r344_dp,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r344_dRight.concat(r344_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r344_dp,
                        'right': r344_dLeft
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r344_dp,
                        'right': r344_dRight
                    }, {
                        'left': r344_dp,
                        'right': r1_xn$lookaround$5sIl
                    })
                ]);
                _r344_t4 = r344_dottyConnected;
                _r344_t5 = _r344_t4.length;
                _r344_t6 = 0;
                while (_r344_t6 < _r344_t5) {
                    r344_boundary = _r344_t4[_r344_t6];
                    (function () {
                        var r355_dg = r344_boundary === r344_dottyConnected[0] ? r344_dp : r344_dpTall;
                        var r355_dgLeft = r1_lsx('dLeftHalf')(r355_dg);
                        var r355_dgRight = r1_lsx('dRightHalf')(r355_dg);
                        var r355_dgLeftHalf = r1_lsx('dLeftHalf')(r355_dg);
                        var r355_dgRightHalf = r1_lsx('dRightHalf')(r355_dg);
                        var r355_dgMid = r1_lsx('dMid')(r355_dg);
                        return r344_CreateLigationLookup([
                            r305_xn$chainrule$1aao({
                                'left': r344_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r355_dgRight,
                                'right': r355_dgMid
                            }, {
                                'left': r355_dgLeft,
                                'right': r355_dgMid
                            }, {
                                'left': r344_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }),
                            r305_xn$chainrule$1aao({
                                'left': r344_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r355_dgRight,
                                'right': r355_dgMid
                            }, {
                                'left': r355_dgMid.concat(r355_dgLeft),
                                'right': r1_xn$lookaround$5sIl
                            }),
                            r305_xn$chainrule$1aao({
                                'left': r355_dgMid.concat(r355_dgRight),
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r355_dgLeft,
                                'right': r355_dgMid
                            }, {
                                'left': r344_boundary,
                                'right': r1_xn$lookaround$5sIl
                            })
                        ]);
                    }());
                    _r344_t6 = _r344_t6 + 1;
                }
                r344_CreateLigationLookup([
                    r305_xn$chainrule$1aao({
                        'left': r344_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r344_dMid,
                        'right': r344_dRightHalf
                    }, {
                        'left': r344_dMid,
                        'right': r344_dLeftHalf
                    }, {
                        'left': r344_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r344_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r344_dMid,
                        'right': r344_dRightHalf
                    }, {
                        'left': r344_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r344_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r344_dMid,
                        'right': r344_dLeftHalf
                    }, {
                        'left': r344_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r344_dRight,
                        'right': r344_dRightHalf
                    }, {
                        'left': r344_dLeft,
                        'right': r344_dLeftHalf
                    })
                ]);
                _r344_t11 = _r344_t2 = _r344_t2 + 1;
                _r344_t10 = _r344_t2 < _r344_t1;
            }
            return _r344_t11;
        } else
            return void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r379_hasLG, r379_CreateLigationLookup, r379_CreateReverseLigationLookup) {
        var _r379_t0, _r379_t1;
        return r379_hasLG('trig') ? (r379_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_lsx('trig')
            }, {
                'left': ['bar'],
                'right': r1_lsx('trig')
            }),
            r305_xn$chainrule$1aao({
                'left': ['bar'],
                'right': r1_lsx('trig')
            }, {
                'left': r305_greater,
                'right': r1_lsx('trig')
            }),
            r305_xn$chainrule$1aao({
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greater,
                'right': r1_lsx('trig')
            }),
            r305_xn$chainrule$1aao({
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['bar'],
                'right': r1_lsx('trig')
            })
        ]), r379_CreateReverseLigationLookup([r305_xn$reverserule$3qIs({
                'left': ['bar'],
                'right': r1_lsx('trig')(['bar'])
            }, {
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            })]), r379_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': ['bar'],
                'right': r1_lsx('trig')(['bar'])
            }, {
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            })])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r393_hasLG, r393_CreateLigationLookup, r393_CreateReverseLigationLookup) {
        var _r393_t0, _r393_t1;
        return r393_hasLG('llggeq') ? r393_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_less,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_greater,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greater,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_less,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_less,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_greater,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_greater,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r445_hasLG, r445_CreateLigationLookup, r445_CreateReverseLigationLookup) {
        var _r445_t0, _r445_t1;
        return r445_hasLG('html-comment') ? r445_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_exclam,
                'right': r1_lsx('htmlcommentstart')
            }, {
                'left': r305_hyphen,
                'right': r1_lsx('lxc')
            }, {
                'left': r305_hyphen,
                'right': r1_lsx('cc')
            }, {
                'left': r305_hyphen,
                'right': r1_lsx('cf')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_exclam,
                'right': r1_lsx('htmlcommentstart')
            }, {
                'left': r305_hyphen,
                'right': r1_lsx('lxc')
            }, {
                'left': r305_hyphen,
                'right': r1_lsx('cf')
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r456_hasLG, r456_CreateLigationLookup, r456_CreateReverseLigationLookup) {
        var r456_rodCls, r456_dbl, r456_ltgt, r456_CRod, _r456_t3, _r456_t7, _r456_t8, _r456_t9, _r456_t11, _r456_t12, _r456_tag13, _r456_t14, _r456_tag15;
        var r456_singular = r305_hyphen.concat(r305_anyWave);
        var r456_CBarSingular = function (r457_k) {
            var _r457_t0, _r457_t1;
            var r457_hyphenSet = new r1_Set(r305_hyphen);
            var r457_fHyphen = r1_arrowBarX(r457_k);
            var r457_fWave = r1_just('wave.lig.' + r457_k);
            return function (r458_t) {
                var _r458_t0, _r458_t1;
                var r458_hyphenResults = r457_fHyphen(r458_t);
                var r458_waveResults = r457_fWave(r458_t);
                return r458_t.map(function (r459_x, r459_j) {
                    var _r459_t0, _r459_t1;
                    return r457_hyphenSet.has(r459_x) ? r458_hyphenResults[r459_j] : r458_waveResults[r459_j];
                });
            };
        };
        var r456_ArrowFormationConfig = [
            [
                r305_equal,
                1,
                1,
                r1_arrowBarX
            ],
            [
                r456_singular,
                0,
                0,
                r456_CBarSingular
            ]
        ];
        var r456_ArrowExtensionConfig = [
            [
                r305_equal,
                r1_arrowBarX
            ],
            [
                r305_hyphen,
                r1_arrowBarX
            ],
            [
                r305_anyWave,
                function (r460_k) {
                    var _r460_t0, _r460_t1;
                    return r1_just('wave.lig.' + r460_k);
                }
            ]
        ];
        var _r456_t0 = r456_ArrowFormationConfig;
        var _r456_t1 = _r456_t0.length;
        var _r456_t2 = 0;
        while (_r456_t2 < _r456_t1) {
            _r456_t3 = _r456_t0[_r456_t2];
            r456_rodCls = _r456_t3[0];
            r456_dbl = _r456_t3[1];
            r456_ltgt = _r456_t3[2];
            r456_CRod = _r456_t3[3];
            (function () {
                var r464_lBar, r464_kl, r464_envL, r464_rBar, r464_kr, r464_envR, _r464_t3, _r464_t4, _r464_t5, _r464_t6, _r464_t7, _r464_t11, _r464_t15;
                var r464_heads = [];
                var r464_rods = [];
                var r464_doLT = !r456_ltgt || r456_hasLG('arrow-l') && !r456_hasLG('lteq') && !r456_hasLG('lteq-separate');
                var r464_doLTAlt = !r456_ltgt || r456_hasLG('counter-arrow-l') && !r456_hasLG('eqlt') && !r456_hasLG('eqlt-separate');
                var r464_doRT = !r456_ltgt || r456_hasLG('counter-arrow-r') && !r456_hasLG('gteq') && !r456_hasLG('gteq-separate');
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r305_regexLookAround,
                    'right': r1_advance
                }));
                var r464_CJoinHeadForce = function () {
                    var _r480_t0, _r480_t1;
                    return r456_dbl ? r1_lsx('dblhead') : r1_lsx('shift0.head');
                };
                var r464_CJoinHeadMid = function () {
                    var _r481_t0, _r481_t1;
                    return r456_dbl ? r1_lsx('dblhead.mid') : r1_lsx('shift0.mid');
                };
                var r464_CJoinHeadForceShift1 = function () {
                    var _r482_t0, _r482_t1;
                    return r456_dbl ? r1_lsx('dblhead.shift1') : r1_lsx('shift1.head');
                };
                var r464_CAntiHeadForce = function () {
                    var _r483_t0, _r483_t1;
                    return r456_dbl ? r1_lsx('hole') : r1_lsx('shift0.anti');
                };
                var r464_CAntiHeadForceShiftN1 = function () {
                    var _r484_t0, _r484_t1;
                    return r456_dbl ? r1_lsx('hole.shiftN1') : r1_lsx('shiftN1.anti');
                };
                var r464_LJoinHeadForce = function () {
                    var _r485_t0, _r485_t1;
                    return r456_hasLG('arrow-l') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_LJoinHeadForceLR = function () {
                    var _r486_t0, _r486_t1;
                    return r456_hasLG('arrow-l') || r456_hasLG('arrow-lr') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_LJoinHeadForceShift1 = function () {
                    var _r487_t0, _r487_t1;
                    return r456_hasLG('arrow-l') ? r464_CJoinHeadForceShift1() : r1_advance;
                };
                var r464_LJoinHeadForceShift1LR = function () {
                    var _r488_t0, _r488_t1;
                    return r456_hasLG('arrow-l') || r456_hasLG('arrow-lr') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_LMiddleHead = function () {
                    var _r489_t0, _r489_t1;
                    return r456_hasLG('counter-arrow-l') ? r464_CJoinHeadMid() : r456_hasLG('arrow-l') ? r464_LJoinHeadForce() : r1_advance;
                };
                var r464_LAntiHeadForce = function () {
                    var _r490_t0, _r490_t1;
                    return r456_hasLG('counter-arrow-l') ? r464_CAntiHeadForce() : r1_advance;
                };
                var r464_LAntiHeadForceShiftN1 = function () {
                    var _r491_t0, _r491_t1;
                    return r456_hasLG('counter-arrow-l') ? r464_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r464_RJoinHeadForce = function () {
                    var _r492_t0, _r492_t1;
                    return r456_hasLG('arrow-r') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_RJoinHeadForceLR = function () {
                    var _r493_t0, _r493_t1;
                    return r456_hasLG('arrow-r') || r456_hasLG('arrow-lr') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_RJoinHeadForceShift1 = function () {
                    var _r494_t0, _r494_t1;
                    return r456_hasLG('arrow-r') ? r464_CJoinHeadForceShift1() : r1_advance;
                };
                var r464_RJoinHeadForceShift1LR = function () {
                    var _r495_t0, _r495_t1;
                    return r456_hasLG('arrow-r') || r456_hasLG('arrow-lr') ? r464_CJoinHeadForce() : r1_advance;
                };
                var r464_RMiddleHead = function () {
                    var _r496_t0, _r496_t1;
                    return r456_hasLG('counter-arrow-r') ? r464_CJoinHeadMid() : r456_hasLG('arrow-r') ? r464_RJoinHeadForce() : r1_advance;
                };
                var r464_RAntiHeadForce = function () {
                    var _r497_t0, _r497_t1;
                    return r456_hasLG('counter-arrow-r') ? r464_CAntiHeadForce() : r1_advance;
                };
                var r464_RAntiHeadForceShiftN1 = function () {
                    var _r498_t0, _r498_t1;
                    return r456_hasLG('counter-arrow-r') ? r464_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r464_LAntiHeadAmbig = function () {
                    var _r499_t0, _r499_t1;
                    return r464_doLTAlt ? r464_LAntiHeadForce() : r1_advance;
                };
                var r464_RJoinHeadAmbig = r464_RJoinHeadForce;
                var r464_LJoinHeadAmbig = function () {
                    var _r500_t0, _r500_t1;
                    return r464_doLT ? r464_LJoinHeadForce() : r1_advance;
                };
                var r464_RAntiHeadAmbig = function () {
                    var _r501_t0, _r501_t1;
                    return r464_doRT ? r464_RAntiHeadForce() : r1_advance;
                };
                var r464_CollectApply = function (r502_ck, r502_fns) {
                    var r502_fnT, r502_fn, r502_transformed, r502_g, _r502_t3, _r502_t4, _r502_t5, _r502_t6, _r502_t7;
                    var r502_a = new r1_Set();
                    var _r502_t0 = r502_fns;
                    var _r502_t1 = _r502_t0.length;
                    var _r502_t2 = 0;
                    while (_r502_t2 < _r502_t1) {
                        r502_fnT = _r502_t0[_r502_t2];
                        r502_fn = r502_fnT();
                        r502_transformed = r502_fn ? r502_fn(r502_ck) : r502_ck;
                        _r502_t3 = r502_transformed;
                        _r502_t4 = _r502_t3.length;
                        _r502_t5 = 0;
                        while (_r502_t5 < _r502_t4) {
                            r502_g = _r502_t3[_r502_t5];
                            r502_a.add(r502_g);
                            _r502_t5 = _r502_t5 + 1;
                        }
                        _r502_t2 = _r502_t2 + 1;
                    }
                    return Array.from(r502_a);
                };
                var r464_arrowIndicator = r305_anyBar.concat(r464_CollectApply(r305_less.concat(r305_greater), [
                    function () {
                        var _r507_t0, _r507_t1;
                        return r1_ident;
                    },
                    r464_CJoinHeadForce,
                    r464_CJoinHeadForceShift1,
                    r464_CAntiHeadForce,
                    r464_CAntiHeadForceShiftN1,
                    r464_CJoinHeadMid
                ]));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceShift1()
                }, {
                    'left': r305_greater,
                    'right': r464_RAntiHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadForce()
                }, {
                    'left': r305_less,
                    'right': r464_LJoinHeadForceShift1()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForce()
                }, {
                    'left': r305_less,
                    'right': r464_LJoinHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadForce()
                }, {
                    'left': r305_greater,
                    'right': r464_RAntiHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RMiddleHead()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LMiddleHead()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LJoinHeadForceShift1LR()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceShift1LR()
                }, {
                    'left': r305_greater,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LJoinHeadForceShift1LR()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceLR()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r464_LJoinHeadForceLR()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceShift1LR()
                }, {
                    'left': r305_greater,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r464_LJoinHeadForceLR()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceLR()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForceShift1()
                }, {
                    'left': r305_greater,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadForceShiftN1()
                }, {
                    'left': r305_less,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_greater,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RAntiHeadForceShiftN1()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LJoinHeadForceShift1()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForce()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadForce()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_greater,
                    'right': r464_RAntiHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r464_LJoinHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r464_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadForce()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r464_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadForce()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_greater,
                    'right': r464_RAntiHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r464_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r464_LJoinHeadForce()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r464_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_greater,
                    'right': r464_RJoinHeadAmbig()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r305_less,
                    'right': r464_LAntiHeadAmbig()
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_greater,
                    'right': r464_RAntiHeadAmbig()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r464_heads.push(r305_xn$chainrule$1aao({
                    'left': r305_less,
                    'right': r464_LJoinHeadAmbig()
                }, {
                    'left': r456_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                var r464_kindLeftMid = [
                    [
                        false,
                        'l',
                        r464_CollectApply(r305_less, [
                            r464_CJoinHeadForce,
                            r464_CJoinHeadMid
                        ])
                    ],
                    [
                        false,
                        'l1',
                        r464_CollectApply(r305_less, [r464_CJoinHeadForceShift1])
                    ],
                    [
                        false,
                        'j',
                        r464_CollectApply(r305_greater, [
                            r464_CAntiHeadForce,
                            r464_CJoinHeadMid
                        ])
                    ],
                    [
                        true,
                        'm',
                        r305_anyBar
                    ],
                    [
                        false,
                        'j1',
                        r464_CollectApply(r305_greater, [r464_CAntiHeadForceShiftN1])
                    ]
                ];
                var r464_kindRightMid = [
                    [
                        false,
                        'r',
                        r464_CollectApply(r305_greater, [
                            r464_CJoinHeadForce,
                            r464_CJoinHeadMid
                        ])
                    ],
                    [
                        false,
                        'r1',
                        r464_CollectApply(r305_greater, [r464_CJoinHeadForceShift1])
                    ],
                    [
                        false,
                        'j',
                        r464_CollectApply(r305_less, [
                            r464_CAntiHeadForce,
                            r464_CJoinHeadMid
                        ])
                    ],
                    [
                        true,
                        'm',
                        r305_anyBar
                    ],
                    [
                        false,
                        'j1',
                        r464_CollectApply(r305_less, [r464_CAntiHeadForceShiftN1])
                    ]
                ];
                var _r464_t0 = r464_kindLeftMid;
                var _r464_t1 = _r464_t0.length;
                var _r464_t2 = 0;
                while (_r464_t2 < _r464_t1) {
                    _r464_t3 = _r464_t0[_r464_t2];
                    r464_lBar = _r464_t3[0];
                    r464_kl = _r464_t3[1];
                    r464_envL = _r464_t3[2];
                    _r464_t4 = r464_kindRightMid;
                    _r464_t5 = _r464_t4.length;
                    _r464_t6 = 0;
                    while (_r464_t6 < _r464_t5) {
                        _r464_t7 = _r464_t4[_r464_t6];
                        r464_rBar = _r464_t7[0];
                        r464_kr = _r464_t7[1];
                        r464_envR = _r464_t7[2];
                        if (!r464_lBar || !r464_rBar)
                            r464_rods.push(r305_xn$chainrule$1aao({
                                'left': r464_envL,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r456_rodCls,
                                'right': r456_CRod('' + r464_kl + '' + r464_kr)
                            }, {
                                'left': r464_envR,
                                'right': r1_xn$lookaround$5sIl
                            }));
                        _r464_t6 = _r464_t6 + 1;
                    }
                    _r464_t2 = _r464_t2 + 1;
                }
                var _r464_t8 = r464_kindLeftMid;
                var _r464_t9 = _r464_t8.length;
                var _r464_t10 = 0;
                while (_r464_t10 < _r464_t9) {
                    _r464_t11 = _r464_t8[_r464_t10];
                    r464_lBar = _r464_t11[0];
                    r464_kl = _r464_t11[1];
                    r464_envL = _r464_t11[2];
                    if (!r464_lBar)
                        r464_rods.push(r305_xn$chainrule$1aao({
                            'left': r464_envL,
                            'right': r1_xn$lookaround$5sIl
                        }, {
                            'left': r456_rodCls,
                            'right': r456_CRod('' + r464_kl + 'f')
                        }));
                    _r464_t10 = _r464_t10 + 1;
                }
                var _r464_t12 = r464_kindRightMid;
                var _r464_t13 = _r464_t12.length;
                var _r464_t14 = 0;
                while (_r464_t14 < _r464_t13) {
                    _r464_t15 = _r464_t12[_r464_t14];
                    r464_rBar = _r464_t15[0];
                    r464_kr = _r464_t15[1];
                    r464_envR = _r464_t15[2];
                    if (!r464_rBar)
                        r464_rods.push(r305_xn$chainrule$1aao({
                            'left': r456_rodCls,
                            'right': r456_CRod('f' + r464_kr)
                        }, {
                            'left': r464_envR,
                            'right': r1_xn$lookaround$5sIl
                        }));
                    _r464_t14 = _r464_t14 + 1;
                }
                r456_CreateLigationLookup(r464_heads);
                return r456_CreateLigationLookup(r464_rods);
            }());
            _r456_t2 = _r456_t2 + 1;
        }
        var _r456_t4 = r456_ArrowExtensionConfig;
        var _r456_t5 = _r456_t4.length;
        var _r456_t6 = 0;
        var _r456_t10 = _r456_t6 < _r456_t5;
        while (_r456_t10) {
            _r456_t7 = _r456_t4[_r456_t6];
            r456_rodCls = _r456_t7[0];
            r456_CRod = _r456_t7[1];
            (function () {
                var r608_lc, r608_rc;
                var r608_rodTermLeft = [];
                var r608_rodConnLeft = [];
                var _r608_t0 = [
                    'l',
                    'l1',
                    'j',
                    'j1',
                    'c',
                    'z',
                    'm'
                ];
                var _r608_t1 = _r608_t0.length;
                var _r608_t2 = 0;
                while (_r608_t2 < _r608_t1) {
                    r608_lc = _r608_t0[_r608_t2];
                    r608_rodTermLeft = r608_rodTermLeft.concat(r456_CRod('' + r608_lc + 'f')(r456_rodCls));
                    r608_rodConnLeft = r608_rodConnLeft.concat(r456_CRod('' + r608_lc + 'c')(r456_rodCls));
                    _r608_t2 = _r608_t2 + 1;
                }
                var r608_rodTermRight = [];
                var r608_rodConnRight = [];
                var _r608_t3 = [
                    'r',
                    'r1',
                    'j',
                    'j1',
                    'c',
                    'z',
                    'm'
                ];
                var _r608_t4 = _r608_t3.length;
                var _r608_t5 = 0;
                while (_r608_t5 < _r608_t4) {
                    r608_rc = _r608_t3[_r608_t5];
                    r608_rodTermRight = r608_rodTermRight.concat(r456_CRod('f' + r608_rc)(r456_rodCls));
                    r608_rodConnRight = r608_rodConnRight.concat(r456_CRod('c' + r608_rc)(r456_rodCls));
                    _r608_t5 = _r608_t5 + 1;
                }
                r456_CreateLigationLookup([r305_xn$chainrule$1aao({
                        'left': r608_rodTermLeft,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r456_rodCls,
                        'right': r456_CRod('zf')
                    })]);
                r456_CreateReverseLigationLookup([r305_xn$reverserule$3qIs({
                        'left': r456_rodCls,
                        'right': r456_CRod('fz')
                    }, {
                        'left': r608_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })]);
                r456_CreateLigationLookup([r305_xn$chainrule$1aao({
                        'left': r456_rodCls,
                        'right': r456_CRod('fz')
                    }, {
                        'left': r608_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })]);
                r456_CreateLigationLookup([
                    r305_xn$chainrule$1aao({
                        'left': r608_rodTermLeft,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r456_CRod('zf')(r456_rodCls),
                        'right': r456_CRod('zm')(r456_rodCls)
                    }, {
                        'left': r305_anyBar,
                        'right': r1_lsx('dMid')
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r305_anyBar,
                        'right': r1_lsx('dMid')
                    }, {
                        'left': r456_CRod('fz')(r456_rodCls),
                        'right': r456_CRod('mz')(r456_rodCls)
                    }, {
                        'left': r608_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })
                ]);
                return r456_CreateLigationLookup([r305_xn$chainrule$1aao({
                        'left': r608_rodTermLeft,
                        'right': r608_rodConnLeft
                    }, {
                        'left': r608_rodTermRight,
                        'right': r608_rodConnRight
                    })]);
            }());
            _r456_t11 = _r456_t6 = _r456_t6 + 1;
            _r456_t10 = _r456_t6 < _r456_t5;
        }
        return _r456_t11;
    });
    r305_xn$LigGroup$2Lrc9(function (r628_hasLG, r628_CreateLigationLookup, r628_CreateReverseLigationLookup) {
        var r628_lAll, r628_lNeut, r628_gAll, r628_gNeut, r628_lgAll, r628_lgNeut, _r628_t0, _r628_t1;
        return r628_hasLG('llgg') ? (r628_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_less,
                'right': r1_lsx('shift0h')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_greater,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greater,
                'right': r1_lsx('shiftN0h')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r305_less,
                'right': r1_lsx('shift0h')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r305_greater,
                'right': r1_lsx('shiftN0h')
            })
        ]), r628_lAll = [
            'less',
            'less.lig.shift0h',
            'less.lig.shiftN0h'
        ], r628_lNeut = [
            'less',
            'less',
            'less'
        ], r628_gAll = [
            'greater',
            'greater.lig.shift0h',
            'greater.lig.shiftN0h'
        ], r628_gNeut = [
            'greater',
            'greater',
            'greater'
        ], r628_lgAll = r628_lAll.concat(r628_gAll), r628_lgNeut = r628_lNeut.concat(r628_gNeut), r628_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': r628_lgAll,
                'right': r628_lgNeut
            }, {
                'left': r628_lgAll,
                'right': r628_lgNeut
            }, {
                'left': r628_lgAll,
                'right': r628_lgNeut
            }, {
                'left': r628_lgAll,
                'right': r1_xn$lookaround$5sIl
            })]), r628_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': r628_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r628_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r628_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r628_lgAll,
                'right': r628_lgNeut
            })]), r628_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': r628_lAll,
                'right': r628_lNeut
            }, {
                'left': r628_lAll,
                'right': r628_lNeut
            }, {
                'left': r628_gAll,
                'right': r628_gNeut
            }),
            r305_xn$chainrule$1aao({
                'left': r628_gAll,
                'right': r628_gNeut
            }, {
                'left': r628_gAll,
                'right': r628_gNeut
            }, {
                'left': r628_lAll,
                'right': r628_lNeut
            }),
            r305_xn$chainrule$1aao({
                'left': r628_lAll,
                'right': r628_lNeut
            }, {
                'left': r628_gAll,
                'right': r628_gNeut
            }, {
                'left': r628_gAll,
                'right': r628_gNeut
            }),
            r305_xn$chainrule$1aao({
                'left': r628_gAll,
                'right': r628_gNeut
            }, {
                'left': r628_lAll,
                'right': r628_lNeut
            }, {
                'left': r628_lAll,
                'right': r628_lNeut
            })
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r675_hasLG, r675_CreateLigationLookup, r675_CreateReverseLigationLookup) {
        var _r675_t0, _r675_t1;
        return r675_hasLG('logic') ? r675_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': r305_slash,
                'right': r1_csx('left')
            }, {
                'left': r305_backslash,
                'right': r1_csx('right')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_backslash,
                'right': r1_csx('left')
            }, {
                'left': r305_slash,
                'right': r1_csx('right')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_bar,
                'right': r1_lsx('dMid')
            }, {
                'left': r305_anyStraightRod,
                'right': r1_lsx('mf')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_anyStraightRod,
                'right': r1_lsx('fm')
            }, {
                'left': r305_bar,
                'right': r1_lsx('dMid')
            }),
            r305_xn$chainrule$1aao({
                'left': r305_underscore,
                'right': r1_lsx('fm')
            }, {
                'left': r305_bar,
                'right': r1_lsx('bottomMid')
            }, {
                'left': r305_underscore,
                'right': r1_lsx('mf')
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r688_hasLG, r688_CreateLigationLookup, r688_CreateReverseLigationLookup) {
        var _r688_t0, _r688_t1;
        var r688_AnyEqualEnding = [
            'equal',
            'equal.lig.cf',
            'equal.lig.jf',
            'equal.lig.xf',
            'ident.lig.cf',
            'ident.lig.yf'
        ];
        return r688_CreateLigationLookup([
            r688_hasLG('eqeq') ? r305_xn$chainrule$1aao({
                'left': [
                    'equal.lig.cf',
                    'equal.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_lsx('zf')
            }) : void 0,
            r688_hasLG('eqexeq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r305_exclam,
                'right': ['neq.allow-dot.1m']
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.yf')
            }) : r688_hasLG('eqexeq-dl') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r305_exclam,
                'right': ['neq.allow-dot.1m']
            }, {
                'left': r305_equal,
                'right': r1_lsx('yf')
            }) : true ? r305_xn$chainrule$1aao({
                'left': r688_AnyEqualEnding,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_exclam,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r688_hasLG('exeqeqeq') ? r305_xn$chainrule$1aao({
                'left': r305_exclam,
                'right': ['neq.allow-dot.4l']
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.xc')
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.cc')
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.cf')
            }) : r688_hasLG('exeq') ? r305_xn$chainrule$1aao({
                'left': r305_exclam,
                'right': ['neq.allow-dot.4l']
            }, {
                'left': r305_equal,
                'right': r1_lsx('xc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r688_hasLG('eqeq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r688_hasLG('exeqeq') ? r305_xn$chainrule$1aao({
                'left': r305_exclam,
                'right': ['neq.allow-dot.3l']
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.xc')
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.cf')
            }) : r688_hasLG('exeq') ? r305_xn$chainrule$1aao({
                'left': r305_exclam,
                'right': ['neq.allow-dot.3l']
            }, {
                'left': r305_equal,
                'right': r1_lsx('xc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r688_hasLG('eqslasheq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r305_slash,
                'right': ['neq.bar-only.1m']
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.yf')
            }) : r688_hasLG('slasheq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r305_slash,
                'right': ['neq.bar-only.1m']
            }, {
                'left': r305_equal,
                'right': r1_lsx('yf')
            }) : void 0,
            r688_hasLG('eqeqeq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.cc')
            }, {
                'left': r305_equal,
                'right': r1_just('ident.lig.cf')
            }) : r688_hasLG('eqeq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r688_hasLG('tildeeq') ? r305_xn$chainrule$1aao({
                'left': r305_anyWave,
                'right': r1_just('neq.bar-only.2l')
            }, {
                'left': r305_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r688_hasLG('slasheq') ? r305_xn$chainrule$1aao({
                'left': r305_slash,
                'right': ['neq.bar-only.2l']
            }, {
                'left': r305_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r688_hasLG('exeq') ? r305_xn$chainrule$1aao({
                'left': r305_exclam,
                'right': ['neq.allow-dot.2l']
            }, {
                'left': r305_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r688_hasLG('eqeq') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r305_equal,
                'right': r1_lsx('cf')
            }) : void 0
        ]);
    });
    r305_xn$LigGroup$2Lrc9(function (r739_hasLG, r739_CreateLigationLookup, r739_CreateReverseLigationLookup) {
        var r739_acops, _r739_t0, _r739_t1;
        return r739_hasLG('lteq') || r739_hasLG('eqlt') || r739_hasLG('gteq') ? (r739_acops = [
            'less',
            'greater',
            'hyphen',
            'equal',
            'plus',
            'slash',
            'bar',
            'backslash'
        ], r739_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r305_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }, {
                'left': r305_regexLookAround,
                'right': r1_advance
            }),
            r739_hasLG('lteq') ? r305_xn$chainrule$1aao({
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_advance
            }) : void 0,
            r739_hasLG('lteq') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_advance
            }, {
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r739_hasLG('lteq') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_just('less.lig2')
            }, {
                'left': r305_equal,
                'right': ['eq.at-lteq.lig2']
            }) : void 0,
            r739_hasLG('eqlt') ? r305_xn$chainrule$1aao({
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_equal,
                'right': r1_advance
            }, {
                'left': r305_lessAndEquiv,
                'right': r1_advance
            }) : void 0,
            r739_hasLG('eqlt') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_advance
            }, {
                'left': r305_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r739_hasLG('eqlt') ? r305_xn$chainrule$1aao({
                'left': r305_equal,
                'right': r1_just('less.lig2')
            }, {
                'left': r305_lessAndEquiv,
                'right': ['eq.at-lteq.lig2']
            }) : void 0,
            r739_hasLG('gteq') ? r305_xn$chainrule$1aao({
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_advance
            }) : void 0,
            r739_hasLG('gteq') ? r305_xn$chainrule$1aao({
                'left': r305_greaterAndEquiv,
                'right': r1_advance
            }, {
                'left': r305_equal,
                'right': r1_advance
            }, {
                'left': r739_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r739_hasLG('gteq') ? r305_xn$chainrule$1aao({
                'left': r305_greaterAndEquiv,
                'right': r1_just('greater.lig2')
            }, {
                'left': r305_equal,
                'right': ['eq.at-gteq.lig2']
            }) : void 0
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r780_hasLG, r780_CreateLigationLookup, r780_CreateReverseLigationLookup) {
        var _r780_t0, _r780_t1;
        return r780_CreateLigationLookup([r780_hasLG('ltgt-diamond') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_just('less.lig.diamond')
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_just('greater.lig.diamond')
            }) : r780_hasLG('ltgt-diamond-tag') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_just('less.lig.diamond.tag')
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_just('greater.lig.diamond.tag')
            }) : r780_hasLG('ltgt-ne') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_just('neq.bar-only.2l')
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_just('equal.lig.xf')
            }) : void 0]);
    });
    r305_xn$LigGroup$2Lrc9(function (r788_hasLG, r788_CreateLigationLookup, r788_CreateReverseLigationLookup) {
        var _r788_t0, _r788_t1;
        return r788_CreateLigationLookup([
            r788_hasLG('ltgt-slash-tag') ? r305_xn$chainrule$1aao({
                'left': r305_lessAndEquiv,
                'right': r1_just('less.lig.tag-slash')
            }, {
                'left': r305_slash,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r788_hasLG('ltgt-slash-tag') ? r305_xn$chainrule$1aao({
                'left': r305_slash,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_just('greater.lig.tag-slash')
            }) : void 0
        ]);
    });
    r305_xn$LigGroup$2Lrc9(function (r794_hasLG, r794_CreateLigationLookup, r794_CreateReverseLigationLookup) {
        var _r794_t0, _r794_t1;
        return r794_hasLG('colon-greater') ? r794_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': ['colon/mid'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_greaterAndEquiv,
                'right': r1_just('greaterArrow')
            })]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r798_hasLG, r798_CreateLigationLookup, r798_CreateReverseLigationLookup) {
        var _r798_t0, _r798_t1;
        return r798_CreateLigationLookup([
            r798_hasLG('brack-bar') ? r305_xn$chainrule$1aao({
                'left': ['bracketLeft'],
                'right': ['ligExtBracketLeft']
            }, {
                'left': ['bar'],
                'right': ['ligBarInsideBracketLeft']
            }) : void 0,
            r798_hasLG('brack-bar') ? r305_xn$chainrule$1aao({
                'left': ['bar'],
                'right': ['ligBarInsideBracketRight']
            }, {
                'left': ['bracketRight'],
                'right': ['ligExtBracketRight']
            }) : void 0,
            r798_hasLG('brace-bar') ? r305_xn$chainrule$1aao({
                'left': ['braceLeft'],
                'right': ['ligExtBraceLeft']
            }, {
                'left': ['bar'],
                'right': ['ligBarInsideBracketLeft']
            }) : void 0,
            r798_hasLG('brace-bar') ? r305_xn$chainrule$1aao({
                'left': ['bar'],
                'right': ['ligBarInsideBracketRight']
            }, {
                'left': ['braceRight'],
                'right': ['ligExtBraceRight']
            }) : void 0
        ]);
    });
    r305_xn$LigGroup$2Lrc9(function (r808_hasLG, r808_CreateLigationLookup, r808_CreateReverseLigationLookup) {
        var _r808_t0, _r808_t1;
        return r808_hasLG('plusplus') ? (r808_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': [
                    'plus.lig.cf',
                    'plus.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['plus'],
                'right': r1_lsx('zf')
            }),
            r305_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            }),
            r305_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            }),
            r305_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            })
        ]), r808_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['plus.lig.fc'],
                'right': ['plus.lig.fc.s']
            }, {
                'left': ['plus.lig.cc'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['plus.lig.cf'],
                'right': ['plus.lig.cf.s']
            }),
            r305_xn$chainrule$1aao({
                'left': ['plus.lig.fc'],
                'right': ['plus.lig.fc.s']
            }, {
                'left': ['plus.lig.cf'],
                'right': ['plus.lig.cf.s']
            })
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r826_hasLG, r826_CreateLigationLookup, r826_CreateReverseLigationLookup) {
        var _r826_t0, _r826_t1;
        return r826_hasLG('connected-underscore') ? r826_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': r305_underscore.concat(r1_lsx('zf')(r305_underscore)),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r305_underscore,
                'right': r1_lsx('zf')
            })]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r830_hasLG, r830_CreateLigationLookup, r830_CreateReverseLigationLookup) {
        var _r830_t0, _r830_t1;
        return r830_hasLG('connected-tilde-as-wave') ? r830_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': [
                    'wave.lig.cf',
                    'wave.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asciiTilde'],
                'right': ['wave.lig.zf']
            }),
            r305_xn$chainrule$1aao({
                'left': ['asciiTilde'],
                'right': ['wave.lig.fc']
            }, {
                'left': ['asciiTilde'],
                'right': ['wave.lig.cf']
            })
        ]) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r836_hasLG, r836_CreateLigationLookup, r836_CreateReverseLigationLookup) {
        var _r836_t0, _r836_t1;
        return r836_hasLG('connected-hyphen') ? (r836_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['hyphen.lig.zf'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.zf']
            }),
            r305_xn$chainrule$1aao({
                'left': ['hyphen'],
                'right': ['hyphen.lig.fc']
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.zf']
            })
        ]), r836_CreateLigationLookup([
            r305_xn$chainrule$1aao({
                'left': ['hyphen.lig.jf'],
                'right': ['hyphen.lig.jc']
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.cc']
            }, {
                'left': ['hyphen.lig.fj'],
                'right': ['hyphen.lig.cj']
            }),
            r305_xn$chainrule$1aao({
                'left': ['hyphen.lig.jf'],
                'right': ['hyphen.lig.jc']
            }, {
                'left': ['hyphen.lig.fc'],
                'right': ['hyphen.lig.cc']
            }),
            r305_xn$chainrule$1aao({
                'left': ['hyphen.lig.zf'],
                'right': ['hyphen.lig.zc']
            }, {
                'left': ['hyphen.lig.fj'],
                'right': ['hyphen.lig.cj']
            })
        ])) : void 0;
    });
    r305_xn$LigGroup$2Lrc9(function (r849_hasLG, r849_CreateLigationLookup, r849_CreateReverseLigationLookup) {
        var _r849_t0, _r849_t1;
        return r849_hasLG('connected-number-sign') ? r849_CreateLigationLookup([r305_xn$chainrule$1aao({
                'left': [
                    'numberSign',
                    'numberSign.jr'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['numberSign'],
                'right': ['numberSign.jr']
            })]) : void 0;
    });
    return r305_xn$LigGroup$2Lrc9(function (r853_hasLG, r853_CreateLigationLookup, r853_CreateReverseLigationLookup) {
        var r853_chBar, r853_dp, r853_dLeft, r853_dRight, r853_dLeftHalf, r853_dRightHalf, r853_dMid, _r853_t0, _r853_t1, _r853_t2, _r853_t3, _r853_t4, _r853_t5, _r853_t6, _r853_t7;
        if (r853_hasLG('kern-bars')) {
            _r853_t0 = r305_anyBar;
            _r853_t1 = _r853_t0.length;
            _r853_t2 = 0;
            _r853_t6 = _r853_t2 < _r853_t1;
            while (_r853_t6) {
                _r853_t7 = (r853_chBar = _r853_t0[_r853_t2], r853_dp = [r853_chBar], r853_dLeft = r1_lsx('dLeft')(r853_dp), r853_dRight = r1_lsx('dRight')(r853_dp), r853_dLeftHalf = r1_lsx('dLeftHalf')(r853_dp), r853_dRightHalf = r1_lsx('dRightHalf')(r853_dp), r853_dMid = r1_lsx('dMid')(r853_dp), r853_CreateLigationLookup([
                    r305_xn$chainrule$1aao({
                        'left': r853_dRight.concat(r853_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r853_dp,
                        'right': r853_dMid
                    }, {
                        'left': r853_dp.concat(r853_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r853_dRight.concat(r853_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r853_dp,
                        'right': r853_dLeft
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r853_dp,
                        'right': r853_dRight
                    }, {
                        'left': r853_dp.concat(r853_dMid),
                        'right': r1_xn$lookaround$5sIl
                    })
                ]), r853_CreateLigationLookup([
                    r305_xn$chainrule$1aao({
                        'left': r853_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r853_dMid,
                        'right': r853_dRightHalf
                    }, {
                        'left': r853_dMid,
                        'right': r853_dLeftHalf
                    }, {
                        'left': r853_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r853_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r853_dMid,
                        'right': r853_dRightHalf
                    }, {
                        'left': r853_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r853_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r853_dMid,
                        'right': r853_dLeftHalf
                    }, {
                        'left': r853_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r305_xn$chainrule$1aao({
                        'left': r853_dRight,
                        'right': r853_dRightHalf
                    }, {
                        'left': r853_dLeft,
                        'right': r853_dLeftHalf
                    })
                ]), _r853_t2 = _r853_t2 + 1);
                _r853_t6 = _r853_t2 < _r853_t1;
            }
            return _r853_t7;
        } else
            return void 0;
    });
};
