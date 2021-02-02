function validateLogin(event){
    
    var elements=event.currentTarget;
    
    var a = elements[0].value;
    var b = elements[1].value;
    
    
    var result = true;    
        
    var email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    var pswd_v = /^(?!.* ).{8,}/;
    
    document.getElementById("id_emailErr").innerHTML ="";
    document.getElementById("id_pwdErr").innerHTML ="";
    
    //email can not be empty or wrong format
    if (a==null || a==""||!email_v.test(a))
        {	   
	   document.getElementById("id_emailErr").innerHTML="Email is empty or invalid(example: cs215@uregina.ca)";
           result = false;
        }
    
    if(b.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!pswd_v.test(b)){
        document.getElementById("id_pwdErr").innerHTML="Your Password is less then 8 characters or contain whiteSpace";
       result = false;
        }
    }
    else{
        document.getElementById("id_pwdErr").innerHTML="Please enter your password";
       result = false;
    }
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}



function validateSignUp(event){
     var elements=event.currentTarget;
    
     var a = elements[0].value;
    var b = elements[1].value;
    var c = elements[2].value;
    var d = elements[3].value;
     var e = elements[4].value;
     var f = elements[5].value;
     //var g = elements[3].value;
    
    
    var fn_v = /^(?!.* )/;
     var ln_v = /^(?!.* )/;
    var email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    var pwd_v = /^(?!.* )(?=.*\d).{8,}/;
    //var re_pswd_v = /^(?!.* ).{8,}/;
    var bd_v = /^(\d{4})-(\d{2})-(\d{2})/;
    
     document.getElementById("id_fNameErr").innerHTML ="";
    document.getElementById("id_lNameErr").innerHTML ="";
    document.getElementById("id_emailErr").innerHTML ="";
    document.getElementById("id_pwdErr").innerHTML ="";
    document.getElementById("id_rePwdErr").innerHTML ="";
    document.getElementById("id_birthdayErr").innerHTML ="";
    
    
    if(a.length>0){
        
        if(!fn_v.test(a)){
            alert(a);
        document.getElementById("id_fNameErr").innerHTML="No leading or trailing Spaces";
       result = false;
        }
    }
    else{
        document.getElementById("id_fNameErr").innerHTML="Please enter your firstName";
       result = false;
    }
    
    if(b.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!ln_v.test(b)){
        document.getElementById("id_lNameErr").innerHTML="No leading or trailing Spaces";
       result = false;
        }
    }
    else{
        document.getElementById("id_lNameErr").innerHTML="Please enter your lastName";
       result = false;
    }
    
    if(c.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!email_v.test(c)){
        document.getElementById("id_emailErr").innerHTML="invalid email format";
       result = false;
        }
    }
    else{
        document.getElementById("id_emailErr").innerHTML="Please enter your email";
       result = false;
    }
    
    if(d.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!pwd_v.test(d)){
        document.getElementById("id_pwdErr").innerHTML="password must be 8 characters long and must contain atleat one digit";
       result = false;
        }
    }
    else{
        document.getElementById("id_pwdErr").innerHTML="Please enter your password";
       result = false;
    }
    
    if(e.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(e !== d ){
        document.getElementById("id_rePwdErr").innerHTML="Does your match your password";
       result = false;
        }
    }
    else{
        document.getElementById("id_rePwdErr").innerHTML="Please confirm your password";
       result = false;
    }
    
    if(f.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!bd_v.test(f)){
        document.getElementById("id_birthdayErr").innerHTML="Enter a proper date format(YYYY-MM-DD)";
       result = false;
        }
    }
    else{
        document.getElementById("id_birthdayErr").innerHTML="Please enter your date of birth";
       result = false;
    }
    
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}


function validateAddCategory(event){
    
     var elements=event.currentTarget;
    
    var a = elements[0].value;
    var b = elements[1].value;
    
    
    var result = true;   
    
    document.getElementById("id_cNameErr").innerHTML="";
    document.getElementById("id_cDesErr").innerHTML="";
    
    if (a==null || a=="")
        {	   
	   document.getElementById("id_cNameErr").innerHTML="Please enter category Name";
           result = false;
        }
    
    
    if (b==null || b=="")
        {	   
	   document.getElementById("id_cDesErr").innerHTML="Please enter Description";
           result = false;
        }
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}


function deleteCtegory (event){
  var categoryName =  event.target.getAttribute('data-product');
    //var qty=  event.currentTarget.parent().siblings('td.pqty').html();
    alert(categoryName);
}


