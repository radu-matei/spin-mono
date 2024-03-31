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
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_Joining = _r1_t9.Joining;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-N', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_tailed, r271_sLT, r271_sLB, r271_sRB, _r271_t13, _r271_t15, _r271_t16, _r271_t17, _r271_tag18, _r271_t19, _r271_tag20;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t7.CurlyTail;
        var r271_nShoulder = _r271_t7.nShoulder;
        var r271_nShoulderKnots = _r271_t7.nShoulderKnots;
        var r271_nShoulderMask = _r271_t7.nShoulderMask;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t8.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_DMBlend = _r271_t8.DMBlend;
        var r271_MidHook = _r271_t8.MidHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t9.CyrDescender;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_RetroflexHook = _r271_t9.RetroflexHook;
        var r271_EngHook = _r271_t9.EngHook;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t10.SerifFrame;
        var r271_AdjustTrailingAnchor = function () {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_trAnchor = r281_currentGlyph.baseAnchors.trailing;
                if (r281_trAnchor)
                    r281_currentGlyph.setBaseAnchor('trailing', r281_trAnchor.x + r271_SideJut, r281_trAnchor.y);
                return void 0;
            };
        };
        var r271_NHTB = function (r283_df, r283_top) {
            var _r283_t0, _r283_t1;
            return r271_VBar.l(r283_df.leftSB, 0, r283_top);
        };
        var r271_NTopLeftSerif = function (r284_df, r284_top) {
            var _r284_t0, _r284_t1;
            var r284_sf = r271_SerifFrame.fromDf(r284_df, r284_top, 0);
            return r284_sf.lt.outer;
        };
        var r271_NBottomLeftSerif = function (r285_df, r285_y) {
            var _r285_t0, _r285_t1;
            var r285_sf = r271_SerifFrame.fromDf(r285_df, r271_Ascender, r285_y);
            return r285_sf.lb.full;
        };
        var r271_NBottomLeftOuterSerif = function (r286_df, r286_y) {
            var _r286_t0, _r286_t1;
            var r286_sf = r271_SerifFrame.fromDf(r286_df, r271_Ascender, r286_y);
            return r286_sf.lb.outer;
        };
        var r271_NBottomLeftYatSerif = function (r287_df, r287_y) {
            var _r287_t0, _r287_t1;
            var r287_sf = r271_SerifFrame.fromDf(r287_df, r271_Ascender, r287_y);
            return r287_sf.enoughSpaceForFullSerifs ? r287_sf.lb.full : r287_sf.lb.outer;
        };
        var r271_NBottomRightSerifUpright = function (r288_df, r288_y) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                var r290_sf = r271_SerifFrame.fromDf(r288_df, r271_Ascender, r288_y);
                r290_currentGlyph.include(r290_sf.rb.full);
                r290_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_NBottomRightSerifItalic = function (r293_df, r293_y) {
            var _r293_t0, _r293_t1;
            return function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                var r295_sf = r271_SerifFrame.fromDf(r293_df, r271_Ascender, r293_y);
                r295_currentGlyph.include(r295_sf.rb.outer);
                r295_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_NBottomRightYatSerif = function (r298_df, r298_y) {
            var _r298_t0, _r298_t1;
            var r298_sf = r271_SerifFrame.fromDf(r298_df, r271_Ascender, r298_y);
            return r298_sf.enoughSpaceForFullSerifs ? r298_sf.rb.full : r271_xn$noshape$3cah();
        };
        var r271_EaredBody = function (r299_top, r299_left, r299_right, r299_yBR, r299_sw) {
            var _r299_t0, _r299_t1;
            return function () {
                var _r301_t1;
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                r301_currentGlyph.include(r271_VBar.l(r299_left, 0, r299_top, r299_sw));
                r301_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r299_left + r271_HSwToV(r299_sw)), new r271_xn$NamedParameterPair$2Lrc9b('right', r299_right), new r271_xn$NamedParameterPair$2Lrc9b('top', r299_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r299_yBR), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r299_sw)));
                return void 0;
            };
        };
        var r271_EarlessCornerBody = function (r310_top, r310_left, r310_right, r310_yBR, r310_sw) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                r312_currentGlyph.include(r271_VBar.l(r310_left, 0, r310_top - r271_DToothlessRise, r310_sw));
                r312_currentGlyph.include(r271_dispiro(r271_widths.rhs(r310_sw), r271_g4(r310_left, r310_top - r271_DToothlessRise), r271_g4(r1_mix(r310_left, r310_right, 0.5) - r271_CorrectionOMidS, r310_top - r271_O), r271_archv(), r271_flat(r310_right, r310_top - r271_SmallArchDepthB), r271_curl(r310_right, r310_yBR, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_EarlessRoundedBody = function (r315_top, r315_left, r315_right, r315_yBR, r315_sw) {
            var _r315_t0, _r315_t1;
            return function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                r317_currentGlyph.include(r271_dispiro(r271_widths.rhs(r315_sw), r271_flat(r315_left, 0, r271_heading(r271_Upward)), r271_curl(r315_left, r315_top - r271_SmallArchDepthA), r271_arcvh(), r271_g4(r1_mix(r315_left, r315_right, 0.5) - r271_CorrectionOMidS, r315_top - r271_O), r271_archv(), r271_flat(r315_right, r315_top - r271_SmallArchDepthB), r271_curl(r315_right, r315_yBR, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_EndingTail = function (r319_right, r319_yBot, r319_yBR, r319_sw) {
            var _r319_t0, _r319_t1;
            return function () {
                var _r321_t1;
                var _r321_t0 = this;
                var r321_currentGlyph = _r321_t0;
                r321_currentGlyph.include(r271_RightwardTailedBar(r319_right, r319_yBot, r319_yBR, r319_sw));
                r321_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_NConfig = r1_SuffixCfg.weave({
            '': r271_EaredBody,
            'earlessCorner': r271_EarlessCornerBody,
            'earlessRounded': r271_EarlessRoundedBody,
            'earlessCornerHTB': r271_EarlessCornerBody,
            'earlessRoundedHTB': r271_EarlessRoundedBody
        }, {
            'straight': 0,
            'tailed': 1
        }, function (r324_body, r324_tail) {
            var r324___, _r324_t0, _r324_t1, _r324_t2, _r324_t3, _r324_t4, _r324_t5;
            return {
                'serifless': [
                    void 0,
                    void 0,
                    void 0
                ],
                'topLeftSerifed': [
                    r271_NTopLeftSerif,
                    void 0,
                    void 0
                ],
                'motionSerifed': [
                    (_r324_t0 = r324_body, _r324_t0 === 'earlessCorner' || _r324_t0 === 'earlessRounded' ? void 0 : _r324_t0 === 'earlessCornerHTB' || _r324_t0 === 'earlessRoundedHTB' ? r271_NHTB : (r324___ = _r324_t0, r271_NTopLeftSerif)),
                    void 0,
                    r324_tail !== 'tailed' ? r271_NBottomRightSerifItalic : void 0
                ],
                'serifed': [
                    (_r324_t1 = r324_body, _r324_t1 === 'earlessCorner' || _r324_t1 === 'earlessRounded' ? void 0 : _r324_t1 === 'earlessCornerHTB' || _r324_t1 === 'earlessRoundedHTB' ? r271_NHTB : (r324___ = _r324_t1, r271_NTopLeftSerif)),
                    r271_NBottomLeftSerif,
                    r324_tail !== 'tailed' ? r271_NBottomRightSerifUpright : void 0
                ],
                'serifedItalicYatCorner': [
                    (_r324_t2 = r324_body, _r324_t2 === 'earlessCorner' || _r324_t2 === 'earlessRounded' ? void 0 : _r324_t2 === 'earlessCornerHTB' || _r324_t2 === 'earlessRoundedHTB' ? r271_NHTB : (r324___ = _r324_t2, r271_NTopLeftSerif)),
                    r271_NBottomLeftYatSerif,
                    r271_NBottomRightYatSerif
                ],
                'serifedItalicYatCursive': [
                    (_r324_t3 = r324_body, _r324_t3 === 'earlessCorner' || _r324_t3 === 'earlessRounded' ? void 0 : _r324_t3 === 'earlessCornerHTB' || _r324_t3 === 'earlessRoundedHTB' ? r271_NHTB : (r324___ = _r324_t3, r271_NTopLeftSerif)),
                    r271_NBottomLeftYatSerif,
                    void 0
                ]
            };
        });
        var _r271_t11 = Object.entries(r271_NConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Body = _r271_t13[1][0];
            r271_tailed = _r271_t13[1][1];
            r271_sLT = _r271_t13[1][2][0];
            r271_sLB = _r271_t13[1][2][1];
            r271_sRB = _r271_t13[1][2][2];
            _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('n.' + r271_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    r330_currentGlyph.include(r271_MarkSet.e());
                    r330_currentGlyph.setBaseAnchor('trailing', r271_RightSB, 0);
                    r330_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_tailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0, r271_Stroke));
                    if (r271_tailed)
                        r330_currentGlyph.include(r271_EndingTail(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r330_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r330_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    if (r271_sRB)
                        r330_currentGlyph.include(r271_sRB(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eng.' + r271_suffix, null, function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_MarkSet.p());
                    r340_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    r340_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    if (r271_sLT)
                        r340_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r340_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nHookBottom.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r271_MarkSet.e());
                    r348_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    r348_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, 0));
                    if (r271_sLT)
                        r348_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r348_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nCurlyTail.' + r271_suffix, null, function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    r356_currentGlyph.include(r271_MarkSet.e());
                    var r356_fine = r271_AdviceStroke(4);
                    var r356_rinner = r1_clamp(r271_Width * 0.065, r271_XH * 0.05, r356_fine * 0.35);
                    var r356_sw = r271_AdviceStroke(3);
                    var r356_m1 = Math.min(r271_RightSB, r271_Width - r356_rinner * 2 - r356_fine - r271_OX);
                    var r356_x2 = r1_mix(r271_SB, r356_m1, 0.5);
                    var r356_y2 = -r356_fine;
                    r356_currentGlyph.include(r271_Body(r271_XH, r271_SB, r356_m1, r356_rinner * 2 + r356_fine, r356_sw));
                    r356_currentGlyph.include(r271_dispiro(r271_straight.down.start(r356_m1, r356_rinner * 2 + r356_fine - r271_O, r271_widths.rhs.heading(r356_sw, r271_Downward)), r271_CurlyTail(r356_fine, r356_rinner, r356_m1, 0, r356_m1 + r356_rinner * 2 + r356_fine, r356_x2, r356_y2)));
                    if (r271_sLT)
                        r356_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r356_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('NExt.' + r271_suffix, null, function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    r364_currentGlyph.include(r271_MarkSet.capDesc());
                    r364_currentGlyph.include(r271_Body(r271_CAP, r271_SB, r271_RightSB, r271_tailed ? r271_CAP - r271_SmallArchDepthB + r271_O : r271_Descender, r271_Stroke));
                    if (r271_tailed)
                        r364_currentGlyph.include(r271_EndingTail(r271_RightSB, r271_Descender, r271_CAP - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r364_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_CAP));
                    if (r271_sLB)
                        r364_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    if (r271_sRB)
                        r364_currentGlyph.include(r271_sRB(r271_DivFrame(1), r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nExt.' + r271_suffix, null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.include(r271_MarkSet.p());
                    r373_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_tailed ? r271_XH - r271_SmallArchDepthB + r271_O : r271_Descender, r271_Stroke));
                    if (r271_tailed)
                        r373_currentGlyph.include(r271_EndingTail(r271_RightSB, r271_Descender, r271_XH - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r373_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r373_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    if (r271_sRB)
                        r373_currentGlyph.include(r271_sRB(r271_DivFrame(1), r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/eta.' + r271_suffix, null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    var r382_currentGlyph = _r382_t0;
                    r382_currentGlyph.include(r271_MarkSet.p());
                    r382_currentGlyph.setBaseAnchor('lf', r271_SB + r271_HalfStroke, 0);
                    r382_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_Descender, r271_Stroke));
                    if (r271_sLT)
                        r382_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nCrossedTail.' + r271_suffix, null, function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    r389_currentGlyph.include(r271_MarkSet.e());
                    var r389_fine = r271_AdviceStroke(4);
                    var r389_rinner = r271_XH * 0.15 - r389_fine * 0.75;
                    var r389_sw = r271_AdviceStroke(3);
                    var r389_m1 = r271_RightSB - r271_HSwToV(r389_sw);
                    var r389_m2 = r1_mix(r271_SB, r271_RightSB, 0.5) - r271_HSwToV(0.5 * r389_fine);
                    var r389_x2 = r271_RightSB + r271_SideJut;
                    var r389_y2 = r389_rinner * 2 + r389_fine - r271_O;
                    r389_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r389_y2 + r271_O, r389_sw));
                    r389_currentGlyph.include(r271_dispiro(r271_straight.down.start(r271_RightSB, r389_y2, r271_widths.rhs.heading(r389_sw, r271_Downward)), r271_CurlyTail(r389_fine, r389_rinner, r389_m1, 0, r389_m2, r389_x2, r389_y2, new r271_xn$NamedParameterPair$2Lrc9b('adj', 0.2))));
                    if (r271_sLT)
                        r389_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r389_currentGlyph.include(r389_m2 - (r271_SB + r271_HSwToV(r271_HalfStroke) + r271_Jut) > 0.01 * r271_Width ? r271_NBottomLeftSerif(r271_DivFrame(1), 0) : r271_NBottomLeftOuterSerif(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('engCrossedTail.' + r271_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r271_MarkSet.p());
                    r398_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    var r398_fine = r271_AdviceStroke(3.5);
                    var r398_rinner = (-r271_Descender - 2 * r398_fine) / 3;
                    var r398_m1 = r271_RightSB - r271_HSwToV(r271_Stroke);
                    var r398_x2 = r1_mix(r271_RightSB, r398_m1, 0.25);
                    var r398_y2 = r271_Descender + r271_O;
                    r398_currentGlyph.include(r271_dispiro(r271_straight.down.start(r271_RightSB, -r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Downward)), r271_CurlyTail(r398_fine, r398_rinner, r398_m1, r271_Descender, r398_m1 - r271_HookX, r398_x2, r398_y2)));
                    if (r271_sLT)
                        r398_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    if (r271_sLB)
                        r398_currentGlyph.include(r271_sLB(r271_DivFrame(1), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('RInsular.' + r271_suffix, null, function () {
                    var _r406_t1;
                    var _r406_t0 = this;
                    var r406_currentGlyph = _r406_t0;
                    r406_currentGlyph.include(r271_MarkSet.capDesc());
                    r406_currentGlyph.include(r271_Body(r271_CAP, r271_SB, r271_RightSB, -r271_Descender, r271_Stroke));
                    r406_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, -r271_Descender));
                    r406_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, 0));
                    if (r271_sLT)
                        r406_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rInsular.' + r271_suffix, null, function () {
                    var _r414_t1;
                    var _r414_t0 = this;
                    var r414_currentGlyph = _r414_t0;
                    r414_currentGlyph.include(r271_MarkSet.p());
                    r414_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, -r271_Descender, r271_Stroke));
                    r414_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, -r271_Descender));
                    r414_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, 0));
                    if (r271_sLT)
                        r414_currentGlyph.include(r271_sLT(r271_DivFrame(1), r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/peMidHook.italic.' + r271_suffix, null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    var r422_df = r422_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r422_currentGlyph.include(r422_df.markSet.p());
                    var r422_dfHalf = r422_df.slice(3, 2);
                    r422_currentGlyph.include(r271_Body(r271_XH, r422_dfHalf.leftSB, r422_dfHalf.rightSB, r271_tailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0, r422_dfHalf.mvs));
                    if (r271_tailed)
                        r422_currentGlyph.include(r271_EndingTail(r422_dfHalf.rightSB, 0, r271_XH - r271_SmallArchDepthB, r422_dfHalf.mvs));
                    if (r271_sLT)
                        r422_currentGlyph.include(r271_sLT(r422_dfHalf, r271_XH));
                    if (r271_sLB)
                        r422_currentGlyph.include(r271_sLB(r422_dfHalf, 0));
                    if (r271_sRB)
                        r422_currentGlyph.include(r271_sRB(r422_dfHalf, 0));
                    r422_currentGlyph.include(r271_MidHook.m(r422_df, r271_XH));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yat.italic/base.' + r271_suffix, null, function () {
                    var _r433_t1;
                    var _r433_t0 = this;
                    var r433_currentGlyph = _r433_t0;
                    var r433_df = r433_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r433_currentGlyph.include(r433_df.markSet.e());
                    var r433_dfSub = r433_df.slice(3, 2);
                    r433_currentGlyph.include(r271_Body(r271_XH, r433_dfSub.leftSB, r433_dfSub.rightSB, r271_XH - r271_SmallArchDepthB - 0.1, r433_dfSub.mvs));
                    if (r271_sLT)
                        r433_currentGlyph.include(r271_sLT(r433_dfSub, r271_XH));
                    if (r271_sLB)
                        r433_currentGlyph.include(r271_sLB(r433_dfSub, 0));
                    if (r271_sRB)
                        r433_currentGlyph.include(r271_sRB(r433_dfSub, 0));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('n', 'n');
        r271_xn$linkreducedvariant$5sIl8('n/sansSerif', 'n', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('n/descBase', 'n');
        r271_xn$selectvariant$7Hrq('cyrl/pe.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'n'));
        r271_xn$selectvariant$7Hrq('cyrl/peItalicDescBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'n'));
        r271_xn$selectvariant$7Hrq('n/lTailBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'n'));
        r271_alias('cyrl/pe.BGR', null, 'n');
        r271_xn$selectvariant$7Hrq('eng', 331);
        r271_xn$linkreducedvariant$5sIl8('eng/phoneticRight', 'eng');
        r271_xn$selectvariant$7Hrq('nHookBottom', 627, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('nCurlyTail', 565, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('nCrossedTail', 43835, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('engCrossedTail', 43836, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('eng/lTailBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'eng'));
        r271_xn$selectvariant$7Hrq('RInsular', 42882, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng/lTailBase'));
        r271_xn$selectvariant$7Hrq('rInsular', 42883, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng/lTailBase'));
        r271_xn$selectvariant$7Hrq('grek/eta', 951);
        r271_xn$linkreducedvariant$5sIl8('grek/eta/sansSerif', 'grek/eta', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('NExt', 544, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'n'));
        r271_xn$selectvariant$7Hrq('nExt', 414, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'n'));
        r271_xn$derivecomposites$7Hrq('nDescender', 42897, 'n/descBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('nPalatalHook', 7559, 'n/descBase', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/peDescender.italic', null, 'cyrl/peItalicDescBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$selectvariant$7Hrq('cyrl/peMidHook.italic', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/pe.italic'));
        r271_xn$selectvariant$7Hrq('cyrl/yat.italic/base/corner', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yat.italic/base'));
        r271_xn$selectvariant$7Hrq('cyrl/yat.italic/base/cursive', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yat.italic/base'));
        (function () {
            r271_xn$deriveglyphs$7Hrq('nApostrophe/comma', null, 'commaAbove/asPunctuation', function (r457_src, r457_gr) {
                var _r457_t0, _r457_t1;
                return function () {
                    var _r459_t1;
                    var _r459_t0 = this;
                    var r459_currentGlyph = _r459_t0;
                    r459_currentGlyph.include(r271_xn$withtransform$5sIl(r271_Translate(r271_Width + r271_SB - r271_Middle, 0), r271_xn$referglyph$1aao(r457_src)));
                    return void 0;
                };
            });
            return r271_xn$derivecomposites$7Hrq('nApostrophe', 329, 'n', 'nApostrophe/comma');
        }());
        r271_xn$deriveglyphs$7Hrq('nLTail', 626, 'n/lTailBase', function (r461_src, r461_srl) {
            var _r461_t0, _r461_t1;
            return function () {
                var _r463_t1;
                var _r463_t0 = this;
                var r463_currentGlyph = _r463_t0;
                r463_currentGlyph.include(r271_xn$referglyph$1aao(r461_src), r271_AS_BASE, r271_ALSO_METRICS);
                r463_currentGlyph.ejectTagged('serifLB');
                r463_currentGlyph.include(r271_PalatalHook.lExt(r271_SB, 0));
                return void 0;
            };
        });
        var _r271_t14 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        var r271_BBBarLeft = _r271_t14.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/n', 120159, function () {
            var _r470_t1;
            var _r470_t0 = this;
            var r470_currentGlyph = _r470_t0;
            var r470_df = r470_currentGlyph.include(r271_DivFrame(1, 2));
            r470_currentGlyph.include(r470_df.markSet.e());
            var r470_bbs = r271_BBS;
            var r470_bbd = r271_BBD;
            r470_currentGlyph.include(r271_BBBarLeft(r470_df.leftSB, 0, r271_XH));
            r470_currentGlyph.include(r271_HBar.b(r470_df.rightSB - r470_bbd, r470_df.rightSB, 0, r470_bbs));
            r470_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r470_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r470_df.leftSB + r470_bbd + r271_HSwToV(r470_bbs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r470_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
            r470_currentGlyph.include(r271_intersection(r271_VBar.r(r470_df.rightSB - r470_bbd, 0, r271_XH, r470_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r470_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r470_df.leftSB + r470_bbd + r271_HSwToV(r470_bbs) + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r470_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine))));
            return void 0;
        });
    });
    return void 0;
});
