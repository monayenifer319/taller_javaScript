$(() => {
  $("#BuTransp").click(() => {
    var datas = JSON.parse(localStorage.getItem("dataSalary"));
    var smlv = Number($("#SMLV").val());
    var salary = Number($("#Salary").val());
    var dayjob = Number($("#jobDay").val());
    var datas = {
      smlv,
      salary,
      dayjob
    };

    localStorage.getItem("dataSalary", JSON.stringify(datas));
    var salaryMin = smlv * 2;
    var salaryMax = smlv * 4;
    var valday = salary / 30;
    if ((salary <= salaryMin) && (dayjob <= 30)) {
      $("#data").animate({
        "margin-left": "100vw"
      }, 2000);
      $("#transp").animate({
        "margin-left": "5vw"
      }, 2000);
//      console.log(salary + " " + dayjob + "" + smlv);
      $("#next").click(() => {
        var datas = JSON.parse(localStorage.getItem("dataSalary"));
//        console.log("oolaaaaa");
        var aidTra = Number($("#aidTrans"));
//        var salaryMin = smlv * 2;
//        var salaryMax = smlv * 4;
//        var valday = salary / 30;
        var paymeday = valday * dayjob;
        var payTrans = (aidTra / 30) * dayjob;
        var totalpay = paymeday + aidTra;
        $("#ValTrans").html(aidTra);
        $("#TransTotal").html(payTrans);
        $("#valRate").html(" 0 ");
        $("#totalRate").html(" 0 ");
        $("#valDay").html(valday);
        $("#totalDay").html(paymeday);
        $("#valSalary").html(salary);
        $("#totalSalary").html(salary);
        $("#valpay").html(totalpay);
        $("#total").html(totalpay);
        console.log(totalpay + " " + datas.salary);

      });
    } else if ((salary >= salaryMax) && (dayjob <= 30)) {
      $("#data").animate({
        "margin-left": "100vw"
      }, 2000);
      $("#ratention").animate({
        "margin-left": "5vw"
      }, 2000);
      $("#next").click(() => {
        var RATEN = Number($("#rate"));
      });
      var reten = Number($("#rate").val());
      var retention = salary * (reten / 100);
      paymeday = valday * dayjob;
      var totalpay2 = paymeday - retention;
//      if (retention >= totalpay2) {
//        console.log("Transport aid: " + 0);
//        console.log("Source retention: " + 0);
//        console.log("worked days: " + dayjob + " = " + paymeday);
////
    } else if ((salary > salaryMin) && (dayjob <= 30) && (salary < salaryMax)) {
      $("#data").animate({
        "margin-left": "100vw"
      }, 2000);
      $("#PAY").animate({
        "margin-left": "5vw"
      }, 2000);
      var paymeday = valday * dayjob;
      console.log("Transport aid: " + 0);
      console.log("Source retention: " + 0);
      console.log("worked days: " + dayjob + " = " + paymeday);
      console.log("Total payment: " + paymeday);
    } else {
//      $('#myAlert').on('closed.bs.alert', function () {
//  // do something…
//})
      alert("Error, you do not comply with the conditions of the system please check the information entered");
    }
  });
});
