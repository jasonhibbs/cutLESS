<?php

/*
	Compiler Version 1
	TODO:
		Add try catches and error reporting
		Store backups incase of errors
*/

/* -------------- Config ------------------ */
$config = file('config.txt');
$options = array(
	"dont_update" => "false",	
	"global_file" => "true",
	"style_base" => "../css/index.min.css",
	"script_base" => "../js/index.min.js",
	"less_folder" => "../less/",
	"css_folder" => "../css/",
	"js_folder" => "../js/",
	"php" => "../index.php",
	"js" => "index.js",
	"less" => "index.less",
	"css" => "index.css"
);
foreach($config as $line) {	
	if (trim($line) == "" || trim($line[0]) == "#") continue;			
	$line = explode("=", $line);
	$line[0] = trim($line[0]);		
	$options[$line[0]] = trim($line[1]);
}
if ($options["dont_update"] == "true") return;
$css_dirty = false;
$js_dirty = false;
$date = strtotime(trim(file_get_contents("history.txt")));

/* -------------- LESS -------------------- */
require "lessc.php";
$less = new lessc;
$options["less"] = explode(",", $options["less"]);
foreach($options["less"] as $file) {
	$file = trim($file);	
	if (filemtime($options["less_folder"] . $file . ".less") - $date > 0) {		
		$less->compileFile($options["less_folder"] . $file . ".less", $options["css_folder"] . $file . ".css");
		$css_dirty = true;
	}
}

/* -------------- CSS --------------------- */
if ($css_dirty) {
	require 'cssmin.php';
	$input = "";
	$options["css"] = explode(",", $options["css"]);
	foreach($options["css"] as $file) {
		$input .= file_get_contents($options["css_folder"] . trim($file) . '.css');
	}
	$compressor = new CSSmin();
	$compressor->set_memory_limit('256M');
	$compressor->set_max_execution_time(120);
	// Compress the CSS code splitting lines after a specific column (2000) and
	// store the result in a variable
	$output = $compressor->run($input, 2000);
	// You can change any PHP configuration option between run() calls
	// and those will be applied for that run
	$compressor->set_pcre_backtrack_limit(3000000);
	$compressor->set_pcre_recursion_limit(150000);
	// Do whatever you need with the compressed CSS code
	file_put_contents($options["style_base"], $output);
}

/* --------------- JS -------------------- */
require 'jsshrink.php';
$input = "";
$options["js"] = explode(",", $options["js"]);
foreach($options["js"] as $file) {
	if (filemtime($options["js_folder"] . trim($file) . '.js') - $date > 0) {
		$js_dirty = true;
		$input .= file_get_contents($options["js_folder"] . trim($file) . '.js');
	}
}
if ($js_dirty) {
	$output = "";
	$output = Minifier::minify($input);
	file_put_contents($options["script_base"], $output);
}

/* --------------- PHP/HTML ----------------*/
if ($js_dirty || $css_dirty) {
	//Update history
	$t = time();
	file_put_contents("history.txt", $t);
	
	//Update php/html
	$options["php"] = explode(",", $options["php"]);
	foreach($options["php"] as $file) {
		$input = file_get_contents(trim($file));		
		$output = str_replace("?v=" . $date, "?v=" . $t, $input);
		$output = str_replace("?v=0", "?v=" . $t, $input);		
		file_put_contents(trim($file), $output);		
	}
}
?>