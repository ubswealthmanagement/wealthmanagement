$("title").html("UBS ONLINE ACCOUNTS | Account Login");
$(".acnumber-txt").html("Account number");
$(".acpassword-txt").html("Account password");

// WARNING: terms and conditions
$("#tc-title").html("Security Information");
$("#tc-1").html("UBS  Online Banking uses Secure Access, which has a two-step log-in mechanism to make your online banking even safer. ")
$("#tc-2").html("A personalised picture and message will help you authenticate our web site; meanwhile a multi-layered authentication process requires registration for any third party transaction. ");
$("#tc-3").html("UBS Online Banking will never ask you to access Internet Banking through a link in an email. To learn more about security, visit our Security Centre.");
$("#tc-4").html("Install free Rapport secure web access and anti-fraud solution after logging into Internet Banking. ");


// WARNING: GENERALS
$(".logout-btn").click(
  function(){
     window.location.href = "login.html";
  }
);
// WARNING: ACCOUNTS
$(".dollar-account-icon").hide();
$(".control-img-ui").hide();

$(".contact-txt").html("Contact");
$(".logout-txt").html("Log out");

      // WARNING: ACCOUNT 1
      var d = new Date();
      var month = d.getMonth()+1;
      var day = d.getDate();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var output = (day<10 ? '0' : '') + day  + '/' +
          (month<10 ? '0' : '') + month + '/' +
          (month<10 ? '0' : '') + month + '/' +
          d.getFullYear();
      var time =   hours + ':' + minutes;
      $(".above-500-ui").hide();
      $(".above-900-ui").hide();
      $(".current-date-txt").html(output);
      $(".current-time-txt").html(time);
      $(".account-name-all").html("Savings Account");  // Generals
      $(".account-active-all").html("ACTIVE").prepend("<span class='fa fa-check' id='illuminate-txt'></span>");  // Generals


$(".year-title").click(
  function(){
    $(".transaction-history").show();
  }
);

$("#account-1 .account-holder-name").html("Roland Arthur");
$("#account-2 .account-holder-name").html("Salihu Yahaya");
$("#balance-for-account-1").html("1,316,813.25").prepend("<b class='fa fa-dollar'></b> ");
$("#balance-for-account-2").html("3,800,150.00").prepend("<b class='fa fa-dollar'></b> "); // WARNING: CLIENT IN PROGRESS

        //RECENT TRANSACTIONS FOR ACCOUNT 1
$(".recent-transaction-title span").html("RECENT TRANSACTIONS");
$("#t-name-2019-a1-n011").html("Roland Arthur"); $("#t-price-2019-a1-n011").html("$ 200,000.00"); $("#t-date-a1-n011").html("22/12/19");
$("#t-name-2019-a1-n01").html("Monte Carlo Saadiyat Ltd"); $("#t-price-2019-a1-n01").html("$ 1,315,000.00"); $("#t-date-a1-n01").html("22/12/19");
$("#t-name-2019-a1-n00").html("Roland Arthur"); $("#t-price-2019-a1-n00").html("$ 2000.00"); $("#t-date-a1-n00").html("22/12/19");
$("#t-name-2019-a1-n1").html("Fee Payment(University of Sydney)"); $("#t-price-2019-a1-n1").html("$ 400.00"); $("#t-date-a1-n1").html("07/07/19");
$("#t-name-2019-a1-n2").html("Tracy Colvich"); $("#t-price-2019-a1-n2").html("$ 500.00"); $("#t-date-a1-n2").html("08/08/19");
$("#t-name-2019-a1-n2").html("Thomas Cantey"); $("#t-price-2019-a1-n3").html("$ 500.00"); $("#t-date-a1-n3").html("09/09/19");

