'use strict';
import * as _s0_t0 from 'toposort';
import * as _s0_t1 from '../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as CreateEmptyTable
};
var _s0_t3;
export {
    _s0_t3 as QueryRelatedGlyphs
};
var _s0_t4;
export {
    _s0_t4 as FinalizeTable
};
var _s0_t5;
export {
    _s0_t5 as UkMapToLookup
};
var _s0_t6;
export {
    _s0_t6 as UkMap2ToLookup
};
var r1_CreateEmptyTable, r1_QueryRelatedGlyphs, r1_FinalizeTable, r1_UkMapToLookup, r1_UkMap2ToLookup, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r258_t) {
    var r258_n, r258_i, r258_a, _r258_t3, _r258_t4, _r258_t5, _r258_t6, _r258_t7, _r258_t8, _r258_t9, _r258_t10, _r258_t11, _r258_t12, _r258_t13, _r258_t14, _r258_t15, _r258_t16, _r258_t17, _r258_t18, _r258_t19, _r258_t20, _r258_t21, _r258_t22, _r258_t23, _r258_t24, _r258_t25, _r258_t26;
    var _r258_t0 = function () {
        _r258_t7 = function (_r258_t8) {
            _r258_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r258_t8
            };
        };
        _r258_t9 = r258_t instanceof Array;
        if (_r258_t9) {
            _r258_t10 = r258_n = r258_t.length;
            _r258_t11 = r258_i = 0;
            _r258_t12 = function (_r258_t14) {
                return _r258_t7(_r258_t14);
            };
            _r258_t13 = function (_r258_t15) {
                _r258_t16 = r258_i < r258_n;
                if (_r258_t16) {
                    _r258_t0 = function (_r258_t17) {
                        return _r258_t13(r258_i = r258_i + 1);
                    };
                    return {
                        'value': [
                            r258_i,
                            r258_t[r258_i]
                        ],
                        'done': false
                    };
                } else
                    return _r258_t12(_r258_t15);
            };
            return _r258_t13();
        } else {
            _r258_t18 = r258_a = Object.keys(r258_t);
            _r258_t19 = r258_n = r258_a.length;
            _r258_t20 = r258_i = 0;
            _r258_t21 = function (_r258_t23) {
                return _r258_t7(_r258_t23);
            };
            _r258_t22 = function (_r258_t24) {
                _r258_t25 = r258_i < r258_n;
                if (_r258_t25) {
                    _r258_t0 = function (_r258_t26) {
                        return _r258_t22(r258_i = r258_i + 1);
                    };
                    return {
                        'value': [
                            r258_a[r258_i],
                            r258_t[r258_a[r258_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r258_t21(_r258_t24);
            };
            return _r258_t22();
        }
    };
    var _r258_t1 = function (x) {
        try {
            return _r258_t0(x);
        } catch (ex) {
            return _r258_t2(ex);
        }
    };
    var _r258_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r258_t3 = this;
    else {
        _r258_t4 = function () {
            void 0;
        };
        _r258_t4.prototype = _r1_t9.prototype;
        _r258_t3 = new _r258_t4();
    }
    _r258_t3[Symbol.iterator] = function () {
        return _r258_t3;
    };
    _r258_t3.next = _r258_t1;
    _r258_t3.throw = function (x) {
        return _r258_t2(x);
    };
    return _r258_t3;
};
var r1_toposort = _s0_t0.default;
var _r1_t8 = _s0_t1;
var r1_AnyCv = _r1_t8.AnyCv;
var r1_Map = Map;
var r1_Set = Set;
_s0_t2 = r1_CreateEmptyTable = function () {
    var _r134_t0, _r134_t1;
    return new r1_LayoutTable();
};
var r1_LayoutTable = function (r136_Super) {
    var _r136_t0, _r136_t1;
    var r136_Constructor = function () {
        var _r137_t0, _r137_t1;
        return void 0;
    };
    var r136_Type = function () {
        var _r138_t0 = this;
        var _r138_t1 = arguments;
        r136_Constructor.apply(_r138_t0, _r138_t1);
        return void 0;
    };
    var r136_Symbol = Symbol;
    (function () {
        var r140_protectedTerms, _r140_t0, _r140_t1;
        r136_Type.protectedTerms = r140_protectedTerms = Object.create(r136_Super.protectedTerms || null);
        r136_Constructor = function () {
            var _r168_t1;
            var _r168_t0 = this;
            _r168_t0.languages = {};
            _r168_t0.features = {};
            _r168_t0.lookups = {};
            _r168_t0.lookupDep = [];
            _r168_t0.lookupOrder = [];
            return void 0;
        };
        r136_Type.prototype.pickLanguage = function (r174_tag) {
            var _r174_t1;
            var _r174_t0 = this;
            if (_r174_t0.languages[r174_tag])
                return _r174_t0.languages[r174_tag];
            var r174_lang = new r1_LayoutLanguage(r174_tag);
            _r174_t0.languages[r174_tag] = r174_lang;
            return r174_lang;
        };
        r136_Type.prototype.copyLanguage = function (r180_tag, r180_tagFrom) {
            var r180_feat, _r180_t4;
            var _r180_t3 = this;
            var r180_langFrom = _r180_t3.pickLanguage(r180_tagFrom);
            var r180_langTo = _r180_t3.pickLanguage(r180_tag);
            var _r180_t0 = r180_langFrom.features;
            var _r180_t1 = _r180_t0.length;
            var _r180_t2 = 0;
            while (_r180_t2 < _r180_t1) {
                r180_feat = _r180_t0[_r180_t2];
                r180_langTo.features.push(r180_feat);
                _r180_t2 = _r180_t2 + 1;
            }
            return r180_langTo;
        };
        r136_Type.prototype.createFeature = function (r188_tag) {
            var _r188_t1, _r188_t3;
            var _r188_t0 = this;
            var r188_feature = new r1_LayoutFeature(r188_tag);
            var r188_n = 0;
            var _r188_t2 = true;
            while (_r188_t2) {
                if (!_r188_t0.features[r188_tag + '_' + r188_n]) {
                    r188_feature.name = r188_tag + '_' + r188_n;
                    _r188_t0.features[r188_tag + '_' + r188_n] = r188_feature;
                    return r188_feature;
                }
                _r188_t3 = r188_n = r188_n + 1;
                _r188_t2 = true;
            }
            return _r188_t3;
        };
        r136_Type.prototype.addCommonFeature = function (r194_fea) {
            var _r194_t1;
            var _r194_t0 = this;
            var r194_dfltDflt = _r194_t0.pickLanguage('DFLT_DFLT');
            var r194_latnDflt = _r194_t0.pickLanguage('latn_DFLT');
            var r194_grekDflt = _r194_t0.pickLanguage('grek_DFLT');
            var r194_cyrlDflt = _r194_t0.pickLanguage('cyrl_DFLT');
            r194_dfltDflt.addFeature(r194_fea);
            r194_latnDflt.addFeature(r194_fea);
            r194_grekDflt.addFeature(r194_fea);
            r194_cyrlDflt.addFeature(r194_fea);
            return r194_fea;
        };
        r136_Type.prototype.createLookup = function (r200_data, r200__prefix) {
            var _r200_t1, _r200_t3;
            var _r200_t0 = this;
            var r200_prefix = r200__prefix || 'lookup/';
            var r200_n = 0;
            var _r200_t2 = true;
            while (_r200_t2) {
                if (!_r200_t0.lookups[r200_prefix + r200_n])
                    return _r200_t0.addLookupNoCheck(r200_prefix + r200_n, r200_data);
                _r200_t3 = r200_n = r200_n + 1;
                _r200_t2 = true;
            }
            return _r200_t3;
        };
        r136_Type.prototype.pickLookup = function (r206_name, r206_fallback) {
            var _r206_t1;
            var _r206_t0 = this;
            if (_r206_t0.lookups[r206_name])
                return _r206_t0.lookups[r206_name];
            return _r206_t0.addLookupNoCheck(r206_name, r206_fallback);
        };
        r136_Type.prototype.addLookupNoCheck = function (r212_name, r212_data) {
            var _r212_t1;
            var _r212_t0 = this;
            var r212_lookup = Object.fromEntries(Object.entries(r212_data));
            r212_lookup.name = r212_name;
            _r212_t0.lookups[r212_name] = r212_lookup;
            return r212_lookup;
        };
        r136_Type.prototype.setDependency = function (r218_a, r218_b) {
            var _r218_t1;
            var _r218_t0 = this;
            if (!r218_a.name)
                throw new Error('Invalid lookup');
            if (!r218_b.name)
                throw new Error('Invalid lookup');
            return _r218_t0.lookupDep.push([
                r218_a.name,
                r218_b.name
            ]);
        };
        r136_Type.prototype.beginBlock = function () {
            var _r224_t1;
            var _r224_t0 = this;
            return { 'existingLookupNames': new r1_Set(Object.keys(_r224_t0.lookups)) };
        };
        r136_Type.prototype.endBlock = function (r230_rec) {
            var r230_existing, r230_current, _r230_t2, _r230_t3, _r230_t5, _r230_t7, _r230_t8, _r230_t9;
            var _r230_t4 = this;
            var r230_currentLookupNames = new r1_Set(Object.keys(_r230_t4.lookups));
            var _r230_t0 = r230_rec.existingLookupNames[Symbol.iterator]();
            var _r230_t1 = void 0;
            var _r230_t6 = !(_r230_t1 = _r230_t0.next()).done;
            while (_r230_t6) {
                r230_existing = _r230_t1.value;
                _r230_t2 = r230_currentLookupNames[Symbol.iterator]();
                _r230_t3 = void 0;
                _r230_t8 = !(_r230_t3 = _r230_t2.next()).done;
                while (_r230_t8) {
                    _r230_t9 = (r230_current = _r230_t3.value, !r1_IsUtilityLookupId(r230_existing) && !r1_IsUtilityLookupId(r230_current) && !r230_rec.existingLookupNames.has(r230_current) ? _r230_t4.lookupDep.push([
                        r230_existing,
                        r230_current
                    ]) : void 0);
                    _r230_t8 = !(_r230_t3 = _r230_t2.next()).done;
                }
                _r230_t7 = _r230_t9;
                _r230_t6 = !(_r230_t1 = _r230_t0.next()).done;
            }
            return _r230_t7;
        };
        r136_Type.prototype.endBlockAtFront = function (r238_rec) {
            var r238_existing, r238_current, _r238_t2, _r238_t3, _r238_t5, _r238_t7, _r238_t8, _r238_t9;
            var _r238_t4 = this;
            var r238_currentLookupNames = new r1_Set(Object.keys(_r238_t4.lookups));
            var _r238_t0 = r238_rec.existingLookupNames[Symbol.iterator]();
            var _r238_t1 = void 0;
            var _r238_t6 = !(_r238_t1 = _r238_t0.next()).done;
            while (_r238_t6) {
                r238_existing = _r238_t1.value;
                _r238_t2 = r238_currentLookupNames[Symbol.iterator]();
                _r238_t3 = void 0;
                _r238_t8 = !(_r238_t3 = _r238_t2.next()).done;
                while (_r238_t8) {
                    _r238_t9 = (r238_current = _r238_t3.value, !r1_IsUtilityLookupId(r238_existing) && !r1_IsUtilityLookupId(r238_current) && !r238_rec.existingLookupNames.has(r238_current) ? _r238_t4.lookupDep.push([
                        r238_current,
                        r238_existing
                    ]) : void 0);
                    _r238_t8 = !(_r238_t3 = _r238_t2.next()).done;
                }
                _r238_t7 = _r238_t9;
                _r238_t6 = !(_r238_t1 = _r238_t0.next()).done;
            }
            return _r238_t7;
        };
        r136_Type.prototype.finalize = function () {
            var r246_front, r246_rear, r246_key, r246_lang, _r246_t2, _r246_t3, _r246_t6, _r246_t8, _r246_t10;
            var _r246_t7 = this;
            var r246_lns = new r1_Set(Object.keys(_r246_t7.lookups));
            var _r246_t0 = r246_lns[Symbol.iterator]();
            var _r246_t1 = void 0;
            while (!(_r246_t1 = _r246_t0.next()).done) {
                r246_front = _r246_t1.value;
                _r246_t2 = r246_lns[Symbol.iterator]();
                _r246_t3 = void 0;
                while (!(_r246_t3 = _r246_t2.next()).done) {
                    r246_rear = _r246_t3.value;
                    if (!r1_IsUtilityLookupId(r246_front) && r1_IsUtilityLookupId(r246_rear))
                        _r246_t7.lookupDep.push([
                            r246_front,
                            r246_rear
                        ]);
                }
            }
            _r246_t7.lookupOrder = r1_toposort(_r246_t7.lookupDep);
            var _r246_t4 = _r1_t2(_r246_t7.languages)[Symbol.iterator]();
            var _r246_t5 = void 0;
            var _r246_t9 = !(_r246_t5 = _r246_t4.next()).done;
            while (_r246_t9) {
                _r246_t10 = (_r246_t6 = _r246_t5.value, r246_key = _r246_t6[0], r246_lang = _r246_t6[1], r246_lang.features ? r246_lang.features.sort() : void 0);
                _r246_t9 = !(_r246_t5 = _r246_t4.next()).done;
            }
            return _r246_t10;
        };
        r136_Type.prototype.ChainRuleBuilder = function () {
            var _r260_t1;
            var _r260_t0 = this;
            var r260_table = _r260_t0;
            var r260_createNewLookup = function (r266_f, r266_t) {
                var _r266_t2, _r266_t3;
                var r266_subst = {};
                var _r266_t0 = 0;
                var _r266_t1 = r266_f.length;
                var r266_j = _r266_t0;
                while (r266_j < _r266_t1) {
                    r266_subst[r266_f[r266_j]] = r266_t[r266_j];
                    r266_j = r266_j + 1;
                }
                return r260_table.createLookup({
                    'type': 'gsub_single',
                    'substitutions': r266_subst
                }, r1_UtilityLookupPrefix);
            };
            var r260_getSubLookup = function (r269_left, r269_right) {
                var r269_found, r269_maxMatch, r269_lookupKeys, r269_name, r269_lookup, r269_st, r269_compatible, r269_matchCount, r269_j, _r269_t0, _r269_t1, _r269_t2, _r269_t3, _r269_t4, _r269_t5, _r269_t6, _r269_t7, _r269_t8, _r269_t9, _r269_t10, _r269_t11, _r269_t12;
                if (!r269_right)
                    return null;
                else if (typeof r269_right === 'string')
                    throw new Error('Invalid substitution');
                else if (r269_right instanceof Function)
                    return r260_getSubLookup(r269_left, r269_right(r269_left));
                else if (true) {
                    r269_found = null;
                    r269_maxMatch = 0;
                    r269_lookupKeys = Object.keys(r260_table.lookups).reverse();
                    _r269_t0 = r269_lookupKeys;
                    _r269_t1 = _r269_t0.length;
                    _r269_t2 = 0;
                    while (_r269_t2 < _r269_t1) {
                        r269_name = _r269_t0[_r269_t2];
                        if (r1_IsUtilityLookupId(r269_name)) {
                            r269_lookup = r260_table.lookups[r269_name];
                            r269_st = r269_lookup.substitutions;
                            r269_compatible = true;
                            r269_matchCount = 0;
                            _r269_t3 = 0;
                            _r269_t4 = r269_left.length;
                            r269_j = _r269_t3;
                            while (r269_j < _r269_t4) {
                                if (r269_st[r269_left[r269_j]] && r269_st[r269_left[r269_j]] !== r269_right[r269_j])
                                    r269_compatible = false;
                                if (r269_st[r269_left[r269_j]] === r269_right[r269_j])
                                    r269_matchCount = r269_matchCount + 1;
                                r269_j = r269_j + 1;
                            }
                            if (r269_compatible && (!r269_found || r269_matchCount > r269_maxMatch)) {
                                r269_found = r269_lookup;
                                r269_maxMatch = r269_matchCount;
                            }
                        }
                        _r269_t2 = _r269_t2 + 1;
                    }
                    if (r269_found) {
                        r269_st = r269_found.substitutions;
                        _r269_t5 = 0;
                        _r269_t6 = r269_left.length;
                        r269_j = _r269_t5;
                        while (r269_j < _r269_t6) {
                            r269_st[r269_left[r269_j]] = r269_right[r269_j];
                            r269_j = r269_j + 1;
                        }
                        return r269_found;
                    }
                    return r260_createNewLookup(r269_left, r269_right);
                } else
                    return void 0;
            };
            var r260_xn$chainrule$1aao = function () {
                var r276_term, r276_lookup, _r276_t6;
                var _r276_t7 = arguments;
                var r276_terms = [].slice.call(_r276_t7, 0).map(function (r277_x) {
                    var _r277_t0, _r277_t1;
                    return r277_x.left ? r277_x : {
                        'left': r277_x,
                        'right': null
                    };
                });
                var r276_rule = {
                    'match': [],
                    'apply': [],
                    'inputBegins': 0,
                    'inputEnds': 0
                };
                var r276_foundi = false;
                var r276_founde = false;
                var _r276_t0 = 0;
                var _r276_t1 = r276_terms.length;
                var r276_j = _r276_t0;
                while (r276_j < _r276_t1) {
                    if (!r276_foundi && r276_terms[r276_j].right) {
                        r276_rule.inputBegins = r276_j;
                        r276_foundi = true;
                    }
                    r276_j = r276_j + 1;
                }
                var _r276_t2 = r276_terms.length - 1;
                var _r276_t3 = 0;
                r276_j = _r276_t2;
                while (r276_j >= _r276_t3) {
                    if (!r276_founde && r276_terms[r276_j].right) {
                        r276_rule.inputEnds = r276_j + 1;
                        r276_founde = true;
                    }
                    r276_j = r276_j - 1;
                }
                var _r276_t4 = 0;
                var _r276_t5 = r276_terms.length;
                r276_j = _r276_t4;
                while (r276_j < _r276_t5) {
                    r276_term = r276_terms[r276_j];
                    r276_rule.match.push(Array.from(new r1_Set(r276_term.left)));
                    r276_lookup = r260_getSubLookup(r276_term.left, r276_term.right);
                    if (r276_lookup)
                        r276_rule.apply.push({
                            'at': r276_j,
                            'lookup': { 'name': r276_lookup.name }
                        });
                    r276_j = r276_j + 1;
                }
                return r276_rule;
            };
            var r260_xn$reverserule$3qIs = function () {
                var r284_term, r284_subst, r284_g, r284_toGlyphs, r284_k, _r284_t2, _r284_t3, _r284_t4, _r284_t5, _r284_t6, _r284_t7;
                var _r284_t8 = arguments;
                var r284_terms = [].slice.call(_r284_t8, 0).map(function (r285_x) {
                    var _r285_t0, _r285_t1;
                    return r285_x.left ? r285_x : {
                        'left': r285_x,
                        'right': null
                    };
                });
                var r284_rule = {
                    'match': [],
                    'to': [],
                    'inputIndex': 0
                };
                var r284_foundi = false;
                var _r284_t0 = 0;
                var _r284_t1 = r284_terms.length;
                var r284_j = _r284_t0;
                while (r284_j < _r284_t1) {
                    r284_term = r284_terms[r284_j];
                    r284_subst = new r1_Map();
                    _r284_t2 = r284_term.left;
                    _r284_t3 = _r284_t2.length;
                    _r284_t4 = 0;
                    while (_r284_t4 < _r284_t3) {
                        r284_g = _r284_t2[_r284_t4];
                        r284_subst.set(r284_g, r284_g);
                        _r284_t4 = _r284_t4 + 1;
                    }
                    if (r284_term.right) {
                        if (r284_foundi)
                            throw new Error('Duplicate substitutions in one reverse rule');
                        r284_foundi = true;
                        r284_rule.inputIndex = r284_j;
                        r284_toGlyphs = r284_term.right instanceof Function ? r284_term.right(r284_term.left) : true ? r284_term.right : void 0;
                        _r284_t5 = 0;
                        _r284_t6 = r284_term.left.length;
                        r284_k = _r284_t5;
                        while (r284_k < _r284_t6) {
                            r284_subst.set(r284_term.left[r284_k], r284_toGlyphs[r284_k] || r284_term.left[r284_k]);
                            r284_k = r284_k + 1;
                        }
                        r284_rule.to = Array.from(r284_subst.values());
                    }
                    r284_rule.match[r284_j] = Array.from(r284_subst.keys());
                    r284_j = r284_j + 1;
                }
                return r284_rule;
            };
            return [
                r260_xn$chainrule$1aao,
                r260_xn$reverserule$3qIs
            ];
        };
        return void 0;
    }.call(r136_Type.prototype));
    return r136_Type;
}(Object);
var r1_LayoutFeature = function (r293_Super) {
    var _r293_t0, _r293_t1;
    var r293_Constructor = function () {
        var _r294_t0, _r294_t1;
        return void 0;
    };
    var r293_Type = function () {
        var _r295_t0 = this;
        var _r295_t1 = arguments;
        r293_Constructor.apply(_r295_t0, _r295_t1);
        return void 0;
    };
    var r293_Symbol = Symbol;
    (function () {
        var r297_protectedTerms, _r297_t0, _r297_t1;
        r293_Type.protectedTerms = r297_protectedTerms = Object.create(r293_Super.protectedTerms || null);
        r293_Constructor = function (r325_tag) {
            var _r325_t1;
            var _r325_t0 = this;
            _r325_t0.tag = r325_tag;
            _r325_t0.name = r325_tag;
            _r325_t0.lookups = [];
            return void 0;
        };
        r293_Type.prototype.addLookup = function (r331_lookup) {
            var _r331_t1;
            var _r331_t0 = this;
            if (!r331_lookup.name)
                throw new Error('Invalid lookup');
            var r331_index = _r331_t0.lookups.indexOf(r331_lookup.name);
            if (r331_index < 0)
                _r331_t0.lookups.push(r331_lookup.name);
            return r331_lookup;
        };
        return void 0;
    }.call(r293_Type.prototype));
    return r293_Type;
}(Object);
var r1_LayoutLanguage = function (r338_Super) {
    var _r338_t0, _r338_t1;
    var r338_Constructor = function () {
        var _r339_t0, _r339_t1;
        return void 0;
    };
    var r338_Type = function () {
        var _r340_t0 = this;
        var _r340_t1 = arguments;
        r338_Constructor.apply(_r340_t0, _r340_t1);
        return void 0;
    };
    var r338_Symbol = Symbol;
    (function () {
        var r342_protectedTerms, _r342_t0, _r342_t1;
        r338_Type.protectedTerms = r342_protectedTerms = Object.create(r338_Super.protectedTerms || null);
        r338_Constructor = function (r370_tag) {
            var _r370_t1;
            var _r370_t0 = this;
            _r370_t0.tag = r370_tag;
            _r370_t0.features = [];
            return void 0;
        };
        r338_Type.prototype.addFeature = function (r376_feature) {
            var _r376_t1;
            var _r376_t0 = this;
            if (!r376_feature.name)
                throw new Error('Invalid feature');
            var r376_index = _r376_t0.features.indexOf(r376_feature.name);
            if (r376_index < 0)
                _r376_t0.features.push(r376_feature.name);
            return r376_feature;
        };
        return void 0;
    }.call(r338_Type.prototype));
    return r338_Type;
}(Object);
var r1_UtilityLookupPrefix = '.utility-single/';
var r1_IsUtilityLookupId = function (r382_name) {
    var _r382_t0, _r382_t1;
    return r382_name.slice(0, r1_UtilityLookupPrefix.length) === r1_UtilityLookupPrefix;
};
_s0_t3 = r1_QueryRelatedGlyphs = function (r384_glyphs, r384_para, r384_entries) {
    var r384_gid, r384_gr, _r384_t3, _r384_t4, _r384_t5, _r384_t6, _r384_t7;
    var r384_sink = [];
    var _r384_t0 = r384_entries;
    var _r384_t1 = _r384_t0.length;
    var _r384_t2 = 0;
    while (_r384_t2 < _r384_t1) {
        r384_gid = _r384_t0[_r384_t2];
        if (r384_glyphs[r384_gid]) {
            r384_sink.push(r384_gid);
            if (r384_para.enableCvSs) {
                _r384_t3 = r1_AnyCv.query(r384_glyphs[r384_gid]);
                _r384_t4 = _r384_t3.length;
                _r384_t5 = 0;
                while (_r384_t5 < _r384_t4) {
                    r384_gr = _r384_t3[_r384_t5];
                    r384_sink.push(r384_gr.get(r384_glyphs[r384_gid]));
                    _r384_t5 = _r384_t5 + 1;
                }
            }
        }
        _r384_t2 = _r384_t2 + 1;
    }
    return r384_sink;
};
_s0_t4 = r1_FinalizeTable = function (r390_table) {
    var r390_key, r390_lang, _r390_t2, _r390_t3, _r390_t4, _r390_t6;
    r390_table.lookupOrder = r1_toposort(r390_table.lookupDep);
    var _r390_t0 = _r1_t2(r390_table.languages)[Symbol.iterator]();
    var _r390_t1 = void 0;
    var _r390_t5 = !(_r390_t1 = _r390_t0.next()).done;
    while (_r390_t5) {
        _r390_t6 = (_r390_t2 = _r390_t1.value, r390_key = _r390_t2[0], r390_lang = _r390_t2[1], r390_lang.features ? r390_lang.features.sort() : void 0);
        _r390_t5 = !(_r390_t1 = _r390_t0.next()).done;
    }
    return _r390_t6;
};
_s0_t5 = r1_UkMapToLookup = function (r395_m) {
    var r395_k, r395_v, _r395_t2, _r395_t3, _r395_t4;
    var r395_l = [];
    var r395_r = [];
    var _r395_t0 = Object.entries(r395_m)[Symbol.iterator]();
    var _r395_t1 = void 0;
    while (!(_r395_t1 = _r395_t0.next()).done) {
        _r395_t2 = _r395_t1.value;
        r395_k = _r395_t2[0];
        r395_v = _r395_t2[1];
        r395_l.push(r395_k);
        r395_r.push(r395_v);
    }
    return {
        'left': r395_l,
        'right': r395_r
    };
};
_s0_t6 = r1_UkMap2ToLookup = function (r398_mm) {
    var r398_g1, r398_second, r398_g2, r398_gTo, _r398_t2, _r398_t3, _r398_t4, _r398_t5, _r398_t6, _r398_t7;
    var r398_res = [];
    var _r398_t0 = Object.entries(r398_mm)[Symbol.iterator]();
    var _r398_t1 = void 0;
    while (!(_r398_t1 = _r398_t0.next()).done) {
        _r398_t2 = _r398_t1.value;
        r398_g1 = _r398_t2[0];
        r398_second = _r398_t2[1];
        _r398_t3 = Object.entries(r398_second)[Symbol.iterator]();
        _r398_t4 = void 0;
        while (!(_r398_t4 = _r398_t3.next()).done) {
            _r398_t5 = _r398_t4.value;
            r398_g2 = _r398_t5[0];
            r398_gTo = _r398_t5[1];
            r398_res.push({
                'from': [
                    r398_g1,
                    r398_g2
                ],
                'to': r398_gTo
            });
        }
    }
    return r398_res;
};
