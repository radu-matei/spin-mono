'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
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
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-N', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_bodyType, r271_crD, r271_slabType, _r271_t10, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t7.CyrDescender;
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_PalatalHook = _r271_t7.PalatalHook;
        var r271_EngHook = _r271_t7.EngHook;
        var r271_CyrTailDescender = _r271_t7.CyrTailDescender;
        var r271_xn$BODYSYMMETRIC$5sIl = 1;
        var r271_xn$BODYASYMMETRIC$5sIl = 2;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABAUTO$5sIl = 1;
        var r271_xn$SLABMOTION$5sIl = 2;
        var r271_xn$SLABALL$5sIl = 3;
        var r271_xn$SLABDIGAMMA$5sIl = 4;
        var r271_NShape = function () {
            var _r276_t6;
            var _r276_t7 = arguments;
            var _r276_t0 = [].slice.call(_r276_t7, 0);
            var _r276_t1 = [];
            var _r276_t2 = 0;
            while (_r276_t2 < _r276_t0.length) {
                if (!(_r276_t0[_r276_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r276_t1.push(_r276_t0[_r276_t2]);
                _r276_t2 = _r276_t2 + 1;
            }
            var _r276_t3 = _r276_t0;
            var _r276_t4 = _r276_t3.length;
            var _r276_t5 = 0;
            while (_r276_t5 < _r276_t4) {
                _r276_t2 = _r276_t3[_r276_t5];
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'bodyType')
                    r276_bodyType = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'slabType')
                    r276_slabType = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'top')
                    r276_top = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'left')
                    r276_left = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'right')
                    r276_right = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'crowd')
                    r276_crowd = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'crDiag')
                    r276_crDiag = _r276_t2.right;
                _r276_t5 = _r276_t5 + 1;
            }
            var r276_bodyType = r1_fallback(r276_bodyType, _r276_t1[0]);
            var r276_slabType = r1_fallback(r276_slabType, _r276_t1[1]);
            var r276_top = r1_fallback(r276_top, _r276_t1[2]);
            var r276_left = r1_fallback(r276_left, _r276_t1[3]);
            var r276_right = r1_fallback(r276_right, _r276_t1[4]);
            var r276_crowd = r1_fallback(r276_crowd, _r276_t1[5], 2);
            var r276_crDiag = r1_fallback(r276_crDiag, _r276_t1[6], 4);
            return function () {
                var _r282_t0, _r282_t1, _r282_t2, _r282_t3, _r282_t5;
                var _r282_t4 = this;
                var r282_currentGlyph = _r282_t4;
                var r282_swDiag = r271_AdviceStroke(r276_crDiag);
                var r282_stroke = r271_AdviceStroke(r276_crowd);
                var r282_yEnd = (_r282_t0 = r276_bodyType, _r282_t0 === r271_xn$BODYSYMMETRIC$5sIl ? 0 : _r282_t0 === r271_xn$BODYASYMMETRIC$5sIl ? r276_top * 0.375 : void 0);
                r282_currentGlyph.include(r271_union((_r282_t1 = r276_bodyType, _r282_t1 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r276_left, 0, r271_widths.heading(0, r282_stroke, r271_Upward)), r271_curl(r276_left, r276_top * 0.4, r271_heading(r271_Upward)), r271_straight.up.end(r276_left, r276_top, r271_widths.heading(0, r282_swDiag, r271_Upward))) : _r282_t1 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.l(r276_left, 0, r276_top, r282_stroke) : void 0), (_r282_t2 = r276_bodyType, _r282_t2 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r276_right, r276_top, r271_widths.heading(0, r282_stroke, r271_Downward)), r271_curl(r276_right, r276_top * 0.6, r271_heading(r271_Downward)), r271_straight.down.end(r276_right, 0, r271_widths.heading(0, r282_swDiag, r271_Downward))) : _r282_t2 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.r(r276_right, 0, r276_top, r282_stroke) : void 0), r271_intersection(r271_Rect(r276_top, 0, r276_left, r276_right), r271_ExtLineCenter(2, r282_swDiag, r276_left + r282_swDiag, r276_top, r276_right - r282_swDiag, r282_yEnd))));
                var r282_sf = r271_SerifFrame(r276_top, 0, r276_left, r276_right, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r282_stroke));
                r282_currentGlyph.include((_r282_t3 = r276_slabType, _r282_t3 === r271_xn$SLABALL$5sIl ? function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r282_sf.lt.outer, true, true);
                    r295_currentGlyph.include(r282_sf.lb.full);
                    r295_currentGlyph.include(r282_sf.rt.full);
                    return void 0;
                } : _r282_t3 === r271_xn$SLABAUTO$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r290_t1;
                    var _r290_t0 = this;
                    var r290_currentGlyph = _r290_t0;
                    r290_currentGlyph.include(r282_sf.lt.outer, true, true);
                    r290_currentGlyph.include(r282_sf.lb.full);
                    r290_currentGlyph.include(r282_sf.rt.full);
                    return void 0;
                }) : _r282_t3 === r271_xn$SLABMOTION$5sIl ? function () {
                    var _r287_t1;
                    var _r287_t0 = this;
                    var r287_currentGlyph = _r287_t0;
                    r287_currentGlyph.include(r282_sf.lt.outer, true, true);
                    return void 0;
                } : _r282_t3 === r271_xn$SLABNONE$5sIl ? r271_xn$noshape$3cah() : void 0));
                return void 0;
            };
        };
        var r271_NRevShape = function () {
            var _r299_t6;
            var _r299_t7 = arguments;
            var _r299_t0 = [].slice.call(_r299_t7, 0);
            var _r299_t1 = [];
            var _r299_t2 = 0;
            while (_r299_t2 < _r299_t0.length) {
                if (!(_r299_t0[_r299_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r299_t1.push(_r299_t0[_r299_t2]);
                _r299_t2 = _r299_t2 + 1;
            }
            var _r299_t3 = _r299_t0;
            var _r299_t4 = _r299_t3.length;
            var _r299_t5 = 0;
            while (_r299_t5 < _r299_t4) {
                _r299_t2 = _r299_t3[_r299_t5];
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'bodyType')
                    r299_bodyType = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'slabType')
                    r299_slabType = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'top')
                    r299_top = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'left')
                    r299_left = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'right')
                    r299_right = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'crowd')
                    r299_crowd = _r299_t2.right;
                if (_r299_t2 && _r299_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r299_t2.left === 'crDiag')
                    r299_crDiag = _r299_t2.right;
                _r299_t5 = _r299_t5 + 1;
            }
            var r299_bodyType = r1_fallback(r299_bodyType, _r299_t1[0]);
            var r299_slabType = r1_fallback(r299_slabType, _r299_t1[1]);
            var r299_top = r1_fallback(r299_top, _r299_t1[2]);
            var r299_left = r1_fallback(r299_left, _r299_t1[3]);
            var r299_right = r1_fallback(r299_right, _r299_t1[4]);
            var r299_crowd = r1_fallback(r299_crowd, _r299_t1[5], 2);
            var r299_crDiag = r1_fallback(r299_crDiag, _r299_t1[6], 4);
            return function () {
                var _r305_t0, _r305_t1, _r305_t2, _r305_t3, _r305_t4, _r305_t6;
                var _r305_t5 = this;
                var r305_currentGlyph = _r305_t5;
                var r305_swDiag = r271_AdviceStroke(r299_crDiag);
                var r305_stroke = r271_AdviceStroke(r299_crowd);
                var r305_yEnd = (_r305_t0 = r299_bodyType, _r305_t0 === r271_xn$BODYSYMMETRIC$5sIl ? 0 : _r305_t0 === r271_xn$BODYASYMMETRIC$5sIl ? r299_top * 0.375 : void 0);
                r305_currentGlyph.include(r271_union((_r305_t1 = r299_bodyType, _r305_t1 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r299_left, r299_top, r271_widths.lhs.heading(r305_stroke, r271_Downward)), r271_curl(r299_left, r299_top * 0.6, r271_heading(r271_Downward)), r271_straight.down.end(r299_left, 0, r271_widths.lhs.heading(r305_swDiag, r271_Downward))) : _r305_t1 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.l(r299_left, 0, r299_top, r305_stroke) : void 0), (_r305_t2 = r299_bodyType, _r305_t2 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r299_right, 0, r271_widths.lhs.heading(r305_stroke, r271_Upward)), r271_curl(r299_right, r299_top * 0.4, r271_heading(r271_Upward)), r271_straight.up.end(r299_right, r299_top, r271_widths.lhs.heading(r305_swDiag, r271_Upward))) : _r305_t2 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.r(r299_right, 0, r299_top, r305_stroke) : void 0), r271_intersection(r271_Rect(r299_top, 0, r299_left, r299_right), r271_ExtLineCenter(2, r305_swDiag, r299_left + r305_swDiag, r305_yEnd, r299_right - r305_swDiag, r299_top))));
                var r305_sf = r271_SerifFrame(r299_top, 0, r299_left, r299_right, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r305_stroke));
                var r305_lbSerifs = (_r305_t3 = r299_bodyType, _r305_t3 === r271_xn$BODYSYMMETRIC$5sIl ? r305_sf.lb.outer : _r305_t3 === r271_xn$BODYASYMMETRIC$5sIl ? r305_sf.lb.full : void 0);
                r305_currentGlyph.include((_r305_t4 = r299_slabType, _r305_t4 === r271_xn$SLABALL$5sIl ? function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r323_currentGlyph.include(r305_sf.lt.full, true, true);
                    r323_currentGlyph.include(r305_lbSerifs);
                    r323_currentGlyph.include(r305_sf.rt.outer);
                    r323_currentGlyph.include(r305_sf.rb.full);
                    return void 0;
                } : _r305_t4 === r271_xn$SLABAUTO$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r317_t1;
                    var _r317_t0 = this;
                    var r317_currentGlyph = _r317_t0;
                    r317_currentGlyph.include(r305_sf.lt.full, true, true);
                    r317_currentGlyph.include(r305_lbSerifs);
                    r317_currentGlyph.include(r305_sf.rt.outer);
                    r317_currentGlyph.include(r305_sf.rb.full);
                    return void 0;
                }) : _r305_t4 === r271_xn$SLABMOTION$5sIl ? function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    r314_currentGlyph.include(r305_sf.lt.outer, true, true);
                    return void 0;
                } : _r305_t4 === r271_xn$SLABNONE$5sIl ? r271_xn$noshape$3cah() : _r305_t4 === r271_xn$SLABDIGAMMA$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r310_t1;
                    var _r310_t0 = this;
                    var r310_currentGlyph = _r310_t0;
                    r310_currentGlyph.include(r305_sf.lt.full, true, true);
                    r310_currentGlyph.include(r305_sf.rb.full);
                    return void 0;
                }) : void 0));
                return void 0;
            };
        };
        var r271_NConfig = {
            'standardSerifless': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABNONE$5sIl
            ],
            'standardMotionSerifed': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABMOTION$5sIl
            ],
            'standardSerifed': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABALL$5sIl
            ],
            'asymmetricSerifless': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABNONE$5sIl
            ],
            'asymmetricMotionSerifed': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABMOTION$5sIl
            ],
            'asymmetricSerifed': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABALL$5sIl
            ]
        };
        var _r271_t8 = Object.entries(r271_NConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_bodyType = _r271_t10[1][0];
            r271_crD = _r271_t10[1][1];
            r271_slabType = _r271_t10[1][2];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('N.' + r271_suffix, null, function () {
                    var _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    r333_currentGlyph.include(r271_MarkSet.capital());
                    r333_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r333_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, 0);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('NRev.' + r271_suffix, null, function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_MarkSet.capital());
                    r340_currentGlyph.include(r271_NRevShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Eng.' + r271_suffix, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r271_MarkSet.capDesc());
                    r346_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r346_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('NLTail.' + r271_suffix, null, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.include(r271_xn$referglyph$1aao('N.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r353_currentGlyph.ejectTagged('serifLB');
                    r353_currentGlyph.include(r271_PalatalHook.lExt(r271_SB, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpN.' + r271_suffix, null, function () {
                    var _r359_t1;
                    var _r359_t0 = this;
                    var r359_currentGlyph = _r359_t0;
                    r359_currentGlyph.include(r271_MarkSet.e());
                    r359_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_XH, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r359_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, 0);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpNRev.' + r271_suffix, null, function () {
                    var _r366_t1;
                    var _r366_t0 = this;
                    var r366_currentGlyph = _r366_t0;
                    r366_currentGlyph.include(r271_MarkSet.e());
                    r366_currentGlyph.include(r271_NRevShape(r271_bodyType, r271_slabType, r271_XH, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/nairaSignBase.' + r271_suffix, null, function () {
                    var _r372_t1;
                    var _r372_t0 = this;
                    var r372_currentGlyph = _r372_t0;
                    r372_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB * 1.25, r271_Width - r271_SB * 1.25, new r271_xn$NamedParameterPair$2Lrc9b('crowd', 3.5), new r271_xn$NamedParameterPair$2Lrc9b('crDiag', 4)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('N', 'N');
        r271_xn$linkreducedvariant$5sIl8('N/sansSerif', 'N', r1_MathSansSerif);
        r271_alias('grek/Nu', 925, 'N');
        r271_xn$aliasreducedvariant$1aao8('grek/Nu/sansSerif', 'grek/Nu', 'N/sansSerif', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('NRev', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('smcpNRev', 7438, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$derivecomposites$7Hrq('NDescender', 42896, 'N', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$selectvariant$7Hrq('Eng', 330, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('smcpN', 628, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('NLTail', 413, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('currency/nairaSignBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/I', 1048, function () {
            var _r384_t1;
            var _r384_t0 = this;
            var r384_currentGlyph = _r384_t0;
            r384_currentGlyph.include(r271_MarkSet.capital());
            r384_currentGlyph.include(r271_NRevShape(r271_xn$BODYSYMMETRIC$5sIl, r271_xn$SLABAUTO$5sIl, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/i.upright', null, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            r390_currentGlyph.include(r271_MarkSet.e());
            r390_currentGlyph.include(r271_NRevShape(r271_xn$BODYSYMMETRIC$5sIl, r271_xn$SLABAUTO$5sIl, r271_XH, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/DigammaPamphylian', 886, function () {
            var _r396_t1;
            var _r396_t0 = this;
            var r396_currentGlyph = _r396_t0;
            r396_currentGlyph.include(r271_MarkSet.capital());
            r396_currentGlyph.include(r271_NRevShape(r271_xn$BODYSYMMETRIC$5sIl, r271_xn$SLABDIGAMMA$5sIl, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
            return void 0;
        });
        r271_alias('grek/digammaPamphylian', 887, 'smcpNRev.standardSerifless');
        r271_xn$derivecomposites$7Hrq('cyrl/IShortTail', 1162, 'cyrl/I', r271_xn$referglyph$1aao('breveAbove'), r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/iShortTail.upright', null, 'cyrl/i.upright', r271_xn$referglyph$1aao('breveAbove'), r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/N', 8469, function () {
            var _r403_t1;
            var _r403_t0 = this;
            var r403_currentGlyph = _r403_t0;
            r403_currentGlyph.include(r271_MarkSet.capital());
            r403_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_CAP, r271_BBS));
            r403_currentGlyph.include(r271_VBar.r(r271_RightSB, 0, r271_CAP, r271_BBS));
            r403_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, r271_SB, r271_RightSB), r271_union(r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB + r271_HSwToV(r271_BBS), r271_CAP), r271_corner(r271_RightSB - r271_HSwToV(r271_BBS) / 2, r271_CAP / 5)), r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB + r271_HSwToV(r271_BBS) / 2, r271_CAP - r271_CAP / 5), r271_corner(r271_RightSB - r271_HSwToV(r271_BBS), 0)))));
            return void 0;
        });
    });
    return void 0;
});
