'use strict';
var _s0_t0;
export {
    _s0_t0 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t0 = r1_apply = function () {
    var r264_block, _r264_t4, _r264_t6;
    var _r264_t3 = this;
    var _r264_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r264_t1 = _r264_t0.length;
    var _r264_t2 = 0;
    var _r264_t5 = _r264_t2 < _r264_t1;
    while (_r264_t5) {
        _r264_t6 = (r264_block = _r264_t0[_r264_t2], r264_block(_r264_t3), _r264_t2 = _r264_t2 + 1);
        _r264_t5 = _r264_t2 < _r264_t1;
    }
    return _r264_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r268_xn$Capture_Ext$2Lrc2b) {
    var _r268_t0, _r268_t1;
    r268_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r268_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Orthography', function (r269_xn$Capture$2Lrc8, r269_xn$ExportCapture$2Lrc4b) {
        var _r269_t6, _r269_t7;
        var _r269_t0 = r269_xn$Capture$2Lrc8;
        var r269_xn$createAndSaveGlyphImpl$2Lrc3c = _r269_t0['$createAndSaveGlyphImpl$'];
        var r269_xn$NamedParameterPair$2Lrc9b = _r269_t0['$NamedParameterPair$'];
        var r269_xn$Exec$2Lrc5 = _r269_t0['$Exec$'];
        var _r269_t1 = r269_xn$Capture$2Lrc8.Metrics;
        var _r269_t2 = r269_xn$Capture$2Lrc8.SpiroFns;
        var _r269_t3 = r269_xn$Capture$2Lrc8.BooleFns;
        var _r269_t4 = r269_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r269_xn$orthographicitalic$3DrD = _r269_t4['orthographic-italic'];
        var _r269_t5 = r269_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r269_CreateAccentedComposition = _r269_t5.CreateAccentedComposition;
        r269_xn$orthographicitalic$3DrD('cyrl/de', 1076);
        r269_xn$orthographicitalic$3DrD('cyrl/dzhe', 1119);
        r269_xn$orthographicitalic$3DrD('cyrl/dzzhe', 1323);
        r269_xn$orthographicitalic$3DrD('cyrl/i', 1080);
        r269_xn$orthographicitalic$3DrD('cyrl/iShortTail', 1163);
        r269_xn$orthographicitalic$3DrD('cyrl/sha', 1096);
        r269_xn$orthographicitalic$3DrD('cyrl/shcha', 1097);
        r269_xn$orthographicitalic$3DrD('cyrl/te', 1090);
        r269_xn$orthographicitalic$3DrD('cyrl/teDescender', 1197);
        r269_xn$orthographicitalic$3DrD('cyrl/tse', 1094);
        r269_xn$orthographicitalic$3DrD('cyrl/tetse', 1205);
        r269_xn$orthographicitalic$3DrD('cyrl/tjeKomi', 1295);
        r269_xn$orthographicitalic$3DrD('cyrl/yat', 1123);
        r269_xn$orthographicitalic$3DrD('cyrl/pe', 1087);
        r269_xn$orthographicitalic$3DrD('cyrl/peMidHook', 1191);
        r269_xn$orthographicitalic$3DrD('cyrl/peDescender', 1317);
        r269_xn$orthographicitalic$3DrD('cyrl/dche', 1325);
        r269_xn$orthographicitalic$3DrD('cyrl/ghe', 1075);
        r269_xn$orthographicitalic$3DrD('cyrl/ge', 1169);
        r269_xn$orthographicitalic$3DrD('cyrl/ghayn', 1171);
        r269_xn$orthographicitalic$3DrD('cyrl/gheDescender', 1271);
        r269_xn$orthographicitalic$3DrD('cyrl/ve', 1074);
        r269_xn$orthographicitalic$3DrD('cyrl/gheStrokeHook', 1275);
        r269_xn$orthographicitalic$3DrD('cyrl/teThreeLeg', 7301);
        r269_xn$orthographicitalic$3DrD('cyrl/dzze', 42633);
        r269_xn$orthographicitalic$3DrD('latn/yatSakha', 43872);
        r269_CreateAccentedComposition('cyrl/ibreve', 1081, 'cyrl/i', 'breveAbove');
        r269_CreateAccentedComposition('cyrl/gje', 1107, 'cyrl/ghe', 'acuteAbove');
        return r269_CreateAccentedComposition('cyrl/igrave', 1117, 'cyrl/i', 'graveAbove');
    });
    return void 0;
});
