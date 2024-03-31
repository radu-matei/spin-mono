'use strict';
var _s0_t0;
export {
    _s0_t0 as buildMarkMkmk
};
var r1_buildMarkMkmk, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_Map = Map;
var r1_Set = Set;
var r1_MarkClasses = [
    'above',
    'tieAbove',
    'leaningAbove',
    'topLeft',
    'topRight',
    'grekUpperTonos',
    'aboveBraceL',
    'aboveBraceR',
    'below',
    'tieBelow',
    'leaningBelow',
    'bottomLeft',
    'bottomRight',
    'trailing',
    'lf',
    'belowBraceL',
    'belowBraceR',
    'overlay',
    'slash',
    'strike',
    'cvDecompose',
    'enclosureInner',
    'enclosureInnerFirstHalf',
    'enclosureInnerSecondHalf',
    'fracBuildUp'
];
var r1_MarkInteractions = new r1_Map([
    [
        'aboveBraceL',
        [
            'aboveBraceL',
            'above',
            'tieAbove',
            'leaningAbove',
            'topLeft',
            'topRight',
            'grekUpperTonos'
        ]
    ],
    [
        'aboveBraceR',
        [
            'aboveBraceR',
            'above',
            'tieAbove',
            'leaningAbove',
            'topLeft',
            'topRight',
            'grekUpperTonos'
        ]
    ],
    [
        'belowBraceL',
        [
            'belowBraceL',
            'below',
            'tieBelow',
            'leaningBelow',
            'bottomLeft',
            'bottomRight',
            'trailing',
            'lf'
        ]
    ],
    [
        'belowBraceR',
        [
            'belowBraceR',
            'below',
            'tieBelow',
            'leaningBelow',
            'bottomLeft',
            'bottomRight',
            'trailing',
            'lf'
        ]
    ]
]);
var r1_MkmkStackingLimit = new r1_Set([
    'above',
    'below'
]);
_s0_t0 = r1_buildMarkMkmk = function (r132_gpos, r132_glyphStore, r132_markGlyphs) {
    var r132_cls, r132_markLookup, r132_mkmkLookup, r132_gn, r132_glyph, r132_lookup, r132_interactionMarkSet, r132_includeSet, r132_ignoreSet, r132_c, _r132_t3, _r132_t4, _r132_t5, _r132_t9, _r132_t10, _r132_t11, _r132_t14, _r132_t15, _r132_t18, _r132_t19, _r132_t20, _r132_t21, _r132_t22, _r132_t23, _r132_t25;
    var r132_validMarkClasses = new r1_Set(r1_MarkClasses);
    var r132_mark = {
        'feature': r132_gpos.addCommonFeature(r132_gpos.createFeature('mark')),
        'lookupMap': new r1_Map(),
        'createLookup': function () {
            var _r133_t0, _r133_t1;
            return {
                'type': 'gpos_mark_to_base',
                'marks': {},
                'bases': {}
            };
        }
    };
    var r132_mkmk = {
        'feature': r132_gpos.addCommonFeature(r132_gpos.createFeature('mkmk')),
        'lookupMap': new r1_Map(),
        'createLookup': function () {
            var _r134_t0, _r134_t1;
            return {
                'type': 'gpos_mark_to_mark',
                'marks': {},
                'bases': {}
            };
        }
    };
    var _r132_t0 = r1_MarkClasses;
    var _r132_t1 = _r132_t0.length;
    var _r132_t2 = 0;
    while (_r132_t2 < _r132_t1) {
        r132_cls = _r132_t0[_r132_t2];
        r132_markLookup = r1_ensureLookup(r132_gpos, r132_mark, r132_cls);
        r132_mkmkLookup = r1_ensureLookup(r132_gpos, r132_mkmk, r132_cls);
        _r132_t3 = r132_glyphStore.namedEntries()[Symbol.iterator]();
        _r132_t4 = void 0;
        while (!(_r132_t4 = _r132_t3.next()).done) {
            _r132_t5 = _r132_t4.value;
            r132_gn = _r132_t5[0];
            r132_glyph = _r132_t5[1];
            if (r132_glyph.markAnchors[r132_cls]) {
                r132_markGlyphs.all.add(r132_gn);
                r132_markGlyphs.markAttachClassDef.set(r132_gn, r132_cls);
                r1_addMarkAnchor(r132_markLookup, r132_gn, r132_cls, r132_glyph.markAnchors[r132_cls]);
                r1_addMarkAnchor(r132_mkmkLookup, r132_gn, r132_cls, r132_glyph.markAnchors[r132_cls]);
            }
        }
        _r132_t2 = _r132_t2 + 1;
    }
    var _r132_t6 = r1_MarkClasses;
    var _r132_t7 = _r132_t6.length;
    var _r132_t8 = 0;
    while (_r132_t8 < _r132_t7) {
        r132_cls = _r132_t6[_r132_t8];
        r132_markLookup = r1_ensureLookup(r132_gpos, r132_mark, r132_cls);
        r132_mkmkLookup = r1_ensureLookup(r132_gpos, r132_mkmk, r132_cls);
        _r132_t9 = r132_glyphStore.namedEntries()[Symbol.iterator]();
        _r132_t10 = void 0;
        while (!(_r132_t10 = _r132_t9.next()).done) {
            _r132_t11 = _r132_t10.value;
            r132_gn = _r132_t11[0];
            r132_glyph = _r132_t11[1];
            if (r132_glyph.baseAnchors[r132_cls])
                if (r132_markGlyphs.all.has(r132_gn))
                    r1_addBaseAnchor(r132_mkmkLookup, r132_gn, r132_cls, r132_glyph.baseAnchors[r132_cls]);
                else
                    r1_addBaseAnchor(r132_markLookup, r132_gn, r132_cls, r132_glyph.baseAnchors[r132_cls]);
        }
        _r132_t8 = _r132_t8 + 1;
    }
    var _r132_t12 = r132_mark.lookupMap.values()[Symbol.iterator]();
    var _r132_t13 = void 0;
    while (!(_r132_t13 = _r132_t12.next()).done) {
        r132_markLookup = _r132_t13.value;
        _r132_t14 = r132_mkmk.lookupMap.values()[Symbol.iterator]();
        _r132_t15 = void 0;
        while (!(_r132_t15 = _r132_t14.next()).done) {
            r132_mkmkLookup = _r132_t15.value;
            r132_gpos.setDependency(r132_markLookup, r132_mkmkLookup);
        }
    }
    var _r132_t16 = r132_mkmk.lookupMap[Symbol.iterator]();
    var _r132_t17 = void 0;
    var _r132_t24 = !(_r132_t17 = _r132_t16.next()).done;
    while (_r132_t24) {
        _r132_t18 = _r132_t17.value;
        r132_cls = _r132_t18[0];
        r132_lookup = _r132_t18[1];
        r132_interactionMarkSet = new r1_Set(r1_MarkInteractions.get(r132_cls) || [r132_cls]);
        r132_includeSet = new r1_Set();
        r132_ignoreSet = new r1_Set();
        _r132_t19 = r132_markGlyphs.markAttachClassDef[Symbol.iterator]();
        _r132_t20 = void 0;
        while (!(_r132_t20 = _r132_t19.next()).done) {
            _r132_t21 = _r132_t20.value;
            r132_gn = _r132_t21[0];
            r132_c = _r132_t21[1];
            if (r132_interactionMarkSet.has(r132_c))
                r132_includeSet.add(r132_gn);
            else
                r132_ignoreSet.add(r132_gn);
        }
        r132_lookup.ignoreGlyphs = Array.from(r132_ignoreSet);
        _r132_t25 = r132_interactionMarkSet.size > 1 ? r132_markGlyphs.markGlyphSets.push(Array.from(r132_includeSet)) : void 0;
        _r132_t24 = !(_r132_t17 = _r132_t16.next()).done;
    }
    return _r132_t25;
};
var r1_ensureLookup = function (r143_gpos, r143_feat, r143_cls) {
    var _r143_t0, _r143_t1;
    var r143_existing = r143_feat.lookupMap.get(r143_cls);
    if (r143_existing)
        return r143_existing;
    var r143_lookup = r143_gpos.createLookup(r143_feat.createLookup());
    r143_feat.feature.addLookup(r143_lookup);
    r143_feat.lookupMap.set(r143_cls, r143_lookup);
    return r143_lookup;
};
var r1_addMarkAnchor = function (r144_lookup, r144_gn, r144_cls, r144_anchor) {
    var _r144_t0, _r144_t1;
    var r144_a = {
        'class': r144_cls,
        'x': r144_anchor.x,
        'y': r144_anchor.y
    };
    return r144_lookup.marks[r144_gn] = r144_a;
};
var r1_addBaseAnchor = function (r145_lookup, r145_gn, r145_cls, r145_anchor) {
    var _r145_t0, _r145_t1;
    var r145_a = {
        'x': r145_anchor.x,
        'y': r145_anchor.y
    };
    if (!r145_lookup.bases[r145_gn])
        r145_lookup.bases[r145_gn] = {};
    return r145_lookup.bases[r145_gn][r145_cls] = r145_a;
};
