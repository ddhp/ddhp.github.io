<?php
/*
$totalPages = $_POST['totalPages'];
$curPage = $_POST['curPage'];
$p_now = "../view/p".$curPage.".php";
$p_now_content = file_get_contents($p_now);

$p_next_content = "";
if ($curPage != $totalPages)
{
    $nextPage = $curPage + 1;
    $p_next = "../view/p".$nextPage.".php";
    $p_next_content = file_get_contents($p_next);
}


$p_prev_content = "";
if ($curPage != 1){
    $prevPage = $curPage - 1;
    $p_prev = "../view/p".$prevPage.".php";
    $p_prev_content = file_get_contents($p_prev);
}

echo $_GET["callback"]."(".json_encode(array("p_now_content"=>$p_now_content, "p_next_content"=>$p_next_content, "p_prev_content"=>$p_prev_content)).")";
*/
$pageArr = array("p_index","p_dlinkescape","p_cathaynamecard","p_cathayvote","p_shidongyang","p_parachutetheband","p_hijack","p_webworks","p_aboutme");

$pageContentArr = array();
for ($i=0; $i<sizeof($pageArr); $i++)
{
    $p_now = "../view/".$pageArr[$i].".php";
    $p_now_content = file_get_contents($p_now);
    array_push($pageContentArr, $p_now_content);
}
echo $_GET["callback"]."(".json_encode($pageContentArr).")";
?>