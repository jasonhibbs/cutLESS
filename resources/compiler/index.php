<?php
/* -------------- Config ------------------ */
$config = file('config.txt');
$options = array(
	"update_file" => "../css/update.txt",
	"update_delete" => "true",	
	"global_file" => "true",
	"style_base" => "../css/index.min.css",
	"script_base" => "../js/index.min.js",
	"less_folder" => "../less/",
	"css_folder" => "../css/",
	"js_folder" => "../js/",
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
//if (!file_exists($options["update_file"])) return;
//unlink($options["update_file"])

/* -------------- LESS -------------------- */
require "lessc.php";
$less = new lessc;
$options["less"] = explode(",", $options["less"]);
foreach($options["less"] as $file) {
	$file = trim($file);	
	$less->compileFile($options["less_folder"] . $file . ".less", $options["css_folder"] . $file . ".css");
}

/* -------------- CSS --------------------- */
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

/* --------------- JS -------------------- */
require 'jsshrink.php';
$input = "";
$options["js"] = explode(",", $options["js"]);
foreach($options["js"] as $file) {
	$input .= file_get_contents($options["js_folder"] . trim($file) . '.js');
}
$output = "";
$output = Minifier::minify($input);
file_put_contents($options["script_base"], $output);

?>