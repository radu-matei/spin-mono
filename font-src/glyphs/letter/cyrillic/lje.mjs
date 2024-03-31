'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/point.mjs';
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
var r1_Point = _r1_t9.Point;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Lje', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Yeri, _r271_t10, _r271_t11, _r271_t12, _r271_t13, _r271_tag14;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_O = _r271_t1.O;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LegShape = _r271_t6.LegShape;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-Yeri'].resolve();
        var r271_YeriConfig = _r271_t7.YeriConfig;
        var r271_CyrLjeShape = function (r276_Yeri, r276_df, r276_top) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_rightSB = r276_df.width - r276_df.leftSB;
                var r278_l = r276_df.leftSB + 0;
                var r278_r = r278_rightSB - 0;
                var r278_middle = r276_df.width / 2;
                var r278_xTopLeft = r1_mix(r278_l, r278_r, 0.025);
                var r278_jut = Math.min(r271_Jut, r271_Jut * 0.75 * r276_df.div);
                r278_currentGlyph.include(r271_LegShape(new r271_xn$NamedParameterPair$2Lrc9b('ztop', r1_Point.fromXY(r1_Point.Type.Corner, r278_xTopLeft, r276_top)), new r271_xn$NamedParameterPair$2Lrc9b('zbot', r1_Point.fromXY(r1_Point.Type.Corner, r1_mix(r278_l, 0, r271_SLAB ? 1 : 0.75), 0)), new r271_xn$NamedParameterPair$2Lrc9b('xb', r278_xTopLeft), new r271_xn$NamedParameterPair$2Lrc9b('fine', r276_df.mvs)));
                r278_currentGlyph.include(r276_Yeri(r276_top, new r271_xn$NamedParameterPair$2Lrc9b('left', r278_middle - r271_HSwToV(0.5 * r276_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r278_r - r271_O), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r276_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('jut', r278_jut)));
                r278_currentGlyph.include(r271_HBar.t(r278_xTopLeft, r278_middle, r276_top, r276_df.mvs));
                if (r271_SLAB)
                    r278_currentGlyph.include(r271_HSerif.lt(r278_xTopLeft, r276_top, r278_jut - r271_HSwToV(0.5 * r276_df.mvs), r276_df.mvs));
                return void 0;
            };
        };
        var _r271_t8 = Object.entries(r271_YeriConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_Yeri = _r271_t10[1][0];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Lje.' + r271_suffix, null, function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    var r296_df = r296_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r296_currentGlyph.include(r296_df.markSet.capital());
                    r296_currentGlyph.include(r271_CyrLjeShape(r271_Yeri, r296_df, r271_CAP));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/lje.' + r271_suffix, null, function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    var r302_df = r302_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r302_currentGlyph.include(r302_df.markSet.e());
                    r302_currentGlyph.include(r271_CyrLjeShape(r271_Yeri, r302_df, r271_XH));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('cyrl/Lje', 1033);
        return r271_xn$selectvariant$7Hrq('cyrl/lje', 1113);
    });
    return void 0;
});