function countCharacters (event){
    var len= event.target.value.length;
     if (len >= 150) {
          document.getElementById("id_pDesErr").innerHTML ="No more than 150 characters";
        } else {
          document.getElementById("charNum").innerHTML=150 - len;
        }
    
}

function validateAddProduct(event){
    
    var elements=event.currentTarget;
    
     var a = elements[0].value;
    var b = elements[1].value;
    var c = elements[2].value;
    var d = elements[3].value;
     var e = elements[4].size; 
     var f = elements[5].value;
    
    var result = true;   
    
    var pn_v = /^(?!.* )/;
     var p_v = /\.\d{2}$/g;
   // var qty_v = /^(?=.*\d).{0,99}/;
   // var img_v = e.files[0].size / 1024 / 1024;
    var pDes_v = /^(\d{4})-(\d{2})-(\d{2})/;
    
     document.getElementById("id_pNameErr").innerHTML ="";
    document.getElementById("id_priceErr").innerHTML ="";
    document.getElementById("id_categErr").innerHTML ="";
    document.getElementById("id_qtyErr").innerHTML ="";
    document.getElementById("id_imgErr").innerHTML ="";
    document.getElementById("id_pDesErr").innerHTML ="";
    
    if(f.length<0){
        document.getElementById("id_pDesErr").innerHTML="Enter Product Description";
      result = false;    
    }
   if(f.length>150){
         document.getElementById("id_pDesErr").innerHTML="No more than 150 characters";
       result = false;
    }
    
    
     if(a.length>0){
        
        if(!pn_v.test(a)){
        document.getElementById("id_pNameErr").innerHTML="No leading or trailing Spaces";
       result = false;
        }
    }
    else{
        document.getElementById("id_pNameErr").innerHTML="Please enter productName";
        result = false;
    }
    
    if(d.length>0){
        
        if(d<0 || d>99){
        document.getElementById("id_qtyErr").innerHTML="Enter quantity between 0 to 99";
       result = false;
        }
    }
    else{
        document.getElementById("id_qtyErr").innerHTML="Please enter quantity";
        result = false;
    }
    
    
    if(b.length>0){
        
        if(!p_v.test(b)){
        document.getElementById("id_priceErr").innerHTML="Enter correct price format eg: 00.00";
       result = false;
        }
    }
    else{
        document.getElementById("id_priceErr").innerHTML="Please enter price";
        result = false;
    }
    
    if(e/ 1024 / 1024 >2){
        document.getElementById("id_pimgErr").innerHTML="File size exceeds 2 MB";
       result = false;
    }
    
    if(c === "0"){
        document.getElementById("id_categErr").innerHTML="please choose a category";
       result = false;
    }
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
    else{
    	
    	var data2 = {
    			productName: a,
    			price: b,
    			category: c,
    			pNotes: f,
    			quantity: d,
    			image: e
    		    };
    	$.ajax({ url: "php/serverSide.php?check=addCategory",
  		  type: 'post',
  		  dataType: 'json',
  		  data:data2,
  	          context: document.body,
  	          success: displayJsonData
  	        
  	     });
  	     
       }
    
    
    function displayJsonData(result){
         if(result[0].errmsg =="no"){
        	 alert(result[0].msg);
         }
         else{
        	 alert(result[0].msg);
         }
    }
}
    



function addToWishList(event){

   //var categoryName =  event.target.getAttribute('data-name');
    var categoryName =  event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;
    alert(categoryName);
    //event.preventDefault();
}

function validateQuantity(event){
    //alert("here");
    
    //var categoryName =  event.target.closest('input').value;
   var categoryName =  event.target.parentNode.parentNode.firstElementChild.lastElementChild.value;
    alert(categoryName);
    //event.preventDefault();
}


function validateCart(event){
    
   var result = true;   
    
    var inputValue=event.currentTarget.value;
    
    var error=event.target.parentNode.lastElementChild;
    
    error.innerHTML="";
    
    //var qty_v = /^(?=.*\d).{0,99}/;
    
    if(inputValue<1||inputValue>99){
        error.innerHTML="between 1 and 99";
        result = false;
    } else {
        calcTotal();
    }
    
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
    
    //alert("here");
}

