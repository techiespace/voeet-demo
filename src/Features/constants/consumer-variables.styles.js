import { View, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
global.mpx = (1 / 320) * width;
global.screenWidth = width;
global.screenHeight = height;
global.PrimaryColor = '#EC268F';
global.primaryShade = '#FAF0F5';
global.primaryShade2 = '#FAE8F2';
global.secondaryColor = '#580880';
global.secondaryColorShade = '#F4E8FA';
global.secondaryColorShade2 = '#F4E8FA';
global.inactiveColorDark = '#5F6161';
global.textColorDark = '#1A1D1E';
global.textColorLight = '#1A1D1E80';
global.white = '#ffffff';
global.danger = '#FF0000';
global.secondaryDangerColor = '#EB5757';
global.h1Size = 24 * global.mpx;
global.h2Size = 20 * global.mpx;
global.h3Size = 18 * global.mpx;
global.h4Size = 15 * global.mpx;
global.h5Size = 14 * global.mpx;
global.caption1Size = 12 * global.mpx;
global.caption2Size = 11 * global.mpx;
global.bannerColorShade = '#180522';

global.progressColorDark = 'rgba(0, 0, 0, 0.05)';
global.textProgressColorDark = 'rgba(0, 0, 0, 1)';
global.progressColorPrimary = 'rgba(236,38,143,0.1)';
global.textProgressColorPrimary = 'rgba(236,38,143,1)';

global.Notifications = {
  'html-wrapper': 'horizontal',
  'html-wrapper1': 'horizontal',
  'html-wrapper2': 'horizontal',
  'html-wrapper3': 'vertical',
  'html-wrapper4': 'vertical',
};