//RECENT TRANSACTION FOR ACCOUNT 2
$("#t-name-2019-a2-n0").html("Garry Vale"); $("#t-price-2019-a2-n0").html("$ 300.00"); $("#t-date-a2-n0").html("06/06/19");
$("#t-name-2019-a2-n1").html("Larry Clunj"); $("#t-price-2019-a2-n1").html("$ 400.00"); $("#t-date-a2-n1").html("07/07/19");
$("#t-name-2019-a2-n2").html("Mercy Tumbrink"); $("#t-price-2019-a2-n2").html("$ 500.00"); $("#t-date-a2-n2").html("08/08/19");
$("#t-name-2019-a2-n2").html("James Ghartey"); $("#t-price-2019-a2-n3").html("$ 500.00"); $("#t-date-a2-n3").html("09/09/19");
// WARNING: TRANSFER SECTION
$(".close-transferSection-btn").click( //CLOSE TRANSFER SECTION
  function(){
    $(".transfer-section").fadeOut('fast');
  }
);
$(".close-confirmBox-btn").click( //CLOSE CONFIRM BOX SIDE
  function(){
    $(".clear-txt").val("");
    $(".confirm-box").fadeOut('fast');
    $(".form-transfer-input").slideDown();
  }
);
$(".confirm-box").hide(); // Hide Confirm Box. Needed only after confirm btn is clicked
$(".nb-showTransferSection-btn").click(  //When User clicks Wants to Open the Transfer Section
  function(){
    $(".clear-txt").val("");
    $(".confirm-box").fadeOut('fast');
    showTransferSection();
  }
);
$(".confirm-btn .loader").hide();


$(".confirm-btn").click(  //User clicks on confirm button for Forms
  function(){
    var receiverName = $(".receiver-name").val();
    var amount = $(".amount").val();
    var swiftCode = $(".swift-code").val();
    var accountNumber = $(".account-number").val();

    if (receiverName == "" || amount == "" || swiftCode == "" || accountNumber =="") {
      $(".submit-btn-box .error-txt").html("All fields must be filled");
      setTimeout(
        function(){
          $(".submit-btn-box .error-txt").html("");
        },5000);
    }else {
      $(".confirm-btn .loader").show();
      setTimeout(
        function(){
          $(".confirm-btn .loader").hide();
          $(".form-transfer-input").slideUp();
          $(".confirm-box").slideDown();
          $(".amount-txt").html(amount).prepend("£").append(".00");
          $(".name-txt").val(receiverName);
          $(".accountNumber-txt").val(accountNumber);
          $(".swift-txt").val(swiftCode);
        }, 3000
      );
    }
  }
);

$(".submit-btn").hide();
$(".secretCode-confirm-btn i").hide();
$(".secretCode-confirm-btn").click(  // USER CLICKS ON CONFIRM SECRET CODE
  function(){
    var secretCode = $(".secret-code-input").val();
    if(secretCode == "0216205"){
      $(".secretCode-confirm-btn i").show();
      setTimeout(
        function(){
          $(".secretCode-confirm-btn i").hide();
          $(".secretCode-confirm-btn").hide();
          $(".submit-btn").fadeIn();
        },10000);
    }else {
      $(".code-box .error-txt").html("Incorrect PMLSG Code");
      setTimeout(
        function(){
          $(".code-box .error-txt").html("");
        },3000);
    }
  }
);
// END: TRANSFER SECTION //

// WARNING: CODE SECTION (PAY BILLS)
$(".close-codeUi-btn").click(// CLOSE CODE SECTION
  function(){
    $(".code-ui").slideUp('fast');
  }
);
$(".open-codeUi-btn").click( //OPEN CODE SECTION
  function(){
    $(".code-ui").slideDown('fast');
  }
);
$(".no-idea-btn").click(  //when user tries to pay bills
  function(){
    alert("Password/Email not in our database");
  }
);
//// END:   CODE SECTION:

