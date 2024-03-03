// landmarks.js
// where vertex indices and triangulation are defined
//
// hint: you'll need either of the following to view this file
// with correct formatting:
// A) a large monitor
// B) an editor that is not editor.p5js.org and has
// non-wrapping lines or less huge font size


//------------------------------------------
// HAND:
//
const WRIST = 0; 
const THUMB_CMC = 1; 
const THUMB_MCP = 2; 
const THUMB_IP = 3; 
const THUMB_TIP = 4; 
const INDEX_FINGER_MCP = 5; 
const INDEX_FINGER_PIP = 6; 
const INDEX_FINGER_DIP = 7; 
const INDEX_FINGER_TIP = 8; 
const MIDDLE_FINGER_MCP = 9; 
const MIDDLE_FINGER_PIP = 10; 
const MIDDLE_FINGER_DIP = 11; 
const MIDDLE_FINGER_TIP = 12; 
const RING_FINGER_MCP = 13; 
const RING_FINGER_PIP = 14; 
const RING_FINGER_DIP = 15; 
const RING_FINGER_TIP = 16; 
const PINKY_MCP = 17; 
const PINKY_PIP = 18; 
const PINKY_DIP = 19; 
const PINKY_TIP = 20; 

const HAND_VERTEX_INDICES = [
  [PINKY_MCP,WRIST,THUMB_CMC,INDEX_FINGER_MCP,MIDDLE_FINGER_MCP,RING_FINGER_MCP,PINKY_MCP],
  [THUMB_CMC,THUMB_MCP,THUMB_IP,THUMB_TIP],
  [INDEX_FINGER_MCP,INDEX_FINGER_PIP,INDEX_FINGER_DIP,INDEX_FINGER_TIP],
  [MIDDLE_FINGER_MCP,MIDDLE_FINGER_PIP,MIDDLE_FINGER_DIP,MIDDLE_FINGER_TIP],
  [RING_FINGER_MCP,RING_FINGER_PIP,RING_FINGER_DIP,RING_FINGER_TIP],
  [PINKY_MCP,PINKY_PIP,PINKY_DIP,PINKY_TIP],
  ];

const FACELANDMARKER_NOSE = [{start:168,end:6},{start:6,end:195},{start:195,end:4},{start:98,end:97},{start:97,end:2},{start:2,end:326},{start:326,end:327}];

const HANDLANDMARKER_PALM = [
  {start:PINKY_MCP,end:WRIST}, 
  {start:WRIST,end:THUMB_CMC}, 
  {start:THUMB_CMC,end:INDEX_FINGER_MCP},
  {start:INDEX_FINGER_MCP,end:MIDDLE_FINGER_MCP},
  {start:MIDDLE_FINGER_MCP,end:RING_FINGER_MCP},
  {start:RING_FINGER_MCP,end:PINKY_MCP}];
const HANDLANDMARKER_THUMB = [
  {start:THUMB_CMC,end:THUMB_MCP},
  {start:THUMB_MCP,end:THUMB_IP},
  {start:THUMB_IP,end:THUMB_TIP}];
const HANDLANDMARKER_INDEX_FINGER = [
  {start:INDEX_FINGER_MCP,end:INDEX_FINGER_PIP},
  {start:INDEX_FINGER_PIP,end:INDEX_FINGER_DIP},
  {start:INDEX_FINGER_DIP,end:INDEX_FINGER_TIP}];
const HANDLANDMARKER_MIDDLE_FINGER = [
  {start:MIDDLE_FINGER_MCP,end:MIDDLE_FINGER_PIP},
  {start:MIDDLE_FINGER_PIP,end:MIDDLE_FINGER_DIP},
  {start:MIDDLE_FINGER_DIP,end:MIDDLE_FINGER_TIP}];
const HANDLANDMARKER_RING_FINGER = [
  {start:RING_FINGER_MCP,end:RING_FINGER_PIP},
  {start:RING_FINGER_PIP,end:RING_FINGER_DIP},
  {start:RING_FINGER_DIP,end:RING_FINGER_TIP}];
const HANDLANDMARKER_PINKY = [
  {start:PINKY_MCP,end:PINKY_PIP},
  {start:PINKY_PIP,end:PINKY_DIP},
  {start:PINKY_DIP,end:PINKY_TIP}];


//------------------------------------------
// POSE:
//
/*
// TODO: provide accessors for these points from the POSE vertices
0 - nose
1 - left eye (inner)
2 - left eye
3 - left eye (outer)
4 - right eye (inner)
5 - right eye
6 - right eye (outer)
7 - left ear
8 - right ear
9 - mouth (left)
10 - mouth (right)
11 - left shoulder
12 - right shoulder
13 - left elbow
14 - right elbow
15 - left wrist
16 - right wrist
17 - left pinky
18 - right pinky
19 - left index
20 - right index
21 - left thumb
22 - right thumb
23 - left hip
24 - right hip
25 - left knee
26 - right knee
27 - left ankle
28 - right ankle
29 - left heel
30 - right heel
31 - left foot index
32 - right foot index
*/


