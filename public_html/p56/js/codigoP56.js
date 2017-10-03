$(() => {
  retention = 0;
  aidTra = 0;
  payTrans = 0;
  $("#BuTransp").click(() => {
    var smlv = Number($("#SMLV").val());
    salary = Number($("#Salary").val());
    dayjob = Number($("#jobDay").val());
    var salaryMin = smlv * 2;
    var salaryMax = smlv * 4;
    var valday = salary / 30;
    paymeday = valday * dayjob; // pago segun segun los dias trabajados
    if ((salary <= salaryMin) && (dayjob <= 30)) {
      $("#data").animate({
        "margin-left": "100vw"
      }, 2000);
      $("#transp").animate({
        "margin-left": "5vw"
      }, 2000);
//      console.log(salary + " " + dayjob + "" + smlv);
      $(".next").click(() => {
        aidTra = Number($("#aidTrans"));// auxilio de transporte
        payTrans = (aidTra / 30) * dayjob; //transporte segun los dias trabajados
        totalpay = paymeday + payTrans; // pago total
      });
    } else if ((salary >= salaryMax) && (dayjob <= 30)) {
      $("#data").animate({
        "margin-left": "100vw"
      }, 2000);
      $("#ratention").animate({
        "margin-left": "5vw"
      }, 2000);
      $(".next").click(() => {
        reten = Number($("#rate").val());
        retention = salary * (reten / 100);
        totalpay = paymeday - retention;
      });
    } else if (retention >= totalpay) {
      retention = 0;
    } else {
//      $('#myAlert').on('closed.bs.alert', function () {
//  // do something…
//})
      alert("Error, you do not comply with the conditions of the system please check the information entered");
    }
  });
  $(".next").click(() => {
    var datas = {
      salary,
      dayjob,
      retention,
      aidTra,
      payTrans,
      paymeday,
      totalpay
    };
    $("#modal").modal('show');
    $("#buGuardar").click(() => {

    });
    $("#buImprim").click(() => {

    });
//        $("#ValTrans").html(aidTra);
//        $("#TransTotal").html(payTrans);
//        $("#valRate").html(" 0 ");
//        $("#totalRate").html(" 0 ");
//        $("#valDay").html(valday);
//        $("#totalDay").html(paymeday);
//        $("#valSalary").html(salary);
//        $("#totalSalary").html(salary);
//        $("#valpay").html(totalpay);
//        $("#total").html(totalpay);
//        console.log(totalpay + " " + datas.salary);

  });
});
