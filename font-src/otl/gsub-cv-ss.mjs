'use strict';
import * as _s0_t0 from '../support/gr.mjs';
var _s0_t1;
export {
    _s0_t1 as buildCVSS
};
var r1_buildCVSS, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r371_t) {
    var r371_n, r371_i, r371_a, _r371_t3, _r371_t4, _r371_t5, _r371_t6, _r371_t7, _r371_t8, _r371_t9, _r371_t10, _r371_t11, _r371_t12, _r371_t13, _r371_t14, _r371_t15, _r371_t16, _r371_t17, _r371_t18, _r371_t19, _r371_t20, _r371_t21, _r371_t22, _r371_t23, _r371_t24, _r371_t25, _r371_t26;
    var _r371_t0 = function () {
        _r371_t7 = function (_r371_t8) {
            _r371_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r371_t8
            };
        };
        _r371_t9 = r371_t instanceof Array;
        if (_r371_t9) {
            _r371_t10 = r371_n = r371_t.length;
            _r371_t11 = r371_i = 0;
            _r371_t12 = function (_r371_t14) {
                return _r371_t7(_r371_t14);
            };
            _r371_t13 = function (_r371_t15) {
                _r371_t16 = r371_i < r371_n;
                if (_r371_t16) {
                    _r371_t0 = function (_r371_t17) {
                        return _r371_t13(r371_i = r371_i + 1);
                    };
                    return {
                        'value': [
                            r371_i,
                            r371_t[r371_i]
                        ],
                        'done': false
                    };
                } else
                    return _r371_t12(_r371_t15);
            };
            return _r371_t13();
        } else {
            _r371_t18 = r371_a = Object.keys(r371_t);
            _r371_t19 = r371_n = r371_a.length;
            _r371_t20 = r371_i = 0;
            _r371_t21 = function (_r371_t23) {
                return _r371_t7(_r371_t23);
            };
            _r371_t22 = function (_r371_t24) {
                _r371_t25 = r371_i < r371_n;
                if (_r371_t25) {
                    _r371_t0 = function (_r371_t26) {
                        return _r371_t22(r371_i = r371_i + 1);
                    };
                    return {
                        'value': [
                            r371_a[r371_i],
                            r371_t[r371_a[r371_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r371_t21(_r371_t24);
            };
            return _r371_t22();
        }
    };
    var _r371_t1 = function (x) {
        try {
            return _r371_t0(x);
        } catch (ex) {
            return _r371_t2(ex);
        }
    };
    var _r371_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r371_t3 = this;
    else {
        _r371_t4 = function () {
            void 0;
        };
        _r371_t4.prototype = _r1_t9.prototype;
        _r371_t3 = new _r371_t4();
    }
    _r371_t3[Symbol.iterator] = function () {
        return _r371_t3;
    };
    _r371_t3.next = _r371_t1;
    _r371_t3.throw = function (x) {
        return _r371_t2(x);
    };
    return _r371_t3;
};
var _r1_t8 = _s0_t0;
var r1_AnyCv = _r1_t8.AnyCv;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$lookaround$5sIl = null;
var r1_CvLookupManager = function (r266_Super) {
    var _r266_t0, _r266_t1;
    var r266_Constructor = function () {
        var _r267_t0, _r267_t1;
        return void 0;
    };
    var r266_Type = function () {
        var _r268_t0 = this;
        var _r268_t1 = arguments;
        r266_Constructor.apply(_r268_t0, _r268_t1);
        return void 0;
    };
    var r266_Symbol = Symbol;
    (function () {
        var r270_protectedTerms, _r270_t0, _r270_t1;
        r266_Type.protectedTerms = r270_protectedTerms = Object.create(r266_Super.protectedTerms || null);
        r266_Constructor = function (r298_table, r298_tag, r298_feature) {
            var _r298_t1;
            var _r298_t0 = this;
            _r298_t0.table = r298_table;
            _r298_t0.tag = r298_tag;
            _r298_t0.feature = r298_feature;
            _r298_t0.decompositionLookup = null;
            _r298_t0.altrenatesLookup = null;
            _r298_t0.singleSubstLookups = [];
            return void 0;
        };
        r266_Type.prototype.addDecompositionLookup = function (r304_lookup) {
            var _r304_t1;
            var _r304_t0 = this;
            _r304_t0.decompositionLookups.push(r304_lookup);
            return _r304_t0.feature.addLookup(r304_lookup);
        };
        r266_Type.prototype.createDecompositionSubst = function () {
            var _r310_t1;
            var _r310_t0 = this;
            if (_r310_t0.decompositionLookup)
                return _r310_t0.decompositionLookup;
            var r310_lookupName = 'lookup_cv_decompose_' + _r310_t0.tag;
            var r310_lookup = _r310_t0.table.pickLookup(r310_lookupName, {
                'type': 'gsub_multiple',
                'substitutions': {}
            });
            _r310_t0.feature.addLookup(r310_lookup);
            _r310_t0.decompositionLookup = r310_lookup;
            return r310_lookup;
        };
        r266_Type.prototype.createAlternateSubst = function () {
            var _r316_t1;
            var _r316_t0 = this;
            if (_r316_t0.altrenatesLookup)
                return _r316_t0.altrenatesLookup;
            var r316_lookupName = 'lookup_cv_alternates_' + _r316_t0.tag;
            var r316_lookup = _r316_t0.table.pickLookup(r316_lookupName, {
                'type': 'gsub_alternate',
                'substitutions': {}
            });
            _r316_t0.feature.addLookup(r316_lookup);
            _r316_t0.altrenatesLookup = r316_lookup;
            return r316_lookup;
        };
        r266_Type.prototype.createSingleSubstFor = function (r322_rank) {
            var _r322_t1;
            var _r322_t0 = this;
            if (_r322_t0.singleSubstLookups[r322_rank])
                return _r322_t0.singleSubstLookups[r322_rank];
            var r322_lookupName = 'lookup_cv_single_' + _r322_t0.tag + '_' + r322_rank;
            var r322_lookup = _r322_t0.table.pickLookup(r322_lookupName, {
                'type': 'gsub_single',
                'substitutions': {}
            });
            _r322_t0.singleSubstLookups[r322_rank] = r322_lookup;
            return r322_lookup;
        };
        r266_Type.prototype.linkDeps = function () {
            var r328_lookup, _r328_t4, _r328_t6;
            var _r328_t3 = this;
            if (_r328_t3.decompositionLookup)
                _r328_t3.table.setDependency(_r328_t3.decompositionLookup, _r328_t3.altrenatesLookup);
            var _r328_t0 = _r328_t3.singleSubstLookups;
            var _r328_t1 = _r328_t0.length;
            var _r328_t2 = 0;
            var _r328_t5 = _r328_t2 < _r328_t1;
            while (_r328_t5) {
                _r328_t6 = (r328_lookup = _r328_t0[_r328_t2], r328_lookup ? _r328_t3.table.setDependency(_r328_t3.altrenatesLookup, r328_lookup) : void 0, _r328_t2 = _r328_t2 + 1);
                _r328_t5 = _r328_t2 < _r328_t1;
            }
            return _r328_t6;
        };
        r266_Type.prototype.linkCrossDeps = function (r335_other) {
            var r335_lookup, _r335_t4, _r335_t6;
            var _r335_t3 = this;
            _r335_t3.table.setDependency(_r335_t3.altrenatesLookup, r335_other.altrenatesLookup);
            var _r335_t0 = _r335_t3.singleSubstLookups;
            var _r335_t1 = _r335_t0.length;
            var _r335_t2 = 0;
            var _r335_t5 = _r335_t2 < _r335_t1;
            while (_r335_t5) {
                _r335_t6 = (r335_lookup = _r335_t0[_r335_t2], r335_lookup ? _r335_t3.table.setDependency(r335_lookup, r335_other.altrenatesLookup) : void 0, _r335_t2 = _r335_t2 + 1);
                _r335_t5 = _r335_t2 < _r335_t1;
            }
            return _r335_t6;
        };
        r266_Type.compare = function (r342_a, r342_b) {
            var _r342_t0, _r342_t1;
            if (r342_a.tag < r342_b.tag)
                return -1;
            if (r342_a.tag > r342_b.tag)
                return 1;
            return 0;
        };
        return void 0;
    }.call(r266_Type.prototype));
    return r266_Type;
}(Object);
_s0_t1 = r1_buildCVSS = function (r344_gsub, r344_para, r344_glyphStore) {
    var _r344_t0, _r344_t1, _r344_t2, _r344_tag3, _r344_t4, _r344_tag5, _r344_t6, _r344_tag7, _r344_t8, _r344_tag9, _r344_t10, _r344_tag11;
    var r344_rec = r344_gsub.beginBlock();
    var r344_cvs = new r1_Map();
    (function () {
        var r346_name, r346_prime, r346_feature, r346_cvLookupManager, _r346_t2, _r346_t4;
        var _r346_t0 = r344_para.variants.primes[Symbol.iterator]();
        var _r346_t1 = void 0;
        var _r346_t3 = !(_r346_t1 = _r346_t0.next()).done;
        while (_r346_t3) {
            _r346_t4 = (_r346_t2 = _r346_t1.value, r346_name = _r346_t2[0], r346_prime = _r346_t2[1], r346_prime.tag ? (r346_feature = r344_gsub.addCommonFeature(r344_gsub.createFeature(r346_prime.tag)), r346_cvLookupManager = new r1_CvLookupManager(r344_gsub, r346_prime.tag, r346_feature), r344_cvs.set(r346_prime.tag, r346_cvLookupManager)) : void 0);
            _r346_t3 = !(_r346_t1 = _r346_t0.next()).done;
        }
        return _r346_t4;
    }());
    (function () {
        var r349_gn, r349_glyph, r349_parts, r349_part, r349_gPart, r349_gr, r349_lookup, _r349_t2, _r349_t3, _r349_t4, _r349_t5, _r349_t6, _r349_t7, _r349_t8, _r349_t10, _r349_t11, _r349_t12, _r349_t13;
        var _r349_t0 = r344_glyphStore.namedEntries()[Symbol.iterator]();
        var _r349_t1 = void 0;
        var _r349_t9 = !(_r349_t1 = _r349_t0.next()).done;
        while (_r349_t9) {
            _r349_t2 = _r349_t1.value;
            r349_gn = _r349_t2[0];
            r349_glyph = _r349_t2[1];
            r349_parts = r1_CvDecompose.get(r349_glyph);
            if (r349_parts) {
                _r349_t3 = r349_parts;
                _r349_t4 = _r349_t3.length;
                _r349_t5 = 0;
                _r349_t12 = _r349_t5 < _r349_t4;
                while (_r349_t12) {
                    r349_part = _r349_t3[_r349_t5];
                    r349_gPart = r344_glyphStore.queryByNameEnsured(r349_part);
                    _r349_t6 = r1_AnyCv.query(r349_gPart);
                    _r349_t7 = _r349_t6.length;
                    _r349_t8 = 0;
                    while (_r349_t8 < _r349_t7) {
                        r349_gr = _r349_t6[_r349_t8];
                        if (r349_gr.tag) {
                            r349_lookup = r344_cvs.get(r349_gr.tag).createDecompositionSubst();
                            if (!r349_lookup.substitutions[r349_gn])
                                r349_lookup.substitutions[r349_gn] = r349_parts;
                        }
                        _r349_t8 = _r349_t8 + 1;
                    }
                    _r349_t13 = _r349_t5 = _r349_t5 + 1;
                    _r349_t12 = _r349_t5 < _r349_t4;
                }
                _r349_t11 = _r349_t13;
            }
            _r349_t10 = _r349_t11;
            _r349_t9 = !(_r349_t1 = _r349_t0.next()).done;
        }
        return _r349_t10;
    }());
    (function () {
        var r355_name, r355_prime, r355_vn, r355_variant, r355_gn, r355_glyph, r355_gr, r355_subst, r355_cvAlt, _r355_t2, _r355_t3, _r355_t4, _r355_t5, _r355_t8, _r355_t9, _r355_t10, _r355_t11, _r355_t13, _r355_t14, _r355_t15, _r355_t16;
        var r355_cvGrs = [];
        var _r355_t0 = r344_para.variants.primes[Symbol.iterator]();
        var _r355_t1 = void 0;
        while (!(_r355_t1 = _r355_t0.next()).done) {
            _r355_t2 = _r355_t1.value;
            r355_name = _r355_t2[0];
            r355_prime = _r355_t2[1];
            _r355_t3 = r355_prime.variants[Symbol.iterator]();
            _r355_t4 = void 0;
            while (!(_r355_t4 = _r355_t3.next()).done) {
                _r355_t5 = _r355_t4.value;
                r355_vn = _r355_t5[0];
                r355_variant = _r355_t5[1];
                if (r355_variant.tag && r355_variant.rank)
                    r355_cvGrs.push(r355_variant);
            }
        }
        r355_cvGrs.sort(r1_AnyCv.compare);
        var _r355_t6 = r344_glyphStore.namedEntries()[Symbol.iterator]();
        var _r355_t7 = void 0;
        var _r355_t12 = !(_r355_t7 = _r355_t6.next()).done;
        while (_r355_t12) {
            _r355_t8 = _r355_t7.value;
            r355_gn = _r355_t8[0];
            r355_glyph = _r355_t8[1];
            if (!r1_CvDecompose.get(r355_glyph)) {
                _r355_t9 = r355_cvGrs;
                _r355_t10 = _r355_t9.length;
                _r355_t11 = 0;
                _r355_t15 = _r355_t11 < _r355_t10;
                while (_r355_t15) {
                    _r355_t16 = (r355_gr = _r355_t9[_r355_t11], r355_subst = r355_gr.get(r355_glyph), r355_subst && r355_subst !== r355_gn ? (r355_cvAlt = r344_cvs.get(r355_gr.tag).createAlternateSubst(), !r355_cvAlt.substitutions[r355_gn] ? r355_cvAlt.substitutions[r355_gn] = [] : void 0, r355_cvAlt.substitutions[r355_gn][r355_gr.rank - 1] = r344_glyphStore.ensureExists(r355_subst)) : void 0, _r355_t11 = _r355_t11 + 1);
                    _r355_t15 = _r355_t11 < _r355_t10;
                }
                _r355_t14 = _r355_t16;
            }
            _r355_t13 = _r355_t14;
            _r355_t12 = !(_r355_t7 = _r355_t6.next()).done;
        }
        return _r355_t13;
    }());
    (function () {
        var r361_name, r361_composition, r361_feature, r361_decomp, r361_ssGrs, r361_prime, r361_pv, r361_dl, r361_gr, r361_cvSingle, r361_gn, r361_glyph, r361_subst, _r361_t2, _r361_t3, _r361_t4, _r361_t5, _r361_t6, _r361_t7, _r361_t8, _r361_t9, _r361_t10, _r361_t11, _r361_t12, _r361_t13, _r361_t14, _r361_t15, _r361_t17, _r361_t18, _r361_t19, _r361_t20, _r361_t21, _r361_t22, _r361_t23;
        var _r361_t0 = r344_para.variants.composites[Symbol.iterator]();
        var _r361_t1 = void 0;
        var _r361_t16 = !(_r361_t1 = _r361_t0.next()).done;
        while (_r361_t16) {
            _r361_t2 = _r361_t1.value;
            r361_name = _r361_t2[0];
            r361_composition = _r361_t2[1];
            if (r361_composition.tag) {
                r361_feature = r344_gsub.addCommonFeature(r344_gsub.createFeature(r361_composition.tag));
                r361_decomp = r361_composition.decompose(r344_para, r344_para.variants.selectorTree);
                r361_ssGrs = [];
                _r361_t3 = r361_decomp;
                _r361_t4 = _r361_t3.length;
                _r361_t5 = 0;
                while (_r361_t5 < _r361_t4) {
                    _r361_t6 = _r361_t3[_r361_t5];
                    r361_prime = _r361_t6[0];
                    r361_pv = _r361_t6[1];
                    if (r361_pv.tag && r361_pv.rank) {
                        r361_ssGrs.push(r361_pv);
                        r361_dl = r344_cvs.get(r361_pv.tag).decompositionLookup;
                        if (r361_dl)
                            r361_feature.addLookup(r361_dl);
                    }
                    _r361_t5 = _r361_t5 + 1;
                }
                r361_ssGrs.sort(r1_AnyCv.compare);
                _r361_t7 = r361_ssGrs;
                _r361_t8 = _r361_t7.length;
                _r361_t9 = 0;
                while (_r361_t9 < _r361_t8) {
                    r361_gr = _r361_t7[_r361_t9];
                    r361_cvSingle = r344_cvs.get(r361_gr.tag).createSingleSubstFor(r361_gr.rank);
                    r361_feature.addLookup(r361_cvSingle);
                    _r361_t9 = _r361_t9 + 1;
                }
                _r361_t10 = r344_glyphStore.namedEntries()[Symbol.iterator]();
                _r361_t11 = void 0;
                _r361_t19 = !(_r361_t11 = _r361_t10.next()).done;
                while (_r361_t19) {
                    _r361_t12 = _r361_t11.value;
                    r361_gn = _r361_t12[0];
                    r361_glyph = _r361_t12[1];
                    if (!r1_CvDecompose.get(r361_glyph)) {
                        _r361_t13 = r361_ssGrs;
                        _r361_t14 = _r361_t13.length;
                        _r361_t15 = 0;
                        _r361_t22 = _r361_t15 < _r361_t14;
                        while (_r361_t22) {
                            _r361_t23 = (r361_gr = _r361_t13[_r361_t15], r361_subst = r361_gr.get(r361_glyph), r361_subst && r361_subst !== r361_gn ? (r361_cvSingle = r344_cvs.get(r361_gr.tag).createSingleSubstFor(r361_gr.rank), r361_cvSingle.substitutions[r361_gn] = r344_glyphStore.ensureExists(r361_subst)) : void 0, _r361_t15 = _r361_t15 + 1);
                            _r361_t22 = _r361_t15 < _r361_t14;
                        }
                        _r361_t21 = _r361_t23;
                    }
                    _r361_t20 = _r361_t21;
                    _r361_t19 = !(_r361_t11 = _r361_t10.next()).done;
                }
                _r361_t18 = _r361_t20;
            }
            _r361_t17 = _r361_t18;
            _r361_t16 = !(_r361_t1 = _r361_t0.next()).done;
        }
        return _r361_t17;
    }());
    (function () {
        var r368_cv, r368_st, r368_k, r368_v, r368_idx, _r368_t3, _r368_t4, _r368_t5, _r368_t6, _r368_t7, _r368_t9;
        var r368_sortedCvs = Array.from(r344_cvs.values());
        r368_sortedCvs.sort(r1_CvLookupManager.compare);
        var _r368_t0 = r368_sortedCvs;
        var _r368_t1 = _r368_t0.length;
        var _r368_t2 = 0;
        while (_r368_t2 < _r368_t1) {
            r368_cv = _r368_t0[_r368_t2];
            r368_st = r368_cv.altrenatesLookup.substitutions;
            _r368_t3 = _r1_t2(r368_st)[Symbol.iterator]();
            _r368_t4 = void 0;
            while (!(_r368_t4 = _r368_t3.next()).done) {
                _r368_t5 = _r368_t4.value;
                r368_k = _r368_t5[0];
                r368_v = _r368_t5[1];
                _r368_t6 = 0;
                _r368_t7 = r368_v.length;
                r368_idx = _r368_t6;
                while (r368_idx < _r368_t7) {
                    if (!r368_v[r368_idx])
                        r368_v[r368_idx] = r368_k;
                    r368_idx = r368_idx + 1;
                }
            }
            r368_cv.linkDeps();
            _r368_t2 = _r368_t2 + 1;
        }
        var r368_i = 1;
        var _r368_t8 = r368_i < r368_sortedCvs.length;
        while (_r368_t8) {
            _r368_t9 = (r368_sortedCvs[r368_i - 1].linkCrossDeps(r368_sortedCvs[r368_i]), r368_i = r368_i + 1);
            _r368_t8 = r368_i < r368_sortedCvs.length;
        }
        return _r368_t9;
    }());
    r344_gsub.endBlock(r344_rec);
    return r344_cvs;
};
var r1_objectIsNotEmpty = function (r374_obj) {
    var _r374_t0, _r374_t1;
    return r374_obj && Object.keys(r374_obj).length;
};