function calcTotal(){
    
    let totalDiv = document.getElementById("total");
    let allPricesArray = document.getElementsByClassName("pprice");
    let q = document.getElementsByClassName("qty");
    let allPrices = 0;
    
    //need to convert the HTML Array none in Array
    Array.prototype.forEach.call(allPricesArray, (item, i) => {
        allPrices += (parseFloat(item.innerText.replace("$", "")))*parseInt(q[i].value);
    });
    
    let gst = allPrices * 0.05;
    let pst = allPrices * 0.06;
    let shipping = 4.00;
    let total = allPrices+gst+pst+shipping;
    
    
    let html='<p id="sub-total"><strong>Sub Total</strong>: <span id="stotal">'+allPrices.toFixed(2)+'</span></p>';
    html +='<p id="sub-total"><strong>GST</strong>: <spanid="stotal">'+gst.toFixed(2)+'</span></p>';
    html +='<p id="sub-total"><strong>PST SK</strong>: <spanid="stotal">'+pst.toFixed(2)+'</span></p>';
    html +='<p id="sub-total"><strong>shipping</strong>: <spanid="stotal">'+shipping.toFixed(2)+'</span></p>';
    html +='<p id="sub-total"><strong>total</strong>: <spanid="stotal">'+total.toFixed(2)+'</span></p>';
    
    
    
    totalDiv.innerHTML = html;
}


function removeProductFromCart(event){
    var propductName =  event.target.parentNode.parentNode.firstElementChild.innerHTML;
    alert(propductName);
    
    
    event.preventDefault();
    
}


function validateEditProfile(event){
   // alert("here");
    var elements=event.currentTarget;
    
     var a = elements[0].value;
    var b = elements[1].value;
    var c = elements[2].value;
    var d = elements[3].value;
     var e = elements[4].value;
     var f = elements[5].value;
     //var g = elements[3].value;
    
    
    var fn_v = /^(?!.* )/;
     var ln_v = /^(?!.* )/;
    var email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    var pwd_v = /^(?!.* )(?=.*\d).{8,}/;
    //var re_pswd_v = /^(?!.* ).{8,}/;
    var bd_v = /^(\d{4})-(\d{2})-(\d{2})/;
    
     document.getElementById("id_fNameErr").innerHTML ="";
    document.getElementById("id_lNameErr").innerHTML ="";
    document.getElementById("id_emailErr").innerHTML ="";
    document.getElementById("id_pwdErr").innerHTML ="";
    document.getElementById("id_rePwdErr").innerHTML ="";
    document.getElementById("id_birthdayErr").innerHTML ="";
    
    
    if(a.length>0){
        
        if(!fn_v.test(a)){
            alert(a);
        document.getElementById("id_fNameErr").innerHTML="No leading or trailing Spaces";
       result = false;
        }
    }
    else{
        document.getElementById("id_fNameErr").innerHTML="Please enter your firstName";
       result = false;
    }
    
    if(b.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!ln_v.test(b)){
        document.getElementById("id_lNameErr").innerHTML="No leading or trailing Spaces";
       result = false;
        }
    }
    else{
        document.getElementById("id_lNameErr").innerHTML="Please enter your lastName";
       result = false;
    }
    
    if(c.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!email_v.test(c)){
        document.getElementById("id_emailErr").innerHTML="invalid email format";
       result = false;
        }
    }
    else{
        document.getElementById("id_emailErr").innerHTML="Please enter your email";
       result = false;
    }
    
    if(d.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!pwd_v.test(d)){
        document.getElementById("id_pwdErr").innerHTML="password must be 8 characters long and must contain atleat one digit";
       result = false;
        }
    }
    else{
        document.getElementById("id_pwdErr").innerHTML="Please enter your password";
       result = false;
    }
    
    if(e.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(e !== d ){
        document.getElementById("id_rePwdErr").innerHTML="Does your match your password";
       result = false;
        }
    }
    else{
        document.getElementById("id_rePwdErr").innerHTML="Please confirm your password";
       result = false;
    }
    
    if(f.length>0){
        // document.getElementById("id_pwdErr").innerHTML ="";
        if(!bd_v.test(f)){
        document.getElementById("id_birthdayErr").innerHTML="Enter a proper date format(YYYY-MM-DD)";
       result = false;
        }
    }
    else{
        document.getElementById("id_birthdayErr").innerHTML="Please enter your date of birth";
       result = false;
    }
    
    
    //prevent form to be submitted if one of above field is invalid		
    if(result == false )
        {    
            event.preventDefault();
        }
}
