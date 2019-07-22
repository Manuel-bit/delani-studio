$(document).ready(function(){
  var design = $(".click1");
  var dev = $(".click2");
  var pManage = $(".click3");
  design.click(function(){
    $("#design").toggle();
    $("#designheader").css("font-weight","bold");
    $("#designText").toggle();
    });
  dev.click(function(){
    $("#development").toggle();
    $("#developmentheader").css("font-weight","bold");
    $("#developmenttext").toggle();
    });
  pManage.click(function(){
    $("#management").toggle();
    $("#managementheader").css("font-weight","bold");
    $("#managementtexts").toggle();
    });
var hovs =["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8"];
   hovs.forEach(function(hov){
     $("#"+hov).hover(function(e){
      $(this).width(1.25*$(this).width());
      $(this).height(1.25*$(this).height());
      $(this).fadeTo("fast",0.8);
     },function(){
      $(this).width(0.8*$(this).width());
      $(this).height(0.8*$(this).height());
      $(this).fadeTo("slow",1.2);
   });
 });
 $("#myform").submit(function(e){
    e.preventDefault();
    var name=$("#name").val();
    var email=("#email").val();
    var textarea=("textarea").val();
    if (name !== "" && email !== ""){
           alert (name +" we have received your message. Thank you for reaching out to us.");
         }else{
      }
      return false;
  });
});
