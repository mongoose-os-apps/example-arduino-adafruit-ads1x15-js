load('api_ads1015.js');
load('api_timer.js');
 
let ADS1X15_I2C_addresss = 0x48 ; 

// Initialize Adafruit ADS1015 library
let ads = Adafruit_ADS1015.create(ADS1X15_I2C_addresss);

// Initialize Adafruit ADS1115 library
//let ads = Adafruit_ADS1015.create_ads1115(ADS1X15_I2C_addresss);

// The ADC input range (or gain) can be changed via the following
// functions, but be careful never to exceed VDD +0.3V max, or to
// exceed the upper and lower limits if you adjust the input range!
// Setting these values incorrectly may destroy your ADC!
//                                                                ADS1015  ADS1115
//                                                                -------  -------
// ads.setGain(0x0000);  		 // 2/3x gain +/- 6.144V  1 bit = 3mV      0.1875mV (default)
// ads.setGain(0x0200);          // 1x gain   +/- 4.096V  1 bit = 2mV      0.125mV
// ads.setGain(0x0400);          // 2x gain   +/- 2.048V  1 bit = 1mV      0.0625mV
// ads.setGain(0x0600);          // 4x gain   +/- 1.024V  1 bit = 0.5mV    0.03125mV
// ads.setGain(0x0800);   	     // 8x gain   +/- 0.512V  1 bit = 0.25mV   0.015625mV
// ads.setGain(0x0A00);          // 16x gain  +/- 0.256V  1 bit = 0.125mV  0.0078125mV
  
	ads.begin();

Timer.set(1000 /* milliseconds */, true /* repeat */, function() {
	let adc0 = ads.readADC_SingleEnded(0);
	let adc1 = ads.readADC_SingleEnded(1);
	let adc2 = ads.readADC_SingleEnded(2);
	let adc3 = ads.readADC_SingleEnded(3);
	print('ADC0: ',adc0,' ADC1: ',adc1,' ADC2: ',adc2,' ADC3: ',adc3);
}, null);
