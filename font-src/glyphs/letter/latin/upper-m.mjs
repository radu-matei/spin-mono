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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-M', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_slanted, r271_form, r271_slab, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14, _r271_t19, _r271_tag20, _r271_t26, _r271_tag27;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_SLAB = _r271_t1.SLAB;
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
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_Rect = _r271_t4.Rect;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_CyrTailDescender = _r271_t6.CyrTailDescender;
        var r271_PalatalHook = _r271_t6.PalatalHook;
        var r271_xn$FORMFLAT$5sIl = 0;
        var r271_xn$FORMHANGING$5sIl = 1;
        var r271_xn$FORMTURNW$5sIl5 = 2;
        var r271_xn$FORMSAN$5sIl = 3;
        var r271_xn$FORMSANSMALL$5sIl4 = 4;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABAUTO$5sIl = 1;
        var r271_xn$SLABMOTION$5sIl = 2;
        var r271_xn$SLABSMALLCYRILLIC$5sIl6 = 3;
        var r271_xn$SLABFULL$5sIl = 4;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'MShape': r271_MShape };
        });
        var r271_MShape = function () {
            var _r277_t6;
            var _r277_t7 = arguments;
            var _r277_t0 = [].slice.call(_r277_t7, 0);
            var _r277_t1 = [];
            var _r277_t2 = 0;
            while (_r277_t2 < _r277_t0.length) {
                if (!(_r277_t0[_r277_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r277_t1.push(_r277_t0[_r277_t2]);
                _r277_t2 = _r277_t2 + 1;
            }
            var _r277_t3 = _r277_t0;
            var _r277_t4 = _r277_t3.length;
            var _r277_t5 = 0;
            while (_r277_t5 < _r277_t4) {
                _r277_t2 = _r277_t3[_r277_t5];
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'top')
                    r277_top = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'df')
                    r277_df = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'form')
                    r277_form = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'slabType')
                    r277_slabType = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'slanted')
                    r277_slanted = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'kMidHang')
                    r277_kMidHang = _r277_t2.right;
                _r277_t5 = _r277_t5 + 1;
            }
            var r277_top = r1_fallback(r277_top, _r277_t1[0]);
            var r277_df = r1_fallback(r277_df, _r277_t1[1]);
            var r277_form = r1_fallback(r277_form, _r277_t1[2]);
            var r277_slabType = r1_fallback(r277_slabType, _r277_t1[3]);
            var r277_slanted = r1_fallback(r277_slanted, _r277_t1[4]);
            var r277_kMidHang = r1_fallback(r277_kMidHang, _r277_t1[5], r277_df.div);
            return function () {
                var r283___, _r283_t0, _r283_t1, _r283_t2, _r283_t3, _r283_t4, _r283_t5, _r283_t6, _r283_t8;
                var _r283_t7 = this;
                var r283_currentGlyph = _r283_t7;
                var r283_sidesSlope = r277_slanted ? 0.04 : 0;
                var r283_xLeftTop = r277_df.leftSB + r277_top * r283_sidesSlope;
                var r283_xRightTop = r277_df.rightSB - r277_top * r283_sidesSlope;
                var r283_fHasBottomInnerSerif = (_r283_t0 = r277_slabType, _r283_t0 === r271_xn$SLABFULL$5sIl ? true : _r283_t0 === r271_xn$SLABAUTO$5sIl ? r271_SLAB : (r283___ = _r283_t0, false));
                var r283_swSideBot = (_r283_t1 = r277_form, _r283_t1 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t1 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t1 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t1 === r271_xn$FORMHANGING$5sIl ? r271_AdviceStroke(2.5, r277_df.div) : (r283___ = _r283_t1, r271_AdviceStroke(2.75, r277_df.div)));
                var r283_swSideTop = (_r283_t2 = r277_form, _r283_t2 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(3, r277_df.div) : _r283_t2 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(3, r277_df.div) : _r283_t2 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(3, r277_df.div) : (r283___ = _r283_t2, r271_AdviceStroke(4, r277_df.div)));
                var r283_swMiddle = r271_AdviceStroke(4.5, r277_df.div);
                var r283_middleY = (_r283_t3 = r277_form, _r283_t3 === r271_xn$FORMSANSMALL$5sIl4 ? r277_top * 0.55 : _r283_t3 === r271_xn$FORMSAN$5sIl ? r277_top * 0.55 : _r283_t3 === r271_xn$FORMTURNW$5sIl5 ? r277_top * 0.45 : _r283_t3 === r271_xn$FORMHANGING$5sIl ? r277_top * 0.3 / (r277_kMidHang * r277_kMidHang) : (r283___ = _r283_t3, r283_fHasBottomInnerSerif ? r283_swSideBot : 0));
                var r283_kMidShift = (_r283_t4 = r277_form, _r283_t4 === r271_xn$FORMFLAT$5sIl ? 0.75 : (r283___ = _r283_t4, 0.5));
                var r283_kMidBotStrokeShrink = (_r283_t5 = r277_form, _r283_t5 === r271_xn$FORMFLAT$5sIl ? r1_mix(1, r277_df.div, -0.5) : (r283___ = _r283_t5, 1));
                var r283_swMiddleShrunk = r283_kMidBotStrokeShrink * r283_swMiddle;
                r283_currentGlyph.include(r271_tagged('strokeLeftBar', r271_dispiro(r271_flat(r277_df.leftSB, r277_form === r271_xn$FORMSANSMALL$5sIl4 ? r271_Descender : 0, r271_widths.heading(0, r283_swSideBot, r271_Upward)), r271_curl(r1_mix(r277_df.leftSB, r283_xLeftTop, 0.2), r277_top * 0.2, r271_heading(r271_Upward)), r271_straight.up.end(r283_xLeftTop, r277_top, r271_widths.heading(0, r283_swSideTop, r271_Upward)))));
                r283_currentGlyph.include(r271_tagged('strokeRightBar', r271_dispiro(r271_flat(r277_df.rightSB, 0, r271_widths.heading(r283_swSideBot, 0, r271_Upward)), r271_curl(r1_mix(r277_df.rightSB, r283_xRightTop, 0.2), r277_top * 0.2, r271_heading(r271_Upward)), r271_straight.up.end(r283_xRightTop, r277_top, r271_widths.heading(r283_swSideTop, 0, r271_Upward)))));
                r283_currentGlyph.include(r271_dispiro(r271_flat(r283_xLeftTop + r283_kMidShift * r271_HSwToV(r283_swSideTop), r277_top, r271_widths.lhs.heading(r283_swMiddle, r271_Downward)), r271_curl(r277_df.middle - r271_HSwToV(0.5 * r283_swMiddleShrunk), r283_middleY, r271_widths.lhs.heading(r283_swMiddleShrunk, r271_Downward))));
                r283_currentGlyph.include(r271_dispiro(r271_flat(r283_xRightTop - r283_kMidShift * r271_HSwToV(r283_swSideTop), r277_top, r271_widths.rhs.heading(r283_swMiddle, r271_Downward)), r271_curl(r277_df.middle + r271_HSwToV(0.5 * r283_swMiddleShrunk), r283_middleY, r271_widths.rhs.heading(r283_swMiddleShrunk, r271_Downward))));
                var r283_sfT = r271_SerifFrame(r277_top, 0, r283_xLeftTop, r283_xRightTop, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r283_swSideBot), new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3), new r271_xn$NamedParameterPair$2Lrc9b('fForceSymmetric', r277_form !== r271_xn$FORMFLAT$5sIl));
                var r283_sfB = r271_SerifFrame(r277_top, 0, r277_df.leftSB, r277_df.rightSB, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r283_swSideBot), new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3), new r271_xn$NamedParameterPair$2Lrc9b('fForceSymmetric', r277_form !== r271_xn$FORMFLAT$5sIl));
                r283_currentGlyph.include((_r283_t6 = r277_slabType, _r283_t6 === r271_xn$SLABNONE$5sIl ? r271_xn$noshape$3cah() : _r283_t6 === r271_xn$SLABFULL$5sIl ? function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    r311_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r311_currentGlyph.include(r283_sfT.rt.outer);
                    r311_currentGlyph.include(r283_sfB.lb.full);
                    r311_currentGlyph.include(r283_sfB.rb.full);
                    return void 0;
                } : _r283_t6 === r271_xn$SLABAUTO$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r305_t1;
                    var _r305_t0 = this;
                    var r305_currentGlyph = _r305_t0;
                    r305_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r305_currentGlyph.include(r283_sfT.rt.outer);
                    r305_currentGlyph.include(r283_sfB.lb.full);
                    r305_currentGlyph.include(r283_sfB.rb.full);
                    return void 0;
                }) : _r283_t6 === r271_xn$SLABMOTION$5sIl ? function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    r302_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    return void 0;
                } : _r283_t6 === r271_xn$SLABSMALLCYRILLIC$5sIl6 ? function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    r296_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r296_currentGlyph.include(r271_para.isItalic ? r271_xn$noshape$3cah() : r283_sfT.rt.outer);
                    r296_currentGlyph.include(r271_para.isItalic ? r283_sfB.lb.outer : r283_sfB.lb.full);
                    r296_currentGlyph.include(r271_para.isItalic ? r283_sfB.rb.outer : r283_sfB.rb.full);
                    return void 0;
                } : void 0));
                return { 'swSideBot': r283_swSideBot };
            };
        };
        var r271_CyrSoftEmShape = function () {
            var _r316_t6;
            var _r316_t7 = arguments;
            var _r316_t0 = [].slice.call(_r316_t7, 0);
            var _r316_t1 = [];
            var _r316_t2 = 0;
            while (_r316_t2 < _r316_t0.length) {
                if (!(_r316_t0[_r316_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r316_t1.push(_r316_t0[_r316_t2]);
                _r316_t2 = _r316_t2 + 1;
            }
            var _r316_t3 = _r316_t0;
            var _r316_t4 = _r316_t3.length;
            var _r316_t5 = 0;
            while (_r316_t5 < _r316_t4) {
                _r316_t2 = _r316_t3[_r316_t5];
                if (_r316_t2 && _r316_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'top')
                    r316_top = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'df')
                    r316_df = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'form')
                    r316_form = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'slabType')
                    r316_slabType = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'slanted')
                    r316_slanted = _r316_t2.right;
                _r316_t5 = _r316_t5 + 1;
            }
            var r316_top = r1_fallback(r316_top, _r316_t1[0]);
            var r316_df = r1_fallback(r316_df, _r316_t1[1]);
            var r316_form = r1_fallback(r316_form, _r316_t1[2]);
            var r316_slabType = r1_fallback(r316_slabType, _r316_t1[3]);
            var r316_slanted = r1_fallback(r316_slanted, _r316_t1[4]);
            return function () {
                var r322___, _r322_t0, _r322_t2;
                var _r322_t1 = this;
                var r322_currentGlyph = _r322_t1;
                var r322_subDf = r316_df.slice(4, 3);
                var r322_sidesSlope = r316_slanted ? 0.04 : 0;
                var r322_xRightTop = r322_subDf.rightSB - r316_top * r322_sidesSlope;
                var r322_swSideBot = (_r322_t0 = r316_form, _r322_t0 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(2.5, r322_subDf.div) : _r322_t0 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(2.5, r322_subDf.div) : _r322_t0 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(2.5, r322_subDf.div) : _r322_t0 === r271_xn$FORMHANGING$5sIl ? r271_AdviceStroke(2.5, r322_subDf.div) : (r322___ = _r322_t0, r271_AdviceStroke(2.75, r322_subDf.div)));
                r322_currentGlyph.include(r271_MShape(r316_top, r322_subDf, r316_form, r316_slabType, r316_slanted, new r271_xn$NamedParameterPair$2Lrc9b('kMidHang', r316_df.div)));
                r322_currentGlyph.include(r271_HBar.t(r322_xRightTop, r316_df.rightSB, r316_top, r322_swSideBot));
                if (r271_SLAB)
                    r322_currentGlyph.include(r271_VSerif.dr(r316_df.rightSB, r316_top, r271_VJut, r322_swSideBot * r271_VJutStroke / r271_Stroke));
                return void 0;
            };
        };
        var r271_MConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            '': false,
            'slantedSides': true
        }, {
            'hanging': r271_xn$FORMHANGING$5sIl,
            'flatBottom': r271_xn$FORMFLAT$5sIl
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'motionSerifed': r271_xn$SLABMOTION$5sIl,
            'smallCyrl': r271_xn$SLABSMALLCYRILLIC$5sIl6,
            'serifed': r271_xn$SLABFULL$5sIl
        }), {
            'grekCapitalSan': [
                false,
                r271_xn$FORMSAN$5sIl,
                r271_xn$SLABAUTO$5sIl
            ],
            'grekSmallSan': [
                false,
                r271_xn$FORMSANSMALL$5sIl4,
                r271_xn$SLABNONE$5sIl
            ]
        });
        var _r271_t7 = Object.entries(r271_MConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_slanted = _r271_t9[1][0];
            r271_form = _r271_t9[1][1];
            r271_slab = _r271_t9[1][2];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('M.' + r271_suffix, null, function () {
                    var _r332_t1;
                    var _r332_t0 = this;
                    var r332_currentGlyph = _r332_t0;
                    var r332_df = r332_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r332_currentGlyph.include(r332_df.markSet.capital());
                    r332_currentGlyph.include(r271_MShape(r271_CAP, r332_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Meng.' + r271_suffix, null, function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    var r338_df = r338_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r338_currentGlyph.include(r338_df.markSet.capital());
                    var r338_ret_M = r338_currentGlyph.include(r271_MShape(r271_CAP, r338_df, r271_form, r271_slab, r271_slanted));
                    r338_currentGlyph.ejectTagged('serifRB');
                    r338_currentGlyph.include(r271_PalatalHook.rExt(r338_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r338_ret_M.swSideBot)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpM.' + r271_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    var r347_df = r347_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r347_currentGlyph.include(r347_df.markSet.e());
                    r347_currentGlyph.include(r271_MShape(r271_XH, r347_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpMWithDescender.' + r271_suffix, null, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    var r353_df = r353_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r353_currentGlyph.include(r353_df.markSet.p());
                    r353_currentGlyph.include(r271_MShape(r271_XH, r353_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/EmSoft.' + r271_suffix, null, function () {
                    var _r359_t1;
                    var _r359_t0 = this;
                    var r359_currentGlyph = _r359_t0;
                    var r359_df = r359_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r359_currentGlyph.include(r359_df.markSet.capital());
                    r359_currentGlyph.include(r271_CyrSoftEmShape(r271_CAP, r359_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/emSoft.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    var r365_df = r365_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r365_currentGlyph.include(r365_df.markSet.e());
                    r365_currentGlyph.include(r271_CyrSoftEmShape(r271_XH, r365_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('M', 'M');
        r271_xn$linkreducedvariant$5sIl8('M/sansSerif', 'M', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('Meng', 11374, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('smcpM', 7437, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('cyrl/em', 1084, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpM'));
        r271_alias('grek/Mu', 924, 'M');
        r271_xn$aliasreducedvariant$1aao8('grek/Mu/sansSerif', 'grek/Mu', 'M/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Em', 1052, 'M');
        r271_xn$selectvariant$7Hrq('cyrl/EmSoft', 42598, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('cyrl/emSoft', 42599, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/em'));
        var _r271_t15 = r271_xn$derivecomposites$7Hrq;
        var _r271_t16 = 'cyrl/EmTail';
        var _r271_t17 = 1229;
        var _r271_t18 = 'cyrl/Em';
        var _r271_t21 = function () {
            var r375_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrTailDescender.rSideJut(r375_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r375_df.mvs));
        }();
        _r271_t15(_r271_t16, _r271_t17, _r271_t18, _r271_t21);
        var _r271_t22 = r271_xn$derivecomposites$7Hrq;
        var _r271_t23 = 'cyrl/emTail';
        var _r271_t24 = 1230;
        var _r271_t25 = 'cyrl/em';
        var _r271_t28 = function () {
            var r378_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrTailDescender.rSideJut(r378_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r378_df.mvs));
        }();
        _r271_t22(_r271_t23, _r271_t24, _r271_t25, _r271_t28);
        r271_alias('grek/San', 1018, 'M.grekCapitalSan');
        r271_alias('grek/san', 1019, 'smcpMWithDescender.grekSmallSan');
        r271_turned('turnM', null, 'M', r271_HalfAdvance, r271_CAP / 2);
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        var r271_BBBarRight = _r271_t10.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/M', 120132, function () {
            var _r383_t1;
            var _r383_t0 = this;
            var r383_currentGlyph = _r383_t0;
            var r383_df = r271_DivFrame(1, 3);
            var r383_bbs = r271_AdviceStroke(8);
            var r383_bbd = r271_BBD * Math.min(3 / 4, r383_bbs / r271_BBS);
            var r383_kDiag = r271_DiagCorDs(r271_CAP, r383_df.rightSB - r383_df.leftSB, r383_bbd);
            var r383_yTurnPos = r271_CAP * 0.25;
            r383_currentGlyph.include(r271_MarkSet.capital());
            r383_currentGlyph.include(r271_VBar.l(r383_df.leftSB, 0, r271_CAP, r383_bbs));
            r383_currentGlyph.include(r271_BBBarRight(r383_df.rightSB, 0, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r383_bbd), new r271_xn$NamedParameterPair$2Lrc9b('bbs', r383_bbs)));
            var r383_xLeft = r383_df.leftSB + r271_HSwToV(0.5 * r383_bbs);
            var r383_xRight = r383_df.rightSB - r383_bbd - r271_HSwToV(0.5 * r383_bbs);
            var r383_xMiddle = r1_mix(r383_xLeft, r383_xRight, 0.5);
            r383_currentGlyph.include(r271_HBar.t(r383_xLeft, r383_xLeft + r383_kDiag * r383_bbd, r271_CAP, r383_bbs));
            r383_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, r383_yTurnPos, r383_xLeft, r383_xRight), r271_ExtLineCenter(2, r383_bbs, r383_xRight, r271_CAP, r383_xMiddle, r383_yTurnPos)));
            r383_currentGlyph.include(r271_difference(r271_intersection(r271_Rect(r271_CAP, r383_yTurnPos, r383_xLeft, r383_xRight), r271_union(r271_ExtLineCenter(2, r383_bbs, r383_xLeft, r271_CAP, r383_xMiddle, r383_yTurnPos), r271_ExtLineCenter(2, r383_bbs, r383_xLeft + r383_kDiag * r383_bbd, r271_CAP, r383_xMiddle + r383_kDiag * r383_bbd, r383_yTurnPos))), r271_xn$spirooutline$1aao(r271_corner(r271_Width * 4, r1_mix(r271_CAP, r383_yTurnPos, -1)), r271_corner(r1_mix(r383_xRight, r383_xMiddle, -1), r1_mix(r271_CAP, r383_yTurnPos, -1)), r271_corner(r1_mix(r383_xRight, r383_xMiddle, 2), r1_mix(r271_CAP, r383_yTurnPos, 2)), r271_corner(r271_Width * 4, r1_mix(r271_CAP, r383_yTurnPos, 2)))));
            return void 0;
        });
    });
    return void 0;
});
