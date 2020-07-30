(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 512,
	height: 512,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.main_00000 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.main_00001 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.main_00002 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.main_00003 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.main_00004 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.main_00005 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.main_00006 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.main_00007 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.main_00008 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.main_00009 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.main_00010 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.main_00011 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.main_00012 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.main_00013 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.main_00014 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.main_00015 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.main_00016 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.main_00017 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.main_00018 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.main_00019 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.main_00020 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.main_00021 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.main_00022 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.main_00023 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.main_00024 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.main_00025 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.main_00026 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.main_00027 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.main_00028 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.main_00029 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.main_00030 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.main_00031 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.main_00032 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.main_00033 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.main_00034 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.main_00035 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.main_00036 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.main_00037 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.main_00038 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.main_00039 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.main_00040 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.main_00041 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.main_00042 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.main_00043 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.main_00044 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.main_00045 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.main_00046 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.main_00047 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.main_00048 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.main_00049 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.main_00050 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.main_00051 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.main_00052 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.main_00053 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.main_00054 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.main_00055 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.main_00056 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.main_00057 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.main_00058 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.main_00059 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.main_00060 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.main_00061 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.main_00062 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.main_00063 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.main_00064 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.main_00065 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.main_00066 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.main_00067 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.main_00068 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.main_00069 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.main_00070 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.main_00071 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.main_00072 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.main_00073 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.main_00074 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.main_00075 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.main_00076 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.main_00077 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.main_00078 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.main_00079 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.main_00080 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.main_00081 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.main_00082 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.main_00083 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.main_00084 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.main_00085 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.main_00086 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.main_00087 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.main_00088 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.main_00089 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.main_00090 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.main_00091 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.main_00092 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.main_00093 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.main_00094 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.main_00095 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.main_00096 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.main_00097 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.main_00098 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.main_00099 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.main_00100 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.main_00101 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.main_00102 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.main_00103 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.main_00104 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.main_00105 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.main_00106 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.main_00107 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.main_00108 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.main_00109 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.main_00110 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.main_00111 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.main_00112 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.main_00113 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.main_00114 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.main_00115 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.main_00116 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.main_00117 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.main_00118 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.main_00119 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.main_00120 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.main_00121 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.main_00122 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.main_00123 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.main_00124 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.main_00125 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.main_00126 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.main_00127 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.main_00128 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.main_00129 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.main_00130 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.main_00131 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.main_00132 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.main_00133 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.main_00134 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.main_00135 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.main_00136 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.main_00137 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.main_00138 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.main_00139 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.main_00140 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.main_00141 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.main_00142 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.main_00143 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.main_00144 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.main_00145 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.main_00146 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.main_00147 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.main_00148 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.main_00149 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.main_00150 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.main_00151 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.main_00152 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.main_00153 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.main_00154 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.main_00155 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.main_00156 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.main_00157 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.main_00158 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.main_00159 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.main_00160 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.main_00161 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.main_00162 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.main_00163 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.main_00164 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.main_00165 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.main_00166 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.main_00167 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.main_00168 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.main_00169 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.main_00170 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.main_00171 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.main_00172 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.main_00173 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.main_00174 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.main_00175 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.main_00176 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.main_00177 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.main_00178 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.main_00179 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.main_00180 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.main_00181 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.main_00182 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.main_00183 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.main_00184 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.main_00185 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.main_00186 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.main_00187 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.main_00188 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.main_00189 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.main_00190 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.main_00191 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.main_00192 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.main_00193 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.main_00194 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.main_00195 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.main_00196 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.main_00197 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.main_00198 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.main_00199 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.main_00200 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.main_00201 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.main_00202 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.main_00203 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.main_00204 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.main_00205 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.main_00206 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.main_00207 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.main_00208 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.main_00209 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.main_00210 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.main_00211 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.main_00212 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.main_00213 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.main_00214 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.main_00215 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.main_00216 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.main_00217 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.main_00218 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.main_00219 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.main_00220 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.main_00221 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.main_00222 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.main_00223 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.main_00224 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.main_00225 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.main_00226 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.main_00227 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.main_00228 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.main_00229 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.main_00230 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.main_00231 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.main_00232 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.main_00233 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.main_00234 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.main_00235 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.main_00236 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.main_00237 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.main_00238 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.main_00239 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.main_00240 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.main_00241 = function() {
	this.spriteSheet = ss["logo_atlas_"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.main_00242 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.main_00243 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.main_00244 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.main_00245 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.main_00246 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.main_00247 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.main_00248 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.main_00249 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.main_00250 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.main_00251 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.main_00252 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.main_00253 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.main_00254 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.main_00255 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.main_00256 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.main_00257 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.main_00258 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.main_00259 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.main_00260 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.main_00261 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.main_00262 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.main_00263 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.main_00264 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.main_00265 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.main_00266 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.main_00267 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.main_00268 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.main_00269 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.main_00270 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.main_00271 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.main_00272 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.main_00273 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.main_00274 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.main_00275 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.main_00276 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.main_00277 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.main_00278 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.main_00279 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.main_00280 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.main_00281 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.main_00282 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.main_00283 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.main_00284 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.main_00285 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.main_00286 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.main_00287 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.main_00288 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.main_00289 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.main_00290 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.main_00291 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.main_00292 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.main_00293 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.main_00294 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.main_00295 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.main_00296 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.main_00297 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.main_00298 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.main_00299 = function() {
	this.spriteSheet = ss["logo_atlas_2"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.ВОССТАНОВИТЬ_Безымянный1_202073016229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.main_00000();

	this.instance_1 = new lib.main_00001();
	this.instance_1.setTransform(19.5,0);

	this.instance_2 = new lib.main_00002();
	this.instance_2.setTransform(19.5,0);

	this.instance_3 = new lib.main_00003();
	this.instance_3.setTransform(19.5,0);

	this.instance_4 = new lib.main_00004();
	this.instance_4.setTransform(19.5,0);

	this.instance_5 = new lib.main_00005();
	this.instance_5.setTransform(19.5,0);

	this.instance_6 = new lib.main_00006();
	this.instance_6.setTransform(19.5,0);

	this.instance_7 = new lib.main_00007();
	this.instance_7.setTransform(19.5,0);

	this.instance_8 = new lib.main_00008();
	this.instance_8.setTransform(19.5,0);

	this.instance_9 = new lib.main_00009();
	this.instance_9.setTransform(19.5,0);

	this.instance_10 = new lib.main_00010();
	this.instance_10.setTransform(19.5,0);

	this.instance_11 = new lib.main_00011();
	this.instance_11.setTransform(19.5,0);

	this.instance_12 = new lib.main_00012();
	this.instance_12.setTransform(19.5,0);

	this.instance_13 = new lib.main_00013();
	this.instance_13.setTransform(19.5,0);

	this.instance_14 = new lib.main_00014();
	this.instance_14.setTransform(19.5,0);

	this.instance_15 = new lib.main_00015();
	this.instance_15.setTransform(19.5,0);

	this.instance_16 = new lib.main_00016();
	this.instance_16.setTransform(19.5,0);

	this.instance_17 = new lib.main_00017();
	this.instance_17.setTransform(19.5,0);

	this.instance_18 = new lib.main_00018();
	this.instance_18.setTransform(19.5,0);

	this.instance_19 = new lib.main_00019();
	this.instance_19.setTransform(19.5,0);

	this.instance_20 = new lib.main_00020();
	this.instance_20.setTransform(19.5,0);

	this.instance_21 = new lib.main_00021();
	this.instance_21.setTransform(19.5,0);

	this.instance_22 = new lib.main_00022();
	this.instance_22.setTransform(19.5,0);

	this.instance_23 = new lib.main_00023();
	this.instance_23.setTransform(19.5,0);

	this.instance_24 = new lib.main_00024();
	this.instance_24.setTransform(19.5,0);

	this.instance_25 = new lib.main_00025();
	this.instance_25.setTransform(19.5,0);

	this.instance_26 = new lib.main_00026();
	this.instance_26.setTransform(19.5,0);

	this.instance_27 = new lib.main_00027();
	this.instance_27.setTransform(19.5,0);

	this.instance_28 = new lib.main_00028();
	this.instance_28.setTransform(19.5,0);

	this.instance_29 = new lib.main_00029();
	this.instance_29.setTransform(19.5,0);

	this.instance_30 = new lib.main_00030();
	this.instance_30.setTransform(19.5,0);

	this.instance_31 = new lib.main_00031();
	this.instance_31.setTransform(19.5,0);

	this.instance_32 = new lib.main_00032();
	this.instance_32.setTransform(19.5,0);

	this.instance_33 = new lib.main_00033();
	this.instance_33.setTransform(19.5,0);

	this.instance_34 = new lib.main_00034();
	this.instance_34.setTransform(19.5,0);

	this.instance_35 = new lib.main_00035();
	this.instance_35.setTransform(19.5,0);

	this.instance_36 = new lib.main_00036();
	this.instance_36.setTransform(19.5,0);

	this.instance_37 = new lib.main_00037();
	this.instance_37.setTransform(19.5,0);

	this.instance_38 = new lib.main_00038();
	this.instance_38.setTransform(19.5,0);

	this.instance_39 = new lib.main_00039();
	this.instance_39.setTransform(19.5,0);

	this.instance_40 = new lib.main_00040();
	this.instance_40.setTransform(19.5,0);

	this.instance_41 = new lib.main_00041();
	this.instance_41.setTransform(19.5,0);

	this.instance_42 = new lib.main_00042();
	this.instance_42.setTransform(19.5,0);

	this.instance_43 = new lib.main_00043();
	this.instance_43.setTransform(19.5,0);

	this.instance_44 = new lib.main_00044();
	this.instance_44.setTransform(19.5,0);

	this.instance_45 = new lib.main_00045();
	this.instance_45.setTransform(19.5,0);

	this.instance_46 = new lib.main_00046();
	this.instance_46.setTransform(19.5,0);

	this.instance_47 = new lib.main_00047();
	this.instance_47.setTransform(19.5,0);

	this.instance_48 = new lib.main_00048();
	this.instance_48.setTransform(19.5,0);

	this.instance_49 = new lib.main_00049();
	this.instance_49.setTransform(19.5,0);

	this.instance_50 = new lib.main_00050();
	this.instance_50.setTransform(19.5,0);

	this.instance_51 = new lib.main_00051();
	this.instance_51.setTransform(19.5,0);

	this.instance_52 = new lib.main_00052();
	this.instance_52.setTransform(19.5,0);

	this.instance_53 = new lib.main_00053();
	this.instance_53.setTransform(19.5,0);

	this.instance_54 = new lib.main_00054();
	this.instance_54.setTransform(19.5,0);

	this.instance_55 = new lib.main_00055();
	this.instance_55.setTransform(19.5,0);

	this.instance_56 = new lib.main_00056();
	this.instance_56.setTransform(19.5,0);

	this.instance_57 = new lib.main_00057();
	this.instance_57.setTransform(19.5,0);

	this.instance_58 = new lib.main_00058();
	this.instance_58.setTransform(19.5,0);

	this.instance_59 = new lib.main_00059();
	this.instance_59.setTransform(19.5,0);

	this.instance_60 = new lib.main_00060();
	this.instance_60.setTransform(19.5,0);

	this.instance_61 = new lib.main_00061();
	this.instance_61.setTransform(19.5,0);

	this.instance_62 = new lib.main_00062();
	this.instance_62.setTransform(19.5,0);

	this.instance_63 = new lib.main_00063();
	this.instance_63.setTransform(19.5,0);

	this.instance_64 = new lib.main_00064();
	this.instance_64.setTransform(19.5,0);

	this.instance_65 = new lib.main_00065();
	this.instance_65.setTransform(19.5,0);

	this.instance_66 = new lib.main_00066();
	this.instance_66.setTransform(19.5,0);

	this.instance_67 = new lib.main_00067();
	this.instance_67.setTransform(19.5,0);

	this.instance_68 = new lib.main_00068();
	this.instance_68.setTransform(19.5,0);

	this.instance_69 = new lib.main_00069();
	this.instance_69.setTransform(19.5,0);

	this.instance_70 = new lib.main_00070();
	this.instance_70.setTransform(19.5,0);

	this.instance_71 = new lib.main_00071();
	this.instance_71.setTransform(19.5,0);

	this.instance_72 = new lib.main_00072();
	this.instance_72.setTransform(19.5,0);

	this.instance_73 = new lib.main_00073();
	this.instance_73.setTransform(19.5,0);

	this.instance_74 = new lib.main_00074();
	this.instance_74.setTransform(19.5,0);

	this.instance_75 = new lib.main_00075();
	this.instance_75.setTransform(19.5,0);

	this.instance_76 = new lib.main_00076();
	this.instance_76.setTransform(19.5,0);

	this.instance_77 = new lib.main_00077();
	this.instance_77.setTransform(19.5,0);

	this.instance_78 = new lib.main_00078();
	this.instance_78.setTransform(19.5,0);

	this.instance_79 = new lib.main_00079();
	this.instance_79.setTransform(19.5,0);

	this.instance_80 = new lib.main_00080();
	this.instance_80.setTransform(19.5,0);

	this.instance_81 = new lib.main_00081();
	this.instance_81.setTransform(19.5,0);

	this.instance_82 = new lib.main_00082();
	this.instance_82.setTransform(19.5,0);

	this.instance_83 = new lib.main_00083();
	this.instance_83.setTransform(19.5,0);

	this.instance_84 = new lib.main_00084();
	this.instance_84.setTransform(19.5,0);

	this.instance_85 = new lib.main_00085();
	this.instance_85.setTransform(19.5,0);

	this.instance_86 = new lib.main_00086();
	this.instance_86.setTransform(19.5,0);

	this.instance_87 = new lib.main_00087();
	this.instance_87.setTransform(19.5,0);

	this.instance_88 = new lib.main_00088();
	this.instance_88.setTransform(19.5,0);

	this.instance_89 = new lib.main_00089();
	this.instance_89.setTransform(19.5,0);

	this.instance_90 = new lib.main_00090();
	this.instance_90.setTransform(19.5,0);

	this.instance_91 = new lib.main_00091();
	this.instance_91.setTransform(19.5,0);

	this.instance_92 = new lib.main_00092();
	this.instance_92.setTransform(19.5,0);

	this.instance_93 = new lib.main_00093();
	this.instance_93.setTransform(19.5,0);

	this.instance_94 = new lib.main_00094();
	this.instance_94.setTransform(19.5,0);

	this.instance_95 = new lib.main_00095();
	this.instance_95.setTransform(19.5,0);

	this.instance_96 = new lib.main_00096();
	this.instance_96.setTransform(19.5,0);

	this.instance_97 = new lib.main_00097();
	this.instance_97.setTransform(19.5,0);

	this.instance_98 = new lib.main_00098();
	this.instance_98.setTransform(19.5,0);

	this.instance_99 = new lib.main_00099();
	this.instance_99.setTransform(19.5,0);

	this.instance_100 = new lib.main_00100();
	this.instance_100.setTransform(19.5,0);

	this.instance_101 = new lib.main_00101();
	this.instance_101.setTransform(19.5,0);

	this.instance_102 = new lib.main_00102();
	this.instance_102.setTransform(19.5,0);

	this.instance_103 = new lib.main_00103();
	this.instance_103.setTransform(19.5,0);

	this.instance_104 = new lib.main_00104();
	this.instance_104.setTransform(19.5,0);

	this.instance_105 = new lib.main_00105();
	this.instance_105.setTransform(19.5,0);

	this.instance_106 = new lib.main_00106();
	this.instance_106.setTransform(19.5,0);

	this.instance_107 = new lib.main_00107();
	this.instance_107.setTransform(19.5,0);

	this.instance_108 = new lib.main_00108();
	this.instance_108.setTransform(19.5,0);

	this.instance_109 = new lib.main_00109();
	this.instance_109.setTransform(19.5,0);

	this.instance_110 = new lib.main_00110();
	this.instance_110.setTransform(19.5,0);

	this.instance_111 = new lib.main_00111();
	this.instance_111.setTransform(19.5,0);

	this.instance_112 = new lib.main_00112();
	this.instance_112.setTransform(19.5,0);

	this.instance_113 = new lib.main_00113();
	this.instance_113.setTransform(19.5,0);

	this.instance_114 = new lib.main_00114();
	this.instance_114.setTransform(19.5,0);

	this.instance_115 = new lib.main_00115();
	this.instance_115.setTransform(19.5,0);

	this.instance_116 = new lib.main_00116();
	this.instance_116.setTransform(19.5,0);

	this.instance_117 = new lib.main_00117();
	this.instance_117.setTransform(19.5,0);

	this.instance_118 = new lib.main_00118();
	this.instance_118.setTransform(19.5,0);

	this.instance_119 = new lib.main_00119();
	this.instance_119.setTransform(19.5,0);

	this.instance_120 = new lib.main_00120();
	this.instance_120.setTransform(19.5,0);

	this.instance_121 = new lib.main_00121();
	this.instance_121.setTransform(19.5,0);

	this.instance_122 = new lib.main_00122();
	this.instance_122.setTransform(19.5,0);

	this.instance_123 = new lib.main_00123();
	this.instance_123.setTransform(19.5,0);

	this.instance_124 = new lib.main_00124();
	this.instance_124.setTransform(19.5,0);

	this.instance_125 = new lib.main_00125();
	this.instance_125.setTransform(19.5,0);

	this.instance_126 = new lib.main_00126();
	this.instance_126.setTransform(19.5,0);

	this.instance_127 = new lib.main_00127();
	this.instance_127.setTransform(19.5,0);

	this.instance_128 = new lib.main_00128();
	this.instance_128.setTransform(19.5,0);

	this.instance_129 = new lib.main_00129();
	this.instance_129.setTransform(19.5,0);

	this.instance_130 = new lib.main_00130();
	this.instance_130.setTransform(19.5,0);

	this.instance_131 = new lib.main_00131();
	this.instance_131.setTransform(19.5,0);

	this.instance_132 = new lib.main_00132();
	this.instance_132.setTransform(19.5,0);

	this.instance_133 = new lib.main_00133();
	this.instance_133.setTransform(19.5,0);

	this.instance_134 = new lib.main_00134();
	this.instance_134.setTransform(19.5,0);

	this.instance_135 = new lib.main_00135();
	this.instance_135.setTransform(19.5,0);

	this.instance_136 = new lib.main_00136();
	this.instance_136.setTransform(19.5,0);

	this.instance_137 = new lib.main_00137();
	this.instance_137.setTransform(19.5,0);

	this.instance_138 = new lib.main_00138();
	this.instance_138.setTransform(19.5,0);

	this.instance_139 = new lib.main_00139();
	this.instance_139.setTransform(19.5,0);

	this.instance_140 = new lib.main_00140();
	this.instance_140.setTransform(19.5,0);

	this.instance_141 = new lib.main_00141();
	this.instance_141.setTransform(19.5,0);

	this.instance_142 = new lib.main_00142();
	this.instance_142.setTransform(19.5,0);

	this.instance_143 = new lib.main_00143();
	this.instance_143.setTransform(19.5,0);

	this.instance_144 = new lib.main_00144();
	this.instance_144.setTransform(19.5,0);

	this.instance_145 = new lib.main_00145();
	this.instance_145.setTransform(19.5,0);

	this.instance_146 = new lib.main_00146();
	this.instance_146.setTransform(19.5,0);

	this.instance_147 = new lib.main_00147();
	this.instance_147.setTransform(19.5,0);

	this.instance_148 = new lib.main_00148();
	this.instance_148.setTransform(19.5,0);

	this.instance_149 = new lib.main_00149();
	this.instance_149.setTransform(19.5,0);

	this.instance_150 = new lib.main_00150();
	this.instance_150.setTransform(19.5,0);

	this.instance_151 = new lib.main_00151();
	this.instance_151.setTransform(19.5,0);

	this.instance_152 = new lib.main_00152();
	this.instance_152.setTransform(19.5,0);

	this.instance_153 = new lib.main_00153();
	this.instance_153.setTransform(19.5,0);

	this.instance_154 = new lib.main_00154();
	this.instance_154.setTransform(19.5,0);

	this.instance_155 = new lib.main_00155();
	this.instance_155.setTransform(19.5,0);

	this.instance_156 = new lib.main_00156();
	this.instance_156.setTransform(19.5,0);

	this.instance_157 = new lib.main_00157();
	this.instance_157.setTransform(19.5,0);

	this.instance_158 = new lib.main_00158();
	this.instance_158.setTransform(19.5,0);

	this.instance_159 = new lib.main_00159();
	this.instance_159.setTransform(19.5,0);

	this.instance_160 = new lib.main_00160();
	this.instance_160.setTransform(19.5,0);

	this.instance_161 = new lib.main_00161();
	this.instance_161.setTransform(19.5,0);

	this.instance_162 = new lib.main_00162();
	this.instance_162.setTransform(19.5,0);

	this.instance_163 = new lib.main_00163();
	this.instance_163.setTransform(19.5,0);

	this.instance_164 = new lib.main_00164();
	this.instance_164.setTransform(19.5,0);

	this.instance_165 = new lib.main_00165();
	this.instance_165.setTransform(19.5,0);

	this.instance_166 = new lib.main_00166();
	this.instance_166.setTransform(19.5,0);

	this.instance_167 = new lib.main_00167();
	this.instance_167.setTransform(19.5,0);

	this.instance_168 = new lib.main_00168();
	this.instance_168.setTransform(19.5,0);

	this.instance_169 = new lib.main_00169();
	this.instance_169.setTransform(19.5,0);

	this.instance_170 = new lib.main_00170();
	this.instance_170.setTransform(19.5,0);

	this.instance_171 = new lib.main_00171();
	this.instance_171.setTransform(19.5,0);

	this.instance_172 = new lib.main_00172();
	this.instance_172.setTransform(19.5,0);

	this.instance_173 = new lib.main_00173();
	this.instance_173.setTransform(19.5,0);

	this.instance_174 = new lib.main_00174();
	this.instance_174.setTransform(19.5,0);

	this.instance_175 = new lib.main_00175();
	this.instance_175.setTransform(19.5,0);

	this.instance_176 = new lib.main_00176();
	this.instance_176.setTransform(19.5,0);

	this.instance_177 = new lib.main_00177();
	this.instance_177.setTransform(19.5,0);

	this.instance_178 = new lib.main_00178();
	this.instance_178.setTransform(19.5,0);

	this.instance_179 = new lib.main_00179();
	this.instance_179.setTransform(19.5,0);

	this.instance_180 = new lib.main_00180();
	this.instance_180.setTransform(19.5,0);

	this.instance_181 = new lib.main_00181();
	this.instance_181.setTransform(19.5,0);

	this.instance_182 = new lib.main_00182();
	this.instance_182.setTransform(19.5,0);

	this.instance_183 = new lib.main_00183();
	this.instance_183.setTransform(19.5,0);

	this.instance_184 = new lib.main_00184();
	this.instance_184.setTransform(19.5,0);

	this.instance_185 = new lib.main_00185();
	this.instance_185.setTransform(19.5,0);

	this.instance_186 = new lib.main_00186();
	this.instance_186.setTransform(19.5,0);

	this.instance_187 = new lib.main_00187();
	this.instance_187.setTransform(19.5,0);

	this.instance_188 = new lib.main_00188();
	this.instance_188.setTransform(19.5,0);

	this.instance_189 = new lib.main_00189();
	this.instance_189.setTransform(19.5,0);

	this.instance_190 = new lib.main_00190();
	this.instance_190.setTransform(19.5,0);

	this.instance_191 = new lib.main_00191();
	this.instance_191.setTransform(19.5,0);

	this.instance_192 = new lib.main_00192();
	this.instance_192.setTransform(19.5,0);

	this.instance_193 = new lib.main_00193();
	this.instance_193.setTransform(19.5,0);

	this.instance_194 = new lib.main_00194();
	this.instance_194.setTransform(19.5,0);

	this.instance_195 = new lib.main_00195();
	this.instance_195.setTransform(19.5,0);

	this.instance_196 = new lib.main_00196();
	this.instance_196.setTransform(19.5,0);

	this.instance_197 = new lib.main_00197();
	this.instance_197.setTransform(19.5,0);

	this.instance_198 = new lib.main_00198();
	this.instance_198.setTransform(19.5,0);

	this.instance_199 = new lib.main_00199();
	this.instance_199.setTransform(19.5,0);

	this.instance_200 = new lib.main_00200();
	this.instance_200.setTransform(19.5,0);

	this.instance_201 = new lib.main_00201();
	this.instance_201.setTransform(19.5,0);

	this.instance_202 = new lib.main_00202();
	this.instance_202.setTransform(19.5,0);

	this.instance_203 = new lib.main_00203();
	this.instance_203.setTransform(19.5,0);

	this.instance_204 = new lib.main_00204();
	this.instance_204.setTransform(19.5,0);

	this.instance_205 = new lib.main_00205();
	this.instance_205.setTransform(19.5,0);

	this.instance_206 = new lib.main_00206();
	this.instance_206.setTransform(19.5,0);

	this.instance_207 = new lib.main_00207();
	this.instance_207.setTransform(19.5,0);

	this.instance_208 = new lib.main_00208();
	this.instance_208.setTransform(19.5,0);

	this.instance_209 = new lib.main_00209();
	this.instance_209.setTransform(19.5,0);

	this.instance_210 = new lib.main_00210();
	this.instance_210.setTransform(19.5,0);

	this.instance_211 = new lib.main_00211();
	this.instance_211.setTransform(19.5,0);

	this.instance_212 = new lib.main_00212();
	this.instance_212.setTransform(19.5,0);

	this.instance_213 = new lib.main_00213();
	this.instance_213.setTransform(19.5,0);

	this.instance_214 = new lib.main_00214();
	this.instance_214.setTransform(19.5,0);

	this.instance_215 = new lib.main_00215();
	this.instance_215.setTransform(19.5,0);

	this.instance_216 = new lib.main_00216();
	this.instance_216.setTransform(19.5,0);

	this.instance_217 = new lib.main_00217();
	this.instance_217.setTransform(19.5,0);

	this.instance_218 = new lib.main_00218();
	this.instance_218.setTransform(19.5,0);

	this.instance_219 = new lib.main_00219();
	this.instance_219.setTransform(19.5,0);

	this.instance_220 = new lib.main_00220();
	this.instance_220.setTransform(19.5,0);

	this.instance_221 = new lib.main_00221();
	this.instance_221.setTransform(19.5,0);

	this.instance_222 = new lib.main_00222();
	this.instance_222.setTransform(19.5,0);

	this.instance_223 = new lib.main_00223();
	this.instance_223.setTransform(19.5,0);

	this.instance_224 = new lib.main_00224();
	this.instance_224.setTransform(19.5,0);

	this.instance_225 = new lib.main_00225();
	this.instance_225.setTransform(19.5,0);

	this.instance_226 = new lib.main_00226();
	this.instance_226.setTransform(19.5,0);

	this.instance_227 = new lib.main_00227();
	this.instance_227.setTransform(19.5,0);

	this.instance_228 = new lib.main_00228();
	this.instance_228.setTransform(19.5,0);

	this.instance_229 = new lib.main_00229();
	this.instance_229.setTransform(19.5,0);

	this.instance_230 = new lib.main_00230();
	this.instance_230.setTransform(19.5,0);

	this.instance_231 = new lib.main_00231();
	this.instance_231.setTransform(19.5,0);

	this.instance_232 = new lib.main_00232();
	this.instance_232.setTransform(19.5,0);

	this.instance_233 = new lib.main_00233();
	this.instance_233.setTransform(19.5,0);

	this.instance_234 = new lib.main_00234();
	this.instance_234.setTransform(19.5,0);

	this.instance_235 = new lib.main_00235();
	this.instance_235.setTransform(19.5,0);

	this.instance_236 = new lib.main_00236();
	this.instance_236.setTransform(19.5,0);

	this.instance_237 = new lib.main_00237();
	this.instance_237.setTransform(19.5,0);

	this.instance_238 = new lib.main_00238();
	this.instance_238.setTransform(19.5,0);

	this.instance_239 = new lib.main_00239();
	this.instance_239.setTransform(19.5,0);

	this.instance_240 = new lib.main_00240();
	this.instance_240.setTransform(19.5,0);

	this.instance_241 = new lib.main_00241();
	this.instance_241.setTransform(19.5,0);

	this.instance_242 = new lib.main_00242();
	this.instance_242.setTransform(19.5,0);

	this.instance_243 = new lib.main_00243();
	this.instance_243.setTransform(19.5,0);

	this.instance_244 = new lib.main_00244();
	this.instance_244.setTransform(19.5,0);

	this.instance_245 = new lib.main_00245();
	this.instance_245.setTransform(19.5,0);

	this.instance_246 = new lib.main_00246();
	this.instance_246.setTransform(19.5,0);

	this.instance_247 = new lib.main_00247();
	this.instance_247.setTransform(19.5,0);

	this.instance_248 = new lib.main_00248();
	this.instance_248.setTransform(19.5,0);

	this.instance_249 = new lib.main_00249();
	this.instance_249.setTransform(19.5,0);

	this.instance_250 = new lib.main_00250();
	this.instance_250.setTransform(19.5,0);

	this.instance_251 = new lib.main_00251();
	this.instance_251.setTransform(19.5,0);

	this.instance_252 = new lib.main_00252();
	this.instance_252.setTransform(19.5,0);

	this.instance_253 = new lib.main_00253();
	this.instance_253.setTransform(19.5,0);

	this.instance_254 = new lib.main_00254();
	this.instance_254.setTransform(19.5,0);

	this.instance_255 = new lib.main_00255();
	this.instance_255.setTransform(19.5,0);

	this.instance_256 = new lib.main_00256();
	this.instance_256.setTransform(19.5,0);

	this.instance_257 = new lib.main_00257();
	this.instance_257.setTransform(19.5,0);

	this.instance_258 = new lib.main_00258();
	this.instance_258.setTransform(19.5,0);

	this.instance_259 = new lib.main_00259();
	this.instance_259.setTransform(19.5,0);

	this.instance_260 = new lib.main_00260();
	this.instance_260.setTransform(19.5,0);

	this.instance_261 = new lib.main_00261();
	this.instance_261.setTransform(19.5,0);

	this.instance_262 = new lib.main_00262();
	this.instance_262.setTransform(19.5,0);

	this.instance_263 = new lib.main_00263();
	this.instance_263.setTransform(19.5,0);

	this.instance_264 = new lib.main_00264();
	this.instance_264.setTransform(19.5,0);

	this.instance_265 = new lib.main_00265();
	this.instance_265.setTransform(19.5,0);

	this.instance_266 = new lib.main_00266();
	this.instance_266.setTransform(19.5,0);

	this.instance_267 = new lib.main_00267();
	this.instance_267.setTransform(19.5,0);

	this.instance_268 = new lib.main_00268();
	this.instance_268.setTransform(19.5,0);

	this.instance_269 = new lib.main_00269();
	this.instance_269.setTransform(19.5,0);

	this.instance_270 = new lib.main_00270();
	this.instance_270.setTransform(19.5,0);

	this.instance_271 = new lib.main_00271();
	this.instance_271.setTransform(19.5,0);

	this.instance_272 = new lib.main_00272();
	this.instance_272.setTransform(19.5,0);

	this.instance_273 = new lib.main_00273();
	this.instance_273.setTransform(19.5,0);

	this.instance_274 = new lib.main_00274();
	this.instance_274.setTransform(19.5,0);

	this.instance_275 = new lib.main_00275();
	this.instance_275.setTransform(19.5,0);

	this.instance_276 = new lib.main_00276();
	this.instance_276.setTransform(19.5,0);

	this.instance_277 = new lib.main_00277();
	this.instance_277.setTransform(19.5,0);

	this.instance_278 = new lib.main_00278();
	this.instance_278.setTransform(19.5,0);

	this.instance_279 = new lib.main_00279();
	this.instance_279.setTransform(19.5,0);

	this.instance_280 = new lib.main_00280();
	this.instance_280.setTransform(19.5,0);

	this.instance_281 = new lib.main_00281();
	this.instance_281.setTransform(19.5,0);

	this.instance_282 = new lib.main_00282();
	this.instance_282.setTransform(19.5,0);

	this.instance_283 = new lib.main_00283();
	this.instance_283.setTransform(19.5,0);

	this.instance_284 = new lib.main_00284();
	this.instance_284.setTransform(19.5,0);

	this.instance_285 = new lib.main_00285();
	this.instance_285.setTransform(19.5,0);

	this.instance_286 = new lib.main_00286();
	this.instance_286.setTransform(19.5,0);

	this.instance_287 = new lib.main_00287();
	this.instance_287.setTransform(19.5,0);

	this.instance_288 = new lib.main_00288();
	this.instance_288.setTransform(19.5,0);

	this.instance_289 = new lib.main_00289();
	this.instance_289.setTransform(19.5,0);

	this.instance_290 = new lib.main_00290();
	this.instance_290.setTransform(19.5,0);

	this.instance_291 = new lib.main_00291();
	this.instance_291.setTransform(19.5,0);

	this.instance_292 = new lib.main_00292();
	this.instance_292.setTransform(19.5,0);

	this.instance_293 = new lib.main_00293();
	this.instance_293.setTransform(19.5,0);

	this.instance_294 = new lib.main_00294();
	this.instance_294.setTransform(19.5,0);

	this.instance_295 = new lib.main_00295();
	this.instance_295.setTransform(19.5,0);

	this.instance_296 = new lib.main_00296();
	this.instance_296.setTransform(19.5,0);

	this.instance_297 = new lib.main_00297();
	this.instance_297.setTransform(19.5,0);

	this.instance_298 = new lib.main_00298();
	this.instance_298.setTransform(19.5,0);

	this.instance_299 = new lib.main_00299();
	this.instance_299.setTransform(19.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).to({state:[{t:this.instance_210}]},1).to({state:[{t:this.instance_211}]},1).to({state:[{t:this.instance_212}]},1).to({state:[{t:this.instance_213}]},1).to({state:[{t:this.instance_214}]},1).to({state:[{t:this.instance_215}]},1).to({state:[{t:this.instance_216}]},1).to({state:[{t:this.instance_217}]},1).to({state:[{t:this.instance_218}]},1).to({state:[{t:this.instance_219}]},1).to({state:[{t:this.instance_220}]},1).to({state:[{t:this.instance_221}]},1).to({state:[{t:this.instance_222}]},1).to({state:[{t:this.instance_223}]},1).to({state:[{t:this.instance_224}]},1).to({state:[{t:this.instance_225}]},1).to({state:[{t:this.instance_226}]},1).to({state:[{t:this.instance_227}]},1).to({state:[{t:this.instance_228}]},1).to({state:[{t:this.instance_229}]},1).to({state:[{t:this.instance_230}]},1).to({state:[{t:this.instance_231}]},1).to({state:[{t:this.instance_232}]},1).to({state:[{t:this.instance_233}]},1).to({state:[{t:this.instance_234}]},1).to({state:[{t:this.instance_235}]},1).to({state:[{t:this.instance_236}]},1).to({state:[{t:this.instance_237}]},1).to({state:[{t:this.instance_238}]},1).to({state:[{t:this.instance_239}]},1).to({state:[{t:this.instance_240}]},1).to({state:[{t:this.instance_241}]},1).to({state:[{t:this.instance_242}]},1).to({state:[{t:this.instance_243}]},1).to({state:[{t:this.instance_244}]},1).to({state:[{t:this.instance_245}]},1).to({state:[{t:this.instance_246}]},1).to({state:[{t:this.instance_247}]},1).to({state:[{t:this.instance_248}]},1).to({state:[{t:this.instance_249}]},1).to({state:[{t:this.instance_250}]},1).to({state:[{t:this.instance_251}]},1).to({state:[{t:this.instance_252}]},1).to({state:[{t:this.instance_253}]},1).to({state:[{t:this.instance_254}]},1).to({state:[{t:this.instance_255}]},1).to({state:[{t:this.instance_256}]},1).to({state:[{t:this.instance_257}]},1).to({state:[{t:this.instance_258}]},1).to({state:[{t:this.instance_259}]},1).to({state:[{t:this.instance_260}]},1).to({state:[{t:this.instance_261}]},1).to({state:[{t:this.instance_262}]},1).to({state:[{t:this.instance_263}]},1).to({state:[{t:this.instance_264}]},1).to({state:[{t:this.instance_265}]},1).to({state:[{t:this.instance_266}]},1).to({state:[{t:this.instance_267}]},1).to({state:[{t:this.instance_268}]},1).to({state:[{t:this.instance_269}]},1).to({state:[{t:this.instance_270}]},1).to({state:[{t:this.instance_271}]},1).to({state:[{t:this.instance_272}]},1).to({state:[{t:this.instance_273}]},1).to({state:[{t:this.instance_274}]},1).to({state:[{t:this.instance_275}]},1).to({state:[{t:this.instance_276}]},1).to({state:[{t:this.instance_277}]},1).to({state:[{t:this.instance_278}]},1).to({state:[{t:this.instance_279}]},1).to({state:[{t:this.instance_280}]},1).to({state:[{t:this.instance_281}]},1).to({state:[{t:this.instance_282}]},1).to({state:[{t:this.instance_283}]},1).to({state:[{t:this.instance_284}]},1).to({state:[{t:this.instance_285}]},1).to({state:[{t:this.instance_286}]},1).to({state:[{t:this.instance_287}]},1).to({state:[{t:this.instance_288}]},1).to({state:[{t:this.instance_289}]},1).to({state:[{t:this.instance_290}]},1).to({state:[{t:this.instance_291}]},1).to({state:[{t:this.instance_292}]},1).to({state:[{t:this.instance_293}]},1).to({state:[{t:this.instance_294}]},1).to({state:[{t:this.instance_295}]},1).to({state:[{t:this.instance_296}]},1).to({state:[{t:this.instance_297}]},1).to({state:[{t:this.instance_298}]},1).to({state:[{t:this.instance_299}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256,256,512,512);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;