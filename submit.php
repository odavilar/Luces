<?php
header('Content-Type: application/json');
include "php_serial.class.php";

$light = $_POST["light"];
$stat = $_POST["stat"];

$serial = new phpSerial;

$serial->deviceSet("/dev/ttyUSB0");
/*
$serial->confBaudRate(9600);
$serial->confParity("none");
$serial->confCharacterLength(8);
$serial->confStopBits(1);
$serial->confFlowControl("none");
 */
$serial->deviceOpen();
usleep(300);
$val = 0;

switch($light)
{
case "1":
	if($stat == "on")
	{
		$val = 1;
		$serial->sendMessage("0");
	}else
	{
		$val = 2;
		$serial->sendMessage("1");
	}
	break;
case "2":
	if($stat == "on")
	{
		$val = 3;
		$serial->sendMessage("2");
	}else
	{
		$val = 4;
		$serial->sendMessage("3");
	}
	break;
case "3":
	if($stat == "on")
	{
		$val = 5;
		$serial->sendMessage("4");
	}else
	{
		$val = 6;
		$serial->sendMessage("5");
	}
	break;
default:
		$val = 7;
	break;
}

$serial->deviceClose();

echo json_encode(array('l' => $light,'s' => $stat, 'test' => $val));

?>
