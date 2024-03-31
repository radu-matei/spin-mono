'use strict';
import * as _s0_t0 from '../support/gr.mjs';
var _s0_t1;
export {
    _s0_t1 as buildGsubTexture
};
var r1_buildGsubTexture, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_Set = Set;
var _r1_t8 = _s0_t0;
var r1_Texture = _r1_t8.Texture;
var r1_CvDecompose = _r1_t8.CvDecompose;
_s0_t1 = r1_buildGsubTexture = function (r265_gsub, r265_glyphStore, r265_markGlyphs, r265_cvs) {
    var r265_gid, r265_g, r265_extL, r265_extR, r265_extLR, r265_shrL, r265_shrR, r265_shrLR, r265_cv, r265_decompose, r265_gn, r265_glyph, r265_parts, r265_influenced, r265_part, _r265_t3, _r265_t4, _r265_t5, _r265_t6, _r265_t7, _r265_t8, _r265_t9, _r265_t10, _r265_t11, _r265_t12, _r265_t13;
    var r265_anyMark = Array.from(r265_markGlyphs.all);
    var r265_rec = r265_gsub.beginBlock();
    var r265_txtr = r265_gsub.addCommonFeature(r265_gsub.createFeature('TXTR'));
    var _r265_t0 = r265_gsub.ChainRuleBuilder();
    var r265_xn$chainrule$1aao = _r265_t0[0];
    var r265_xn$reverserule$3qIs = _r265_t0[1];
    var r265_extRFrom = [];
    var r265_extRTo = [];
    var r265_extLFrom = [];
    var r265_extLTo = [];
    var r265_shrLFrom = [];
    var r265_shrLTo = [];
    var r265_shrRFrom = [];
    var r265_shrRTo = [];
    var r265_anyInfluence = new r1_Set();
    var _r265_t1 = r265_glyphStore.namedEntries()[Symbol.iterator]();
    var _r265_t2 = void 0;
    while (!(_r265_t2 = _r265_t1.next()).done) {
        _r265_t3 = _r265_t2.value;
        r265_gid = _r265_t3[0];
        r265_g = _r265_t3[1];
        if (r265_gid[0] !== '.') {
            r265_extL = r1_Texture.ExtL.get(r265_g);
            r265_extR = r1_Texture.ExtR.get(r265_g);
            r265_extLR = r1_Texture.ExtLR.get(r265_g);
            r265_shrL = r1_Texture.ShrL.get(r265_g);
            r265_shrR = r1_Texture.ShrR.get(r265_g);
            r265_shrLR = r1_Texture.ShrLR.get(r265_g);
            if (r265_extR) {
                r265_extRFrom.push(r265_gid);
                r265_extRTo.push(r265_extR);
            }
            if (r265_extL) {
                r265_extLFrom.push(r265_gid);
                r265_extLTo.push(r265_extL);
            }
            if (r265_extR && r265_extLR) {
                r265_extLFrom.push(r265_extR);
                r265_extLTo.push(r265_extLR);
            }
            if (r265_shrL) {
                r265_shrLFrom.push(r265_gid);
                r265_shrLTo.push(r265_shrL);
            }
            if (r265_shrR) {
                r265_shrRFrom.push(r265_gid);
                r265_shrRTo.push(r265_shrR);
            }
            if (r265_shrL && r265_shrLR) {
                r265_shrRFrom.push(r265_shrL);
                r265_shrRTo.push(r265_shrLR);
            }
            if (r265_extL || r265_extR || r265_shrL || r265_shrR)
                r265_anyInfluence.add(r265_gid);
        }
    }
    var r265_subExtR = r265_gsub.createLookup({
        'type': 'gsub_chaining',
        'ignoreGlyphs': r265_anyMark,
        'rules': [r265_xn$chainrule$1aao({
                'left': r265_extRFrom,
                'right': r265_extRTo
            }, {
                'left': r265_shrLFrom,
                'right': r265_shrLTo
            })]
    });
    var r265_subExtL = r265_gsub.createLookup({
        'type': 'gsub_chaining',
        'ignoreGlyphs': r265_anyMark,
        'rules': [r265_xn$chainrule$1aao({
                'left': r265_shrRFrom,
                'right': r265_shrRTo
            }, {
                'left': r265_extLFrom,
                'right': r265_extLTo
            })]
    });
    r265_txtr.addLookup(r265_subExtR);
    r265_txtr.addLookup(r265_subExtL);
    r265_gsub.setDependency(r265_subExtR, r265_subExtL);
    if (r265_cvs) {
        _r265_t4 = r265_cvs.values()[Symbol.iterator]();
        _r265_t5 = void 0;
        while (!(_r265_t5 = _r265_t4.next()).done) {
            r265_cv = _r265_t5.value;
            if (r265_cv.decompositionLookup) {
                r265_txtr.addLookup(r265_cv.decompositionLookup);
                r265_gsub.setDependency(r265_cv.decompositionLookup, r265_subExtR);
            }
        }
    } else {
        r265_decompose = r265_gsub.createLookup({
            'type': 'gsub_multiple',
            'substitutions': {}
        });
        _r265_t6 = r265_glyphStore.namedEntries()[Symbol.iterator]();
        _r265_t7 = void 0;
        while (!(_r265_t7 = _r265_t6.next()).done) {
            _r265_t8 = _r265_t7.value;
            r265_gn = _r265_t8[0];
            r265_glyph = _r265_t8[1];
            r265_parts = r1_CvDecompose.get(r265_glyph);
            if (r265_parts) {
                r265_influenced = r265_anyInfluence.has(r265_gn);
                _r265_t9 = r265_parts;
                _r265_t10 = _r265_t9.length;
                _r265_t11 = 0;
                while (_r265_t11 < _r265_t10) {
                    r265_part = _r265_t9[_r265_t11];
                    if (r265_anyInfluence.has(r265_part))
                        r265_influenced = true;
                    _r265_t11 = _r265_t11 + 1;
                }
                if (r265_influenced)
                    r265_decompose.substitutions[r265_gn] = r265_parts;
            }
        }
        r265_txtr.addLookup(r265_decompose);
        r265_gsub.setDependency(r265_decompose, r265_subExtR);
    }
    return r265_gsub.endBlock(r265_rec);
};
