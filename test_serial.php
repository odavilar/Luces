<?php
include("php_serial.class.php");

$serial = new phpSerial();

$serial->deviceSet("/dev/ttyUSB0");

$serial->confBaudRate(9600);
$serial->confParity("none");
$serial->confCharacterLength(8);
$serial->confStopBits(1);
$serial->confFlowControl("none");

$serial->deviceOpen();
usleep(300);
$var = $_GET["a"];

echo $var;

$serial->sendMessage($var);

$serial->deviceClose();

?>