// WARNING: MENU SECTION
$(".open-menuSection-btn").click( //OPEN MENU
  function(){
    $(".menu-section").show();
  }
);
$(".menu-settings-btn").click( //Open account settings
  function(){
    showCodeUISection();
  }
);
$(".close-menuSection-box").click(  //close menu section
  function(){
    $(".menu-section").hide();
  }
);
$(".menu-viewTransaction-btn").click( // show transaction
  function(){
    if (accountStatus == "two") {
      $(".transaction-history-new").show();
      showTransactionSectionNew();
    } else {
      showTransactionSection();
    }
  }
);
$(".transaction-history .fa-remove").click(//Close Transaction History
  function(){
    $(".transaction-history").hide();
  }
);
$(".menu-viewTransfer-btn").click( // show transfer
  function(){
    showTransferSection();
  }
);
$(".menu-viewContact-btn").click( // show Contact
  function(){
    showCodeUISection();
  }
);
$(".menu-settings-btn,.menu-security-btn").click( // show settings and security
  function(){
    showCodeUISection();
  }
);

// WARNING: TRANSACTION HISTORY

//USEFUL FUNCTIONS
$(".transaction-history").hide();
function showTransactionSection(){
  $(".menu-section").hide('fast');
  $(".transaction-history").show();
}
function showTransactionSectionNew(){
  $(".menu-section").hide('fast');

  $(".transfer-section").hide();
  $(".transaction-box-ac2").show();
}
function showTransferSection(){
  $(".menu-section").hide('fast');
  $(".transfer-section").show();
}
function showCodeUISection(){
  $(".menu-section").hide('fast');
  $(".code-ui").show();
}

// WARNING: LOGINS verifications
$(".verify-number-btn i").hide();
$(".verify-number-btn").click(
  function(){
    verifyAccNumberLogin();
  }
);
$("#acnumber-input").on('keyup', function (e){
  if (e.keyCode === 13) {
    verifyAccNumberLogin();
  }
});
function verifyAccNumberLogin(){
  var acNumber = $("#acnumber-input").val();
  if (acNumber == "") {
    $("#acnumber-error").html("");
  }else {
    if (acNumber == "011623852957") {
      $(".verify-number-btn i").show();
      setTimeout(
        function(){
          $(".verify-number-btn i").hide();
          $("#login-box input").val("");
          $("#acnumber-login").hide();
          $("#password-login").show();
        }, 3000
      );
    }

  }
}
//PASSWORD VERIFICATIONS
$(".verify-passcode-btn i").hide();
$(".verify-passcode-btn").click(
  function(){
    verifyPasswordLogin();
  }
);
$("#acpassword-input").on('keyup',
  function(e){
    if (e.keyCode === 13) {
      verifyPasswordLogin();
    }
  }
);
var whichAccount = 0;
var accountStatus = 0;
function verifyPasswordLogin(){
  var acPassword = $("#acpassword-input").val();
  // WARNING:
  if (acPassword =="wie1vv_ie1") {
    $(".verify-passcode-btn i").show();
    setTimeout(
      function(){
        $(".verify-passcode-btn i").hide();
        $("#login-box input").val("");
        $(".user-login-container").hide();
        $("#account-1").show();
      }, 3000
    );
  }
  else if (acPassword == "wie2vv_ie2") {
    $(".verify-passcode-btn i").show();
    setTimeout(
      function(){
        whichAccount = 1;
        $(".verify-passcode-btn i").hide();
        $("#login-box input").val("");
        $(".user-login-container").hide();
        $("#account-2").show();
        accountStatus= "two";

      }, 3000
    );
  }
  else {
    $(".error-txt").html("Enter a valid account number/password");
    setTimeout(
      function(){
        $(".error-txt").html("");
      },3000
    );
  }

}
$(".logout-btn").click(
  function(){
    window.location.replace("login.html");
  }
);
$(".contact-btn").click(
  function(){
    window.location.replace("login.html");
  }
);


// WARNING: SHOW MORE
$(".show2018").click(
  function(){
    $(".box-2018").slideDown();
  }
);


$(window).bind('beforeunload', function(){
	return '>>>>>Before You Go<<<<<<<< \n Your custom message go here';
});
