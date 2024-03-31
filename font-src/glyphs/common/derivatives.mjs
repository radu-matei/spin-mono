'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Cv = _r1_t9.Cv;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_AnyDerivingCv = _r1_t9.AnyDerivingCv;
var r1_Dotless = _r1_t9.Dotless;
var r1_SvInheritableRelations = _r1_t9.SvInheritableRelations;
var r1_PseudoCvDecompose = _r1_t9.PseudoCvDecompose;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_Map = Map;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Common-Derivatives', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_xn$derivecomposites$7Hrq, _r272_t4, _r272_t5;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_para = _r272_t0.para;
        var r272_glyphStore = _r272_t0.glyphStore;
        var r272_xn$glyphisneeded$1aao3 = _r272_t0['glyph-is-needed'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_Scale = _r272_t1.Scale;
        var r272_Translate = _r272_t1.Translate;
        var r272_TanSlope = _r272_t1.TanSlope;
        var r272_compositeBaseAnchors = _r272_t1.compositeBaseAnchors;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_ApplyCv = function (r273_g, r273_shapeFrom, r273_follow, r273_para) {
            var r273_kPrime, r273_prime, r273_pv, r273_suffix, r273_dstName, r273_dstGlyph, _r273_t2, _r273_t3, _r273_t4, _r273_t5, _r273_t6, _r273_t8, _r273_t9, _r273_t10;
            var _r273_t0 = r273_para.variants.primes[Symbol.iterator]();
            var _r273_t1 = void 0;
            var _r273_t7 = !(_r273_t1 = _r273_t0.next()).done;
            while (_r273_t7) {
                _r273_t2 = _r273_t1.value;
                r273_kPrime = _r273_t2[0];
                r273_prime = _r273_t2[1];
                _r273_t3 = r273_prime.variants.values()[Symbol.iterator]();
                _r273_t4 = void 0;
                _r273_t9 = !(_r273_t4 = _r273_t3.next()).done;
                while (_r273_t9) {
                    _r273_t10 = (r273_pv = _r273_t4.value, r273_suffix = r273_pv.resolveFor(r273_para, r273_follow), r273_suffix ? (r273_dstName = r273_shapeFrom + '.' + r273_suffix, r273_dstGlyph = r272_xn$queryglyph$1aao(r273_dstName), r273_dstGlyph ? r273_g.dependsOn(r273_dstGlyph) : void 0, r273_para.enableCvSs && r273_pv.tag && r273_pv.rank ? (r273_pv.set(r273_g, r273_dstName), r273_pv.nonDeriving ? r273_pv.setPreventDeriving(r273_g) : void 0) : void 0) : void 0);
                    _r273_t9 = !(_r273_t4 = _r273_t3.next()).done;
                }
                _r273_t8 = _r273_t10;
                _r273_t7 = !(_r273_t1 = _r273_t0.next()).done;
            }
            return _r273_t8;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'select-variant': r272_xn$selectvariant$7Hrq };
        });
        var r272_xn$selectvariant$7Hrq = function () {
            var _r278_t6;
            var _r278_t7 = arguments;
            var _r278_t0 = [].slice.call(_r278_t7, 0);
            var _r278_t1 = [];
            var _r278_t2 = 0;
            while (_r278_t2 < _r278_t0.length) {
                if (!(_r278_t0[_r278_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r278_t1.push(_r278_t0[_r278_t2]);
                _r278_t2 = _r278_t2 + 1;
            }
            var _r278_t3 = _r278_t0;
            var _r278_t4 = _r278_t3.length;
            var _r278_t5 = 0;
            while (_r278_t5 < _r278_t4) {
                _r278_t2 = _r278_t3[_r278_t5];
                if (_r278_t2 && _r278_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'name')
                    r278_name = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'unicode')
                    r278_unicode = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'shapeFrom')
                    r278_shapeFrom = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'follow')
                    r278_follow = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'reduction')
                    r278_reduction = _r278_t2.right;
                _r278_t5 = _r278_t5 + 1;
            }
            var r278_name = r1_fallback(r278_name, _r278_t1[0]);
            var r278_unicode = r1_fallback(r278_unicode, _r278_t1[1]);
            var r278_shapeFrom = r1_fallback(r278_shapeFrom, _r278_t1[2], r278_name);
            var r278_follow = r1_fallback(r278_follow, _r278_t1[3], r278_name);
            var r278_reduction = r1_fallback(r278_reduction, _r278_t1[4], null);
            if (!r272_xn$glyphisneeded$1aao3(r278_name))
                return void 0;
            var r278_variant = r272_para.variantSelector[r278_follow];
            if (r278_reduction)
                r278_variant = r278_reduction[r278_variant] || r278_variant;
            if (!r278_variant)
                throw new Error('Variant for ' + r278_name + ' (selector: ' + r278_shapeFrom + ') is not assigned.');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r278_name, r278_unicode, function () {
                var r285_gr, r285_v, _r285_t4;
                var _r285_t3 = this;
                var r285_currentGlyph = _r285_t3;
                var r285_fromGlyphName = r278_shapeFrom + '.' + r278_variant;
                var r285_fromGlyph = r272_xn$queryglyph$1aao(r285_fromGlyphName);
                if (!r285_fromGlyph)
                    throw new Error('Cannot find glyph \'' + r285_fromGlyphName + '\'');
                r285_currentGlyph.include(r285_fromGlyph, r272_AS_BASE, r272_ALSO_METRICS);
                r285_currentGlyph.dependsOn(r285_fromGlyph);
                r285_currentGlyph.cloneRankFromGlyph(r285_fromGlyph);
                r272_ApplyCv(r285_currentGlyph, r278_shapeFrom, r278_follow, r272_para);
                var _r285_t0 = r1_SvInheritableRelations;
                var _r285_t1 = _r285_t0.length;
                var _r285_t2 = 0;
                while (_r285_t2 < _r285_t1) {
                    r285_gr = _r285_t0[_r285_t2];
                    r285_v = r285_gr.get(r285_fromGlyph);
                    if (r285_v)
                        r285_gr.set(_r285_t3, r285_v);
                    _r285_t2 = _r285_t2 + 1;
                }
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'orthographic-italic': r272_xn$orthographicitalic$3DrD };
        });
        var r272_xn$orthographicitalic$3DrD = function (r290_name, r290_unicode) {
            var _r290_t0, _r290_t1;
            return r272_para.isItalic ? r272_alias(r290_name, r290_unicode, r290_name + '.italic') : r272_alias(r290_name, r290_unicode, r290_name + '.upright');
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r292_t0, _r292_t1;
            return { 'orthographic-slanted': r272_xn$orthographicslanted$3DrD };
        });
        var r272_xn$orthographicslanted$3DrD = function (r293_name, r293_unicode) {
            var _r293_t0, _r293_t1;
            return r272_para.slopeAngle ? r272_alias(r293_name, r293_unicode, r293_name + '.slanted') : r272_alias(r293_name, r293_unicode, r293_name + '.upright');
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r295_t0, _r295_t1;
            return { 'query-glyph': r272_xn$queryglyph$1aao };
        });
        var r272_xn$queryglyph$1aao = function (r296_id) {
            var _r296_t0, _r296_t1;
            if (!r296_id)
                return void 0;
            return r272_glyphStore.queryByName(r296_id);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r298_t0, _r298_t1;
            return { 'refer-glyph': r272_xn$referglyph$1aao };
        });
        var r272_xn$referglyph$1aao = function (r299_id) {
            var _r299_t0, _r299_t1;
            return function (r300_copyAnchors, r300_copyWidth) {
                var _r300_t1;
                var _r300_t0 = this;
                var r300_goal = r272_xn$queryglyph$1aao(r299_id);
                if (!r300_goal)
                    throw new Error('Cannot find glyph \'' + r299_id + '\'');
                return _r300_t0.includeGlyph(r300_goal, r300_copyAnchors, r300_copyWidth);
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r302_t0, _r302_t1;
            return { 'DeriveMeshT': r272_DeriveMeshT };
        });
        var r272_DeriveMeshT = function (r303_gnSources, r303_Query, r303_Fn, r303_FnLink) {
            var r303_gr, r303_from, r303_to, r303_key, r303_gnDerivedTo, r303_gndFrom, r303_gndTo, _r303_t3, _r303_t7, _r303_t8, _r303_t9;
            var r303_linksGnMap = new r1_Map();
            var r303_gndSource = r303_Fn(r303_gnSources, null, null);
            r303_linksGnMap.set(r272_keyOfGnList(r303_gnSources), r303_gndSource);
            var r303_mesh = r1_getGrMesh(r303_gnSources, r303_Query, r272_xn$queryglyph$1aao);
            var _r303_t0 = r303_mesh;
            var _r303_t1 = _r303_t0.length;
            var _r303_t2 = 0;
            while (_r303_t2 < _r303_t1) {
                _r303_t3 = _r303_t0[_r303_t2];
                r303_gr = _r303_t3[0];
                r303_from = _r303_t3[1];
                r303_to = _r303_t3[2];
                r303_key = r272_keyOfGnList(r303_to);
                if (!r303_linksGnMap.has(r303_key)) {
                    r303_gnDerivedTo = r303_Fn(r303_to, r303_gr, r303_from);
                    r303_linksGnMap.set(r303_key, r303_gnDerivedTo);
                }
                _r303_t2 = _r303_t2 + 1;
            }
            var _r303_t4 = r303_mesh;
            var _r303_t5 = _r303_t4.length;
            var _r303_t6 = 0;
            while (_r303_t6 < _r303_t5) {
                _r303_t7 = _r303_t4[_r303_t6];
                r303_gr = _r303_t7[0];
                r303_from = _r303_t7[1];
                r303_to = _r303_t7[2];
                r303_gndFrom = r303_linksGnMap.get(r272_keyOfGnList(r303_from));
                r303_gndTo = r303_linksGnMap.get(r272_keyOfGnList(r303_to));
                if (r303_gndFrom && r303_gndTo && r272_xn$queryglyph$1aao(r303_gndFrom) && r272_xn$queryglyph$1aao(r303_gndTo)) {
                    r303_gr.set(r272_xn$queryglyph$1aao(r303_gndFrom), r303_gndTo);
                    if (r303_FnLink)
                        r303_FnLink(r303_gndFrom, r303_gndTo, r303_from, r303_to);
                }
                _r303_t6 = _r303_t6 + 1;
            }
            return r303_gndSource;
        };
        var r272_keyOfGnList = function (r306_gns) {
            var _r306_t0, _r306_t1;
            return '.deriveKey{' + r306_gns.join('}{') + '}';
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r308_t0, _r308_t1;
            return { 'derive-glyphs': r272_xn$deriveglyphs$7Hrq };
        });
        var r272_xn$deriveglyphs$7Hrq = function (r309_dstGid, r309_dstUnicode, r309_srcGid, r309_Fn) {
            var _r309_t0, _r309_t1;
            if (!r272_xn$glyphisneeded$1aao3(r309_dstGid))
                return void 0;
            return r272_DeriveMeshT([r309_srcGid], r1_AnyDerivingCv, function (r310_gns, r310_gr) {
                var _r310_t0, _r310_t1;
                var r310_gn = r310_gns[0];
                var r310_gnDst = !r310_gr ? r309_dstGid : '' + r309_dstGid + '/derive{' + r310_gn + '}';
                var r310_unicodeDst = !r310_gr ? r309_dstUnicode : null;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c(r310_gnDst, r310_unicodeDst, r309_Fn(r310_gn, r310_gr));
                return r310_gnDst;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r313_t0, _r313_t1;
            return { 'derive-multi-part-glyphs': r272_xn$derivemultipartglyphs$7Hrq65 };
        });
        var r272_xn$derivemultipartglyphs$7Hrq65 = function (r314_dstGid, r314_dstUnicode, r314_gnSoruces, r314_Fn) {
            var _r314_t0, _r314_t1;
            if (!r272_xn$glyphisneeded$1aao3(r314_dstGid))
                return void 0;
            return r272_DeriveMeshT(r314_gnSoruces, r1_AnyDerivingCv, function (r315_gns, r315_gr) {
                var _r315_t0, _r315_t1;
                var r315_gnDst = !r315_gr ? r314_dstGid : '' + r314_dstGid + '/derive{' + r315_gns.join('}{') + '}';
                var r315_unicodeDst = !r315_gr ? r314_dstUnicode : null;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c(r315_gnDst, r315_unicodeDst, r314_Fn(r315_gns, r315_gr));
                return r315_gnDst;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return { 'alias': r272_alias };
        });
        var r272_alias = function (r319_dstGid, r319_dstUnicode, r319_srcGid) {
            var r319_gr, _r319_t0, _r319_t1, _r319_t2, _r319_t3, _r319_t4, _r319_t5;
            if (!r319_dstGid)
                throw new Error('Target ID not specified');
            if (!r272_xn$glyphisneeded$1aao3(r319_srcGid))
                return void 0;
            var r319_glyphSrc = r272_glyphStore.queryByNameEnsured(r319_srcGid);
            var r319_glyphDst = r272_xn$createAndSaveGlyphImpl$2Lrc3c(r319_dstGid, r319_dstUnicode, function () {
                var _r322_t1;
                var _r322_t0 = this;
                var r322_currentGlyph = _r322_t0;
                r322_currentGlyph.include(r272_xn$referglyph$1aao(r319_srcGid), r272_AS_BASE, r272_ALSO_METRICS);
                return void 0;
            });
            if (r319_glyphDst) {
                _r319_t0 = r1_AnyCv.query(r319_glyphSrc);
                _r319_t1 = _r319_t0.length;
                _r319_t2 = 0;
                while (_r319_t2 < _r319_t1) {
                    r319_gr = _r319_t0[_r319_t2];
                    r319_gr.set(r319_glyphDst, r319_gr.get(r319_glyphSrc));
                    if (r319_gr.getPreventDeriving(r319_glyphSrc))
                        r319_gr.setPreventDeriving(r319_glyphDst);
                    _r319_t2 = _r319_t2 + 1;
                }
                return r1_Dotless.get(r319_glyphSrc) ? r1_Dotless.set(r319_glyphDst, r1_Dotless.get(r319_glyphSrc)) : void 0;
            } else
                return void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r327_t0, _r327_t1;
            return { 'turned': r272_turned };
        });
        var r272_turned = function (r328_newid, r328_unicode, r328_id, r328__x, r328__y, r328_mark) {
            var _r328_t0, _r328_t1;
            if (!r328_newid)
                throw new Error('Target ID not specified');
            return r272_xn$deriveglyphs$7Hrq(r328_newid, r328_unicode, r328_id, function (r329_src, r329_gr) {
                var _r329_t0, _r329_t1;
                return function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.include(r272_xn$referglyph$1aao(r329_src), r328_mark ? false : r272_AS_BASE, r272_ALSO_METRICS);
                    if (r328_mark)
                        r331_currentGlyph.include(r328_mark);
                    var r331_x = r328__x instanceof Function ? r328__x.call(r331_currentGlyph) : r328__x;
                    var r331_y = r328__y instanceof Function ? r328__y.call(r331_currentGlyph) : r328__y;
                    r331_currentGlyph.include(_r331_t0.gizmo.inverse());
                    r331_currentGlyph.include(r272_Translate(-r331_x, -r331_y));
                    r331_currentGlyph.include(r272_Scale(-1, -1));
                    r331_currentGlyph.include(r272_Translate(r331_x, r331_y));
                    r331_currentGlyph.include(_r331_t0.gizmo);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r340_t0, _r340_t1;
            return { 'link-reduced-variant': r272_xn$linkreducedvariant$5sIl8 };
        });
        var r272_xn$linkreducedvariant$5sIl8 = function () {
            var _r341_t6;
            var _r341_t7 = arguments;
            var _r341_t0 = [].slice.call(_r341_t7, 0);
            var _r341_t1 = [];
            var _r341_t2 = 0;
            while (_r341_t2 < _r341_t0.length) {
                if (!(_r341_t0[_r341_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r341_t1.push(_r341_t0[_r341_t2]);
                _r341_t2 = _r341_t2 + 1;
            }
            var _r341_t3 = _r341_t0;
            var _r341_t4 = _r341_t3.length;
            var _r341_t5 = 0;
            while (_r341_t5 < _r341_t4) {
                _r341_t2 = _r341_t3[_r341_t5];
                if (_r341_t2 && _r341_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r341_t2.left === 'dstGid')
                    r341_dstGid = _r341_t2.right;
                if (_r341_t2 && _r341_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r341_t2.left === 'srcGid')
                    r341_srcGid = _r341_t2.right;
                if (_r341_t2 && _r341_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r341_t2.left === 'gr')
                    r341_gr = _r341_t2.right;
                if (_r341_t2 && _r341_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r341_t2.left === 'follow')
                    r341_follow = _r341_t2.right;
                if (_r341_t2 && _r341_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r341_t2.left === 'shapeFrom')
                    r341_shapeFrom = _r341_t2.right;
                _r341_t5 = _r341_t5 + 1;
            }
            var r341_dstGid = r1_fallback(r341_dstGid, _r341_t1[0]);
            var r341_srcGid = r1_fallback(r341_srcGid, _r341_t1[1]);
            var r341_gr = r1_fallback(r341_gr, _r341_t1[2]);
            var r341_follow = r1_fallback(r341_follow, _r341_t1[3]);
            var r341_shapeFrom = r1_fallback(r341_shapeFrom, _r341_t1[4]);
            if (!r272_xn$queryglyph$1aao(r341_dstGid))
                r272_xn$selectvariant$7Hrq(r341_dstGid, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', r1_fallback(r341_shapeFrom, r341_srcGid)), new r272_xn$NamedParameterPair$2Lrc9b('follow', r1_fallback(r341_follow, r341_dstGid)));
            return r341_gr && r272_xn$queryglyph$1aao(r341_srcGid) ? r341_gr.set(r272_xn$queryglyph$1aao(r341_srcGid), r341_dstGid) : void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r349_t0, _r349_t1;
            return { 'alias-reduced-variant': r272_xn$aliasreducedvariant$1aao8 };
        });
        var r272_xn$aliasreducedvariant$1aao8 = function (r350_dstGid, r350_srcGid, r350_shapeGid, r350_gr) {
            var _r350_t0, _r350_t1;
            r272_alias(r350_dstGid, null, r350_shapeGid);
            return r350_gr && r272_xn$queryglyph$1aao(r350_srcGid) ? r350_gr.set(r272_xn$queryglyph$1aao(r350_srcGid), r350_dstGid) : void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r352_t0, _r352_t1;
            return { 'HalfAdvance': r272_HalfAdvance };
        });
        var r272_HalfAdvance = function () {
            var _r353_t1;
            var _r353_t0 = this;
            return _r353_t0.advanceWidth / 2;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r355_t0, _r355_t1;
            return { 'TurnMarks': r272_TurnMarks };
        });
        var r272_TurnMarks = function (r356_k, r356_fnOverride) {
            var _r356_t0, _r356_t1;
            return function () {
                var _r358_t1;
                var _r358_t0 = this;
                var r358_currentGlyph = _r358_t0;
                var r358_df = r272_DivFrame(r358_currentGlyph.advanceWidth / r272_Width);
                var r358_mx = r272_compositeBaseAnchors(r358_df.markSet[r356_k](), r356_fnOverride ? r356_fnOverride(r358_df) : { 'baseAnchors': {} });
                r358_currentGlyph.include(r358_mx);
                return void 0;
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r361_t0, _r361_t1;
            return { 'HCombine': r272_HCombine };
        });
        var r272_HCombine = function (r362_newid, r362_unicode, r362_id1, r362_id2, r362_spacing) {
            var _r362_t0, _r362_t1;
            if (!r362_newid)
                throw new Error('Target ID not specified');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r362_newid, r362_unicode, function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r272_xn$referglyph$1aao(r362_id1), r272_AS_BASE, r272_ALSO_METRICS);
                r365_currentGlyph.include(r272_Translate(-r362_spacing, 0));
                r365_currentGlyph.include(r272_xn$referglyph$1aao(r362_id2));
                r365_currentGlyph.include(r272_Translate(r362_spacing / 2, 0));
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r371_t0, _r371_t1;
            return { 'HDual': r272_HDual };
        });
        var r272_HDual = function (r372_newid, r372_unicode, r372_id, r372_spacing) {
            var _r372_t0, _r372_t1;
            if (!r372_newid)
                throw new Error('Target ID not specified');
            return r272_HCombine(r372_newid, r372_unicode, r372_id, r372_id, r372_spacing);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r374_t0, _r374_t1;
            return { 'VCombine': r272_VCombine };
        });
        var r272_VCombine = function (r375_newid, r375_unicode, r375_id1, r375_id2, r375_spacing) {
            var _r375_t0, _r375_t1;
            if (!r375_newid)
                throw new Error('Target ID not specified');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r375_newid, r375_unicode, function () {
                var _r378_t1;
                var _r378_t0 = this;
                var r378_currentGlyph = _r378_t0;
                r378_currentGlyph.include(r272_xn$referglyph$1aao(r375_id2), r272_AS_BASE, r272_ALSO_METRICS);
                r378_currentGlyph.include(r272_Translate(-r375_spacing * r272_TanSlope, -r375_spacing));
                r378_currentGlyph.include(r272_xn$referglyph$1aao(r375_id1));
                r378_currentGlyph.include(r272_Translate(r375_spacing * r272_TanSlope / 2, r375_spacing / 2));
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r384_t0, _r384_t1;
            return { 'VDual': r272_VDual };
        });
        var r272_VDual = function (r385_newid, r385_unicode, r385_id, r385_spacing) {
            var _r385_t0, _r385_t1;
            if (!r385_newid)
                throw new Error('Target ID not specified');
            return r272_VCombine(r385_newid, r385_unicode, r385_id, r385_id, r385_spacing);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r387_t0, _r387_t1;
            return { 'derive-composites': r272_xn$derivecomposites$7Hrq };
        });
        return r272_xn$derivecomposites$7Hrq = function (r388_dstGid, r388_dstUnicode, r388_srcGid) {
            var r388_part, _r388_t3;
            var _r388_t4 = arguments;
            if (!r272_xn$glyphisneeded$1aao3(r388_dstGid))
                return void 0;
            var r388_components = [].slice.call(_r388_t4, 2);
            var r388_refs = [];
            var _r388_t0 = r388_components;
            var _r388_t1 = _r388_t0.length;
            var _r388_t2 = 0;
            while (_r388_t2 < _r388_t1) {
                r388_part = _r388_t0[_r388_t2];
                if (typeof r388_part === 'string')
                    r388_refs.push(r388_part);
                _r388_t2 = _r388_t2 + 1;
            }
            return r272_xn$derivemultipartglyphs$7Hrq65(r388_dstGid, r388_dstUnicode, r388_refs, function (r390_srcs) {
                var _r390_t0, _r390_t1;
                return function () {
                    var r392_asBase, r392_alsoMetrics, r392_part, _r392_t3;
                    var _r392_t2 = this;
                    var r392_currentGlyph = _r392_t2;
                    var r392_rid = 0;
                    var _r392_t0 = 0;
                    var _r392_t1 = r388_components.length;
                    var r392_j = _r392_t0;
                    while (r392_j < _r392_t1) {
                        r392_asBase = r392_j === 0 ? r272_AS_BASE : void 0;
                        r392_alsoMetrics = r392_j === 0 ? r272_ALSO_METRICS : void 0;
                        r392_part = r388_components[r392_j];
                        if (typeof r392_part === 'string') {
                            r392_currentGlyph.include(r272_xn$referglyph$1aao(r390_srcs[r392_rid]), r392_asBase, r392_alsoMetrics);
                            r392_rid = r392_rid + 1;
                        } else
                            r392_currentGlyph.include(r392_part, r392_asBase, r392_alsoMetrics);
                        r392_j = r392_j + 1;
                    }
                    return void 0;
                };
            });
        };
    });
    return void 0;
});