//------------------------------------------
// FACE: vertices and triangle triplets for:
// 7-POINT-FACEMESH, 33-POINT-FACEMESH, 68-POINT-FACEMESH, 468-POINT-FACEMESH
//
var VTX7 = [33,133,362,263,1,78,308];
var VTX33 = [33,133,362,263,1,62,308,159,145,386,374,6,102,331,2,13,14,70,105,107,336,334,300,54,10,284,50,280,234,454,58,288,152]
var VTX68 = [
  /* contour  */127,234,132, 58,172,150,149,148,152,377,378,379,397,288,361,454,356,
  /* brows    */ 70, 63,105, 66,107,336,296,334,293,300,
  /* nose     */168,  6,195,  4, 98, 97,  2,326,327,
  /* eyes     */ 33,160,158,133,153,144,362,385,387,263,373,380,
  /* lip      */ 57, 40, 37,  0,267,270,287,321,314, 17, 84, 91,
  /* mouth    */ 78, 81, 13,311,308,402, 14,178,
]
var VTX468 = new Array(468).fill(0).map((x,i)=>i);

var TRI7 = [0,1,4,2,3,4,4,6,5]
var TRI33 = [
  /*  eyes  */ 0, 7 ,8 ,   7, 1, 8,   2, 9,10,   9, 3,10, 
  /*  brows */ 17,18,0 ,  18, 7, 0,  18,19, 7,  19, 1, 7,  19,11, 1,  19,20,11,  21,22, 3,  21, 3, 9,  20,21, 9,  20, 9, 2,  20, 2,11,
  /*  4head */ 23,18,17,  25,22,21,  24,19,20,  24,19,18,  24,21,20,  24,18,23,  24,25,21, 
  /*  nose  */ 11,4 ,12,  11,13, 4,   1,11,12,  11, 2,13,  12, 4,14,   4,13,14, 
  /* up-lip */ 14,15, 5,  14, 6,15,  12,14, 5,  14,13, 6,  
  /* cheeks */ 8 , 1,12,   2,10,13,   8,12,26,  10,27,13,  26,12, 5,  13,27, 6,   0, 8,26,  10,3,27,
  /*  chin  */ 5, 16,32,  16, 6,32,   5,32,30,   6,31,32,  
  /*  cont  */ 26, 5,30,  27,31, 6,   0,26,28,   3,29,27,  17, 0,28,   3,22,29,  23,17,28,  22,25,29,  28,26,30,  27,29,31,
]
// stolen from https://age2death.glitch.me/
var TRI68 = [
   0, 1,36,   0,17,36,   1, 2,41,  1,36,41,  2, 3,31,  2,31,41,  3, 4,48,  3,31,48,  4, 5,48,  5, 6,48,
   6, 7,59,   6,48,59,   7, 8,58,  7,58,59,  8, 9,56,  8,56,57,  8,57,58,  9,10,55,  9,55,56, 10,11,54,
  10,54,55,  11,12,54,  12,13,54, 13,14,35, 13,35,54, 14,15,46, 14,35,46, 15,16,45, 15,45,46, 16,26,45,
  17,18,36,  18,19,37,  18,36,37, 19,20,38, 19,37,38, 20,21,39, 20,38,39, 21,27,39, 22,23,42, 22,27,42,
  23,24,43,  23,42,43,  24,25,44, 24,43,44, 25,26,45, 25,44,45, 27,28,39, 27,28,42, 28,29,39, 28,29,42,
  29,30,31,  29,30,35,  29,31,40, 29,35,47, 29,40,39, 29,42,47, 30,31,32, 30,32,33, 30,33,34, 30,34,35,
  31,32,50,  31,40,41,  31,48,49, 31,49,50, 32,33,51, 32,50,51, 33,34,51, 34,35,52, 34,51,52, 35,46,47,
  35,52,53,  35,53,54,  36,37,41, 37,38,40, 37,40,41, 38,39,40, 42,43,47, 43,44,47, 44,45,46, 44,46,47,
  48,49,60,  48,59,60,  49,50,61, 49,60,61, 50,51,62, 50,61,62, 51,52,62, 52,53,63, 52,62,63, 53,54,64,
  53,63,64,  54,55,64,  55,56,65, 55,64,65, 56,57,66, 56,65,66, 57,58,66, 58,59,67, 58,66,67, 59,60,67,
  60,61,67,  61,62,66,  61,66,67, 62,63,66, 63,64,65, 63,65,66, 21,22,27,
];

// stolen from https://storage.googleapis.com/tfjs-models/demos/facemesh/demo.fd0b9f10.js
var TRI468 = [127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255];