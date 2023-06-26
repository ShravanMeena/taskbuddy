import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const scaleWidth = screenWidth / 390;
export const scaleHeight = screenHeight / 812;
export const screenScale = Math.min(scaleWidth, scaleHeight);

const normalize = size => {
  return Math.ceil(size * screenScale);
};

const normalizeFont = size => {
  const newSize = size * screenScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export {screenHeight, screenWidth};

export const TBFontSize = {
  xs: normalizeFont(9),
  small: normalizeFont(10),
  medium: normalizeFont(12),
  regular: normalizeFont(14),
  large: normalizeFont(16),
  xl: normalizeFont(18),
  xxl: normalizeFont(20),
  xxxl: normalizeFont(24),
  xxxll: normalizeFont(28),
  xxxxl: normalizeFont(32),
  xxxxxl: normalizeFont(36),
  xxxxxxl: normalizeFont(40),
  xxxxxxxl: normalizeFont(48),
  l: normalizeFont(56),
  lx: normalizeFont(64),
  lxx: normalizeFont(88),
  lxxx: normalizeFont(128),
  headerStyle: normalizeFont(20),
};

export const TBFontWeight = {
  regular: 'normal',
  bold: 'bold',
  light: '300',
  medium: '500',
  bolder: '700',
  semibold: '600',
};

export const TBIconSize = {
  iconStretchM: normalize(18),
  iconStretchL: normalize(32),
  iconContainerWidth: normalize(48),
  iconContainerHeight: normalize(48),
  iconContainerWidthL: normalize(56),
  iconContainerHeightL: normalize(56),
};

export const TBSpacing = {
  zero: normalize(0),
  xss: normalize(1),
  xs: normalize(4),
  small: normalize(8),
  xxm: normalize(10),
  xm: normalize(12),
  xmm: normalize(14),
  medium: normalize(16),
  large: normalize(20),
  xl: normalize(24),
  xxl: normalize(32),
  xxxl: normalize(36),
  xxxll: normalize(40),
  xxxxl: normalize(48),
  xxxxxl: normalize(54),
  lx: normalize(64),
  l: normalize(88),
  llx: normalize(128),
  lxx: normalize(156),
  lxxx: normalize(256),
  lxxxxs: normalize(304),
  lxxxx: normalize(324),
  lxxxxx: normalize(448),
};

export const TBComponentSize = {
  cardWidthXS: normalize(100),
  tabWidth: normalize(75),
  tabHeight: normalize(75),
  tabSelectedWidth: normalize(110),
  tabSelectedHeight: normalize(85),
  cardWidthS: normalize(200),
  cardHeightS: normalize(212),
  cardHeightM: normalize(175),
  cardHeightXS: normalize(150),
  cardWidthL: normalize(270),
  cardHeightL: normalize(250),
  cardWidthXL: normalize(300),
  cardHeightXL: normalize(350),
  cardHeightXLm: normalize(365),
  cardHeightXXLs: normalize(380),
  cardHeightXXL: normalize(400),
  cardHeightXXXL: normalize(550),
  iconWidth: normalize(14),
  iconHeight: normalize(14),
  iconWidthS: normalize(10),
  iconHeightS: normalize(10),
  iconWidthM: normalize(25),
  iconHeightM: normalize(25),
  iconWidthXM: normalize(36),
  iconHeightXM: normalize(36),
  iconHeightXXM: normalize(44),
  iconWidthXXM: normalize(44),
  iconWidthXXS: normalize(20),
  iconHeightXXS: normalize(20),
  iconWidthL: normalize(50),
  iconHeightL: normalize(50),
  modalSepeartorHeight: normalize(8),
  buttonHeightL: normalize(65),
  buttonHeight: normalize(56),
  buttonWidthL: normalize(200),
  buttonWidthXL: normalize(365),
  buttonWidthXLL: normalize(370),
  buttonHeightS: normalize(45),
  buttonWidthM: normalize(180),
  buttonWidthSM: normalize(167),
  buttonWidthS: normalize(150),
  buttonWidthXS: normalize(130),
  pillWidthS: normalize(70),
  pillHeight: normalize(30),
  pillWidth: normalize(75),
  pillHeightM: normalize(40),
  pillWidthM: normalize(100),
  pillowIconWidth: normalize(130),
  pillowIconHeight: normalize(63),
  bitgoIconWidth: normalize(115),
  bitgoIconHeight: normalize(30),
  homeAnimationWidth: normalize(321),
  homeAnimationHeight: normalize(146),
  verifyEmailHeigth: normalize(160),
  verifyEmailWidth: normalize(160),
  buttonWidth: screenWidth * 0.87,
  modalHeigth: screenHeight * 0.54,
  circularButtonSize: normalize(48),
  circularButtonRadius: normalize(24),
  assetButtonSize: normalize(40),
  caseImageHeight: normalize(100),
  caseImageWidth: normalize(85),
  caseImageHeightXS: normalize(80),
  caseImageWidthXS: normalize(110),
  caseCardHomeHeight: normalize(110),
  caseCardHomeWidth: normalize(100),
  modalHeightXXS: normalize(200),
  modalHeightXXSS: normalize(220),
  modalHeightXS: normalize(250),
  modalHeightS: normalize(300),
  modalHeightM: normalize(350),
  modalHeightMS: normalize(375),
  modalHeightMM: normalize(410),
  modalHeigthMm: normalize(480),
  modalHeigthM: normalize(520),
  modalHeightXM: normalize(540),
  modalHeigthXXM: normalize(580),
  modalHeigthXM: normalize(600),
  modalHeigthL: normalize(640),
  modalHeigthXL: normalize(450),
  modalHeigthXXL: normalize(700),
  imageHeight: normalize(300),
  imageHeightM: normalize(160),
  imageHeightXSS: normalize(120),
  imageWidthM: normalize(350),
  imageWidth: normalize(300),
  imageHeightS: normalize(250),
  imageWidthS: normalize(250),
  imageWidthL: normalize(400),
  imageHeightL: normalize(400),
  imageHeightXS: normalize(200),
  textInputWidthS: normalize(105),
  lottieWidthM: normalize(275),
  lottieHeightM: normalize(250),
  campaignCardHeight: normalize(205),
  congratsModalHeight: normalize(400),
  congratsModalHeightL: normalize(430),
  carouselCardHeight: normalize(140),
  carouselCardWidth: normalize(280),
  contentWidth: screenWidth * 0.92,
  fullWidth: screenWidth,
  actionImageHeight: normalize(111),
  actionImageWidth: normalize(111),
  tabAnimationHeight: normalize(46),
  tabAnimationWidth: normalize(46),
  cardBannerWidth: screenWidth - normalize(111),
};

export const TBFontFamily = {
  regular: 'Roobert-Regular',
  regularItalic: 'Roobert-RegularItalic',
  bold: 'Roobert-Bold',
  boldItalic: 'Roobert-BoldItalic',
  heavy: 'Roobert-Heavy',
  heavyItalic: 'Roobert-HeavyItalic',
  semiBold: 'Roobert-SemiBold',
  semiBoldItalic: 'Roobert-SemiBoldItalic',
  light: 'Roobert-Light',
  lightItalic: 'Roobert-LightItalic',
  medium: 'Roobert-Medium',
  mediumItalic: 'Roobert-MediumItalic',
};

export const TBColors = {
  primary: '#2f85fe',
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
  rgbaTransparent: 'rgba(0,0,0,0.6)',
  white90: '#FFFFFF90',
  white10: '#434248',
  white12: '#FFFFFF12',
  white20: '#FFFFFF20',
  smokeWhite: '#F5F5F5',
  greenText: '#15D08D',
  blackButton: '#171719',
  greyText: '#F0ECF4',
  darkGreyText: '#C5C5C9',
  darkGreyBg: '#1C1C1E',
  slantGrey: '#c1c1c1',
  bleachGrey: '#afafaf',
  lightGreyText: '#918E94',
  blueMagenta: '#171719',
  green: '#15D08D',
  grey: '#171719',
  placeholderWhite: '#5D5C5F',
  whiteF4: '#F0ECF4',
  purpleText: '#613FE6',
  purpleText32: '#613FE632',
  purpleText2: '#8874FE',
  blueETH: '#1D5BD3',
  purpleMatic: '#8B47FF',
  greenSOL: '#009A8B',
  greyDark: '#1E2025',
  staderBlue: '#5599FF',
  staderGrey: '#201F24',
  yellow: '#FFF27B',
  activeCarouselDot: '#9180FD',
  inactiveCarouselDot: '#1F1F1F',
  russianBlack: '#0D0D0E',
  fadeGrey: '#0D0D0E',
  redText: '#E8235E',
  purple: '#614CE5',
  lightGrey: '#4d4a4a',
  pinchGrey: '#2C2C30',
  purpleLight: '#C8A6FF',
  washBlack: '#0c0c0c',
  lightRed: '#3C2626',
  darkRed: '#F32C2C',
  cardBlack: '#141414',
};

export const TBOpacity = {
  quarter: 0.25,
  half: 0.5,
};
