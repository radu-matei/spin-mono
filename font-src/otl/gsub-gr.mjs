'use strict';
var _s0_t0;
export {
    _s0_t0 as buildGrFeature
};
var r1_buildGrFeature, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
_s0_t0 = r1_buildGrFeature = function (r130_gsub, r130_glyphStore, r130_gr) {
    var r130_gnSrc, r130_glyph, r130_gnDst, r130_glyphDst, r130_lookup1, r130_feature1, _r130_t2, _r130_t3, _r130_t4;
    var r130_rec = r130_gsub.beginBlock();
    var r130_mapping = {};
    var _r130_t0 = r130_glyphStore.namedEntries()[Symbol.iterator]();
    var _r130_t1 = void 0;
    while (!(_r130_t1 = _r130_t0.next()).done) {
        _r130_t2 = _r130_t1.value;
        r130_gnSrc = _r130_t2[0];
        r130_glyph = _r130_t2[1];
        r130_gnDst = r130_gr.get(r130_glyph);
        r130_glyphDst = r130_glyphStore.queryByName(r130_gnDst);
        if (r130_glyphDst && (r130_glyphStore.queryUnicodeOf(r130_glyph) || r130_glyphStore.queryUnicodeOf(r130_glyphDst)))
            r130_mapping[r130_gnSrc] = r130_gnDst;
    }
    if (r1_objectIsNotEmpty(r130_mapping)) {
        r130_lookup1 = r130_gsub.createLookup({
            'type': 'gsub_single',
            'substitutions': r130_mapping
        });
        r130_feature1 = r130_gsub.addCommonFeature(r130_gsub.createFeature(r130_gr.otlTag));
        r130_feature1.addLookup(r130_lookup1);
    }
    return r130_gsub.endBlock(r130_rec);
};
var r1_objectIsNotEmpty = function (r132_obj) {
    var _r132_t0, _r132_t1;
    return r132_obj && Object.keys(r132_obj).length;
};
